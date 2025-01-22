import React, { useState } from "react";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import "./App.css";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App() {
  const compareTodosIdFn = (todo1, todo2) =>
    parseInt(todo1.id) > parseInt(todo2.id) ? 1 : -1;

  const [todos, setTodos] = useState(TODOS_MOCK);
  const lastId = todos.sort(compareTodosIdFn).slice().pop().id;
  const nextId = React.useRef(parseInt(lastId) + 1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((todos) => [
      ...todos,
      {
        id: nextId.current.toString(),
        title: title,
        description: description,
        completed: false,
      },
    ]);
    nextId.current = nextId.current + 1;
    setTitle("");
    setDescription("");
    setIsModalOpen(false);
  };

  const handleToggleCompleted = (id, checked) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: checked } : todo
      )
    );
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
    setTitle(todo.title);
    setDescription(todo.description);
    setIsModalOpen(true);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    const updatedTodo = { ...editTodo, title, description };
    setTodos(
      todos.map((todo) => (todo.id === editTodo.id ? updatedTodo : todo))
    );
    setIsModalOpen(false);
    setEditTodo(null);
    setTitle("");
    setDescription("");
  };

  const uncompletedTodos = todos.filter((todo) => !todo.completed);
  const uncompletedTodosTags = uncompletedTodos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onToggleCompleted={handleToggleCompleted}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  ));
  const completedTodos = todos.filter((todo) => todo.completed);
  const completedTodosTags = completedTodos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onToggleCompleted={handleToggleCompleted}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  ));

  return (
    <div className="App">
      <div className="app-container">
        {/* My Todos */}
        <Card>
          <h1>My todos</h1>
          <Button onClick={() => setIsModalOpen(true)}>Add Todo</Button>
          <div className="list-container">{uncompletedTodosTags}</div>
          <div className="separator"></div>
          <h2>Completed</h2>
          <div className="list-container">{completedTodosTags}</div>
        </Card>

        {/* Modal */}
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <Card>
              <h2>{editTodo ? "Edit Todo" : "Create Todo"}</h2>
              <form onSubmit={editTodo ? handleSubmitEdit : handleSubmit}>
                <Input
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Title"
                  type="text"
                />
                <TextArea
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Description"
                />
                <Button type="submit">{editTodo ? "Save" : "Create"}</Button>
              </form>
            </Card>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
