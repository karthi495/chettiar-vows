import bride1 from "@/assets/bride-1.jpg";
import bride2 from "@/assets/bride-2.jpg";
import bride3 from "@/assets/bride-3.jpg";
import groom1 from "@/assets/groom-1.jpg";
import groom2 from "@/assets/groom-2.jpg";
import groom3 from "@/assets/groom-3.jpg";

export type Profile = {
  id: string;
  name: string;
  age: number;
  height: string;
  city: string;
  state: string;
  education: string;
  profession: string;
  salary: string;
  subCaste: string;
  nakshatra: string;
  rasi: string;
  dosham: string;
  photo: string;
  compatibility: number;
  horoscope: number;
  verified: { mobile: boolean; email: boolean; govt: boolean; horoscope: boolean };
  premium: boolean;
  trustScore: number;
  completion: number;
  gender: "bride" | "groom";
  bio: string;
};

export const profiles: Profile[] = [
  {
    id: "CC1024",
    name: "Lakshmi Priya",
    age: 26,
    height: "5'4\"",
    city: "Chennai",
    state: "Tamil Nadu",
    education: "M.S. Computer Science, Anna University",
    profession: "Senior Software Engineer",
    salary: "₹18 LPA",
    subCaste: "Devanga Chettiar",
    nakshatra: "Rohini",
    rasi: "Rishabha",
    dosham: "No",
    photo: bride1,
    compatibility: 94,
    horoscope: 32,
    verified: { mobile: true, email: true, govt: true, horoscope: true },
    premium: true,
    trustScore: 98,
    completion: 100,
    gender: "bride",
    bio: "A traditional yet modern girl raised with strong family values. Loves classical music, cooking and travel.",
  },
  {
    id: "CC1031",
    name: "Arvind Krishnan",
    age: 29,
    height: "5'10\"",
    city: "Coimbatore",
    state: "Tamil Nadu",
    education: "MBA, IIM Bangalore",
    profession: "Investment Banker",
    salary: "₹42 LPA",
    subCaste: "Nattukottai Chettiar",
    nakshatra: "Hastam",
    rasi: "Kanya",
    dosham: "No",
    photo: groom1,
    compatibility: 91,
    horoscope: 30,
    verified: { mobile: true, email: true, govt: true, horoscope: true },
    premium: true,
    trustScore: 99,
    completion: 100,
    gender: "groom",
    bio: "Family-oriented professional from a respected Chettiar business family. Believes in tradition and progress.",
  },
  {
    id: "CC1042",
    name: "Divya Shree",
    age: 25,
    height: "5'5\"",
    city: "Bangalore",
    state: "Karnataka",
    education: "B.Tech + MS USA",
    profession: "Product Manager, Google",
    salary: "₹55 LPA",
    subCaste: "Devanga Chettiar",
    nakshatra: "Bharani",
    rasi: "Mesha",
    dosham: "Mild",
    photo: bride2,
    compatibility: 88,
    horoscope: 28,
    verified: { mobile: true, email: true, govt: false, horoscope: true },
    premium: true,
    trustScore: 92,
    completion: 95,
    gender: "bride",
    bio: "Currently in Bangalore, originally from Karaikudi. Looking for a partner who values family and ambition equally.",
  },
  {
    id: "CC1058",
    name: "Vignesh Raj",
    age: 30,
    height: "5'11\"",
    city: "Madurai",
    state: "Tamil Nadu",
    education: "M.D. Cardiology",
    profession: "Cardiologist",
    salary: "₹35 LPA",
    subCaste: "Vellan Chettiar",
    nakshatra: "Anusham",
    rasi: "Vrischika",
    dosham: "No",
    photo: groom2,
    compatibility: 86,
    horoscope: 29,
    verified: { mobile: true, email: true, govt: true, horoscope: false },
    premium: false,
    trustScore: 90,
    completion: 92,
    gender: "groom",
    bio: "Doctor by profession, devotee of tradition. Family runs heritage textile business in Madurai.",
  },
  {
    id: "CC1067",
    name: "Anitha Meenakshi",
    age: 27,
    height: "5'3\"",
    city: "Karaikudi",
    state: "Tamil Nadu",
    education: "CA, ICAI",
    profession: "Chartered Accountant",
    salary: "₹22 LPA",
    subCaste: "Nattukottai Chettiar",
    nakshatra: "Pooram",
    rasi: "Simha",
    dosham: "No",
    photo: bride3,
    compatibility: 95,
    horoscope: 34,
    verified: { mobile: true, email: true, govt: true, horoscope: true },
    premium: true,
    trustScore: 97,
    completion: 100,
    gender: "bride",
    bio: "From a traditional Nagarathar family in Karaikudi. Carrier of heritage, lover of art and Carnatic music.",
  },
  {
    id: "CC1073",
    name: "Karthik Subramanian",
    age: 32,
    height: "6'0\"",
    city: "Singapore",
    state: "Abroad",
    education: "MBA, INSEAD",
    profession: "Director, Tech Startup",
    salary: "₹80 LPA",
    subCaste: "Nattukottai Chettiar",
    nakshatra: "Swathi",
    rasi: "Tula",
    dosham: "No",
    photo: groom3,
    compatibility: 89,
    horoscope: 31,
    verified: { mobile: true, email: true, govt: true, horoscope: true },
    premium: true,
    trustScore: 96,
    completion: 100,
    gender: "groom",
    bio: "NRI based in Singapore, deeply connected to roots in Chettinad. Visits home every quarter.",
  },
];

export const getProfile = (id: string) => profiles.find(p => p.id === id);
