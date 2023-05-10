import "bootstrap/dist/css/bootstrap.css";
import "./Layout/Layout.css";
import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";
import "bootstrap/dist/js/bootstrap.js";
import Todos from "./Components/Todos";
import { useEffect, useState } from "react";
import AddTodo from "./Components/AddTodo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e != todo;
      })
    );
  };

  const onAdd = (title, desc) => {
    console.log(title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newtodo = {
      title: title,
      desc: desc,
      sno: sno,
    };
    console.log(newtodo);
    setTodos([...todos, newtodo]);
  };
  return (
    <BrowserRouter>
      <Nav></Nav>
      <main className="flex-shrink-0">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddTodo addTodo={onAdd}></AddTodo>
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
