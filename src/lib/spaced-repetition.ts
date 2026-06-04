// SM-2 Spaced Repetition Algorithm
// Based on SuperMemo 2 algorithm for optimal memorization

export interface CardState {
  wordId: number;
  easeFactor: number; // Starting at 2.5
  interval: number; // Days until next review
  repetitions: number; // Successful consecutive reviews
  nextReview: string; // ISO date string
  lastReview: string | null;
}

export type Quality = 0 | 1 | 2 | 3 | 4 | 5;
// 0 = "No lo sé" - Complete blackout
// 1 = "Mal" - Wrong answer, but recognized after seeing
// 2 = "Casi" - Wrong but close
// 3 = "Difícil" - Correct but with serious difficulty
// 4 = "Bien" - Correct with some hesitation
// 5 = "Fácil" - Perfect, instant recall

export function createNewCard(wordId: number): CardState {
  return {
    wordId,
    easeFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: new Date().toISOString().split("T")[0],
    lastReview: null,
  };
}

export function reviewCard(card: CardState, quality: Quality): CardState {
  const newCard = { ...card };
  const today = new Date().toISOString().split("T")[0];

  if (quality >= 3) {
    // Correct response
    if (newCard.repetitions === 0) {
      newCard.interval = 1;
    } else if (newCard.repetitions === 1) {
      newCard.interval = 6;
    } else {
      newCard.interval = Math.round(newCard.interval * newCard.easeFactor);
    }
    newCard.repetitions += 1;
  } else {
    // Incorrect - reset
    newCard.repetitions = 0;
    newCard.interval = 0;
  }

  // Update ease factor
  newCard.easeFactor =
    newCard.easeFactor +
    (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

  // Minimum ease factor
  if (newCard.easeFactor < 1.3) newCard.easeFactor = 1.3;

  // Calculate next review date
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + newCard.interval);
  newCard.nextReview = nextDate.toISOString().split("T")[0];
  newCard.lastReview = today;

  return newCard;
}

export function isDueForReview(card: CardState): boolean {
  const today = new Date().toISOString().split("T")[0];
  return card.nextReview <= today;
}

export function getDueCards(cards: CardState[]): CardState[] {
  return cards
    .filter(isDueForReview)
    .sort((a, b) => a.nextReview.localeCompare(b.nextReview));
}

export function getNewCards(
  allWordIds: number[],
  existingCards: CardState[],
  limit: number = 10
): number[] {
  const existingIds = new Set(existingCards.map((c) => c.wordId));
  return allWordIds.filter((id) => !existingIds.has(id)).slice(0, limit);
}

// Map quality buttons to SM-2 quality values
export const qualityLabels: { quality: Quality; label: string; color: string }[] = [
  { quality: 0, label: "No lo sé", color: "bg-red-500" },
  { quality: 3, label: "Difícil", color: "bg-orange-500" },
  { quality: 4, label: "Bien", color: "bg-green-500" },
  { quality: 5, label: "Fácil", color: "bg-blue-500" },
];
