import { Banner, Feedback, FixedHero, Hero, HeroWithCards, ImageCarousel, Leads, TourPackages } from "@/components";


export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <Banner />
      <HeroWithCards />
      <TourPackages />
      <FixedHero />
      <Feedback />
      <ImageCarousel />
    
    
    </div>
  );
}
