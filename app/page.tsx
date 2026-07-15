import Link from "next/link";
import { dogs } from "@/lib/dogs";
import DogAvatar from "@/components/DogAvatar";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-stone-200 bg-gradient-to-b from-emerald-50 to-stone-50">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 py-20 text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-800">
            A rescue shelter in Panama, ~80 dogs strong
          </span>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Find the dog who&apos;s waiting for you.
          </h1>
          <p className="max-w-xl text-lg text-stone-600">
            Answer a few quick questions about your life and we&apos;ll match you with a rescue dog
            whose personality actually fits yours — then help you foster, adopt, or support the
            shelter from wherever you are.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quiz"
              className="rounded-full bg-emerald-700 px-8 py-3 text-center font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Take the 2-minute quiz
            </Link>
            <Link
              href="/dogs"
              className="rounded-full border-2 border-emerald-700 px-8 py-3 text-center font-semibold text-emerald-800 transition hover:bg-emerald-50"
            >
              Meet the dogs
            </Link>
          </div>
        </div>
      </section>

      {/* The shelter */}
      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-bold text-emerald-800">~80</p>
            <p className="mt-1 text-stone-600">
              dogs currently living at the shelter, from tiny lap dogs to gentle giants
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-800">20+</p>
            <p className="mt-1 text-stone-600">
              breeds and mixes — mostly street-smart mutts with huge personalities
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-800">3</p>
            <p className="mt-1 text-stone-600">
              ways to help: foster a dog, adopt one, or donate to cover food and vet care
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-stone-200 bg-white py-16">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-2xl font-bold text-stone-900">How it works</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Take the quiz",
                body: "Ten quick questions about your home, your lifestyle, and what you're looking for in a dog.",
              },
              {
                step: "2",
                title: "Meet your match",
                body: "We match you with a real dog from the shelter whose size, energy, and temperament fit your life.",
              },
              {
                step: "3",
                title: "Foster, adopt, or donate",
                body: "Reach out directly to start the process, or support the shelter with a donation instead.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-stone-200 p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview dogs */}
      <section className="mx-auto w-full max-w-5xl px-5 py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-stone-900">Some of the dogs waiting</h2>
          <Link href="/dogs" className="text-sm font-medium text-emerald-800 hover:underline">
            See all →
          </Link>
        </div>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
          {dogs.map((dog) => (
            <div key={dog.id} className="flex min-w-[140px] flex-col items-center gap-2 text-center">
              <DogAvatar dog={dog} className="h-24 w-24 rounded-full text-4xl" />
              <p className="text-sm font-medium text-stone-800">{dog.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-emerald-800 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-2xl font-bold">Every dog here has a story. Yours could be next.</h2>
          <div className="mt-6">
            <Link
              href="/quiz"
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-emerald-800 transition hover:bg-emerald-50"
            >
              Start the quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
