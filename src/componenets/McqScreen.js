import React, { useContext, useEffect, useState } from 'react';
import Mcqs from './Mcqs';
import CogContext from '../context/CogContext';

export default function McqScreen() {
  // const [ans, setans] = useState([-1, -1, -1, -1, -1]);
  const [display, setDisplay] = useState("none");

  const context = useContext(CogContext);

  // Define the MCQs as an array of objects

  useEffect(() => {
    if (!context.timeup) {
      setDisplay("");
    }
    else {
      setDisplay("none")
    }
    // document.querySelector("#mcq-btn").click();
  }, [context.timeup]);

  function onSubmit() {
    document.querySelector("#close-btn").click();
    var c=window.confirm("confirm?");
    if(c){
      context.setTimeup(1);
      context.setSubmit(1);
    }
  }
  return (
    <div>
      <button
        type="button"
        id="mcq-btn"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ display: display }}
      >
        <h4>MCQS</h4>
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
              <Mcqs/>
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
