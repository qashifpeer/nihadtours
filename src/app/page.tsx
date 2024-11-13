import { Banner, Feedback, FixedHero, Hero, HeroWithCards, ImageCarousel, Leads, TourPackages } from "@/components";


export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <HeroWithCards />
      <TourPackages />
      <FixedHero />
      <Feedback />
      <Banner />
      <ImageCarousel />
    
    
    </div>
  );
}
