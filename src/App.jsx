import { useState } from "react";

/* ============================================================
   QUIZ DATA
   ------------------------------------------------------------
   To add more questions, just copy one of the objects below
   and paste it into the QUESTIONS array (don't forget a comma
   between objects). Keep the same shape:

   {
     term: "The word/term as it appeared in the book",
     choices: {
       A: "meaning of choice A",
       B: "meaning of choice B",
       C: "meaning of choice C",
       D: "meaning of choice D",
     },
     correct: "A", // the letter that is correct
     explanations: {
       A: "what this choice actually means / why right or wrong",
       B: "...",
       C: "...",
       D: "...",
     },
   }
   ============================================================ */

const QUESTIONS = [
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
];

export default function App() {
  const [answers, setAnswers] = useState({});

  const handleSelect = (qIndex, letter) => {
    if (answers[qIndex]) return; // lock in first answer
    setAnswers((prev) => ({ ...prev, [qIndex]: letter }));
  };

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(
    ([qIndex, letter]) => QUESTIONS[qIndex].correct === letter
  ).length;

  return (
    <div className="page">
      <header className="header">
        <h1>Quiz for my wifies 📖</h1>
        <p className="subtitle">
          Goodluck minamahal kong napakaganda
        </p>
        {answeredCount > 0 && (
          <div className="scoreBar">
            Score: <strong>{correctCount}</strong> / {answeredCount} answered
            {" "}(<span>{QUESTIONS.length} total</span>)
          </div>
        )}
      </header>

      <main>
        {QUESTIONS.map((q, qIndex) => {
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
        })}
      </main>

      <footer className="footer">
        <p>
          {answeredCount === QUESTIONS.length
            ? `All done! Final score: ${correctCount} / ${QUESTIONS.length} 🎉`
            : `${QUESTIONS.length - answeredCount} question(s) left.`}
        </p>
      </footer>
    </div>
  );
}
