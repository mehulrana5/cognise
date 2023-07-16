import React, { useContext, useEffect, useState } from 'react';
import CogContext from '../context/CogContext';

export default function Article() {
    const context = useContext(CogContext);
    const [display, setDisplay] = useState(context.active ? "block" : "none");

    useEffect(() => {
        if (context.active) {
            setDisplay("block");
        } else {
            setDisplay("none");
        }
    }, [context.active]);

    return (
        <div className='container' style={{ display: display, transition: 'ease-in-out' }}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{context.article.title}</h5>
                    <p style={{ textAlign: 'left' }}> 
                        {context.article.passage}
                    </p>
                </div>
            </div>
        </div>
    );
}
 