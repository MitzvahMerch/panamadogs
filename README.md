# PanamaDogs

A personality-quiz matcher for a dog shelter in Panama (~80 dogs). Answer 10
quick questions and get matched to a real dog, then foster, adopt, or donate.

Built with Next.js (App Router) + TypeScript + Tailwind CSS.

## What's here

- `/` — landing page, shelter stats, how it works
- `/quiz` — 10-question quiz, one screen per question, mobile-friendly
- `/dogs` — browse all demo dogs
- `/dogs/[id]` — a dog's profile + foster/adopt/donate CTAs (also the quiz result page)
- `lib/dogs.ts` — the 5 demo dogs (see `DATA_SCHEMA.md` for what real data is needed)
- `lib/quiz.ts` — the quiz questions
- `lib/match.ts` — the matching algorithm (nearest-neighbor on 6 personality axes)

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploying

1. Push this folder to a new GitHub repo.
2. In Vercel: **New Project** → import the repo → defaults work as-is (no
   env vars needed) → Deploy.

## Before this goes live for real

- Replace the 5 demo dogs with real ones — see `DATA_SCHEMA.md`.
- Swap the `mailto:hello@panamadogs.org` links in `components/CtaButtons.tsx`
  for a real contact address, form, or donation link.
- Swap the emoji/gradient placeholder photos (`components/DogAvatar.tsx`) for
  real dog photos once available.
