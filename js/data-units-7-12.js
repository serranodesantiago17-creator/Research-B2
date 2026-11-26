/* Research Pathways B2 · Workbook · Units 7–12
   Texts marked "written for this workbook" are fictional and are used for practice. */
window.UNITS = window.UNITS || [];

window.UNITS.push(

/* =============================== UNIT 7 =============================== */
{
  n: 7, title: "The story in the numbers", icon: "chart",
  sub: "Comparison and change · effect sizes and confidence intervals · the results section",
  img: { file: "Scientist Working in a Laboratory(GN09043).jpg", credit: "State Government Photographer, History Trust of South Australia (CC0)", alt: "A scientist working in a laboratory, around 1945" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Complete with *confidence interval*, *effect size*, *mean*, *median*, *outlier* or *standard deviation*.",
        box: ["confidence interval", "effect size", "mean", "median", "outlier", "standard deviation"],
        items: [
          { t: "Because the data were skewed, we report the ___.", g: [{ a: ["median"], why: "With **skewed** data, the **median** (the middle value) is less affected by extreme values than the mean." }] },
          { t: "One school scored 2.1, far below all the others: it was an ___.", g: [{ a: ["outlier"], why: "A value far from all the others is an **outlier**. Note *an* before a vowel sound." }] },
          { t: "The ___ shows how much values vary around the mean.", g: [{ a: ["standard deviation"], why: "The **standard deviation** (SD) measures spread around the mean." }] },
          { t: "A narrow ___ indicates a precise estimate.", g: [{ a: ["confidence interval"], why: "A **narrow confidence interval** means the estimate is precise; a wide one means uncertainty." }] },
          { t: "Cohen’s *d* is a common measure of ___.", g: [{ a: ["effect size"], why: "Cohen’s *d* expresses the **effect size**: how large a difference is, in standard deviation units." }] },
          { t: "The ___ score was 7.4 out of 10.", g: [{ a: ["mean"], why: "The **mean** is the average score." }] }
        ] }
    ] },
    { h: "Grammar for writing: comparison and change", tag: "Grammar", ex: [
      { num: "2", type: "gaps", prompt: "Use Table W7 to complete the sentences.",
        html: "<p><strong>Table W7.</strong> Mathematics results in an online tutoring study (score out of 100; pass = 60 or more)</p><table class=\"t\"><tr><th>Group</th><th>Students</th><th>Mean score before</th><th>Mean score after</th><th>Pass rate before</th><th>Pass rate after</th></tr><tr><td>Tutoring</td><td>120</td><td>52.0</td><td>58.2</td><td>45%</td><td>63%</td></tr><tr><td>Control</td><td>120</td><td>51.6</td><td>53.7</td><td>44%</td><td>49%</td></tr></table><p class=\"ex-note\"><em>(Fictional data written for this workbook.)</em></p>",
        items: [
          { t: "Mean scores rose by ___ and ___ points in the tutoring and control groups, ___.", g: [
            { a: ["6.2"], why: "58.2 − 52.0 = **6.2** points." },
            { a: ["2.1"], why: "53.7 − 51.6 = **2.1** points." },
            { a: ["respectively"], why: "**Respectively** tells the reader that the numbers follow the same order as the groups." }] },
          { t: "The improvement in the tutoring group was nearly ___ as large as in the control group.", g: [{ a: ["three times", "3 times"], why: "6.2 ÷ 2.1 ≈ 2.95, so nearly **three times as large**. The structure is *X times as large as*." }] },
          { t: "The pass rate in the tutoring group rose by ___ percentage points, compared with ___ in the control group.", g: [
            { a: ["18", "eighteen"], why: "63% − 45% = **18 percentage points**. Use *percentage points* for the difference between two percentages." },
            { a: ["5", "five"], why: "49% − 44% = **5** percentage points." }] },
          { t: "In relative terms, the pass rate of the tutoring group increased by approximately ___%.", g: [{ a: ["40", "forty"], why: "Relative change = 18 ÷ 45 = 0.40, so about **40%**. Do not confuse a relative increase (%) with an absolute one (percentage points)." }] }
        ] }
    ] },
    { h: "Reading: spot the problems", tag: "Reading", ex: [
      { num: "3", type: "open", prompt: "Read this results paragraph about Table W7. Find three problems and rewrite the paragraph.",
        passage: "The tutoring programme was a total success: post-test scores were significantly higher (<em>p</em> &lt; .05), proving that online tutoring improves learning for all rural students. The control group did not improve at all.<br><small><em>(Text written for this workbook.)</em></small>",
        fields: [{ label: "Problem 1", short: true }, { label: "Problem 2", short: true }, { label: "Problem 3", short: true }, { label: "My rewritten paragraph" }],
        model: "<p><strong>Problems:</strong> (1) It gives only a <em>p</em>-value, with no difference, effect size or confidence interval. (2) <em>Total success</em>, <em>proving</em> and <em>all rural students</em> overclaim and interpret; a results section should report. (3) The control group did improve, by 2.1 points.</p><p><strong>Model:</strong> <em>Mean scores increased by 6.2 points in the tutoring group and 2.1 points in the control group (Table W7).</em></p>" }
    ] },
    { h: "Listen again: Track 7.1", tag: "Listening", ex: [
      { num: "4", type: "rewrite", prompt: "Listen to Elena again. Rewrite Daniela’s first sentence as Elena recommends: report the size of the difference, the confidence interval and the effect size.", flexible: true,
        track: "7.1", trackLabel: "Statistics consultation",
        items: [
          { q: "The filters had a significant effect (p < .001).", a: ["Filtered water had 29.3 µg/L less arsenic than control water at month 3 (95% CI 26.1–32.5; d = 3.7).", "Filtered water had 29.3 µg/L less arsenic than control water at month 3 (95% CI 26.1-32.5; d = 3.7).", "Filtered water contained 29.3 µg/L less arsenic than control water at month 3 (95% CI 26.1–32.5; d = 3.7).", "At month 3, filtered water had 29.3 µg/L less arsenic than control water (95% CI 26.1–32.5; d = 3.7)."], why: "Elena asks for **how big** the difference is and **how precise** the estimate is, not only whether it is significant: the difference (29.3 µg/L), the 95% CI (26.1–32.5) and *d* = 3.7." }
        ] }
    ] },
    { h: "Writing: a results paragraph", tag: "Writing", ex: [
      { num: "5", type: "open", prompt: "Write a results paragraph (120–150 words) about Table W7.", note: "Use this additional information: the difference in improvement between groups was 4.1 points (95% CI 2.3–5.9; *d* = 0.52). Refer to the table, report the main comparison precisely and do not interpret.",
        words: [120, 150],
        check: ["I refer to the table.", "I report that the groups were similar at baseline.", "I report the main comparison with the CI and the effect size.", "I use *percentage points* correctly.", "I do not interpret or explain the results (that belongs in the discussion)."],
        model: "<p>Table W7 shows mathematics results before and after the programme. Baseline scores were similar in the two groups (52.0 and 51.6). After one semester, mean scores had increased by 6.2 points in the tutoring group and by 2.1 points in the control group, a difference in improvement of 4.1 points (95% CI 2.3–5.9; <em>d</em> = 0.52). The pass rate rose from 45% to 63% in the tutoring group, an increase of 18 percentage points, compared with 5 percentage points in the control group (from 44% to 49%).</p>" }
    ] },
    { h: "My article", tag: "My article", ex: [
      { num: "6", type: "open", prompt: "Write the second draft of your results section.", note: "Check every number in the text against your table.",
        fields: [{ label: "Results · second draft" }],
        check: ["Every number in the text matches my table.", "I report effect sizes and confidence intervals, not only p-values.", "My table has a clear title and units.", "I report; I do not interpret."] }
    ] },
    { h: "Extensive reading", tag: "Extensive reading", ex: [ window.RB2.log("7", "In your weekly article, find how the authors report effect sizes and confidence intervals, and copy one example in the phrase field. Then complete the learning diary for Unit 7.") ] }
  ]
},

