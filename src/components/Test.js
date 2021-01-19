import React, { useState, useCallback } from 'react';

const Test = () => {
  
  const [data, setData] = useState({
    name : "",
    place : ""
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={data.name} onChange={handleChange} />
      <input name="place" value={data.place} onChange={handleChange} />
      <button type="submit">submit</button>
    </form>
  );
};

export default Test;
