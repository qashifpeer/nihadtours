"use client"
// components/FeedbackForm.tsx
import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // const response = await fetch('/api/sendFeedback')
    // console.log(await response.json())

    try {
      const response = await fetch('/api/sendFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, feedback }),
      });

      if (response.ok) {
        setStatus('Feedback sent successfully!');
        setName('');
        setPhone('');
        setFeedback('');
      } else {
        setStatus('Failed to send feedback. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending feedback.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feedback Form</h2>
      {status && <p className="text-center text-sm text-gray-600 mb-4">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-black"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Feedback</label>
          <textarea
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-black"
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
