import React, { useState, useContext } from 'react';
import CogContext from '../context/CogContext';


export default function Modes() {

    const [btn, setBtn] = useState(true);

    const context=useContext(CogContext);


    function startTest() {
        try {
            var n = document.querySelector('input[name="modeOptions"]:checked').value;
            if (n === '1') context.setMode('easy');
            else if (n === '2') context.setMode('medium');
            else context.setMode('hard');
            setBtn(false);
            context.setActive(1);
        } catch (error) {
            alert("please select the option");
        }
    }

    function endTest() {
        var n = window.confirm("end test?"); // Replace `confirm` with `window.confirm`
        if (n) {
            document.querySelector('input[name="modeOptions"]:checked').checked = false;
            setBtn(true);
            context.setActive(0);
            context.setTimeup(1);
            context.setMode("easy")
            context.setOptions()
            document.querySelector("#mcq-form").reset()
        }
    }

    return (
        <div>
            <div className="d-flex flex-column my-2">
                <div className="d-flex">
                    <button type="button" className="btn btn-primary" onClick={startTest} disabled={!btn} style={{ width: 'fit-content', margin: 'auto' }}>Start Test</button>
                    <button type="button" className="btn btn-danger" onClick={endTest} disabled={btn} style={{ width: 'fit-content', margin: 'auto' }}>End Test</button>
                </div>
                <div className="d-flex justify-content-evenly" style={{ width: 'fit-content', margin: 'auto' }}>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="modeOptions" id="mode1" value="1" disabled={!btn} />
                        <label className="form-check-label" htmlFor="mode1">Easy</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="modeOptions" id="mode2" value="2" disabled={!btn} />
                        <label className="form-check-label" htmlFor="mode2">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="modeOptions" id="mode3" value="3" disabled={!btn} />
                        <label className="form-check-label" htmlFor="mode3">Hard</label>
                    </div>
                </div>
            </div>
        </div>
    );
}
