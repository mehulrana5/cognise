import React, { useContext, useState } from 'react';
import CogContext from '../context/CogContext';
export default function AddArticle() {
  const context = useContext(CogContext);

  const [formData, setFormData] = useState({
    title: "",
    passage: "",
    mcqdata: [{
      question: "",
      options: [],
      answer: 0
    }],
  });

  function Reset() {
    setFormData({
      title: "",
      passage: "",
      mcqdata: [{
        question: "",
        options: [],
        answer: 0
      }],
    });
  }

  function isValid() {
    // console.log("checking validity");
    // Add your validation logic here, if needed
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    isValid();
    context.AddArticle(formData);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name === "answer" ? parseInt(value) : value // Convert answer to integer
    }));
  };

  return (
    <div>
      <div className="modal fade" id="Add-article-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Article</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="POST" onSubmit={handleSubmit} className="form-floating add-article-form m-3">
                <textarea className="form-control my-3" placeholder="Leave a comment here" id="article-txt-area" style={{ height: "100px" }} name="passage" value={formData.article} onChange={handleChange}></textarea>
                <label htmlFor="article-txt-area">Article (max 2000 characters)</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="ques">Title</span>
                  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="ques" name="title" value={formData.question} onChange={handleChange} />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="ques">Question</span>
                  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="ques" name="question" value={formData.question} onChange={handleChange} />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="in1">option 1</span>
                  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="in1" name="option1" value={formData.option1} onChange={handleChange} />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="in2">option 2</span>
                  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="in2" name="option2" value={formData.option2} onChange={handleChange} />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="in3">option 3</span>
                  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="in3" name="option3" value={formData.option3} onChange={handleChange} />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="in4">option 4</span>
                  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="in4" name="option4" value={formData.option4} onChange={handleChange} />
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="inputGroupSelect02">Correct options</label>
                  <select className="form-select" id="inputGroupSelect02" name="answer" value={formData.answer} onChange={handleChange}>
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type='button' className='btn btn-primary mx-3' onClick={Reset}>Reset</button>
              <input type="submit" className='btn btn-primary' value="Submit" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
