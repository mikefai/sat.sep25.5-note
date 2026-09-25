export const lessonSections = [
  {
    id: 'transition-signal',
    type: 'transition',
    number: '01',
    label: 'Transition logic',
    title: 'Classify the relationship before you look at the choices.',
    shortTitle: 'Relationship first',
    lead: 'A transition is not a decoration between sentences. It is a compact instruction about how the next idea should be read.',
    leadTr: 'Geçiş ifadesi cümleler arasında süs değildir. Sonraki fikri nasıl okumamız gerektiğini söyleyen kısa bir talimattır.',
    explanation: 'On the SAT, the blank can be filled by a familiar word and still be wrong. First name the relationship: Does sentence 2 oppose sentence 1, explain its result, narrow its claim, add a parallel point, or correct an expectation? Only then compare the answer choices. A reliable test is to replace the transition with your own plain-language label—“but,” “so,” “in other words,” or “also”—before choosing the polished option.',
    explanationTr: 'SAT’te boşluk, tanıdık bir kelimeyle doldurulabilir ama yine de yanlış olabilir. Önce ilişkiyi adlandırın: 2. cümle 1. cümleye karşı mı çıkıyor, sonucunu mu açıklıyor, iddiasını mı daraltıyor, benzer bir nokta mı ekliyor, yoksa bekleneni mi düzeltiyor? Sonra seçenekleri karşılaştırın. Güvenilir bir yöntem, geçiş ifadesini seçmeden önce kendi sade etiketinizle—“ama”, “bu yüzden”, “başka bir deyişle” veya “ayrıca”—değiştirmektir.',
    note: 'Hard-question habit: cover the answer choices and write the relationship in 3–5 words. If your label is “unexpected exception,” an additive choice such as “likewise” is already disqualified.',
    noteTr: 'Zor soru alışkanlığı: cevap seçeneklerini kapatıp ilişkiyi 3–5 kelimeyle yazın. Etiketiniz “beklenmedik istisna” ise “likewise / benzer şekilde” gibi ekleme bildiren bir seçenek elenir.',
    takeaway: 'Meaning controls the transition; vocabulary only disguises the decision.',
    takeawayTr: 'Geçişi anlam belirler; kelime bilgisi yalnızca kararı gizler.',
    questions: [
      {
        id: 'ts-1',
        difficulty: 'Very hard',
        passage: 'For decades, ecologists assumed that a forest’s oldest trees were its most important carbon stores. Recent measurements complicate that picture: young, rapidly growing trees can remove carbon from the atmosphere at a faster annual rate than their older neighbors. _____, conservation plans that protect old-growth stands should not treat younger regrowth as ecologically disposable.',
        choices: ['For example,', 'Nevertheless,', 'In addition,', 'Similarly,'],
        answer: 1,
        explanation: 'Nevertheless signals a concession: the second sentence does not deny the value of old trees, but it resists the conclusion that young regrowth is disposable. The first sentence establishes the old-growth assumption; the measurements introduce a fact that limits it.',
        explanationTr: '“Nevertheless” bir taviz/karşıtlık ilişkisi kurar: ikinci cümle yaşlı ağaçların değerini reddetmez, fakat genç yeniden büyümelerin değersiz olduğu sonucuna karşı çıkar. İlk cümle eski orman varsayımını kurar; ölçümler bu varsayımı sınırlar.',
        clue: 'The second sentence keeps the old claim partly alive, then blocks an overgeneralization.'
      },
      {
        id: 'ts-2',
        difficulty: 'Very hard',
        passage: 'A study of bilingual readers found that switching languages while taking notes sometimes slowed participants down. The same participants, however, later recalled the structure of an argument more accurately when their notes preserved key terms in both languages. _____, the extra time spent during note-taking may have supported a more durable representation of the text.',
        choices: ['As a result,', 'By contrast,', 'For instance,', 'In other words,'],
        answer: 0,
        explanation: 'As a result introduces the consequence of the finding in the previous sentence. The slower note-taking is not presented as an unrelated contrast; it is reinterpreted as a possible cause of stronger later recall.',
        explanationTr: '“As a result” önceki bulgunun sonucunu tanıtır. Daha yavaş not alma bağımsız bir karşıtlık olarak sunulmuyor; daha güçlü sonraki hatırlamanın olası nedeni olarak yeniden yorumlanıyor.',
        clue: 'Ask what the final sentence is doing with the evidence: it draws a consequence, not a second example.'
      },
      {
        id: 'ts-3',
        difficulty: 'Very hard',
        passage: 'The archive’s catalog lists the painter’s letters in chronological order, which makes the development of her ideas easy to trace. _____, the catalog groups the letters by correspondent in a second index, allowing researchers to follow how a single relationship changed over time.',
        choices: ['In contrast,', 'Consequently,', 'Moreover,', 'Instead,'],
        answer: 2,
        explanation: 'Moreover adds a compatible second benefit. The chronological catalog and the correspondent index are both useful structures; the second does not replace or contradict the first.',
        explanationTr: '“Moreover” uyumlu ikinci bir yarar ekler. Kronolojik katalog ve muhataba göre dizin birlikte faydalıdır; ikincisi birincinin yerine geçmez ve onunla çelişmez.',
        clue: 'Both indexing systems survive. That rules out contrast and replacement transitions.'
      }
    ]
  },
  {
    id: 'transition-grammar',
    type: 'transition',
    number: '02',
    label: 'Punctuation + grammar',
    title: 'Make the relationship fit the sentence boundary.',
    shortTitle: 'Boundary check',
    lead: 'A transition question tests two systems at once: logic between ideas and grammar at the blank.',
    leadTr: 'Bir geçiş sorusu aynı anda iki sistemi test eder: fikirler arasındaki mantık ve boşluktaki dilbilgisi.',
    explanation: 'Treat the punctuation around the blank as evidence. A conjunctive adverb such as however or therefore often appears after a period or semicolon and is followed by a comma. A coordinating conjunction such as but normally joins two independent clauses after a comma. The SAT may offer choices that express the right relationship but create a comma splice, a fragment, or a sentence that cannot attach grammatically. Logic gets you to the shortlist; the boundary gets you to the answer.',
    explanationTr: 'Boşluğun çevresindeki noktalama işaretlerini kanıt olarak görün. “However” veya “therefore” gibi bağlaç işlevli zarflar çoğunlukla nokta ya da noktalı virgülden sonra gelir ve virgülle devam eder. “But” gibi eşdüzey bağlaçlar genellikle virgülden sonra iki bağımsız cümleyi bağlar. SAT, doğru ilişkiyi ifade eden ama virgül hatası, eksik cümle ya da dilbilgisel olarak bağlanamayan seçenekler sunabilir. Mantık kısa listeyi oluşturur; sınır doğru cevabı seçtirir.',
    note: 'Three-second boundary scan: read only the words immediately before and after the blank. Decide whether the blank needs a sentence opener, a mid-sentence connector, or no punctuation at all.',
    noteTr: 'Üç saniyelik sınır taraması: yalnızca boşluktan hemen önceki ve sonraki kelimeleri okuyun. Boşluğun cümle başlatıcısı mı, cümle içi bağlayıcı mı, yoksa noktalamasız bir yapı mı istediğine karar verin.',
    takeaway: 'A grammatically impossible transition cannot be rescued by a beautiful meaning.',
    takeawayTr: 'Dilbilgisel olarak imkânsız bir geçiş, güzel bir anlamla kurtarılamaz.',
    questions: [
      {
        id: 'tg-1',
        difficulty: 'Very hard',
        passage: 'The team expected the algae-based material to decompose quickly in ordinary soil; _____, samples stored in dry conditions remained intact for months.',
        choices: ['as a result', 'however', 'for example', 'and'],
        answer: 1,
        explanation: 'However fits both the contrast and the semicolon boundary: “; however, samples…” The other contrast-like structure, “and,” would not express the unexpected result, while “as a result” reverses the logic.',
        explanationTr: '“However” hem karşıtlığa hem de noktalı virgül sınırına uyar: “; however, samples…” “And” karşıtlığı vermez; “as a result” ise mantığı tersine çevirir.',
        clue: 'The expectation and the observed result move in opposite directions; the semicolon requires a sentence-level connector.'
      },
      {
        id: 'tg-2',
        difficulty: 'Very hard',
        passage: 'The first experiment measured short-term attention. _____ the second experiment tracked participants for six weeks, it could reveal whether the initial effect lasted.',
        choices: ['Because', 'Nevertheless,', 'For instance,', 'In contrast,'],
        answer: 0,
        explanation: 'Because creates the needed dependent relationship: “Because the second experiment tracked…, it could reveal…” The comma after the blank is appropriate after a long introductory dependent clause. “Nevertheless” would require the second experiment to oppose the first, but the sentence emphasizes what the design makes possible.',
        explanationTr: '“Because” gerekli bağımlı ilişkiyi kurar: “İkinci deney altı hafta boyunca izlediği için, ilk etkinin sürüp sürmediğini gösterebilir.” “Nevertheless” ilk deneyle karşıtlık kurulmasını gerektirirdi; burada vurgu tasarımın neyi mümkün kıldığıdır.',
        clue: 'The opening clause supplies the reason the second experiment can answer a stronger question.'
      },
      {
        id: 'tg-3',
        difficulty: 'Very hard',
        passage: 'Some historians interpret the sudden drop in ship arrivals as evidence of a regional famine. The port records are incomplete; _____, a new tax may have redirected ships to a neighboring harbor.',
        choices: ['therefore', 'for example', 'however', 'similarly'],
        answer: 2,
        explanation: 'However fits the contrast and the boundary: “The port records are incomplete; however, a new tax may have redirected ships…” The second clause offers an alternative explanation that weakens the famine interpretation. “Therefore” would strengthen the interpretation rather than question it.',
        explanationTr: '“However” hem karşıtlığa hem de noktalama sınırına uyar: “The port records are incomplete; however, a new tax…” İkinci cümlecik, kıtlık yorumunu zayıflatan alternatif bir açıklama sunar. “Therefore” ise yorumu güçlendirirdi.',
        clue: 'The semicolon creates a sentence boundary; the comma after however completes the conjunctive-adverb pattern.'
      }
    ]
  },
  {
    id: 'transition-discourse',
    type: 'transition',
    number: '03',
    label: 'Discourse control',
    title: 'Track the author’s argument, not just the nearest sentence.',
    shortTitle: 'Argument map',
    lead: 'The hardest transitions operate across a paragraph: the author may shift from a study’s result to its limitation, then to a qualified implication.',
    leadTr: 'En zor geçiş soruları paragraf düzeyinde çalışır: yazar bir çalışmanın sonucundan sınırlılığına, oradan da ölçülü bir çıkarıma geçebilir.',
    explanation: 'Before answering, compress the previous sentence and the next sentence into verbs: “reports,” “qualifies,” “extends,” “reframes,” or “limits.” A transition is correct only if it describes the move between those actions. Be suspicious of lexical echoes: a passage may repeat the word “evidence,” but the logic can still shift from evidence to a limitation. The right answer preserves the author’s degree of certainty.',
    explanationTr: 'Cevaplamadan önce önceki ve sonraki cümleyi fiillerle sıkıştırın: “bildiriyor”, “sınırlandırıyor”, “genişletiyor”, “yeniden çerçeveliyor” veya “ölçülendiriyor.” Bir geçiş yalnızca bu eylemler arasındaki hareketi doğru açıklıyorsa doğrudur. Kelime tekrarlarına karşı dikkatli olun: “evidence” kelimesi tekrar edilebilir ama mantık kanıttan sınırlılığa kayabilir. Doğru seçenek yazarın kesinlik derecesini korur.',
    note: 'Precision rule: “therefore” claims a result; “this suggests” would be weaker. When the passage itself is cautious, do not select a transition that upgrades a possibility into certainty.',
    noteTr: 'Kesinlik kuralı: “therefore” sonuç iddia eder; “this suggests” daha zayıftır. Parça temkinliyse olasılığı kesinliğe yükselten bir geçiş seçmeyin.',
    takeaway: 'The best transition matches both direction and strength.',
    takeawayTr: 'En iyi geçiş hem yönü hem de kesinlik düzeyini eşleştirir.',
    questions: [
      {
        id: 'td-1',
        difficulty: 'Very hard',
        passage: 'In a field trial, shaded seedlings survived a heat wave more often than unshaded seedlings. The trial took place under a single canopy type and did not measure root development. _____, its result supports shade as a promising intervention, not as a universal solution for drought-stressed forests.',
        choices: ['Accordingly,', 'For example,', 'Nevertheless,', 'In the same way,'],
        answer: 2,
        explanation: 'Nevertheless preserves the tension between a promising result and important limitations. Accordingly would overstate the result as a straightforward conclusion; the next sentence narrows the claim instead.',
        explanationTr: '“Nevertheless” umut verici sonuç ile önemli sınırlılıklar arasındaki gerilimi korur. “Accordingly” sonucu doğrudan ve kesin bir çıkarım gibi güçlendirirdi; oysa sonraki cümle iddiayı daraltıyor.',
        clue: 'The conclusion is positive but deliberately limited: promising is not universal.'
      },
      {
        id: 'td-2',
        difficulty: 'Very hard',
        passage: 'The novel’s recurring mirrors are often read as symbols of self-knowledge. In the final chapter, however, the protagonist avoids every reflective surface while making her most honest confession. _____, the motif may mark not recognition itself but the discomfort that precedes it.',
        choices: ['As a result,', 'For instance,', 'Likewise,', 'In contrast,'],
        answer: 0,
        explanation: 'As a result introduces the interpretive implication of the final-chapter detail. The sentence does not provide another example; it draws a consequence from the protagonist’s changed behavior.',
        explanationTr: '“As a result” son bölümdeki ayrıntının yorum bakımından sonucunu tanıtır. Cümle başka bir örnek vermiyor; karakterin değişen davranışından bir sonuç çıkarıyor.',
        clue: 'The blank introduces a reading of the motif, so choose consequence rather than addition.'
      },
      {
        id: 'td-3',
        difficulty: 'Very hard',
        passage: 'A survey found that commuters who listened to music reported shorter journeys, even when their travel times were identical to those of other participants. The survey did not test whether music changed attention or simply improved mood. _____, the finding should be treated as a report about perception rather than proof that music makes transit faster.',
        choices: ['In other words,', 'Therefore,', 'Similarly,', 'For example,'],
        answer: 0,
        explanation: 'In other words restates the appropriate scope of the claim: reported experience, not physical travel speed. Therefore would make the causal conclusion too strong given the survey’s untested mechanism.',
        explanationTr: '“In other words” iddianın uygun kapsamını yeniden ifade eder: fiziksel hız değil, bildirilen deneyim. “Therefore” mekanizma test edilmediği için nedensel sonucu gereğinden fazla güçlendirirdi.',
        clue: 'The second sentence is a careful reframing, not a new causal claim.'
      }
    ]
  },
  {
    id: 'inference-evidence',
    type: 'inference',
    number: '04',
    label: 'Inference evidence',
    title: 'Infer only what the text makes unavoidable.',
    shortTitle: 'Must be true',
    lead: 'An inference is not your best theory about the topic. It is the strongest statement that the passage itself compels you to accept.',
    leadTr: 'Çıkarım, konu hakkındaki en iyi teoriniz değildir. Metnin sizi kabul etmeye zorladığı en güçlü ifadedir.',
    explanation: 'For an inference, separate three levels: stated, entailed, and merely plausible. The correct answer is usually entailed—it is not copied word-for-word, but it follows from two or more details. Wrong answers often sound insightful because they add a motive, a cause, a judgment, or a future prediction that the text never supplies. Use the “could the opposite still be true?” test. If the opposite could coexist with the passage, your answer is too strong.',
    explanationTr: 'Çıkarım sorusunda üç düzeyi ayırın: doğrudan söylenen, zorunlu olarak çıkan ve yalnızca makul olan. Doğru cevap genellikle ikinci düzeydedir; kelimesi kelimesine yazmaz ama iki veya daha fazla ayrıntıdan zorunlu olarak çıkar. Yanlış seçenekler metnin vermediği bir niyet, neden, yargı veya gelecek tahmini eklediği için zeki görünebilir. “Tersi hâlâ mümkün mü?” testini kullanın. Tersi parçada birlikte mümkünse cevabınız fazla güçlüdür.',
    note: 'Inference discipline: underline the exact words that make your answer necessary. If you cannot point to two anchors, you are probably importing outside knowledge.',
    noteTr: 'Çıkarım disiplini: cevabınızı zorunlu kılan kelimelerin altını çizin. İki dayanak gösteremiyorsanız muhtemelen dış bilgiyi metne taşıyorsunuz.',
    takeaway: 'Plausible is not enough; the passage must carry the conclusion.',
    takeawayTr: 'Makul olması yetmez; sonucu metin taşımalıdır.',
    questions: [
      {
        id: 'ie-1',
        difficulty: 'Very hard',
        passage: 'When researchers offered museum visitors either a wall label or a short audio guide, visitors using the audio guide spent longer near the objects. Exit interviews, however, showed no difference between the groups in the number of artists visitors could name. The researchers conclude that time spent near an object is not, by itself, a reliable measure of learning.',
        prompt: 'Which inference is best supported by the passage?',
        choices: ['Audio guides make visitors more interested in art history than wall labels do.', 'Visitors can spend more time with an object without retaining more artist names.', 'Museum visitors generally prefer listening to reading.', 'Naming artists is the only valid measure of museum learning.'],
        answer: 1,
        explanation: 'The audio group stayed longer, but both groups named the same number of artists. Therefore, longer engagement can occur without the measured increase in retention. The passage does not establish preference, general interest, or that naming artists is the only valid measure.',
        explanationTr: 'Sesli rehber grubunda kalma süresi daha uzundu, ancak iki grup da aynı sayıda sanatçı adı verdi. Buradan, daha uzun etkileşimin ölçülen hatırlama artışı olmadan gerçekleşebileceği çıkar. Tercih, genel ilgi veya sanatçı adlarının tek geçerli ölçü olduğu kanıtlanmıyor.',
        clue: 'Pair the behavioral measure with the outcome measure; the inference comes from their mismatch.'
      },
      {
        id: 'ie-2',
        difficulty: 'Very hard',
        passage: 'A coastal town replaced several concrete drainage channels with planted channels designed to slow stormwater. During the first year, the planted channels reduced peak runoff after moderate storms. During two unusually intense storms, runoff briefly exceeded the channels’ capacity, though flooding still began later than it had before the replacement. The town’s report recommends expanding the system while revising its design for extreme events.',
        prompt: 'Which inference is best supported by the passage?',
        choices: ['The planted channels prevent flooding during storms of any intensity.', 'The original concrete channels were less expensive to maintain.', 'The planted system can delay flooding even when it cannot contain all runoff.', 'Extreme storms are becoming more common in the coastal town.'],
        answer: 2,
        explanation: 'The passage directly connects two facts: the system exceeded capacity during extreme storms, yet flooding began later. That supports delay without total prevention. Cost and storm frequency are not reported, and the first choice contradicts the capacity limit.',
        explanationTr: 'Parça iki olguyu bağlar: sistem aşırı fırtınalarda kapasiteyi aştı, fakat sel yine de daha geç başladı. Bu, tamamen önlemese bile geciktirebildiğini destekler. Maliyet ve fırtına sıklığı verilmemiştir; ilk seçenek kapasite sınırıyla çelişir.',
        clue: 'Do not convert “reduced” or “delayed” into “eliminated.” SAT inferences preserve the verb’s limits.'
      },
      {
        id: 'ie-3',
        difficulty: 'Very hard',
        passage: 'In a set of letters, the engineer Mira Sen repeatedly praises inexpensive materials when writing to junior colleagues. In letters to investors, she emphasizes durability and avoids mentioning cost. Her laboratory notebooks from the same period show that she tested both low-cost and premium materials, recording failures for each. No letter states that Sen held different technical standards for different audiences.',
        prompt: 'Which inference is best supported by the passage?',
        choices: ['Sen believed inexpensive materials were always technically superior.', 'Sen tailored which material features she emphasized to her audience.', 'Sen concealed all failures from investors.', 'Sen’s junior colleagues were responsible for the laboratory tests.'],
        answer: 1,
        explanation: 'The letters show different emphases by audience, while the notebooks show that she tested both material types and recorded failures for each. The safest inference is strategic emphasis, not a change in standards or concealment of all failures.',
        explanationTr: 'Mektuplar, izleyiciye göre farklı özelliklerin vurgulandığını; defterler ise her iki malzeme türünün test edilip her biri için başarısızlıkların kaydedildiğini gösteriyor. En güvenli çıkarım vurgu ayarlamasıdır; standart değişikliği veya tüm başarısızlıkların gizlenmesi değildir.',
        clue: 'The contrast is in communication, not necessarily in belief. Keep the inference at the level the evidence supports.'
      }
    ]
  },
  {
    id: 'inference-synthesis',
    type: 'inference',
    number: '05',
    label: 'Synthesis across details',
    title: 'Combine details without inventing a bridge.',
    shortTitle: 'Two-anchor synthesis',
    lead: 'The hardest inference choices require you to hold two details in working memory and connect them with the smallest possible claim.',
    leadTr: 'En zor çıkarım seçenekleri iki ayrıntıyı zihinde tutup onları mümkün olan en küçük iddiayla birleştirmenizi ister.',
    explanation: 'Build a two-column evidence map: “detail A says…” and “detail B says…”. Then ask what both can support. If one answer explains A but ignores B, it is incomplete. If another explains B but adds a motive or prediction, it is overreach. The correct inference is often modest but structurally complete: it accounts for the tension, comparison, or sequence the author deliberately placed in the passage.',
    explanationTr: 'İki sütunlu bir kanıt haritası kurun: “A ayrıntısı şunu söylüyor…” ve “B ayrıntısı şunu söylüyor…”. Sonra ikisinin birlikte neyi desteklediğini sorun. Bir seçenek A’yı açıklayıp B’yi yok sayıyorsa eksiktir. Diğeri B’yi açıklarken niyet veya tahmin ekliyorsa aşırı çıkarımdır. Doğru çıkarım çoğu zaman mütevazıdır ama yapısal olarak bütündür; yazarın bilinçli biçimde kurduğu gerilimi, karşılaştırmayı veya sırayı hesaba katar.',
    note: 'When two details seem contradictory, do not “solve” the contradiction with outside knowledge. Look for the narrower conclusion that makes both details true at once.',
    noteTr: 'İki ayrıntı çelişkili görünüyorsa dış bilgiyle çelişkiyi “çözmeyin”. İki ayrıntıyı aynı anda doğru kılan daha dar sonucu arayın.',
    takeaway: 'Synthesis means less invention, not more interpretation.',
    takeawayTr: 'Sentez daha fazla yorum değil, daha az icat demektir.',
    questions: [
      {
        id: 'is-1',
        difficulty: 'Very hard',
        passage: 'In one city, a pilot program placed air-quality sensors on school buildings. The sensors produced detailed neighborhood readings, but schools reported that staff rarely had time to interpret them. After the city paired the readings with weekly plain-language summaries, school staff began using the data to adjust outdoor activity schedules. The program director calls the summaries a “translation layer” rather than a replacement for the sensors.',
        prompt: 'Which inference is best supported by the passage?',
        choices: ['Schools did not care about air quality until the city introduced sensors.', 'The sensors were inaccurate without the weekly summaries.', 'Making information usable can be necessary for data to influence decisions.', 'Plain-language summaries are more scientifically valid than raw readings.'],
        answer: 2,
        explanation: 'The sensors supplied detailed information, but action increased only after the information was translated into a usable form. The passage therefore supports a usability condition, not a claim that the sensors were inaccurate or that summaries are more valid.',
        explanationTr: 'Sensörler ayrıntılı bilgi sağladı, ancak eylem ancak bilgi kullanılabilir bir biçime çevrildikten sonra arttı. Bu nedenle parça, kullanılabilirliğin kararları etkilemek için gerekli olabileceğini destekler; sensörlerin yanlış olduğu veya özetlerin daha geçerli olduğu sonucunu değil.',
        clue: 'The director’s metaphor tells you the summaries add access, not scientific content.'
      },
      {
        id: 'is-2',
        difficulty: 'Very hard',
        passage: 'A linguist compared two endangered languages whose speakers live in neighboring regions. Language A has many words for stages of a river’s seasonal change but relatively few terms for kinship. Language B shows the opposite pattern. The linguist notes that the communities’ daily environments differ, yet she warns that vocabulary patterns alone cannot prove that environment determines what speakers notice.',
        prompt: 'Which inference is best supported by the passage?',
        choices: ['The two communities have identical family structures.', 'Speakers of Language A spend more time near rivers than speakers of Language B.', 'Vocabulary differences may reflect what is useful to discuss without proving a single cause.', 'The environment completely determines the concepts available in a language.'],
        answer: 2,
        explanation: 'The paired vocabulary patterns and the warning about causation support a cautious relationship: words may reflect communicative usefulness, but the evidence does not isolate one cause. The other choices claim facts the passage does not provide or contradict its warning.',
        explanationTr: 'Eşleştirilmiş kelime örüntüleri ve nedensellik uyarısı, temkinli bir ilişkiyi destekler: kelimeler iletişim açısından yararlı olanı yansıtabilir, fakat tek bir neden kanıtlanmaz. Diğer seçenekler verilmeyen olguları iddia eder veya uyarıyla çelişir.',
        clue: '“May reflect” matches the author’s caution; absolute language does not.'
      },
      {
        id: 'is-3',
        difficulty: 'Very hard',
        passage: 'An experiment asked participants to estimate the weight of unfamiliar objects after lifting them once. Estimates became more accurate when participants were allowed to compare each object with a familiar reference item. Yet the advantage disappeared when the reference item varied from trial to trial. The researchers therefore distinguish between comparison itself and a stable comparison standard.',
        prompt: 'Which inference is best supported by the passage?',
        choices: ['A single reference object can make every weight estimate accurate.', 'Comparison helps most when it supplies a consistent basis for judgment.', 'Participants remembered the reference object better than the unfamiliar objects.', 'Varying reference objects improves accuracy by preventing routine responses.'],
        answer: 1,
        explanation: 'Accuracy improved with comparison but not when the comparison standard changed. Together, those facts support the narrower principle that comparison is useful when it is stable. The passage does not claim perfect accuracy, memory differences, or a benefit from variability.',
        explanationTr: 'Karşılaştırma olduğunda doğruluk arttı, fakat karşılaştırma standardı değiştiğinde bu avantaj kayboldu. Birlikte ele alındığında bu, karşılaştırmanın sabit bir yargı temeli sağladığında yararlı olduğunu destekler. Kusursuz doğruluk, bellek farkı veya değişkenliğin yararı iddia edilmiyor.',
        clue: 'The key is not “comparison” alone; it is comparison plus stability.'
      }
    ]
  },
  {
    id: 'inference-precision',
    type: 'inference',
    number: '06',
    label: 'Precision under pressure',
    title: 'Respect quantity, scope, and uncertainty words.',
    shortTitle: 'Quantifier control',
    lead: 'A single word—some, often, only, may, the first—can decide whether an inference is faithful or exaggerated.',
    leadTr: '“Some”, “often”, “only”, “may”, “the first” gibi tek bir kelime, çıkarımın metne sadık mı yoksa abartılı mı olduğunu belirleyebilir.',
    explanation: 'Circle quantifiers and scope markers before evaluating choices. “Several” does not mean most. “Can” does not mean usually. “The study found no evidence” does not mean the effect is impossible. Correct inferences preserve these limits. On difficult questions, every wrong answer may share the passage’s topic; the separator is often a tiny scope expansion—from one sample to all people, from correlation to cause, or from a measured result to a motive.',
    explanationTr: 'Seçenekleri değerlendirmeden önce nicelik ve kapsam belirteçlerini daire içine alın. “Several / birkaç” çoğunluk demek değildir. “Can / -ebilir” genellikle demek değildir. “The study found no evidence / çalışma kanıt bulmadı” etkinin imkânsız olduğu anlamına gelmez. Doğru çıkarım bu sınırları korur. Zor sorularda yanlış seçeneklerin konusu aynı olabilir; ayrım çoğu zaman küçük bir kapsam genişlemesidir: bir örneklemden herkese, korelasyondan nedene veya ölçülmüş sonuçtan niyete geçiş.',
    note: 'Quantifier audit: compare every answer’s nouns and verbs with the passage. If an answer silently changes “participants” to “people” or “associated with” to “caused,” reject it.',
    noteTr: 'Nicelik denetimi: her seçenekteki isim ve fiilleri parçayla karşılaştırın. Cevap sessizce “participants / katılımcılar”ı “people / insanlar”a veya “associated with / ilişkili”yi “caused / neden oldu”ya çeviriyorsa eleyin.',
    takeaway: 'Inference accuracy lives in the smallest words.',
    takeawayTr: 'Çıkarım doğruluğu en küçük kelimelerde yaşar.',
    questions: [
      {
        id: 'ip-1',
        difficulty: 'Very hard',
        passage: 'In a survey of 120 first-year engineers, 38 said that drawing diagrams helped them plan solutions. Among those 38 respondents, most used diagrams only for unfamiliar problems. The survey did not ask whether the diagrams improved the final quality of the solutions.',
        prompt: 'Which inference is best supported by the passage?',
        choices: ['Most first-year engineers use diagrams for every problem.', 'For some surveyed engineers, diagrams were especially useful when problems were unfamiliar.', 'Drawing diagrams improves the quality of engineering solutions.', 'The engineers who avoided diagrams were less experienced.'],
        answer: 1,
        explanation: 'The passage supports “some surveyed engineers” because 38 of 120 reported the practice, and it supports unfamiliar problems because most of those 38 used diagrams in that situation. It does not support universal use, improved quality, or a comparison of experience.',
        explanationTr: 'Parça “ankete katılan bazı mühendisler” ifadesini destekler; çünkü 120 kişiden 38’i bu uygulamayı bildirmiştir. Ayrıca bu 38 kişinin çoğu şemaları yabancı problemler için kullanmıştır. Evrensel kullanım, kalite artışı veya deneyim karşılaştırması desteklenmiyor.',
        clue: 'Preserve both limits: the subgroup is 38, and the outcome quality was never measured.'
      },
      {
        id: 'ip-2',
        difficulty: 'Very hard',
        passage: 'A historical analysis finds that newspapers in three cities used the phrase “public health” more frequently after a series of factory closures. The author does not claim that the closures caused the phrase to become common; city councils were also debating sanitation ordinances during the same period. The analysis concludes only that the phrase became more prominent amid overlapping civic changes.',
        prompt: 'Which inference is best supported by the passage?',
        choices: ['Factory closures were the primary cause of public-health language.', 'Sanitation ordinances had no effect on newspaper language.', 'More than one civic development may have contributed to the phrase’s prominence.', 'Newspapers in all cities respond identically to economic events.'],
        answer: 2,
        explanation: 'The author explicitly presents factory closures and sanitation debates as overlapping changes and avoids a causal claim. “May have contributed” preserves that uncertainty and allows multiple influences. The other choices turn the cautious conclusion into a single cause, a null effect, or a universal rule.',
        explanationTr: 'Yazar fabrika kapanmalarıyla sağlık düzenlemeleri tartışmalarını aynı dönemde gerçekleşen değişimler olarak sunuyor ve nedensellik iddiasından kaçınıyor. “Katkıda bulunmuş olabilir” belirsizliği korur ve birden fazla etkiye izin verir. Diğerleri temkinli sonucu tek nedene, sıfır etkiye veya evrensel kurala dönüştürür.',
        clue: 'The correct answer should sound as cautious as the author, not more decisive.'
      },
      {
        id: 'ip-3',
        difficulty: 'Very hard',
        passage: 'Researchers observed that a group of desert plants opened their stomata at night rather than during the hottest daylight hours. The pattern reduces water loss, but the researchers note that it may also limit the plants’ access to carbon dioxide. They conclude that the nighttime schedule represents a trade-off, not an unqualified advantage.',
        prompt: 'Which inference is best supported by the passage?',
        choices: ['The plants grow faster than plants that open stomata during the day.', 'The nighttime schedule solves the plants’ water problem without cost.', 'The plants’ water-saving behavior may constrain another function needed for growth.', 'The plants open stomata at night because nighttime temperatures are always lower.'],
        answer: 2,
        explanation: 'The passage gives one benefit and one possible cost: less water loss but potentially less carbon dioxide access. The supported inference keeps that trade-off and avoids claiming faster growth, no cost, or a specific temperature cause.',
        explanationTr: 'Parça bir yarar ve olası bir maliyet verir: daha az su kaybı fakat muhtemelen daha az karbondioksit erişimi. Desteklenen çıkarım bu dengeyi korur; daha hızlı büyüme, maliyet yokluğu veya özel bir sıcaklık nedeni iddia etmez.',
        clue: 'A trade-off is not a win; it is a gain that constrains another goal.'
      }
    ]
  }
];

export const typeMeta = {
  transition: {
    label: 'Transitions',
    title: 'Follow the author’s logic between ideas.',
    subtitle: 'Meaning first. Punctuation second. Confidence last.',
    color: 'amber'
  },
  inference: {
    label: 'Inferences',
    title: 'Make the strongest claim the passage can carry.',
    subtitle: 'Evidence first. Scope always. No outside knowledge.',
    color: 'coral'
  }
};
