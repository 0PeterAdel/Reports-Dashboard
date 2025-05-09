import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Upload } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your AI assistant. Please upload a document to start chatting.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    if (!files) {
      alert('Please select at least one file.');
      return;
    }

    const formData = new FormData();
    for (let file of files) {
      formData.append('files', file);
    }

    try {
      setIsLoading(true);
      const response = await fetch('http://51.44.18.63:8080/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload files');
      }

      const result = await response.json();
      alert(result.status); // "Files uploaded and indexed successfully"
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Failed to upload files. Please try again.');
    } finally {
      setIsLoading(false);
      setFiles(null); // Clear file input
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://51.44.18.63:8080/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          history: messages.map(msg => ({
            role: msg.type,
            content: msg.content,
          })),
          system_prompt: 'You are a helpful assistant.',
          temperature: 0.7,
          max_new_tokens: 256,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No readable stream available');
      }

      const decoder = new TextDecoder();
      let botResponse = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        botResponse += chunk;

        // Update UI incrementally
        setMessages(prev => {
          const updatedMessages = [...prev];
          const lastMessage = updatedMessages[updatedMessages.length - 1];
          if (lastMessage.type === 'bot') {
            lastMessage.content = botResponse;
          } else {
            updatedMessages.push({
              id: (Date.now() + 1).toString(),
              type: 'bot',
              content: botResponse,
              timestamp: new Date(),
            });
          }
          return updatedMessages;
        });
      }

      // Finalize the bot message
      setMessages(prev => {
        const updatedMessages = [...prev];
        const lastMessage = updatedMessages[updatedMessages.length - 1];
        if (lastMessage.type !== 'bot') {
          updatedMessages.push({
            id: (Date.now() + 1).toString(),
            type: 'bot',
            content: botResponse,
            timestamp: new Date(),
          });
        }
        return updatedMessages;
      });
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'Sorry, an error occurred while processing your request. Please try again later.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex flex-col max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg flex-1 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Bot className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">AI Assistant</h2>
                <p className="text-sm text-gray-500">Always here to help</p>
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div className="p-4 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center gap-3">
              <input
                type="file"
                multiple
                accept=".pdf,.txt"
                onChange={handleFileChange}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                disabled={isLoading}
              />
              <button
                onClick={handleUpload}
                disabled={isLoading || !files}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Upload className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`p-2 rounded-lg flex-shrink-0 ${
                    message.type === 'user' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}
                >
                  {message.type === 'user' ? (
                    <User className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Bot className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                <div
                  className={`rounded-lg p-4 max-w-[80%] ${
                    message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <ReactMarkdown className="prose prose-sm max-w-none">{message.content}</ReactMarkdown>
                  <div
                    className={`text-xs mt-2 ${
                      message.type === 'user' ? 'text-blue-200' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Bot className="w-5 h-5 text-gray-600" />
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <Loader2 className="w-5 h-5 animate-spin text-gray-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 flex-shrink-0">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}