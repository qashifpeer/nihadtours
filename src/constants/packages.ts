
interface TourDay {
  title: string;
  desc: string;
  
}

export interface PackageCardProps {
  imageUrl: string;
  title: string;
  price: string;
  days: string;
  slug: string;
  description: string;
  tourDays: TourDay[];
}


  

export const packagesData: PackageCardProps[] = [
    { imageUrl: "/images/packages/v1.jpg",
       title: "splendid Srinagar",
        price: "₹7999 / person", 
        days: "6 days & 5 nights", 
        slug: "splendid-srinagar" ,
         description: "An amazing journey through the heart of Kashmir", 
         tourDays: [{title: "day-1" , desc:'Arrival at Srinagar, transfer to hotel and enjoy a relaxing evening '}, {title: 'DAY-2', desc:  'After breakfast, head to Sonamarg for sightseeing and visit Thajiwas Glacier. Return to Srinagar for the night.'}, {title: 'day-3', desc: 'Travel from Srinagar to Gulmarg, enjoy a Gondola ride and scenic spots, and return to Srinagar for an overnight stay.'}, {title: 'day-4', desc:  ' Depart for Pahalgam, explore Betab Valley, Aru Valley, and Chandanwari. Stay overnight in Pahalgam.'}, {title: 'day5', desc: 'Return to Srinagar, check into a houseboat, and enjoy a complimentary Shikara ride.'}, {title: 'day-6', desc: ''}, {title: 'day-7', desc: '-'}, {title: 'day-8', desc: '-'}, {title: 'day-9', desc: '-'}]},
    { imageUrl: "/images/packages/v2.jpg",
       title: "Tempting kashmir honeymoon", 
       price: "₹21999 / person", 
       days: "6 days & 5 nights", 
       slug: "tempting-kashmir-honeymoon" , 
       description: "An amazing journey through the heart of Kashmir.", 
       tourDays: [{title: "day-1" , desc:'Arrival at Srinagar, transfer to hotel and enjoy a relaxing evening'}, {title: 'DAY-2', desc:  'After breakfast, head to Sonamarg for sightseeing and visit Thajiwas Glacier. Return to Srinagar for the night.'}, {title: 'day-3', desc: 'Travel from Srinagar to Gulmarg, enjoy a Gondola ride and scenic spots, and return to Srinagar for an overnight stay.'}, {title: 'day-4', desc:  ' Depart for Pahalgam, explore Betab Valley, Aru Valley, and Chandanwari. Stay overnight in Pahalgam.'}, {title: 'day5', desc: 'pahalgam to srinagar'}, {title: 'day-6', desc: 'Transfer to the airport for your departure from Srinagar.'}, {title: 'day-7', desc: '-'}, {title: 'day-8', desc: '-'}, {title: 'day-9', desc: '-'}]},
    { imageUrl: "/images/packages/v3.jpg",
       title: "Kashmir family tour",
        price: "₹9999 / person",
        days: "7 days & 6 nights",
         slug: "kashmir-family-tour" ,
         description: "An amazing journey through the heart of Kashmir.", 
         tourDays: [{title: "day-1" , desc:'Arrival at Srinagar, transfer to hotel and enjoy a relaxing evening'}, {title: 'DAY-2', desc:  'After breakfast, head to Sonamarg for sightseeing and visit Thajiwas Glacier. Return to Srinagar for the night.'}, {title: 'day-3', desc: 'Travel from Srinagar to Gulmarg, enjoy a Gondola ride and scenic spots, and return to Srinagar for an overnight stay.'}, {title: 'day-4', desc:  ' Depart for Pahalgam, explore Betab Valley, Aru Valley, and Chandanwari. Stay overnight in Pahalgam.'}, {title: 'day5', desc: 'Free day to explore Pahalgam at your own pace or enjoy local activities. '}, {title: 'day-6', desc: 'Return to Srinagar, check into a houseboat, and enjoy a complimentary Shikara ride.'}, {title: 'day-7', desc: 'Transfer to the airport for your departure from Srinagar.'}, {title: 'day-8', desc: '-'}, {title: 'day-9', desc: '-'}]},
    { imageUrl: "/images/packages/v4.jpg",
       title: "offbeat Kashmir",
        price: "₹13499 / person",
         days: "9 days & 8 nights",
          slug: "offbeat-kashmir" ,
           description: "An amazing journey through the heart of Kashmir.",
           tourDays: [{title: "day-1" , desc:'Arrival at Srinagar, transfer to hotel and enjoy a relaxing evening'}, {title: 'DAY-2', desc:  'After breakfast, head to Sonamarg for sightseeing and visit Thajiwas Glacier. Return to Srinagar for the night.'}, {title: 'day-3', desc: 'Travel from Srinagar to Gulmarg, enjoy a Gondola ride and scenic spots, and return to Srinagar for an overnight stay.'}, {title: 'day-4', desc:  ' Depart for Pahalgam, explore Betab Valley, Aru Valley, and Chandanwari. Stay overnight in Pahalgam.'}, {title: 'day5', desc: 'Return to Srinagar, check into a houseboat, and enjoy a complimentary Shikara ride.'}, {title: 'day-6', desc: 'Day trip to Doodhpathri for scenic views and nature walks; return to Srinagar for the night'}, {title: 'day-7', desc: ' Visit Yousmarg for sightseeing and enjoy the serene landscape; overnight in Srinagar'}, {title: 'day-8', desc: 'Transfer to the airport for your departure from Srinagar.'}, {title: 'day-9', desc: '-'}]},
    { imageUrl: "/images/packages/ladakh.jpg",
       title: "mesmerizing ladakh",
        price: "₹14999 / person",
         days: "6 days & 5 nights",
          slug: "mesmerizing-ladakh" ,
           description: "Experience Ladakh's surreal landscapes, ancient monasteries, and vibrant culture.",
           tourDays: [{title: "day-1" , desc:'Arrival at leh'}, {title: 'DAY-2', desc:  'stay in leh'}, {title: 'day-3', desc: 'leh to nubra valley'}, {title: 'day-4', desc:  'nubra to pangong'}, {title: 'day5', desc: 'pangong lake to leh'}, {title: 'day-6', desc: 'Transfer to the airport for your departure from Srinagar.'}, {title: 'day-7', desc: '-'}, {title: 'day-8', desc: '-'}, {title: 'day-9', desc: '-'}]
         },
         { imageUrl: "/images/packages/man_in_bangus.jpg",
            title: "paradise trails group package",
             price: "₹14999 / person",
              days: "6 days & 5 nights",
               slug: "paradise-trails-group-package" ,
                description: "A perfect blend of awesome experience and culture.",
                tourDays: [{title: "day-1" , desc:'Arrival in Srinagar, transfer to hotel, and enjoy a relaxing evening'}, {title: 'DAY-2', desc:  'After breakfast, head to Sonmarg for sightseeing and visit Thajiwas Glacier. Return to Srinagar for the night.'}, {title: 'day-3', desc: 'Travel from Srinagar to Gulmarg, enjoy a Gondola ride and scenic spots, and return to Srinagar for an overnight stay.'}, {title: 'day-4', desc:  'Depart for Pahalgam, explore Betaab Valley, Aru Valley, and Chandanwari. Stay overnight in Pahalgam.'}, {title: 'day5', desc: 'Return to Srinagar, check into a houseboat, and enjoy a complimentary Shikara ride.'}, {title: 'day-6', desc: 'Explore Srinagars Mughal Gardens and indulge in local shopping. Overnight stay in Srinagar'}, {title: 'day-7', desc: 'Departure from Srinagar with beautiful memories.'}, {title: 'day-8', desc: '-'}, {title: 'day-9', desc: '-'}]
              },
  ];