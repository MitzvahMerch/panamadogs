import { dogs } from "@/lib/dogs";
import DogCard from "@/components/DogCard";

export const metadata = {
  title: "Meet the dogs — PanamaDogs",
};

export default function DogsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12">
      <h1 className="text-3xl font-bold text-stone-900">Meet the dogs</h1>
      <p className="mt-2 max-w-2xl text-stone-600">
        These 5 are a preview of the ~80 dogs at the shelter — a demo of what every profile will
        look like once we bring the rest online.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
    </div>
  );
}
