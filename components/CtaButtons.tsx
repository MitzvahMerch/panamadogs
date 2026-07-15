import Link from "next/link";
import type { Dog } from "@/lib/dogs";

export default function CtaButtons({ dog }: { dog: Dog }) {
  const subject = encodeURIComponent(`I'd like to ${dog.listingType === "adopt" ? "adopt" : "foster"} ${dog.name}`);
  const body = encodeURIComponent(
    `Hi! I took the PanamaDogs quiz and was matched with ${dog.name}. I'd love to learn more about the process.`
  );

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={`mailto:hello@panamadogs.org?subject=${subject}&body=${body}`}
        className="flex-1 rounded-full bg-emerald-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-800"
      >
        {dog.listingType === "adopt" ? "Start adoption inquiry" : "Ask about fostering"}
      </a>
      <a
        href="mailto:hello@panamadogs.org?subject=Donation%20for%20the%20shelter"
        className="flex-1 rounded-full border-2 border-emerald-700 px-6 py-3 text-center font-semibold text-emerald-800 transition hover:bg-emerald-50"
      >
        Donate instead
      </a>
      <Link
        href="/dogs"
        className="flex-1 rounded-full border-2 border-stone-300 px-6 py-3 text-center font-semibold text-stone-600 transition hover:bg-stone-50"
      >
        See other dogs
      </Link>
    </div>
  );
}
