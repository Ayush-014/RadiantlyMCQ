const Result = ({ score, totalQuestions, selectedAnswers, questions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getResultColor = () => {
    if (percentage >= 80) return 'text-green-500';
    if (percentage >= 50) return 'text-blue-500';
    return 'text-orange-500';
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className={`text-5xl font-bold ${getResultColor()} mb-2`}>
          {score}/{totalQuestions}
        </div>
        <div className="text-gray-600 mb-4">
          You scored {percentage}% correct answers
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${getResultColor().replace('text', 'bg')}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Your answers:</h3>
        <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
          {selectedAnswers.map((answer, index) => {
            const question = questions.find(q => q.id === answer.questionId);
            return (
              <div 
                key={index}
                className={`p-3 rounded-lg border ${answer.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
              >
                <p className="font-medium text-gray-800">{question.question}</p>
                <p className={`text-sm ${answer.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  Your answer: {answer.selectedOption} {answer.isCorrect ? '✓' : '✗'}
                </p>
                {!answer.isCorrect && (
                  <p className="text-sm text-green-600">Correct: {question.correctAnswer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={onRestart}
        className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        Try Again
      </button>
    </div>
  );
};

export default Result;