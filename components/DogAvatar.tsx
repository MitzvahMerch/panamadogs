import type { Dog } from "@/lib/dogs";

export default function DogAvatar({ dog, className = "" }: { dog: Dog; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br ${dog.color} p-2 ${className}`}
      aria-label={`Photo placeholder for ${dog.name}`}
    >
      <div className="flex h-[80%] w-[80%] items-center justify-center rounded-full bg-white shadow-inner">
        <span>{dog.emoji}</span>
      </div>
    </div>
  );
}
