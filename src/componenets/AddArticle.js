import React, { useContext, useState } from 'react';
import CogContext from '../context/CogContext';

export default function AddArticle() {
    // eslint-disable-next-line
    const context = useContext(CogContext);
    // eslint-disable-next-line
    const [data, setData] = useState({
        article: "",
        mcqs: [],
        answer: 1
    })

    function Reset() {
        document.querySelector(".add-article-form").reset()
    }

    function isValid(article, opts, ans) {
        if (article.length > 2000) return false;
        else return true;
    }

    function handelSubmit(e) {
        e.preventDefault();
        var article = document.querySelector(".add-article-form>textarea").value
        var opts = document.querySelectorAll(".add-article-form input")
        var ans = document.querySelector(".add-article-form select").value;

        if (isValid(article, opts, ans)) {
            setData({ article: article, mcqs: [opts[0].value, opts[1].value, opts[2].value, opts[3].value], answer: ans })
        }
        else {
            console.log("invalid inputs");
        }
    }
    return (
        <div>
            <div class="modal fade" id="Add-article-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Article</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="POST" onSubmit={handelSubmit} className="form-floating add-article-form m-3">
                                <textarea className="form-control my-3" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                <label htmlFor="floatingTextarea2">Article(max 2000 characters)</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-default">option 1</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-default">option 2</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-default">option 3</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="inputGroup-sizing-default">option 4</span>
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputGroupSelect02">Correct options</label>
                                    <select className="form-select" id="inputGroupSelect02">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type='button' className='btn btn-primary mx-3' onClick={Reset}>Reset</button>
                            <input type="submit" className='btn btn-primary' value="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
