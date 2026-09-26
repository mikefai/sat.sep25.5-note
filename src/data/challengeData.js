const transitionQuestions = [
  {
    id: 'ct-01', difficulty: 'Very hard', category: 'Contrast',
    passage: 'Early climate models represented ocean currents in broad bands and therefore predicted relatively uniform warming along neighboring coastlines. High-resolution models now capture narrow eddies that carry cold water toward some bays while bypassing others. _____, two nearby coastal communities can face sharply different rates of warming even under the same regional climate trend.',
    choices: ['However,', 'For example,', 'Likewise,', 'Consequently,'], answer: 0,
    explanation: 'However marks the contrast between the older expectation of uniform warming and the newer finding of sharply different local outcomes. Consequently is tempting, but the last sentence primarily overturns the expectation established first.',
    explanationTr: '“However”, eski modellerin öngördüğü tekdüze ısınma ile yeni modellerin gösterdiği farklı yerel sonuçlar arasındaki karşıtlığı kurar. “Consequently” çekici görünse de son cümle öncelikle ilk beklentiyi tersine çevirir.',
    clue: 'Compare the old prediction with the new local pattern.'
  },
  {
    id: 'ct-02', difficulty: 'Very hard', category: 'Cause and result',
    passage: 'Engineers removed a series of obsolete barriers from a tidal creek, allowing sediment-rich water to reach an upstream marsh for the first time in decades. Within three years, the marsh surface rose enough to remain exposed during most high tides. _____, plants that cannot tolerate prolonged flooding began to recolonize the site.',
    choices: ['Nevertheless,', 'Consequently,', 'For instance,', 'Meanwhile,'], answer: 1,
    explanation: 'Consequently correctly introduces the ecological result of the marsh becoming higher and less frequently flooded. The final sentence is not merely simultaneous or illustrative; it follows causally from the changed elevation.',
    explanationTr: '“Consequently”, bataklık yüzeyinin yükselip daha az su altında kalmasının ekolojik sonucunu doğru biçimde verir. Son cümle yalnızca eşzamanlı bir olay ya da örnek değildir; yükselti değişiminin sonucudur.',
    clue: 'Ask what became possible because the marsh surface rose.'
  },
  {
    id: 'ct-03', difficulty: 'Hard', category: 'Illustration',
    passage: 'Literary scholars increasingly study citations not only as acknowledgments of earlier writing but also as signals of intellectual allegiance. _____, a seventeenth-century poet’s repeated references to one translator—rather than to the original classical author—may reveal which contemporary circle the poet hoped to join.',
    choices: ['As a result,', 'Nevertheless,', 'For example,', 'In other words,'], answer: 2,
    explanation: 'For example introduces a specific case that illustrates the general claim about citations signaling allegiance. The poet’s references do not restate or result from the claim; they demonstrate it.',
    explanationTr: '“For example”, atıfların düşünsel bağlılık gösterebileceğine ilişkin genel iddiayı somut bir örnekle açıklar. Şairin atıfları iddiayı yeniden söylemez veya ondan doğan bir sonuç değildir; iddiayı örnekler.',
    clue: 'The second sentence moves from a general scholarly idea to one concrete poet.'
  },
  {
    id: 'ct-04', difficulty: 'Hard', category: 'Addition',
    passage: 'The composer links the movements of her string quartet with a five-note pulse that returns at key structural moments. _____, she assigns fragments of the same melody to different instruments, so that no single player controls the theme for long.',
    choices: ['Instead,', 'Therefore,', 'By contrast,', 'Moreover,'], answer: 3,
    explanation: 'Moreover adds a second compatible technique that creates unity across the quartet. The distribution of the melody does not replace, oppose, or result from the recurring pulse.',
    explanationTr: '“Moreover”, dörtlüde bütünlük sağlayan ikinci ve uyumlu bir tekniği ekler. Melodinin çalgılar arasında dağıtılması, tekrar eden ritmin yerini almaz, ona karşı çıkmaz ve onun sonucu değildir.',
    clue: 'Both techniques operate together; neither cancels the other.'
  },
  {
    id: 'ct-05', difficulty: 'Very hard', category: 'Clarification',
    passage: 'Historian Laila Mensah argues that an archive’s silences are often produced by its filing practices rather than by a true absence of activity. _____, if officials created folders only for licensed merchants, the lack of files on unlicensed trade cannot establish that such trade never occurred.',
    choices: ['In other words,', 'Similarly,', 'Nevertheless,', 'As a result,'], answer: 0,
    explanation: 'In other words clarifies the abstract claim about archival silence by restating it as a concrete logical warning. The second sentence explains what the first claim means in practice.',
    explanationTr: '“In other words”, arşivdeki sessizliğe ilişkin soyut iddiayı somut bir mantıksal uyarı olarak yeniden açıklar. İkinci cümle ilk iddianın uygulamada ne anlama geldiğini gösterir.',
    clue: 'The example translates an abstract warning into plain research logic.'
  },
  {
    id: 'ct-06', difficulty: 'Very hard', category: 'Concession',
    passage: 'The newly restored telescope produces noisier images than modern observatories do, and individual stars are difficult to measure precisely. Its century-long photographic record, _____, allows astronomers to track slow changes that no recently built instrument could have observed.',
    choices: ['in addition,', 'nevertheless,', 'for example,', 'accordingly,'], answer: 1,
    explanation: 'Nevertheless concedes the instrument’s limitations while introducing a major compensating advantage. The record’s value persists despite the noisy images.',
    explanationTr: '“Nevertheless”, aracın sınırlılıklarını kabul ederken bunlara rağmen önemli bir avantaj sunar. Gürültülü görüntülere karşın uzun kayıt dizisi değerlidir.',
    clue: 'The second idea survives despite the weakness named first.'
  },
  {
    id: 'ct-07', difficulty: 'Hard', category: 'Specification',
    passage: 'Some migratory birds use features of city infrastructure as navigational cues. _____, tracking data show that one warbler population follows a chain of illuminated bridges when low clouds obscure the stars.',
    choices: ['Conversely,', 'Therefore,', 'Specifically,', 'Even so,'], answer: 2,
    explanation: 'Specifically narrows the broad claim to a precise population, structure, and condition. The tracking result supplies detail rather than contrast or consequence.',
    explanationTr: '“Specifically”, genel iddiayı belirli bir kuş topluluğu, yapı ve koşulla daraltır. İzleme bulgusu karşıtlık veya sonuç değil, ayrıntı sağlar.',
    clue: 'The second sentence zooms in; it does not turn or conclude.'
  },
  {
    id: 'ct-08', difficulty: 'Very hard', category: 'Simultaneous developments',
    passage: 'A museum team is digitizing temperature logs from storage rooms used during the 1920s, hoping to reconstruct how earlier curators managed fragile textiles. _____, conservators are testing surviving fibers from those rooms to determine which materials endured the historical conditions best.',
    choices: ['Therefore,', 'Instead,', 'For instance,', 'Meanwhile,'], answer: 3,
    explanation: 'Meanwhile links two related projects occurring at the same time. The fiber tests complement the digitization; they neither replace it nor follow as a necessary result.',
    explanationTr: '“Meanwhile”, aynı dönemde yürütülen iki bağlantılı projeyi ilişkilendirir. Lif testleri dijitalleştirmeyi tamamlar; onun yerini almaz ve zorunlu bir sonucu değildir.',
    clue: 'Two teams pursue complementary work in parallel.'
  },
  {
    id: 'ct-09', difficulty: 'Hard', category: 'Conclusion',
    passage: 'A catalyst offers a reaction an alternative pathway with a lower activation-energy requirement. The catalyst is not consumed, and it does not change the reaction’s final equilibrium. _____, its effect is to make equilibrium occur faster, not to move the equilibrium itself.',
    choices: ['Therefore,', 'However,', 'For example,', 'Similarly,'], answer: 0,
    explanation: 'Therefore introduces a conclusion drawn from the two preceding facts about what a catalyst changes and does not change. The last sentence synthesizes those facts.',
    explanationTr: '“Therefore”, katalizörün neyi değiştirip neyi değiştirmediğine ilişkin önceki iki olgudan çıkarılan sonucu sunar. Son cümle bu olguları birleştirir.',
    clue: 'The final sentence states what logically follows from both scientific facts.'
  },
  {
    id: 'ct-10', difficulty: 'Very hard', category: 'Comparison',
    passage: 'Playwright Hana Lee specifies pauses, gestures, and even breathing patterns in unusually detailed stage directions. Mateo Ruiz gives actors almost no such guidance. _____, Ruiz relies on unfinished sentences and abrupt topic changes to imply the tensions that Lee makes explicit.',
    choices: ['In addition,', 'By contrast,', 'As a result,', 'For example,'], answer: 1,
    explanation: 'By contrast establishes the opposing dramatic strategies: explicit stage direction versus indirect implication through dialogue. The final sentence explains Ruiz’s alternative method.',
    explanationTr: '“By contrast”, açık sahne yönergeleri ile diyalog yoluyla dolaylı ima arasındaki karşıt oyun yazma yöntemlerini kurar. Son cümle Ruiz’in farklı yöntemini açıklar.',
    clue: 'The two playwrights solve the same problem in opposite ways.'
  },
  {
    id: 'ct-11', difficulty: 'Very hard', category: 'Emphasis',
    passage: 'Economists suspected that the lending program succeeded partly because local cooperatives already had strong networks of trust. _____, repayment rates were highest in villages where residents reported borrowing tools and sharing harvest labor before the program began.',
    choices: ['Nevertheless,', 'In comparison,', 'Indeed,', 'Instead,'], answer: 2,
    explanation: 'Indeed introduces evidence that confirms and strengthens the economists’ suspicion. The repayment pattern directly supports the trust-network explanation.',
    explanationTr: '“Indeed”, ekonomistlerin şüphesini doğrulayan ve güçlendiren kanıtı sunar. Geri ödeme örüntüsü, güven ağı açıklamasını doğrudan destekler.',
    clue: 'The data confirm the proposed explanation rather than oppose it.'
  },
  {
    id: 'ct-12', difficulty: 'Hard', category: 'Alternative',
    passage: 'Dense dust prevents astronomers from observing the center of the galaxy clearly in visible light. They do not simply abandon the region, however. _____, they map radio emissions that pass through the dust and reveal structures hidden at optical wavelengths.',
    choices: ['Similarly,', 'Consequently,', 'Moreover,', 'Instead,'], answer: 3,
    explanation: 'Instead introduces the alternative method astronomers use in place of visible-light observation. The passage explicitly frames radio mapping as their substitute strategy.',
    explanationTr: '“Instead”, astronomların görünür ışık gözlemi yerine kullandığı alternatif yöntemi sunar. Parça radyo haritalamasını açıkça ikame strateji olarak çerçeveler.',
    clue: 'One unavailable method is replaced by another workable method.'
  },
  {
    id: 'ct-13', difficulty: 'Hard', category: 'Parallel evidence',
    passage: 'On one Caribbean reef, placing young corals in small clusters increased survival because neighboring colonies slowed water flow. _____, a Pacific restoration project found that grouped corals retained more food particles than isolated corals did.',
    choices: ['Similarly,', 'Even so,', 'In particular,', 'Therefore,'], answer: 0,
    explanation: 'Similarly connects two independent restoration projects that produced aligned findings about grouped corals. The Pacific result parallels rather than results from the Caribbean result.',
    explanationTr: '“Similarly”, kümelenmiş mercanlara ilişkin uyumlu bulgular veren iki bağımsız restorasyon projesini bağlar. Pasifik sonucu Karayip sonucuna paraleldir; onun sonucu değildir.',
    clue: 'Different sites produce comparable findings.'
  },
  {
    id: 'ct-14', difficulty: 'Very hard', category: 'Reasoned conclusion',
    passage: 'Seeds with thicker coats remained viable after an experimental drought, but they germinated more slowly once water returned. Seeds with thinner coats germinated quickly but suffered greater mortality during the drought. _____, coat thickness appears to mediate a trade-off between persistence and rapid growth.',
    choices: ['For instance,', 'Thus,', 'Meanwhile,', 'Nevertheless,'], answer: 1,
    explanation: 'Thus introduces the synthesis supported by both contrasting seed outcomes. The trade-off is the conclusion that integrates the evidence.',
    explanationTr: '“Thus”, iki karşıt tohum sonucunun birlikte desteklediği sentezi sunar. Kalıcılık ile hızlı büyüme arasındaki denge, kanıtların bütünleştirildiği sonuçtur.',
    clue: 'The last sentence combines both findings into one principle.'
  },
  {
    id: 'ct-15', difficulty: 'Hard', category: 'Example',
    passage: 'Archaeologists can infer long-distance exchange even when imported objects themselves have not survived. _____, chemical traces of a resin native to another region may remain inside a locally made vessel.',
    choices: ['Accordingly,', 'By contrast,', 'For instance,', 'In other words,'], answer: 2,
    explanation: 'For instance supplies a concrete example of indirect evidence for long-distance exchange. It illustrates the general method described first.',
    explanationTr: '“For instance”, uzun mesafeli değiş tokuşun dolaylı kanıtına somut bir örnek verir. İlk cümlede anlatılan genel yöntemi örnekler.',
    clue: 'A broad archaeological possibility is followed by one specific trace.'
  },
  {
    id: 'ct-16', difficulty: 'Very hard', category: 'Qualified persistence',
    passage: 'The novel’s narrator repeatedly misstates dates and confuses the order of public events. _____, the narrator’s descriptions of private grief remain strikingly consistent across scenes, suggesting that factual unreliability does not erase emotional continuity.',
    choices: ['Consequently,', 'For example,', 'Likewise,', 'Even so,'], answer: 3,
    explanation: 'Even so concedes the narrator’s factual unreliability while preserving a different kind of consistency. The emotional pattern holds despite the chronological errors.',
    explanationTr: '“Even so”, anlatıcının olgusal güvenilmezliğini kabul ederken başka bir tutarlılık türünü korur. Duygusal örüntü kronolojik hatalara rağmen sürer.',
    clue: 'A limitation is real, but it does not destroy the later claim.'
  },
  {
    id: 'ct-17', difficulty: 'Hard', category: 'Addition',
    passage: 'The flood-warning model estimates river levels from recent rainfall and upstream flow. _____, it incorporates soil-saturation measurements, which help distinguish storms that will soak into dry ground from storms likely to produce immediate runoff.',
    choices: ['In addition,', 'Instead,', 'Nevertheless,', 'For example,'], answer: 0,
    explanation: 'In addition introduces another input used alongside rainfall and flow. Soil saturation expands the model rather than replacing or contradicting its other variables.',
    explanationTr: '“In addition”, yağış ve akışla birlikte kullanılan başka bir girdiyi ekler. Toprak doygunluğu diğer değişkenlerin yerini almaz veya onlarla çelişmez; modeli genişletir.',
    clue: 'The model keeps its first inputs and gains one more.'
  },
  {
    id: 'ct-18', difficulty: 'Very hard', category: 'Definition',
    passage: 'Legal precedent constrains judges without mechanically determining every later decision. _____, an earlier ruling defines which considerations are relevant, but a new case may weight those considerations differently because its facts are not identical.',
    choices: ['Meanwhile,', 'That is,', 'Conversely,', 'Therefore,'], answer: 1,
    explanation: 'That is clarifies what constrained but nonmechanical decision-making means. The second sentence unpacks the distinction rather than presenting a result or reversal.',
    explanationTr: '“That is”, kısıtlanmış fakat mekanik olmayan karar vermenin ne anlama geldiğini açıklar. İkinci cümle sonucu veya tersini sunmaz; ayrımı açar.',
    clue: 'The second sentence defines the balance stated in the first.'
  },
  {
    id: 'ct-19', difficulty: 'Very hard', category: 'Causal inference',
    passage: 'Researchers randomly assigned identical seedlings to shaded and unshaded plots while holding soil moisture constant. Survival differed substantially between the groups. _____, the researchers could attribute the survival difference more confidently to shade rather than to preexisting differences among the seedlings.',
    choices: ['For example,', 'Nevertheless,', 'As a result,', 'Similarly,'], answer: 2,
    explanation: 'As a result introduces the inferential benefit produced by random assignment and controlled moisture. The design makes the causal attribution more credible.',
    explanationTr: '“As a result”, rastgele atama ve sabit tutulan nemin sağladığı çıkarımsal yararı sunar. Tasarım nedensel ilişkiyi daha güvenilir kılar.',
    clue: 'The final sentence states what the experimental design allows.'
  },
  {
    id: 'ct-20', difficulty: 'Very hard', category: 'Reverse pattern',
    passage: 'In cooler years, the northern lizard population spends more time basking and less time searching for food. The southern population responds differently to the same temperature shift. _____, its members reduce basking time and forage during the cooler parts of the day.',
    choices: ['Therefore,', 'For instance,', 'Likewise,', 'Conversely,'], answer: 3,
    explanation: 'Conversely signals that the southern population shows the reverse behavioral pattern. The response is not merely another example of the same behavior.',
    explanationTr: '“Conversely”, güney topluluğunun ters davranış örüntüsü gösterdiğini belirtir. Bu tepki aynı davranışın başka bir örneği değildir.',
    clue: 'The second population moves in the opposite direction.'
  }
];

