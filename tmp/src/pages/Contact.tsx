import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">contact@data-dynamos.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium">123 Data Street, Analytics City, 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Office Hours</h2>
            <div className="space-y-2">
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}