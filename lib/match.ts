import { dogs, type Dog, type DogVector } from "./dogs";
import type { AxisContribution } from "./quiz";

const AXES: (keyof DogVector)[] = ["size", "energy", "experience", "social", "kidFriendly", "otherPets"];

export type Answers = Record<string, AxisContribution>;

/**
 * Averages every contribution given for each axis. Axes nobody contributed to
 * default to a neutral 3 so one unanswered axis doesn't skew the match.
 */
export function buildUserVector(answers: Answers): DogVector {
  const sums: Record<string, number> = {};
  const counts: Record<string, number> = {};

  for (const contribution of Object.values(answers)) {
    for (const axis of AXES) {
      const value = contribution[axis];
      if (typeof value === "number") {
        sums[axis] = (sums[axis] ?? 0) + value;
        counts[axis] = (counts[axis] ?? 0) + 1;
      }
    }
  }

  const vector = {} as DogVector;
  for (const axis of AXES) {
    vector[axis] = counts[axis] ? sums[axis] / counts[axis] : 3;
  }
  return vector;
}

export function findBestMatch(answers: Answers): Dog {
  const userVector = buildUserVector(answers);

  let best: Dog = dogs[0];
  let bestDistance = Infinity;

  for (const dog of dogs) {
    let distanceSq = 0;
    for (const axis of AXES) {
      const diff = dog.vector[axis] - userVector[axis];
      distanceSq += diff * diff;
    }
    if (distanceSq < bestDistance) {
      bestDistance = distanceSq;
      best = dog;
    }
  }

  return best;
}
