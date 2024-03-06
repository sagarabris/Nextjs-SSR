"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const functionData = async () => {
    const response = await fetch(
      `https://65e7f69b53d564627a8f8c86.mockapi.io/todos`
    );
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    functionData();
  }, []);

  return (
    <>
      <div>
        <h1>NORMAL DATA RENDERING</h1>
        <br />
        {todos.map((current:{title:string}, i) => {
          return (
            <div key={i}>
              <p>{current.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