/* =============================== UNIT 8 =============================== */
{
  n: 8, title: "Making the case", icon: "bulb",
  sub: "Concession and conditionals · Toulmin arguments · the discussion section",
  img: { file: "Giant photovoltaic array.jpg", credit: "U.S. Air Force, public domain", alt: "A large array of solar panels" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Label the parts of this argument: *claim, grounds, warrant, qualifier, rebuttal*.",
        html: "<blockquote class=\"passage\">(1) School gardens probably increase children’s vegetable consumption, (2) at least in rural schools. (3) In our study, children in schools with gardens ate 0.8 more portions of vegetables per day than children in schools without gardens. (4) Children are more likely to eat food that they have grown themselves, (5) unless their families cannot afford vegetables at home.</blockquote>",
        items: [
          { t: "Part (1) → ___", g: [{ a: ["claim"], o: ["claim", "grounds", "warrant", "qualifier", "rebuttal"], why: "Part 1 is the main **claim** (softened by the qualifier *probably*)." }] },
          { t: "Part (2) → ___", g: [{ a: ["qualifier"], o: ["claim", "grounds", "warrant", "qualifier", "rebuttal"], why: "*At least in rural schools* limits the scope of the claim: a **qualifier**." }] },
          { t: "Part (3) → ___", g: [{ a: ["grounds"], o: ["claim", "grounds", "warrant", "qualifier", "rebuttal"], why: "The data from the study (0.8 more portions) are the **grounds**: the evidence." }] },
          { t: "Part (4) → ___", g: [{ a: ["warrant"], o: ["claim", "grounds", "warrant", "qualifier", "rebuttal"], why: "The general principle that connects the evidence to the claim is the **warrant**." }] },
          { t: "Part (5) → ___", g: [{ a: ["rebuttal"], o: ["claim", "grounds", "warrant", "qualifier", "rebuttal"], why: "*Unless…* names a condition in which the claim may not hold: a **rebuttal**." }] }
        ] }
    ] },
    { h: "Grammar for writing: concession and conditionals", tag: "Grammar", ex: [
      { num: "2", type: "rewrite", prompt: "Rewrite the sentences with the words given.", flexible: true,
        items: [
          { q: "Consumption was self-reported. The difference was large. (*Although*)", a: ["Although consumption was self-reported, the difference was large."], why: "**Although** + the weaker point, + comma + the main point." },
          { q: "The schools were not randomly selected. The results are encouraging. (*Despite*)", a: ["Despite the lack of random selection, the results are encouraging.", "Despite the fact that the schools were not randomly selected, the results are encouraging.", "Despite the schools not being randomly selected, the results are encouraging.", "Despite not being randomly selected, the schools showed encouraging results."], why: "**Despite** needs a noun phrase (*the lack of random selection*) or *the fact that* + clause, not a clause alone." },
          { q: "The study lasted one school year. Longer effects are unknown. (*Admittedly … Nevertheless*)", a: ["Admittedly, the study lasted only one school year. Nevertheless, longer effects are unknown.", "Admittedly, the study lasted one school year. Nevertheless, longer effects are unknown.", "Admittedly, the study lasted only one school year. Nevertheless, longer-term effects are unknown.", "Admittedly, the study lasted only one school year. Nevertheless, longer effects remain unknown."], why: "**Admittedly** introduces the concession; **Nevertheless** introduces the point that still holds. Each starts a sentence and takes a comma." },
          { q: "Gardens require teachers’ time. Parents valued them highly. (*While*)", a: ["While gardens require teachers' time, parents valued them highly.", "While gardens required teachers' time, parents valued them highly."], why: "**While** (concessive) + clause, + comma + main clause." }
        ] },
      { num: "3", type: "gaps", prompt: "Complete the conditionals.",
        items: [
          { t: "If we ___ (randomise) the schools, the comparison ___ (be) fairer. (third)", g: [
            { a: ["had randomised", "had randomized"], why: "Third conditional, *if* clause: **had + past participle**." },
            { a: ["would have been"], why: "Third conditional, result clause: **would have + past participle**." }] },
          { t: "If the study ___ (include) urban schools, we ___ (know) now whether the effect applies to cities. (mixed)", g: [
            { a: ["had included"], why: "The condition is in the past: **had included**." },
            { a: ["would know"], why: "The result is in the present (*now*): **would + base form**. That is a mixed conditional." }] },
          { t: "If the families ___ (not / receive) seeds, fewer children ___ (grow) vegetables at home. (third)", g: [
            { a: ["had not received", "hadn't received"], why: "Third conditional, negative: **had not + past participle**." },
            { a: ["would have grown"], why: "Result in the past: **would have grown**." }] }
        ] }
    ] },
    { h: "Reading: what is missing from this discussion?", tag: "Reading", ex: [
      { num: "4", type: "open", prompt: "Read the extract and answer the questions.",
        passage: "Our results show that school gardens increase children’s vegetable consumption. Children in schools with gardens ate more vegetables than children in other schools. Therefore, the Ministry of Education should build a garden in every school in the country.<br><small><em>(Text written for this workbook.)</em></small>",
        fields: [
          { label: "1 Which words overclaim? Rewrite the first sentence with an appropriate hedge.", short: true },
          { label: "2 Suggest two alternative explanations for the difference.", short: true },
          { label: "3 What limitation should the authors acknowledge?", short: true },
          { label: "4 Is the recommendation justified by the evidence? Rewrite it.", short: true }
        ],
        model: "<p><strong>1</strong> <em>show</em> and <em>increase</em> (stated as certain and causal). Model: <em>Our results suggest that school gardens may increase children’s vegetable consumption.</em></p><p><strong>2</strong> For example: schools with gardens may have more resources or more motivated teachers; families who choose these schools may already eat more vegetables.</p><p><strong>3</strong> Schools were not randomly assigned, and consumption may have been self-reported.</p><p><strong>4</strong> No. Model: <em>A larger randomised evaluation would help the Ministry to decide whether to expand school gardens.</em></p>" }
    ] },
    { h: "Listen again: Track 8.1", tag: "Listening", ex: [
      { num: "5", type: "open", prompt: "Listen again and write Sofía’s final claim as a Toulmin argument.",
        track: "8.1", trackLabel: "A claim under challenge",
        fields: [{ label: "Claim", short: true }, { label: "Grounds", short: true }, { label: "Warrant", short: true }, { label: "Qualifier", short: true }, { label: "Rebuttal", short: true }],
        model: "<p><strong>Claim:</strong> Return migration appears to shift men’s authority within the household.</p><p><strong>Grounds:</strong> In many families, women continued to make decisions after the husband’s return.</p><p><strong>Warrant:</strong> Who makes household decisions indicates authority.</p><p><strong>Qualifier:</strong> <em>in some families</em>, <em>appears</em>.</p><p><strong>Rebuttal:</strong> Men’s status in the community may increase; the sample included only families that stayed together.</p>" }
    ] },
    { h: "Writing: dealing with an alternative explanation", tag: "Writing", ex: [
      { num: "6", type: "open", prompt: "Write a paragraph (100–130 words) for the school garden study.", note: "Use this information: schools were not randomly chosen; schools with gardens had more parent participation; however, the difference remained when the analysis controlled for parent participation.",
        words: [100, 130],
        check: ["I name the alternative explanation clearly.", "I explain why it is plausible.", "I report the evidence against it.", "I acknowledge what remains uncertain.", "I hedge my conclusion."],
        model: "<p>One alternative explanation is that schools with gardens differed from other schools in ways that also affect diet. In particular, these schools had higher parent participation, and involved parents may encourage children to eat vegetables at home. However, the difference in consumption remained when the analysis controlled for parent participation, which suggests that it cannot be explained by this factor alone. Other unmeasured differences, such as teachers’ motivation, may still play a role, and only a randomised design could rule them out.</p>" }
    ] },
    { h: "My article", tag: "My article", ex: [
      { num: "7", type: "open", prompt: "Write the second draft of your discussion section.", note: "On paper or in your word processor, highlight your concessions in one colour and your hedges in another. Here, list two of each.",
        fields: [{ label: "Discussion · second draft" }, { label: "Two concessions I used", short: true }, { label: "Two hedges I used", short: true }],
        check: ["I start with my main finding and answer my research question.", "I compare my results with previous studies.", "I discuss at least one alternative explanation.", "I acknowledge limitations without destroying my argument.", "My recommendations match the strength of my evidence."] }
    ] },
    { h: "Extensive reading", tag: "Extensive reading", ex: [ window.RB2.log("8", "In your weekly article, find one alternative explanation and one limitation. How do the authors keep their main argument strong? Then complete the learning diary for Unit 8.") ] }
  ]
},

