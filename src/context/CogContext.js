import React, { createContext, useState } from 'react';

const CogContext = createContext();

export const CogProvider = ({ children }) => {
    const [mode, setMode] = useState('easy');
    const [active, setActive] = useState(0);
    const [timeup, setTimeup] = useState(1);
    const [ans, setAns] = useState();
    const [submit, setSubmit] = useState(0);

    const updateStatus = (newMode, newActive, newTimeUp) => {
        setMode(newMode);
        setActive(newActive);
        setTimeup(newTimeUp);
    };

    const updateTimeUp = (newTimeUp) => {
        setTimeup(newTimeUp);
    };

    function updateAns(newAns) {
        setAns(newAns);
    }

    const mcqsData = [
        {
            question: "What is the main concern about Indian Prime Minister Narendra Modi's economic policies?",
            options: [
                "Their inconsistency with the country's long tradition of secularism.",
                "Their impact on the environment.",
                "Their failure to revitalize the nation's economy.", // Correct Answer
                "Their focus on infrastructure development."
            ],
            answer: 2 // Index of the correct answer
        },
        {
            question: "What does Joe Biden's invitation to Narendra Modi for a state visit signify?",
            options: [
                "The importance of India in U.S. strategy in Africa.",
                "The importance of India in U.S. strategy in Asia.", // Correct Answer
                "The strengthening of U.S.-India military ties.",
                "The need for joint climate change initiatives."
            ],
            answer: 1 // Index of the correct answer
        },
        {
            question: "Which model led to Narendra Modi's rise to power in 2014?",
            options: [
                "The Gujarat Development Model.",
                "The Indian Economic Model.",
                "The \"Make in India\" Model.",
                "The \"Gujarat model.\"" // Correct Answer
            ],
            answer: 3 // Index of the correct answer
        },
        {
            question: "What was the main goal of Modi's \"Make in India\" initiative?",
            options: [
                "To attract foreign investments in Indian infrastructure.",
                "To promote India's tourism industry.",
                "To boost manufacturing's contribution to GDP.", // Correct Answer
                "To create a digital economy in India."
            ],
            answer: 2 // Index of the correct answer
        },
        {
            question: "What raised doubts about the sustainability of India's economic development?",
            options: [
                "The lack of foreign investments.",
                "The challenges in various economic sectors.", // Correct Answer
                "The government's focus on social welfare programs.",
                "The global economic recession."
            ],
            answer: 1 // Index of the correct answer
        }
    ];

    return (
        <CogContext.Provider value={{ mode, setMode, active, setActive, timeup, setTimeup, ans, setAns, updateStatus, updateTimeUp, updateAns, submit, setSubmit ,mcqsData}}>
            {children}
        </CogContext.Provider>
    );
};

export default CogContext;
