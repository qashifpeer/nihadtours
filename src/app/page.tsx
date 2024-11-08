import { Banner, Feedback, Hero, HeroWithCards, TourPackages } from "@/components";


export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <HeroWithCards />
      <TourPackages />
      <Feedback />
      <Banner />
    
    </div>
  );
}
