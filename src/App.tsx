import "./App.css";
import { useState } from "react";
import { AddItem } from "./components/AddItem";
import { ToDoList } from "./components/ToDoList";

function App() {
  const [toDoList, setToDoList] = useState<string[]>([]);

  const handleUpdateToDoList = (item: string) => {
    setToDoList([...toDoList, item]);
  };

  return (
    <>
      <h1>Intro to React</h1>
      <AddItem onUpdateToDoList={handleUpdateToDoList} />
      <ToDoList toDoList={toDoList} />
    </>
  );
}

export default App;
