import { useState } from "react";

/* ============================================================
   QUIZ DATA — SET 1 (Questions 1–80)
   ------------------------------------------------------------
   To add more questions to THIS set, copy one of the objects
   below and paste it into the QUESTIONS_SET_1 array. Keep the
   same shape:

   {
     term: "The word/term as it appeared in the book",
     choices: { A: "...", B: "...", C: "...", D: "..." },
     correct: "A", // the letter that is correct
     explanations: { A: "...", B: "...", C: "...", D: "..." },
   }
   ============================================================ */

const QUESTIONS_SET_1 = [
  {
    term: "Judy becomes lightheaded whenever she encounters blood or injury. Eventually, she begins fainting 5 to 10 times a week, including in class, and this disrupts her schooling. Which condition described in the chapter best fits Judy's situation?",
    choices: {
      A: "Phobia",
      B: "Prevalence",
      C: "Psychopathology",
      D: "Neurosis",
    },
    correct: "A",
    explanations: {
      A: "Correct — a phobia is a marked, persistent, excessive fear of a specific object or situation that disrupts daily functioning, exactly like Judy's fainting spells.",
      B: "Prevalence means the percentage of a population that has a disorder at a given time — it's a statistic, not a condition someone 'has'.",
      C: "Psychopathology is the broad scientific study of abnormal behavior in general, not a specific condition Judy could be diagnosed with.",
      D: "Neurosis is an older, now largely outdated term for anxiety-related distress — it isn't the specific term the chapter uses for this scenario.",
    },
  },
  {
    term: "Judy avoids magazines with graphic pictures, raw meat, and even Band-Aids because they remind her of blood. Which feature of a phobia is most clearly shown?",
    choices: {
      A: "Marked and persistent fear of an object or situation",
      B: "Increased risk of death",
      C: "Normal social interaction",
      D: "Positive reinforcement",
    },
    correct: "A",
    explanations: {
      A: "Correct — her avoidance of anything blood-related shows the defining feature of a phobia: an intense, ongoing fear that shapes her behavior.",
      B: "Increased risk of death isn't a feature of a phobia itself — it's not what her avoidance behavior demonstrates.",
      C: "Normal social interaction is the opposite of what's happening — her fear is disrupting her life, not leaving it unaffected.",
      D: "Positive reinforcement is a learning concept (behavior increasing because of a reward) — unrelated to what's being shown here.",
    },
  },
  {
    term: "A person feels severe fear on every date even though there is nothing dangerous about the person they are meeting. Which concept from the chapter describes the problem with the person's functioning?",
    choices: {
      A: "Dysfunction",
      B: "Prevalence",
      C: "Prognosis",
      D: "Incidence",
    },
    correct: "A",
    explanations: {
      A: "Correct — dysfunction refers to a breakdown in normal cognitive, emotional, or behavioral functioning, which is exactly what's happening when fear appears without real danger.",
      B: "Prevalence is a statistic about how common a disorder is in a population, not a description of one person's impaired functioning.",
      C: "Prognosis refers to the predicted future course of a disorder — it's about outlook, not the current problem.",
      D: "Incidence refers to the rate of new cases of a disorder appearing over time — a population-level measure, not a personal experience.",
    },
  },
  {
    term: "A person feels afraid of going on a date because everyone agrees that the person who asked them out is unpredictable and dangerous. According to the chapter, why would this reaction not necessarily represent dysfunction?",
    choices: {
      A: "The fear is culturally expected",
      B: "The fear has a realistic basis",
      C: "The fear is caused by the id",
      D: "The fear has been extinguished",
    },
    correct: "B",
    explanations: {
      A: "This isn't about cultural expectations — it's about whether the danger is actually real, which is a separate idea.",
      B: "Correct — when a fear is a reasonable response to a genuinely dangerous situation, it isn't considered dysfunctional; it reflects reality rather than a disorder.",
      C: "The id is a Freudian concept about unconscious drives — it has nothing to do with whether a fear is realistic.",
      D: "'Extinguished' is a conditioning term meaning a learned response has faded away — it doesn't apply to a currently-felt, justified fear.",
    },
  },
  {
    term: "A person becomes so shy that they cannot interact with others even though they want friends. Which criterion is most clearly illustrated?",
    choices: {
      A: "Impairment in functioning",
      B: "Prevalence",
      C: "Incidence",
      D: "Etiology",
    },
    correct: "A",
    explanations: {
      A: "Correct — being unable to interact with others despite wanting to shows a real impairment in social functioning, one of the key markers of abnormal behavior.",
      B: "Prevalence describes how widespread a disorder is across a population, not one person's personal struggle.",
      C: "Incidence measures new cases appearing over a period of time — it's a population statistic, not a personal symptom.",
      D: "Etiology refers to the cause or origin of a disorder — this scenario shows the effect (impairment), not its cause.",
    },
  },
  {
    term: "Someone becomes extremely upset after a close family member dies but continues functioning normally. Which point from the chapter does this situation illustrate?",
    choices: {
      A: "Distress alone does not define abnormal behavior",
      B: "Distress always indicates a psychological disorder",
      C: "Impairment is never important",
      D: "Atypical behavior automatically indicates a disorder",
    },
    correct: "A",
    explanations: {
      A: "Correct — since the person is still functioning normally despite real emotional pain, this shows that distress by itself doesn't equal a disorder.",
      B: "This is the opposite of the point being made — the chapter argues distress alone is NOT enough to indicate a disorder.",
      C: "Impairment does matter in the broader definition of abnormality — this option overstates and misrepresents the point.",
      D: "This scenario isn't even about atypical behavior — grief after a death is common, not unusual, and the person still isn't impaired.",
    },
  },
  {
    term: "A person acts in an unusual way that is far from what most people normally do, but the behavior is productive and the person enjoys their career. Which example from the chapter shows why unusual behavior alone is not enough?",
    choices: {
      A: "Judy fainting at blood",
      B: "Lady Gaga performing with blood spurt from her clothes",
      C: "Anna O. experiencing blurred vision",
      D: "Peter fearing rabbits",
    },
    correct: "B",
    explanations: {
      A: "Judy's fainting illustrates a genuine phobia causing impairment — not an example of harmless unusual behavior.",
      B: "Correct — Lady Gaga's shocking, unusual performance choices are productive and enjoyed by her, showing that being statistically 'unusual' doesn't by itself mean something is a disorder.",
      C: "Anna O. is a classic historical case of psychological symptoms (like blurred vision) linked to unresolved distress, not an example of harmless unusual behavior.",
      D: "Peter fearing rabbits is a classic conditioning example about how fears can be learned, not about unusual-but-fine behavior.",
    },
  },
  {
    term: "J. D. Salinger lives in a small town, refuses to see outsiders for years, and continues writing successfully. Which idea does this example illustrate?",
    choices: {
      A: "Deviation from the average does not automatically mean disorder",
      B: "Every unusual behavior is dysfunctional",
      C: "Psychological dysfunction is always unconscious",
      D: "Atypical behavior always requires treatment",
    },
    correct: "A",
    explanations: {
      A: "Correct — Salinger's reclusive, statistically rare lifestyle didn't stop him from functioning and succeeding, showing that being different from average isn't the same as having a disorder.",
      B: "This is the opposite conclusion — his example specifically shows that unusual behavior is NOT automatically dysfunctional.",
      C: "This option brings in an unrelated Freudian idea about the unconscious that the example doesn't actually address.",
      D: "Since he continued to function and succeed, this example argues against the idea that all atypical behavior needs treatment.",
    },
  },
  {
    term: "A person enters a trance and believes they are possessed. In one culture this is considered a psychological disorder, while in another society it is accepted and expected. Which criterion is especially important in this situation?",
    choices: {
      A: "Cultural context",
      B: "Incidence",
      C: "Prognosis",
      D: "Extinction",
    },
    correct: "A",
    explanations: {
      A: "Correct — the same behavior is judged differently depending on the society's norms, which shows why cultural context matters when defining abnormality.",
      B: "Incidence refers to the rate of new cases in a population — it doesn't explain why the same behavior is judged differently across cultures.",
      C: "Prognosis is about the predicted outcome of a condition, which isn't the focus of this comparison.",
      D: "Extinction is a conditioning term about a learned response fading — unrelated to cultural interpretation of behavior.",
    },
  },
  {
    term: "Rhoda considers a woman crazy because she killed a goat and heard voices at the wrong time. The Masai sometimes hear voices during ceremonies, but the woman's behavior occurred outside that accepted setting. Which idea from the chapter is illustrated?",
    choices: {
      A: "Cultural differences in psychological disorders",
      B: "Classical conditioning",
      C: "Humoral theory",
      D: "Person-centered therapy",
    },
    correct: "A",
    explanations: {
      A: "Correct — the same behavior (hearing voices) is normal in one context (ceremony) but seen as disordered in another, showing how culture and context shape what counts as abnormal.",
      B: "Classical conditioning is about learning through association (like Pavlov's dogs) — it has nothing to do with cultural judgments of behavior.",
      C: "Humoral theory is an ancient medical theory about bodily fluids causing illness — unrelated to this scenario.",
      D: "Person-centered therapy is a Rogerian counseling approach — it's a treatment method, not a concept about cultural judgment.",
    },
  },
  {
    term: "Political dissidents are placed in mental institutions simply because they protest government policies. Their behavior violates social norms, but there is no other basis for commitment. What does the chapter use this example to show?",
    choices: {
      A: "Violating social norms alone should not determine abnormality",
      B: "Social norms always determine abnormality",
      C: "Distress is unnecessary in every case",
      D: "All political behavior is psychological dysfunction",
    },
    correct: "A",
    explanations: {
      A: "Correct — the chapter uses this example to warn that judging behavior as abnormal purely because it breaks social norms can be misused, as with dissidents who show no real dysfunction.",
      B: "This is the opposite point — the example specifically shows why norm-violation alone is NOT a reliable basis for calling something a disorder.",
      C: "Distress is still a relevant part of the fuller definition of disorder — this example doesn't argue it's irrelevant.",
      D: "Political behavior itself isn't dysfunction; the example shows the danger of labeling it that way.",
    },
  },
  {
    term: "A clinician evaluates a person's behavior by considering dysfunction, distress or impairment, and whether the response is atypical or culturally unexpected. What concept is the clinician trying to determine?",
    choices: {
      A: "Psychological disorder",
      B: "Shaping",
      C: "Collective unconscious",
      D: "Bloodletting",
    },
    correct: "A",
    explanations: {
      A: "Correct — weighing dysfunction, distress/impairment, and atypicality together is exactly how the chapter defines a psychological disorder.",
      B: "Shaping is a behaviorist learning technique of reinforcing successive approximations — unrelated to diagnostic criteria.",
      C: "Collective unconscious is a Jungian concept about shared inherited memories — not part of this diagnostic framework.",
      D: "Bloodletting is a historical medical treatment, not a diagnostic concept.",
    },
  },
  {
    term: "A person's behavior includes psychological dysfunction, present distress, and impairment in functioning, while also being unexpected in the person's cultural context. Which description from the chapter best fits this situation?",
    choices: {
      A: "Psychological disorder",
      B: "Humanistic psychology",
      C: "Behaviorism",
      D: "Moral therapy",
    },
    correct: "A",
    explanations: {
      A: "Correct — having all these features together (dysfunction, distress/impairment, and cultural unexpectedness) is the chapter's definition of a psychological disorder.",
      B: "Humanistic psychology is a broad theoretical perspective on human growth and potential, not a description of a set of symptoms.",
      C: "Behaviorism is a school of thought about learning through conditioning, unrelated to this diagnostic description.",
      D: "Moral therapy is a historical humane treatment approach, not a definition of disorder.",
    },
  },
  {
    term: "A patient has only some of the features of a disorder, but enough of the symptoms are similar to the typical profile to meet the criteria. Which concept applies?",
    choices: {
      A: "Prototype",
      B: "Incidence",
      C: "Course",
      D: "Catharsis",
    },
    correct: "A",
    explanations: {
      A: "Correct — a prototype is a typical profile of a disorder, and patients can be diagnosed by being similar enough to it even without matching every single feature.",
      B: "Incidence measures new cases in a population — unrelated to how individual symptom profiles are matched to a diagnosis.",
      C: "Course describes how a disorder develops and changes over time, not how a diagnosis is matched.",
      D: "Catharsis is a psychoanalytic concept about releasing pent-up emotion, unrelated to diagnostic matching.",
    },
  },
  {
    term: "A clinician rates the intensity and frequency of anxiety on a scale from 0 to 4, with 1 representing mild or occasional symptoms and 4 representing continual and severe symptoms. Which DSM-5 development is illustrated?",
    choices: {
      A: "Dimensional estimates of severity",
      B: "Moral therapy",
      C: "Free association",
      D: "Humoral theory",
    },
    correct: "A",
    explanations: {
      A: "Correct — rating symptoms on a numeric severity scale rather than a simple yes/no is exactly what dimensional estimates of severity in DSM-5 involve.",
      B: "Moral therapy is a historical humane treatment approach, unrelated to a modern rating scale.",
      C: "Free association is a psychoanalytic technique for uncovering unconscious thoughts, not a diagnostic rating system.",
      D: "Humoral theory is an ancient explanation involving bodily fluids, unrelated to DSM-5 rating scales.",
    },
  },
  {
    term: "A researcher conducts a scientific investigation into psychological disorders. What field is the researcher working in?",
    choices: {
      A: "Psychopathology",
      B: "Moral therapy",
      C: "Behaviorism",
      D: "Psychoanalysis",
    },
    correct: "A",
    explanations: {
      A: "Correct — psychopathology is the scientific study of psychological disorders, exactly what this researcher is doing.",
      B: "Moral therapy is a historical treatment approach, not a field of scientific study.",
      C: "Behaviorism is one specific theoretical school within psychology, narrower than the general field of psychopathology.",
      D: "Psychoanalysis is one specific theoretical/treatment approach, not the overall scientific field being described.",
    },
  },
  {
    term: "A clinical psychologist conducts research into the causes and treatment of psychological disorders and also diagnoses and treats patients. Which professional role described in the chapter fits this work?",
    choices: {
      A: "Clinical psychologist",
      B: "Experimental psychologist",
      C: "Social psychologist",
      D: "Psychiatric nurse",
    },
    correct: "A",
    explanations: {
      A: "Correct — a clinical psychologist is trained to both research and directly diagnose/treat psychological disorders, matching this description exactly.",
      B: "Experimental psychologists typically focus on research in controlled settings rather than diagnosing and treating patients.",
      C: "Social psychologists study how people are influenced by others in social contexts, not primarily clinical diagnosis and treatment.",
      D: "Psychiatric nurses provide nursing care to psychiatric patients but don't typically lead research or independent diagnosis in this way.",
    },
  },
  {
    term: "A psychologist primarily studies adjustment and vocational issues among relatively healthy individuals. Which profession does this best describe?",
    choices: {
      A: "Counseling psychologist",
      B: "Psychiatrist",
      C: "Psychiatric nurse",
      D: "Psychiatric social worker",
    },
    correct: "A",
    explanations: {
      A: "Correct — counseling psychologists typically focus on adjustment and vocational (career/life) issues in generally healthy people, unlike clinical psychologists who focus more on severe disorders.",
      B: "Psychiatrists are physicians who diagnose and treat mental disorders, often with medication, not primarily vocational adjustment in healthy people.",
      C: "Psychiatric nurses provide nursing care within psychiatric treatment settings, not primarily vocational counseling.",
      D: "Psychiatric social workers focus on the social and environmental context of a patient's life and connecting them to resources, not primarily vocational adjustment counseling.",
    },
  },
  {
    term: "A physician earns an M.D., specializes in psychiatry during residency, diagnoses psychological disorders, and often emphasizes drugs or other biological treatments. Which professional is this?",
    choices: {
      A: "Psychiatrist",
      B: "Counseling psychologist",
      C: "Mental health counselor",
      D: "Experimental psychologist",
    },
    correct: "A",
    explanations: {
      A: "Correct — a psychiatrist is a medical doctor (M.D.) who completes psychiatric residency and often emphasizes biological/medication-based treatment, matching this description exactly.",
      B: "A counseling psychologist holds a doctoral degree in psychology, not an M.D., and doesn't typically prescribe medication.",
      C: "A mental health counselor typically holds a master's degree and provides talk therapy, not medical/biological treatment as an M.D.",
      D: "An experimental psychologist conducts research rather than obtaining an M.D. or emphasizing drug treatments for patients.",
    },
  },
  {
    term: "A mental health professional keeps up with current scientific developments and uses the newest diagnostic and treatment procedures. Which role of the scientist-practitioner is illustrated?",
    choices: {
      A: "Consumer of science",
      B: "Evaluator of science",
      C: "Creator of science",
      D: "Psychoanalyst",
    },
    correct: "A",
    explanations: {
      A: "Correct — staying up to date and applying the newest research findings in practice is the 'consumer of science' role of the scientist-practitioner.",
      B: "Evaluator of science involves testing whether one's own treatments actually work, not simply staying informed.",
      C: "Creator of science involves generating new research findings, not just applying existing ones.",
      D: "Psychoanalyst is a specific treatment orientation, not one of the three scientist-practitioner roles.",
    },
  },
  {
    term: "A clinician tests whether the treatment being used in the clinic is actually working and evaluates the results. Which role is being demonstrated?",
    choices: {
      A: "Consumer of science",
      B: "Evaluator of science",
      C: "Creator of science",
      D: "Psychoanalyst",
    },
    correct: "B",
    explanations: {
      A: "Consumer of science means applying existing research findings, not testing whether one's own treatment works.",
      B: "Correct — testing and evaluating whether a treatment is actually effective is the 'evaluator of science' role of the scientist-practitioner.",
      C: "Creator of science involves generating new general knowledge, which is broader than evaluating one clinic's own treatment outcomes.",
      D: "Psychoanalyst is a specific treatment orientation, not one of the three scientist-practitioner roles.",
    },
  },
  {
    term: "A clinician conducts research in a hospital that produces new information about psychological disorders and their treatment. Which role is being demonstrated?",
    choices: {
      A: "Consumer of science",
      B: "Evaluator of science",
      C: "Creator of science",
      D: "Moral therapist",
    },
    correct: "C",
    explanations: {
      A: "Consumer of science means applying existing knowledge, not generating brand-new research findings.",
      B: "Evaluator of science means testing whether an existing treatment works, not producing new general knowledge.",
      C: "Correct — producing new information about disorders and treatment through research is the 'creator of science' role of the scientist-practitioner.",
      D: "Moral therapist is a historical treatment role, not one of the three scientist-practitioner roles.",
    },
  },
  {
    term: "Researchers collect evidence to determine what a disorder looks like, why it develops, and how it can be treated. Which three research categories from the chapter are represented?",
    choices: {
      A: "Description, causation, treatment and outcomes",
      B: "Id, ego, superego",
      C: "Oral, anal, phallic",
      D: "Blood, bile, phlegm",
    },
    correct: "A",
    explanations: {
      A: "Correct — description (what it looks like), causation (why it develops), and treatment/outcomes (how it's treated) are the three core research categories in the chapter.",
      B: "Id, ego, and superego are Freud's structural model of personality, unrelated to research categories.",
      C: "Oral, anal, and phallic are Freud's psychosexual stages, unrelated to research categories.",
      D: "Blood, bile, and phlegm relate to ancient humoral theory, not modern research categories.",
    },
  },
  {
    term: "Judy arrives at a clinic because she has been fainting repeatedly. The clinician first records the specific problem that caused her to seek help. Which term applies?",
    choices: {
      A: "Presenting problem",
      B: "Prognosis",
      C: "Prevalence",
      D: "Etiology",
    },
    correct: "A",
    explanations: {
      A: "Correct — the presenting problem is the specific issue that brings a person to seek treatment, exactly what Judy's fainting represents here.",
      B: "Prognosis is the predicted future course of the disorder, not the initial reason for seeking help.",
      C: "Prevalence is a population-level statistic about how common a disorder is, not one person's reason for seeking treatment.",
      D: "Etiology refers to the cause of a disorder, not the immediate problem that brought the person to the clinic.",
    },
  },
  {
    term: "A clinician records Judy's unique combination of behaviors, thoughts, and feelings. Which part of the clinical description is being developed?",
    choices: {
      A: "Clinical description",
      B: "Incidence",
      C: "Etiology",
      D: "Prognosis",
    },
    correct: "A",
    explanations: {
      A: "Correct — capturing a person's unique combination of behaviors, thoughts, and feelings is exactly what a clinical description involves.",
      B: "Incidence is a population statistic about new cases, not an individual's unique symptom profile.",
      C: "Etiology refers to the cause of a disorder, not the description of its symptoms.",
      D: "Prognosis refers to the predicted outcome, not the description of current symptoms.",
    },
  },
  {
    term: "A researcher asks, \"How many people in the population as a whole have this disorder?\" Which statistic is being investigated?",
    choices: {
      A: "Incidence",
      B: "Prevalence",
      C: "Course",
      D: "Prognosis",
    },
    correct: "B",
    explanations: {
      A: "Incidence measures new cases appearing over a specific period, not the total number who currently have the disorder.",
      B: "Correct — prevalence is the statistic describing how many people in a population as a whole currently have a disorder.",
      C: "Course describes the pattern a disorder follows over time in an individual, not a population-level count.",
      D: "Prognosis is the predicted future outcome for a disorder, not a population count.",
    },
  },
  {
    term: "Researchers count how many new cases of bulimia occurred in a county during one month. Which statistic are they measuring?",
    choices: {
      A: "Prevalence",
      B: "Course",
      C: "Incidence",
      D: "Prognosis",
    },
    correct: "C",
    explanations: {
      A: "Prevalence measures the total number of existing cases at a given time, not newly occurring ones.",
      B: "Course describes how a disorder develops over time in an individual, not a count of new cases in a population.",
      C: "Correct — incidence is the rate of new cases of a disorder appearing within a population over a given time period, exactly what's being counted here.",
      D: "Prognosis is the predicted outcome of a disorder, not a count of new cases.",
    },
  },
  {
    term: "A disorder repeatedly disappears and then returns later in the person's life. Which type of course is illustrated?",
    choices: {
      A: "Chronic",
      B: "Episodic",
      C: "Time-limited",
      D: "Acute",
    },
    correct: "B",
    explanations: {
      A: "Chronic means the disorder lasts a very long time continuously, not one that disappears and returns.",
      B: "Correct — an episodic course means the disorder tends to recur, disappearing and then returning over time, exactly as described.",
      C: "Time-limited means the disorder resolves relatively quickly without persisting or recurring.",
      D: "Acute describes a sudden onset, not a repeating pattern over time.",
    },
  },
  {
    term: "A disorder lasts for a very long time, sometimes for the person's entire lifetime. Which course is illustrated?",
    choices: {
      A: "Chronic",
      B: "Episodic",
      C: "Time-limited",
      D: "Acute",
    },
    correct: "A",
    explanations: {
      A: "Correct — a chronic course means the disorder persists for a very long time, potentially the person's whole life, as described here.",
      B: "Episodic means the disorder comes and goes in distinct episodes, not one continuous long-lasting course.",
      C: "Time-limited means the disorder resolves relatively quickly, the opposite of lasting a lifetime.",
      D: "Acute refers to sudden onset, not the overall long duration of the disorder.",
    },
  },
  {
    term: "A disorder improves without treatment within a relatively short period. Which course is illustrated?",
    choices: {
      A: "Chronic",
      B: "Episodic",
      C: "Time-limited",
      D: "Insidious",
    },
    correct: "C",
    explanations: {
      A: "Chronic means the disorder persists for a very long time, the opposite of quickly improving.",
      B: "Episodic means the disorder recurs in cycles, not simply resolving quickly once.",
      C: "Correct — a time-limited course means the disorder improves on its own within a relatively short period, exactly as described.",
      D: "Insidious describes how a disorder begins (gradually), not how quickly it resolves.",
    },
  },
  {
    term: "A disorder begins suddenly rather than developing over a long period. Which term describes its onset?",
    choices: {
      A: "Acute onset",
      B: "Insidious onset",
      C: "Chronic course",
      D: "Episodic course",
    },
    correct: "A",
    explanations: {
      A: "Correct — acute onset means the disorder begins suddenly, exactly as described here.",
      B: "Insidious onset means the disorder develops gradually over time, the opposite of sudden.",
      C: "Chronic course describes duration (long-lasting), not the speed of onset.",
      D: "Episodic course describes a recurring pattern, not the speed of onset.",
    },
  },
  {
    term: "A disorder gradually develops over an extended period. Which term describes this onset?",
    choices: {
      A: "Acute onset",
      B: "Insidious onset",
      C: "Episodic course",
      D: "Time-limited course",
    },
    correct: "B",
    explanations: {
      A: "Acute onset means the disorder begins suddenly, the opposite of gradual development.",
      B: "Correct — insidious onset means the disorder develops gradually over an extended period, exactly as described.",
      C: "Episodic course describes a recurring pattern over time, not the speed of onset.",
      D: "Time-limited course describes how quickly a disorder resolves, not how it begins.",
    },
  },
  {
    term: "A clinician tells a patient, \"Based on what we know about this disorder, you will probably recover.\" What is the clinician describing?",
    choices: {
      A: "Etiology",
      B: "Prognosis",
      C: "Incidence",
      D: "Presenting problem",
    },
    correct: "B",
    explanations: {
      A: "Etiology refers to the cause of a disorder, not a prediction about future outcome.",
      B: "Correct — prognosis is the predicted future course or outcome of a disorder, exactly what the clinician is describing.",
      C: "Incidence is a population statistic about new cases, not a prediction for one patient.",
      D: "Presenting problem is the initial reason the patient sought help, not a prediction of the future.",
    },
  },
  {
    term: "A researcher investigates why a disorder begins and examines biological, psychological, and social dimensions. Which concept is being studied?",
    choices: {
      A: "Etiology",
      B: "Prevalence",
      C: "Course",
      D: "Clinical description",
    },
    correct: "A",
    explanations: {
      A: "Correct — etiology is the study of the causes of a disorder, including biological, psychological, and social dimensions, as described here.",
      B: "Prevalence is a population statistic about how common a disorder is, not its causes.",
      C: "Course describes how a disorder unfolds over time, not why it began.",
      D: "Clinical description covers the symptoms and presentation of a disorder, not its causes.",
    },
  },
  {
    term: "A drug successfully reduces a psychological disorder, suggesting that something in a particular part of the nervous system may be involved in the disorder. What caution from the chapter should the researcher remember?",
    choices: {
      A: "The effect does not necessarily imply the cause",
      B: "All treatments reveal the exact cause",
      C: "Psychological treatments cannot provide clues",
      D: "Biological treatments prove every disorder is biological",
    },
    correct: "A",
    explanations: {
      A: "Correct — the chapter cautions that just because a treatment works, that doesn't prove what originally caused the disorder; effect doesn't necessarily reveal cause.",
      B: "This overstates the point — the chapter specifically warns against assuming a treatment reveals the exact cause.",
      C: "Psychological treatments can also provide etiological clues, just as biological ones can — this option misstates the chapter's point.",
      D: "This is exactly the overreaching conclusion the chapter warns researchers against making.",
    },
  },
  {
    term: "A researcher studies changes in abnormal behavior from childhood through old age. Which field is most directly represented?",
    choices: {
      A: "Developmental psychopathology",
      B: "Behaviorism",
      C: "Psychoanalysis",
      D: "Humoral theory",
    },
    correct: "A",
    explanations: {
      A: "Correct — developmental psychopathology studies how abnormal behavior changes across a person's development, exactly as described.",
      B: "Behaviorism is a theoretical school about learning through conditioning, not specifically about developmental change.",
      C: "Psychoanalysis is a theoretical/treatment approach focused on unconscious processes, not specifically developmental study.",
      D: "Humoral theory is an ancient explanation involving bodily fluids, unrelated to developmental study.",
    },
  },
  {
    term: "A researcher studies abnormal behavior across infancy, adolescence, adulthood, and old age. Which term applies?",
    choices: {
      A: "Life-span developmental psychopathology",
      B: "Classical conditioning",
      C: "Mental hygiene movement",
      D: "Psychoanalysis",
    },
    correct: "A",
    explanations: {
      A: "Correct — studying abnormal behavior across the entire life span, from infancy to old age, is exactly what life-span developmental psychopathology covers.",
      B: "Classical conditioning is a learning process (like Pavlov's dogs), unrelated to studying behavior across the life span.",
      C: "The mental hygiene movement was a historical reform movement focused on humane care, not a life-span research field.",
      D: "Psychoanalysis is a theoretical/treatment approach, not specifically a life-span research field.",
    },
  },
  {
    term: "A community explains unusual behavior by saying demons, spirits, the moon, or stars are influencing the person. Which historical tradition is represented?",
    choices: {
      A: "Biological tradition",
      B: "Psychological tradition",
      C: "Supernatural tradition",
      D: "Behavioral model",
    },
    correct: "C",
    explanations: {
      A: "The biological tradition explains disorders through physical/bodily causes, not demons or spirits.",
      B: "The psychological tradition explains disorders through psychological development and social context, not supernatural forces.",
      C: "Correct — attributing behavior to demons, spirits, the moon, or stars is the essence of the supernatural tradition.",
      D: "The behavioral model explains behavior through learning and conditioning, unrelated to supernatural explanations.",
    },
  },
  {
    term: "A physician explains psychological disorders in terms of disease, brain pathology, or physical causes. Which tradition is represented?",
    choices: {
      A: "Supernatural tradition",
      B: "Biological tradition",
      C: "Psychological tradition",
      D: "Humanistic theory",
    },
    correct: "B",
    explanations: {
      A: "The supernatural tradition attributes disorders to demons, spirits, or celestial influence, not physical disease.",
      B: "Correct — explaining disorders through disease, brain pathology, or physical causes is exactly the biological tradition.",
      C: "The psychological tradition explains disorders through psychological development and social context, not physical disease.",
      D: "Humanistic theory focuses on personal growth and self-actualization, not physical/biological causes.",
    },
  },
  {
    term: "A theorist explains abnormal behavior through faulty psychological development and social context. Which tradition is represented?",
    choices: {
      A: "Supernatural tradition",
      B: "Biological tradition",
      C: "Psychological tradition",
      D: "Humoral theory",
    },
    correct: "C",
    explanations: {
      A: "The supernatural tradition attributes behavior to demons or celestial forces, not psychological development.",
      B: "The biological tradition explains disorders through physical/bodily causes, not psychological development.",
      C: "Correct — explaining abnormal behavior through faulty psychological development and social context is exactly the psychological tradition.",
      D: "Humoral theory is a specific ancient biological explanation involving bodily fluids, not the general psychological tradition.",
    },
  },
  {
    term: "During the Great Persian Empire from 900 to 600 b.c., physical and mental disorders were attributed to the work of the devil. Which tradition does this historical explanation represent?",
    choices: {
      A: "Biological tradition",
      B: "Supernatural tradition",
      C: "Behavioral model",
      D: "Humanistic theory",
    },
    correct: "B",
    explanations: {
      A: "The biological tradition explains disorders through physical causes, not the devil.",
      B: "Correct — attributing disorders to the work of the devil is a classic example of the supernatural tradition.",
      C: "The behavioral model explains behavior through learning and conditioning, unrelated to devils or spirits.",
      D: "Humanistic theory focuses on personal growth, unrelated to supernatural explanations of illness.",
    },
  },
  {
    term: "During the Middle Ages, a person with bizarre behavior is believed to be possessed by evil spirits, and religious rituals are performed to remove the spirits. Which treatment is being used?",
    choices: {
      A: "Bloodletting",
      B: "Exorcism",
      C: "Systematic desensitization",
      D: "Free association",
    },
    correct: "B",
    explanations: {
      A: "Bloodletting is a biological-tradition treatment involving removing blood, not a religious ritual for spirits.",
      B: "Correct — exorcism is the religious ritual historically used to try to remove evil spirits believed to be possessing a person.",
      C: "Systematic desensitization is a modern behavioral technique for treating phobias, unrelated to spirit possession.",
      D: "Free association is a psychoanalytic technique for uncovering unconscious thoughts, unrelated to exorcising spirits.",
    },
  },
  {
    term: "Authorities during the Middle Ages believe bizarre behavior is caused by the devil and witches. Which historical event later showed that this belief continued in the United States?",
    choices: {
      A: "Salem, Massachusetts, witch trials",
      B: "Little Albert experiment",
      C: "Anna O. case",
      D: "Hippocratic Corpus",
    },
    correct: "A",
    explanations: {
      A: "Correct — the Salem, Massachusetts, witch trials showed that beliefs about the devil and witchcraft causing bizarre behavior persisted into early American history.",
      B: "The Little Albert experiment is a classical conditioning study about learned fear, unrelated to witchcraft beliefs.",
      C: "The Anna O. case is a foundational psychoanalytic case study, unrelated to witch trials.",
      D: "The Hippocratic Corpus is an ancient Greek medical text representing the biological tradition, not witch trials.",
    },
  },
  {
    term: "During a period when people believed psychological disorders were caused by evil spirits, a sufferer is subjected to religious rituals intended to remove those spirits. Which approach is illustrated?",
    choices: {
      A: "Exorcism",
      B: "Hydrotherapy",
      C: "Moral therapy",
      D: "Dream analysis",
    },
    correct: "A",
    explanations: {
      A: "Correct — using religious rituals to remove spirits believed to be causing disorder is exorcism.",
      B: "Hydrotherapy uses water treatments (like dunking or baths), not religious rituals for spirits.",
      C: "Moral therapy is a humane, respect-based treatment approach from the psychological tradition, not a religious ritual.",
      D: "Dream analysis is a psychoanalytic technique for interpreting dreams, unrelated to spirit removal.",
    },
  },
  {
    term: "A historical healer believes a person's insanity is caused by mental or emotional stress rather than demons and recommends rest, sleep, and a healthy environment. Which historical view is represented?",
    choices: {
      A: "Stress and melancholy",
      B: "Humoral theory",
      C: "Behaviorism",
      D: "Psychoanalysis",
    },
    correct: "A",
    explanations: {
      A: "Correct — attributing insanity to mental/emotional stress rather than demons, and recommending rest and a healthy environment, reflects the historical 'stress and melancholy' view.",
      B: "Humoral theory attributes disorders to imbalances in bodily fluids, not emotional stress specifically.",
      C: "Behaviorism is a modern theoretical school about conditioning and learning, not this historical view.",
      D: "Psychoanalysis is Freud's later theory about unconscious conflict, not this earlier historical view.",
    },
  },
  {
    term: "Nicholas Oresme argues that melancholy, or depression, rather than demons can explain some bizarre behavior. What historical explanation is he supporting?",
    choices: {
      A: "Natural phenomenon involving mental or emotional stress",
      B: "Animal magnetism",
      C: "Classical conditioning",
      D: "Collective unconscious",
    },
    correct: "A",
    explanations: {
      A: "Correct — Oresme's argument that melancholy explains bizarre behavior supports viewing it as a natural phenomenon involving mental or emotional stress, rather than the supernatural.",
      B: "Animal magnetism is Mesmer's later theory about an invisible physical fluid affecting the body, unrelated to Oresme's melancholy argument.",
      C: "Classical conditioning is a modern behaviorist learning concept, unrelated to this historical argument.",
      D: "Collective unconscious is a Jungian concept about shared inherited memories, unrelated to Oresme's argument.",
    },
  },
  {
    term: "King Charles VI suddenly believes he is under attack after hearing a loud clatter and turns on his own army. Which historical case from the chapter is being described?",
    choices: {
      A: "Anna O.",
      B: "King Charles VI",
      C: "Little Albert",
      D: "Peter",
    },
    correct: "B",
    explanations: {
      A: "Anna O. is a different historical case involving psychological symptoms tied to unresolved distress, not this royal case.",
      B: "Correct — this describes the historical case of King Charles VI, whose sudden paranoid attack on his own army is documented in the chapter.",
      C: "Little Albert is a conditioning experiment about a learned fear response, not this royal case.",
      D: "Peter is a different case involving a learned fear of rabbits, not this royal case.",
    },
  },
  {
    term: "King Charles VI later hides in a corner believing he is made of glass and sometimes roams the corridors howling like a wolf. Which case does this behavior belong to?",
    choices: {
      A: "King Charles VI",
      B: "Judy",
      C: "Albert",
      D: "Peter",
    },
    correct: "A",
    explanations: {
      A: "Correct — this bizarre behavior (believing he's made of glass, howling like a wolf) continues the historical case of King Charles VI.",
      B: "Judy is the modern case of blood-injury phobia and fainting, unrelated to this royal case.",
      C: "Albert (Little Albert) is a conditioning experiment about a learned fear response, unrelated to this royal case.",
      D: "Peter is a different case involving a learned fear of rabbits, unrelated to this royal case.",
    },
  },
  {
    term: "A healer treats a person believed to be possessed by placing them over a pit of poisonous snakes in an attempt to scare the evil spirits out. Which historical treatment is illustrated?",
    choices: {
      A: "Snake pits",
      B: "Free association",
      C: "Bloodletting",
      D: "Person-centered therapy",
    },
    correct: "A",
    explanations: {
      A: "Correct — using a pit of poisonous snakes to try to scare evil spirits out of a person is the historical 'snake pits' treatment described in the chapter.",
      B: "Free association is a psychoanalytic technique for uncovering unconscious thoughts, unrelated to scaring out spirits.",
      C: "Bloodletting is a biological-tradition treatment involving removing blood, not a fear-based exorcism method.",
      D: "Person-centered therapy is a modern humanistic counseling approach, unrelated to this historical practice.",
    },
  },
  {
    term: "A patient is subjected to dunking in ice-cold water because the therapist believes the shock may bring the person back to their senses. Which treatment from the chapter is illustrated?",
    choices: {
      A: "Hydrotherapy",
      B: "Moral therapy",
      C: "Psychoanalysis",
      D: "Systematic desensitization",
    },
    correct: "A",
    explanations: {
      A: "Correct — using ice-cold water shock to try to restore a person's senses is exactly what hydrotherapy involved historically.",
      B: "Moral therapy is a humane, respect-based treatment approach, not a shock-based water treatment.",
      C: "Psychoanalysis is Freud's talk-based treatment approach, unrelated to water dunking.",
      D: "Systematic desensitization is a modern behavioral technique for phobias, unrelated to this historical water treatment.",
    },
  },
  {
    term: "During a historical outbreak, whole groups of people simultaneously run through streets, dance, shout, rave, and jump around. Which name was given to this behavior?",
    choices: {
      A: "Tarantism",
      B: "Exorcism",
      C: "Hydrotherapy",
      D: "Melancholia",
    },
    correct: "A",
    explanations: {
      A: "Correct — tarantism is the name given to this historical group behavior of running, dancing, shouting, and jumping, once attributed to spider bites.",
      B: "Exorcism is a religious ritual to remove spirits, not the name for this group behavior itself.",
      C: "Hydrotherapy is a water-based treatment, not the name for this dancing/raving outbreak.",
      D: "Melancholia is an old term for depression, unrelated to this frenzied group behavior.",
    },
  },
  {
    term: "The same historical behavior is described by another name involving Saint Vitus. Which term fits?",
    choices: {
      A: "Saint Vitus's Dance",
      B: "Mass hysteria",
      C: "Animal magnetism",
      D: "General paresis",
    },
    correct: "A",
    explanations: {
      A: "Correct — Saint Vitus's Dance is the alternate historical name for the same dancing, jumping, raving outbreak also called tarantism.",
      B: "Mass hysteria is the chapter's more modern alternative explanation for such outbreaks, not the historical name involving Saint Vitus.",
      C: "Animal magnetism is Mesmer's unrelated theory about an invisible physical fluid, not a name for this dancing outbreak.",
      D: "General paresis is a late-stage syphilis condition, unrelated to this dancing phenomenon.",
    },
  },
  {
    term: "Historians are considering another possibility for the large-scale outbreaks of bizarre behavior besides possession and insect bites. Which term does the chapter use for this possibility?",
    choices: {
      A: "Tarantism",
      B: "Mass hysteria",
      C: "Humoral theory",
      D: "Psychoanalysis",
    },
    correct: "B",
    explanations: {
      A: "Tarantism is one of the older explanations (linked to spider bites), not the alternative possibility being considered.",
      B: "Correct — mass hysteria is the alternative explanation the chapter offers for these large-scale outbreaks, besides possession or insect bites.",
      C: "Humoral theory is an unrelated ancient explanation involving bodily fluids, not this alternative possibility.",
      D: "Psychoanalysis is Freud's later theory about unconscious conflict, unrelated to this historical alternative explanation.",
    },
  },
  {
    term: "At a school, one student reports a funny smell and becomes ill. Soon, other students and teachers nearby experience dizziness, nausea, stomach pains, vomiting, and hyperventilation. No physical cause is found. Which phenomenon does the chapter use this case to illustrate?",
    choices: {
      A: "Mass hysteria",
      B: "Bloodletting",
      C: "General paresis",
      D: "Moral therapy",
    },
    correct: "A",
    explanations: {
      A: "Correct — a shared physical reaction spreading among a group with no identifiable physical cause is a classic example of mass hysteria.",
      B: "Bloodletting is a historical biological treatment, unrelated to this spreading illness phenomenon.",
      C: "General paresis is a late-stage syphilis condition, unrelated to this shared, spreading reaction.",
      D: "Moral therapy is a humane treatment approach, unrelated to this outbreak phenomenon.",
    },
  },
  {
    term: "In the school incident, one student's experience of fear or distress seems to spread to people nearby. Which phenomenon describes this process?",
    choices: {
      A: "Emotion contagion",
      B: "Extinction",
      C: "Projection",
      D: "Shaping",
    },
    correct: "A",
    explanations: {
      A: "Correct — emotion contagion describes how one person's fear or distress spreads to others nearby, exactly as in the school incident.",
      B: "Extinction is a conditioning term describing a learned response fading away, unrelated to spreading emotion.",
      C: "Projection is a psychoanalytic defense mechanism of attributing one's own feelings to others, not spreading emotion between people.",
      D: "Shaping is a behaviorist technique of reinforcing successive approximations of a behavior, unrelated to spreading fear.",
    },
  },
  {
    term: "A frightened person causes people nearby to become frightened, and the reaction eventually escalates into widespread panic. Which concept best fits?",
    choices: {
      A: "Emotion contagion",
      B: "Rationalization",
      C: "Repression",
      D: "Reinforcement",
    },
    correct: "A",
    explanations: {
      A: "Correct — fear spreading from one frightened person to others, escalating into widespread panic, is exactly emotion contagion.",
      B: "Rationalization is a psychoanalytic defense mechanism of justifying behavior with logical-sounding reasons, unrelated to spreading fear.",
      C: "Repression is a psychoanalytic defense mechanism of pushing distressing thoughts out of awareness, unrelated to spreading fear.",
      D: "Reinforcement is a behaviorist learning concept about strengthening behavior through consequences, unrelated to spreading fear.",
    },
  },
  {
    term: "A group experiences the same shared response during a highly emotional situation, and people begin assuming that their reactions have the same cause. What popular-language term does the chapter give for this?",
    choices: {
      A: "Mob psychology",
      B: "Psychoanalysis",
      C: "Moral therapy",
      D: "Humoral theory",
    },
    correct: "A",
    explanations: {
      A: "Correct — 'mob psychology' is the popular-language term the chapter uses for this shared group reaction and the assumption of a common cause.",
      B: "Psychoanalysis is Freud's theory about unconscious conflict, unrelated to this popular term for group behavior.",
      C: "Moral therapy is a humane treatment approach, unrelated to this popular term for group behavior.",
      D: "Humoral theory is an ancient explanation involving bodily fluids, unrelated to this popular term for group behavior.",
    },
  },
  {
    term: "A physician argues that psychological disorders should be treated like other diseases and considers the brain the seat of wisdom, consciousness, intelligence, and emotion. Which historical figure is associated with this view?",
    choices: {
      A: "Hippocrates",
      B: "Freud",
      C: "Watson",
      D: "Skinner",
    },
    correct: "A",
    explanations: {
      A: "Correct — Hippocrates argued psychological disorders should be treated like other diseases and viewed the brain as the seat of wisdom, consciousness, intelligence, and emotion.",
      B: "Freud developed psychoanalysis and the unconscious mind theory, a later and different tradition than Hippocrates' biological view.",
      C: "Watson founded behaviorism, focused on observable learning and conditioning, unrelated to this ancient biological claim.",
      D: "Skinner developed operant conditioning theory, unrelated to this ancient biological claim.",
    },
  },
  {
    term: "A physician studies whether psychological problems may be related to brain pathology, head trauma, or heredity. Which historical physician's ideas does this reflect?",
    choices: {
      A: "Hippocrates",
      B: "Mesmer",
      C: "Pavlov",
      D: "Rogers",
    },
    correct: "A",
    explanations: {
      A: "Correct — Hippocrates proposed that psychological problems could stem from brain pathology, head trauma, or heredity, founding the biological tradition.",
      B: "Mesmer proposed 'animal magnetism,' an invisible fluid theory, a different and later idea than Hippocrates' biological views.",
      C: "Pavlov is known for classical conditioning research with dogs, unrelated to this ancient biological theory.",
      D: "Rogers developed person-centered humanistic therapy, unrelated to this ancient biological theory.",
    },
  },
  {
    term: "A student is asked which work was produced by Hippocrates and his associates between 450 and 350 b.c. Which answer fits?",
    choices: {
      A: "The Behavior of Organisms",
      B: "Hippocratic Corpus",
      C: "Anatomy of Melancholy",
      D: "Ego and the Mechanisms of Defense",
    },
    correct: "B",
    explanations: {
      A: "The Behavior of Organisms is B.F. Skinner's 20th-century behaviorist work, not Hippocrates'.",
      B: "Correct — the Hippocratic Corpus is the body of work produced by Hippocrates and his associates around 450–350 b.c.",
      C: "Anatomy of Melancholy is Robert Burton's later work on depression, not Hippocrates'.",
      D: "Ego and the Mechanisms of Defense is Anna Freud's psychoanalytic work, not Hippocrates'.",
    },
  },
  {
    term: "A physician believes that psychological functioning depends on the proper balance of blood, black bile, yellow bile, and phlegm. Which theory is being used?",
    choices: {
      A: "Humoral theory",
      B: "Psychoanalytic model",
      C: "Behavioral model",
      D: "Humanistic theory",
    },
    correct: "A",
    explanations: {
      A: "Correct — the belief that psychological functioning depends on a balance of the four bodily fluids (blood, black bile, yellow bile, phlegm) is humoral theory.",
      B: "The psychoanalytic model explains behavior through unconscious conflict, not bodily fluid balance.",
      C: "The behavioral model explains behavior through learning and conditioning, not bodily fluid balance.",
      D: "Humanistic theory focuses on personal growth and self-actualization, not bodily fluid balance.",
    },
  },
  {
    term: "A physician believes a patient's depression results from having too much black bile. Which historical explanation is being applied?",
    choices: {
      A: "Humoral theory",
      B: "Animal magnetism",
      C: "Classical conditioning",
      D: "Object relations",
    },
    correct: "A",
    explanations: {
      A: "Correct — attributing depression to an excess of black bile is a direct application of humoral theory.",
      B: "Animal magnetism is Mesmer's theory about an invisible physical fluid affecting the body, a different concept than black bile.",
      C: "Classical conditioning is a modern behaviorist learning concept, unrelated to bodily fluid imbalance.",
      D: "Object relations is a psychoanalytic theory about early relationships shaping personality, unrelated to bodily fluids.",
    },
  },
  {
    term: "A person is described as melancholic because depression was historically thought to result from black bile flooding the brain. Which humor is being discussed?",
    choices: {
      A: "Blood",
      B: "Black bile",
      C: "Yellow bile",
      D: "Phlegm",
    },
    correct: "B",
    explanations: {
      A: "Blood was historically associated with a sanguine, cheerful temperament, not melancholy/depression.",
      B: "Correct — black bile is the humor historically linked to melancholy (depression), giving us the term 'melancholic.'",
      C: "Yellow bile was historically associated with a choleric, irritable temperament, not melancholy.",
      D: "Phlegm was historically associated with a calm, sluggish temperament, not melancholy.",
    },
  },
  {
    term: "A physician attempts to correct an imbalance by carefully removing a measured amount of blood from the patient's body. Which treatment is being used?",
    choices: {
      A: "Bloodletting",
      B: "Exorcism",
      C: "Free association",
      D: "Systematic desensitization",
    },
    correct: "A",
    explanations: {
      A: "Correct — deliberately removing blood to correct a supposed humoral imbalance is exactly bloodletting.",
      B: "Exorcism is a religious ritual to remove spirits, unrelated to physically removing blood.",
      C: "Free association is a psychoanalytic talk technique, unrelated to physical blood removal.",
      D: "Systematic desensitization is a modern behavioral phobia treatment, unrelated to bloodletting.",
    },
  },
  {
    term: "Robert Burton recommends eating tobacco and half-boiled cabbage to induce vomiting as part of a treatment for depression. Which work is associated with this treatment?",
    choices: {
      A: "Anatomy of Melancholy",
      B: "The Behavior of Organisms",
      C: "Walden Two",
      D: "Ego and the Mechanisms of Defense",
    },
    correct: "A",
    explanations: {
      A: "Correct — Robert Burton's Anatomy of Melancholy is the historical work that recommended treatments like tobacco and half-boiled cabbage to induce vomiting for depression.",
      B: "The Behavior of Organisms is Skinner's behaviorist work, unrelated to Burton's melancholy treatments.",
      C: "Walden Two is Skinner's fictional utopia based on behaviorist principles, unrelated to Burton's work.",
      D: "Ego and the Mechanisms of Defense is Anna Freud's psychoanalytic work, unrelated to Burton's work.",
    },
  },
  {
    term: "A historical physician believes psychological disorders result from blocked wind in the body and uses acupuncture to restore its flow. Which tradition is represented?",
    choices: {
      A: "Ancient Chinese approach",
      B: "Psychoanalytic approach",
      C: "Behavioral approach",
      D: "Humanistic approach",
    },
    correct: "A",
    explanations: {
      A: "Correct — explaining disorders through blocked wind and treating them with acupuncture reflects the ancient Chinese approach described in the chapter.",
      B: "The psychoanalytic approach explains disorders through unconscious conflict, unrelated to blocked wind or acupuncture.",
      C: "The behavioral approach explains disorders through learning and conditioning, unrelated to blocked wind or acupuncture.",
      D: "The humanistic approach focuses on personal growth and self-actualization, unrelated to blocked wind or acupuncture.",
    },
  },
  {
    term: "A healer believes a disorder results from cold, dark wind rather than warm, life-sustaining wind. Which concept from the ancient Chinese approach is involved?",
    choices: {
      A: "Yin and yang",
      B: "Id and ego",
      C: "Primary and secondary process",
      D: "Prevalence and incidence",
    },
    correct: "A",
    explanations: {
      A: "Correct — the contrast between cold, dark wind and warm, life-sustaining wind reflects the yin and yang concept from the ancient Chinese approach.",
      B: "Id and ego are Freud's structural personality concepts, unrelated to the ancient Chinese wind theory.",
      C: "Primary and secondary process are psychoanalytic concepts about types of mental functioning, unrelated to this theory.",
      D: "Prevalence and incidence are modern statistical concepts about disorder frequency, unrelated to this ancient theory.",
    },
  },
  {
    term: "A woman experiences paralysis even though physicians cannot find a physical cause. Which historical condition discussed in the chapter does this example relate to?",
    choices: {
      A: "Somatic symptom disorders",
      B: "General paresis",
      C: "Phobia",
      D: "Neurosis",
    },
    correct: "A",
    explanations: {
      A: "Correct — physical symptoms like paralysis with no identifiable physical cause relate to somatic symptom disorders (historically linked to hysteria).",
      B: "General paresis is a late-stage syphilis condition with an identifiable bacterial cause, unlike this unexplained paralysis.",
      C: "Phobia refers to an excessive fear of a specific object or situation, not unexplained physical paralysis.",
      D: "Neurosis is an older general term for anxiety-related distress, not this specific unexplained-paralysis condition.",
    },
  },
  {
    term: "An ancient physician believes a woman's physical symptoms are caused by an empty uterus wandering around the body in search of conception. Which historical idea is being described?",
    choices: {
      A: "Wandering uterus theory",
      B: "Humoral theory",
      C: "Collective unconscious",
      D: "Classical conditioning",
    },
    correct: "A",
    explanations: {
      A: "Correct — the belief that an empty uterus wanders the body seeking conception, causing physical symptoms, is the wandering uterus theory.",
      B: "Humoral theory involves the balance of four bodily fluids, a separate ancient theory from the wandering uterus idea.",
      C: "Collective unconscious is a Jungian concept about shared inherited memories, unrelated to this ancient theory.",
      D: "Classical conditioning is a modern behaviorist learning concept, unrelated to this ancient theory.",
    },
  },
  {
    term: "A physician recommends marriage as a possible treatment because of the belief that the uterus is causing the woman's symptoms. Which historical belief does this reflect?",
    choices: {
      A: "Wandering uterus theory",
      B: "Animal magnetism",
      C: "Psychoanalytic model",
      D: "Behavioral model",
    },
    correct: "A",
    explanations: {
      A: "Correct — recommending marriage (and thus conception) as a cure reflects the wandering uterus theory's belief that the uterus caused symptoms when unfulfilled.",
      B: "Animal magnetism is Mesmer's later theory about an invisible physical fluid, unrelated to the uterus theory.",
      C: "The psychoanalytic model explains behavior through unconscious conflict, unrelated to this ancient uterus-based belief.",
      D: "The behavioral model explains behavior through learning and conditioning, unrelated to this ancient uterus-based belief.",
    },
  },
  {
    term: "A patient develops delusions of persecution and grandeur, then becomes paralyzed and dies within several years. Researchers discover that the symptoms are related to a bacterial microorganism entering the brain. Which disease is involved?",
    choices: {
      A: "Syphilis",
      B: "Phobia",
      C: "Melancholia",
      D: "Hysteria",
    },
    correct: "A",
    explanations: {
      A: "Correct — syphilis, when it progresses to the brain, causes exactly this pattern of delusions, paralysis, and eventual death.",
      B: "Phobia is an excessive fear of a specific object or situation, unrelated to this bacterial brain disease.",
      C: "Melancholia is an old term for depression, unrelated to this bacterial brain disease.",
      D: "Hysteria historically referred to unexplained physical symptoms without a known physical cause, unlike syphilis which has an identified bacterial cause.",
    },
  },
  {
    term: "A patient believes everyone is plotting against them and that they are God. These symptoms are later connected to a bacterial infection. Which condition described in the chapter fits?",
    choices: {
      A: "General paresis",
      B: "Moral therapy",
      C: "Mass hysteria",
      D: "Neurosis",
    },
    correct: "A",
    explanations: {
      A: "Correct — general paresis is the condition involving delusions of persecution and grandeur caused by the bacterial infection syphilis reaching the brain.",
      B: "Moral therapy is a historical humane treatment approach, not a condition or symptom pattern.",
      C: "Mass hysteria describes a shared reaction spreading through a group, not one patient's delusions from infection.",
      D: "Neurosis is an older general term for anxiety-related distress, not this specific infection-caused condition.",
    },
  },
  {
    term: "A researcher uses germ theory to identify the bacterial microorganism responsible for syphilis. Which scientist's work helped make this possible?",
    choices: {
      A: "Louis Pasteur",
      B: "Sigmund Freud",
      C: "Ivan Pavlov",
      D: "Carl Rogers",
    },
    correct: "A",
    explanations: {
      A: "Correct — Louis Pasteur's germ theory of disease provided the scientific foundation for identifying bacterial causes like the one behind syphilis.",
      B: "Sigmund Freud developed psychoanalysis, unrelated to germ theory or bacterial disease identification.",
      C: "Ivan Pavlov is known for classical conditioning research, unrelated to germ theory.",
      D: "Carl Rogers developed person-centered humanistic therapy, unrelated to germ theory.",
    },
  },
  {
    term: "Physicians deliberately infect patients with malaria after observing that people with general paresis sometimes recovered after contracting malaria. The high fever appeared to destroy the syphilis bacteria. Which historical treatment is being described?",
    choices: {
      A: "Malaria cure",
      B: "Moral therapy",
      C: "Hydrotherapy",
      D: "Exorcism",
    },
    correct: "A",
    explanations: {
      A: "Correct — deliberately infecting patients with malaria to use its fever to destroy the syphilis bacteria is exactly the historical 'malaria cure' treatment.",
      B: "Moral therapy is a humane, respect-based treatment approach, not a fever-inducing biological treatment.",
      C: "Hydrotherapy uses water-based treatments, not deliberate infection with malaria.",
      D: "Exorcism is a religious ritual to remove spirits, unrelated to this biological fever treatment.",
    },
  },
  {
    term: "A physician believes insanity is always caused by physical factors and treats mentally ill patients as physically ill, emphasizing rest, diet, temperature, and ventilation. Which figure held this position?",
    choices: {
      A: "John P. Grey",
      B: "Philippe Pinel",
      C: "Carl Rogers",
      D: "Joseph Wolpe",
    },
    correct: "A",
    explanations: {
      A: "Correct — John P. Grey held the position that insanity was always physically caused and treated patients accordingly, emphasizing rest, diet, temperature, and ventilation.",
      B: "Philippe Pinel is known for reforming asylums with more humane treatment, a different historical contribution than Grey's physical-cause insistence.",
      C: "Carl Rogers developed person-centered humanistic therapy much later, unrelated to this historical physical-treatment view.",
      D: "Joseph Wolpe developed systematic desensitization, a modern behavioral technique unrelated to this historical view.",
    },
  },
  {
    term: "A hospital improves its conditions and becomes more humane, but eventually becomes so large and impersonal that individual attention is difficult. Which historical development does this illustrate?",
    choices: {
      A: "Consequences of the biological tradition",
      B: "Classical conditioning",
      C: "Humanistic psychology",
      D: "Free association",
    },
    correct: "A",
    explanations: {
      A: "Correct — this describes an unintended consequence of the biological tradition's hospital-based approach, where growth in size undermined the individualized care it was meant to provide.",
      B: "Classical conditioning is a learning concept from behaviorism, unrelated to hospital size and care quality.",
      C: "Humanistic psychology is a theoretical perspective on personal growth, not a description of this hospital development.",
      D: "Free association is a psychoanalytic technique, unrelated to hospital conditions.",
    },
  },
  {
    term: "A physician gives insulin to psychotic patients who are not eating and notices that they become calmer. Increasing the dosage eventually causes convulsions and temporary coma. Which treatment resulted?",
    choices: {
      A: "Insulin shock therapy",
      B: "Hydrotherapy",
      C: "Moral therapy",
      D: "Systematic desensitization",
    },
    correct: "A",
    explanations: {
      A: "Correct — using insulin doses that lead to convulsions and temporary coma to calm psychotic patients is exactly insulin shock therapy.",
      B: "Hydrotherapy uses water-based treatments, unrelated to insulin dosing.",
      C: "Moral therapy is a humane, respect-based treatment approach, not a biological shock treatment.",
      D: "Systematic desensitization is a modern behavioral phobia treatment, unrelated to insulin-induced coma.",
    },
  },
  {
    term: "A treatment using insulin repeatedly causes patients to convulse and become temporarily comatose, but the treatment is eventually abandoned because of danger. Which reason from the chapter explains its abandonment?",
    choices: {
      A: "It was too dangerous and could result in prolonged coma or death",
      B: "It failed to produce any physical effects",
      C: "It was based on free association",
      D: "It was replaced by exorcism",
    },
    correct: "A",
    explanations: {
      A: "Correct — insulin shock therapy was abandoned because it was dangerous, with risks including prolonged coma or death.",
      B: "The treatment did produce strong physical effects (convulsions, coma) — that's precisely why it was dangerous, not why it lacked effect.",
      C: "Free association is an unrelated psychoanalytic technique, not the reason insulin shock therapy was abandoned.",
      D: "Exorcism is an unrelated historical religious ritual, not what replaced insulin shock therapy.",
    },
  },
  {
    term: "Benjamin Franklin accidentally discovers that a mild electric shock to the head can produce a brief convulsion and memory loss. What did this later contribute to?",
    choices: {
      A: "Ideas about electric shock treatment",
      B: "Moral therapy",
      C: "Psychoanalysis",
      D: "Classical conditioning",
    },
    correct: "A",
    explanations: {
      A: "Correct — Franklin's observation about electric shock causing convulsion and memory loss later contributed to the development of electric shock treatment ideas.",
      B: "Moral therapy is a humane, respect-based treatment approach unrelated to electric shock.",
      C: "Psychoanalysis is Freud's talk-based theory, unrelated to Franklin's electrical observation.",
      D: "Classical conditioning is a learning concept from behaviorism, unrelated to Franklin's electrical observation.",
    },
  },
  {
    term: "A patient with depression receives electric shocks directly through the brain and experiences convulsions before recovering. Which treatment described in the chapter does this foreshadow?",
    choices: {
      A: "Electroconvulsive therapy",
      B: "Systematic desensitization",
      C: "Bloodletting",
      D: "Exorcism",
    },
    correct: "A",
    explanations: {
      A: "Correct — administering electric shocks through the brain to produce convulsions before recovery is exactly electroconvulsive therapy (ECT).",
      B: "Systematic desensitization is a modern behavioral phobia treatment, unrelated to electric shocks to the brain.",
      C: "Bloodletting is an ancient biological treatment involving blood removal, unrelated to electric shock.",
      D: "Exorcism is a religious ritual to remove spirits, unrelated to electric shock treatment.",
    },
  },
];