/* =============================== UNIT 9 =============================== */
{
  n: 9, title: "Under review", icon: "doc",
  sub: "Reporting comments · polite disagreement · responding to reviewers",
  img: { file: "Scientist looking thorugh microscope.jpg", credit: "National Cancer Institute (NIH), public domain", alt: "A scientist looking through a microscope" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Complete the sentences.",
        box: ["decline", "desk rejection", "manuscript", "minor", "resubmit", "scope"],
        items: [
          { t: "The article was outside the journal’s ___, so the editor sent a ___ without review.", g: [
            { a: ["scope"], why: "A journal’s **scope** is the range of topics it publishes." },
            { a: ["desk rejection"], why: "A **desk rejection** is a decision by the editor without sending the article to reviewers." }] },
          { t: "With ___ revisions, the editor usually decides without sending the article back to reviewers.", g: [{ a: ["minor"], why: "**Minor** revisions are small changes; major revisions usually go back to reviewers." }] },
          { t: "You have 60 days to revise and ___ the ___.", g: [
            { a: ["resubmit"], why: "After revising, you **resubmit** (send again)." },
            { a: ["manuscript"], why: "Before publication, an article is called a **manuscript**." }] },
          { t: "If you are too busy to review an article, it is better to ___ the invitation quickly.", g: [{ a: ["decline"], why: "To **decline** an invitation = to say no politely." }] }
        ] }
    ] },
    { h: "Grammar for writing: reporting and responding", tag: "Grammar", ex: [
      { num: "2", type: "rewrite", prompt: "Report the comments with the verb given.", note: "Begin with *The reviewer…*", flexible: true,
        items: [
          { q: "“Please define *authority* in the introduction.” (*ask*)", start: "The reviewer asks…", a: ["The reviewer asks us to define authority in the introduction.", "The reviewer asks us to define the term authority in the introduction.", "The reviewer asked us to define authority in the introduction."], why: "**ask + object + to-infinitive**: *asks us to define…*" },
          { q: "“You could shorten the quotations.” (*suggest*)", start: "The reviewer suggests…", a: ["The reviewer suggests shortening the quotations.", "The reviewer suggests that we shorten the quotations.", "The reviewer suggests that we should shorten the quotations.", "The reviewer suggested shortening the quotations."], why: "**suggest + -ing** or **suggest that + subject + verb**. Not *suggest us to…*" },
          { q: "“The sample includes only families that stayed together.” (*point out*)", start: "The reviewer points out…", a: ["The reviewer points out that the sample includes only families that stayed together.", "The reviewer pointed out that the sample includes only families that stayed together.", "The reviewer points out that the sample only includes families that stayed together."], why: "**point out that** + clause." },
          { q: "“A survey should be added to confirm the findings.” (*recommend*)", start: "The reviewer recommends…", a: ["The reviewer recommends that a survey be added to confirm the findings.", "The reviewer recommends that a survey should be added to confirm the findings.", "The reviewer recommends adding a survey to confirm the findings.", "The reviewer recommends that we add a survey to confirm the findings."], why: "**recommend that + subject + (should) + base form**, or **recommend + -ing**." },
          { q: "“Is the theoretical framework appropriate?” (*question*)", start: "The reviewer questions…", a: ["The reviewer questions whether the theoretical framework is appropriate.", "The reviewer questioned whether the theoretical framework is appropriate.", "The reviewer questions whether the theoretical framework is appropriate for the study."], why: "**question whether** + statement word order (*the framework is*, not *is the framework*)." }
        ] },
      { num: "3", type: "open", prompt: "Rewrite the responses politely and with evidence.",
        fields: [{ label: "1 You are wrong; qualitative studies don’t need surveys.", short: true }, { label: "2 We won’t shorten the quotations.", short: true }, { label: "3 We didn’t define authority because everybody knows what it means.", short: true }],
        model: "<p><strong>1</strong> We understand the reviewer’s suggestion. However, our aim was to explore meanings rather than to measure frequencies, and an interpretive design is appropriate for this aim. We now explain this more clearly (page 6, lines 140–146).</p><p><strong>2</strong> We agree that some quotations were long and have shortened four of them, keeping the words that support each theme.</p><p><strong>3</strong> We thank the reviewer for this point and have added a definition of authority based on the family sociology literature (page 3, lines 61–67).</p>" }
    ] },
    { h: "Reading: a reviewer report on Sofía's article", tag: "Reading", ex: [
      { num: "4", type: "gaps", prompt: "Read the report and decide how Sofía should respond to each comment.",
        html: "<blockquote class=\"passage\">(1.1) The sample includes only families that remained together after return, which may hide the most conflictive cases. (1.2) Several quotations are very long; shorter extracts would make the findings easier to read. (1.3) The term <em>authority</em> is used throughout but never defined. (1.4) The findings should be confirmed with a quantitative survey of return migrant families. (1.5) The discussion would benefit from comparison with studies of return migration in Central America.<br><small><em>(Fictional report written for this workbook.)</em></small></blockquote>",
        items: [
          { t: "Comment 1.1 → ___", g: [{ a: ["acknowledge as a limitation"], o: ["accept and revise", "partly accept", "respectfully rebut", "acknowledge as a limitation"], why: "Sofía cannot change her sample now, but she can **acknowledge it as a limitation** and explain why she made this sampling decision." }] },
          { t: "Comment 1.2 → ___", g: [{ a: ["accept and revise"], o: ["accept and revise", "partly accept", "respectfully rebut", "acknowledge as a limitation"], why: "Shortening quotations is easy and improves the article: **accept and revise**." }] },
          { t: "Comment 1.3 → ___", g: [{ a: ["accept and revise"], o: ["accept and revise", "partly accept", "respectfully rebut", "acknowledge as a limitation"], why: "A key term must be defined: **accept and revise**." }] },
          { t: "Comment 1.4 → ___", g: [{ a: ["respectfully rebut"], o: ["accept and revise", "partly accept", "respectfully rebut", "acknowledge as a limitation"], why: "A survey answers a different question. Sofía should **respectfully rebut** and suggest it as future research." }] },
          { t: "Comment 1.5 → ___", g: [{ a: ["accept and revise"], o: ["accept and revise", "partly accept", "respectfully rebut", "acknowledge as a limitation"], why: "Comparison with similar studies strengthens the discussion: **accept and revise**." }] }
        ] }
    ] },
    { h: "Listen again: Track 9.1", tag: "Listening", ex: [
      { num: "5", type: "open", prompt: "Use Hannah Becker’s five rules to evaluate this response. Then rewrite it.",
        track: "9.1", trackLabel: "Podcast: inside peer review",
        passage: "<em>We don’t agree. The reviewer did not understand our study. We didn’t change anything.</em>",
        fields: [{ label: "Which rules does it break?", short: true }, { label: "My rewritten response", short: true }],
        model: "<p>It breaks all five rules: it does not respond point by point, does not quote the comment, does not say what changed or where, is impolite and personal, and gives no evidence.</p><p><strong>Model:</strong> <em>We appreciate the reviewer’s comment. We may not have explained our design clearly enough, so we have revised the methods to clarify that… (page 5, lines 102–110).</em></p>" }
    ] },
    { h: "Writing: responding to reviewers", tag: "Writing", ex: [
      { num: "6", type: "open", prompt: "Write Sofía’s responses to comments 1.1, 1.3 and 1.4 (60–90 words each).", note: "Use the structure *acknowledge → explain → report the change and its location*.",
        fields: [{ label: "Response to comment 1.1" }, { label: "Response to comment 1.3" }, { label: "Response to comment 1.4" }],
        words: [180, 270],
        model: "<p><strong>1.1</strong> We agree that families who separated after return may have had different experiences. We focused on families who remained together because our question concerned the renegotiation of roles within ongoing relationships. We now state this as a limitation and suggest that future studies include separated families (page 15, lines 352–357).</p><p><strong>1.3</strong> We thank the reviewer for this important point. We now define authority as the capacity to make or veto decisions that affect the household, following family sociology, and we use the term consistently (page 3, lines 61–67).</p><p><strong>1.4</strong> We understand the value of quantitative confirmation. However, our aim was to understand how families give meaning to return, which a survey could not capture in the same depth. We have added a sentence recommending a survey as a next step to measure how widespread these patterns are (page 16, lines 371–374).</p>" }
    ] },
    { h: "My article", tag: "My article", ex: [
      { num: "7", type: "open", prompt: "Finalise your integrated article with this checklist.",
        fields: [{ label: "Notes on what I still need to change", short: true }],
        check: ["Title, abstract and keywords match the content.", "Introduction, methods, results and discussion are consistent (same numbers, same questions).", "Every reviewer comment has a response, and every change is located by page and line.", "References are complete and in the journal’s style.", "The AI statement and the data availability statement are included."] }
    ] },
    { h: "Extensive reading", tag: "Extensive reading", ex: [ window.RB2.log("8", "If your target journal publishes peer review reports, read one. What kinds of comments do reviewers make most often? Then complete the learning diary for Unit 9.") ] }
  ]
},

