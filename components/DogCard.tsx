import Link from "next/link";
import type { Dog } from "@/lib/dogs";
import DogAvatar from "./DogAvatar";

const listingLabel: Record<Dog["listingType"], string> = {
  foster: "Needs a foster",
  adopt: "Ready to adopt",
  "foster-to-adopt": "Foster-to-adopt",
};

export default function DogCard({ dog }: { dog: Dog }) {
  return (
    <Link
      href={`/dogs/${dog.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <DogAvatar dog={dog} className="h-48 w-full text-6xl" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-stone-900">{dog.name}</h3>
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
            {listingLabel[dog.listingType]}
          </span>
        </div>
        <p className="text-sm text-stone-500">
          {dog.breed} · {dog.sizeLabel} · {dog.age}
        </p>
        <p className="text-sm text-stone-600">{dog.tagline}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {dog.personalityTags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-stone-100 px-2 py-0.5 text-xs text-stone-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
