/* Research Pathways B2 · Workbook · Units 1–6
   Texts marked "written for this workbook" are fictional and are used for practice. */
window.UNITS = window.UNITS || [];
window.RB2 = window.RB2 || {
  log: function (num, note) {
    return { num: num, type: "open", prompt: "Extensive reading log: read one article from your field.", note: note,
      fields: [
        { label: "Reference (APA 7)", short: true, ph: "Author, A. (Year). Title. Journal, volume(issue), pages. https://doi.org/…" },
        { label: "Time to read", short: true, ph: "For example: 50 minutes" },
        { label: "What was the gap?", short: true, ph: "What was missing in previous research, according to the authors?" },
        { label: "One phrase I want to use", short: true, ph: "Copy the phrase and the sentence where you found it" },
        { label: "One thing I would do differently", short: true, ph: "In the design, the analysis or the writing" }
      ] };
  }
};

window.UNITS.push(

/* =============================== UNIT 1 =============================== */
{
  n: 1, title: "Research identities", icon: "flask",
  sub: "Tense and aspect · researcher profiles · your research statement",
  img: { file: "Goddard scientist Jennifer Eigenbrode (6385412459).jpg", credit: "NASA Goddard Space Flight Center, public domain", alt: "A NASA researcher in her laboratory" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Complete the sentences with the correct form of the words in the box.", note: "Each word is used once. Change the form of the verb if necessary.",
        box: ["expertise", "impact", "interdisciplinary", "prospective", "pursue", "secure", "track record", "trajectory"],
        items: [
          { t: "She has a strong ___ of publications in hydrology.", g: [{ a: ["track record"], why: "A **track record** is the history of what someone has achieved. We say *a strong track record of publications*." }] },
          { t: "His career ___ moved from physics to public health.", g: [{ a: ["trajectory"], why: "**Trajectory** is the path a career follows over time: *his career trajectory moved from… to…*" }] },
          { t: "Last year we ___ funding from two foundations.", g: [{ a: ["secured"], why: "*Last year* needs the past simple: **secured**. *Secure funding* is a strong collocation in research." }] },
          { t: "The laboratory welcomes ___ students from any discipline.", g: [{ a: ["prospective"], why: "**Prospective** students are people who may join in the future (candidates, applicants)." }] },
          { t: "The project is ___: it combines chemistry and anthropology.", g: [{ a: ["interdisciplinary"], why: "A project that **combines two or more disciplines** is *interdisciplinary*." }] },
          { t: "Her ___ in mass spectrometry was essential for the analysis.", g: [{ a: ["expertise"], why: "**Expertise in** something = specialist knowledge or skill. It is uncountable: no *-s*." }] },
          { t: "After his PhD, he decided to ___ a postdoctoral position abroad.", g: [{ a: ["pursue"], why: "*Decided to* + infinitive: **pursue** (follow, try to obtain) a position or a career." }] },
          { t: "The study had a direct ___ on local regulations.", g: [{ a: ["impact"], why: "We say *have an impact **on*** something. **Impact** is the effect of research beyond academia." }] }
        ] },
      { num: "2", type: "gaps", prompt: "Match the verbs with the nouns to make collocations.", note: "Choose the noun phrase that goes with each verb.",
        items: [
          { t: "secure ___", g: [{ a: ["funding"], o: ["a professional network", "funding", "the impact of your work", "your research agenda", "a career in research"], why: "We **secure** (successfully obtain) **funding**, a grant or a position." }] },
          { t: "pursue ___", g: [{ a: ["a career in research"], o: ["a professional network", "funding", "the impact of your work", "your research agenda", "a career in research"], why: "We **pursue** a career, a goal or a degree: we follow it over time." }] },
          { t: "build ___", g: [{ a: ["a professional network"], o: ["a professional network", "funding", "the impact of your work", "your research agenda", "a career in research"], why: "We **build** a network, a reputation or a team: something that grows gradually." }] },
          { t: "demonstrate ___", g: [{ a: ["the impact of your work"], o: ["a professional network", "funding", "the impact of your work", "your research agenda", "a career in research"], why: "We **demonstrate** (show with evidence) impact, a skill or a commitment." }] },
          { t: "outline ___", g: [{ a: ["your research agenda"], o: ["a professional network", "funding", "the impact of your work", "your research agenda", "a career in research"], why: "We **outline** (describe the main points of) an agenda, a plan or an argument." }] }
        ] }
    ] },
    { h: "Grammar for writing: tense and aspect", tag: "Grammar", ex: [
      { num: "3", type: "gaps", prompt: "Complete the profile with the correct form of the verbs.", numbered: false,
        items: [{ t: "Dr Paula Reyes (1) ___ (be) a marine biologist at a public research centre. She (2) ___ (complete) her PhD in 2019. Since 2021 she (3) ___ (lead) a project on sea turtle migration, and to date her team (4) ___ (tag) 60 turtles. Before she joined the centre, she (5) ___ (work) for an environmental organisation for three years. Her current research (6) ___ (examine) how warmer water affects nesting. Over the next five years, she (7) ___ (intend / extend) the study to the Pacific coast. She (8) ___ (not / publish) the full results yet.",
          g: [
            { a: ["is"], why: "A permanent fact about her job now: **present simple**, *is*." },
            { a: ["completed"], why: "*In 2019* is a finished time in the past: **past simple**, *completed*." },
            { a: ["has been leading"], why: "*Since 2021* + an activity that continues now: **present perfect continuous**, *has been leading*." },
            { a: ["has tagged"], why: "*To date* + a result you can count (60 turtles): **present perfect simple**, *has tagged*." },
            { a: ["had worked", "worked"], why: "An action before another past action (*before she joined*): **past perfect**, *had worked*. *Worked* is also possible because *before* makes the order clear." },
            { a: ["examines"], why: "What a study is about now is usually in the **present simple**: *Her current research examines…*" },
            { a: ["intends to extend"], why: "A future plan: *intend* + **to**-infinitive, with third-person *-s*: *intends to extend*." },
            { a: ["has not published", "hasn't published"], why: "*Yet* goes with the **present perfect** in negatives: *has not published… yet*." }
          ] }] },
      { num: "4", type: "rewrite", prompt: "Correct the error in each sentence.", note: "Write the complete correct sentence.",
        items: [
          { q: "She works in this university since 2015.", a: ["She has worked at this university since 2015.", "She has been working at this university since 2015.", "She has worked in this university since 2015.", "She has been working in this university since 2015."], why: "With *since* + a point in time, use the **present perfect**, not the present simple: *She has worked at… since 2015*." },
          { q: "I have finished my master in 2022.", a: ["I finished my master's in 2022.", "I finished my master's degree in 2022.", "I finished my masters in 2022."], why: "Two problems: a finished date (*in 2022*) needs the **past simple** (*finished*), and the degree is *master's* (or *master's degree*)." },
          { q: "During three years I have been studying this archive.", a: ["For three years I have been studying this archive.", "I have been studying this archive for three years."], why: "A period of time is introduced by **for**, not *during*. *During* goes with a noun: *during the pandemic*." },
          { q: "My investigation focuses in the economic role of women.", a: ["My research focuses on the economic role of women.", "My study focuses on the economic role of women.", "My research is focused on the economic role of women."], why: "Two typical errors: *investigation* is a false friend (use **research** or *study*), and the preposition is **focus on**." },
          { q: "We are collaborating with them since last year.", a: ["We have been collaborating with them since last year.", "We have collaborated with them since last year."], why: "*Since last year* + an action that continues now: **present perfect continuous**, *have been collaborating*." }
        ] }
    ] },
    { h: "Reading: a researcher profile", tag: "Reading", ex: [
      { num: "5", type: "open", prompt: "Read the profile and answer the questions.",
        passage: "Dr Ximena Tello is a marine ecologist at a public research centre in Baja California Sur. Her research examines how small-scale fishers can help to monitor fish populations that official surveys rarely reach. Since 2019 she has been working with eleven fishing cooperatives, which record the size and species of every catch on a mobile application. To date, the cooperatives have registered more than 200,000 catches, and her team has shown that their data agree closely with scientific surveys for the six most common species. Before she started this project, she had spent four years studying coral reefs in Australia, where she learned to analyse underwater video. Ximena describes her main contribution not as a discovery but as a partnership: <em>“The fishers are not my informants; they are my co-authors,”</em> she says. Two fishers appear as co-authors on her latest article. Over the next three years, she intends to extend the method to cooperatives in Sonora and Sinaloa and to train young fishers as data managers.<br><small><em>(Text written for this workbook.)</em></small>",
        fields: [
          { label: "1 What does her research examine?", short: true },
          { label: "2 How do the fishers take part in the research?", short: true },
          { label: "3 What has her team shown so far?", short: true },
          { label: "4 Find one example each of the present perfect continuous, the past perfect and a future plan.", short: true },
          { label: "5 Which of her contributions go beyond publications?", short: true },
          { label: "6 Why does she reject the word *informants*? Do you agree?", short: true }
        ],
        model: "<p><strong>1</strong> How small-scale fishers can help to monitor fish populations that official surveys rarely reach.</p><p><strong>2</strong> Eleven cooperatives record the size and species of every catch on a mobile application.</p><p><strong>3</strong> That the fishers’ data agree closely with scientific surveys for the six most common species.</p><p><strong>4</strong> <em>has been working</em>; <em>had spent</em>; <em>she intends to extend… and to train…</em></p><p><strong>5</strong> A partnership with fishers, two fishers as co-authors and plans to train young fishers as data managers.</p><p><strong>6</strong> Because the fishers are partners who produce knowledge, not only sources of information. Your opinion is open.</p>" }
    ] },
    { h: "Listen again: Track 1.1", tag: "Listening", ex: [
      { num: "6", type: "open", prompt: "Listen to the panel again. Write (a) two expressions the chair uses to introduce speakers or give them the floor, and (b) three questions you would ask the panellists if you were in the audience.",
        track: "1.1", trackLabel: "Panel: life after the PhD",
        fields: [{ label: "(a) Two expressions the chair uses", short: true }, { label: "(b) Three questions for the panellists", short: true }],
        model: "<p>Possible chair expressions: <em>Let me introduce…</em> · <em>Luis, would you like to start?</em> · <em>Over to you, Amara.</em></p><p>Your questions are open. Example: <em>How did you decide between a postdoc and a job outside the university?</em></p>" }
    ] },
    { h: "Writing: from empty to specific", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "This paragraph comes from a weak research statement. Rewrite it (80–100 words) with specific information.", note: "You may invent details about the project.",
        passage: "I am a very hard-working and passionate person. I have done many things in my career, like courses, congresses and a thesis. My research is about the environment, which is very important nowadays. In the future I want to continue researching.",
        words: [80, 100],
        check: ["I state a specific research question or topic.", "I give evidence of what I have done, with numbers where possible.", "I use the present perfect for experience and results to date.", "I mention a contribution beyond publications.", "I end with a concrete plan for the future.", "I avoid empty adjectives such as *passionate* and *hard-working*."],
        model: "<p>My research examines how drought affects small maize farmers in semi-arid Zacatecas. Since 2023 I have been interviewing farmers and measuring soil moisture on 30 plots, and so far I have found that farmers who keep crop residues on the soil lose about a third less moisture in the dry months. Beyond my thesis, I have organised two workshops with a farmers’ association and shared the results in a short guide. Over the next two years, I intend to test whether these practices also protect yields in very dry years. <em>(Invented details.)</em></p>" }
    ] },
    { h: "My article", tag: "My article", ex: [
      { num: "8", type: "open", prompt: "Start your integrated article. Write (a) a working title and (b) a three-sentence summary: your question, your approach and the contribution you expect to make. Then write the second draft of your research statement using the feedback from your classmate.",
        fields: [{ label: "(a) Working title", short: true }, { label: "(b) Three-sentence summary: question, approach, expected contribution", short: true }, { label: "Research statement · second draft" }],
        check: ["My title says what, where and how.", "My summary has exactly three sentences.", "I used my classmate’s feedback in the second draft."] }
    ] },
    { h: "Extensive reading", tag: "Extensive reading", ex: [ window.RB2.log("9", "Read one article from your field and complete the log. Then complete the learning diary for Unit 1.") ] }
  ]
},