/* =============================== UNIT 10 =============================== */
{
  n: 10, title: "Taking the floor", icon: "stage",
  sub: "Emphasis: clefts and inversion · signposting · conference talks",
  img: { file: "GD09 Poster Session.jpg", credit: "David Eppstein", alt: "A poster session at an academic conference" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Complete the sentences.",
        box: ["chair", "hybrid", "keynote", "rehearse", "slot", "takeaway"],
        items: [
          { t: "Each speaker has a 12-minute ___, including questions.", g: [{ a: ["slot"], why: "A **slot** is the time assigned to a speaker in the programme." }] },
          { t: "The ___ introduced me and showed me the time cards.", g: [{ a: ["chair"], why: "The **chair** manages the session: introduces speakers, controls time and leads questions." }] },
          { t: "In a ___ conference, some speakers present online.", g: [{ a: ["hybrid"], why: "A **hybrid** conference combines in-person and online participation." }] },
          { t: "The ___ speaker opened the conference with a talk on climate and water.", g: [{ a: ["keynote"], why: "The **keynote** speaker gives the main invited talk, often at the opening." }] },
          { t: "Always ___ your talk aloud with a timer.", g: [{ a: ["rehearse"], why: "To **rehearse** = to practise a talk before giving it." }] },
          { t: "The final slide should state your main ___ in one sentence.", g: [{ a: ["takeaway"], why: "The **takeaway** is the main message the audience should remember." }] }
        ] }
    ] },
    { h: "Grammar: emphasis", tag: "Grammar", ex: [
      { num: "2", type: "rewrite", prompt: "Rewrite as cleft sentences. Begin with the words given.",
        items: [
          { q: "The timing of the rains explains the difference.", start: "What…", a: ["What explains the difference is the timing of the rains."], why: "*What* cleft: **What + verb… + is + the focus**: *What explains the difference is the timing of the rains.*" },
          { q: "The community technicians made the programme work.", start: "It was…", a: ["It was the community technicians who made the programme work.", "It was the community technicians that made the programme work.", "It was the community technicians who made the program work."], why: "*It* cleft: **It was + focus + who/that + rest of the sentence**." },
          { q: "We need better connectivity.", start: "What…", a: ["What we need is better connectivity."], why: "**What we need is** + the focus." },
          { q: "Few families used the filters at night because the flow was slow.", start: "The reason why…", a: ["The reason why few families used the filters at night was that the flow was slow.", "The reason why few families used the filters at night was because the flow was slow."], why: "**The reason why + clause + was that + clause**." }
        ] },
      { num: "3", type: "rewrite", prompt: "Rewrite with inversion. Begin with the words given.",
        items: [
          { q: "We saw the pattern only when we mapped the data.", start: "Only when…", a: ["Only when we mapped the data did we see the pattern."], why: "After **Only when + clause**, the main clause inverts with an auxiliary: *did we see*." },
          { q: "The method is cheaper, and it is also faster.", start: "Not only…", a: ["Not only is the method cheaper, but it is also faster.", "Not only is the method cheaper but it is also faster.", "Not only is the method cheaper, it is also faster."], why: "**Not only + auxiliary/be + subject**: *Not only is the method cheaper, but it is also faster.*" }
        ] }
    ] },
    { h: "Reading: improve a talk script", tag: "Reading", ex: [
      { num: "4", type: "open", prompt: "This is the beginning of a talk. Rewrite it (100–120 words) with a hook, an outline, signposting and a clear transition to the results.",
        passage: "OK, so, hello. My name is Paula. My research is about heat in schools. Next slide. Here there are many numbers. Next slide. Here also. That’s all. Questions?",
        words: [100, 120],
        check: ["A hook: a story, a number or a question.", "The research question.", "An outline of the talk.", "Signposting phrases (*I’ll start with…*, *then…*).", "A clear transition to the results."],
        model: "<p>Last May, a classroom in Fresnillo reached 34 degrees at eleven in the morning, and the teacher stopped the maths lesson. Today I want to ask a simple question: how hot are our classrooms, and does it matter for learning? I’ll start with what we know from previous studies, then I’ll show you a year of temperature data from 24 schools, and I’ll finish with three changes that schools could make now. So, let’s begin with what other researchers have found… This brings me to our own data.</p>" }
    ] },
    { h: "Listen again: Track 10.1", tag: "Listening", ex: [
      { num: "5", type: "open", prompt: "Listen to the first minute of Luis’s talk two or three times. Then speak at the same time as Luis (*shadowing*), copying his pauses and stress. Record yourself and compare your timing with his.",
        track: "10.1", trackLabel: "A conference talk and its questions",
        fields: [{ label: "Luis’s time for the first minute / my time", short: true }, { label: "Words he stresses that I did not stress", short: true }, { label: "What I will change", short: true }] }
    ] },
    { h: "Writing: a slide plan", tag: "Writing", ex: [
      { num: "6", type: "open", prompt: "Write the headlines for your ten-minute talk: 8–10 full-sentence assertions, one per slide. For each, note the visual that will prove it.", note: "Write one slide per line: *Slide number · assertion headline · visual*.",
        fields: [{ label: "Slide plan", ph: "1 · Classrooms in Fresnillo regularly exceed 30 °C before noon · line graph of hourly temperature" }],
        check: ["Each headline is a complete sentence that states a claim.", "Each visual proves its headline.", "I have 8–10 slides for ten minutes.", "My last slide states my takeaway."] }
    ] },
    { h: "My talk", tag: "My talk", ex: [
      { num: "7", type: "open", prompt: "Rehearse your talk aloud three times with a timer and record the times. Then write the five questions you are most likely to receive and a short answer for each. Prepare one backup slide for the most difficult question.",
        fields: [{ label: "Rehearsal 1: time · what I changed", short: true }, { label: "Rehearsal 2: time · what I changed", short: true }, { label: "Rehearsal 3: time · what I changed", short: true }, { label: "Five likely questions and my short answers" }, { label: "Backup slide: the question it answers", short: true }] }
    ] },
    { h: "Extensive reading", tag: "Extensive reading", ex: [ window.RB2.log("8", "This week, watch a recorded conference talk in your field instead of reading an article. Note how the speaker opens, signposts and closes. Then complete the learning diary for Unit 10.") ] }
  ]
},

