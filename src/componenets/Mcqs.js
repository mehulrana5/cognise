import React, {useContext, useState } from 'react';
import CogContext from '../context/CogContext';

export default function Mcqs() {

  const context = useContext(CogContext);
  
  const len = context.mcqsData.length;

  // Create a state variable to store the answers
  const [answers, setAnswers] = useState(Array(len).fill(-1));

  function handleChange(e) {
    const questionIndex = parseInt(e.target.name.replace('ans', '')) - 1;
    const optionIndex = parseInt(e.target.value) - 1;

    // updatedAnswers is a new array that has the old values of answers array
    const updatedAnswers = [...answers];

    updatedAnswers[questionIndex] = optionIndex;
    setAnswers(updatedAnswers);

    // Update the context with the answers array
    context.setOptions(updatedAnswers);
  }
  
  return (
    <div>
      <div className="container">
        <div className="container que"> 
          <form id="mcq-form" action="" className="container">
            <div id="questions" className="list-group list-group-numbered my-2">
              {context.mcqsData.map((mcq, index) => (
                <div key={index} className="list-group-item">
                  {mcq.question}
                  <div onChange={handleChange}>
                    {mcq.options.map((option, optionIndex) => (
                      <label key={optionIndex} className="list-group-item">
                        <input
                          className="form-check-input me-1"
                          name={`ans${index + 1}`}
                          type="radio"
                          value={optionIndex + 1}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
