import { useCallback, useEffect, useMemo, useState } from 'react';
import { lessonSections, typeMeta } from './data/lessonData';

const STORAGE_KEY = 'northstar-sat-reading-progress-v1';
const ALL_QUESTIONS = lessonSections.flatMap((section) => section.questions);

function Icon({ name, size = 18 }) {
  const paths = {
    home: <><path d="m3 9 9-6 9 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="M9 21v-7h6v7" /></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5Z" /><path d="M4 5.5v16" /></>,
    note: <><path d="M6 3h9l4 4v14H6z" /><path d="M15 3v5h4M9 12h6M9 16h5" /></>,
    chart: <><path d="M4 19V5M4 19h17" /><path d="m7 15 3-4 3 2 5-7" /></>,
    folder: <><path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10H3Z" /></>,
    gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.1h-2.6V20a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.6-1H6v-2.6h.4a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V5H15v.4a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1V14H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    spark: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7Z" />,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M22 12h-3" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    reset: <><path d="M4 4v6h6" /><path d="M5.5 15a8 8 0 1 0 .5-7L4 10" /></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Brand() {
  return <div className="brand"><span className="brand-mark"><Icon name="spark" size={23} /></span><span><strong>NORTHSTAR</strong><small>SAT READING</small></span></div>;
}

function Sidebar({ activeId, onNavigate, open, onClose, completed }) {
  const navButton = (id, icon, label) => <button className={`nav-item ${activeId === id ? 'active' : ''}`} onClick={() => onNavigate(id)} aria-current={activeId === id ? 'page' : undefined}><Icon name={icon} /> <span>{label}</span></button>;
  return <aside id="course-sidebar" className={`sidebar ${open ? 'is-open' : ''}`} aria-label="Course navigation">
    <div className="sidebar-top"><Brand /><button className="icon-btn mobile-close" onClick={onClose} aria-label="Close navigation"><Icon name="close" /></button></div>
    <nav className="primary-nav" aria-label="Primary navigation">
      <button className="nav-item" onClick={() => onNavigate('overview')}><Icon name="home" /> <span>Home</span></button>
      <div className="nav-group-label"><Icon name="book" /><span>SAT Reading</span><Icon name="chevron" size={15} /></div>
      <div className="lesson-nav">
        <button className={`nav-item sub ${activeId === 'overview' ? 'active' : ''}`} onClick={() => onNavigate('overview')} aria-current={activeId === 'overview' ? 'page' : undefined}><Icon name="note" /><span>Overview</span></button>
        <button className={`nav-item sub ${activeId === 'transition' ? 'active' : ''}`} onClick={() => onNavigate('transition')} aria-current={activeId === 'transition' ? 'page' : undefined}><span className="nav-number">01</span><span>Transitions</span></button>
        <button className={`nav-item sub ${activeId === 'inference' ? 'active' : ''}`} onClick={() => onNavigate('inference')} aria-current={activeId === 'inference' ? 'page' : undefined}><span className="nav-number">02</span><span>Inferences</span></button>
        <button className={`nav-item sub ${activeId === 'practice' ? 'active' : ''}`} onClick={() => onNavigate('practice')} aria-current={activeId === 'practice' ? 'page' : undefined}><Icon name="chart" /><span>Practice review</span></button>
      </div>
      <div className="nav-divider" />
      {navButton('plan', 'calendar', 'Study plan')}
      {navButton('resources', 'folder', 'Resources')}
      {navButton('settings', 'gear', 'Settings')}
    </nav>
    <div className="sidebar-progress"><div className="progress-label"><span>Lesson progress</span><strong>{completed}/{lessonSections.length}</strong></div><div className="progress-track"><span style={{ width: `${(completed / lessonSections.length) * 100}%` }} /></div><p>Small, consistent practice builds reliable reading decisions.</p></div>
    <div className="sidebar-quote">“Clear thinking<br />travels further.”<small>NORTHSTAR SAT</small></div>
  </aside>;
}

function Topbar({ language, setLanguage, onMenu, title }) {
  return <header className="topbar"><button className="icon-btn menu-toggle" onClick={onMenu} aria-label="Open navigation" aria-controls="course-sidebar"><Icon name="menu" /></button><div className="mobile-brand"><Brand /></div><div className="breadcrumbs"><span>Digital SAT Reading</span><Icon name="arrow" size={15} /><strong>{title}</strong></div><div className="topbar-actions"><div className="language-toggle" role="group" aria-label="Display language"><button className={language === 'EN' ? 'selected' : ''} aria-pressed={language === 'EN'} onClick={() => setLanguage('EN')}>EN</button><button className={language === 'TR' ? 'selected' : ''} aria-pressed={language === 'TR'} onClick={() => setLanguage('TR')}>TR</button></div><span className="autosave-pill"><span /> saved</span></div></header>;
}

function LessonMap({ activeId, onNavigate }) {
  return <div className="lesson-map"><button className="map-step map-link done" onClick={() => onNavigate('overview')}><span><Icon name="check" size={14} /></span><strong>Learn</strong></button><div className="map-line active" /><button className={`map-step map-link ${activeId === 'transition' ? 'current' : ''}`} onClick={() => onNavigate('transition')}><span>01</span><strong>Transitions</strong></button><div className="map-line" /><button className={`map-step map-link ${activeId === 'inference' ? 'current' : ''}`} onClick={() => onNavigate('inference')}><span>02</span><strong>Inferences</strong></button><div className="map-line" /><button className={`map-step map-link ${activeId === 'practice' ? 'current' : ''}`} onClick={() => onNavigate('practice')}><span>03</span><strong>Review</strong></button><div className="map-count">{activeId === 'overview' ? '1 / 4' : activeId === 'transition' ? '2 / 4' : activeId === 'inference' ? '3 / 4' : '4 / 4'}</div></div>;
}

function BilingualCopy({ english, turkish, language, className = '' }) {
  return <div className={`bilingual-copy ${className}`}>
    {(language === 'EN' || language === 'BOTH') && <div><span className="copy-label">English explanation</span><p>{english}</p></div>}
    {(language === 'TR' || language === 'BOTH') && <div><span className="copy-label">Türkçe açıklama</span><p>{turkish}</p></div>}
  </div>;
}

function TypeIntro({ type, language, onStart }) {
  const meta = typeMeta[type];
  const isTransition = type === 'transition';
  return <section className={`type-intro ${meta.color}`}>
    <div className="section-index">{isTransition ? '01' : '02'}</div>
    <div><div className="type-kicker">{meta.label} / {isTransition ? 'connect ideas' : 'read evidence'}</div><h2>{meta.title}</h2><p className="type-subtitle">{meta.subtitle}</p>
      <div className="type-actions"><button className="button primary" onClick={onStart}>Study {meta.label.toLowerCase()} <Icon name="arrow" size={16} /></button><span>{isTransition ? '3 teaching blocks · 9 hard questions' : '3 teaching blocks · 9 hard questions'}</span></div>
    </div>
    <div className="type-side-note"><span className="mini-rule" />{language === 'TR' ? (isTransition ? 'İlişkiyi bul. Sonra kelimeyi seç.' : 'Kanıtı bul. Sonra kapsamı koru.') : (isTransition ? 'Name the relationship. Then choose the word.' : 'Find the evidence. Then protect the scope.')}</div>
  </section>;
}

function PassageAnnotation({ type }) {
  if (type === 'transition') return <div className="annotation-box"><div className="annotation-copy"><h3>Read the hinge, not the highlight.</h3><p>Early surveys suggested that remote work reduced collaboration. <mark className="mark-contrast">However,</mark> later studies measured fewer interruptions and <mark className="mark-cause">therefore</mark> found that the quality of collaboration depended on how teams were structured. <mark className="mark-inference">In other words,</mark> the setting alone did not determine the result.</p></div><div className="legend"><span><i className="dot amber" />contrast</span><small>turns the direction</small><span><i className="dot blue" />cause / result</span><small>connects mechanism</small><span><i className="dot coral" />reframe</span><small>narrows the claim</small></div></div>;
  return <div className="annotation-box inference-annotation"><div className="annotation-copy"><h3>Read the evidence ladder.</h3><p>The first trial improved recall for <mark className="mark-cause">some participants.</mark> A follow-up found the effect only when the material was revisited within a week. <mark className="mark-inference">Together,</mark> the findings support a time-sensitive benefit, not a universal memory improvement.</p></div><div className="evidence-ladder"><span><b>1</b> measured result</span><span><b>2</b> limiting condition</span><span><b>3</b> smallest safe claim</span></div></div>;
}

function PracticeQuestion({ question, index, answers, onAnswer, revealed, onReveal, language }) {
  const selected = answers[question.id];
  const isCorrect = selected === question.answer;
  const hasSelection = selected !== undefined;
  return <article className={`question-card ${revealed ? 'revealed' : ''}`}>
    <div className="question-head"><span className="q-number">Q{String(index + 1).padStart(2, '0')}</span><span className="difficulty"><span className="difficulty-dot" /> {question.difficulty}</span></div>
    <div className="question-body">
      <div className="question-passage"><span className="copy-label">Passage</span><p>{question.passage}</p>{question.prompt && <p className="question-prompt">{question.prompt}</p>}</div>
      <div className="answer-area"><span className="copy-label">Choose one</span><div className="choices">{question.choices.map((choice, choiceIndex) => <button key={choice} className={`choice ${selected === choiceIndex ? 'selected' : ''} ${revealed && choiceIndex === question.answer ? 'correct' : ''} ${revealed && selected === choiceIndex && !isCorrect ? 'incorrect' : ''}`} aria-pressed={selected === choiceIndex} onClick={() => onAnswer(question.id, choiceIndex)}><span className="choice-letter">{String.fromCharCode(65 + choiceIndex)}</span><span>{choice}</span>{revealed && choiceIndex === question.answer && <Icon name="check" size={16} />}</button>)}</div><button className="reveal-button" disabled={!hasSelection} onClick={() => onReveal(question.id)}>{revealed ? 'Hide explanation' : hasSelection ? 'Reveal reasoning' : 'Choose an answer first'} <Icon name={revealed ? 'chevron' : 'arrow'} size={15} /></button></div>
    </div>
    {revealed && <div className={`reasoning ${isCorrect ? 'success' : ''}`}><div className="reasoning-icon">{isCorrect ? <Icon name="check" size={17} /> : <Icon name="spark" size={17} />}</div><div><strong>{isCorrect ? 'Your choice matches the passage.' : `Best answer: ${String.fromCharCode(65 + question.answer)}.`}</strong><p>{language === 'TR' ? question.explanationTr : question.explanation}</p><details><summary>Türkçe açıklama</summary><p>{question.explanationTr}</p></details><span className="clue"><b>Coach’s clue</b> {question.clue}</span></div></div>}
  </article>;
}

function LessonSection({ section, language, answers, onAnswer, revealed, onReveal, onComplete }) {
  const [showNote, setShowNote] = useState(true);
  const allAnswered = section.questions.every((question) => answers[question.id] !== undefined);
  useEffect(() => { if (allAnswered) onComplete(section.id); }, [allAnswered, onComplete, section.id]);
  return <section className={`lesson-section ${section.type}`} id={section.id}>
    <div className="section-heading"><div className="section-number">{section.number}</div><div><span className="section-label">{section.label}</span><h3>{section.title}</h3></div><span className="section-status">{allAnswered ? <><Icon name="check" size={14} /> complete</> : `${section.questions.length} hard questions`}</span></div>
    <p className="section-lead">{language === 'TR' ? section.leadTr : section.lead}</p>
    <BilingualCopy english={section.explanation} turkish={section.explanationTr} language="BOTH" />
    <button className="note-toggle" onClick={() => setShowNote(!showNote)}><Icon name={showNote ? 'chevron' : 'arrow'} size={15} /> <span>{showNote ? 'Collapse' : 'Open'} coaching note</span></button>
    {showNote && <div className="coaching-note"><div className="note-mark"><Icon name="spark" size={16} /></div><div><span className="copy-label">Coach’s note</span><p>{language === 'TR' ? section.noteTr : section.note}</p><div className="takeaway"><strong>Core takeaway</strong><span>{language === 'TR' ? section.takeawayTr : section.takeaway}</span></div></div></div>}
    <PassageAnnotation type={section.type} />
    <div className="practice-intro"><div><span className="section-label">Immediate retrieval practice</span><h4>Make the decision under pressure.</h4></div><span className="challenge-label">CHALLENGING</span></div>
    <div className="question-list">{section.questions.map((question, index) => <PracticeQuestion key={question.id} question={question} index={index} answers={answers} onAnswer={onAnswer} revealed={revealed[question.id]} onReveal={onReveal} language={language} />)}</div>
  </section>;
}

function Overview({ onStart, completed, language }) {
  const transitionCount = lessonSections.filter((s) => s.type === 'transition').reduce((sum, s) => sum + s.questions.length, 0);
  const inferenceCount = lessonSections.filter((s) => s.type === 'inference').reduce((sum, s) => sum + s.questions.length, 0);
  return <div className="overview-page"><div className="overview-hero"><div><span className="eyebrow">Digital SAT Reading · EN / TR</span><h1>Reading skills,<br /><em>made visible.</em></h1><p>{language === 'TR' ? 'Geçişleri görünür kılın. Çıkarımları kanıtla sınayın. Her nottan hemen sonra zor sorularla ilerleyin.' : 'Make transitions visible. Test inferences against evidence. Move forward with hard questions after every note.'}</p><button className="button primary large" onClick={onStart}>Begin the lesson <Icon name="arrow" size={17} /></button></div><div className="hero-diagram"><div className="diagram-top">IDEA A <span>→</span> IDEA B</div><div className="diagram-center"><span className="diagram-line" /><strong>logic</strong><span className="diagram-line" /></div><div className="diagram-bottom"><span>evidence</span><span>scope</span><span>decision</span></div></div></div><div className="overview-grid"><div className="overview-card primary-card"><span className="card-index">01</span><div><span className="section-label">Transitions</span><h2>Follow the author’s logic between ideas.</h2><p>Relationship labels, punctuation boundaries, and paragraph-level argument control.</p><button className="text-button" onClick={() => onStart('transition')}>Open transition notes <Icon name="arrow" size={15} /></button></div><strong className="card-count">{transitionCount}<small>hard questions</small></strong></div><div className="overview-card coral-card"><span className="card-index">02</span><div><span className="section-label">Inferences</span><h2>Make the strongest claim the passage can carry.</h2><p>Must-be-true discipline, two-anchor synthesis, and quantifier control.</p><button className="text-button" onClick={() => onStart('inference')}>Open inference notes <Icon name="arrow" size={15} /></button></div><strong className="card-count">{inferenceCount}<small>hard questions</small></strong></div></div><div className="overview-footer"><div><span className="section-label">Lesson architecture</span><h3>Explain → annotate → retrieve → review</h3></div><div className="architecture-steps"><span className="done"><b>01</b> Teach</span><span><b>02</b> Mark the evidence</span><span><b>03</b> Answer hard questions</span><span><b>04</b> Revisit misses</span></div><div className="completion-mini"><strong>{completed}</strong><span>of {lessonSections.length} blocks complete</span></div></div></div>;
}

function PracticeReview({ answers, revealed, onReveal, language, onNavigate }) {
  const allQuestions = lessonSections.flatMap((section) => section.questions.map((question) => ({ ...question, type: section.type })));
  const answered = allQuestions.filter((question) => answers[question.id] !== undefined);
  const correct = answered.filter((question) => answers[question.id] === question.answer);
  const accuracy = answered.length ? Math.round((correct.length / answered.length) * 100) : 0;
  return <section className="review-page" id="practice"><div className="review-header"><div><span className="eyebrow">Practice review</span><h1>Turn misses into<br /><em>repeatable decisions.</em></h1><p>Every hard question stays available here so you can inspect the reasoning instead of only seeing a score.</p></div><div className="score-orbit" style={{ '--score': `${accuracy}%` }}><div><strong>{correct.length}</strong><span>/ {answered.length || allQuestions.length} correct</span></div></div></div><div className="review-summary"><div><span>Answered</span><strong>{answered.length} / {allQuestions.length}</strong></div><div><span>Accuracy</span><strong>{accuracy}%</strong></div><div><span>Next move</span><strong>{answered.length === allQuestions.length ? 'Review misses' : 'Keep practicing'}</strong></div></div>{answered.length === 0 ? <div className="empty-review"><Icon name="note" size={27} /><h2>Your review shelf is ready.</h2><p>Answer a few hard questions and their reasoning will collect here.</p><button className="button primary" onClick={() => onNavigate('transition')}>Start with Transitions <Icon name="arrow" size={16} /></button></div> : <div className="review-list">{allQuestions.filter((question) => answers[question.id] !== undefined).map((question, index) => <PracticeQuestion key={question.id} question={question} index={index} answers={answers} onAnswer={() => {}} revealed={revealed[question.id]} onReveal={onReveal} language={language} />)}</div>}</section>;
}

function ProgressStrip({ completed, answered, correct, onReview }) {
  const progress = Math.round((completed / lessonSections.length) * 100);
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
  return <section className="progress-strip" aria-label="Current progress">
    <div><span className="copy-label">Course progress</span><strong>{progress}%</strong></div>
    <div className="strip-track"><span style={{ width: `${progress}%` }} /></div>
    <div className="strip-stat"><strong>{answered}</strong><span>of {ALL_QUESTIONS.length} answered</span></div>
    <div className="strip-stat"><strong>{accuracy}%</strong><span>accuracy</span></div>
    <button className="text-button" onClick={onReview}>Open review <Icon name="arrow" size={14} /></button>
  </section>;
}

function LessonJumpBar({ type }) {
  const sections = lessonSections.filter((section) => section.type === type);
  return <nav className="lesson-jumpbar" aria-label={`${type} lesson sections`}>
    <span>{type === 'transition' ? 'Transition notes' : 'Inference notes'}</span>
    <div>{sections.map((section) => <button key={section.id} onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}><b>{section.number}</b>{section.shortTitle}</button>)}</div>
  </nav>;
}

function StudyPlan({ completed, answered, correct, onNavigate, language }) {
  const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
  const days = [
    ['Day 1', 'Transition signals', 'Name the relationship before looking at the choices.', 'Önce ilişkiyi adlandırın, sonra seçeneklere bakın.', 'transition'],
    ['Day 2', 'Sentence boundaries', 'Separate grammar from logical meaning.', 'Dil bilgisini mantıksal anlamdan ayırın.', 'transition'],
    ['Day 3', 'Argument movement', 'Track claim, evidence, limitation, and conclusion.', 'İddia, kanıt, sınırlama ve sonucu takip edin.', 'transition'],
    ['Day 4', 'Evidence anchors', 'Require two textual facts before inferring.', 'Çıkarım yapmadan önce iki metinsel kanıt bulun.', 'inference'],
    ['Day 5', 'Scope control', 'Prefer the smallest claim all evidence supports.', 'Tüm kanıtların desteklediği en dar iddiayı seçin.', 'inference'],
    ['Day 6', 'Precision audit', 'Check every quantifier, cause word, and certainty level.', 'Her nicelik, neden ve kesinlik ifadesini kontrol edin.', 'inference'],
    ['Day 7', 'Error review', 'Redo misses without viewing the explanation first.', 'Açıklamayı açmadan yanlışları yeniden çözün.', 'practice'],
  ];
  return <section className="utility-page plan-page" id="plan">
    <div className="utility-hero"><div><span className="eyebrow">Seven-day study plan</span><h1>Build a repeatable<br /><em>reading routine.</em></h1><p>{language === 'TR' ? 'Her gün 25 dakika: öğren, uygula, hatayı adlandır ve ertesi gün kısa tekrar yap.' : 'Use 25 focused minutes each day: learn, apply, name the error, and revisit it briefly tomorrow.'}</p></div><div className="plan-snapshot"><span>Current snapshot</span><strong>{completed}/{lessonSections.length}</strong><small>teaching blocks complete</small><div><b>{answered}</b> answered · <b>{accuracy}%</b> accuracy</div></div></div>
    <div className="plan-grid">{days.map(([day, title, en, tr, destination], index) => <article className={index < completed ? 'complete' : index === completed ? 'today' : ''} key={day}><div className="plan-day"><span>{day}</span>{index < completed ? <Icon name="check" size={16} /> : <b>{String(index + 1).padStart(2, '0')}</b>}</div><h2>{title}</h2><p>{language === 'TR' ? tr : en}</p><button className="text-button" onClick={() => onNavigate(destination)}>{destination === 'practice' ? 'Open review' : 'Open lesson'} <Icon name="arrow" size={14} /></button></article>)}</div>
    <div className="study-protocol"><Icon name="target" size={26} /><div><span className="section-label">The 25-minute protocol</span><h2>6 min learn · 14 min answer · 5 min review</h2><p>Record the reasoning error—not merely the letter you chose. “I treated a contrast as an example” is useful; “I picked B” is not.</p></div></div>
  </section>;
}

const GLOSSARY = [
  ['Contrast', 'A turn that limits, challenges, or reverses an earlier idea.', 'Önceki fikri sınırlayan, sorgulayan veya tersine çeviren ilişki.'],
  ['Continuation', 'A move that adds aligned evidence or develops the same direction.', 'Aynı yönde ek kanıt sunan veya fikri geliştiren hareket.'],
  ['Cause and effect', 'A relationship in which one condition produces or helps explain another.', 'Bir koşulun başka bir sonucu doğurduğu veya açıkladığı ilişki.'],
  ['Concession', 'An admitted point followed by a qualification or stronger counterpoint.', 'Kabul edilen bir noktayı sınırlama veya daha güçlü karşı görüşün izlemesi.'],
  ['Inference', 'The narrowest new claim that must or most likely follows from the evidence.', 'Kanıttan zorunlu ya da en güçlü biçimde çıkan en dar yeni iddia.'],
  ['Scope', 'The exact population, time, degree, or condition covered by a claim.', 'Bir iddianın kapsadığı kesin grup, zaman, derece veya koşul.'],
  ['Quantifier', 'A limit word such as some, most, may, only, or always.', 'Some, most, may, only, always gibi kapsam belirleyen sözcük.'],
  ['Correlation', 'Two patterns occurring together without proof that one caused the other.', 'Birinin diğerine neden olduğu kanıtlanmadan iki örüntünün birlikte görülmesi.'],
];

function ResourcesPage({ language, onNavigate }) {
  const [query, setQuery] = useState('');
  const filtered = GLOSSARY.filter((entry) => entry.join(' ').toLocaleLowerCase('tr').includes(query.toLocaleLowerCase('tr')));
  return <section className="utility-page resources-page" id="resources">
    <div className="utility-heading"><div><span className="eyebrow">Bilingual resource shelf</span><h1>Find the language<br /><em>behind the logic.</em></h1><p>{language === 'TR' ? 'Temel SAT okuma kavramlarını İngilizce ve Türkçe olarak hızlıca bulun.' : 'Quickly retrieve the core language of SAT reading in English and Turkish.'}</p></div><div className="resource-actions"><button className="button primary" onClick={() => onNavigate('transition')}>Transition notes <Icon name="arrow" size={15} /></button><button className="button secondary" onClick={() => onNavigate('inference')}>Inference notes <Icon name="arrow" size={15} /></button></div></div>
    <label className="resource-search"><Icon name="search" size={19} /><span className="sr-only">Search the glossary</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search English or Turkish terms…" /></label>
    <div className="glossary-grid">{filtered.map(([term, english, turkish]) => <article key={term}><span className="term-index">{String(GLOSSARY.findIndex((entry) => entry[0] === term) + 1).padStart(2, '0')}</span><h2>{term}</h2><p>{english}</p><p className="turkish-definition">{turkish}</p></article>)}</div>
    {!filtered.length && <div className="empty-resource">No matching term yet. Try “scope”, “contrast”, or “kanıt”.</div>}
  </section>;
}

function SettingsPage({ language, setLanguage, reducedMotion, setReducedMotion, onReset }) {
  return <section className="utility-page settings-page" id="settings">
    <div className="utility-heading"><div><span className="eyebrow">Learning preferences</span><h1>Make the workspace<br /><em>work for you.</em></h1><p>Preferences are saved on this device together with your lesson progress.</p></div></div>
    <div className="settings-list">
      <article><div className="setting-icon"><Icon name="book" /></div><div><h2>Explanation language</h2><p>Choose the language used for prompts, coaching notes, and answer explanations. Core teaching comparisons remain bilingual.</p></div><div className="segmented-control" role="group" aria-label="Explanation language"><button className={language === 'EN' ? 'selected' : ''} onClick={() => setLanguage('EN')}>English</button><button className={language === 'TR' ? 'selected' : ''} onClick={() => setLanguage('TR')}>Türkçe</button></div></article>
      <article><div className="setting-icon"><Icon name="eye" /></div><div><h2>Reduce motion</h2><p>Turn off smooth scrolling and interface movement while keeping every feature available.</p></div><button className={`switch ${reducedMotion ? 'on' : ''}`} role="switch" aria-checked={reducedMotion} onClick={() => setReducedMotion(!reducedMotion)}><span /><b>{reducedMotion ? 'On' : 'Off'}</b></button></article>
      <article className="danger-setting"><div className="setting-icon"><Icon name="reset" /></div><div><h2>Reset study progress</h2><p>Clear saved answers and completed teaching blocks on this device. Language and motion preferences stay unchanged.</p></div><button className="button danger" onClick={onReset}>Reset progress</button></article>
    </div>
  </section>;
}

function MobileBottomNav({ activeId, onNavigate }) {
  const items = [
    ['overview', 'home', 'Overview'],
    ['transition', 'book', 'Lessons'],
    ['plan', 'calendar', 'Plan'],
    ['practice', 'chart', 'Review'],
  ];
  return <nav className="mobile-bottom-nav" aria-label="Quick navigation">{items.map(([id, icon, label]) => { const active = id === 'transition' ? ['transition', 'inference'].includes(activeId) : activeId === id; return <button key={id} className={active ? 'active' : ''} aria-current={active ? 'page' : undefined} onClick={() => onNavigate(id)}><Icon name={icon} size={19} /><span>{label}</span></button>; })}</nav>;
}

function RightRail({ activeId, completed, answered, correct, language, onNavigate }) {
  const progress = Math.round((completed / lessonSections.length) * 100);
  const nextDestination = activeId === 'overview' ? 'transition' : activeId === 'transition' ? 'inference' : activeId === 'inference' ? 'practice' : 'overview';
  const nextLabel = activeId === 'practice' ? 'Back to overview' : 'Continue lesson';
  return <aside className="right-rail"><div className="rhythm-card"><div className="rail-heading"><h2>Study rhythm</h2><span>Live progress</span></div><div className="rhythm-progress"><div className="progress-ring" style={{ '--progress': `${progress}%` }}><span>{completed}</span><small>/ {lessonSections.length}</small></div><div><strong>steps complete</strong><p>{answered} of {ALL_QUESTIONS.length} questions answered</p><p>{answered ? Math.round((correct / answered) * 100) : 0}% current accuracy</p></div></div><div className="rail-steps"><span className="done"><b><Icon name="check" size={13} /></b>Read the teaching</span><span className={activeId === 'transition' ? 'current' : ''}><b>01</b>Transitions</span><span className={activeId === 'inference' ? 'current' : ''}><b>02</b>Inferences</span><span className={activeId === 'practice' ? 'current' : ''}><b>03</b>Review answers</span></div><button className="button primary full" onClick={() => onNavigate(nextDestination)}>{nextLabel} <Icon name="arrow" size={16} /></button><div className="rail-divider" /><span className="copy-label">In this lesson</span><div className="rail-links">{lessonSections.map((section) => <button key={section.id} onClick={() => { onNavigate(section.type); window.setTimeout(() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80); }}><span>{section.number}</span>{section.shortTitle}<Icon name="arrow" size={13} /></button>)}<button onClick={() => onNavigate('practice')}><span><Icon name="chart" size={14} /></span>Practice review<Icon name="arrow" size={13} /></button></div></div><div className="rail-tip"><span className="tip-star"><Icon name="spark" size={16} /></span><div><strong>Northstar cue</strong><p>{language === 'TR' ? 'Cevap seçmeden önce ilişkinin veya kanıtın kapsamını tek cümlede söyle.' : 'Before choosing, say the relationship or evidence scope in one sentence.'}</p></div></div></aside>;
}

function App() {
  const [savedProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
  });
  const [language, setLanguage] = useState(savedProgress.language || 'EN');
  const [activeId, setActiveId] = useState(savedProgress.activeId || 'overview');
  const [mobileNav, setMobileNav] = useState(false);
  const [answers, setAnswers] = useState(savedProgress.answers || {});
  const [revealed, setRevealed] = useState({});
  const [completedBlocks, setCompletedBlocks] = useState(savedProgress.completedBlocks || []);
  const [reducedMotion, setReducedMotion] = useState(savedProgress.reducedMotion || false);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, completedBlocks, language, activeId, reducedMotion }));
  }, [activeId, answers, completedBlocks, language, reducedMotion]);
  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMobileNav(false); };
    document.addEventListener('keydown', closeOnEscape);
    document.body.classList.toggle('nav-open', mobileNav);
    return () => { document.removeEventListener('keydown', closeOnEscape); document.body.classList.remove('nav-open'); };
  }, [mobileNav]);

  const completed = useMemo(() => completedBlocks.length, [completedBlocks]);
  const answered = useMemo(() => ALL_QUESTIONS.filter((question) => answers[question.id] !== undefined).length, [answers]);
  const correct = useMemo(() => ALL_QUESTIONS.filter((question) => answers[question.id] === question.answer).length, [answers]);
  const navigate = useCallback((destination = 'overview') => {
    setActiveId(destination);
    setMobileNav(false);
    const target = destination;
    window.setTimeout(() => {
      const element = document.getElementById(target);
      if (element) element.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
    }, 40);
  }, [reducedMotion]);
  const startLesson = (type) => navigate(type || 'transition');
  const answerQuestion = useCallback((id, choice) => {
    setAnswers((current) => ({ ...current, [id]: choice }));
    setRevealed((current) => current[id] ? { ...current, [id]: false } : current);
  }, []);
  const revealQuestion = (id) => setRevealed((current) => ({ ...current, [id]: !current[id] }));
  const completeBlock = useCallback((id) => setCompletedBlocks((current) => current.includes(id) ? current : [...current, id]), []);
  const resetProgress = () => {
    if (!window.confirm('Reset all saved answers and completed lesson blocks on this device?')) return;
    setAnswers({});
    setRevealed({});
    setCompletedBlocks([]);
    navigate('overview');
  };
  const learningPage = ['overview', 'transition', 'inference', 'practice'].includes(activeId);
  const pageTitles = { overview: 'Course overview', transition: 'Transitions', inference: 'Inferences', practice: 'Practice review', plan: 'Study plan', resources: 'Resources', settings: 'Settings' };

  return <div className={`app-shell ${reducedMotion ? 'reduce-motion' : ''}`}>
    <Sidebar activeId={activeId} onNavigate={navigate} open={mobileNav} onClose={() => setMobileNav(false)} completed={completed} />
    {mobileNav && <button className="nav-backdrop" aria-label="Close navigation" onClick={() => setMobileNav(false)} />}
    <div className="main-shell">
      <Topbar language={language} setLanguage={setLanguage} onMenu={() => setMobileNav(true)} title={pageTitles[activeId]} />
      <main className={learningPage ? '' : 'utility-layout'}>
        <div className="content-column">
          {learningPage && <div className="study-header"><LessonMap activeId={activeId} onNavigate={navigate} /><div className="study-title"><div><span className="eyebrow">Digital SAT Reading · Northstar notes</span><h1>Transitions + Inferences</h1><p>{language === 'TR' ? 'Her açıklamayı İngilizce okuyun, Türkçe karşılığını açın ve hemen ardından zor soruyla uygulayın.' : 'Read the explanation in English, use the Turkish scaffold, then apply it immediately with a hard question.'}</p></div><div className="save-state saved"><span />Autosaved</div></div></div>}
          {learningPage && <ProgressStrip completed={completed} answered={answered} correct={correct} onReview={() => navigate('practice')} />}
          {activeId === 'overview' && <Overview onStart={startLesson} completed={completed} language={language} />}
          {activeId === 'transition' && <><TypeIntro type="transition" language={language} onStart={() => document.getElementById('transition-signal')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })} /><LessonJumpBar type="transition" />{lessonSections.filter((section) => section.type === 'transition').map((section) => <LessonSection key={section.id} section={section} language={language} answers={answers} onAnswer={answerQuestion} revealed={revealed} onReveal={revealQuestion} onComplete={completeBlock} />)}</>}
          {activeId === 'inference' && <><TypeIntro type="inference" language={language} onStart={() => document.getElementById('inference-evidence')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })} /><LessonJumpBar type="inference" />{lessonSections.filter((section) => section.type === 'inference').map((section) => <LessonSection key={section.id} section={section} language={language} answers={answers} onAnswer={answerQuestion} revealed={revealed} onReveal={revealQuestion} onComplete={completeBlock} />)}</>}
          {activeId === 'practice' && <PracticeReview answers={answers} revealed={revealed} onReveal={revealQuestion} language={language} onNavigate={navigate} />}
          {activeId === 'plan' && <StudyPlan completed={completed} answered={answered} correct={correct} onNavigate={navigate} language={language} />}
          {activeId === 'resources' && <ResourcesPage language={language} onNavigate={navigate} />}
          {activeId === 'settings' && <SettingsPage language={language} setLanguage={setLanguage} reducedMotion={reducedMotion} setReducedMotion={setReducedMotion} onReset={resetProgress} />}
        </div>
        {learningPage && <RightRail activeId={activeId} completed={completed} answered={answered} correct={correct} language={language} onNavigate={navigate} />}
      </main>
    </div>
    <MobileBottomNav activeId={activeId} onNavigate={navigate} />
  </div>;
}

export default App;
