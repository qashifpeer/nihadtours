
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
    { imageUrl: "/images/v1.jpg",
       title: "splendid Srinagar",
        price: "₹7999 / person", 
        days: "6 days & 5 nights", 
        slug: "splendid-srinagar" ,
         description: "An amazing journey through the heart of Kashmir", 
         tourDays: [{title: "day-1" , desc:'Arrival at srinagar'}, {title: 'DAY-2', desc:  'srinagar to Sonamarg'}, {title: 'day-3', desc: 'Srinagar to gulmarg'}, {title: 'day-4', desc:  'srinagar to pahalgam'}, {title: 'day5', desc: 'pahalgam to srinagar'}, {title: 'day-6', desc: 'srinagar to airport drop'}, {title: 'day-7', desc: '-'}, {title: 'day-8', desc: '-'}, {title: 'day-9', desc: '-'}]},
    { imageUrl: "/images/v2.jpg",
       title: "Tempting kashmir honeymoon", 
       price: "₹21999 / person", 
       days: "6 days & 5 nights", 
       slug: "tempting-kashmir-honeymoon" , 
       description: "An amazing journey through the heart of Kashmir.", 
       tourDays: [{title: "day-1" , desc:'Arrival at srinagar'}, {title: 'DAY-2', desc:  'srinagar to Sonamarg'}, {title: 'day-3', desc: 'Srinagar to gulmarg'}, {title: 'day-4', desc:  'srinagar to pahalgam'}, {title: 'day5', desc: 'pahalgam to srinagar'}, {title: 'day-6', desc: 'srinagar to airport drop'}, {title: 'day-7', desc: '-'}, {title: 'day-8', desc: '-'}, {title: 'day-9', desc: '-'}]},
    { imageUrl: "/images/v3.jpg",
       title: "Kashmir family tour",
        price: "₹9999 / person",
        days: "7 days & 6 nights",
         slug: "kashmir-family-tour" ,
         description: "An amazing journey through the heart of Kashmir.", 
         tourDays: [{title: "day-1" , desc:'Arrival at srinagar'}, {title: 'DAY-2', desc:  'srinagar to Sonamarg'}, {title: 'day-3', desc: 'Srinagar to gulmarg'}, {title: 'day-4', desc:  'srinagar to pahalgam'}, {title: 'day5', desc: 'stay at pahalgam '}, {title: 'day-6', desc: 'pahalgam to srinagar'}, {title: 'day-7', desc: 'srinagar to airport drop'}, {title: 'day-8', desc: '-'}, {title: 'day-9', desc: '-'}]},
    { imageUrl: "/images/v4.jpg",
       title: "offbeat Kashmir",
        price: "₹13499 / person",
         days: "9 days & 8 nights",
          slug: "offbeat-kashmir" ,
           description: "An amazing journey through the heart of Kashmir.",
           tourDays: [{title: "day-1" , desc:'Arrival at srinagar'}, {title: 'DAY-2', desc:  'srinagar to Sonamarg'}, {title: 'day-3', desc: 'Srinagar to gulmarg'}, {title: 'day-4', desc:  'srinagar to pahalgam'}, {title: 'day5', desc: 'pahalgam to srinagar'}, {title: 'day-6', desc: 'srinagar to doodpathri'}, {title: 'day-7', desc: 'srinagar to yousmarg'}, {title: 'day-8', desc: 'srinagar to airport drop'}, {title: 'day-9', desc: '-'}]},
    { imageUrl: "/images/v1.jpg",
       title: "mesmerizing ladakh",
        price: "₹14999 / person",
         days: "6 days & 5 nights",
          slug: "mesmerizing-ladakh" ,
           description: "Experience Ladakh's surreal landscapes, ancient monasteries, and vibrant culture.",
           tourDays: [{title: "day-1" , desc:'Arrival at leh'}, {title: 'DAY-2', desc:  'stay in leh'}, {title: 'day-3', desc: 'leh to nubra valley'}, {title: 'day-4', desc:  'nubra to pangong'}, {title: 'day5', desc: 'pangong lake to leh'}, {title: 'day-6', desc: 'drop at leh Airport'}, {title: 'day-7', desc: '-'}, {title: 'day-8', desc: '-'}, {title: 'day-9', desc: '-'}]},
  ];