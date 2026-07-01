import { useState } from 'react';
import { Check, X, RefreshCw, ChevronRight, Trophy } from 'lucide-react';
import { type Quiz, type QuizQuestion } from '@/data/institute/quizzes';
import { Button } from '@/components/InstituteUI';

interface Props {
  quiz: Quiz;
  onPass: (score: number) => void;
  onContinue: () => void;
}

type Phase = 'intro' | 'question' | 'review' | 'result';

export default function KnowledgeTest({ quiz, onPass, onContinue }: Props) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quiz.questions.length).fill(null));
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const question: QuizQuestion = quiz.questions[current];
  const totalQ = quiz.questions.length;
  const isLast = current === totalQ - 1;

  function selectOption(idx: number) {
    if (revealed) return;
    setSelected(idx);
  }

  function confirmAnswer() {
    if (selected === null || revealed) return;
    const updated = [...answers];
    updated[current] = selected;
    setAnswers(updated);
    setRevealed(true);
  }

  function nextQuestion() {
    if (isLast) {
      setPhase('result');
      const correct = answers.filter((a, i) => a === quiz.questions[i].correctIndex).length;
      const pct = Math.round((correct / totalQ) * 100);
      if (pct >= quiz.passingScore) onPass(pct);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  function restart() {
    setCurrent(0);
    setAnswers(Array(totalQ).fill(null));
    setSelected(null);
    setRevealed(false);
    setPhase('question');
  }

  const correctCount = answers.filter((a, i) => a === quiz.questions[i].correctIndex).length;
  const scorePercent = Math.round((correctCount / totalQ) * 100);
  const passed = scorePercent >= quiz.passingScore;

  if (phase === 'intro') {
    return (
      <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#00FFE1]/10 border border-[#00FFE1]/20 flex items-center justify-center mx-auto mb-5">
          <Trophy size={24} className="text-[#00FFE1]" />
        </div>
        <h3 className="text-[#2C1F0E] font-bold text-xl mb-2">Module Knowledge Test</h3>
        <p className="text-[#4A3828] text-sm mb-6">
          {totalQ} questions · {quiz.estimatedMinutes} min · Pass at {quiz.passingScore}% or higher
        </p>
        <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 mb-6 text-left">
          <ul className="space-y-2 text-sm text-[#4A3828]">
            <li className="flex items-start gap-2"><Check size={14} className="text-[#00FFE1] mt-0.5 shrink-0" />Select one answer per question</li>
            <li className="flex items-start gap-2"><Check size={14} className="text-[#00FFE1] mt-0.5 shrink-0" />You'll see the explanation after each answer</li>
            <li className="flex items-start gap-2"><Check size={14} className="text-[#00FFE1] mt-0.5 shrink-0" />Retakes allowed until you pass</li>
            <li className="flex items-start gap-2"><Check size={14} className="text-[#00FFE1] mt-0.5 shrink-0" />Score saved to your profile on pass</li>
          </ul>
        </div>
        <Button variant="primary" size="md" onClick={() => setPhase('question')}>
          Start Knowledge Test
        </Button>
      </div>
    );
  }

  if (phase === 'result') {
    return (
      <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 text-center">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 border ${
            passed
              ? 'bg-[#00FFE1]/10 border-[#00FFE1]/20'
              : 'bg-red-500/10 border-red-500/20'
          }`}
        >
          {passed
            ? <Trophy size={28} className="text-[#00FFE1]" />
            : <X size={28} className="text-red-400" />
          }
        </div>

        <h3 className="text-[#2C1F0E] font-bold text-2xl mb-1">
          {scorePercent}%
        </h3>
        <p className={`font-semibold mb-1 ${passed ? 'text-[#00FFE1]' : 'text-red-400'}`}>
          {passed ? 'Passed' : 'Not yet — retake to advance'}
        </p>
        <p className="text-[#6E5E34] text-sm mb-8">
          {correctCount} of {totalQ} correct · Passing score: {quiz.passingScore}%
        </p>

        {/* Per-question summary */}
        <div className="space-y-2 mb-8 text-left">
          {quiz.questions.map((q, i) => {
            const wasCorrect = answers[i] === q.correctIndex;
            return (
              <div
                key={q.id}
                className={`flex items-start gap-3 rounded-lg p-3 text-sm border ${
                  wasCorrect
                    ? 'bg-[#00FFE1]/[0.04] border-[#00FFE1]/15 text-[#4A3828]'
                    : 'bg-red-500/[0.04] border-red-500/15 text-[#4A3828]'
                }`}
              >
                {wasCorrect
                  ? <Check size={14} className="text-[#00FFE1] mt-0.5 shrink-0" />
                  : <X size={14} className="text-red-400 mt-0.5 shrink-0" />
                }
                <span className="line-clamp-2">{q.question}</span>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 justify-center">
          {!passed && (
            <Button variant="ghost" size="md" onClick={restart}>
              <RefreshCw size={14} className="mr-1.5" /> Retake
            </Button>
          )}
          {passed && (
            <Button variant="primary" size="md" onClick={onContinue}>
              Continue to Next Module <ChevronRight size={14} className="ml-1" />
            </Button>
          )}
        </div>
      </div>
    );
  }

  // Question phase
  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs text-[#6E5E34]">Question {current + 1} of {totalQ}</span>
        <div className="flex gap-1">
          {quiz.questions.map((_, i) => (
            <div
              key={i}
              className={`h-1 w-8 rounded-full transition-colors ${
                i < current ? 'bg-[#00FFE1]/60' : i === current ? 'bg-[#00FFE1]' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-[#6E5E34]">{quiz.passingScore}% to pass</span>
      </div>

      {/* Question */}
      <h3 className="text-[#2C1F0E] font-semibold text-base leading-relaxed mb-6">
        {question.question}
      </h3>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((opt, idx) => {
          const isSelected = selected === idx;
          const isCorrect = question.correctIndex === idx;
          const wasSelected = answers[current] === idx;

          let stateClass = 'border-white/[0.07] bg-white/[0.02] text-[#4A3828] hover:border-white/[0.14] hover:bg-white/[0.04]';
          if (revealed) {
            if (isCorrect) stateClass = 'border-[#00FFE1]/40 bg-[#00FFE1]/[0.06] text-[#2C1F0E]';
            else if (wasSelected && !isCorrect) stateClass = 'border-red-500/40 bg-red-500/[0.06] text-red-300';
            else stateClass = 'border-white/[0.04] bg-white/[0.01] text-[#6E5E34]';
          } else if (isSelected) {
            stateClass = 'border-[#00FFE1]/40 bg-[#00FFE1]/[0.06] text-[#2C1F0E]';
          }

          return (
            <button
              key={idx}
              onClick={() => selectOption(idx)}
              disabled={revealed}
              className={`w-full text-left rounded-xl border p-4 text-sm transition-all duration-150 flex items-start gap-3 ${stateClass} ${revealed ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <span className={`flex-none w-6 h-6 rounded-lg border text-xs flex items-center justify-center font-bold mt-0.5 ${
                revealed
                  ? isCorrect ? 'border-[#00FFE1]/40 bg-[#00FFE1]/10 text-[#00FFE1]'
                  : wasSelected ? 'border-red-500/40 bg-red-500/10 text-red-400' : 'border-white/10 text-[#7A6A55]'
                  : isSelected ? 'border-[#00FFE1]/40 bg-[#00FFE1]/10 text-[#00FFE1]' : 'border-white/15 text-[#6E5E34]'
              }`}>
                {revealed && isCorrect ? <Check size={11} /> : revealed && wasSelected && !isCorrect ? <X size={11} /> : String.fromCharCode(65 + idx)}
              </span>
              <span className="leading-relaxed">{opt}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation (after reveal) */}
      {revealed && (
        <div className={`rounded-xl p-4 mb-5 text-sm border ${
          answers[current] === question.correctIndex
            ? 'bg-[#00FFE1]/[0.04] border-[#00FFE1]/15 text-[#4A3828]'
            : 'bg-red-500/[0.04] border-red-500/15 text-[#4A3828]'
        }`}>
          <p className="font-semibold text-[#2C1F0E]/90 mb-1">{answers[current] === question.correctIndex ? 'Correct.' : 'Incorrect.'}</p>
          <p>{question.explanation}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 justify-end">
        {!revealed ? (
          <Button
            variant="primary"
            size="md"
            onClick={confirmAnswer}
            disabled={selected === null}
          >
            Confirm Answer
          </Button>
        ) : (
          <Button variant="primary" size="md" onClick={nextQuestion}>
            {isLast ? 'See Results' : 'Next Question'} <ChevronRight size={14} className="ml-1" />
          </Button>
        )}
      </div>
    </div>
  );
}
