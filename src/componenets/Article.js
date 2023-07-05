import React, { useEffect, useState } from 'react';

export default function Article(props) {
    const [display, setDisplay] = useState(props.isActive ? "block" : "none");

    useEffect(() => {
        if (props.isActive) {
            setDisplay("block");
        } else {
            setDisplay("none");
        }
        // eslint-disable-next-line
    }, [props.isActive]);

    return (
        <div className='container' style={{ display: display, transition: 'ease-in-out' }}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Indian Economy Faces Challenges Despite Modi's Promises</h5>
                    <p style={{ textAlign: 'left' }}>
                        Indian Prime Minister Narendra Modi's economic policies are facing scrutiny as his promises to revitalize the nation's economy seem to have fallen short. Joe Biden's invitation to Modi for a state visit signifies the importance of India in U.S. strategy in Asia, but there are growing concerns about the state of the Indian economy. <br />
                        Modi's "Gujarat model," which led to his rise to power in 2014, was hailed for its developmentalist approach, attracting investments and generating growth in Gujarat. However, the extension of this model to the national stage has not yielded the expected results. Despite promises to boost manufacturing and create millions of jobs, India has actually lost manufacturing jobs over the past few years, with 11 million jobs lost even before the COVID-19 pandemic hit. The pandemic further exacerbated the situation, leaving millions unemployed and highlighting the struggles of India's job market. <br />
                        Modi's "Make in India" initiative, aimed at increasing manufacturing's contribution to GDP, has faced setbacks, as the government failed to fulfill its promise to add 100 million manufacturing jobs. The economic policies and heavy investments in infrastructure did not produce the desired outcomes, and the growth rate of the country has slowed down under Modi's leadership. <br />
                        The Indian economy's struggles are evident, and despite the praise it received from foreign observers, it is clear that India's economic growth has not met expectations. While the U.S. government has shown optimism about India's potential as a manufacturing hub, the reality on the ground suggests otherwise. The failure to generate manufacturing jobs and the challenges in various economic sectors raise doubts about the sustainability of India's economic development in the face of competition and changing global dynamics. <br />
                        As the world watches India's economic trajectory closely, it remains to be seen how the government will address these challenges and whether the promises made during Modi's leadership will translate into tangible economic growth and opportunities for the Indian population. The path ahead requires careful consideration and effective policies to steer the country's economy towards sustained progress.
                    </p>
                </div>
            </div>
        </div>
    );
}