/* =============================== UNIT 2 =============================== */
{
  n: 2, title: "Mapping the field", icon: "book",
  sub: "Reporting verbs · integral and non-integral citation · from summary to synthesis",
  img: { file: "Library-shelves-bibliographies-Graz.jpg", credit: "Dr. Marcus Gossler, CC BY-SA 3.0", alt: "Open shelves of bibliographies in the University Library of Graz" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "choice", prompt: "Choose the correct word.",
        items: [
          { q: "The two studies ___: both found that heat reduces attention.", o: ["converge", "contradict"], a: 0, f: ["Correct: when studies reach the **same** conclusion, they **converge**.", "*Contradict* means that the studies disagree, but the sentence says that *both* found the same thing."] },
          { q: "Results were ___ across schools: some improved, others did not.", o: ["inconsistent", "corroborated"], a: 0, f: ["Correct: results that vary (*some improved, others did not*) are **inconsistent**.", "*Corroborated* means confirmed by other evidence; the sentence describes variation, not confirmation."] },
          { q: "There is no ___ on the best way to measure recharge.", o: ["consensus", "bias"], a: 0, f: ["Correct: **consensus** = general agreement among researchers.", "*Bias* is a systematic error; *there is no bias on…* does not make sense here."] },
          { q: "Before including a study, we ___ its quality with a checklist.", o: ["appraised", "overlooked"], a: 0, f: ["Correct: to **appraise** = to evaluate the quality of a study, usually with a checklist.", "*Overlooked* means *did not notice*; a checklist is used to examine quality, not to ignore it."] },
          { q: "Rural schools remain ___ in this literature.", o: ["underexplored", "methodological"], a: 0, f: ["Correct: **underexplored** = not studied enough. It is a typical way to signal a gap.", "*Methodological* refers to methods; it does not describe how much a topic has been studied."] },
          { q: "The ___ of the review was limited to Latin America.", o: ["scope", "strand"], a: 0, f: ["Correct: the **scope** is the range or limits of a review (topics, regions, years).", "A *strand* is one line of research within a field, not the limits of a review."] }
        ] },
      { num: "2", type: "gaps", prompt: "Complete the word families.",
        items: [
          { t: "contradict (verb) → ___ (noun) → ___ (adjective)", g: [
            { a: ["contradiction"], why: "Verb + **-ion**: *contradiction*." },
            { a: ["contradictory"], why: "The adjective ends in **-ory**: *contradictory findings*." }] },
          { t: "consistency (noun) → ___ (positive adjective; the negative is *inconsistent*)", g: [{ a: ["consistent"], why: "Remove the prefix *in-*: **consistent**. There is no common verb in this family." }] },
          { t: "methodology (noun) → ___ (adjective)", g: [{ a: ["methodological"], why: "*Methodology* + **-ical**: *methodological* (for example, *methodological limitations*)." }] },
          { t: "synthesise (verb) → ___ (noun)", g: [{ a: ["synthesis"], why: "The noun is **synthesis** (plural *syntheses*)." }] },
          { t: "appraise (verb) → ___ (noun)", g: [{ a: ["appraisal"], why: "Verb + **-al**: *appraisal*, as in *critical appraisal*." }] }
        ] }
    ] },
    { h: "Grammar for writing: reporting and citing", tag: "Grammar", ex: [
      { num: "3", type: "gaps", prompt: "Choose the best reporting verb for the stance in brackets.",
        items: [
          { t: "Santos (2021) ___ that remittances increased girls’ enrolment. (*neutral*)", g: [{ a: ["found"], o: ["found", "claimed"], why: "*Found* reports a result **neutrally**. *Claimed* suggests that the writer doubts it." }] },
          { t: "The company ___ that its app doubles reading speed. (*doubt*)", g: [{ a: ["claims"], o: ["claims", "demonstrates"], why: "*Claims* shows **doubt**: the writer is not sure it is true. *Demonstrates* would accept it as proven." }] },
          { t: "Juárez (2022) ___ that irregular remittances may push boys into work. (*tentative*)", g: [{ a: ["suggests"], o: ["suggests", "proves"], why: "*Suggests* is **tentative** and matches *may*. Qualitative interviews cannot *prove* a general claim." }] },
          { t: "Large trials have ___ that the vaccine is safe. (*strong*)", g: [{ a: ["established"], o: ["speculated", "established"], why: "*Established* is **strong**: the evidence is solid and accepted. *Speculated* is very weak." }] },
          { t: "Earlier studies ___ to consider household labour. (*critical*)", g: [{ a: ["failed"], o: ["failed", "noted"], why: "*Failed to* is **critical**: it points out a weakness, often to build a gap." }] }
        ] },
      { num: "4", type: "rewrite", prompt: "Rewrite each citation in the other pattern (integral ↔ non-integral).", flexible: true,
        items: [
          { q: "Cervantes and Ruiz (2020) found that remittances were associated with higher enrolment.", start: "Remittances…", a: ["Remittances were associated with higher enrolment (Cervantes & Ruiz, 2020).", "Remittances were associated with higher enrolment (Cervantes and Ruiz, 2020).", "Remittances were associated with higher enrollment (Cervantes & Ruiz, 2020)."], why: "In a **non-integral** citation the idea comes first and the authors go in brackets at the end. In APA style, use **&** inside the brackets." },
          { q: "Remittances may benefit girls more than boys (Santos, 2021).", start: "Santos (2021)…", a: ["Santos (2021) found that remittances may benefit girls more than boys.", "Santos (2021) suggests that remittances may benefit girls more than boys.", "Santos (2021) found that remittances benefit girls more than boys.", "Santos (2021) suggested that remittances may benefit girls more than boys.", "Santos (2021) argues that remittances may benefit girls more than boys."], why: "In an **integral** citation the author is the subject of the sentence, followed by the year and a reporting verb: *Santos (2021) found / suggests that…*" },
          { q: "Juárez (2022) describes how some boys leave school to work on family land.", start: "Some boys…", a: ["Some boys leave school to work on family land (Juárez, 2022).", "Some boys leave school to work on family land (Juarez, 2022)."], why: "Make the finding the subject and move the author and year to brackets at the end: *(Juárez, 2022)*." }
        ] }
    ] },
    { h: "Reading: three studies on remittances and schooling", tag: "Reading", ex: [
      { num: "5", type: "open", prompt: "Read the summaries and complete a synthesis matrix (design, context, sample, main finding, limitation). Then write three sentences: one showing **agreement**, one showing **disagreement** with a possible explanation, and one stating a **gap**.",
        passage: "<strong>Cervantes and Ruiz (2020).</strong> Using a national household survey of 18,000 children in Mexico, the authors found that children in households receiving remittances were 8% more likely to be enrolled in secondary school. The survey did not record when remittances started or how regular they were.<br><br><strong>Santos (2021).</strong> Panel data on 3,200 households in the Philippines from 2008 to 2018 showed that remittances increased school enrolment for girls but not for boys. The author suggests that boys were more likely to plan their own migration.<br><br><strong>Juárez (2022).</strong> In 26 interviews with mothers and teenagers in highland Guatemala, participants explained that when fathers migrated, older sons sometimes left school to work on family land, especially when remittances arrived irregularly.<br><small><em>(Fictional studies written for this workbook.)</em></small>",
        fields: [
          { label: "Cervantes and Ruiz (2020): design · context · sample · main finding · limitation", short: true },
          { label: "Santos (2021): design · context · sample · main finding · limitation", short: true },
          { label: "Juárez (2022): design · context · sample · main finding · limitation", short: true },
          { label: "Agreement sentence", short: true },
          { label: "Disagreement sentence, with a possible explanation", short: true },
          { label: "Gap sentence", short: true }
        ],
        model: "<table class=\"t\"><tr><th></th><th>Design</th><th>Context</th><th>Sample</th><th>Main finding</th><th>Limitation</th></tr><tr><td>Cervantes and Ruiz</td><td>Survey</td><td>Mexico</td><td>18,000 children</td><td>8% more likely to be enrolled</td><td>No data on timing or regularity</td></tr><tr><td>Santos</td><td>Panel</td><td>Philippines, 2008–2018</td><td>3,200 households</td><td>Effect for girls only</td><td>The explanation for boys is only a suggestion</td></tr><tr><td>Juárez</td><td>Qualitative interviews</td><td>Highland Guatemala</td><td>26 mothers and teenagers</td><td>Older sons leave school to work, especially with irregular remittances</td><td>Small, non-representative sample</td></tr></table><p><strong>Agreement:</strong> Survey and panel studies converge on a positive association between remittances and school enrolment (Cervantes &amp; Ruiz, 2020; Santos, 2021).</p><p><strong>Disagreement:</strong> However, the effect appears to depend on gender, which may reflect boys’ own migration plans or the need to replace the father’s labour (Santos, 2021; Juárez, 2022).</p><p><strong>Gap:</strong> None of these studies has examined how the regularity of remittances affects schooling decisions.</p>" }
    ] },
    { h: "Listen again: Track 2.1", tag: "Listening", ex: [
      { num: "6", type: "gaps", prompt: "Listen to Dr Okafor again and complete her PRISMA flow diagram with all the numbers. Then calculate the percentage of screened records that was finally included.",
        track: "2.1", trackLabel: "Lecture: types of literature review",
        items: [
          { t: "Records identified in the databases: ___", g: [{ a: ["1,248", "1248"], why: "Dr Okafor’s searches identified **1,248** records." }] },
          { t: "Duplicates removed: ___", g: [{ a: ["312"], why: "**312** records were duplicates (the same article found in more than one database)." }] },
          { t: "Records screened (title and abstract): ___", g: [{ a: ["936"], why: "1,248 − 312 = **936** records were screened." }] },
          { t: "Records excluded after screening: ___", g: [{ a: ["841"], why: "**841** records were excluded at the title and abstract stage." }] },
          { t: "Full texts assessed for eligibility: ___", g: [{ a: ["95"], why: "936 − 841 = **95** full texts were assessed." }] },
          { t: "Full texts excluded, with reasons: ___", g: [{ a: ["72"], why: "**72** full texts were excluded (wrong population 31, no outcome 25, not empirical 16)." }] },
          { t: "Studies included in the review: ___", g: [{ a: ["23"], why: "95 − 72 = **23** studies were included." }] },
          { t: "Percentage of screened records included: about ___ %", g: [{ a: ["2.5", "2,5", "2.46", "2.5%"], why: "23 ÷ 936 = 0.0246, so about **2.5%** of the screened records." }] }
        ] }
    ] },
    { h: "Writing: from summary to synthesis", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "This paragraph summarises one source at a time. Rewrite it as a synthesis (100–130 words), organised by ideas, with at least one commentary sentence.",
        passage: "Cervantes and Ruiz (2020) studied remittances in Mexico. They found that children were more likely to attend school. Santos (2021) studied the Philippines. He found the effect only for girls. Juárez (2022) did interviews in Guatemala. She found that some boys left school.",
        words: [100, 130],
        check: ["My topic sentence states an idea, not an author.", "I group sources that agree in the same sentence.", "I show disagreement with a contrast signal (*however*, *whereas*).", "I offer a possible explanation for the disagreement.", "I include a commentary sentence in my own voice (*Taken together…*).", "My reporting verbs show stance."],
        model: "<p>Evidence on remittances and schooling is broadly positive but depends on who receives the benefit. Large surveys in Mexico and the Philippines show that children in remittance-receiving households are more likely to be enrolled (Cervantes &amp; Ruiz, 2020; Santos, 2021). However, Santos (2021) found this effect only for girls, and qualitative work in Guatemala suggests why: when fathers migrate, older sons may leave school to replace their labour, particularly when remittances are irregular (Juárez, 2022). Taken together, these studies indicate that remittances may support schooling overall while creating new pressures on boys.</p>" }
    ] },
    { h: "My article", tag: "My article", ex: [
      { num: "8", type: "open", prompt: "Build a synthesis matrix with at least five sources for one theme of your research. Then write the second draft of your literature synthesis.", note: "Check every reference in a database before you cite it.",
        fields: [{ label: "Synthesis matrix: one line per source (author and year · design · context · sample · finding · limitation)" }, { label: "Literature synthesis · second draft" }],
        check: ["I have at least five sources.", "Every reference exists: I checked it in a database (not only in an AI tool).", "My paragraphs are organised by ideas, not by authors.", "I end with a gap that leads to my research question."] }
    ] },
    { h: "Extensive reading", tag: "Extensive reading", ex: [ window.RB2.log("9", "In the field “One phrase I want to use”, copy a sentence in which the authors synthesise two or more sources. Then complete the learning diary for Unit 2.") ] }
  ]
},

