import { useState } from 'react';
import Question from './components/Question';
import Result from './components/Result';
import { questions } from './data/questions';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerSelect = (selectedOption) => {
    const isCorrect = questions[currentQuestionIndex].correctAnswer === selectedOption;
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setSelectedAnswers([...selectedAnswers, {
      questionId: questions[currentQuestionIndex].id,
      selectedOption,
      isCorrect
    }]);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => setCurrentQuestionIndex(currentQuestionIndex + 1), 300);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswers([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className={`w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${showResult ? 'max-w-2xl' : ''}`}>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-purple-600 mb-2">Quiz Time</h1>
          <div className="h-1 bg-purple-100 rounded-full mb-6">
            <div 
              className="h-full bg-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestionIndex + (showResult ? 1 : 0)) / questions.length * 100)}%` }}
            ></div>
          </div>
          
          {!showResult ? (
            <div className="animate-fadeIn">
              <Question 
                question={questions[currentQuestionIndex]} 
                onAnswerSelect={handleAnswerSelect}
              />
            </div>
          ) : (
            <div className="animate-fadeIn">
              <Result 
                score={score} 
                totalQuestions={questions.length} 
                selectedAnswers={selectedAnswers}
                questions={questions}
                onRestart={restartQuiz}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;