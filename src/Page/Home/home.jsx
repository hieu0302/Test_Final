import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import "./home.css";
import Todo from "../../Component/todo/todo";
import { v4 as uuidv4 } from "uuid";

const getLocal = () => {
  let list = localStorage.getItem("todoList");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("todoList")));
  } else {
    return [];
  }
};

const Home = () => {
  const [getInput, setGetInput] = useState([]);
  const [todoList, setTodoList] = useState(getLocal);

  const handleClick = () => {
    if (getInput === "") {
      return;
    }

    const newTodo = { id: uuidv4(), item: getInput, active: true };

    setTodoList(todoList.concat(newTodo));
    // todoList.slice().concat(getInput)
  };
  const handleChagneInput = (event) => {
    setGetInput(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const todoItem = todoList.map((item, index) => {
    return <Todo data={item} key={index} />;
  });

  return (
    <div className="mainBody">
      <div className="input">
        <Input
          onChange={handleChagneInput}
          size="large"
          placeholder="Write your Todo..."
          style={{ width: "30%" }}
        />

        <Button onClick={handleClick} size="large" type="primary">
          Add
        </Button>
      </div>
      <div className="todoList">
        <div>{todoItem}</div>
      </div>
    </div>
  );
};

export default Home;