const inferenceQuestions = [
  {
    id: 'ci-01', difficulty: 'Very hard', category: 'Conditional finding',
    passage: 'Researchers compared summer temperatures on blocks with newly planted street trees. Five years later, blocks where the trees received regular irrigation were cooler at midday than matched blocks without trees. Blocks where irrigation had been inconsistent showed no reliable temperature difference, even when tree counts were similar.',
    choices: ['The cooling benefit of newly planted trees may depend on whether the trees receive enough water.', 'Street trees lower temperatures only after more than five years.', 'Tree count has no relationship to neighborhood temperature.', 'Irrigation cools city blocks even when no trees are present.'], answer: 0,
    explanation: 'Only consistently irrigated tree blocks showed reliable cooling, so water availability may be a condition for the benefit. The study does not establish a universal five-year threshold or isolate irrigation without trees.',
    explanationTr: 'Yalnızca düzenli sulanan ağaçlı bloklarda güvenilir serinleme görüldüğü için su erişimi yararın bir koşulu olabilir. Çalışma evrensel bir beş yıllık eşik belirlemez ve ağaçsız sulamayı incelemez.',
    clue: 'Preserve the interaction: trees plus consistent irrigation.'
  },
  {
    id: 'ci-02', difficulty: 'Very hard', category: 'Competing explanation',
    passage: 'In a medieval manuscript, corrections cluster in three poems copied from a source that is now lost. The same scribe copied the rest of the manuscript with very few corrections. Moreover, several corrected words create smoother meter than the words first written.',
    choices: ['The scribe was generally careless when copying poetry.', 'The lost source may itself have contained uncertain or metrically awkward readings.', 'The corrections were added by a modern editor.', 'The three poems were composed by the scribe.'], answer: 1,
    explanation: 'The corrections are localized to works from one lost source, while the scribe was accurate elsewhere. That pattern supports instability in the source more strongly than general carelessness.',
    explanationTr: 'Düzeltmeler tek bir kayıp kaynaktan gelen şiirlerde yoğunlaşırken kâtip diğer bölümlerde doğrudur. Bu örüntü genel dikkatsizlikten çok kaynak metindeki belirsizliği destekler.',
    clue: 'Use the contrast between the three poems and the rest of the manuscript.'
  },
  {
    id: 'ci-03', difficulty: 'Hard', category: 'Context dependence',
    passage: 'In field plots containing many flower species, bees visited the least common flower species more often than expected from those flowers’ abundance. In plots containing only two flower species, bees showed no comparable preference for the less common species.',
    choices: ['Bees always prefer flowers they have not previously visited.', 'Rare flowers produce more nectar than common flowers do.', 'A preference for uncommon flowers may emerge only in relatively diverse plant communities.', 'Reducing flower diversity causes bees to stop collecting nectar.'], answer: 2,
    explanation: 'The unusual preference appeared in diverse plots but not two-species plots, supporting a context-dependent effect. Nectar production and prior visits were not measured.',
    explanationTr: 'Sıra dışı tercih çeşitli türlerin bulunduğu parsellerde görülmüş, iki tür bulunanlarda görülmemiştir; bu da bağlama bağlı bir etkiyi destekler. Nektar üretimi ve önceki ziyaretler ölçülmemiştir.',
    clue: 'The difference between plot types is the key evidence.'
  },
  {
    id: 'ci-04', difficulty: 'Very hard', category: 'Limited conclusion',
    passage: 'Chemical analysis shows that pottery from two distant settlements used pigment from the same rare mineral deposit. The vessels differ substantially in shape, firing method, and painted motifs, and no finished vessel from either settlement has been found at the other.',
    choices: ['Potters in both settlements learned from the same teacher.', 'Finished pottery was regularly traded between the settlements.', 'The settlements followed a shared system of decorative symbols.', 'The communities may have exchanged raw pigment without sharing vessel-making traditions.'], answer: 3,
    explanation: 'The shared mineral supports movement of raw material, while the differing production and design traditions argue against a shared pottery style or regular exchange of finished vessels.',
    explanationTr: 'Ortak mineral ham maddenin hareketini desteklerken farklı üretim ve tasarım gelenekleri ortak bir çömlekçilik tarzına veya bitmiş kapların düzenli değiş tokuşuna karşı kanıt oluşturur.',
    clue: 'Separate evidence about material origin from evidence about artistic practice.'
  },
  {
    id: 'ci-05', difficulty: 'Hard', category: 'Outcome precision',
    passage: 'After a software update, customer-service agents found account records an average of twelve seconds faster than before. The rate at which agents selected the wrong account record did not change, and the study did not measure customer satisfaction.',
    choices: ['The update improved retrieval speed but did not measurably improve retrieval accuracy.', 'The update made customers more satisfied with the service.', 'Agents became less careful because records appeared faster.', 'The update reduced every type of customer-service error.'], answer: 0,
    explanation: 'The measured improvement concerns speed only; the error rate remained unchanged. Satisfaction, care, and other error types were not established.',
    explanationTr: 'Ölçülen iyileşme yalnızca hızla ilgilidir; hata oranı değişmemiştir. Memnuniyet, dikkat ve diğer hata türleri hakkında kanıt yoktur.',
    clue: 'Keep measured speed separate from unmeasured quality.'
  },
  {
    id: 'ci-06', difficulty: 'Very hard', category: 'Pattern across time',
    passage: 'Fossil shells from a coastal species are smaller in sediment layers formed during two ancient warm intervals than in layers formed during cooler intervals. At lower latitudes, however, shell size remains nearly constant across the same periods.',
    choices: ['Warm intervals caused every population of the species to shrink.', 'The relationship between temperature and shell size may differ by latitude.', 'Lower-latitude shells were exposed to colder water than higher-latitude shells.', 'Shell size determines the temperature a species can tolerate.'], answer: 1,
    explanation: 'Shell size changes with warm intervals at one latitude but not another, suggesting geographical variation in the relationship. The passage does not establish universal causation or reverse the causal direction.',
    explanationTr: 'Kabuk boyutu bir enlemde sıcak dönemlerle değişirken diğerinde değişmediğinden ilişki coğrafyaya göre değişebilir. Parça evrensel nedensellik kurmaz veya neden-sonuç yönünü tersine çevirmez.',
    clue: 'A pattern in one region disappears in another.'
  },
  {
    id: 'ci-07', difficulty: 'Very hard', category: 'Public versus private evidence',
    passage: 'A statesperson’s published letters avoid discussing a controversial voting reform. In private diaries written during the same months, however, the statesperson evaluates several versions of the reform in detail and worries that public support for any version will be fragile.',
    choices: ['The statesperson had no opinion about voting reform.', 'The diaries were intended to persuade voters.', 'Silence in the published letters does not show that the statesperson ignored the reform privately.', 'The statesperson publicly supported every version of the reform.'], answer: 2,
    explanation: 'The private diaries demonstrate sustained attention despite silence in published letters. The evidence supports a difference between public and private records, not a particular public position.',
    explanationTr: 'Özel günlükler, yayımlanmış mektuplardaki sessizliğe rağmen konuyla sürekli ilgilenildiğini gösterir. Kanıt belirli bir açık siyasi görüşü değil, kamusal ve özel kayıtlar arasındaki farkı destekler.',
    clue: 'Absence from one source is not absence from the person’s thinking.'
  },
  {
    id: 'ci-08', difficulty: 'Very hard', category: 'Subgroup effect',
    passage: 'A university library extended its closing time by two hours. Evening attendance increased most sharply among surveyed students who also worked off campus, especially first-generation students. The survey did not ask whether those students’ grades changed.',
    choices: ['The extended hours improved every student’s grades.', 'First-generation students study only in the evening.', 'Students without jobs stopped using the library.', 'Later closing may have reduced a scheduling barrier for some working students.'], answer: 3,
    explanation: 'The strongest increase occurred among working students, supporting a possible scheduling explanation. Academic outcomes and exclusive evening preferences were not measured.',
    explanationTr: 'En büyük artış çalışan öğrencilerde görüldüğü için zamanlama engelinin azalmış olabileceği desteklenir. Akademik sonuçlar ve yalnızca akşam çalışma tercihi ölçülmemiştir.',
    clue: 'Match the inference to the subgroup that changed most.'
  },
  {
    id: 'ci-09', difficulty: 'Hard', category: 'Trade-off',
    passage: 'A desert shrub closes most leaf pores during midday, sharply reducing water loss. Measurements also show that carbon dioxide uptake falls during the same hours and resumes only late in the afternoon.',
    choices: ['The shrub’s water-saving response temporarily limits a process needed for photosynthesis.', 'Closing leaf pores permanently stops the shrub from growing.', 'Carbon dioxide uptake causes the shrub to lose water at night.', 'The shrub would survive better if its pores never closed.'], answer: 0,
    explanation: 'Reduced water loss coincides with reduced carbon dioxide uptake, indicating a temporary trade-off. The passage does not establish permanent effects or a superior alternative strategy.',
    explanationTr: 'Azalan su kaybı ile azalan karbondioksit alımı aynı anda gerçekleştiğinden geçici bir denge/maliyet söz konusudur. Parça kalıcı etki veya daha üstün bir alternatif strateji göstermez.',
    clue: 'One benefit arrives with one temporary cost.'
  },
  {
    id: 'ci-10', difficulty: 'Very hard', category: 'Narrow mechanism',
    passage: 'Pairs of musicians who tapped along with the same shifting rhythm synchronized their movements more accurately after practicing together. Their ratings of how much they liked the rhythm did not become more similar, however.',
    choices: ['Practice made every musician enjoy the rhythm more.', 'Joint practice improved coordination without necessarily aligning musical preferences.', 'Musicians coordinate best only when they like identical music.', 'Preference ratings are more accurate than movement measurements.'], answer: 1,
    explanation: 'Coordination converged while preference ratings did not, so practice affected performance without clearly changing taste. The other choices add unsupported universals or comparisons.',
    explanationTr: 'Koordinasyon yakınlaşırken beğeni puanları yakınlaşmamıştır; dolayısıyla çalışma performansı etkilerken zevki zorunlu olarak değiştirmemiştir. Diğer seçenekler desteklenmeyen genellemeler ekler.',
    clue: 'Two measured outcomes move differently.'
  },
  {
    id: 'ci-11', difficulty: 'Very hard', category: 'Confounding factor',
    passage: 'A country’s textile exports declined during the year after a new tariff was introduced. During that same year, the country’s currency appreciated substantially, making its products more expensive abroad. The available data do not separate the effects of the two changes.',
    choices: ['The tariff had no effect on textile exports.', 'Currency appreciation always reduces exports more than tariffs do.', 'The export decline cannot be attributed confidently to the tariff alone.', 'The tariff caused the currency to appreciate.'], answer: 2,
    explanation: 'Because tariff and currency changes overlap and their effects are not separated, a tariff-only causal conclusion is not justified. The passage does not show that either factor had zero or dominant effect.',
    explanationTr: 'Gümrük vergisi ile kur değişimi aynı dönemde gerçekleşmiş ve etkileri ayrıştırılmamıştır; bu nedenle düşüş yalnızca vergiye güvenle bağlanamaz. Parça iki etkiden birinin sıfır veya baskın olduğunu göstermez.',
    clue: 'Two plausible causes changed together.'
  },
  {
    id: 'ci-12', difficulty: 'Hard', category: 'Generalization',
    passage: 'A warehouse robot learned to grip unfamiliar boxes successfully after training on demonstrations that varied in box size, material, and orientation. A second robot trained on many repetitions of one identical box performed well on that box but poorly on unfamiliar ones.',
    choices: ['The second robot received fewer demonstrations.', 'Box material is the only feature robots use when gripping.', 'Repeating an identical task guarantees perfect performance.', 'Variation in training examples may help a robot generalize to new objects.'], answer: 3,
    explanation: 'The robot exposed to varied demonstrations transferred its learning, whereas repetition of one example did not. The evidence supports training diversity as a contributor to generalization.',
    explanationTr: 'Çeşitli gösterimlere maruz kalan robot öğrendiğini yeni nesnelere aktarırken tek örneğin tekrarı bunu sağlamamıştır. Kanıt, eğitim çeşitliliğinin genellemeye katkısını destekler.',
    clue: 'Connect varied training with performance on unfamiliar boxes.'
  },
  {
    id: 'ci-13', difficulty: 'Very hard', category: 'Alternative location',
    passage: 'After a grassland fire, a nitrogen-fixing microbe was nearly absent from surface-soil samples. Samples taken thirty centimeters deeper contained the microbe at densities similar to those measured before the fire. Surface populations recovered the following rainy season.',
    choices: ['The microbe may have persisted below the sampled surface and later recolonized it.', 'The fire permanently eliminated the microbe from the grassland.', 'Rain created a new species of nitrogen-fixing microbe.', 'Deep-soil microbes are never affected by fire.'], answer: 0,
    explanation: 'Persistence at depth plus later surface recovery supports survival below the surface and recolonization. Permanent elimination and universal immunity conflict with the evidence.',
    explanationTr: 'Derinde varlığın sürmesi ve yüzeyde daha sonra toparlanma, mikroorganizmanın aşağıda hayatta kalıp yüzeyi yeniden kolonileştirmiş olabileceğini destekler. Kalıcı yok oluş ve evrensel bağışıklık kanıtla çelişir.',
    clue: 'Absence at the surface did not mean absence everywhere.'
  },
  {
    id: 'ci-14', difficulty: 'Very hard', category: 'Multiple influences',
    passage: 'A novel received strong critical reviews when first published but sold modestly. Sales rose rapidly two years later, soon after a popular stage adaptation opened. Reviews of the adaptation frequently mentioned that audiences then sought out the original novel.',
    choices: ['Critical praise always prevents strong sales.', 'The adaptation likely introduced the novel to readers whom the initial reviews had not reached.', 'The novel was rewritten after the adaptation opened.', 'Most people who saw the adaptation had already read the novel.'], answer: 1,
    explanation: 'The timing and review comments support the adaptation as a new path to the novel. The evidence does not negate the reviews or establish rewriting or prior readership.',
    explanationTr: 'Zamanlama ve uyarlama eleştirileri, uyarlamanın romana yeni bir okur yolu açtığını destekler. Kanıt ilk eleştirileri geçersiz kılmaz; yeniden yazım veya önceden okuma göstermez.',
    clue: 'Explain why sales changed later rather than immediately.'
  },
  {
    id: 'ci-15', difficulty: 'Very hard', category: 'Timing mismatch',
    passage: 'In warmer springs, a butterfly population begins breeding earlier than usual. The flowering date of the plant on which its larvae feed also advances, but long-distance tracking shows that adult migration dates remain nearly fixed.',
    choices: ['Migration dates determine spring temperature.', 'The butterflies no longer depend on the flowering plant.', 'A warming climate could create a timing mismatch between migration and local breeding conditions.', 'The plant flowers later whenever butterflies breed earlier.'], answer: 2,
    explanation: 'Breeding and flowering shift earlier while migration stays fixed, creating the possibility that arriving adults miss changing local conditions. The passage does not reverse causation or remove dependence.',
    explanationTr: 'Üreme ve çiçeklenme erkene kayarken göç sabit kalır; bu da gelen yetişkinlerin değişen yerel koşulları kaçırma olasılığını yaratır. Parça nedenselliği tersine çevirmez veya bağımlılığı ortadan kaldırmaz.',
    clue: 'Compare which seasonal events move and which one does not.'
  },
  {
    id: 'ci-16', difficulty: 'Very hard', category: 'Environmental cue',
    passage: 'Infants retained the ability to distinguish two unfamiliar speech sounds after a week of passive recordings, but only when a familiar caregiver was quietly present during playback. The caregivers did not speak or respond to the recordings.',
    choices: ['The caregivers secretly repeated the unfamiliar sounds.', 'Passive recordings never support sound learning.', 'Infants can distinguish unfamiliar sounds only from their native language.', 'A familiar social context may support learning even without direct caregiver instruction.'], answer: 3,
    explanation: 'The caregiver’s silent presence distinguishes the successful condition, suggesting that social context can matter without explicit teaching. The passage rules out caregiver speech during playback.',
    explanationTr: 'Başarılı koşulu ayıran unsur bakıcının sessiz varlığıdır; bu da açık öğretim olmadan sosyal bağlamın önemli olabileceğini düşündürür. Parça oynatma sırasında bakıcının konuşmadığını belirtir.',
    clue: 'The caregiver changes the context, not the recording content.'
  },
  {
    id: 'ci-17', difficulty: 'Hard', category: 'Documentation bias',
    passage: 'A historian finds few court records of tenant protests before 1880 and many afterward. In 1879, however, the court introduced a standardized form specifically for landlords to report collective tenant actions; newspapers describe such actions in several earlier decades.',
    choices: ['The increase in court records may partly reflect a change in documentation rather than a sudden beginning of protest.', 'Tenant protest was legally impossible before 1880.', 'Newspapers copied all of their protest reports from court files.', 'The standardized form caused tenants to protest more often.'], answer: 0,
    explanation: 'The new form made protests easier to record, while newspapers document earlier actions. Therefore, record frequency may reflect archival practice as well as behavior.',
    explanationTr: 'Yeni form protestoların kayda geçmesini kolaylaştırmış, gazeteler ise daha eski eylemleri belgelemiştir. Bu nedenle kayıt sıklığı davranış kadar belgeleme uygulamasını da yansıtabilir.',
    clue: 'A new record system can create an apparent historical increase.'
  },
  {
    id: 'ci-18', difficulty: 'Very hard', category: 'Controlled comparison',
    passage: 'Identical batteries stored at the same temperature lost capacity faster when exposed to high humidity than when kept in dry air. The difference widened after repeated charging cycles, although both groups were charged on the same schedule.',
    choices: ['Charging schedule had no effect on either group.', 'Humidity may accelerate capacity loss, especially across repeated cycles.', 'Dry air permanently prevents battery degradation.', 'The humid-air batteries began with lower capacity.'], answer: 1,
    explanation: 'Temperature, schedule, and initial battery type were controlled, while humidity differed and the capacity gap widened. This supports a humidity-related acceleration without proving dry air prevents all degradation.',
    explanationTr: 'Sıcaklık, program ve başlangıçtaki pil türü sabitken nem değişmiş ve kapasite farkı büyümüştür. Bu, kuru havanın tüm bozulmayı önlediğini göstermeden neme bağlı hızlanmayı destekler.',
    clue: 'Identify the variable that changed while the others were held constant.'
  },
  {
    id: 'ci-19', difficulty: 'Very hard', category: 'Converging evidence',
    passage: 'At noon on the summer solstice, the shadow of a public sculpture aligns with a line in the surrounding pavement. No comparable alignment occurs on nearby dates. Construction records also name an astronomical consultant who advised the design team.',
    choices: ['Every feature of the sculpture represents an astronomical event.', 'The alignment occurred accidentally because the pavement shifted.', 'The solstice alignment was likely an intentional part of the design.', 'The consultant designed the entire sculpture without help.'], answer: 2,
    explanation: 'The date-specific alignment and the documented consultant provide two independent anchors for intentionality. They do not support claims about every feature or sole authorship.',
    explanationTr: 'Belirli tarihe özgü hizalanma ile belgelenmiş danışman, kasıtlı tasarım için iki bağımsız kanıt sağlar. Bunlar her özelliğin anlamlı olduğunu veya tek kişinin tasarladığını göstermez.',
    clue: 'Combine the physical pattern with the documentary record.'
  },
  {
    id: 'ci-20', difficulty: 'Very hard', category: 'Boundary of effect',
    passage: 'Replacing hour-long meetings with fifteen-minute check-ins increased completed tasks among remote teams in a six-week trial. The same change produced no measurable difference among teams whose members worked in the same room. Team size and project type were similar across the groups.',
    choices: ['Short meetings improve productivity in every workplace.', 'Remote work is always more productive than office work.', 'Co-located teams completed fewer tasks than remote teams.', 'The benefit of shorter check-ins may depend on whether team members work remotely.'], answer: 3,
    explanation: 'The meeting change helped remote teams but not co-located teams under otherwise similar conditions, supporting a context-dependent benefit. The passage gives no direct cross-group productivity ranking.',
    explanationTr: 'Toplantı değişikliği benzer koşullarda uzaktan çalışan ekiplerde yarar sağlarken aynı odadaki ekiplerde sağlamamıştır; bu da bağlama bağlı bir yararı destekler. Parça gruplar arasında doğrudan verimlilik sıralaması vermez.',
    clue: 'The treatment works in one work arrangement, not both.'
  }
];

const prompts = {
  transition: 'Which choice completes the text with the most logical transition?',
  inference: 'Which inference is best supported by the passage?'
};

export const challengeQuestions = {
  transition: transitionQuestions.map((question) => ({ ...question, type: 'transition', prompt: prompts.transition })),
  inference: inferenceQuestions.map((question) => ({ ...question, type: 'inference', prompt: prompts.inference }))
};

export const allChallengeQuestions = [...challengeQuestions.transition, ...challengeQuestions.inference];
