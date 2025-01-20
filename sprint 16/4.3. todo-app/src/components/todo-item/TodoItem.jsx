import React, { useState } from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";
import Button from "../button/Button";

const TodoItem = ({ todo, onToggleCompleted, onEdit, onDelete }) => {
  const handleCheckboxChange = (checked) => {
    onToggleCompleted(todo.id, checked);
  };

  return (
    <div className={`todo-item ${todo.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox checked={todo.completed} onChange={handleCheckboxChange} />
          <h4>{todo.title}</h4>
        </div>
        <div>
          <Button
            onClick={() => onEdit(todo)}
            className="fa fa-pencil"
            aria-hidden="true"
          >
            Edit
          </Button>
          <Button
            onClick={() => onDelete(todo.id)}
            className="fa fa-trash"
            aria-hidden="true"
          >
            Delete
          </Button>
        </div>
      </div>
      <div className="separator"></div>
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoItem;
