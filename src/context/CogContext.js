import React, { createContext, useState } from 'react';

const CogContext = createContext();

export const CogProvider = ({ children }) => {
    const [mode, setMode] = useState('easy');
    const [active, setActive] = useState(0);
    const [timeup, setTimeup] = useState(1);
    const [submit, setSubmit] = useState(0);
    const [options, setOptions] = useState();
    const [canAdd, setCanAdd] = useState(0);
    const [btn, setBtn] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(1);
    const [isAdmin, setIsAdmin] = useState(0);


    //API Related stuff
    const [count, setCount] = useState(0);
    const [data,setData]=useState({
        title:"",
        passage:"",
        mcqdata:[{
            question:"",
            options:[""],
            answer:0
        }]
    });
    const [visit,setVisit]=useState({});

    const host = 'http://localhost:5000';
    const header = {
        "Content-Type": "application/json"
    };

    const fetchAllArticlesIds = async () => {
        const response = await fetch(`${host}/fetchAllArticlesIds`, {
            method: 'GET',
            header: header
        })
        const ids = await response.json();
        // console.log(ids);
        setCount(ids.length);
        ids.forEach((id, idx) => {
            localStorage.setItem(idx.toString(), id);
        });
    } 
    const fetchArticleByIndex = async (idx) => {
        const response = await fetch(`${host}/fetchArticleByIndex/${idx}`, {
            method: 'GET',
            header: header
        })
        const articleData = await response.json();
        setData(articleData);
    }
    const addArticle = async (e) => {
        try {
            const response = await fetch(`${host}/addArticle`, {
                method: "POST",
                headers: header,
                body: JSON.stringify(e),
            });

            // Assuming that the response contains data about the added article, you can use response.json() to parse it

            const data = await response.json();
            console.log(data);
            // console.log(response.status);
            // After adding the article, you can fetch the updated list of article IDs
            fetchAllArticlesIds();

        } catch (error) {
            console.error("Error:", error);
        }
    };

    function getRandomNumber() {
        var a=0;
        if(Object.keys(visit).length >= count){
            visited(a);
            return a;
        }
        while (visit[a]===1) {
            a = Math.floor(Math.random() * (count));
        }
        visited(a);
        return a;
    }
    function visited(idx){
        console.log(visit.length);
        if(Object.keys(visit).length >= count)setVisit({[idx]:1});
        else{
            setVisit({...visit,[idx]:1});
        }
    }
    return (
        <CogContext.Provider value={{ mode, setMode, active, setActive, timeup, setTimeup, submit, setSubmit, options, setOptions, canAdd, setCanAdd, btn, setBtn, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, fetchAllArticlesIds, count, setCount, fetchArticleByIndex, getRandomNumber, addArticle ,data,setData}}>
            {children}
        </CogContext.Provider>
    );
};

export default CogContext;
