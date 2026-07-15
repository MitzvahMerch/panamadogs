import { notFound } from "next/navigation";
import Link from "next/link";
import { dogs, getDogById } from "@/lib/dogs";
import DogAvatar from "@/components/DogAvatar";
import CtaButtons from "@/components/CtaButtons";

export function generateStaticParams() {
  return dogs.map((dog) => ({ id: dog.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dog = getDogById(id);
  return { title: dog ? `${dog.name} — PanamaDogs` : "Dog not found — PanamaDogs" };
}

const listingCopy: Record<string, string> = {
  foster: "This dog needs a foster home right now.",
  adopt: "This dog is ready to be adopted.",
  "foster-to-adopt": "This dog is available to foster, with the option to adopt.",
};

export default async function DogDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ matched?: string }>;
}) {
  const { id } = await params;
  const { matched } = await searchParams;
  const dog = getDogById(id);

  if (!dog) notFound();

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12">
      {matched && (
        <div className="mb-8 rounded-xl bg-emerald-100 px-5 py-4 text-center font-medium text-emerald-900">
          🎉 Based on your answers, meet your match: {dog.name}!
        </div>
      )}

      <DogAvatar dog={dog} className="h-64 w-full rounded-3xl text-7xl sm:h-80" />

      <div className="mt-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold text-stone-900">{dog.name}</h1>
          <p className="mt-1 text-stone-500">
            {dog.breed} · {dog.sizeLabel} ({dog.weightLbs} lbs) · {dog.age} · {dog.sex}
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
          {listingCopy[dog.listingType]}
        </span>
      </div>

      <p className="mt-4 text-lg italic text-stone-600">&ldquo;{dog.tagline}&rdquo;</p>
      <p className="mt-4 leading-relaxed text-stone-700">{dog.bio}</p>

      {dog.specialNotes && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong>Good to know:</strong> {dog.specialNotes}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {dog.personalityTags.map((tag) => (
          <span key={tag} className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-10">
        <CtaButtons dog={dog} />
      </div>

      <div className="mt-8 text-center">
        <Link href="/quiz" className="text-sm font-medium text-stone-500 hover:text-stone-700">
          Not quite right? Retake the quiz →
        </Link>
      </div>
    </div>
  );
}