/* ============================================================
   QUIZ DATA — SET 2 (Questions 81–130)
   ------------------------------------------------------------
   Questions 81–130 are added here using the exact same shape
   as the questions in SET 1 above.
   ============================================================ */

const QUESTIONS_SET_2 = [
  {
    term: "A patient with severe psychotic symptoms receives a drug that diminishes hallucinations and delusions and controls agitation. Which class of drugs is described?",
    choices: {
      A: "Neuroleptics",
      B: "Benzodiazepines",
      C: "Bromides",
      D: "Opium",
    },
    correct: "A",
    explanations: {
      A: "Correct — Neuroleptics are the class described as diminishing hallucinations and delusions and controlling agitation.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A patient with anxiety receives a drug that seems to reduce anxiety. Which class described in the chapter fits?",
    choices: {
      A: "Benzodiazepines",
      B: "Neuroleptics",
      C: "Bromides",
      D: "Humors",
    },
    correct: "A",
    explanations: {
      A: "Correct — Benzodiazepines are the class described in the chapter as reducing anxiety.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A psychiatrist distinguishes psychological disorders by their different ages of onset, time courses, symptom clusters, and probable causes. Which historical figure's contribution is being described?",
    choices: {
      A: "Emil Kraepelin",
      B: "John B. Watson",
      C: "Franz Anton Mesmer",
      D: "Abraham Maslow",
    },
    correct: "A",
    explanations: {
      A: "Correct — Emil Kraepelin is associated with distinguishing psychological disorders by age of onset, time course, symptom clusters, and probable causes.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A theorist believes maladaptive behavior results partly from social and cultural influences and learning in the environment. Which philosopher's ideas does this resemble?",
    choices: {
      A: "Plato",
      B: "Galen",
      C: "Pavlov",
      D: "Skinner",
    },
    correct: "A",
    explanations: {
      A: "Correct — Plato is the philosopher whose ideas in the chapter include social and cultural influences and learning in the environment on maladaptive behavior.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A treatment program places institutionalized patients in an environment where they are treated normally, encouraged to interact socially, and given opportunities to form relationships. Which approach is this?",
    choices: {
      A: "Moral therapy",
      B: "Exorcism",
      C: "Bloodletting",
      D: "Psychoanalysis",
    },
    correct: "A",
    explanations: {
      A: "Correct — Moral therapy places institutionalized patients in a more normal environment, encourages social interaction, and provides opportunities for relationships.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A mental institution removes restraint and seclusion and instead emphasizes positive consequences, social interaction, and relationships. Which treatment is being used?",
    choices: {
      A: "Moral therapy",
      B: "Humoral theory",
      C: "Systematic desensitization",
      D: "Dream analysis",
    },
    correct: "A",
    explanations: {
      A: "Correct — Moral therapy emphasizes humane treatment, positive consequences, social interaction, and relationships rather than restraint and seclusion.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "Philippe Pinel arrives at La Bicêtre and supports the removal of chains and the use of humane and positive psychological interventions. Which approach is represented?",
    choices: {
      A: "Moral therapy",
      B: "Biological tradition",
      C: "Psychoanalysis",
      D: "Behaviorism",
    },
    correct: "A",
    explanations: {
      A: "Correct — Moral therapy is represented by Pinel’s support for removing chains and using humane and positive psychological interventions.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A hospital provides patients with soothing music, massage, and good care rather than treating them like prisoners. Which earlier setting in the chapter demonstrated similar practices?",
    choices: {
      A: "Asclepiad Temples",
      B: "Salpêtrière Hospital",
      C: "Utica State Hospital",
      D: "Community hospital",
    },
    correct: "A",
    explanations: {
      A: "Correct — The Asclepiad Temples used practices such as soothing music, massage, and good care, similar to the setting described.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "An asylum places residents in a pleasant rural setting where they work in fields, care for livestock, or perform productive work such as weaving. Which treatment philosophy influenced this arrangement?",
    choices: {
      A: "Moral therapy",
      B: "Psychoanalysis",
      C: "Behaviorism",
      D: "Supernatural tradition",
    },
    correct: "A",
    explanations: {
      A: "Correct — Moral therapy influenced arrangements that provided pleasant settings, productive work, and humane treatment.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A treatment program has more than 1,000 patients, making individual attention difficult. Which reason from the chapter helps explain why moral therapy declined?",
    choices: {
      A: "Moral therapy worked best when institutions had 200 or fewer patients",
      B: "Patients preferred supernatural treatment",
      C: "Freud rejected moral therapy",
      D: "Pavlov introduced psychoanalysis",
    },
    correct: "A",
    explanations: {
      A: "Correct — Moral therapy worked best when institutions had 200 or fewer patients, so very large institutions made individual attention difficult.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "Dorothea Dix visits institutions, sees deplorable conditions, and campaigns for reform in the treatment of people with insanity. What movement resulted from her work?",
    choices: {
      A: "Mental hygiene movement",
      B: "Behaviorism",
      C: "Psychoanalysis",
      D: "Humanistic psychology",
    },
    correct: "A",
    explanations: {
      A: "Correct — The mental hygiene movement resulted from Dorothea Dix’s campaigns to reform deplorable conditions in institutions.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "Dorothea Dix's reforms increase the number of patients receiving care, but hospitals lack enough staff to provide individual attention. What happened to the treatment approach?",
    choices: {
      A: "A transition from moral therapy to custodial care",
      B: "A transition from psychoanalysis to exorcism",
      C: "A transition from behaviorism to humoral theory",
      D: "A transition from hypnosis to bloodletting",
    },
    correct: "A",
    explanations: {
      A: "Correct — The increase in patients without enough staff contributed to a transition from moral therapy to custodial care.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A therapist tells patients that an undetectable fluid called “animal magnetism” is blocked in their bodies and strongly suggests that they are being cured. Which figure is associated with this approach?",
    choices: {
      A: "Franz Anton Mesmer",
      B: "Josef Breuer",
      C: "Carl Rogers",
      D: "Joseph Wolpe",
    },
    correct: "A",
    explanations: {
      A: "Correct — Franz Anton Mesmer is associated with the theory of “animal magnetism” and the suggestion that it could be blocked in the body.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "Patients sit in a dark room around a large vat of chemicals while a therapist taps parts of their bodies and strongly suggests that they are being cured. Which historical approach is being described?",
    choices: {
      A: "Mesmerism",
      B: "Moral therapy",
      C: "Classical conditioning",
      D: "Free association",
    },
    correct: "A",
    explanations: {
      A: "Correct — Mesmerism is the historical approach involving animal magnetism, suggestion, and the procedures described.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "Benjamin Franklin gives patients either magnetized or nonmagnetized water while neither the patient nor therapist knows which water was given. Both groups improve. What did Franklin conclude?",
    choices: {
      A: "Animal magnetism was nothing more than strong suggestion",
      B: "Animal magnetism was scientifically proven",
      C: "Humoral theory was correct",
      D: "Psychoanalysis was effective",
    },
    correct: "A",
    explanations: {
      A: "Correct — Franklin concluded that animal magnetism was nothing more than strong suggestion after both magnetized and nonmagnetized groups improved.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A therapist places highly suggestible patients into a trance-like state. Which concept is associated with Mesmer's historical influence?",
    choices: {
      A: "Hypnosis",
      B: "Shaping",
      C: "Reinforcement",
      D: "Extinction",
    },
    correct: "A",
    explanations: {
      A: "Correct — Hypnosis is the concept associated with Mesmer’s historical influence and the use of a trance-like state with highly suggestible patients.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A neurologist studies hypnosis and helps legitimize its use with psychological disorders. Which figure is described?",
    choices: {
      A: "Jean-Martin Charcot",
      B: "John P. Grey",
      C: "Emil Kraepelin",
      D: "Edward Thorndike",
    },
    correct: "A",
    explanations: {
      A: "Correct — Jean-Martin Charcot studied hypnosis and helped legitimize its use with psychological disorders.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A young physician travels from Vienna to Paris in 1885 to study hypnosis with Jean-Martin Charcot. Who is this physician?",
    choices: {
      A: "Sigmund Freud",
      B: "B. F. Skinner",
      C: "Carl Rogers",
      D: "Abraham Maslow",
    },
    correct: "A",
    explanations: {
      A: "Correct — Sigmund Freud was the young physician who traveled from Vienna to Paris in 1885 to study hypnosis with Jean-Martin Charcot.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A therapist places patients under hypnosis and asks them to describe their problems, conflicts, and fears in detail. Patients become emotional and feel relief afterward. Which figure's procedure is being described?",
    choices: {
      A: "Josef Breuer",
      B: "B. F. Skinner",
      C: "Joseph Wolpe",
      D: "Carl Jung",
    },
    correct: "A",
    explanations: {
      A: "Correct — Josef Breuer used the procedure of placing patients under hypnosis and having them describe problems, conflicts, and fears.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A patient recalls emotional trauma that had been outside conscious awareness and experiences a release of emotional tension. Which concept applies?",
    choices: {
      A: "Catharsis",
      B: "Prevalence",
      C: "Extinction",
      D: "Reinforcement",
    },
    correct: "A",
    explanations: {
      A: "Correct — Catharsis refers to the release of emotional tension after recalling emotional trauma that had been outside conscious awareness.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "After discussing earlier events, a patient comes to understand how those events are related to current emotions. Which concept is illustrated?",
    choices: {
      A: "Insight",
      B: "Incidence",
      C: "Shaping",
      D: "Projection",
    },
    correct: "A",
    explanations: {
      A: "Correct — Insight is the understanding of how earlier events are related to current emotions.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "Anna O. develops blurred vision, difficulty moving her limbs, difficulty speaking, and unpredictable behavior after her father's serious illness and death. Which historical case is being described?",
    choices: {
      A: "Anna O.",
      B: "Little Albert",
      C: "Peter",
      D: "King Charles VI",
    },
    correct: "A",
    explanations: {
      A: "Correct — Anna O. is the historical case described with blurred vision, difficulty moving her limbs, difficulty speaking, and unpredictable behavior.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A therapist treats one of Anna O.'s symptoms at a time through hypnosis and “talking through,” tracing each symptom to circumstances surrounding her father's death. Which figures conducted this work?",
    choices: {
      A: "Breuer and Freud",
      B: "Pavlov and Skinner",
      C: "Watson and Jones",
      D: "Jung and Adler",
    },
    correct: "A",
    explanations: {
      A: "Correct — Breuer and Freud conducted the work with Anna O., using hypnosis and “talking through” to trace symptoms to circumstances surrounding her father’s death.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "Freud develops a comprehensive theory about the structure of personality and the role of unconscious processes in behavior. Which model does he develop?",
    choices: {
      A: "Psychoanalytic model",
      B: "Behavioral model",
      C: "Humoral theory",
      D: "Humanistic theory",
    },
    correct: "A",
    explanations: {
      A: "Correct — Freud developed the psychoanalytic model concerning personality structure and unconscious processes in behavior.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A psychologist studies how different parts of the mind sometimes clash, how the mind protects itself from these conflicts, and how early development contributes to inner conflicts. Which theory is being studied?",
    choices: {
      A: "Psychoanalytic theory",
      B: "Behavioral model",
      C: "Humoral theory",
      D: "Moral therapy",
    },
    correct: "A",
    explanations: {
      A: "Correct — Psychoanalytic theory studies conflicts among parts of the mind, defenses against those conflicts, and the role of early development.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person's behavior is driven by strong sexual and aggressive feelings and seeks immediate pleasure while ignoring social rules. Which part of Freud's mind is most directly represented?",
    choices: {
      A: "Id",
      B: "Ego",
      C: "Superego",
      D: "Collective unconscious",
    },
    correct: "A",
    explanations: {
      A: "Correct — The id is driven by strong sexual and aggressive feelings and seeks immediate pleasure while ignoring social rules.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person wants immediate pleasure but must consider the realities of the situation before acting. Which part of the mind is responsible for dealing with reality?",
    choices: {
      A: "Id",
      B: "Ego",
      C: "Superego",
      D: "Libido",
    },
    correct: "B",
    explanations: {
      A: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      B: "Correct — The ego deals with reality and considers the realities of a situation before acting.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person feels an internal voice telling them that a behavior is morally wrong because of values learned from parents and culture. Which structure is represented?",
    choices: {
      A: "Id",
      B: "Ego",
      C: "Superego",
      D: "Primary process",
    },
    correct: "C",
    explanations: {
      A: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "Correct — The superego represents moral values learned from parents and culture and can tell a person that behavior is morally wrong.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person's immediate desire conflicts with moral principles, while another part of the mind attempts to balance those demands with reality. Which structure acts as the mediator?",
    choices: {
      A: "Id",
      B: "Ego",
      C: "Superego",
      D: "Libido",
    },
    correct: "B",
    explanations: {
      A: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      B: "Correct — The ego acts as the mediator by balancing the demands of immediate desire, moral principles, and reality.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person experiences conflict entirely within the mind between competing mental structures. Which term does Freud use for this type of conflict?",
    choices: {
      A: "Intrapsychic conflicts",
      B: "Emotion contagion",
      C: "Classical conditioning",
      D: "Stimulus generalization",
    },
    correct: "A",
    explanations: {
      A: "Correct — Freud uses the term intrapsychic conflicts for conflict occurring within the mind between competing mental structures.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person thinks in an emotional, irrational, illogical way dominated by fantasy, sex, aggression, selfishness, and envy. Which process is illustrated?",
    choices: {
      A: "Primary process",
      B: "Secondary process",
      C: "Reality principle",
      D: "Reinforcement",
    },
    correct: "A",
    explanations: {
      A: "Correct — Primary process thinking is emotional, irrational, and illogical and is dominated by fantasy, sex, aggression, selfishness, and envy.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person uses logic and reason to make decisions and considers the realities of the world. Which process is being illustrated?",
    choices: {
      A: "Primary process",
      B: "Secondary process",
      C: "Pleasure principle",
      D: "Libido",
    },
    correct: "B",
    explanations: {
      A: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      B: "Correct — Secondary process thinking uses logic and reason and considers the realities of the world.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person constantly seeks to maximize pleasure and eliminate tension or conflict. Which principle is guiding the behavior?",
    choices: {
      A: "Reality principle",
      B: "Pleasure principle",
      C: "Law of effect",
      D: "Cultural context",
    },
    correct: "B",
    explanations: {
      A: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      B: "Correct — The pleasure principle seeks to maximize pleasure and eliminate tension or conflict.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person wants to satisfy basic needs but must find a realistic way to do so without offending everyone around them. Which principle is involved?",
    choices: {
      A: "Pleasure principle",
      B: "Reality principle",
      C: "Primary process",
      D: "Collective unconscious",
    },
    correct: "B",
    explanations: {
      A: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      B: "Correct — The reality principle involves finding a realistic way to satisfy basic needs while considering the surrounding social reality.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A student receives a poor grade and becomes angry at the professor, but instead of confronting the professor, goes home and yells at a younger brother. Which defense mechanism is illustrated?",
    choices: {
      A: "Displacement",
      B: "Projection",
      C: "Repression",
      D: "Rationalization",
    },
    correct: "A",
    explanations: {
      A: "Correct — Displacement involves redirecting feelings such as anger from the original target to another person or target.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person redirects uncomfortable anger into productive work and becomes more efficient because of the redirection. Which defense mechanism is illustrated?",
    choices: {
      A: "Sublimation",
      B: "Denial",
      C: "Projection",
      D: "Reaction formation",
    },
    correct: "A",
    explanations: {
      A: "Correct — Sublimation redirects uncomfortable impulses or feelings into productive or socially acceptable activity.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person refuses to acknowledge an aspect of reality that is obvious to everyone else. Which defense mechanism is illustrated?",
    choices: {
      A: "Denial",
      B: "Displacement",
      C: "Sublimation",
      D: "Projection",
    },
    correct: "A",
    explanations: {
      A: "Correct — Denial involves refusing to acknowledge an aspect of reality that is obvious to others.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person has unacceptable feelings but falsely claims that another person has those same feelings. Which defense mechanism is illustrated?",
    choices: {
      A: "Projection",
      B: "Repression",
      C: "Displacement",
      D: "Sublimation",
    },
    correct: "A",
    explanations: {
      A: "Correct — Projection involves attributing one’s own unacceptable feelings to another person.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person gives a reassuring but incorrect explanation for their behavior while concealing the actual motivation. Which defense mechanism is illustrated?",
    choices: {
      A: "Rationalization",
      B: "Denial",
      C: "Projection",
      D: "Repression",
    },
    correct: "A",
    explanations: {
      A: "Correct — Rationalization involves giving a reassuring but incorrect explanation for behavior while concealing the actual motivation.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A person responds to unacceptable feelings by behaving in the direct opposite way. Which defense mechanism is illustrated?",
    choices: {
      A: "Reaction formation",
      B: "Displacement",
      C: "Sublimation",
      D: "Projection",
    },
    correct: "A",
    explanations: {
      A: "Correct — Reaction formation involves responding to unacceptable feelings by behaving in the direct opposite way.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A disturbing experience is blocked from conscious awareness. Which defense mechanism is illustrated?",
    choices: {
      A: "Repression",
      B: "Projection",
      C: "Rationalization",
      D: "Displacement",
    },
    correct: "A",
    explanations: {
      A: "Correct — Repression involves blocking a disturbing experience from conscious awareness.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A child is primarily focused on feeding, with the lips, tongue, and mouth serving as the principal source of pleasure. Which stage is being described?",
    choices: {
      A: "Oral",
      B: "Anal",
      C: "Phallic",
      D: "Genital",
    },
    correct: "A",
    explanations: {
      A: "Correct — The oral stage is focused on feeding, with the lips, tongue, and mouth serving as the principal source of pleasure.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "An adult continues excessive thumb sucking, chewing pencils, or biting fingernails, behaviors theoretically associated with an earlier developmental stage. Which concept explains this?",
    choices: {
      A: "Fixation",
      B: "Transference",
      C: "Catharsis",
      D: "Projection",
    },
    correct: "A",
    explanations: {
      A: "Correct — Fixation refers to remaining focused on behaviors associated with an earlier developmental stage, such as excessive thumb sucking or nail biting.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A young boy experiences strong feelings toward his mother and fears that his father may punish him by removing his penis. Which concept is illustrated?",
    choices: {
      A: "Castration anxiety",
      B: "Collective unconscious",
      C: "Inferiority complex",
      D: "Unconditional positive regard",
    },
    correct: "A",
    explanations: {
      A: "Correct — Castration anxiety is the fear that the father may punish the boy by removing his penis, as described in the question.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A boy experiences lustful impulses toward his mother, anger and love toward his father, and an internal conflict involving these feelings. Which concept from Freud's theory fits?",
    choices: {
      A: "Oedipus complex",
      B: "Electra complex",
      C: "Object relations",
      D: "Self-psychology",
    },
    correct: "A",
    explanations: {
      A: "Correct — The Oedipus complex involves lustful impulses toward the mother and anger and love toward the father, creating an internal conflict.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A theorist focuses on how the ego develops adaptational capacities, reality testing, and defenses, and how problems with these functions can lead to abnormal behavior. Which approach is represented?",
    choices: {
      A: "Ego psychology",
      B: "Self-psychology",
      C: "Object relations",
      D: "Collective unconscious",
    },
    correct: "A",
    explanations: {
      A: "Correct — Ego psychology focuses on the ego’s adaptational capacities, reality testing, and defenses and how problems with these functions can lead to abnormal behavior.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A theorist focuses on the formation of self-concept and the attributes of the self that allow a person to progress toward health. Which approach is represented?",
    choices: {
      A: "Ego psychology",
      B: "Self-psychology",
      C: "Object relations",
      D: "Behaviorism",
    },
    correct: "B",
    explanations: {
      A: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      B: "Correct — Self-psychology focuses on the formation of self-concept and attributes of the self that allow a person to progress toward health.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A therapist examines how a child incorporates images, memories, and sometimes values of important people into their own identity. Which approach is being applied?",
    choices: {
      A: "Object relations",
      B: "Collective unconscious",
      C: "Ego psychology",
      D: "Behaviorism",
    },
    correct: "A",
    explanations: {
      A: "Correct — Object relations examines how important people’s images, memories, and sometimes values are incorporated into one’s own identity.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A theorist argues that wisdom accumulated by society and culture is stored deep within individual memories and passed from generation to generation. Which concept is being described?",
    choices: {
      A: "Collective unconscious",
      B: "Self-actualizing",
      C: "Intrapsychic conflicts",
      D: "Secondary process",
    },
    correct: "A",
    explanations: {
      A: "Correct — The collective unconscious is described as wisdom accumulated by society and culture stored deep within individual memories and passed from generation to generation.",
      B: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
  {
    term: "A therapist asks a patient to say whatever comes to mind without the usual social censoring in order to uncover emotionally charged material that may have been repressed. Which technique is being used?",
    choices: {
      A: "Dream analysis",
      B: "Free association",
      C: "Systematic desensitization",
      D: "Shaping",
    },
    correct: "B",
    explanations: {
      A: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      B: "Correct — Free association asks the patient to say whatever comes to mind without usual social censoring to uncover emotionally charged material that may have been repressed.",
      C: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
      D: "This is not correct because it does not match the class, concept, or historical contribution described in the question.",
    },
  },
];

/* ============================================================
   QUIZ DATA — SET 3 (Page 3: Questions 1–100)
   ------------------------------------------------------------
   Added from the user's supplied Comprehensive Situational
   Practice Questions. Existing Sets 1 and 2 are unchanged.
   ============================================================ */

const QUESTIONS_SET_3 = [
  {
  "term": "A 24-year-old man comes to a clinic because he is having problems at work and in his marriage. The clinician first gathers information about his current difficulties, past experiences, biological factors, and social circumstances. What overall process is the clinician carrying out?",
  "choices": {
    "A": "Classification",
    "B": "Clinical assessment",
    "C": "Diagnosis",
    "D": "Neuroimaging"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Clinical assessment.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician determines whether a patient's problems meet all the criteria for a specific psychological disorder listed in the DSM-5. What process is being performed?",
  "choices": {
    "A": "Behavioral assessment",
    "B": "Diagnosis",
    "C": "Self-monitoring",
    "D": "Standardization"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Diagnosis.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist begins an evaluation by collecting a large amount of information about a patient's functioning, then gradually narrows the focus after ruling out areas that do not appear relevant. Which description from the chapter best fits this process?",
  "choices": {
    "A": "The assessment funnel",
    "B": "The dimensional approach",
    "C": "The multiaxial system",
    "D": "The empirical approach"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — The assessment funnel.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "Four competent physicians examine a patient with the same stomach pain, but each gives a completely different diagnosis. What problem does this illustrate?",
  "choices": {
    "A": "Validity",
    "B": "Reliability",
    "C": "Standardization",
    "D": "Predictive validity"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Reliability.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "Two clinicians independently evaluate the same patient and reach the same conclusion. Which type of reliability is demonstrated?",
  "choices": {
    "A": "Test–retest reliability",
    "B": "Predictive validity",
    "C": "Inter-rater reliability",
    "D": "Concurrent validity"
  },
  "correct": "C",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "This choice does not match the answer given for this question.",
    "C": "Correct — Inter-rater reliability.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient receives an IQ score of 110 on Tuesday and takes the same test again on Thursday, receiving a very similar score. Which concept is illustrated?",
  "choices": {
    "A": "Inter-rater reliability",
    "B": "Test–retest reliability",
    "C": "Content validity",
    "D": "Construct validity"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Test–retest reliability.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist develops a new short IQ test and wants to determine whether it measures what it is supposed to measure. Which broad concept should be examined?",
  "choices": {
    "A": "Reliability",
    "B": "Validity",
    "C": "Standardization",
    "D": "Reactivity"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Validity.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist compares scores from a new brief IQ test with scores from a well-established, much longer IQ test. The two tests produce essentially the same results. What type of validity is being examined?",
  "choices": {
    "A": "Predictive validity",
    "B": "Content validity",
    "C": "Concurrent or descriptive validity",
    "D": "Construct validity"
  },
  "correct": "C",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "This choice does not match the answer given for this question.",
    "C": "Correct — Concurrent or descriptive validity.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A school uses an IQ assessment because it wants to know which students are likely to succeed academically in the future. Which type of validity is particularly relevant?",
  "choices": {
    "A": "Predictive validity",
    "B": "Concurrent validity",
    "C": "Inter-rater reliability",
    "D": "Content validity"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Predictive validity.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychological test is administered, scored, and evaluated according to the same established procedures every time. What concept is being emphasized?",
  "choices": {
    "A": "Reactivity",
    "B": "Standardization",
    "C": "Diagnosis",
    "D": "Classification"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Standardization.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A 19-year-old African American male from a middle-class background receives a psychological test score. The clinician compares his score with people similar to him rather than with older women from a different cultural and socioeconomic background. What principle is being applied?",
  "choices": {
    "A": "Standardization",
    "B": "Face validity",
    "C": "Reactivity",
    "D": "Labeling"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Standardization.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician begins a patient's first appointment by asking the patient to describe, in a relatively open-ended way, the major difficulties that brought him or her to the office. Which assessment procedure is this?",
  "choices": {
    "A": "Clinical interview",
    "B": "Neuropsychological testing",
    "C": "Psychophysiological assessment",
    "D": "Self-monitoring"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Clinical interview.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "During an interview, a clinician asks when a patient's problem began and what events occurred around that time, including life stress, trauma, or physical illness. What information is the clinician seeking?",
  "choices": {
    "A": "Only intellectual functioning",
    "B": "The history and circumstances surrounding the presenting problem",
    "C": "Only the patient's current mood",
    "D": "Only the patient's family diagnosis"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — The history and circumstances surrounding the presenting problem.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "During a clinical interview, a psychologist asks about family makeup, upbringing, sexual development, religious attitudes, cultural concerns, and educational history. Why?",
  "choices": {
    "A": "These are all part of routinely gathered clinical interview information",
    "B": "They are required only for intelligence testing",
    "C": "They are used exclusively for the MMPI",
    "D": "They determine whether the patient has a false positive"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — These are all part of routinely gathered clinical interview information.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician observes a patient's clothing, posture, facial expression, general appearance, and unusual leg movements. Which mental status exam category is being assessed?",
  "choices": {
    "A": "Sensorium",
    "B": "Mood and affect",
    "C": "Appearance and behavior",
    "D": "Intellectual functioning"
  },
  "correct": "C",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "This choice does not match the answer given for this question.",
    "C": "Correct — Appearance and behavior.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient moves very slowly and with considerable effort during an interview. The clinician considers whether this behavior could indicate severe depression. Which term from the chapter applies?",
  "choices": {
    "A": "Psychomotor retardation",
    "B": "Loose association",
    "C": "Reactivity",
    "D": "Flat affect"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Psychomotor retardation.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician listens to whether a patient's speech is unusually fast or slow and whether the patient's ideas connect logically. Which mental status exam category is being examined?",
  "choices": {
    "A": "Thought processes",
    "B": "Sensorium",
    "C": "Appearance and behavior",
    "D": "Intellectual functioning"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Thought processes.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient with schizophrenia speaks in a disorganized manner in which ideas have little apparent connection. Which term from the chapter describes this pattern?",
  "choices": {
    "A": "Psychomotor retardation",
    "B": "Loose association or derailment",
    "C": "Ideas of reference",
    "D": "Hallucination"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Loose association or derailment.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient firmly believes that everyone in the neighborhood is secretly trying to harm him. Which type of delusion is this?",
  "choices": {
    "A": "Delusion of grandeur",
    "B": "Delusion of persecution",
    "C": "Idea of reference",
    "D": "Hallucination"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Delusion of persecution.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient believes she possesses extraordinary powers and is all-powerful. Which type of delusion is being described?",
  "choices": {
    "A": "Delusion of persecution",
    "B": "Delusion of grandeur",
    "C": "Idea of reference",
    "D": "Hallucination"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Delusion of grandeur.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient hears two strangers talking across a room and becomes convinced that their conversation is actually about him. Which phenomenon is illustrated?",
  "choices": {
    "A": "Hallucination",
    "B": "Idea of reference",
    "C": "Delusion of grandeur",
    "D": "Psychomotor retardation"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Idea of reference.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient reports seeing people in the room even though the clinician knows that nobody is there. Which phenomenon is being assessed?",
  "choices": {
    "A": "Delusion",
    "B": "Hallucination",
    "C": "Idea of reference",
    "D": "Loose association"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Hallucination.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "During an interview, Brian believes that other men are attracted to him simply because of the way they look at him and believes conversations in another room must be about him. Which mental status finding does this best illustrate?",
  "choices": {
    "A": "Ideas of reference",
    "B": "Psychomotor retardation",
    "C": "Blunted affect",
    "D": "Clear sensorium"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Ideas of reference.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "Brian strongly believes he is homosexual despite the clinician finding no evidence of homosexual arousal patterns, fantasies, or behavior. The chapter describes this strongly held belief as what?",
  "choices": {
    "A": "Hallucination",
    "B": "Delusion",
    "C": "Affect",
    "D": "Mood"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Delusion.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "Brian also displays clearly negative attitudes toward homosexuality. What term does the chapter use for these attitudes?",
  "choices": {
    "A": "Homophobia",
    "B": "Psychosis",
    "C": "Derailment",
    "D": "Grandiosity"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Homophobia.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician observes that a patient has felt sad and hopeless for most of the past month. Which concept refers to the person's predominant feeling state?",
  "choices": {
    "A": "Affect",
    "B": "Mood",
    "C": "Sensorium",
    "D": "Intellectual functioning"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Mood.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient tells a funny story but shows no emotional response. The clinician is evaluating the feeling state accompanying what the patient is saying. Which concept is being assessed?",
  "choices": {
    "A": "Mood",
    "B": "Affect",
    "C": "Sensorium",
    "D": "Thought process"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Affect.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient laughs while describing the recent death of his mother. The clinician considers the patient's emotional response strange and inappropriate for what he is discussing. What term best applies?",
  "choices": {
    "A": "Flat affect",
    "B": "Inappropriate affect",
    "C": "Depressed mood",
    "D": "Psychomotor retardation"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Inappropriate affect.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient discusses both happy and sad events but shows virtually no emotional expression throughout the interview. What finding would the clinician record?",
  "choices": {
    "A": "Delusion of grandeur",
    "B": "Blunted or flat affect",
    "C": "Psychomotor retardation",
    "D": "Loose association"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Blunted or flat affect.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician estimates a patient's intellectual functioning by considering vocabulary, memory, and ability to use abstractions and metaphors. Which category is being examined?",
  "choices": {
    "A": "Sensorium",
    "B": "Intellectual functioning",
    "C": "Mood and affect",
    "D": "Appearance and behavior"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Intellectual functioning.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician asks a patient to identify the date, time, location, his own identity, and the clinician's identity. Which mental status category is being assessed?",
  "choices": {
    "A": "Thought processes",
    "B": "Sensorium",
    "C": "Intellectual functioning",
    "D": "Mood"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Sensorium.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient correctly identifies himself, the clinician, the place, and the time. Which description would the clinician use?",
  "choices": {
    "A": "Oriented times two",
    "B": "Oriented times three",
    "C": "Flat affect",
    "D": "Psychomotor retardation"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Oriented times three.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient has temporary brain dysfunction associated with drugs and cannot correctly identify where he is or what day it is. Which mental status category is most directly affected?",
  "choices": {
    "A": "Sensorium",
    "B": "Mood",
    "C": "Affect",
    "D": "Appearance"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Sensorium.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "During Frank's mental status examination, the clinician notes an anxious mood, appropriate affect, reasonable speech flow and content, normal intelligence, and orientation times three. What did the persistent twitch help reveal?",
  "choices": {
    "A": "A functional relationship with his troublesome thoughts about seizures",
    "B": "A delusion of grandeur",
    "C": "A hallucination",
    "D": "A problem with his sensorium"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — A functional relationship with his troublesome thoughts about seizures.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "Frank originally reports that his major problem is marital distress, but the clinician discovers that intrusive thoughts about seizures are more central to his difficulties. What does this case demonstrate about the clinical interview?",
  "choices": {
    "A": "Patients always know exactly what their primary disorder is",
    "B": "The problem reported by the patient may not be the major issue after assessment",
    "C": "Interviews should never begin with the patient's own concerns",
    "D": "Behavioral assessment is unnecessary"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — The problem reported by the patient may not be the major issue after assessment.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A therapist explains to a patient that information shared during therapy is protected and generally cannot be given to authorities without the patient's expressed consent. What concept is being discussed?",
  "choices": {
    "A": "Privileged communication or confidentiality",
    "B": "Standardization",
    "C": "Predictive validity",
    "D": "Classification"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Privileged communication or confidentiality.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A therapist tells a patient that confidentiality may not hold if the clinician believes imminent harm or danger exists to the patient or someone else. Why is the therapist giving this explanation?",
  "choices": {
    "A": "It describes the exception to confidentiality discussed in the chapter",
    "B": "It establishes predictive validity",
    "C": "It is part of the MMPI",
    "D": "It is required for standardization"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — It describes the exception to confidentiality discussed in the chapter.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician uses an interview with carefully phrased and tested questions designed to make sure important aspects of a disorder are consistently covered, but allows follow-up questions when needed. Which type of interview is this?",
  "choices": {
    "A": "Unstructured interview",
    "B": "Semistructured interview",
    "C": "Projective interview",
    "D": "Informal observation"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Semistructured interview.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist follows a set of carefully developed questions but departs from those questions when a patient's answer raises an important issue that needs follow-up. Why is this interview called \"semistructured\"?",
  "choices": {
    "A": "It contains no systematic format",
    "B": "It combines carefully established questions with opportunities for follow-up",
    "C": "It is administered entirely by a computer",
    "D": "It uses only projective stimuli"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — It combines carefully established questions with opportunities for follow-up.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician complains that a semistructured interview can make the conversation feel less spontaneous and may prevent patients from volunteering information outside the questions. What disadvantage is being described?",
  "choices": {
    "A": "It has no reliability",
    "B": "It can inhibit spontaneous information",
    "C": "It cannot be standardized",
    "D": "It cannot be used for specific disorders"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — It can inhibit spontaneous information.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician suspects obsessive-compulsive disorder and uses the Anxiety Disorders Interview Schedule for DSM-5 to ask about recurring thoughts, impulses, compulsions, persistence, distress, and resistance. What assessment method is being used?",
  "choices": {
    "A": "ADIS-5",
    "B": "MMPI-A",
    "C": "TAT",
    "D": "Bender Visual–Motor Gestalt Test"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — ADIS-5.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "During an OCD interview, a patient rates how often an obsession occurs and how distressing it is, as well as how often he attempts to get rid of it. Which two dimensions are being assessed for the obsession?",
  "choices": {
    "A": "Mood and affect",
    "B": "Persistence–distress and resistance",
    "C": "Frequency and sensorium",
    "D": "Reliability and validity"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Persistence–distress and resistance.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "During the same OCD assessment, the clinician asks how often the patient is driven to perform a particular behavior. What is being rated?",
  "choices": {
    "A": "Compulsion frequency",
    "B": "Persistence–distress",
    "C": "Resistance",
    "D": "Sensorium"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Compulsion frequency.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient reports anxiety-like symptoms. A physical examination reveals hyperthyroidism. According to the chapter, why is this important?",
  "choices": {
    "A": "Hyperthyroidism can produce symptoms that mimic certain anxiety disorders",
    "B": "Hyperthyroidism proves the patient has an anxiety disorder",
    "C": "Physical conditions are irrelevant to psychological assessment",
    "D": "Hyperthyroidism establishes a false negative"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Hyperthyroidism can produce symptoms that mimic certain anxiety disorders.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient presents with symptoms consistent with depression, and the clinician discovers hypothyroidism. Why should the clinician consider this finding?",
  "choices": {
    "A": "Hypothyroidism might produce symptoms consistent with depression",
    "B": "Hypothyroidism automatically confirms major depression",
    "C": "It establishes inter-rater reliability",
    "D": "It rules out all psychological disorders"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Hypothyroidism might produce symptoms consistent with depression.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient experiencing panic attacks does not tell the clinician about cocaine use. The clinician later learns that the panic attacks began during cocaine withdrawal. What issue does this example illustrate?",
  "choices": {
    "A": "Substance use can contribute to psychological symptoms and should be assessed",
    "B": "Psychological symptoms are always caused by psychological factors",
    "C": "Neuroimaging should always come first",
    "D": "Personality inventories are unnecessary"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Substance use can contribute to psychological symptoms and should be assessed.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient has experienced severe depression for five years, but developed hypothyroidism only one year ago. The clinician does not conclude that the hypothyroidism caused the depression. Why?",
  "choices": {
    "A": "The depression began before the medical condition",
    "B": "Medical conditions cannot affect mood",
    "C": "Diagnosis does not consider timing",
    "D": "Hypothyroidism is unrelated to depression"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — The depression began before the medical condition.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "Another patient develops depression at the same time he begins taking sedative drugs, and the depression improves considerably when the drugs are discontinued. What conclusion is most consistent with the chapter?",
  "choices": {
    "A": "The depression may be part of a substance-induced mood disorder",
    "B": "The depression must have existed for years",
    "C": "The patient has a false positive",
    "D": "The symptoms demonstrate standardization"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — The depression may be part of a substance-induced mood disorder.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician observes a child's behavior directly in the home, workplace, school, community, or a simulated setting instead of relying entirely on what the patient reports. What assessment approach is this?",
  "choices": {
    "A": "Behavioral assessment",
    "B": "Projective testing",
    "C": "Intelligence testing",
    "D": "Neuroimaging"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Behavioral assessment.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A 7-year-old child is not able to provide a detailed verbal account of his behavior, so a clinician observes him directly. Why is behavioral assessment particularly useful here?",
  "choices": {
    "A": "Young children may not be old enough or skilled enough to report their problems and experiences",
    "B": "Behavioral assessment is only used for adults",
    "C": "Children cannot be observed directly",
    "D": "Behavioral assessment measures IQ automatically"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Young children may not be old enough or skilled enough to report their problems and experiences.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician wants to understand a child's behavior but cannot realistically observe the child in every natural environment. Instead, the clinician creates a similar clinical setting in which the child can be observed. What is this type of setting called?",
  "choices": {
    "A": "Analogue setting",
    "B": "Nosology",
    "C": "Standardization",
    "D": "Mental status examination"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Analogue setting.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "Researchers place children with autism spectrum disorder in simulated situations such as playing with a sibling or completing a difficult task to determine why they hit themselves. What are they conducting?",
  "choices": {
    "A": "Analogue assessment",
    "B": "Personality inventory",
    "C": "Projective testing",
    "D": "Concurrent validity"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Analogue assessment.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "Researchers hypnotize healthy volunteers so they temporarily believe another force is controlling their arm movement while their brains are scanned. What is this an example of?",
  "choices": {
    "A": "An analogue assessment",
    "B": "A clinical diagnosis",
    "C": "An MMPI validity scale",
    "D": "A personality inventory"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — An analogue assessment.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician records what happened immediately before a child's violent behavior, the behavior itself, and what happened immediately afterward. What framework is being used?",
  "choices": {
    "A": "IQ",
    "B": "ABCs of observation",
    "C": "Multiaxial system",
    "D": "Cultural formulation"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — ABCs of observation.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A mother asks her son to put a glass in the sink. He throws the glass across the room. His mother does not reprimand him or make him clean it up. In the ABC sequence, what is the mother's request?",
  "choices": {
    "A": "Behavior",
    "B": "Consequence",
    "C": "Antecedent",
    "D": "Operational definition"
  },
  "correct": "C",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "This choice does not match the answer given for this question.",
    "C": "Correct — Antecedent.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "In the same situation, the boy throws the glass across the room. Which part of the ABC sequence is this?",
  "choices": {
    "A": "Antecedent",
    "B": "Behavior",
    "C": "Consequence",
    "D": "Standardization"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Behavior.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "After the boy throws the glass, his mother does not reprimand him and he does not have to clean it up. Which part of the ABC sequence is this?",
  "choices": {
    "A": "Antecedent",
    "B": "Behavior",
    "C": "Consequence",
    "D": "Target definition"
  },
  "correct": "C",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "This choice does not match the answer given for this question.",
    "C": "Correct — Consequence.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician wants two observers to agree about what counts as a child's \"attitude.\" Instead of using the vague term, the clinician defines it as \"any time the boy does not comply with his mother's reasonable requests.\" What is this an example of?",
  "choices": {
    "A": "Operational definition",
    "B": "Predictive validity",
    "C": "Standardization sample",
    "D": "Face validity"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Operational definition.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician records exactly when a target behavior occurs, what happened before it, and what happened after it. The goal is to discover patterns that can guide treatment. What type of observation is being emphasized?",
  "choices": {
    "A": "Formal observation",
    "B": "Projective observation",
    "C": "Mental status observation",
    "D": "Neuroimaging"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Formal observation.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A person who is trying to quit smoking records every cigarette, including the time and place it was smoked. What technique is this?",
  "choices": {
    "A": "Self-monitoring",
    "B": "Neuropsychological testing",
    "C": "Classification",
    "D": "Psychophysiological assessment"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Self-monitoring.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A person notices that she smokes much more frequently while talking on the phone because she has been recording the times and places where she smokes. What has self-monitoring helped her identify?",
  "choices": {
    "A": "Situations associated with her behavior",
    "B": "Her IQ",
    "C": "Her DSM-5 diagnosis",
    "D": "Her sensorium"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Situations associated with her behavior.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician asks a patient to record a behavior that occurs privately and cannot easily be observed by others. Why might self-monitoring be especially important?",
  "choices": {
    "A": "The person with the problem is in the best position to observe the behavior throughout the day",
    "B": "Self-monitoring eliminates all forms of reactivity",
    "C": "Private behaviors cannot be assessed",
    "D": "Self-monitoring determines brain structure"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — The person with the problem is in the best position to observe the behavior throughout the day.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient uses a checklist before treatment and then periodically during treatment to track changes in symptoms. Which type of assessment tool is being used?",
  "choices": {
    "A": "Behavior rating scale or checklist",
    "B": "Rorschach inkblot test",
    "C": "CT scan",
    "D": "TAT"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Behavior rating scale or checklist.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician uses the Brief Psychiatric Rating Scale, which rates 18 general areas of concern from 0 to 6. What does a score of 6 represent?",
  "choices": {
    "A": "Not present",
    "B": "Mild",
    "C": "Moderate",
    "D": "Extremely severe"
  },
  "correct": "D",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "Correct — Extremely severe."
  }
},
  {
  "term": "A clinician notices that a patient changes her behavior simply because she knows she is being observed. What phenomenon may be distorting the assessment?",
  "choices": {
    "A": "Reactivity",
    "B": "Validity",
    "C": "Classification",
    "D": "Comorbidity"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Reactivity.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A friend normally says the word \"like\" frequently, but starts saying it less often after learning that someone is recording how often she uses it. What does this demonstrate?",
  "choices": {
    "A": "Reactivity",
    "B": "Predictive validity",
    "C": "Test–retest reliability",
    "D": "Construct validity"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Reactivity.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A student wants to increase how often she participates in class. She begins monitoring and recording each time she speaks. According to the chapter, what is likely to happen?",
  "choices": {
    "A": "The behavior may increase",
    "B": "The behavior must disappear",
    "C": "The behavior becomes a hallucination",
    "D": "The behavior becomes a false positive"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — The behavior may increase.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A smoker records every cigarette smoked each day and gradually begins smoking less. What phenomenon could account for this change?",
  "choices": {
    "A": "Reactivity of self-monitoring",
    "B": "Concurrent validity",
    "C": "Comorbidity",
    "D": "Content validity"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Reactivity of self-monitoring.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A person buys a magazine quiz titled \"Are You a Type Z Personality?\" The questions seem reasonable, but the test was created simply for the magazine article. How does the chapter characterize such tests?",
  "choices": {
    "A": "They are generally reliable diagnostic tests",
    "B": "They are usually entertainment and tell us little",
    "C": "They are standardized psychological assessments",
    "D": "They are projective tests"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — They are usually entertainment and tell us little.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist uses a test to assess psychological disorder. Before relying on its results, the psychologist checks whether the test consistently produces results and actually measures what it claims to measure. Which two qualities are especially important?",
  "choices": {
    "A": "Mood and affect",
    "B": "Reliability and validity",
    "C": "Classification and labeling",
    "D": "Sensorium and intelligence"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Reliability and validity.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician presents a patient with ambiguous pictures and asks the patient to describe what he sees. The theory is that the patient may project personality and unconscious fears onto the stimuli. What type of test is this?",
  "choices": {
    "A": "Personality inventory",
    "B": "Projective test",
    "C": "Intelligence test",
    "D": "Neuropsychological test"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Projective test.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician is using a test based on psychoanalytic theory and therefore recognizes that its use remains controversial. Which type of test is being described?",
  "choices": {
    "A": "Projective test",
    "B": "Intelligence test",
    "C": "Neuropsychological test",
    "D": "Behavior rating scale"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Projective test.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist asks a patient to respond to ten ambiguous inkblot pictures presented one at a time. Which assessment is being used?",
  "choices": {
    "A": "TAT",
    "B": "Rorschach inkblot test",
    "C": "MMPI-2",
    "D": "Bender Visual–Motor Gestalt Test"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Rorschach inkblot test.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist administers the Rorschach differently on two occasions, giving the patient different instructions each time. The patient's responses differ. What assessment principle has been violated?",
  "choices": {
    "A": "Standardized procedures",
    "B": "Predictive validity",
    "C": "Content validity",
    "D": "Familial aggregation"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Standardized procedures.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist wants a standardized method for administering and scoring the Rorschach, including instructions about how the cards are presented and how responses are recorded. Which development from the chapter is relevant?",
  "choices": {
    "A": "Exner's Comprehensive System",
    "B": "Stanford-Binet test",
    "C": "MMPI-A",
    "D": "Halstead-Reitan Battery"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Exner's Comprehensive System.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist uses the Rorschach but recognizes that researchers continue to question whether the Comprehensive System provides a valid assessment technique for psychological disorders. What issue is being acknowledged?",
  "choices": {
    "A": "Controversy surrounding its validity",
    "B": "Its lack of ambiguous stimuli",
    "C": "Its inability to be standardized",
    "D": "Its use only with children"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Controversy surrounding its validity.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient is shown a series of pictures and is instructed to create a dramatic story about each picture. Which test is being used?",
  "choices": {
    "A": "Rorschach inkblot test",
    "B": "Thematic Apperception Test",
    "C": "MMPI",
    "D": "Stanford-Binet"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Thematic Apperception Test.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A test consists of 31 cards, 30 containing pictures and one blank card, although only 20 are typically used in one administration. Which test is this?",
  "choices": {
    "A": "TAT",
    "B": "Rorschach",
    "C": "MMPI-2",
    "D": "Bender test"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — TAT.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist wants to use an apperception test specifically designed for children rather than the standard TAT. Which variation mentioned in the chapter is appropriate?",
  "choices": {
    "A": "CAT",
    "B": "MMPI-A",
    "C": "WAIS-III",
    "D": "WISC-IV"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — CAT.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician wants to use a projective test with an older population and chooses a variation developed for seniors. Which one is described in the chapter?",
  "choices": {
    "A": "CAT",
    "B": "SAT",
    "C": "MMPI-A",
    "D": "WISC-IV"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — SAT.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician uses a projective test as an icebreaker because it helps a patient open up and talk about feelings, but does not rely heavily on the test to make a diagnosis. Why is this use consistent with the chapter?",
  "choices": {
    "A": "Projective tests may be valuable as icebreakers despite limited reliability and validity",
    "B": "Projective tests are always the most valid diagnostic tools",
    "C": "Projective tests eliminate the need for interviews",
    "D": "Projective tests directly identify brain dysfunction"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Projective tests may be valuable as icebreakers despite limited reliability and validity.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist uses a questionnaire in which the patient reports personal traits. What type of assessment is this?",
  "choices": {
    "A": "Personality inventory",
    "B": "Projective test",
    "C": "Neuroimaging",
    "D": "Mental status exam"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Personality inventory.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist argues that the important question about a personality inventory is not whether each question seems sensible on the surface, but what the person's answers predict. Which psychologist's position does this reflect?",
  "choices": {
    "A": "Emil Kraepelin",
    "B": "Paul Meehl",
    "C": "Alfred Binet",
    "D": "Hermann Rorschach"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Paul Meehl.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient reads hundreds of statements and answers each one \"true\" or \"false.\" The clinician evaluates the overall pattern of responses rather than interpreting each answer individually. Which assessment is being used?",
  "choices": {
    "A": "TAT",
    "B": "MMPI",
    "C": "Rorschach",
    "D": "Bender test"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — MMPI.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist wants to use the most widely used personality inventory in the United States discussed in the chapter. Which test should be selected?",
  "choices": {
    "A": "MMPI",
    "B": "TAT",
    "C": "CAT",
    "D": "Stanford-Binet"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — MMPI.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist compares a patient's overall MMPI response pattern with patterns from groups of people with specific disorders. What feature of the MMPI is being used?",
  "choices": {
    "A": "Individual response interpretation",
    "B": "Pattern of responses on standard scales",
    "C": "Projective interpretation",
    "D": "Mental age"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Pattern of responses on standard scales.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient answers an MMPI item in a way that appears designed to make the person look unusually good. Which MMPI feature helps evaluate this possibility?",
  "choices": {
    "A": "Validity scales",
    "B": "Performance scales",
    "C": "Sensorium scale",
    "D": "TAT stories"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Validity scales.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient answers \"false\" to \"Have hurt someone when angry?\" despite other evidence suggesting the opposite. The clinician suspects the patient may be trying to look good. Which MMPI scale is particularly relevant?",
  "choices": {
    "A": "Lie scale",
    "B": "Infrequency scale",
    "C": "Paranoia scale",
    "D": "Mania scale"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Lie scale.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "An MMPI profile shows very high scores on validity scales suggesting that the person made a naive attempt to look good and may have tried to appear as though he had no problems. Which case from the chapter does this resemble?",
  "choices": {
    "A": "Frank",
    "B": "Brian",
    "C": "James S.",
    "D": "Alfred Binet"
  },
  "correct": "C",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "This choice does not match the answer given for this question.",
    "C": "Correct — James S..",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "James S. receives a very high score on the Psychopathic Deviation scale. What personality features does the chapter associate with this finding?",
  "choices": {
    "A": "Aggressiveness and irresponsibility",
    "B": "Relaxation and calmness",
    "C": "Average intelligence and clear sensorium",
    "D": "Vocabulary and verbal reasoning"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Aggressiveness and irresponsibility.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient has a high score on the MMPI Paranoia scale. Which pattern would be most consistent with the chapter?",
  "choices": {
    "A": "Disturbed thinking and ideas of persecution",
    "B": "Timidity in social situations",
    "C": "Dysphoria and possible suicidality",
    "D": "Somatization and possible medical problems"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Disturbed thinking and ideas of persecution.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A patient has a high score on the MMPI Social Introversion scale. Which description best fits?",
  "choices": {
    "A": "Very insecure and uncomfortable in social situations",
    "B": "Manic and emotionally labile",
    "C": "Antisocial and dishonest",
    "D": "Possible hallucinations"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Very insecure and uncomfortable in social situations.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A clinician wants to use a version of the MMPI appropriate for adolescents. Which test is specifically described for this purpose?",
  "choices": {
    "A": "MMPI-A",
    "B": "MMPI-2",
    "C": "WAIS-III",
    "D": "WISC-IV"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — MMPI-A.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist uses the MMPI-2 and explains that its standardization sample reflects the 1980 U.S. Census and includes African Americans and Native Americans. What issue was this revision addressing?",
  "choices": {
    "A": "Problems with the original selective sample and cultural insensitivity",
    "B": "Lack of an IQ score",
    "C": "Lack of projective stimuli",
    "D": "Lack of brain imaging"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Problems with the original selective sample and cultural insensitivity.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "In 1904, a French government wants a test that will identify \"slow learners\" who could benefit from remedial help. Which psychologists are commissioned to develop the test?",
  "choices": {
    "A": "Kraepelin and Pinel",
    "B": "Binet and Simon",
    "C": "Wechsler and Terman",
    "D": "Rorschach and Murray"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Binet and Simon.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "Binet and Simon design tasks involving attention, perception, memory, reasoning, and verbal comprehension because they want to predict who will do well in school. What was the original purpose of intelligence testing described in the chapter?",
  "choices": {
    "A": "To identify unconscious fears",
    "B": "To predict who would do well in school",
    "C": "To diagnose psychotic disorders",
    "D": "To measure brain blood flow"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — To predict who would do well in school.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A revised version of Binet's test is translated for use in the United States in 1916 by Lewis Terman. What does it become known as?",
  "choices": {
    "A": "Stanford-Binet test",
    "B": "Wechsler test",
    "C": "MMPI-2",
    "D": "Bender test"
  },
  "correct": "A",
  "explanations": {
    "A": "Correct — Stanford-Binet test.",
    "B": "This choice does not match the answer given for this question.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A child passes all questions at the 7-year-old level but none at the 8-year-old level. Under the original system, the child's mental age would be what?",
  "choices": {
    "A": "4",
    "B": "7",
    "C": "8",
    "D": "10"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — 7.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist explains that modern IQ scores are based on comparing a person's performance with that of other people of the same age rather than simply dividing mental age by chronological age. What type of IQ is being used?",
  "choices": {
    "A": "Mental-age IQ",
    "B": "Deviation IQ",
    "C": "Predictive IQ",
    "D": "Projective IQ"
  },
  "correct": "B",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "Correct — Deviation IQ.",
    "C": "This choice does not match the answer given for this question.",
    "D": "This choice does not match the answer given for this question."
  }
},
  {
  "term": "A psychologist needs an intelligence test for an adult client. Which Wechsler test described in the chapter is appropriate?",
  "choices": {
    "A": "WISC-IV",
    "B": "WPPSI-III",
    "C": "WAIS-III",
    "D": "CAT"
  },
  "correct": "C",
  "explanations": {
    "A": "This choice does not match the answer given for this question.",
    "B": "This choice does not match the answer given for this question.",
    "C": "Correct — WAIS-III.",
    "D": "This choice does not match the answer given for this question."
  }
},
];

/*
   QUIZ DATA — SET 4 (Page 4: Questions 101–150)
*/
const QUESTIONS_SET_4 = [
  {
    "term": "A psychologist needs an intelligence test for a child. Which test is described for children?",
    "choices": {
      "A": "WAIS-III",
      "B": "WISC-IV",
      "C": "WPPSI-III",
      "D": "MMPI-A",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — WISC-IV.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A psychologist needs an intelligence test for a young child. Which test should be considered?",
    "choices": {
      "A": "WAIS-III",
      "B": "WISC-IV",
      "C": "WPPSI-III",
      "D": "MMPI-2",
    },
    "correct": "C",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "This choice does not match the answer given for this question.",
      "C": "Correct — WPPSI-III.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient completes a Wechsler verbal scale involving vocabulary, factual knowledge, short-term memory, and verbal reasoning. What type of abilities are being assessed?",
    "choices": {
      "A": "Verbal abilities",
      "B": "Performance abilities",
      "C": "Psychophysiological responses",
      "D": "Sensorium",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Verbal abilities.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Another patient completes tasks involving psychomotor abilities, nonverbal reasoning, and learning new relationships. Which type of Wechsler scale is being used?",
    "choices": {
      "A": "Verbal scale",
      "B": "Performance scale",
      "C": "Validity scale",
      "D": "Clinical scale",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Performance scale.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A student receives a low IQ score on an English-language test even though English is not her native language. Why does the chapter caution against immediately concluding that she lacks intelligence?",
    "choices": {
      "A": "A low IQ score can have multiple explanations, including language effects",
      "B": "IQ tests never measure anything useful",
      "C": "IQ scores are always invalid",
      "D": "Language has no relationship to test performance",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — A low IQ score can have multiple explanations, including language effects.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A psychologist says that IQ should not automatically be treated as identical to intelligence because intelligence may also involve adapting to the environment, generating new ideas, and processing information efficiently. What point is being made?",
    "choices": {
      "A": "IQ and intelligence are necessarily identical",
      "B": "IQ does not necessarily represent the totality of intelligence",
      "C": "Intelligence cannot be measured",
      "D": "IQ tests are never reliable",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — IQ does not necessarily represent the totality of intelligence.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician wants to assess receptive and expressive language, attention, concentration, memory, motor skills, perception, learning, and abstraction to make an educated guess about possible brain impairment. What type of testing is appropriate?",
    "choices": {
      "A": "Neuropsychological testing",
      "B": "Projective testing",
      "C": "Personality inventory",
      "D": "TAT",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Neuropsychological testing.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician cannot directly see brain dysfunction through a behavioral task but observes its effects on a person's ability to perform certain tasks. What approach does this describe?",
    "choices": {
      "A": "Neuropsychological testing",
      "B": "Mental status examination",
      "C": "Self-monitoring",
      "D": "Personality inventory",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Neuropsychological testing.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A child is given cards containing lines and shapes and is asked to copy them. Errors are compared with those of children of the same age. Which test is being used?",
    "choices": {
      "A": "Rorschach",
      "B": "Bender Visual–Motor Gestalt Test",
      "C": "TAT",
      "D": "MMPI-A",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Bender Visual–Motor Gestalt Test.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician uses the Bender Visual–Motor Gestalt Test and finds many errors. What can this test help indicate?",
    "choices": {
      "A": "Possible brain dysfunction",
      "B": "A specific location of brain damage",
      "C": "A diagnosis of depression",
      "D": "A person's personality type",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Possible brain dysfunction.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician wants a more elaborate battery capable of assessing several skills in adolescents and adults and potentially making more precise determinations of brain damage. Which battery is described in the chapter?",
    "choices": {
      "A": "Halstead-Reitan Neuropsychological Battery",
      "B": "MMPI-A",
      "C": "CAT",
      "D": "Stanford-Binet",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Halstead-Reitan Neuropsychological Battery.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient completes the Rhythm Test, which involves comparing rhythmic beats to assess sound recognition, attention, and concentration. Which battery includes this test?",
    "choices": {
      "A": "Halstead-Reitan Neuropsychological Battery",
      "B": "Rorschach Comprehensive System",
      "C": "Stanford-Binet",
      "D": "TAT",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Halstead-Reitan Neuropsychological Battery.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A neuropsychological test indicates that a patient has brain damage even though the patient does not actually have the problem. What kind of result is this?",
    "choices": {
      "A": "False negative",
      "B": "False positive",
      "C": "Predictive validity",
      "D": "Inter-rater reliability",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — False positive.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A neuropsychological test fails to detect brain damage that is actually present. What kind of result is this?",
    "choices": {
      "A": "False positive",
      "B": "False negative",
      "C": "Concurrent validity",
      "D": "Standardization",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — False negative.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician uses neuropsychological testing primarily as a screening device and pairs it with other assessments. Why?",
    "choices": {
      "A": "To improve the likelihood that real problems will be found",
      "B": "Because neuropsychological tests have no reliability",
      "C": "Because brain dysfunction cannot be assessed",
      "D": "Because the tests are used only for entertainment",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — To improve the likelihood that real problems will be found.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician wants to directly examine the structure and function of a patient's brain rather than infer brain dysfunction from task performance. Which general method is appropriate?",
    "choices": {
      "A": "Neuroimaging",
      "B": "Self-monitoring",
      "C": "Personality inventory",
      "D": "Clinical interview",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Neuroimaging.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient undergoes a procedure that uses multiple X-ray exposures from different angles and reconstructs images of brain slices. Which procedure is this?",
    "choices": {
      "A": "MRI",
      "B": "CT/CAT scan",
      "C": "PET",
      "D": "SPECT",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — CT/CAT scan.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician suspects a brain tumor and wants to identify a structural abnormality using a relatively noninvasive scan. Which technique described in the chapter is particularly useful for locating brain tumors and injuries?",
    "choices": {
      "A": "CT scan",
      "B": "TAT",
      "C": "MMPI",
      "D": "EEG",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — CT scan.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient undergoes a scan involving a high-strength magnetic field and radio-frequency signals. Which procedure is being performed?",
    "choices": {
      "A": "MRI",
      "B": "CT",
      "C": "PET",
      "D": "EEG",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — MRI.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient is unable to tolerate being enclosed in the narrow tube of a brain scanner because of claustrophobia. Which procedure from the chapter is most likely causing the problem?",
    "choices": {
      "A": "MRI",
      "B": "CT",
      "C": "SPECT",
      "D": "EEG",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — MRI.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A researcher wants to measure actual brain functioning by using a tracer attached to radioactive isotopes that produces \"hot spots\" when blood, oxygen, or glucose rushes to active brain areas. Which method is this?",
    "choices": {
      "A": "MRI",
      "B": "PET",
      "C": "CT",
      "D": "EEG",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — PET.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A medical center wants a brain-functioning procedure similar to PET but less accurate, less expensive, and requiring less sophisticated equipment. Which method fits?",
    "choices": {
      "A": "SPECT",
      "B": "MRI",
      "C": "CT",
      "D": "TAT",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — SPECT.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A research center wants to observe the brain's response from one second to the next because it needs very rapid measurements of brain functioning. Which procedure is especially suited to this purpose?",
    "choices": {
      "A": "fMRI",
      "B": "CT",
      "C": "Rorschach",
      "D": "Bender test",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — fMRI.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A researcher studying psychological disorders wants to use the most common fMRI technique described in the chapter. Which one is it?",
    "choices": {
      "A": "BOLD-fMRI",
      "B": "CAT-fMRI",
      "C": "SPECT-fMRI",
      "D": "EEG-fMRI",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — BOLD-fMRI.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A researcher wants to examine the distribution and density of specific neuroreceptors involving chemicals such as dopamine and serotonin. Which technology described in the chapter is relevant?",
    "choices": {
      "A": "Radiolabeled neuroreceptor ligands",
      "B": "Operational definitions",
      "C": "Behavior rating scales",
      "D": "Semistructured interviews",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Radiolabeled neuroreceptor ligands.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A psychologist measures changes in the nervous system that reflect emotional or psychological events. What type of assessment is this?",
    "choices": {
      "A": "Psychophysiological assessment",
      "B": "Projective testing",
      "C": "Personality inventory",
      "D": "Classification",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Psychophysiological assessment.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient suspected of having periods of memory loss and bizarre, trancelike behavior is given electrodes on the scalp to record electrical brain activity. Which procedure is being used?",
    "choices": {
      "A": "EEG",
      "B": "MRI",
      "C": "PET",
      "D": "CT",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — EEG.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "An EEG records a brief brain response after a person hears a psychologically meaningful stimulus. What is this response called?",
    "choices": {
      "A": "Alpha wave",
      "B": "Delta wave",
      "C": "Event-related potential or evoked potential",
      "D": "Psychomotor retardation",
    },
    "correct": "C",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "This choice does not match the answer given for this question.",
      "C": "Correct — Event-related potential or evoked potential.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A relaxed, healthy adult is awake and shows a regular pattern of electrical activity associated with relaxation and calmness. Which brain waves are being observed?",
    "choices": {
      "A": "Delta waves",
      "B": "Alpha waves",
      "C": "Beta waves",
      "D": "Evoked waves",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Alpha waves.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A person is in the deepest, most relaxed stage of sleep, and the EEG shows slow, irregular activity. Which brain waves are expected?",
    "choices": {
      "A": "Alpha waves",
      "B": "Delta waves",
      "C": "Event-related potentials",
      "D": "Psychomotor waves",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Delta waves.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician measures heart rate, respiration, and electrodermal responding while a patient views stimuli associated with a traumatic experience. What kind of assessment is being used?",
    "choices": {
      "A": "Psychophysiological assessment",
      "B": "Personality inventory",
      "C": "Projective testing",
      "D": "Classification",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Psychophysiological assessment.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A researcher measures sweat gland activity while a participant experiences emotional arousal. Which physiological measure is being used?",
    "choices": {
      "A": "Electrodermal responding",
      "B": "IQ",
      "C": "Sensorium",
      "D": "Mental age",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Electrodermal responding.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient with PTSD is exposed to sights and sounds associated with a traumatic event, and strong physiological reactions occur even though the patient is not fully aware of them. What does this demonstrate?",
    "choices": {
      "A": "Psychophysiological responses can reflect emotional or psychological events",
      "B": "Physiological responses cannot be measured",
      "C": "PTSD can only be diagnosed with an MMPI",
      "D": "Neuropsychological tests directly measure emotions",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Psychophysiological responses can reflect emotional or psychological events.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician measures penile circumference in response to erotic stimuli as part of an assessment of sexual dysfunction. What type of assessment is being used?",
    "choices": {
      "A": "Psychophysiological assessment",
      "B": "Neuropsychological assessment",
      "C": "Projective testing",
      "D": "Mental status examination",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Psychophysiological assessment.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient is shown continuously updated blood pressure readings on a meter and attempts to learn how to regulate the response. What treatment approach is being described?",
    "choices": {
      "A": "Biofeedback",
      "B": "Self-monitoring",
      "C": "Projective testing",
      "D": "Standardization",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Biofeedback.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician wants to understand what is unique about a patient's personality, cultural background, and circumstances so treatment can be tailored specifically to that person. Which strategy is being used?",
    "choices": {
      "A": "Nomothetic strategy",
      "B": "Idiographic strategy",
      "C": "Classical categorical approach",
      "D": "Dimensional approach",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Idiographic strategy.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician wants to determine which general class of problems a patient's symptoms belong to so information from other cases can be applied. Which strategy is this?",
    "choices": {
      "A": "Idiographic strategy",
      "B": "Nomothetic strategy",
      "C": "Projective strategy",
      "D": "Psychophysiological strategy",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Nomothetic strategy.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician identifies a specific psychological disorder, such as a mood disorder, in a patient. What is the clinician doing?",
    "choices": {
      "A": "Making a diagnosis",
      "B": "Conducting self-monitoring",
      "C": "Performing neuroimaging",
      "D": "Establishing a false positive",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Making a diagnosis.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A scientist constructs groups of behaviors based on shared attributes and relations for scientific purposes. Which term best describes this scientific classification?",
    "choices": {
      "A": "Taxonomy",
      "B": "Nomenclature",
      "C": "Sensorium",
      "D": "Reactivity",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Taxonomy.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A researcher applies a taxonomic system specifically to psychological or medical phenomena. Which term is most appropriate?",
    "choices": {
      "A": "Taxonomy",
      "B": "Nosology",
      "C": "Nomenclature",
      "D": "Diagnosis",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Nosology.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A classification system contains labels such as anxiety disorders and mood disorders. The researcher wants the term for the names or labels that make up the system. What term applies?",
    "choices": {
      "A": "Nomenclature",
      "B": "Nosology",
      "C": "Taxonomy",
      "D": "Idiographic strategy",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Nomenclature.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician in the United States consults the current classification system to identify a specific psychological disorder. Which system does the chapter identify as the most widely used?",
    "choices": {
      "A": "ICD-8",
      "B": "DSM-II",
      "C": "DSM-5",
      "D": "MMPI-2",
    },
    "correct": "C",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "This choice does not match the answer given for this question.",
      "C": "Correct — DSM-5.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician treats psychological disorders as completely distinct categories and assumes each disorder has its own underlying set of causative factors that does not overlap with other disorders. Which approach is this?",
    "choices": {
      "A": "Dimensional approach",
      "B": "Prototypical approach",
      "C": "Classical categorical approach",
      "D": "Idiographic strategy",
    },
    "correct": "C",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "This choice does not match the answer given for this question.",
      "C": "Correct — Classical categorical approach.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician rates a patient's anxiety as 10, depression as 5, and mania as 2 to create a profile of emotional functioning. Which approach is being used?",
    "choices": {
      "A": "Classical categorical approach",
      "B": "Dimensional approach",
      "C": "Prototypical approach",
      "D": "Nomothetic strategy",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Dimensional approach.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A diagnostic system identifies essential characteristics needed for classification but allows variation in other, nonessential characteristics. Which approach is being described?",
    "choices": {
      "A": "Classical categorical approach",
      "B": "Dimensional approach",
      "C": "Prototypical approach",
      "D": "Idiographic strategy",
    },
    "correct": "C",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "This choice does not match the answer given for this question.",
      "C": "Correct — Prototypical approach.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Two patients both qualify for a major depressive episode. One has significant weight loss, insomnia, psychomotor agitation, and loss of energy, while another has fatigue, worthlessness, concentration problems, and suicidal thoughts. They look different but meet enough criteria to fit the same category. Which approach does this illustrate?",
    "choices": {
      "A": "Classical categorical approach",
      "B": "Prototypical approach",
      "C": "Self-monitoring",
      "D": "Psychophysiological assessment",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Prototypical approach.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician argues that a patient can qualify for a disorder by meeting enough characteristics of the disorder even though the patient does not display every possible symptom. Which approach is most consistent?",
    "choices": {
      "A": "Prototypical approach",
      "B": "Classical categorical approach",
      "C": "Idiographic strategy",
      "D": "Standardization",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Prototypical approach.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Two clinicians interview the same patient separately on the same day and identify essentially the same set of behaviors and emotions. What does this demonstrate about the diagnostic system?",
    "choices": {
      "A": "Reliability",
      "B": "Labeling",
      "C": "Face validity",
      "D": "Reactivity",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Reliability.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Two clinicians repeatedly disagree about whether a patient meets criteria for a personality disorder. What does this suggest?",
    "choices": {
      "A": "The classification criteria may lack reliability",
      "B": "The criteria have perfect predictive validity",
      "C": "The diagnosis has perfect content validity",
      "D": "The patient must have a false positive",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — The classification criteria may lack reliability.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A diagnostic category contains symptoms that consistently occur together and can be distinguished from the symptoms of other categories. Which type of diagnostic validity does this support?",
    "choices": {
      "A": "Construct validity",
      "B": "Predictive validity",
      "C": "Concurrent validity",
      "D": "Face validity",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Construct validity.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
];

/* ============================================================
   QUIZ DATA — SET 5 (Page 5: Questions 151–200)
   ------------------------------------------------------------
   Added from the user's supplied questions. Existing Sets 1–4 unchanged.
   ============================================================ */

const QUESTIONS_SET_5 = [
  {
    "term": "A diagnostic category for depression produces predictions about the likely course of the disorder and the likely effects of different treatments. Which type of validity is particularly relevant?",
    "choices": {
      "A": "Content validity",
      "B": "Predictive validity",
      "C": "Inter-rater reliability",
      "D": "Face validity",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Predictive validity.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A new diagnostic category is created, and experts determine that its criteria accurately reflect what they believe the disorder should represent rather than another disorder. Which type of validity is this?",
    "choices": {
      "A": "Content validity",
      "B": "Test–retest reliability",
      "C": "Predictive validity",
      "D": "Construct validity",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Content validity.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A psychiatrist classifies psychological disorders from a biological point of view and uses the term \"dementia praecox\" for what is now known as schizophrenia. Which historical figure is associated with this?",
    "choices": {
      "A": "Robert Spitzer",
      "B": "Emil Kraepelin",
      "C": "Paul Meehl",
      "D": "Alfred Binet",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Emil Kraepelin.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A historical classification system uses the term \"dementia praecox\" because the psychiatrist believed the disorder reflected premature deterioration of the brain. What later disorder does this term refer to?",
    "choices": {
      "A": "Bipolar disorder",
      "B": "Schizophrenia",
      "C": "Depression",
      "D": "Panic disorder",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Schizophrenia.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A historical psychiatrist describes bipolar disorder using the term \"manic depressive psychosis.\" Who is associated with this classification?",
    "choices": {
      "A": "Kraepelin",
      "B": "Rorschach",
      "C": "Terman",
      "D": "Spitzer",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Kraepelin.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "The World Health Organization adds a section classifying mental disorders to the sixth edition of the International Classification of Diseases. In what year did this occur?",
    "choices": {
      "A": "1904",
      "B": "1948",
      "C": "1952",
      "D": "1980",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — 1948.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "The American Psychiatric Association publishes the first Diagnostic and Statistical Manual. Which edition and year are described?",
    "choices": {
      "A": "DSM-I, 1952",
      "B": "DSM-II, 1968",
      "C": "DSM-III, 1980",
      "D": "DSM-IV, 1994",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — DSM-I, 1952.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "In the 1960s and 1970s, different countries use different classification systems, and two clinicians can examine the same patient but reach different conclusions. What major problem does this illustrate?",
    "choices": {
      "A": "Lack of reliability and precision",
      "B": "Excessive predictive validity",
      "C": "Excessive standardization",
      "D": "Excessive use of dimensional assessment",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Lack of reliability and precision.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A new DSM edition avoids relying on psychoanalytic or biological theories about the causes of disorders and instead emphasizes precise descriptions of disorders as they appear to clinicians. Which DSM edition introduced this approach?",
    "choices": {
      "A": "DSM-I",
      "B": "DSM-II",
      "C": "DSM-III",
      "D": "DSM-IV",
    },
    "correct": "C",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "This choice does not match the answer given for this question.",
      "C": "Correct — DSM-III.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Instead of placing phobia under the broad category of \"neurosis,\" a classification system gives phobia its own category under anxiety disorders. Which historical change does this illustrate?",
    "choices": {
      "A": "DSM-III's descriptive approach",
      "B": "DSM-IV's multiaxial format",
      "C": "DSM-5's cultural formulation",
      "D": "DSM-II's biological approach",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — DSM-III's descriptive approach.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician uses a classification system that rates the disorder itself on Axis I, personality disorders on Axis II, physical disorders on Axis III, psychosocial stress on Axis IV, and adaptive functioning on Axis V. Which system is this?",
    "choices": {
      "A": "DSM-II",
      "B": "DSM-III/DSM-III-R multiaxial system",
      "C": "DSM-5",
      "D": "ICD-10",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — DSM-III/DSM-III-R multiaxial system.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician uses a diagnostic system that emphasizes the whole individual rather than focusing only on the disorder. Which feature of DSM-III helped accomplish this?",
    "choices": {
      "A": "Multiaxial format",
      "B": "Projective testing",
      "C": "IQ testing",
      "D": "BOLD-fMRI",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Multiaxial format.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A diagnostic system becomes popular partly because it uses precise descriptions and avoids presuming a particular cause for a diagnosis. Which DSM is being described?",
    "choices": {
      "A": "DSM-I",
      "B": "DSM-II",
      "C": "DSM-III",
      "D": "DSM-5",
    },
    "correct": "C",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "This choice does not match the answer given for this question.",
      "C": "Correct — DSM-III.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A DSM task force wants to make the DSM compatible with ICD-10 and decides that changes should be based as much as possible on scientific data rather than expert consensus. Which DSM is being developed?",
    "choices": {
      "A": "DSM-II",
      "B": "DSM-III",
      "C": "DSM-IV",
      "D": "DSM-5",
    },
    "correct": "C",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "This choice does not match the answer given for this question.",
      "C": "Correct — DSM-IV.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A new DSM removes the distinction between organically based and psychologically based disorders because disorders involving brain pathology are also affected by psychological and social influences. Which DSM introduced this major change?",
    "choices": {
      "A": "DSM-I",
      "B": "DSM-II",
      "C": "DSM-IV",
      "D": "DSM-5",
    },
    "correct": "C",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "This choice does not match the answer given for this question.",
      "C": "Correct — DSM-IV.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "In DSM-IV, a clinician needs to record psychosocial and environmental problems that might affect a disorder. Which Axis is used?",
    "choices": {
      "A": "Axis I",
      "B": "Axis II",
      "C": "Axis IV",
      "D": "Axis V",
    },
    "correct": "C",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "This choice does not match the answer given for this question.",
      "C": "Correct — Axis IV.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician is using the DSM-IV and needs to record the patient's current level of adaptive functioning. Which Axis is used?",
    "choices": {
      "A": "Axis I",
      "B": "Axis II",
      "C": "Axis IV",
      "D": "Axis V",
    },
    "correct": "D",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "Correct — Axis V.",
    }
  },
  {
    "term": "A student is asked what happened to the DSM multiaxial system in DSM-5. Which answer is correct?",
    "choices": {
      "A": "It was expanded from five axes to ten",
      "B": "It was removed",
      "C": "It was returned to DSM-I",
      "D": "It was replaced by the MMPI",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — It was removed.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician using DSM-5 wants to note psychosocial or contextual factors and the extent of disability without using the former Axis IV and Axis V system. What does the chapter say?",
    "choices": {
      "A": "These can be separately noted without the old multiaxial system",
      "B": "They cannot be recorded",
      "C": "They must be recorded using Axis IV and V",
      "D": "They are replaced by IQ scores",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — These can be separately noted without the old multiaxial system.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician rates the severity, intensity, frequency, or duration of a disorder using a dimensional measure while still giving a categorical diagnosis. What DSM-5 development does this illustrate?",
    "choices": {
      "A": "Expanded dimensional assessment",
      "B": "Return to the classical categorical approach",
      "C": "Elimination of diagnosis",
      "D": "Replacement of classification with projective testing",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Expanded dimensional assessment.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient is diagnosed with bipolar disorder, but the clinician also gives a dimensional rating of the patient's degree of anxiety because anxiety may predict a poorer treatment response. What DSM-5 feature is being used?",
    "choices": {
      "A": "Cross-cutting dimensional symptom measure",
      "B": "Axis II",
      "C": "Classical categorical approach",
      "D": "Rorschach scoring",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Cross-cutting dimensional symptom measure.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A DSM-5 measure assesses symptoms such as anxiety, depression, and sleep problems across different disorders rather than belonging to one specific disorder. What is this an example of?",
    "choices": {
      "A": "Cross-cutting dimensional symptom measures",
      "B": "Personality inventories",
      "C": "Projective tests",
      "D": "Mental status examinations",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Cross-cutting dimensional symptom measures.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient has all of the symptoms of obsessive-compulsive disorder but finds them only mildly annoying, and they do not interfere substantially with functioning. According to the chapter, what should happen?",
    "choices": {
      "A": "The patient automatically receives the diagnosis",
      "B": "The patient does not meet the threshold for a psychological disorder",
      "C": "The patient must receive a psychophysiological assessment",
      "D": "The patient must receive an MMPI",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — The patient does not meet the threshold for a psychological disorder.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician determines that symptoms must cause clinically significant distress or impairment in social, occupational, or other important areas of functioning. Why is this important?",
    "choices": {
      "A": "Impairment is a crucial determination in making a diagnosis",
      "B": "Impairment is irrelevant to diagnosis",
      "C": "It establishes concurrent validity",
      "D": "It determines the patient's IQ",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Impairment is a crucial determination in making a diagnosis.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinic rates impairment from 0 to 8, with 0 meaning no impairment and 8 meaning severely disturbing or disabling. A patient's score is 3, even though all symptoms are present. How would the chapter describe this case?",
    "choices": {
      "A": "Above threshold",
      "B": "Subthreshold",
      "C": "False positive",
      "D": "Psychotic",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Subthreshold.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Using the same clinic's scale, a patient's disorder receives a severity rating of 5. What does this indicate according to the example?",
    "choices": {
      "A": "It is below the threshold",
      "B": "It meets the stated severity threshold",
      "C": "It cannot be diagnosed",
      "D": "It demonstrates a false negative",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — It meets the stated severity threshold.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician considers a patient's cultural background, including values, knowledge, practices, social group membership, and the patient's perspective on the disorder. What DSM-5 feature is being used?",
    "choices": {
      "A": "Cultural formulation",
      "B": "Test–retest reliability",
      "C": "Neuroimaging",
      "D": "Self-monitoring",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Cultural formulation.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A recent immigrant describes psychological problems using terms from the person's old country and is still having difficulty mastering English. Why should the clinician consider these factors?",
    "choices": {
      "A": "They are part of the cultural formulation described in the DSM-5",
      "B": "They determine the patient's IQ automatically",
      "C": "They establish a false positive",
      "D": "They eliminate the need for diagnosis",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — They are part of the cultural formulation described in the DSM-5.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient receives two psychological diagnoses at the same time. What term describes the identification of two or more disorders in one individual at the same time?",
    "choices": {
      "A": "Comorbidity",
      "B": "Standardization",
      "C": "Nomenclature",
      "D": "Reactivity",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Comorbidity.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A researcher notices that many diagnostic categories have fuzzy boundaries and that people can meet criteria for more than one disorder. Which problem is being illustrated?",
    "choices": {
      "A": "Comorbidity",
      "B": "Test–retest reliability",
      "C": "Standardization",
      "D": "Face validity",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Comorbidity.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician argues that a classification system could achieve high reliability simply by diagnosing depression whenever a patient says, \"I feel depressed,\" but admits that this would not necessarily mean the diagnosis is valid. What distinction is being illustrated?",
    "choices": {
      "A": "Reliability versus validity",
      "B": "Mood versus affect",
      "C": "Taxonomy versus nosology",
      "D": "Idiographic versus nomothetic",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Reliability versus validity.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician sees a diagnostic category as though it were a real, fixed \"thing\" rather than a convenient system for organizing observations. What problem is this?",
    "choices": {
      "A": "Reactivity",
      "B": "Reification",
      "C": "Standardization",
      "D": "Self-monitoring",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Reification.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient's symptoms fall near the fuzzy border between two diagnostic categories. The clinician recognizes that forcing the patient neatly into one category may be inappropriate. Which concern from the chapter does this reflect?",
    "choices": {
      "A": "Categories have fuzzy borders and should not always be treated as fixed",
      "B": "Every patient must fit one category perfectly",
      "C": "Reliability is irrelevant",
      "D": "Diagnosis should be based only on IQ",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Categories have fuzzy borders and should not always be treated as fixed.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician diagnoses a person with a psychological disorder, and the patient begins thinking that the diagnostic label describes his entire identity. What problem is being illustrated?",
    "choices": {
      "A": "Labeling",
      "B": "Predictive validity",
      "C": "Standardization",
      "D": "Test–retest reliability",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Labeling.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician says, \"This person has a disorder,\" rather than treating the person as though the disorder defines the entire individual. Why is this distinction important?",
    "choices": {
      "A": "A diagnostic label identifies patterns of behavior rather than describing the total person",
      "B": "Diagnoses should never be used",
      "C": "Labels are always invalid",
      "D": "Psychological disorders are not patterns of behavior",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — A diagnostic label identifies patterns of behavior rather than describing the total person.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A person with a psychological disorder begins to experience lower self-esteem because of negative meanings associated with the diagnostic label. What issue does this illustrate?",
    "choices": {
      "A": "Stigmatization",
      "B": "Standardization",
      "C": "Predictive validity",
      "D": "Concurrent validity",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Stigmatization.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician gives a diagnosis compassionately and explains that the label identifies a pattern of behavior rather than defining the person's entire identity. According to the chapter, what may this help prevent?",
    "choices": {
      "A": "Negative meanings associated with labeling",
      "B": "Test–retest reliability",
      "C": "Neuropsychological impairment",
      "D": "False negatives",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Negative meanings associated with labeling.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Patients in primary care repeatedly report feeling anxious and depressed, but their symptoms are not frequent or severe enough to meet criteria for existing anxiety or mood disorders. What potential diagnostic category was considered?",
    "choices": {
      "A": "Mixed anxiety-depression",
      "B": "PMDD",
      "C": "Schizophrenia",
      "D": "Intellectual disability",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Mixed anxiety-depression.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A diagnostic committee wants to avoid classifying people with only minor symptoms as having a disorder. It therefore establishes a minimum number of criteria that must be met. What is this minimum called?",
    "choices": {
      "A": "Threshold",
      "B": "Prototype",
      "C": "Norm",
      "D": "Axis",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Threshold.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Researchers conduct a study at seven sites around the world to determine whether people presenting with mixed anxiety and depressive symptoms can be distinguished from people with existing anxiety or mood disorders. What type of assessment was central to the study?",
    "choices": {
      "A": "Semistructured interviews",
      "B": "Rorschach testing",
      "C": "EEG",
      "D": "MMPI",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Semistructured interviews.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Researchers find that people with mixed anxiety and depressive symptoms could be distinguished from people with existing anxiety or mood disorders based on their symptoms. Because the category appeared to capture both anxiety and depression, what type of validity did it demonstrate?",
    "choices": {
      "A": "Content validity",
      "B": "Test–retest reliability",
      "C": "Predictive validity",
      "D": "Face validity",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Content validity.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Researchers have evidence supporting some aspects of a new mixed anxiety-depression category but do not yet know enough about its course, treatment response, family aggregation, reliability, or predictive validity. What does the chapter say happened?",
    "choices": {
      "A": "It was immediately accepted as an official diagnosis",
      "B": "It was placed in the DSM-IV appendix for further study",
      "C": "It was removed from all research",
      "D": "It became a DSM-III diagnosis",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — It was placed in the DSM-IV appendix for further study.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Later studies find that mixed anxiety-depression is relatively rare without a current or previous anxiety or mood disorder, the symptoms do not last long, and the condition is difficult to identify reliably. What happened in DSM-5?",
    "choices": {
      "A": "It became a major new diagnosis",
      "B": "Further consideration of it as a separate diagnosis was eliminated",
      "C": "It became a personality disorder",
      "D": "It replaced anxiety disorders",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Further consideration of it as a separate diagnosis was eliminated.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A group of women experience severe and sometimes incapacitating emotional reactions associated with the late luteal phase of their menstrual period. What controversial diagnostic category is being considered?",
    "choices": {
      "A": "Mixed anxiety-depression",
      "B": "Premenstrual dysphoric disorder",
      "C": "Schizoid personality disorder",
      "D": "Intellectual disability",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — Premenstrual dysphoric disorder.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Opponents of a proposed diagnostic category argue that there is little scientific information and worry that a normal endocrinological stage could be stigmatized as a psychiatric disorder. What issue are they raising?",
    "choices": {
      "A": "Bias and stigmatization",
      "B": "Test–retest reliability",
      "C": "Predictive validity",
      "D": "False negative",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Bias and stigmatization.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A diagnostic committee wants to distinguish severe premenstrual emotional symptoms from the less severe symptoms of PMS. What name was initially used for the condition?",
    "choices": {
      "A": "Late luteal phase dysphoric disorder",
      "B": "Mixed anxiety-depression",
      "C": "Premenstrual syndrome",
      "D": "Mood spectrum disorder",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Late luteal phase dysphoric disorder.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Research shows that PMS symptoms occur in a much larger percentage of women, while the more severe and incapacitating symptoms associated with LLPDD occur in only a small proportion. Why was this distinction important?",
    "choices": {
      "A": "It helped distinguish LLPDD from the less severe PMS symptoms",
      "B": "It demonstrated that PMS and LLPDD were identical",
      "C": "It eliminated the need for diagnostic criteria",
      "D": "It established IQ validity",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — It helped distinguish LLPDD from the less severe PMS symptoms.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Researchers discover that the name \"late luteal phase dysphoric disorder\" is not entirely accurate because symptoms may not be exclusively related to the endocrine state of the late luteal phase. What change follows?",
    "choices": {
      "A": "The condition is renamed PMDD",
      "B": "The condition becomes schizophrenia",
      "C": "The condition is renamed mixed anxiety-depression",
      "D": "The condition is eliminated",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — The condition is renamed PMDD.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician wants to distinguish PMDD from premenstrual exacerbations of another disorder. The clinician carefully examines the nature and timing of symptoms and notes that PMDD symptoms must be absent or only mildly present postmenstrually. What issue is being addressed?",
    "choices": {
      "A": "Distinguishing PMDD from other disorders",
      "B": "Establishing IQ",
      "C": "Measuring sensorium",
      "D": "Establishing inter-rater reliability",
    },
    "correct": "A",
    "explanations": {
      "A": "Correct — Distinguishing PMDD from other disorders.",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Research provides sufficient support for a condition involving disabling premenstrual symptoms, and it is ultimately included as a distinct psychological disorder in DSM-5. Which condition is this?",
    "choices": {
      "A": "Mixed anxiety-depression",
      "B": "PMDD",
      "C": "Dementia praecox",
      "D": "Psychopathic deviation",
    },
    "correct": "B",
    "explanations": {
      "A": "This choice does not match the answer given for this question.",
      "B": "Correct — PMDD.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
];


/* ============================================================
   QUIZ DATA — SET 6 (Page 6: Questions 201–220)
   ------------------------------------------------------------
   Added from the user's supplied questions. Existing Sets 1–5 unchanged.
   ============================================================ */

const QUESTIONS_SET_6 = [
  {
    "term": "Researchers argue that discrete diagnostic categories have problems because of comorbidity, fuzzy boundaries, and the absence of specific biological markers. What alternative are many researchers increasingly considering?",
    "choices": {
      "A": "Greater use of dimensional strategies",
      "B": "Complete elimination of assessment",
      "C": "Exclusive reliance on classical categories",
      "D": "Exclusive use of projective tests",
    },
    "correct": "A",
    "explanations": {
      "A": "Greater use of dimensional strategies",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Researchers describe groups of disorders that share basic biological or psychological qualities or dimensions as a \"spectrum.\" Which example from the chapter illustrates this approach?",
    "choices": {
      "A": "Autism spectrum disorder",
      "B": "MMPI-A",
      "C": "Psychopathic deviation",
      "D": "Mental status examination",
    },
    "correct": "A",
    "explanations": {
      "A": "Autism spectrum disorder",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A classification system combines Asperger's syndrome with autistic disorder into a broader category based on shared characteristics. Which concept does this illustrate?",
    "choices": {
      "A": "Spectrum",
      "B": "False positive",
      "C": "Standardization",
      "D": "Self-monitoring",
    },
    "correct": "A",
    "explanations": {
      "A": "Spectrum",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Researchers studying personality disorders conclude that these disorders may represent maladaptive or extreme versions of common personality traits rather than being completely separate from normal personality. Which approach does this support?",
    "choices": {
      "A": "Dimensional approach",
      "B": "Classical categorical approach",
      "C": "Projective approach",
      "D": "Multiaxial approach",
    },
    "correct": "A",
    "explanations": {
      "A": "Dimensional approach",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Researchers studying anxiety and depression argue that the two have more in common than previously thought and may be represented as points on a continuum of negative affect. What classification approach does this support?",
    "choices": {
      "A": "Dimensional or spectrum approach",
      "B": "Classical categorical approach",
      "C": "Multiaxial approach",
      "D": "Projective approach",
    },
    "correct": "A",
    "explanations": {
      "A": "Dimensional or spectrum approach",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A test produces nearly identical results when different clinicians administer it, but the test does not actually measure the psychological characteristic it claims to measure. Which statement is most accurate?",
    "choices": {
      "A": "It is reliable but not valid",
      "B": "It is valid but not reliable",
      "C": "It is standardized but not reliable",
      "D": "It has predictive validity",
    },
    "correct": "A",
    "explanations": {
      "A": "It is reliable but not valid",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "Two clinicians agree completely about a patient's diagnosis, but later evidence shows that the diagnosis does not actually describe the patient's disorder. What quality did the diagnosis demonstrate?",
    "choices": {
      "A": "Reliability",
      "B": "Validity",
      "C": "Predictive validity",
      "D": "Content validity",
    },
    "correct": "A",
    "explanations": {
      "A": "Reliability",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician wants to know what is unique about Frank so treatment can be individualized, while also wanting to know how Frank resembles people who have had similar problems. Which pair of strategies is needed?",
    "choices": {
      "A": "Idiographic and nomothetic",
      "B": "Classical and projective",
      "C": "Reliability and validity",
      "D": "Mood and affect",
    },
    "correct": "A",
    "explanations": {
      "A": "Idiographic and nomothetic",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician observes a child throwing objects, records what happened immediately before and afterward, and defines the target behavior in observable and measurable terms. Which combination is being used?",
    "choices": {
      "A": "ABC observation and operational definition",
      "B": "Rorschach and TAT",
      "C": "IQ and neuroimaging",
      "D": "DSM-5 and MMPI",
    },
    "correct": "A",
    "explanations": {
      "A": "ABC observation and operational definition",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient reports anxiety, but a physical examination reveals hyperthyroidism that began before the anxiety symptoms. Which assessment principle should the clinician apply?",
    "choices": {
      "A": "Consider whether the medical condition is causal rather than simply coexisting",
      "B": "Ignore the medical condition",
      "C": "Diagnose an anxiety disorder immediately",
      "D": "Use only a projective test",
    },
    "correct": "A",
    "explanations": {
      "A": "Consider whether the medical condition is causal rather than simply coexisting",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A psychologist wants to assess unconscious thoughts using ambiguous stimuli. Another psychologist wants to assess personal traits using a self-report questionnaire. Which pair correctly matches the methods?",
    "choices": {
      "A": "Projective test; personality inventory",
      "B": "Personality inventory; projective test",
      "C": "Neuroimaging; MMPI",
      "D": "IQ test; TAT",
    },
    "correct": "A",
    "explanations": {
      "A": "Projective test; personality inventory",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A psychologist wants to infer possible brain dysfunction from the effects of brain dysfunction on task performance. Another psychologist wants to directly examine brain structure and function. Which pair is correct?",
    "choices": {
      "A": "Neuropsychological testing; neuroimaging",
      "B": "Neuroimaging; neuropsychological testing",
      "C": "Personality inventory; EEG",
      "D": "TAT; MMPI",
    },
    "correct": "A",
    "explanations": {
      "A": "Neuropsychological testing; neuroimaging",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A patient has the symptoms associated with a disorder but they are so mild that they do not substantially interfere with functioning. What concept is most important in deciding whether the patient meets criteria?",
    "choices": {
      "A": "Impairment threshold",
      "B": "Face validity",
      "C": "Inter-rater reliability",
      "D": "Nomenclature",
    },
    "correct": "A",
    "explanations": {
      "A": "Impairment threshold",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician uses DSM-5 but also rates the severity of anxiety separately because the symptom may affect treatment response. Which statement best describes what is happening?",
    "choices": {
      "A": "A dimensional assessment is being added to a categorical diagnosis",
      "B": "The categorical diagnosis has been eliminated",
      "C": "The clinician is using only the classical categorical approach",
      "D": "The clinician is performing a projective test",
    },
    "correct": "A",
    "explanations": {
      "A": "A dimensional assessment is being added to a categorical diagnosis",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A diagnostic category is difficult to distinguish from other disorders, has weak reliability, and does not clearly predict treatment response or future course. Which major issue is most directly being demonstrated?",
    "choices": {
      "A": "Problems with diagnostic validity and reliability",
      "B": "Excessive standardization",
      "C": "Strong content validity",
      "D": "Strong predictive validity",
    },
    "correct": "A",
    "explanations": {
      "A": "Problems with diagnostic validity and reliability",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician says, \"This person is a schizophrenic,\" and begins treating every behavior as evidence of the person's diagnosis. What danger described in the chapter does this demonstrate?",
    "choices": {
      "A": "Labeling the person rather than identifying a pattern of behavior",
      "B": "Test–retest reliability",
      "C": "Standardization",
      "D": "Predictive validity",
    },
    "correct": "A",
    "explanations": {
      "A": "Labeling the person rather than identifying a pattern of behavior",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A researcher argues that future diagnostic systems should integrate biological, psychological, social, and cultural information instead of assuming that specific DSM categories will each correspond to one specific brain circuit. Which direction from the chapter does this reflect?",
    "choices": {
      "A": "Dimensional or spectrum approaches",
      "B": "Classical categorical approaches",
      "C": "Exclusive biological classification",
      "D": "Elimination of assessment",
    },
    "correct": "A",
    "explanations": {
      "A": "Dimensional or spectrum approaches",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician wants the classification system to remain scientifically useful but recognizes that diagnostic categories may change as new research reveals better ways to organize psychological disorders. Which idea from the chapter best fits?",
    "choices": {
      "A": "Diagnostic categories are not written in stone",
      "B": "Diagnostic categories are permanent",
      "C": "Reliability makes categories permanently correct",
      "D": "Classification eliminates the need for research",
    },
    "correct": "A",
    "explanations": {
      "A": "Diagnostic categories are not written in stone",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A clinician wants to understand both a patient's unique circumstances and the general research knowledge available about similar cases. Why are both idiographic and nomothetic strategies considered important?",
    "choices": {
      "A": "One provides individualized understanding while the other allows general information to be applied",
      "B": "Both are methods of neuroimaging",
      "C": "Both eliminate diagnosis",
      "D": "One measures IQ and the other measures EEG",
    },
    "correct": "A",
    "explanations": {
      "A": "One provides individualized understanding while the other allows general information to be applied",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
  {
    "term": "A student is asked to summarize what makes the DSM-5 different from a purely classical categorical system. Which answer best matches the chapter?",
    "choices": {
      "A": "DSM-5 uses a prototypical approach while incorporating dimensional information",
      "B": "DSM-5 uses only projective tests",
      "C": "DSM-5 completely abandoned categories",
      "D": "DSM-5 relies entirely on biological causes",
    },
    "correct": "A",
    "explanations": {
      "A": "DSM-5 uses a prototypical approach while incorporating dimensional information",
      "B": "This choice does not match the answer given for this question.",
      "C": "This choice does not match the answer given for this question.",
      "D": "This choice does not match the answer given for this question.",
    }
  },
];

const SETS = {
  1: { label: "Questions 1–80", questions: QUESTIONS_SET_1 },
  2: { label: "Questions 81–130", questions: QUESTIONS_SET_2 },
  3: { label: "Page 3: Questions 1–100", questions: QUESTIONS_SET_3 },
  4: { label: "Page 4: Questions 101–150", questions: QUESTIONS_SET_4 },
  5: { label: "Page 5: Questions 151–200", questions: QUESTIONS_SET_5 },
  6: { label: "Page 6: Questions 201–220", questions: QUESTIONS_SET_6 },
};

export default function App() {
  const [activeSet, setActiveSet] = useState(1);
  // Keep separate answer state per set so switching pages doesn't lose progress
  const [answersBySet, setAnswersBySet] = useState({ 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {} });

  const QUESTIONS = SETS[activeSet].questions;
  const answers = answersBySet[activeSet];
  const questionNumberOffset = activeSet === 2 ? 81 : activeSet === 4 ? 101 : activeSet === 5 ? 151 : 1;

  const handleSelect = (qIndex, letter) => {
    if (answers[qIndex]) return; // lock in first answer
    setAnswersBySet((prev) => ({
      ...prev,
      [activeSet]: { ...prev[activeSet], [qIndex]: letter },
    }));
  };

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(
    ([qIndex, letter]) => QUESTIONS[qIndex].correct === letter
  ).length;

  return (
    <div className="page">
      <style>{`
        .page {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          max-width: 720px;
          margin: 0 auto;
          padding: 24px 16px 64px;
          color: #1f2430;
          background: #fafafa;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .header h1 {
          font-size: 1.6rem;
          margin: 0 0 4px;
        }
        .subtitle {
          color: #6b7280;
          margin: 0 0 16px;
        }
        .setSwitcher {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }
        .setButton {
          padding: 10px 18px;
          border-radius: 999px;
          border: 2px solid #d1d5db;
          background: #fff;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          color: #374151;
          transition: all 0.15s ease;
        }
        .setButton:hover {
          border-color: #9ca3af;
        }
        .setButtonActive {
          background: #4f46e5;
          border-color: #4f46e5;
          color: #fff;
        }
        .setButton:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
        .scoreBar {
          text-align: center;
          background: #eef2ff;
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 0.95rem;
          margin-bottom: 8px;
        }
        .emptySet {
          text-align: center;
          background: #fff;
          border: 2px dashed #d1d5db;
          border-radius: 14px;
          padding: 48px 24px;
          color: #6b7280;
        }
        .emptySet h2 {
          margin-top: 0;
          color: #374151;
        }
        .card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          padding: 18px;
          margin-bottom: 16px;
        }
        .correctCard {
          border-color: #86efac;
        }
        .wrongCard {
          border-color: #fca5a5;
        }
        .qNumber {
          font-size: 0.8rem;
          font-weight: 700;
          color: #6366f1;
          margin-bottom: 6px;
        }
        .term {
          font-weight: 600;
          margin: 0 0 14px;
          line-height: 1.4;
        }
        .choices {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .choice {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          text-align: left;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          background: #f9fafb;
          cursor: pointer;
          font-size: 0.95rem;
        }
        .choice:hover:not(:disabled) {
          background: #f1f5f9;
        }
        .letter {
          font-weight: 700;
          color: #4f46e5;
          flex-shrink: 0;
        }
        .choiceCorrect {
          background: #dcfce7;
          border-color: #86efac;
        }
        .choiceWrong {
          background: #fee2e2;
          border-color: #fca5a5;
        }
        .choiceDim {
          opacity: 0.6;
        }
        .feedback {
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid #e5e7eb;
        }
        .feedbackCorrect {
          color: #166534;
          margin: 0 0 6px;
        }
        .feedbackWrong {
          color: #991b1b;
          margin: 0 0 6px;
        }
        .feedbackRight {
          color: #166534;
          margin: 0;
        }
        .footer {
          text-align: center;
          color: #6b7280;
          margin-top: 24px;
        }
      `}</style>

      <header className="header">
        <h1>Quiz for my wifies 📖</h1>
        <p className="subtitle">Goodluck minamahal kong napakaganda</p>

        <div className="setSwitcher">
          {Object.entries(SETS).map(([key, set]) => (
            <button
              key={key}
              className={
                "setButton" + (activeSet === Number(key) ? " setButtonActive" : "")
              }
              onClick={() => setActiveSet(Number(key))}
            >
              {set.label}
            </button>
          ))}
        </div>

        {QUESTIONS.length > 0 && answeredCount > 0 && (
          <div className="scoreBar">
            Score: <strong>{correctCount}</strong> / {answeredCount} answered
            {" "}(<span>{QUESTIONS.length} total</span>)
          </div>
        )}
      </header>

      <main>
        {QUESTIONS.length === 0 ? (
          <div className="emptySet">
            <h2>Page 3 questions coming soon</h2>
            <p>Paste them in and this page will fill up automatically.</p>
          </div>
        ) : (
          QUESTIONS.map((q, qIndex) => {
            const selected = answers[qIndex];
            const isAnswered = Boolean(selected);
            const isCorrect = selected === q.correct;

            return (
              <section
                className={
                  "card" +
                  (isAnswered ? (isCorrect ? " correctCard" : " wrongCard") : "")
                }
                key={qIndex}
              >
                <div className="qNumber">Question {qIndex + questionNumberOffset}</div>
                <p className="term">{q.term}</p>

                <div className="choices">
                  {["A", "B", "C", "D"].map((letter) => {
                    const isThisCorrect = letter === q.correct;
                    const isThisSelected = letter === selected;

                    let choiceClass = "choice";
                    if (isAnswered) {
                      if (isThisCorrect) choiceClass += " choiceCorrect";
                      else if (isThisSelected) choiceClass += " choiceWrong";
                      else choiceClass += " choiceDim";
                    }

                    return (
                      <button
                        key={letter}
                        className={choiceClass}
                        onClick={() => handleSelect(qIndex, letter)}
                        disabled={isAnswered}
                      >
                        <span className="letter">{letter}</span>
                        <span className="choiceText">{q.choices[letter]}</span>
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className="feedback">
                    {isCorrect ? (
                      <p className="feedbackCorrect">
                        ✅ Correct! <strong>{selected}</strong> —{" "}
                        {q.explanations[selected]}
                      </p>
                    ) : (
                      <>
                        <p className="feedbackWrong">
                          ❌ <strong>Your answer: {selected}</strong> — {q.choices[selected]}
                        </p>
                        <p className="feedbackRight">
                          ✅ <strong>Correct answer: {q.correct}</strong> — {q.choices[q.correct]}
                        </p>
                        <p className="feedbackExplain">
                          <strong>Why:</strong> {q.explanations[q.correct]}
                        </p>
                      </>
                    )}
                  </div>
                )}
              </section>
            );
          })
        )}
      </main>

      <footer className="footer">
        {QUESTIONS.length > 0 && (
          <p>
            {answeredCount === QUESTIONS.length
              ? `All done! Final score: ${correctCount} / ${QUESTIONS.length} 🎉`
              : `${QUESTIONS.length - answeredCount} question(s) left.`}
          </p>
        )}
      </footer>
    </div>
  );
}