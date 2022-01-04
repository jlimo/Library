import React, { useState, useEffect } from "react";
import { createCollection } from "../components/collections";

function myProfile(props) {
    const [shouldFetch, setFetch] = useState(false);
    const [shouldfetchFavorites, setFetchFavorites] = useState(false);
    const [userCollections, setUserCollections] = useState([]);

    useEffect(() => {
        if(props.user[0].user) {
            fetch("/api.collection")
            .then((res) => res.json())
            .then((json) => setUserCollections(json.data && json.data.collections));
        }
    }, [shouldFetch, props.user[0].user]);
};
return (
    <>
    {collection.name}
    {collection.books.map((books) => {
        return (
            <>
            <button onClick={async () => {
                await fetch(
                    `api/collection/${collection.name.replace(
                        " ",
                        "+"
                    )}/${book.id}`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                setShouldFetch(!shouldFetch);
            }}
            />
            </>
        );
    })}
    </>
)