/* =============================== UNIT 11 =============================== */
{
  n: 11, title: "Building bridges", icon: "team",
  sub: "Future continuous and future perfect · consortium meetings · project proposals",
  img: { file: "Solvay conference 1927.jpg", credit: "Benjamin Couprie, public domain", alt: "Scientists at the 1927 Solvay Conference" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Complete the sentences.",
        box: ["consortium", "deliverable", "eligibility", "feasibility", "milestone", "work package"],
        items: [
          { t: "Check the ___ criteria before you start writing: some calls exclude PhD students.", g: [{ a: ["eligibility"], why: "**Eligibility** criteria say who can apply." }] },
          { t: "Our ___ includes five universities in three countries.", g: [{ a: ["consortium"], why: "A **consortium** is a group of institutions working together on a project." }] },
          { t: "The first ___ is a report on water quality in 40 communities.", g: [{ a: ["deliverable"], why: "A **deliverable** is a concrete product the project must deliver (a report, a dataset, a tool)." }] },
          { t: "Each ___ has a leader, tasks, a budget and deliverables.", g: [{ a: ["work package"], why: "A **work package** (WP) is a part of the project with its own leader and tasks." }] },
          { t: "The installation of all filters by month 12 is a key ___.", g: [{ a: ["milestone"], why: "A **milestone** is a checkpoint: an important event that shows progress by a certain date." }] },
          { t: "Evaluators doubted the ___ of testing 2,000 households in two years.", g: [{ a: ["feasibility"], why: "**Feasibility** = whether something can realistically be done with the time and resources available." }] }
        ] }
    ] },
    { h: "Grammar for writing: future forms", tag: "Grammar", ex: [
      { num: "2", type: "gaps", prompt: "Complete with the future continuous or the future perfect.",
        items: [
          { t: "By the end of year 1, the team ___ (map) all the wells.", g: [{ a: ["will have mapped"], why: "*By* + a future time + a completed action: **future perfect**, *will have mapped*." }] },
          { t: "During the dry season, technicians ___ (visit) households every month.", g: [{ a: ["will be visiting"], why: "An activity in progress over a future period: **future continuous**, *will be visiting*." }] },
          { t: "By month 24, we ___ (complete) the field trials.", g: [{ a: ["will have completed"], why: "*By month 24* + completion: **future perfect**." }] },
          { t: "While the laboratory ___ (test) the media, the social team ___ (organise) community meetings.", g: [
            { a: ["is testing", "will be testing"], why: "After *while*, English uses a present form for the future: **is testing** (*will be testing* is also accepted here)." },
            { a: ["will be organising", "will be organizing"], why: "Two activities in progress at the same future time: **future continuous**." }] },
          { t: "By the time the project ends, we ___ (train) 60 technicians.", g: [{ a: ["will have trained"], why: "*By the time…* + a total completed before then: **future perfect**." }] },
          { t: "In month 30, the partners ___ (write) the final report.", g: [{ a: ["will be writing"], why: "An activity in progress at a future time (*in month 30*): **future continuous**." }] }
        ] }
    ] },
    { h: "Reading: an evaluator's view", tag: "Reading", ex: [
      { num: "3", type: "open", prompt: "Read this project summary. As an evaluator, write four comments (one sentence each) that explain its main problems.",
        passage: "Our project wants to make a study about water in Latin America, which is a very important problem nowadays. We will use the most modern methods and the results will solve the problems of millions of people. The objectives are to study water, to analyse data and to help communities. The project is very innovative and will have a big impact.<br><small><em>(Text written for this workbook.)</em></small>",
        fields: [{ label: "Comment 1", short: true }, { label: "Comment 2", short: true }, { label: "Comment 3", short: true }, { label: "Comment 4", short: true }],
        model: "<p>(1) The problem is not specific: which water problem, where, and for whom?</p><p>(2) The objectives are vague and cannot be checked at the end of the project.</p><p>(3) <em>Will solve the problems of millions of people</em> overpromises; impact should be realistic and concrete.</p><p>(4) There is no information on the methods, the team, the partners or the timeline, so feasibility cannot be judged.</p>" }
    ] },
    { h: "Listen again: Track 11.1", tag: "Listening", ex: [
      { num: "4", type: "open", prompt: "Listen to the consortium call again. Write the minutes (100–120 words): who attended, what was decided about each work package and the budget, and the next steps.",
        track: "11.1", trackLabel: "Consortium video call",
        words: [100, 120],
        check: ["Attendees and chair.", "A decision for each work package.", "The budget decision.", "Next steps with names and dates."],
        model: "<p><em>Minutes of the FILTRA consortium call.</em> Attendees: D. Ortiz (UAZ, chair), L. Ferreira, C. Quispe, R. Moore. Decisions: UAZ will coordinate (WP1) and lead the field trials (WP3); Peru will lead community engagement (WP2); Brazil will lead laboratory testing of filter media (WP4); the US and Peruvian partners will co-lead modelling and cost analysis (WP5), with training for a Peruvian early-career researcher. At least 75% of the budget will be spent in Latin America. Next steps: each leader will send a one-page description of their work package by Friday; Daniela will draft the summary.</p>" }
    ] },
    { h: "Writing: specific objectives", tag: "Writing", ex: [
      { num: "5", type: "open", prompt: "Rewrite each objective so that it is specific and could be checked at the end of a project.",
        fields: [{ label: "1 To study the water.", short: true }, { label: "2 To analyse the data.", short: true }, { label: "3 To help communities.", short: true }, { label: "4 To see if the filters are good.", short: true }],
        model: "<p><strong>1</strong> To measure arsenic concentrations in 120 wells in four municipalities every three months for one year.</p><p><strong>2</strong> To estimate the association between filter use and arsenic exposure using multilevel models.</p><p><strong>3</strong> To train 20 community members to maintain filters and evaluate their performance after six months.</p><p><strong>4</strong> To determine whether filters keep at least 90% of samples below 10 µg/L for 12 months.</p>" }
    ] },
    { h: "My project", tag: "My project", ex: [
      { num: "6", type: "open", prompt: "Plan the next stage of your research as a project. Write at least five milestones with their deliverables.", note: "Write one milestone per line: *Month · milestone · deliverable · responsible*.",
        fields: [{ label: "Milestones and deliverables", ph: "Month 6 · All wells mapped · Map and database of 120 wells · Field team (D. Ortiz)" }],
        check: ["I have at least five milestones.", "Each milestone has a month and a deliverable.", "Each deliverable can be checked (a report, a dataset, a workshop).", "The plan is feasible with my time and resources."] }
    ] },
    { h: "Extensive reading", tag: "Extensive reading", ex: [ window.RB2.log("7", "This week, read the summary of a funded project in your field (many funders publish them online) together with one article. What makes the project convincing? Then complete the learning diary for Unit 11.") ] }
  ]
},