/* =============================== UNIT 3 =============================== */
{
  n: 3, title: "Making space", icon: "question",
  sub: "CARS moves · nominalisation and contrast · writing the introduction",
  img: { file: "Graz University-Library reading-room.jpg", credit: "Dr. Marcus Gossler, CC BY-SA 3.0", alt: "The main reading room of Graz University Library" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Classify the phrases as Move 1 (territory), Move 2 (niche) or Move 3 (occupying the niche).",
        items: [
          { t: "…has received considerable attention in recent years. → ___", g: [{ a: ["Move 1"], o: ["Move 1", "Move 2", "Move 3"], why: "Saying that a topic is important or widely studied **establishes the territory** (Move 1)." }] },
          { t: "Little is known about… → ___", g: [{ a: ["Move 2"], o: ["Move 1", "Move 2", "Move 3"], why: "*Little is known* indicates a **gap**: Move 2, establishing a niche." }] },
          { t: "The aim of this paper is to… → ___", g: [{ a: ["Move 3"], o: ["Move 1", "Move 2", "Move 3"], why: "Stating the aim **occupies the niche**: Move 3." }] },
          { t: "Previous studies have shown that… → ___", g: [{ a: ["Move 1"], o: ["Move 1", "Move 2", "Move 3"], why: "Reviewing previous research belongs to **Move 1**, the territory." }] },
          { t: "However, these studies have overlooked… → ___", g: [{ a: ["Move 2"], o: ["Move 1", "Move 2", "Move 3"], why: "*However* + *overlooked* points out a weakness in previous work: **Move 2**." }] },
          { t: "We hypothesise that… → ___", g: [{ a: ["Move 3"], o: ["Move 1", "Move 2", "Move 3"], why: "Hypotheses announce what *this* study does: **Move 3**." }] },
          { t: "…remains unclear. → ___", g: [{ a: ["Move 2"], o: ["Move 1", "Move 2", "Move 3"], why: "Something that *remains unclear* is an open question: **Move 2**." }] },
          { t: "…plays a central role in… → ___", g: [{ a: ["Move 1"], o: ["Move 1", "Move 2", "Move 3"], why: "Claiming the importance of a topic **establishes the territory**: Move 1." }] }
        ] }
    ] },
    { h: "Grammar for writing: noun phrases and contrast", tag: "Grammar", ex: [
      { num: "2", type: "rewrite", prompt: "Rewrite with a nominalisation. Begin with the words given.", note: "In sentences 2 and 5, write only the noun phrase.", flexible: true,
        items: [
          { q: "The researchers analysed the samples carefully.", start: "A careful…", a: ["A careful analysis of the samples was carried out.", "A careful analysis of the samples was conducted.", "A careful analysis of the samples was made.", "A careful analysis of the samples was performed.", "A careful analysis of the samples was carried out by the researchers."], why: "The verb *analysed* becomes the noun **analysis**, and the adverb *carefully* becomes the adjective **careful**: *A careful analysis of the samples was carried out.*" },
          { q: "Rainfall decreased sharply after 2010.", start: "The sharp…", a: ["The sharp decrease in rainfall after 2010", "The sharp fall in rainfall after 2010", "The sharp drop in rainfall after 2010", "The sharp reduction in rainfall after 2010", "The sharp decline in rainfall after 2010"], why: "*Decreased sharply* → **the sharp decrease in** rainfall. Note the preposition: *a decrease **in** something*." },
          { q: "If water is distributed more fairly, conflicts may fall.", start: "A fairer…", a: ["A fairer distribution of water may reduce conflicts.", "A fairer distribution of water may reduce conflict.", "A fairer distribution of water could reduce conflicts.", "A fairer distribution of water might reduce conflicts.", "A fairer distribution of water may lead to fewer conflicts."], why: "*Is distributed more fairly* → **a fairer distribution of water**. The noun phrase becomes the subject, so you need a new verb: *may reduce conflicts*." },
          { q: "Patients did not attend regularly, which affected the results.", start: "Irregular…", a: ["Irregular attendance by patients affected the results.", "Irregular attendance of patients affected the results.", "Irregular patient attendance affected the results.", "Irregular attendance among patients affected the results."], why: "*Did not attend regularly* → **irregular attendance**. The patients become a prepositional phrase: *by patients*." },
          { q: "Groundwater is exploited intensively in the region.", start: "The intensive…", a: ["The intensive exploitation of groundwater in the region", "The intensive exploitation of the groundwater in the region"], why: "*Is exploited intensively* → **the intensive exploitation of** groundwater." }
        ] },
      { num: "3", type: "rewrite", prompt: "These noun strings are hard to read. Rewrite them with prepositions.", flexible: true,
        items: [
          { q: "rural household drinking water arsenic exposure assessment", a: ["an assessment of exposure to arsenic in the drinking water of rural households", "assessment of exposure to arsenic in the drinking water of rural households", "an assessment of arsenic exposure in the drinking water of rural households", "an assessment of exposure to arsenic in drinking water in rural households", "the assessment of exposure to arsenic in the drinking water of rural households"], why: "Start with the **last noun** (the head: *assessment*) and work backwards with prepositions: *an assessment **of** exposure **to** arsenic **in** the drinking water **of** rural households*." },
          { q: "student online learning satisfaction survey results", a: ["the results of a survey on students' satisfaction with online learning", "the results of a survey on student satisfaction with online learning", "results of a survey on students' satisfaction with online learning", "the results of a survey of students' satisfaction with online learning", "the results of a survey about students' satisfaction with online learning"], why: "The head noun is *results*: *the results **of** a survey **on** students’ satisfaction **with** online learning*." }
        ] },
      { num: "4", type: "gaps", prompt: "Complete with *although*, *whereas*, *despite* or *however*.", note: "Use each word once.",
        items: [
          { t: "___ its low cost, the method is rarely used.", g: [{ a: ["Despite"], why: "**Despite** is followed by a noun phrase (*its low cost*), not by a clause." }] },
          { t: "Urban schools have air conditioning, ___ rural schools rarely do.", g: [{ a: ["whereas"], why: "**Whereas** joins two clauses in one sentence to compare two groups directly." }] },
          { t: "The models are cheap. ___, they are unreliable in dry climates.", g: [{ a: ["However"], why: "**However** starts a new sentence and is followed by a comma." }] },
          { t: "___ the results are promising, they come from a single site.", g: [{ a: ["Although"], why: "**Although** is followed by a clause (subject + verb) and joins it to the main clause." }] }
        ] }
    ] },
    { h: "Reading: a scrambled introduction", tag: "Reading", ex: [
      { num: "5", type: "gaps", prompt: "Put the sentences in order and label each with its move.",
        html: "<ol type=\"a\" class=\"passage\" style=\"padding-left:2.2em\"><li>To our knowledge, no study has examined how patients with limited internet access experience these consultations in rural Mexico.</li><li>Diabetes is one of the leading causes of death in Mexico, and rural patients often live hours away from specialist care.</li><li>This study therefore explores the experiences of 30 patients and 8 doctors in rural Zacatecas during the first year of a telemedicine programme.</li><li>However, most evaluations have been conducted in urban hospitals with reliable internet connections.</li><li>Telemedicine has been proposed as a way to reduce this distance, and several studies have reported better control of blood sugar.</li><li>The findings are expected to inform the design of telemedicine services for communities with poor connectivity.</li></ol><p class=\"ex-note\"><em>(Text written for this workbook.)</em></p>",
        items: [
          { t: "First sentence: ___ · ___", g: [{ a: ["b"], o: ["a", "b", "c", "d", "e", "f"], why: "The introduction starts with the general, important problem: diabetes in Mexico." }, { a: ["Move 1"], o: ["Move 1", "Move 2", "Move 3"], why: "A general, important problem establishes the territory." }] },
          { t: "Second sentence: ___ · ___", g: [{ a: ["e"], o: ["a", "b", "c", "d", "e", "f"], why: "*This distance* refers back to sentence b, so e comes next." }, { a: ["Move 1"], o: ["Move 1", "Move 2", "Move 3"], why: "Reporting previous research (*several studies have reported…*) is still Move 1." }] },
          { t: "Third sentence: ___ · ___", g: [{ a: ["d"], o: ["a", "b", "c", "d", "e", "f"], why: "*However* introduces a limitation of the studies just mentioned." }, { a: ["Move 2"], o: ["Move 1", "Move 2", "Move 3"], why: "A limitation of previous work begins the niche." }] },
          { t: "Fourth sentence: ___ · ___", g: [{ a: ["a"], o: ["a", "b", "c", "d", "e", "f"], why: "After the limitation comes the precise gap: *to our knowledge, no study…*" }, { a: ["Move 2"], o: ["Move 1", "Move 2", "Move 3"], why: "*No study has examined* states the gap: Move 2." }] },
          { t: "Fifth sentence: ___ · ___", g: [{ a: ["c"], o: ["a", "b", "c", "d", "e", "f"], why: "*Therefore* shows that this study responds to the gap." }, { a: ["Move 3"], o: ["Move 1", "Move 2", "Move 3"], why: "Announcing what this study does occupies the niche." }] },
          { t: "Sixth sentence: ___ · ___", g: [{ a: ["f"], o: ["a", "b", "c", "d", "e", "f"], why: "The expected contribution usually closes the introduction." }, { a: ["Move 3"], o: ["Move 1", "Move 2", "Move 3"], why: "The value of the study is part of Move 3." }] }
        ] }
    ] },
    { h: "Listen again: Track 3.1", tag: "Listening", ex: [
      { num: "6", type: "open", prompt: "Listen to Dr Becker again. Check your introduction draft against each of her five reasons for failure. Write one sentence about what you will change.",
        track: "3.1", trackLabel: "Talk: why introductions fail",
        check: ["1 My background is short and starts with a specific problem, not a textbook overview.", "2 I state what is missing and why it matters (a real gap).", "3 My aim appears at the end of the introduction and matches my title and results.", "4 I cite recent work (last five years) as well as classics.", "5 I describe precisely what is new and do not overclaim novelty."],
        fields: [{ label: "What I will change in my introduction", short: true }] }
    ] },
    { h: "Writing: repair an introduction", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "Rewrite *Version A* from Student’s Book Exercise 12 as a good introduction (120–150 words).", note: "Invent the necessary details and citations, and mark them as invented.",
        words: [120, 150],
        check: ["Move 1: a specific problem and previous research with citations.", "Move 2: a clear, precise gap with a contrast signal.", "Move 3: the aim and the data or method of this study.", "I avoid *since ancient times* and other very general openings.", "I mark invented citations with an asterisk."],
        model: "<p>Groundwater supplies most of the water used for irrigation in central Mexico, and many aquifers in the region are overexploited (Ramírez, 2018*). Recharge is usually estimated with water-balance models, which are cheap but very sensitive to errors in evaporation data (Solís et al., 2015*). As a result, estimates for the same aquifer can differ widely. Stable isotopes offer an independent method and have been used successfully in Spain (García-León et al., 2016*), but they have not yet been applied in the Mexican highlands. This study uses isotopes from 46 wells to estimate the recharge of an aquifer in central Zacatecas. <em>(* invented citations)</em></p>" }
    ] },
    { h: "My article", tag: "My article", ex: [
      { num: "8", type: "open", prompt: "Write the second draft of your introduction.", note: "Check that your research questions match your title.",
        fields: [{ label: "Introduction · second draft" }, { label: "My gap sentence (copy it here)", short: true }],
        check: ["My gap sentence is easy to find.", "My research questions match my title.", "I followed the three moves."] }
    ] },
    { h: "Extensive reading", tag: "Extensive reading", ex: [ window.RB2.log("9", "Read the introduction of one article in your target journal and map its moves (write them in the gap field). Then complete the learning diary for Unit 3.") ] }
  ]
},

