import React, { useEffect, useState } from 'react';
import Mcqs from './Mcqs';

export default function McqScreen(props) {
  const [ans, setans] = useState([-1, -1, -1, -1, -1]);

  // Define the MCQs as an array of objects
  const mcqsData = [
    {
      question: "What is the main concern about Indian Prime Minister Narendra Modi's economic policies?",
      options: [
        "Their inconsistency with the country's long tradition of secularism.",
        "Their impact on the environment.",
        "Their failure to revitalize the nation's economy.", // Correct Answer
        "Their focus on infrastructure development."
      ],
      answer: 2 // Index of the correct answer
    },
    {
      question: "What does Joe Biden's invitation to Narendra Modi for a state visit signify?",
      options: [
        "The importance of India in U.S. strategy in Africa.",
        "The importance of India in U.S. strategy in Asia.", // Correct Answer
        "The strengthening of U.S.-India military ties.",
        "The need for joint climate change initiatives."
      ],
      answer: 1 // Index of the correct answer
    },
    {
      question: "Which model led to Narendra Modi's rise to power in 2014?",
      options: [
        "The Gujarat Development Model.",
        "The Indian Economic Model.",
        "The \"Make in India\" Model.",
        "The \"Gujarat model.\"" // Correct Answer
      ],
      answer: 3 // Index of the correct answer
    },
    {
      question: "What was the main goal of Modi's \"Make in India\" initiative?",
      options: [
        "To attract foreign investments in Indian infrastructure.",
        "To promote India's tourism industry.",
        "To boost manufacturing's contribution to GDP.", // Correct Answer
        "To create a digital economy in India."
      ],
      answer: 2 // Index of the correct answer
    },
    {
      question: "What raised doubts about the sustainability of India's economic development?",
      options: [
        "The lack of foreign investments.",
        "The challenges in various economic sectors.", // Correct Answer
        "The government's focus on social welfare programs.",
        "The global economic recession."
      ],
      answer: 1 // Index of the correct answer
    }
  ]; 

  useEffect(() => {
    if (!props.timeup) {
      document.querySelector("#mcq-btn").click();
    }
  }, [props.timeup]);

  function updateAns(newAns) {
    setans(newAns);
  }

  function onSubmit() {
    console.log(ans);
    document.querySelector("#close-btn").click();
  }

  return (
    <div>
      <button
        type="button"
        id="mcq-btn"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        mcq-btn
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                MCQs
              </h5>
              <button id="close-btn" type="button" className="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-start">
              {/* Pass the mcqsData as a prop to Mcqs */}
              <Mcqs mcqsData={mcqsData} updateAns={updateAns} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
