const Question = ({ question, onAnswerSelect }) => {
  return (
    <div>
      <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-3">
        {question.category}
      </span>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(option)}
            className="w-full p-3 text-left bg-gray-50 hover:bg-purple-50 border border-gray-200 rounded-lg transition-all duration-200 hover:border-purple-300 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
          >
            <span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-xs font-medium text-purple-600 bg-purple-100 rounded-full">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;