/* =============================== UNIT 4 =============================== */
{
  n: 4, title: "By design", icon: "ruler",
  sub: "Varied passives · purpose and reason · justifying methodological decisions",
  img: { file: "Cereal trial plot, Cereals 2010 - geograph.org.uk - 1910647.jpg", credit: "Michael Trolove, CC BY-SA 2.0", alt: "Cereal trial plots at an agricultural research demonstration" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Complete the table with the noun.",
        items: [
          { t: "randomise → ___", g: [{ a: ["randomisation", "randomization"], why: "Verb in *-ise* → noun in **-isation**: *randomisation* (US *randomization*)." }] },
          { t: "replicate → ___", g: [{ a: ["replication"], why: "*Replicate* → **replication**: repeating a study to see if the results hold." }] },
          { t: "reliable → ___", g: [{ a: ["reliability"], why: "Adjective in *-able* → noun in **-ability**: *reliability* (consistency of a measure)." }] },
          { t: "valid → ___", g: [{ a: ["validity"], why: "*Valid* → **validity**: whether a measure or design captures what it claims to." }] },
          { t: "stratify → ___", g: [{ a: ["stratification"], why: "Verb in *-ify* → noun in **-ification**: *stratification*." }] },
          { t: "allocate → ___", g: [{ a: ["allocation"], why: "*Allocate* → **allocation**, as in *random allocation to groups*." }] },
          { t: "generalise → ___", g: [{ a: ["generalisation", "generalization"], why: "*Generalise* → **generalisation** (US *generalization*)." }] }
        ] },
      { num: "1b", type: "open", prompt: "Use four of the nouns from Exercise 1 in sentences about your own research design.",
        fields: [{ label: "Sentence 1", short: true }, { label: "Sentence 2", short: true }, { label: "Sentence 3", short: true }, { label: "Sentence 4", short: true }] }
    ] },
    { h: "Grammar for writing: varied passives and purpose", tag: "Grammar", ex: [
      { num: "2", type: "rewrite", prompt: "Rewrite the sentences in the passive. Use a causative in sentence 6.", flexible: true,
        items: [
          { q: "We calibrated the sensors before each season.", a: ["The sensors were calibrated before each season."], why: "Past simple passive: **were + past participle**. The agent (*we*) is not needed." },
          { q: "Researchers should report missing data.", a: ["Missing data should be reported.", "Missing data should be reported by researchers."], why: "Modal passive: **should be + past participle**: *should be reported*." },
          { q: "We need to pilot the questionnaire.", a: ["The questionnaire needs to be piloted.", "The questionnaire needs piloting."], why: "Infinitive passive: **need to be + past participle**: *needs to be piloted* (third-person *-s*)." },
          { q: "People believe that the aquifer is overexploited.", start: "It is…", a: ["It is believed that the aquifer is overexploited."], why: "Impersonal passive: **It is believed that** + clause." },
          { q: "People believe that the aquifer is overexploited.", start: "The aquifer…", a: ["The aquifer is believed to be overexploited."], why: "Personal passive: subject + **is believed to be** + adjective or participle." },
          { q: "A private laboratory analysed our soil samples for us.", start: "We had…", a: ["We had our soil samples analysed by a private laboratory.", "We had our soil samples analysed by a private lab.", "We had the soil samples analysed by a private laboratory."], why: "Causative: **have + object + past participle**: *We had our soil samples analysed by…*" },
          { q: "They cannot generalise these results to cities.", a: ["These results cannot be generalised to cities.", "These results can't be generalised to cities."], why: "Modal passive: **cannot be + past participle**: *cannot be generalised*." }
        ] },
      { num: "3", type: "rewrite", prompt: "Join the sentences with the words in brackets.", flexible: true,
        items: [
          { q: "Plots were randomised. We wanted to avoid selection bias. (*in order to*)", a: ["Plots were randomised in order to avoid selection bias.", "The plots were randomised in order to avoid selection bias."], why: "**In order to** + base form expresses purpose: *in order to avoid*." },
          { q: "Two sessions were cancelled. There was a teachers’ strike. (*due to*)", a: ["Two sessions were cancelled due to a teachers' strike.", "Two sessions were canceled due to a teachers' strike.", "Two sessions were cancelled due to a teachers strike."], why: "**Due to** is followed by a noun phrase, not a clause: *due to a teachers’ strike*." },
          { q: "Interviews were recorded. The exact words could be analysed later. (*so that*)", a: ["Interviews were recorded so that the exact words could be analysed later.", "The interviews were recorded so that the exact words could be analysed later."], why: "**So that** + subject + *could/would* expresses purpose with a new subject." },
          { q: "One school was excluded. It closed in March. (*because*)", a: ["One school was excluded because it closed in March.", "One school was excluded because it had closed in March."], why: "**Because** + clause gives the reason: *because it closed in March*." }
        ] }
    ] },
    { h: "Reading: what is missing?", tag: "Reading", ex: [
      { num: "4", type: "open", prompt: "Read this methods section. List at least six pieces of information that another researcher would need to replicate the study.",
        passage: "<strong>Participants and procedure.</strong> Students from two secondary schools took part. One school used the reading app for a semester and the other did not. Reading was measured with a test at the end of the semester. The data were analysed with statistics.<br><small><em>(Text written for this workbook.)</em></small>",
        fields: [{ label: "Missing information (one item per line)" }],
        model: "<p>For example:</p><ul><li>the number of students and how they were selected</li><li>how the schools were chosen and whether they were comparable</li><li>whether there was a baseline test</li><li>the name, reliability and validity of the reading test</li><li>who applied the test and whether they knew the group</li><li>how often students used the app</li><li>attrition (students who left)</li><li>the statistical test</li><li>ethical approval and consent</li></ul>" }
    ] },
    { h: "Listen again: Track 4.1", tag: "Listening", ex: [
      { num: "5", type: "open", prompt: "Listen to Prof MacLeod again. Redesign the reading app study in four sentences, one for each threat to validity.",
        track: "4.1", trackLabel: "Lecture: four threats to validity",
        fields: [{ label: "Internal validity", short: true }, { label: "External validity", short: true }, { label: "Construct validity", short: true }, { label: "Statistical conclusion validity", short: true }],
        model: "<p><strong>Internal:</strong> Classes will be randomly assigned within the same schools, and reading will be measured at baseline.</p><p><strong>External:</strong> Public and rural schools will be included.</p><p><strong>Construct:</strong> A validated comprehension test will be used, not only reading speed.</p><p><strong>Statistical conclusion:</strong> The sample size will be calculated in advance, and one or two main outcomes will be preregistered.</p>" }
    ] },
    { h: "Writing: justify, don't just describe", tag: "Writing", ex: [
      { num: "6", type: "open", prompt: "Add a justification to each sentence with *because*, *to*, *in order to* or *so that*.",
        fields: [{ label: "1 Interviews were conducted in participants’ homes…", short: true }, { label: "2 Samples were kept at 4 °C…", short: true }, { label: "3 The questionnaire was piloted with ten farmers…", short: true }, { label: "4 A multilevel model was used…", short: true }],
        model: "<p><strong>1</strong> …so that participants would feel comfortable.</p><p><strong>2</strong> …to prevent degradation before analysis.</p><p><strong>3</strong> …in order to check that the questions were clear.</p><p><strong>4</strong> …because pupils were nested in schools.</p>" }
    ] },
    { h: "My article", tag: "My article", ex: [
      { num: "7", type: "open", prompt: "Write the second draft of your methods section. Then give it to someone outside your field and ask: *Could you repeat this study from my description? What is missing?*",
        fields: [{ label: "Methods · second draft" }, { label: "What my reader said was missing", short: true }],
        check: ["Another researcher could repeat my study from this description.", "I justify my main decisions, not only describe them.", "I use a variety of passive forms, not only *was/were + participle*."] }
    ] },
    { h: "Extensive reading", tag: "Extensive reading", ex: [ window.RB2.log("8", "In your weekly article, find two sentences that justify a methodological decision and copy one of them in the phrase field. Then complete the learning diary for Unit 4.") ] }
  ]
},

