export type DogVector = {
  size: number; // 1 (small) - 5 (large)
  energy: number; // 1 (low) - 5 (high)
  experience: number; // 1 (great for first-time owners) - 5 (needs experienced owner)
  social: number; // 1 (independent) - 5 (needs lots of company/affection)
  kidFriendly: number; // 1 - 5
  otherPets: number; // 1 - 5 (good with other dogs/cats)
};

export type ListingType = "foster" | "adopt" | "foster-to-adopt";

export type Dog = {
  id: string;
  name: string;
  breed: string;
  sizeLabel: "Small" | "Medium" | "Large";
  weightLbs: number;
  age: string;
  sex: "Male" | "Female";
  emoji: string;
  color: string; // tailwind gradient classes for placeholder photo
  tagline: string;
  bio: string;
  personalityTags: string[];
  listingType: ListingType;
  specialNotes?: string;
  vector: DogVector;
};

// 5 demo dogs standing in for the ~80 dogs at the shelter.
// Replace with real dogs + real photos before launch — see DATA_SCHEMA.md
export const dogs: Dog[] = [
  {
    id: "max",
    name: "Max",
    breed: "Rottweiler mix",
    sizeLabel: "Large",
    weightLbs: 75,
    age: "3 years",
    sex: "Male",
    emoji: "🐕",
    color: "from-amber-600 to-stone-800",
    tagline: "Big body, bigger heart, needs a job to do.",
    bio: "Max was found tied up outside a construction site and has come a long way since. He's strong, athletic, and thrives with owners who give him structure — daily runs, training games, a clear routine. Once he trusts you, he's a total goofball who leans his whole body against your legs for pets.",
    personalityTags: ["Athletic", "Loyal", "Needs structure", "Confident"],
    listingType: "foster",
    specialNotes: "Currently in heartworm treatment — needs a foster who can keep him calm for 6-8 weeks before he's ready for adoption.",
    vector: { size: 5, energy: 5, experience: 4, social: 4, kidFriendly: 4, otherPets: 2 },
  },
  {
    id: "bella",
    name: "Bella",
    breed: "Chihuahua mix",
    sizeLabel: "Small",
    weightLbs: 9,
    age: "2 years",
    sex: "Female",
    emoji: "🐩",
    color: "from-pink-400 to-rose-600",
    tagline: "Pocket-sized shadow who wants to be wherever you are.",
    bio: "Bella was surrendered when her family moved abroad. She's velcro-dog affectionate, loves being carried around, and settles into lap-sized naps for hours. She's an easy first dog — low exercise needs, apartment-friendly, and thrilled by the smallest amount of attention.",
    personalityTags: ["Affectionate", "Apartment-friendly", "Easygoing", "Cuddly"],
    listingType: "adopt",
    vector: { size: 1, energy: 2, experience: 1, social: 5, kidFriendly: 4, otherPets: 3 },
  },
  {
    id: "luna",
    name: "Luna",
    breed: "Lab mix, senior",
    sizeLabel: "Medium",
    weightLbs: 45,
    age: "7 years",
    sex: "Female",
    emoji: "🦮",
    color: "from-slate-400 to-slate-700",
    tagline: "The calm, gray-muzzled soul of the shelter.",
    bio: "Luna has spent most of her life at the shelter and has never stopped being gentle about it. She's the dog staff bring out to greet nervous kids and skittish first-time visitors. She likes slow mornings, sunny spots, and the company of other dogs. A quiet home would be the reward of her life.",
    personalityTags: ["Gentle", "Calm", "Good with kids", "Great with other dogs"],
    listingType: "adopt",
    specialNotes: "Senior dog — mild arthritis, does best with a single-level home or a ramp for stairs.",
    vector: { size: 3, energy: 1, experience: 1, social: 3, kidFriendly: 5, otherPets: 5 },
  },
  {
    id: "rocky",
    name: "Rocky",
    breed: "Mixed breed (mutt)",
    sizeLabel: "Medium",
    weightLbs: 55,
    age: "1.5 years",
    sex: "Male",
    emoji: "🐶",
    color: "from-orange-400 to-amber-700",
    tagline: "Full-time party animal, part-time lap dog.",
    bio: "Rocky is the social butterfly of the yard — first to greet every dog, every person, every new smell. He needs a family that wants an adventure buddy: hikes, beach days, dog parks. He's still a puppy at heart and would do best with a yard or a very committed walking schedule.",
    personalityTags: ["Playful", "Social", "High-energy", "Great with other dogs"],
    listingType: "foster-to-adopt",
    vector: { size: 4, energy: 5, experience: 2, social: 5, kidFriendly: 3, otherPets: 5 },
  },
  {
    id: "coco",
    name: "Coco",
    breed: "Terrier mix",
    sizeLabel: "Small",
    weightLbs: 22,
    age: "4 years",
    sex: "Female",
    emoji: "🐕‍🦺",
    color: "from-yellow-700 to-yellow-900",
    tagline: "Shy at first, devoted for life.",
    bio: "Coco takes time to warm up — she came from a rough situation and is cautious around noise and strangers. But with a patient owner she blossoms into an incredibly devoted, quietly funny companion. She does best as the only pet in a calm, predictable household.",
    personalityTags: ["Shy at first", "Devoted", "Quiet", "Needs patience"],
    listingType: "foster",
    specialNotes: "Best as an only pet. Needs an experienced or very patient adopter for the first few weeks of decompression.",
    vector: { size: 2, energy: 2, experience: 4, social: 2, kidFriendly: 2, otherPets: 2 },
  },
];

export function getDogById(id: string): Dog | undefined {
  return dogs.find((d) => d.id === id);
}
