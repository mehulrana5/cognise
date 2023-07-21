import React, { useContext } from 'react';
import CogContext from '../context/CogContext';


export default function Modes() {

    
    const context = useContext(CogContext);

    function startTest() {
        try {
            var n = document.querySelector('input[name="modeOptions"]:checked').value;
            if (n === '1') context.setMode('easy');
            else if (n === '2') context.setMode('medium');
            else context.setMode('hard');
            context.setBtn(false);
            context.setActive(1);
        } catch (error) {
            alert("please select the option");
        }
    }

    return (
        <div>
            <div>
                <button type="button" className="btn btn-primary" onClick={startTest} disabled={!context.btn}>Start Test</button>
                <div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="modeOptions" id="mode1" value="1" disabled={!context.btn} />
                        <label className="form-check-label" htmlFor="mode1">Easy</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="modeOptions" id="mode2" value="2" disabled={!context.btn} />
                        <label className="form-check-label" htmlFor="mode2">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="modeOptions" id="mode3" value="3" disabled={!context.btn} />
                        <label className="form-check-label" htmlFor="mode3">Hard</label>
                    </div>
                </div>
            </div>
        </div>
    );
}
