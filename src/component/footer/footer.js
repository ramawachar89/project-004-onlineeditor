import React from "react";
import './footer.css'

export default function Footer(){
    const footerParts=[
        
        {name:"CodePen About Blog Podcast Documentation Support Shop"},
        {name2:"For Teams Education Privacy EmbedsAsset Hosting"},
        {name3:"Social YouTube Twitter Instagram Mastodon"},
        {name4:"Community Spark Challenges Topics Code of Conduct"}
    ]
    return(
        <>
        
        {footerParts.map((a)=>(
            <div className="footer">
                {a.name}
                {a.name2}
                {a.name3}
                {a.name4}
            </div>

        ))}
        </>
    )
}