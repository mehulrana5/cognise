import React, { useContext } from 'react';
import CogContext from '../context/CogContext';

export default function Score() {
  const context = useContext(CogContext);

  return (
    <div className='container' style={{ display: context.submit && context.options != null ? "" : "none" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Question number</th>
            <th scope="col">option marked</th>
            <th scope="col">correct option</th>
          </tr>
        </thead>
        <tbody>
          {/* Add a check for context.options before mapping */}
          {context.options && context.options.map((val, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{val === -1 ? '-' : val + 1}</td>
              {/* Add a check for context.data.mcqsdata before accessing its properties */}
              <td>{context.data.mcqdata[idx]['answer']+1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
