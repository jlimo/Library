import React, { useState } from 'react';

function createCollection({
  onClose,
  shouldFetch,
  setFetch,
}) {
  const [collectionName, setCollectionName] = useState({ name: ""});
  const handleChange = (evt) => {
    setCollectionName({
      name: evt.target.value,
    });
  };
  const handleSubmit = async (evt) => {
    await onClose(collectionName);
    evt.preventDefault();
    await fetch("/api/collections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collectionName),
    });
    setFetch(!shouldFetch);
  };
  return (
    <>
    <form onsubmit={handleSubmit}>Create Collection
    <text onChange={handleChange} value={collectionName.name}>enter name of collection</text>
    </form>
    <form>
    <button type="submit" onClick={() => {}}>Save</button>
    </form>

    </>
  )
}

export default createCollection;