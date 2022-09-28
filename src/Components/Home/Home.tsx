import "./Home.css"
import React from "react";

const Home = () => {
    return (
        <>
            <div className="bannerBackground">
            </div>
            <div className={"bannerStyle"}>
                <p><b>Welcome to Beer-Hub !</b></p>
                <p className={"pStyle"}>Sing up <a href={""}>here</a> to start your journey in world of passion and mystery of crafted beers </p>
            </div>
        </>
    )
}

export default Home;