/* =============================== UNIT 5 =============================== */
{
  n: 5, title: "Thick description", icon: "voice",
  sub: "Relative clauses and the past perfect · trustworthiness · positionality",
  img: { file: "Women apply pigment to the pottery - NARA - 285575.jpg", credit: "U.S. National Archives (NARA), public domain", alt: "Women applying pigment to pottery" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Lincoln and Guba (1985) proposed four criteria of trustworthiness. Match each criterion with a strategy.",
        items: [
          { t: "credibility → ___", g: [{ a: ["member checking and prolonged engagement in the field"], o: ["a detailed audit trail of every analytical decision", "a reflexive journal in which the researcher examines their assumptions", "member checking and prolonged engagement in the field", "thick description of the context and participants"], why: "**Credibility** asks whether the findings are believable to participants: member checking and long engagement help." }] },
          { t: "transferability → ___", g: [{ a: ["thick description of the context and participants"], o: ["a detailed audit trail of every analytical decision", "a reflexive journal in which the researcher examines their assumptions", "member checking and prolonged engagement in the field", "thick description of the context and participants"], why: "**Transferability**: readers can judge whether findings apply to other settings only if the context is described in detail." }] },
          { t: "dependability → ___", g: [{ a: ["a detailed audit trail of every analytical decision"], o: ["a detailed audit trail of every analytical decision", "a reflexive journal in which the researcher examines their assumptions", "member checking and prolonged engagement in the field", "thick description of the context and participants"], why: "**Dependability**: an audit trail shows that the process was consistent and can be followed." }] },
          { t: "confirmability → ___", g: [{ a: ["a reflexive journal in which the researcher examines their assumptions"], o: ["a detailed audit trail of every analytical decision", "a reflexive journal in which the researcher examines their assumptions", "member checking and prolonged engagement in the field", "thick description of the context and participants"], why: "**Confirmability**: the findings come from the data, not from the researcher’s assumptions; a reflexive journal makes those assumptions visible." }] }
        ] }
    ] },
    { h: "Grammar for writing: relative clauses and the past perfect", tag: "Grammar", ex: [
      { num: "2", type: "choice", prompt: "Choose the correct punctuation for each sentence. Two sentences need no commas.",
        items: [
          { q: "The teachers who had more than ten years of experience described fewer problems.", o: ["No commas are needed.", "The teachers, who had more than ten years of experience, described fewer problems."], a: 0, f: ["Correct: the clause is **defining**. It tells us *which* teachers (only the experienced ones), so there are no commas.", "With commas, the sentence would mean that *all* the teachers had more than ten years of experience. The clause identifies a group, so it is defining."] },
          { q: "Zacatecas which is a mining state has a long history of migration.", o: ["No commas are needed.", "Zacatecas, which is a mining state, has a long history of migration."], a: 1, f: ["A proper noun is already identified, so the clause only adds extra information: it is **non-defining** and needs commas.", "Correct: *Zacatecas* is already identified, so the clause is **non-defining** and goes between commas."] },
          { q: "The cooperative that we studied was founded in 1998.", o: ["No commas are needed.", "The cooperative, that we studied, was founded in 1998."], a: 0, f: ["Correct: the clause defines *which* cooperative. Also, **that** never introduces a non-defining clause.", "*That* cannot be used with commas: non-defining clauses use *which* or *who*. Here the clause is defining."] },
          { q: "Sofía whose father had migrated understood the families’ vocabulary.", o: ["No commas are needed.", "Sofía, whose father had migrated, understood the families’ vocabulary."], a: 1, f: ["*Sofía* is a specific person, so the clause adds extra information and needs commas.", "Correct: a clause after a person’s name is **non-defining** and goes between commas."] },
          { q: "The interviews which lasted about an hour each were held in Spanish.", o: ["No commas are needed.", "The interviews, which lasted about an hour each, were held in Spanish."], a: 1, f: ["Here the clause gives extra information about *all* the interviews; it does not select some of them. The key answer uses commas.", "Correct: all the interviews lasted about an hour, so the clause adds information and is **non-defining**."] }
        ] },
      { num: "3", type: "rewrite", prompt: "Reduce the relative clauses.",
        items: [
          { q: "Women who work in the cooperative earn more than their husbands.", a: ["Women working in the cooperative earn more than their husbands."], why: "Active clause → **-ing participle**: *who work* → *working*." },
          { q: "The pots that are sold in the city centre are more expensive.", a: ["The pots sold in the city centre are more expensive.", "The pots sold in the city center are more expensive."], why: "Passive clause → **past participle**: *that are sold* → *sold*." },
          { q: "The artisans who were interviewed in 2025 all lived in the same town.", a: ["The artisans interviewed in 2025 all lived in the same town."], why: "Passive clause → **past participle**: *who were interviewed* → *interviewed*." }
        ] },
      { num: "4", type: "gaps", prompt: "Complete the field notes with the past simple or the past perfect.", numbered: false,
        items: [{ t: "When we (1) ___ (reach) the workshop, the women (2) ___ (already / light) the kiln. Doña Elena (3) ___ (show) us pots that she (4) ___ (make) the week before.",
          g: [
            { a: ["reached"], why: "The main event in the story: **past simple**, *reached*." },
            { a: ["had already lit"], why: "This happened **before** we reached the workshop: past perfect, *had already lit*. *Already* goes between *had* and the participle." },
            { a: ["showed"], why: "The next event in the sequence: **past simple**, *showed*." },
            { a: ["had made"], why: "*The week before* is earlier than the moment of the story: **past perfect**, *had made*." }
          ] }] }
    ] },
    { h: "Reading: qualitative findings", tag: "Reading", ex: [
      { num: "5", type: "open", prompt: "Read the extract and answer the questions.",
        passage: "Women in the cooperative described pottery as both income and identity. <em>“Before the cooperative, I sold my pots to a middleman for almost nothing. Now I decide the price”</em> (Artisan 4). Several women had learned the craft from their mothers, but none had sold directly to tourists before 2020. Participants also mentioned tensions at home: <em>“My husband says I spend too much time with the women”</em> (Artisan 9). Unfortunately, these poor, uneducated women still depend on tourism.<br><small><em>(Text written for this workbook.)</em></small>",
        fields: [
          { label: "1 Suggest a name for the theme of this extract.", short: true },
          { label: "2 Give one code to each quotation.", short: true },
          { label: "3 Which sentence uses deficit language? Rewrite it respectfully and with evidence.", short: true },
          { label: "4 What information would improve the transferability of these findings?", short: true }
        ],
        model: "<p><strong>1</strong> For example: <em>Pottery as income, identity and tension.</em></p><p><strong>2</strong> For example: Artisan 4 — <em>control over prices / economic autonomy</em>; Artisan 9 — <em>tensions at home / gender roles</em>.</p><p><strong>3</strong> The last sentence. Model: <em>Women’s income remains closely linked to tourism, which makes the cooperative vulnerable when visitor numbers fall.</em></p><p><strong>4</strong> Details of the town, the cooperative’s size and history, the women’s ages and how sales work.</p>" }
    ] },
    { h: "Listen again: Track 5.1", tag: "Listening", ex: [
      { num: "6a", type: "gaps", prompt: "Listen to the methods seminar again and write the numbers for the three stages of Sofía’s coding.",
        track: "5.1", trackLabel: "Methods seminar",
        items: [
          { t: "Initial codes: ___", g: [{ a: ["112"], why: "Sofía started with **112** initial codes." }] },
          { t: "Categories: ___", g: [{ a: ["18", "eighteen"], why: "The codes were grouped into **18** categories." }] },
          { t: "Themes: ___", g: [{ a: ["4", "four"], why: "The categories became **4** themes." }] }
        ] },
      { num: "6b", type: "open", prompt: "Write a short reflexive journal entry (60–80 words) about how your identity might affect one interview or one measurement in your own research.",
        words: [60, 80],
        check: ["I name one specific aspect of my identity or background.", "I describe one concrete situation in my research.", "I explain the possible effect.", "I say what I will do about it."] }
    ] },
    { h: "Writing: improve a positionality statement", tag: "Writing", ex: [
      { num: "7", type: "open", prompt: "Rewrite this statement (80–100 words). Think about the researcher’s background, access, possible influence and strategies.",
        passage: "I am objective and neutral because I am a scientist, so my position does not affect my research.",
        words: [80, 100],
        check: ["Background: who I am in relation to the participants or the topic.", "Assumptions I brought to the study.", "How my position may have influenced the data.", "Concrete strategies to reduce or examine that influence."],
        model: "<p>As a chemist trained in an urban university, I assumed that farmers would see contamination as the main problem. In the first interviews, however, they spoke more about water scarcity than quality. My role as a university researcher may also have encouraged them to give answers they thought I wanted. To reduce this influence, I worked with a local promoter who conducted some interviews, I kept a reflexive journal, and I discussed my interpretations with a colleague from the community.</p>" }
    ] },
    { h: "My article", tag: "My article", ex: [
      { num: "8", type: "open", prompt: "Write the second draft of your qualitative methods section or of your positionality statement.",
        fields: [{ label: "Second draft" }],
        check: ["I describe the context and participants in enough detail (thick description).", "I report at least two strategies of trustworthiness.", "I use respectful, non-deficit language."] }
    ] },
    { h: "Extensive reading", tag: "Extensive reading", ex: [ window.RB2.log("9", "Find a qualitative article in your field. Which strategies of trustworthiness does it report? Write them in the gap field. Then complete the learning diary for Unit 5.") ] }
  ]
},

