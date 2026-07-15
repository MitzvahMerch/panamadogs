import type { DogVector } from "./dogs";

export type AxisContribution = Partial<DogVector>;

export type QuizOption = {
  label: string;
  sublabel?: string;
  value: string;
  contribution: AxisContribution;
};

export type QuizQuestion = {
  id: string;
  title: string;
  subtitle?: string;
  type: "choice" | "location";
  options?: QuizOption[];
};

// 10 questions, one screen each. Answers nudge a running "adopter vector"
// on the same axes used to describe each dog (see lib/dogs.ts).
export const questions: QuizQuestion[] = [
  {
    id: "location",
    title: "Where do you live?",
    subtitle: "So we know where you'd be bringing your new best friend home to.",
    type: "location",
  },
  {
    id: "home-type",
    title: "What does home look like?",
    subtitle: "This helps us think about size and energy level.",
    type: "choice",
    options: [
      { label: "Apartment or condo in the city", value: "apartment", contribution: { size: 1, energy: 2 } },
      { label: "House with a small yard", value: "house", contribution: { size: 3, energy: 3 } },
      { label: "House with a big yard, farm, or land", value: "land", contribution: { size: 5, energy: 4 } },
    ],
  },
  {
    id: "experience",
    title: "Have you had a dog before?",
    type: "choice",
    options: [
      { label: "This would be my first dog", value: "first", contribution: { experience: 1 } },
      { label: "Yes — mostly small dogs", value: "small", contribution: { experience: 2, size: 2 } },
      { label: "Yes — mostly medium/large dogs", value: "medium-large", contribution: { experience: 3, size: 4 } },
      { label: "Yes, including rescues with rough pasts", value: "rescue", contribution: { experience: 5 } },
    ],
  },
  {
    id: "social",
    title: "Are you more of a social butterfly or a homebody?",
    type: "choice",
    options: [
      { label: "Very social — my house is always full of people", value: "very-social", contribution: { social: 5, kidFriendly: 4 } },
      { label: "Somewhere in the middle", value: "middle", contribution: { social: 3 } },
      { label: "Pretty introverted — I like it quiet", value: "introvert", contribution: { social: 1 } },
    ],
  },
  {
    id: "size-pref",
    title: "Big dogs or small dogs?",
    subtitle: "Be honest — no wrong answer here.",
    type: "choice",
    options: [
      { label: "Big and goofy, please", value: "big", contribution: { size: 5 } },
      { label: "I like a happy medium", value: "medium", contribution: { size: 3 } },
      { label: "Small enough to fit in my lap", value: "small", contribution: { size: 1 } },
    ],
  },
  {
    id: "schedule",
    title: "Morning person or night owl?",
    type: "choice",
    options: [
      { label: "Up with the sun, ready to run", value: "morning", contribution: { energy: 4 } },
      { label: "Night owl — slow, quiet mornings", value: "night", contribution: { energy: 2 } },
      { label: "Honestly, it depends on the coffee", value: "either", contribution: { energy: 3 } },
    ],
  },
  {
    id: "activity",
    title: "How active is your day-to-day life?",
    type: "choice",
    options: [
      { label: "Couch, blanket, repeat", value: "low", contribution: { energy: 1 } },
      { label: "Regular walks, some weekend adventures", value: "moderate", contribution: { energy: 3 } },
      { label: "Hikes, runs, always moving", value: "high", contribution: { energy: 5, size: 4 } },
    ],
  },
  {
    id: "kids",
    title: "Any kids in the house?",
    type: "choice",
    options: [
      { label: "Yes, young kids", value: "young-kids", contribution: { kidFriendly: 5, energy: 3 } },
      { label: "Yes, older kids or teens", value: "older-kids", contribution: { kidFriendly: 4 } },
      { label: "No kids at home", value: "no-kids", contribution: { kidFriendly: 2 } },
    ],
  },
  {
    id: "other-pets",
    title: "Any other pets already at home?",
    type: "choice",
    options: [
      { label: "Yes, other dogs", value: "dogs", contribution: { otherPets: 5, social: 4 } },
      { label: "Yes, cats or other animals", value: "cats", contribution: { otherPets: 3 } },
      { label: "Nope, a blank slate", value: "none", contribution: { otherPets: 2 } },
    ],
  },
  {
    id: "priority",
    title: "What matters most to you in a dog?",
    type: "choice",
    options: [
      { label: "A cuddly companion who's always close by", value: "cuddly", contribution: { social: 5, kidFriendly: 4, energy: 2 } },
      { label: "A loyal protector for me and my home", value: "protector", contribution: { size: 4, experience: 4 } },
      { label: "A playful adventure buddy", value: "adventure", contribution: { energy: 5, size: 4, social: 4 } },
      { label: "A calm, low-key presence", value: "calm", contribution: { energy: 1, experience: 1, social: 2 } },
    ],
  },
];
