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

const SETS = {
  1: { label: "Questions 1–80", questions: QUESTIONS_SET_1 },
  2: { label: "Questions 81–130", questions: QUESTIONS_SET_2 },
};

export default function App() {
  const [activeSet, setActiveSet] = useState(1);
  // Keep separate answer state per set so switching pages doesn't lose progress
  const [answersBySet, setAnswersBySet] = useState({ 1: {}, 2: {} });

  const QUESTIONS = SETS[activeSet].questions;
  const answers = answersBySet[activeSet];

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
            <h2>Questions 81–130 coming soon</h2>
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
                <div className="qNumber">Question {qIndex + 1}</div>
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
                          ❌ You picked <strong>{selected}</strong> —{" "}
                          {q.explanations[selected]}
                        </p>
                        <p className="feedbackRight">
                          ✅ Correct answer: <strong>{q.correct}</strong> —{" "}
                          {q.explanations[q.correct]}
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