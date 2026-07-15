import type { Dog } from "@/lib/dogs";

export default function DogAvatar({ dog, className = "" }: { dog: Dog; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br ${dog.color} text-white ${className}`}
      aria-label={`Photo placeholder for ${dog.name}`}
    >
      <span className="drop-shadow-sm">{dog.emoji}</span>
    </div>
  );
}
