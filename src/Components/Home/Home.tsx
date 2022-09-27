import "./Home.css"
import React from "react";

export const Home = () => {
    return (
        <>
            <div className="bannerBackground"></div>
            <div className="bannerStyle">
                <h1 className="bannerTitle">Welcome to Beer-Hub !</h1>
                <p className="bannerSubtitle">
                    Sing up
                    &nbsp;<a href={""} className="bannerSubtitleLink">here</a>&nbsp;
                    to start your journey in world of passion and mystery of crafted beers
                </p>
            </div>
        </>
    )
}
