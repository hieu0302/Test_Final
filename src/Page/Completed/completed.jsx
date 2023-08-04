import React, { useEffect, useState } from "react";

const Completed = () => {
  const [todoCompleted, setTodoCompleted] = useState([]);

  const getCompleted = () => {
    let list = localStorage.getItem("completed");
    setTodoCompleted((prevTodo) => prevTodo.concat(list));
    localStorage.setItem("completedTab", JSON.stringify(list));
  };

  useEffect(() => {
    getCompleted();
  }, []);

  return (
    <div>
      {todoCompleted.map((todo, index) => (
        <div key={index}>{todo}</div>
      ))}
    </div>
  );
};

export default Completed;
