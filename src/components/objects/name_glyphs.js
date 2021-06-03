import React, { useEffect, useState } from "react";

const Name = () => {
    const [nameG, setNameG] = useState("")
    const [count, setCount] = useState(0)
    let name = "Gurleen Vasir"
    let nameArr = name.split("");
    let glyphs = ["1","!","*", "£","/","?","#","^","~"];
    let trueName = ""
    let finName ="";
    
    useEffect(()=>{
        setTimeout(()=>{ getRandomGlphs() }, 100)

    },[ nameG])

    const getRandomGlphs = () =>{

        let numer =  name.length-count
        for (let index = 0; index < numer; index++) {
            finName+= glyphs[Math.floor(Math.random() * glyphs.length)];
            setCount(count+1)
        }
        for (let index = 0; index < count; index++) {
            trueName+=nameArr[index]
        }
        
        setNameG(trueName.concat(finName))  
    }


    return(
        <div>
            <h1>{nameG}</h1>
        </div>
    )
}

export  {Name}