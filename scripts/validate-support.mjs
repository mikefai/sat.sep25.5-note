/* global console, process */
import { lessonSections } from '../src/data/lessonData.js';
import { allChallengeQuestions } from '../src/data/challengeData.js';

const lessonQuestions = lessonSections.flatMap((section) => section.questions);
const allQuestions = [...lessonQuestions, ...allChallengeQuestions];
const failures = [];
const ids = new Set();

for (const question of allQuestions) {
  if (ids.has(question.id)) failures.push(`duplicate question id: ${question.id}`);
  ids.add(question.id);

  for (const field of ['clue', 'explanation', 'explanationTr']) {
    if (typeof question[field] !== 'string' || question[field].trim().length < 20) {
      failures.push(`${question.id} is missing detailed ${field} content`);
    }
  }
}

if (lessonQuestions.length !== 18) failures.push(`expected 18 lesson questions, found ${lessonQuestions.length}`);
if (allChallengeQuestions.length !== 40) failures.push(`expected 40 challenge questions, found ${allChallengeQuestions.length}`);

if (failures.length) {
  console.error(`Question support validation failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log(JSON.stringify({
  status: 'PASS',
  lessonQuestions: lessonQuestions.length,
  challengeQuestions: allChallengeQuestions.length,
  helpEnabledQuestions: allQuestions.length,
  requiredSupportFields: ['clue', 'explanation', 'explanationTr'],
}, null, 2));
