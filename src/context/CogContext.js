import React, { createContext, useState } from 'react';

const CogContext = createContext();

export const CogProvider = ({ children }) => {
    const [mode, setMode] = useState('easy');
    const [active, setActive] = useState(0);
    const [timeup, setTimeup] = useState(1);
    const [submit, setSubmit] = useState(0);

    const [options, setOptions] = useState();

    

    const article = {
        title: "Indian Economy Faces Challenges Despite Modi's Promises",
        passage: `Indian Prime Minister Narendra Modi's economic policies are facing scrutiny as his promises to revitalize the nation's economy seem to have fallen short. Joe Biden's invitation to Modi for a state visit signifies the importance of India in U.S. strategy in Asia, but there are growing concerns about the state of the Indian economy.\nModi's "Gujarat model," which led to his rise to power in 2014, was hailed for its developmentalist approach, attracting investments and generating growth in Gujarat. However, the extension of this model to the national stage has not yielded the expected results. Despite promises to boost manufacturing and create millions of jobs, India has actually lost manufacturing jobs over the past few years, with 11 million jobs lost even before the COVID-19 pandemic hit. The pandemic further exacerbated the situation, leaving millions unemployed and highlighting the struggles of India's job market.\nModi's "Make in India" initiative, aimed at increasing manufacturing's contribution to GDP, has faced setbacks, as the government failed to fulfill its promise to add 100 million manufacturing jobs.The economic policies and heavy investments in infrastructure did not produce the desired outcomes, and the growth rate of the country has slowed down under Modi's leadership.\nThe Indian economy's struggles are evident, and despite the praise it received from foreign observers, it is clear that India's economic growth has not met expectations.While the U.S.government has shown optimism about India's potential as a manufacturing hub, the reality on the ground suggests otherwise. The failure to generate manufacturing jobs and the challenges in various economic sectors raise doubts about the sustainability of India's economic development in the face of competition and changing global dynamics.\nAs the world watches India's economic trajectory closely, it remains to be seen how the government will address these challenges and whether the promises made during Modi's leadership will translate into tangible economic growth and opportunities for the Indian population.The path ahead requires careful consideration and effective policies to steer the country's economy towards sustained progress.`
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
        <CogContext.Provider value={{ mode, setMode, active, setActive, timeup, setTimeup, submit, setSubmit, mcqsData, options, setOptions, article }}>
            {children}
        </CogContext.Provider>
    );
};

export default CogContext;
