// app/packages/[slug]/page.tsx
import { destinationsData } from "@/constants/destinations";
import Image from "next/image";

interface DestinationProps {
  params: { slug: string; title: string };
}

// Generate static paths for each package
export function generateStaticParams() {
  return destinationsData.map((dest) => ({
    slug: dest.slug,
  }));
}

export default async function DestinationPage({ params }: DestinationProps) {
  const destinationData = destinationsData.find(
    (dest) => dest.slug === params.slug
  );

  if (!destinationData) {
    return <div>No Destination Found</div>;
  }

  return (
    <div className="  bg-black min-h-screen">
      <div className="container px-4 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4"></h1>
        <div className="flex justify-center items-center w-3/4">
          <Image
            src={destinationData.imageUrl}
            alt={destinationData.desc}
            width={300}
            height={100}
            className="cover w-full h-72 rounded"
          />
        </div>
        <div className=" flex justify-center items-center gap-2 bg-gradient-to-r from-orange-800 to-slate-900 mt-4 w-3/4">
          <h1 className="text-xl text-slate-100   uppercase font-kalam py-2">
            {destinationData.title}
          </h1>
          {/* <FaCanadianMapleLeaf className="text-xl" /> */}
        </div>
        <p className="my-4 text-gray-500 w-3/4">{destinationData.aboutPlace}</p>
      </div>
    </div>
  );
}