/* =============================== UNIT 12 =============================== */
{
  n: 12, title: "Knowledge for society", icon: "globe",
  sub: "Changing register · plain language · policy briefs",
  img: { file: "Senegal village well.jpg", credit: "TSgt Justin D. Pyle, U.S. Air Force, public domain", alt: "A water well in a rural community" },
  sections: [
    { h: "Vocabulary", ex: [
      { num: "1", type: "gaps", prompt: "Complete the sentences.",
        box: ["accessible", "evidence-based", "jargon", "policymakers", "trade-off", "uptake"],
        items: [
          { t: "___ rarely have time to read full articles.", g: [{ a: ["Policymakers", "Policy makers"], why: "**Policymakers** are the people who make decisions in government or institutions." }] },
          { t: "A policy brief should avoid ___.", g: [{ a: ["jargon"], why: "**Jargon** = specialist words that non-experts do not understand." }] },
          { t: "Every option has a ___ between cost and protection.", g: [{ a: ["trade-off", "tradeoff"], why: "A **trade-off** is a balance between two things you cannot have at the same time." }] },
          { t: "___ of the programme was low in the first year.", g: [{ a: ["Uptake"], why: "**Uptake** = how many people actually use or adopt a programme." }] },
          { t: "The report must be ___ to people who do not read English.", g: [{ a: ["accessible"], why: "**Accessible to** someone = easy for them to obtain and understand." }] },
          { t: "The government promised more ___ decisions on air quality.", g: [{ a: ["evidence-based", "evidence based"], why: "**Evidence-based** decisions rely on research evidence." }] }
        ] }
    ] },
    { h: "Grammar for writing: changing register", tag: "Grammar", ex: [
      { num: "2", type: "open", prompt: "Rewrite in plain English.",
        fields: [{ label: "1 A reduction in emergency presentations was observed following the implementation of alerts.", short: true }, { label: "2 Non-adherence was attributed to low flow rates.", short: true }, { label: "3 The prevalence of elevated concentrations was higher in older dwellings.", short: true }, { label: "4 Stakeholder engagement facilitated the uptake of the intervention.", short: true }],
        check: ["I use verbs instead of nominalisations.", "I use people as subjects where possible.", "I replace technical words with everyday words."],
        model: "<p><strong>1</strong> After schools started receiving alerts, fewer children went to the emergency room.</p><p><strong>2</strong> People stopped using the filters because the water came out too slowly.</p><p><strong>3</strong> Older homes were more likely to have high levels.</p><p><strong>4</strong> Because local people took part from the start, more families used the programme.</p>" },
      { num: "3", type: "open", prompt: "Rewrite in academic register.",
        fields: [{ label: "1 When schools get daily alerts, fewer children play outside on polluted days.", short: true }, { label: "2 Families stopped using the filters because the water came out too slowly.", short: true }, { label: "3 Homes with stone floors had much more radon.", short: true }],
        model: "<p><strong>1</strong> The introduction of daily alerts was associated with a reduction in outdoor play on polluted days.</p><p><strong>2</strong> Discontinuation of filter use was attributed to low flow rates.</p><p><strong>3</strong> Homes with volcanic-stone floors had substantially higher radon concentrations.</p>" }
    ] },
    { h: "Reading: from jargon to plain language", tag: "Reading", ex: [
      { num: "4", type: "open", prompt: "Rewrite this paragraph from a draft brief for municipal officials (60–80 words).",
        passage: "Elevated indoor radon concentrations (GM 142 Bq/m³) were observed in dwellings with volcanic-stone flooring, exceeding the WHO reference level of 100 Bq/m³ in 81% of cases. Mitigation via sub-slab depressurisation or enhanced ventilation is recommended.",
        words: [60, 80],
        check: ["No abbreviations or units that officials may not know.", "Numbers in a form readers understand (*eight out of ten*).", "Clear actions."],
        model: "<p>Homes with floors made of local volcanic stone had much more radon than other homes: in eight out of ten of these homes, levels were above the limit that the World Health Organization recommends. Radon can be reduced by improving ventilation or by sealing the floor and removing the gas from underneath it.</p>" }
    ] },
    { h: "Listen again: Track 12.1", tag: "Listening", ex: [
      { num: "5", type: "open", prompt: "Write a 100-word summary of the radio roundtable for the radio station’s website. Use plain language.",
        track: "12.1", trackLabel: "Radio roundtable",
        words: [90, 110],
        model: "<p>On today’s programme, a UAZ researcher, an official from the state water commission and a community representative discussed how to make household arsenic filters work in rural Zacatecas. The researcher explained that the filters remove most of the arsenic, but the filter material fills up and must be changed about every four months. The official worried about cost and responsibility; the community representative asked for local women to be trained and paid as technicians. All three agreed to support a pilot programme in ten communities.</p>" }
    ] },
    { h: "Writing: key messages", tag: "Writing", ex: [
      { num: "6", type: "open", prompt: "Write the three key messages of your policy brief.", note: "Each message must be one sentence, under 25 words, with one idea and, if possible, one number.",
        fields: [{ label: "Key message 1", short: true }, { label: "Key message 2", short: true }, { label: "Key message 3", short: true }],
        check: ["Each message is one sentence under 25 words.", "Each message has one idea.", "At least two messages include a number.", "There is no jargon."] }
    ] },
    { h: "My policy brief and the end of the course", tag: "My brief", ex: [
      { num: "7", type: "open", prompt: "Write the final version of your policy brief. Then complete your portfolio, your integrated article tracker and the CEFR self-assessment (*End* column) in *My portfolio*, and write three things you can do in English now that you could not do at the start of B2.",
        html: "<p><a class=\"btn ghost\" href=\"#/portfolio\">Open My portfolio</a></p>",
        fields: [{ label: "Policy brief · final version" }, { label: "Three things I can do in English now that I could not do at the start of B2", short: true }],
        check: ["I completed my research portfolio log.", "I completed my integrated article tracker.", "I completed the *End* column of the CEFR self-assessment and compared it with the *Start* column."] }
    ] },
    { h: "Extensive reading", tag: "Extensive reading", ex: [ window.RB2.log("8", "Find a policy brief or a press release about research in your field and compare it with the original article. Then complete the learning diary for Unit 12 and revise Units 7–12 for the final test.") ] }
  ]
}
);
