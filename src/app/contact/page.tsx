"use client";
import {
  FaLocationArrow,
  FaEnvelopeOpen,
  FaPhoneVolume,
} from "react-icons/fa6";

import React, { useState } from "react";

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ name, phone, email, arrivalDate }),
      });

      if (response.ok) {
        setStatus(
          "Quote Received Successfully, We will be in touch with you very soon!"
        );
        setName("");
        setPhone("");
        setEmail("");
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
    <div className="bg-black">
      <div className="mx-auto bg-slate-100 shadow-md rounded-lg max-w-[80%] w-full">
        <h1 className="text-3xl text-center font-semibold text-gray-800 mb-6 max-w-lg underline uppercase pt-4">
          Contact Us
        </h1>
        {status && <p className="text-center text-sm mb-4 text-green-800">{status}</p>}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-2  justify-center items-center"
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
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-52 border-2 border-orange-800 rounded-3xl shadow-sm text-black py-2 px-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            className={`border-2 border-orange-800 w-40 rounded-3xl p-2 ml-4 shadow-sm uppercase ubuntu-bold transition-all delay-75 duration-200 ${
              loading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "text-orange-800 hover:bg-orange-700 hover:text-white"
            }`}
          >
            {loading ? "Sending..." : "Get A Callback"}
          </button>
        </form>

        <p className="border-2 border-slate-200 mt-4"></p>

        {/* contact page section */}
        <div className="flex items-center justify-center">
          <div className="bg-slate-100 shadow-md rounded-lg px-8 py-2 w-full">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              {/* Email card */}
              <div className="flex flex-col justify-center items-center bg-slate-200 w-72 py-8 rounded-lg min-h-72 hover:translate-x-4 hover:-translate-y-4 transition-all duration-300">
                <div className="text-orange-700 p-3 rounded-full  text-4xl">
                  <FaEnvelopeOpen />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-2xl font-bold text-slate-700">
                    Email Address
                  </p>
                  <p className="text-gray-600">info@nihadtours.com</p>
                  <p className="text-gray-600">nihadtourandtravel@gmail.com</p>
                </div>
              </div>

              {/* Phone card */}

              <div className="flex flex-col justify-center items-center bg-slate-200 w-72 py-8 rounded-lg min-h-72 hover:translate-x-4 hover:-translate-y-4 transition-all duration-300">
                <div className="text-blue-700 p-3 rounded-full  text-4xl">
                  <FaPhoneVolume />
                </div>
                <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-slate-700">
                Phone</p>
                  <p className="text-gray-600">+91 7006031831</p>
                </div>
              </div>

              {/* Address card */}
              <div className="flex flex-col justify-center items-center bg-slate-200 w-72 py-8 rounded-lg min-h-72 hover:translate-x-4 hover:-translate-y-4 transition-all duration-300">
                <div className="text-green-700 p-3 rounded-full  text-4xl">
                  <FaLocationArrow />
                </div>
                <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-slate-700">
                Office Location
                  </p>
                  <p className="text-gray-600">
                    Bemina Srinagar, Jammu and Kashmir
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
