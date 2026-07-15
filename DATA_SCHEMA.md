# Dog data — what we need per dog

The demo (`lib/dogs.ts`) has 5 made-up dogs standing in for the shelter's real
~80. Before this goes live for real, each dog needs the fields below.

## Required per dog

| Field | Example | Notes |
|---|---|---|
| Name | "Max" | |
| Breed / mix | "Rottweiler mix" | Best guess is fine — most are mutts |
| Size | Small / Medium / Large | |
| Weight (lbs or kg) | 75 lbs | |
| Age (or estimate) | "3 years" | |
| Sex | Male / Female | |
| Spayed/neutered | Yes / No | Good to show adopters |
| At least 1 photo | JPG/PNG | See photo notes below |
| Short tagline | "Big body, bigger heart" | One line, used on cards |
| Longer bio | 2-4 sentences | Personality, backstory, quirks |
| Personality tags | Athletic, Loyal, Shy... | 3-5 tags |
| Listing type | Foster / Adopt / Foster-to-adopt | What's needed right now |
| Special notes | "In heartworm treatment" | Medical needs, behavioral notes, best-fit household |

## For matching (the 6 numbers that drive the quiz)

Rate each dog 1-5 on these axes — even a rough gut-check from shelter staff
is enough to start:

1. **Size** — 1 (tiny) to 5 (very large)
2. **Energy** — 1 (couch potato) to 5 (needs to run daily)
3. **Experience needed** — 1 (great first dog) to 5 (needs an experienced owner)
4. **Social / affection need** — 1 (independent) to 5 (needs constant company)
5. **Kid-friendly** — 1 (not recommended around kids) to 5 (great with kids)
6. **Good with other pets** — 1 (needs to be an only pet) to 5 (loves other animals)

These live in the `vector` field in `lib/dogs.ts`. Adding a new dog means
adding a new object to the `dogs` array with these fields filled in — no
other code changes needed, the quiz and matching logic pick it up
automatically.

## Photos

- Landscape or square, at least 800px wide
- Well-lit, ideally outdoors or in natural light
- One clear "hero" shot per dog is enough to start; 2-3 is better
- File naming: `<dog-id>-1.jpg`, `<dog-id>-2.jpg` etc., dropped in `public/dogs/`

## Scaling past 5 dogs

Once there's real data for more dogs, the cleanest next step is moving
`lib/dogs.ts` from a hardcoded array to a JSON file or a lightweight CMS
(Airtable/Google Sheet synced in at build time works well for a shelter
team that isn't going to hand-edit TypeScript). Happy to wire that up once
the data collection format is settled.
