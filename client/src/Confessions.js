import React, { useState, useEffect } from 'react';
import './App.css';


// const fetchContent = async () => {
//     const response = await fetch('/fetch_content');
//     const content = await response.json();

//     if (response.status !== 200) {
//         throw Error(response.message);
//     }

//     // console.log(content[0]);
//     return content;
// }

export const Confessions = () => {
    const [contentItems, initContent] = useState([]);
    const fetchContent = async () => {
        // console.log(response)
        const response = await fetch('/fetch_content');
        if(!response.ok){
            throw new Error("Data could not be fetched");
        }else{
            return response.json();
        }
    }
    useEffect(() => {
        fetchContent()
            .then((res) => {
                initContent(res);
            })
            .catch((e) => {
                console.log(e.message);
            })
    })
        // console.log(confessions);
    
    // console.log(confessions);
    // const confessions = confessions_res.json()

    
    // console.log(confessions);
    return(
        <>
        <div className='row' id='confessions-row'>
            {contentItems.map((data, key) =>{
                return(
                    <div key={key}>
                        <Confession 
                            key = {key}
                            university = {data.university}
                            content = {data.content}
                            date = {data.date}
                        />
                    </div>
                )}
            )}
        </div>
        </>
    );
}



const Confession = ({university, content, date}) => {
    if (!content) return <div />;
    return(
        <div className='confession-box'>
            <h3>{university}</h3>
            <p>{content}</p>
            <h4>{date}</h4>
        </div>
    )
}

