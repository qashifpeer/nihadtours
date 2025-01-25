// pages/contact.tsx

import Image from "next/image";

const ResolutionPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-5">
      <div className="shadow-md rounded-lg max-w-3xl w-full p-8">
        <h1 className="text-4xl font-semibold text-center text-gray-200 mb-8">
        The Resolution
        </h1>

        {/* Section 1: What Do We Believe? */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
          What Problem Do We Solve? And How?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
          We solve the challenge of finding reliable, personalised, and memorable travel experiences in Kashmir. Many travellers face the problem of navigating through overwhelming options and unreliable services when planning their trips. At Nihad Tour and Travels, we offer carefully curated packages that cover all the details—so our customers can focus on enjoying their journey without the stress of planning.

          </p>
          <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">
          Value Proposition
                    </h3>
          <p className="text-gray-400 leading-relaxed">
          Our value lies in delivering authentic Kashmir experiences that go beyond the typical tourist spots. We provide customised packages that cater to couples, families, and adventure seekers. From romantic honeymoons with special touches to family adventures in off-beat locations, we ensure every trip is special. Our all-in-one service includes accommodation, guided tours, and unique experiences like room decorations and candlelight dinners.
          </p>
          <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">
          Differentiation
          </h3>
          <p className="text-gray-400 leading-relaxed">
          What sets us apart from competitors is our deep local expertise and personalised approach. Unlike other travel agencies, we specialise solely in Kashmir, which means we have the best connections, know the hidden gems, and can offer exclusive experiences. Our team’s passion for delivering high-quality, seamless travel experiences is reflected in the attention to detail we provide to each client.

          </p>
        </div>

       
      </div>
    </div>
  );
};

export default ResolutionPage;
