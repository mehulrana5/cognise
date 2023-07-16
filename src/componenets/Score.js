import React, { useContext } from 'react'
import CogContext from '../context/CogContext'

export default function Score() {
    const context = useContext(CogContext);

    return (
        <div className='container' style={{display: context.submit && context.options!=null? "" : "none" }}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Question number</th>
                        <th scope="col">option marked</th>
                        <th scope="col">correct option</th>
                    </tr>
                </thead>
                <tbody>
                    {context.options && context.options.map((val,idx)=>(
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{val===-1?'-':val+1}</td>
                            <td>{context.mcqsData[idx].answer}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
