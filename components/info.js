import React from "react"


export default function Info() {
    return (
        <div className="infoDiv">
            <div className = "img"></div>
            <div className = "container">
                <h1 className = "name">SaraPekaLoki</h1>
                <h1 className = "occupation"> Front end developer</h1>
                <h1 className = "website"> sarapekaloki.website</h1>
                <button className ="btn">
                <div className="mail">
                    <img className="mail-logo" src="../images/Icon.png"/>
                </div><h1 className="btn-txt">Email</h1></button>
            
            </div>
            
            
        </div>
    )
}