"use client";
// components/FeedbackForm.tsx
import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when request starts

    try {
      const response = await fetch("/api/sendFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, arrivalDate }),
      });

      if (response.ok) {
        setStatus(
          "Quote Received Successfully, We will be in touch with you very soon!"
        );
        setName("");
        setPhone("");
        setArrivalDate("");
      } else {
        setStatus("Failed to send feedback. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending feedback.");
    } finally {
      setLoading(false); // Set loading to false when request completes
    }
  };

  return (
    <div className="mx-auto bg-white shadow-md rounded-lg p- max-w-lg w-full">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6 max-w-lg underline uppercase pt-4">
            Contact Us
          </h1>
      {status && <p className="text-center text-sm mb-4">{status}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  gap-2  justify-between items-center"
      >
        <div className="">
          <input
            type="text"
            placeholder="Name"
            className="w-52 border-2 border-orange-800 rounded-3xl shadow-sm text-black py-2 px-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone"
            className="w-52 border-2 border-orange-800 rounded-3xl shadow-sm text-black py-2 px-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <label className="block text-sm font-medium text-gray-500">
          Arrival Date
        </label>
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
          disabled={loading} // Disable button when loading is true
          className={`border-2 border-orange-800 w-40 rounded-3xl p-2 mt-5 shadow-sm uppercase ubuntu-bold transition-all delay-75 duration-200 ${
            loading
              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
              : "text-orange-800 hover:bg-orange-700 hover:text-white"
          }`}
        >
          {loading ? "Sending..." : "Get A Callback"}
        </button>
      </form>

      <p className="border-2 border-slate-400 mt-4"></p>

      {/* contact page section */}
      <div className="flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg px-8 py-2 max-w-lg w-full">
          
          <div className="space-y-4">
            {/* Email Section */}
            <div className="flex items-center">
              <div className="bg-blue-500 p-3 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12V16m0 0v4m0-4h4m-4 0H8m4 0v-4"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-700">Email</p>
                <p className="text-gray-600">info@nihadtours.com</p>
                <p className="text-gray-600">nihadtourandtravel@gmail.com</p>
              </div>
            </div>

            {/* Phone Section */}
            
            <div className="flex items-center">
              <div className="bg-green-500 p-3 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12V16m0 0v4m0-4h4m-4 0H8m4 0v-4"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-700">Phone</p>
                <p className="text-gray-600">+91 7006031831</p>
              </div>
            </div>

            {/* Address Section */}
            <div className="flex items-center pb-4">
              <div className="bg-red-500 p-3 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12V16m0 0v4m0-4h4m-4 0H8m4 0v-4"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-700">Address</p>
                <p className="text-gray-600">
                  Bemina Srinagar, Jammu and Kashmir
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
