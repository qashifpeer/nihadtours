// app/packages/[slug]/page.tsx
import { packagesData } from "@/constants/packages";
import Image from "next/image";
import Link from "next/link";

interface PackageProps {
  params: { slug: string; title: string };
}

// Generate static paths for each package
export function generateStaticParams() {
  return packagesData.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export default async function PackagePage({ params }: PackageProps) {
  const packageData = packagesData.find((pkg) => pkg.slug === params.slug);

  if (!packageData) {
    return <div>Package not found</div>;
  }

  return (
    <div className="bg-black">
      <div className="container px-2 py-8 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4"></h1>
        <div className="flex justify-center items-center w-3/4">
          <Image
            src={packageData.coverImageUrl}
            alt={packageData.title}
            width={1600}
            height={1200}
            className="cover w-full h-72 rounded"
          />
        </div>
        <div className=" flex justify-center items-center gap-2 bg-gradient-to-r from-orange-800 to-slate-900 mt-4 w-3/4">
          <h1 className="text-xl text-slate-100   uppercase font-kalam py-2">
            {packageData.title}
          </h1>
          {/* <FaCanadianMapleLeaf className="text-xl" /> */}
        </div>
        <p className="my-4 text-gray-500">{packageData.description}</p>

        {/* Package Details */}
        <div className="w-full md:w-3/4">
          {packageData.tourDays.filter((day)=> day.desc !== "-")
          .map((day,i)=>(
            <div
              className="bg-slate-950 rounded w-full flex gap-6 py-2 mt-2  items-center"
              key={i}
            >
              <p className="rounded-lg text-sm text-orange-800 bg-slate-100 px-2 py-2 ubuntu-bold uppercase min-w-20 h-10 text-center">
                { day.title}
              </p>
              <p className=" px-4 py-2 ubuntu-regular capitalize text-slate-300">
                {day.desc}
              </p>
              
            </div>
          ))}
        </div>
        <Link href="/contact">
          {" "}
          <button className="mt-6 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-lg uppercase transition duration-300">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}


