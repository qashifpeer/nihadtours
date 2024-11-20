"use client";
// components/FeedbackForm.tsx
import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);  // Add loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when request starts

    try {
      const response = await fetch('/api/sendFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email, arrivalDate }),
      });

      if (response.ok) {
        setStatus('Quote Received Successfully, We will be in touch with you very soon!');
        setName('');
        setPhone('');
        setEmail('');
        setArrivalDate('');
      } else {
        setStatus('Failed to send feedback. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending feedback.');
    } finally {
      setLoading(false); // Set loading to false when request completes
    }
  };

  return (
    <div className="w-full mx-auto bg-white shadow-md rounded-lg p-4 hover:opacity-95 transition-all duration-300">
      
      {status && <p className="text-center text-sm mb-4 text-green-800">{status}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2  justify-between items-center">
        <div className=''>
          <input
            type="text"
            placeholder='Name'
            className="w-52 border-2 border-orange-800 rounded-3xl shadow-sm text-black py-2 px-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder='Phone'
            className="w-52 border-2 border-orange-800 rounded-3xl shadow-sm text-black py-2 px-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder='Email'
            className="w-52 border-2 border-orange-800 rounded-3xl shadow-sm text-black py-2 px-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <label className="block text-sm font-medium text-gray-500">Arrival Date</label>
        <div>
          <input
            type="date"
            className="border-2 border-orange-800 w-52 rounded-3xl p-2 shadow-sm text-black uppercase"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}  // Disable button when loading is true
          className={`border-2 border-orange-800 w-40 rounded-3xl p-2 shadow-sm uppercase ubuntu-bold transition-all delay-75 duration-200 ${
            loading ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'text-orange-800 hover:bg-orange-700 hover:text-white'
          }`}
        >
          {loading ? 'Sending...' : 'Get A Quote'}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
