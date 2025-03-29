import React, { useState } from 'react';

function QuestionDevelopment() {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState('');
  const [selectedHypothesis, setSelectedHypothesis] = useState('');
  const [selectedAspect, setSelectedAspect] = useState('');
  const [hypotheses, setHypotheses] = useState(['Hypothesis 1', 'Hypothesis 2']);
  const [aspects, setAspects] = useState(['Aspect 1', 'Aspect 2']);
  const [mergedQuestions, setMergedQuestions] = useState([]);
  const [sections, setSections] = useState({});

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleHypothesisChange = (e) => {
    setSelectedHypothesis(e.target.value);
  };

  const handleAspectChange = (e) => {
    setSelectedAspect(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      const newQuestion = {
        text: question,
        hypothesis: selectedHypothesis,
        aspect: selectedAspect,
      };
      setQuestions([...questions, newQuestion]);
      setQuestion('');
      setSelectedHypothesis('');
      setSelectedAspect('');
    }
  };

  const handleMerge = () => {
    const groupedQuestions = questions.reduce((acc, question) => {
      if (!acc[question.aspect]) {
        acc[question.aspect] = [];
      }
      acc[question.aspect].push(question);
      return acc;
    }, {});

    const merged = Object.values(groupedQuestions).map((group) => {
      return group.map((q) => q.text).join(' ');
    });

    setMergedQuestions(merged);
  };

  const handleSectionGrouping = () => {
    const groupedSections = questions.reduce((acc, question) => {
      if (!acc[question.aspect]) {
        acc[question.aspect] = [];
      }
      acc[question.aspect].push(question.text);
      return acc;
    }, {});

    setSections(groupedSections);
  };

  const calculateCoverage = () => {
    const totalAspects = aspects.length;
    const coveredAspects = new Set(questions.map((q) => q.aspect)).size;
    return (coveredAspects / totalAspects) * 100;
  };

  return (
    <div className="section">
      <h2>Question Development</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={handleInputChange}
          placeholder="Enter question"
        />
        <select value={selectedHypothesis} onChange={handleHypothesisChange}>
          <option value="">Select Hypothesis</option>
          {hypotheses.map((hyp) => (
            <option key={hyp} value={hyp}>
              {hyp}
            </option>
          ))}
        </select>
        <select value={selectedAspect} onChange={handleAspectChange}>
          <option value="">Select Aspect</option>
          {aspects.map((asp) => (
            <option key={asp} value={asp}>
              {asp}
            </option>
          ))}
        </select>
        <button type="submit">Add Question</button>
      </form>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            {q.text} (Hypothesis: {q.hypothesis}, Aspect: {q.aspect})
          </li>
        ))}
      </ul>
      <button onClick={handleMerge}>Merge Questions</button>
      <button onClick={handleSectionGrouping}>Group into Sections</button>
      <h3>Merged Questions</h3>
      <ul>
        {mergedQuestions.map((mq, index) => (
          <li key={index}>{mq}</li>
        ))}
      </ul>
      <h3>Sections</h3>
      {Object.entries(sections).map(([aspect, questions], index) => (
        <div key={index}>
          <h4>{aspect}</h4>
          <ul>
            {questions.map((q, idx) => (
              <li key={idx}>{q}</li>
            ))}
          </ul>
        </div>
      ))}
      <h3>Coverage: {calculateCoverage().toFixed(2)}%</h3>
    </div>
  );
}

export default QuestionDevelopment;