/* =============================== UNIT 6 =============================== */
{
  n: 6, title: "Integrity matters", icon: "shield",
  sub: "Past modals · research misconduct · authorship, data and AI statements",
  img: { file: "AGBell Notebook.jpg", credit: "Alexander Graham Bell / Library of Congress, public domain", alt: "A page of Alexander Graham Bell's laboratory notebook, 1876" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Classify each practice as **misconduct** (fabrication, falsification or plagiarism), **questionable** or **acceptable**.",
        items: [
          { t: "Copying a paragraph from another article without citation. → ___", g: [{ a: ["misconduct"], o: ["misconduct", "questionable", "acceptable"], why: "Using someone else’s words without citation is **plagiarism**, one of the three forms of misconduct." }] },
          { t: "Changing the axis of a graph so that a small difference looks large. → ___", g: [{ a: ["questionable"], o: ["misconduct", "questionable", "acceptable"], why: "It is a **questionable** practice: the data are real, but the presentation misleads. It may become falsification." }] },
          { t: "Reporting only the outcomes that were statistically significant. → ___", g: [{ a: ["questionable"], o: ["misconduct", "questionable", "acceptable"], why: "**Selective reporting** is a questionable research practice: it distorts the literature." }] },
          { t: "Inventing participants to reach the planned sample size. → ___", g: [{ a: ["misconduct"], o: ["misconduct", "questionable", "acceptable"], why: "Inventing data or participants is **fabrication**: misconduct." }] },
          { t: "Sharing anonymised data in a public repository. → ___", g: [{ a: ["acceptable"], o: ["misconduct", "questionable", "acceptable"], why: "This is good, **acceptable** practice: it supports transparency and reproducibility." }] },
          { t: "Adding a colleague as an author as a favour. → ___", g: [{ a: ["questionable"], o: ["misconduct", "questionable", "acceptable"], why: "**Honorary authorship** is questionable: authors must make a substantial contribution and be accountable." }] },
          { t: "Removing a band from a gel image to make the result clearer. → ___", g: [{ a: ["misconduct"], o: ["misconduct", "questionable", "acceptable"], why: "Manipulating an image so that it no longer shows the real result is **falsification**: misconduct." }] },
          { t: "Using an AI tool to check grammar, with disclosure. → ___", g: [{ a: ["acceptable"], o: ["misconduct", "questionable", "acceptable"], why: "Most journals accept language editing with AI tools if it is **disclosed** and the authors check the result." }] }
        ] }
    ] },
    { h: "Grammar for writing: past modals", tag: "Grammar", ex: [
      { num: "2", type: "rewrite", prompt: "Write a sentence with a past modal for each situation.", flexible: true,
        items: [
          { q: "The data files are missing. I’m almost sure the server deleted them during the update. (*must*)", a: ["The server must have deleted them during the update.", "The server must have deleted the data files during the update.", "The server must have deleted the files during the update.", "They must have been deleted by the server during the update.", "The files must have been deleted during the update."], why: "Strong deduction about the past: **must have + past participle**: *must have deleted*." },
          { q: "Perhaps the reviewer did not read the supplementary material. (*might*)", a: ["The reviewer might not have read the supplementary material."], why: "Possibility in the past: **might not have + past participle**." },
          { q: "It’s impossible that she copied it: the other article was published later. (*can’t*)", a: ["She can't have copied it.", "She cannot have copied it.", "She can't have copied it because the other article was published later.", "She can't have copied it: the other article was published later."], why: "Logical impossibility in the past: **can’t have + past participle**." },
          { q: "The team did not keep a backup. That was a mistake. (*should*)", a: ["The team should have kept a backup."], why: "Criticism of a past action that did not happen: **should have + past participle**." },
          { q: "The student contacted the ethics committee, but it wasn’t necessary because the study was exempt. (*needn’t*)", a: ["The student needn't have contacted the ethics committee.", "The student need not have contacted the ethics committee."], why: "Something that was done but was not necessary: **needn’t have + past participle**." },
          { q: "The supervisor approved the thesis without reading the methods. That was wrong. (*shouldn’t*)", a: ["The supervisor shouldn't have approved the thesis without reading the methods.", "The supervisor should not have approved the thesis without reading the methods."], why: "Criticism of something that did happen: **shouldn’t have + past participle**." }
        ] }
    ] },
    { h: "Reading: the survey that was too perfect", tag: "Reading", ex: [
      { num: "3", type: "open", prompt: "Read the case and answer the questions with modals where possible.",
        passage: "A master’s student sent an online survey to nurses in three hospitals and needed 300 responses for his analysis. Two days before the deadline, he had 240. On the last day, 60 more responses arrived. His supervisor noticed that all 60 had been completed in less than two minutes, from the same internet connection, with almost identical answers. At first the student said that friends had helped him distribute the survey. Later, he admitted that he had completed the responses himself because he was afraid of missing the deadline. The 60 responses were removed, the thesis was delayed by one semester, and the student completed a course on research integrity.<br><small><em>(Fictional case written for this workbook.)</em></small>",
        fields: [
          { label: "1 What type of misconduct did the student commit?", short: true },
          { label: "2 What must the supervisor have thought when she saw the data?", short: true },
          { label: "3 What should the student have done when he realised he would not reach 300 responses?", short: true },
          { label: "4 Do you think the consequences were fair? What else could the university have done?", short: true },
          { label: "5 How could the survey design have made this problem easier to detect, or less likely?", short: true }
        ],
        model: "<p><strong>1</strong> Fabrication.</p><p><strong>2</strong> She must have thought that the responses had been completed by one person.</p><p><strong>3</strong> He should have told his supervisor and reported the smaller sample, or asked for an extension.</p><p><strong>4</strong> Open answer.</p><p><strong>5</strong> For example: limit one response per person, add attention-check questions, monitor responses daily and plan a realistic sample size.</p>" }
    ] },
    { h: "Listen again: Track 6.1", tag: "Listening", ex: [
      { num: "4", type: "open", prompt: "Listen to the integrity committee again. Write the committee’s recommendation as a short formal letter (80–100 words) to the head of the laboratory.",
        track: "6.1", trackLabel: "Integrity committee meeting",
        words: [80, 100],
        check: ["Formal greeting and closing.", "The date and purpose of the meeting.", "Each recommendation with a reason.", "A recommendation for the future."],
        model: "<p>Dear Head of the Soil Chemistry Laboratory,</p><p>The Research Integrity Committee met on 12 March to review the authorship of the article on soil metals. The committee recommends that Mr Raúl Cortés be added as an author, because he made a substantial contribution to data acquisition and analysis and agrees to be accountable for it. It also recommends that Prof Salgado be moved to the acknowledgements, as obtaining funding alone does not meet the criteria for authorship. Finally, the laboratory should adopt a written authorship agreement for all new projects.</p><p>Yours sincerely,<br>Dr Omar Haddad, Chair</p>" }
    ] },
    { h: "Writing: statements of contribution and AI use", tag: "Writing", ex: [
      { num: "5", type: "open", prompt: "This AI statement is too vague. Rewrite it so that it says what was and was not done.",
        passage: "<em>AI was used in this work.</em>",
        check: ["I say which tool or type of tool was used.", "I say what it was used for and in which sections.", "I say what it was **not** used for (data, analysis, interpretation).", "I say that the authors checked the output and take responsibility."],
        model: "<p>During the preparation of this article, the authors used an AI language tool to correct grammar and improve the clarity of the abstract and introduction. No AI tool was used to collect or analyse data, to generate figures or to interpret results. The authors reviewed all suggestions and take full responsibility for the content.</p>" },
      { num: "6", type: "open", prompt: "Write a CRediT-style contribution statement for this three-author article.",
        html: "<table class=\"t\"><tr><th>Author</th><th>What they did</th></tr><tr><td>A. López</td><td>Designed the study, collected the data, wrote the first draft</td></tr><tr><td>B. Ruiz</td><td>Ran the statistical analysis, prepared the figures, revised the draft</td></tr><tr><td>C. Herrera</td><td>Obtained the funding, supervised the project, revised and approved the final version</td></tr></table>",
        fields: [{ label: "A. López", short: true }, { label: "B. Ruiz", short: true }, { label: "C. Herrera", short: true }],
        model: "<p><em>A. López:</em> conceptualisation, methodology, investigation, writing – original draft.<br><em>B. Ruiz:</em> formal analysis, visualisation, writing – review and editing.<br><em>C. Herrera:</em> funding acquisition, supervision, writing – review and editing.</p>" }
    ] },
    { h: "My article", tag: "My article", ex: [
      { num: "7", type: "open", prompt: "Write the second draft of your data management plan and your AI-use statement.", note: "Find your target journal’s policy on AI tools and make sure your statement follows it.",
        fields: [{ label: "Data management plan · second draft" }, { label: "AI-use statement", short: true }, { label: "My target journal’s AI policy (link or summary)", short: true }],
        check: ["I say where the data are stored and how they are backed up.", "I say how personal data are anonymised.", "My AI statement follows my journal’s policy."] }
    ] },
    { h: "Extensive reading", tag: "Extensive reading", ex: [ window.RB2.log("8", "Find the author contribution statement and the data availability statement in your weekly article. Then complete the learning diary for Unit 6 and revise Units 1–6 for the mid-course test.") ] }
  ]
}
);
