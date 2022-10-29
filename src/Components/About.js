import React from "react";
import './About.css'
export default function About(props){
    return(
        <div  className={`abouttext text-center d-flex flex-column align-items-center justify-content-center m-5 text-${props.mode==="light"?"black":"white"}`}  >
            <h1>About</h1>
            <p >Textutilities is a text utility app that is used to manipulate the text as you want. You can convert the text into uppercase,lowercase. You can also calculate the total number of words and characters. It also shows the estimated reading time and allows you to see the preview of the text.</p>
        </div>
    )
}