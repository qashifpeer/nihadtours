import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="container flex justify-center items-center">
      <Link href={'/contact'}>
        <Image
          src="/images/banner/discount.png"
          width={780}
          height={300}
          alt="banner"
          // className='w-full h-44 cont'
        />
      </Link>
    </div>
  );
};

export default Banner;
