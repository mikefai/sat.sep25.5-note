/* global console, process */
import { allChallengeQuestions, challengeQuestions } from '../src/data/challengeData.js';

const failures = [];
const requiredTextFields = ['id', 'difficulty', 'category', 'passage', 'prompt', 'explanation', 'explanationTr', 'clue'];

for (const type of ['transition', 'inference']) {
  const questions = challengeQuestions[type];
  if (questions.length !== 20) failures.push(`${type} must contain exactly 20 questions; found ${questions.length}`);

  const answerCounts = [0, 0, 0, 0];
  for (const question of questions) {
    for (const field of requiredTextFields) {
      if (typeof question[field] !== 'string' || !question[field].trim()) failures.push(`${question.id || type}: missing ${field}`);
    }
    if (!Array.isArray(question.choices) || question.choices.length !== 4) failures.push(`${question.id}: must have four choices`);
    if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer > 3) failures.push(`${question.id}: invalid answer index`);
    else answerCounts[question.answer] += 1;
    const wordCount = question.passage.trim().split(/\s+/).length;
    if (wordCount < 25 || wordCount > 150) failures.push(`${question.id}: passage has ${wordCount} words; expected 25-150`);
    if (new Set(question.choices).size !== question.choices.length) failures.push(`${question.id}: duplicate choices`);
  }
  if (answerCounts.some((count) => count !== 5)) failures.push(`${type}: answer positions are not balanced (${answerCounts.join('/')})`);
}

const ids = allChallengeQuestions.map((question) => question.id);
if (new Set(ids).size !== ids.length) failures.push('Question IDs must be unique');
const passages = allChallengeQuestions.map((question) => question.passage);
if (new Set(passages).size !== passages.length) failures.push('Question passages must be unique');

if (failures.length) {
  console.error(`Challenge bank validation failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log(JSON.stringify({
  status: 'PASS',
  total: allChallengeQuestions.length,
  transition: challengeQuestions.transition.length,
  inference: challengeQuestions.inference.length,
  answerBalancePerType: [5, 5, 5, 5]
}, null, 2));
