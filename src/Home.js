// import { Link } from "react-router-dom";
import React from 'react'
function Home() {
    return (
        <div>
            <h1>Click this button</h1>
            {/* <Link to="about">Click to view our about page</Link>
        <Link to="contact">Click to view our contact page</Link> */}
            {/* <a href="/about">about</a> */}
            <button>
                <a href="/button">button</a>
            </button>
        </div>
    );
}

export default Home;