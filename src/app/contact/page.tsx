// pages/contact.tsx
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-10 max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">Contact Us</h1>
        <div className="space-y-4">
          {/* Email Section */}
          <div className="flex items-center">
            <div className="bg-blue-500 p-3 rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12V16m0 0v4m0-4h4m-4 0H8m4 0v-4" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-lg font-medium text-gray-700">Email</p>
              <p className="text-gray-600">abc@gmail.com</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex items-center">
            <div className="bg-green-500 p-3 rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12V16m0 0v4m0-4h4m-4 0H8m4 0v-4" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-lg font-medium text-gray-700">Phone</p>
              <p className="text-gray-600">+91 2333433334</p>
            </div>
          </div>

          {/* Address Section */}
          <div className="flex items-center">
            <div className="bg-red-500 p-3 rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12V16m0 0v4m0-4h4m-4 0H8m4 0v-4" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-lg font-medium text-gray-700">Address</p>
              <p className="text-gray-600">Model Town Sopore, Jammu and Kashmir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
