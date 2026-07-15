"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/quiz";
import type { Answers } from "@/lib/match";
import { findBestMatch } from "@/lib/match";
import ProgressBar from "@/components/ProgressBar";

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [location, setLocation] = useState("");

  const question = questions[step];
  const isLast = step === questions.length - 1;
  const isLocationStep = question.type === "location";

  function goNext(nextAnswers: Answers) {
    if (isLast) {
      const match = findBestMatch(nextAnswers);
      try {
        sessionStorage.setItem("panamadogs_location", location);
        sessionStorage.setItem("panamadogs_answers", JSON.stringify(nextAnswers));
      } catch {
        // sessionStorage may be unavailable — non-critical, matching still works
      }
      router.push(`/dogs/${match.id}?matched=1`);
      return;
    }
    setStep((s) => s + 1);
  }

  function selectOption(contribution: Record<string, number>) {
    const nextAnswers = { ...answers, [question.id]: contribution };
    setAnswers(nextAnswers);
    goNext(nextAnswers);
  }

  function submitLocation() {
    const nextAnswers = { ...answers, [question.id]: {} };
    setAnswers(nextAnswers);
    goNext(nextAnswers);
  }

  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-5 py-10">
      <ProgressBar current={step + 1} total={questions.length} />

      <div className="mt-10">
        <h1 className="text-2xl font-bold text-stone-900 sm:text-3xl">{question.title}</h1>
        {question.subtitle && <p className="mt-2 text-stone-600">{question.subtitle}</p>}

        {isLocationStep ? (
          <div className="mt-8 flex flex-col gap-4">
            <input
              autoFocus
              type="text"
              placeholder="e.g. Austin, Texas, USA"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-xl border border-stone-300 px-4 py-3 text-lg focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
            <button
              onClick={submitLocation}
              disabled={location.trim().length === 0}
              className="rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-stone-300"
            >
              Continue
            </button>
          </div>
        ) : (
          <div className="mt-8 flex flex-col gap-3">
            {question.options?.map((opt) => (
              <button
                key={opt.value}
                onClick={() => selectOption(opt.contribution)}
                className="w-full rounded-xl border-2 border-stone-200 bg-white px-5 py-4 text-left font-medium text-stone-800 transition hover:border-emerald-600 hover:bg-emerald-50"
              >
                {opt.label}
                {opt.sublabel && <span className="block text-sm font-normal text-stone-500">{opt.sublabel}</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      {step > 0 && (
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className="mt-8 self-start text-sm font-medium text-stone-500 hover:text-stone-700"
        >
          ← Back
        </button>
      )}
    </div>
  );
}
