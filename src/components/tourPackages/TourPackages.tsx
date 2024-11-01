import React from "react";
import Link from "next/link";

interface PackageCardProps {
  imageUrl: string;
  title: string;
  price: string;
  days: string;
  link: string;
}

const packagesData: PackageCardProps[] = [
  { imageUrl: "/images/v1.jpg", title: "Tempting Srinagar", price: "₹7999 / person", days: "4 days", link: "/srinagar1" },
  { imageUrl: "/images/v2.jpg", title: "Splendid Kashmir", price: "₹8999 / person", days: "5 days", link: "/srinagar2" },
  { imageUrl: "/images/v3.jpg", title: "Kashmir Delight", price: "₹6999 / person", days: "3 days", link: "/srinagar3" },
  { imageUrl: "/images/v4.jpg", title: "Paradise Kashmir", price: "₹9999 / person", days: "6 days", link: "/srinagar4" }
];

const TourPackages: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {packagesData.map((pkg, index) => (
        <Link key={index} href={pkg.link}>
          <div
            className="relative w-full h-64 bg-cover bg-center rounded-lg shadow-lg cursor-pointer"
            style={{ backgroundImage: `url(${pkg.imageUrl})` }}
          >
            <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded text-sm font-medium text-gray-800">
              {pkg.days}
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{pkg.title}</h3>
              <p className="text-sm">{pkg.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TourPackages;
