import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import "./todo.css";

const Todo = (props) => {
  const { data } = props;

  const [check, setCheck] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [todoItemStyle, setTodoItemStyle] = useState({
    textDecoration: "none",
  });
  const [updateItem, setUpdateItem] = useState([data]);

  const handleClickCheck = (event) => {
    if (!check.includes(data)) {
      setIsChecked(event.target.checked);
      setTodoItemStyle({
        textDecoration: event.target.checked ? "line-through" : "none",
      });
      setUpdateItem({
        ...data,
        active: !event.target.checked,
      });
      localStorage.setItem("completed", JSON.stringify(updateItem));
    }
  };

  const handleCheckboxUncheck = () => {
    setIsChecked(false);
    setTodoItemStyle({ textDecoration: "none" });
  };

  return (
    <div className="todoItem">
      <Checkbox
        checked={isChecked}
        onChange={handleClickCheck}
        onUnhandledClick={handleCheckboxUncheck}
      >
        <p style={todoItemStyle}>{data.item}</p>
      </Checkbox>
    </div>
  );
};

export default Todo;
