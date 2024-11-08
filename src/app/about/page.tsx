// pages/contact.tsx

import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-5 bg-black">
      <div className="shadow-md rounded-lg max-w-3xl w-full p-8">
        <h1 className="text-4xl font-semibold text-center text-gray-200 mb-8">
          About Us
        </h1>

        {/* Section 1: What Do We Believe? */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">
            What Do We Believe?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            At <span className="font-semibold">Nihad Tour and Travels</span>, we
            believe in the transformative power of travel. Our mission is to
            share the beauty and serenity of Kashmir with travellers from across
            India. We exist to provide curated, personalised travel experiences
            that showcase both the iconic and hidden gems of Kashmir. We believe
            that every journey is an opportunity to create lasting memories, and
            our goal is to make every trip to Kashmir an unforgettable
            adventure.
          </p>
          <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">
            Values and Mission
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Our mission is simple: to be the leading provider of Kashmir travel
            experiences, offering well-rounded, immersive packages that cater to
            every traveller—whether it is couples on their honeymoon, families
            exploring together, or adventurers seeking new thrills. We are
            guided by values of integrity, quality service, and a passion for
            delivering unique, authentic experiences. We prioritise customer
            satisfaction, attention to detail, and sustainable tourism to
            preserve the natural beauty of Kashmir for generations to come.
          </p>
          <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">
            Mini Manifesto
          </h3>
          <p className="text-gray-400 leading-relaxed">
            We are not just selling packages; we are crafting journeys. At{" "}
            <span className="font-semibold">Nihad Tour and Travels</span>, we
            believe that travel should inspire, rejuvenate, and bring you closer
            to the wonders of the world. Kashmir is more than just a
            destination—it is an experience waiting to be discovered, and were
            here to guide you every step of the way.
          </p>
        </div>

        {/* Section 2: Who is Behind This Brand? */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">
            Who is Behind This Brand?
          </h2>
          <div className="space-y-8">
            {/* Founder Ali Mohd Wani */}
            <div className="flex items-center space-x-6">
              <Image
                height={400}
                width={400}
                src="/images/people/md.png"
                alt="Ali Mohd Wani"
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-200">
                  Ali Mohd Wani (CEO)
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  As the visionary behind the company, Ali leads the overall
                  strategy and operations, ensuring that our travel services
                  consistently deliver excellence.
                </p>
              </div>
            </div>

            {/* Founder Owais */}
            <div className="flex items-center space-x-6">
              <Image
                height={400}
                width={400}
                src="/images/people/owais.png"
                alt="Owais"
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-200">
                  Owais (Chief Marketing Officer)
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Owais drives our marketing efforts, making sure our offerings
                  reach the right audience through creative campaigns and
                  strategic partnerships.
                </p>
              </div>
            </div>

            {/* Sales Head */}
            <div className="flex items-center space-x-6">
              <Image
                height={400}
                width={400}
                src="/images/people/farman.png"
                alt="furqan"
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-200">
                  Furqan Peer (Sales Head)
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Furqan is responsible for leading our sales team, crafting
                  personalised travel solutions for every customer, and ensuring
                  a smooth journey from inquiry to booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
