import React from "react";
import Search from "./Search";

function Home(props) {
    return (
        <>
        <heading>
            Welcome {props.user[0].user && props.user[0].user.username}, Browse the Library and see what you would like to read.
        </heading>
        <text>
            Search for a book you might like and rent the book out!
        </text>
        </>
    );
}

export default Home;
