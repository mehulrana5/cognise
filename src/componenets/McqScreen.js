import React, { useEffect } from 'react';
import Mcqs from './Mcqs';

export default function McqScreen(props) {
    useEffect(()=>{
        if(!props.timeup){
            document.querySelector("#mcq-btn").click()
        }
    },[props.timeup])
    return (
        <div>
            <button type="button" id='mcq-btn' class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">mcq-btn</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">MCQs</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-start">
                            <Mcqs/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
