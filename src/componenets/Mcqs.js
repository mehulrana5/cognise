import React, { useState, useEffect } from 'react';

export default function Mcqs(props) {
  const [ans, setans] = useState({});

  function handelOnChange(e) {
    setans({ ...ans, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    props.updateAns(ans);
  }, [ans]);
  
  return (
    <div>
      <div className="container">
        <div className="container que">
          <form action="" className="container" style={{ margin: '0', width: '100%' }}>
            <div id="questions" className="list-group list-group-numbered my-2">
              {props.mcqsData.map((mcq, index) => (
                <div key={index} className="list-group-item">
                  {mcq.question}
                  <div onChange={handelOnChange}>
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
