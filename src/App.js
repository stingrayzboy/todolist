import 'bootstrap/dist/css/bootstrap.css'
import './Layout/Layout.css'
import Nav from './Layout/Nav';
import Footer from './Layout/Footer';
import 'bootstrap/dist/js/bootstrap.js'
import Todos from './Components/Todos';
import { useState } from 'react';

function App() {

  const[todos, setTodos] = useState([
      { 
          sno: 1,
          title: "Go to the Market",
          desc: "Market Jaana ha Aj Bhaaji Laane"
      },
      { 
          sno: 2,
          title: "Go Back Home",
          desc: "Ghar Pe aake Khana Bana le"
      },
      { 
          sno: 3,
          title: "Sleep",
          desc: "Sooja Chaddar leke"
      }
  ]);
  const onDelete = (todo) => {
    setTodos(todos.filter((e)=> {
      return e != todo;
    }))
  }
  return (
    <>
    <Nav></Nav>
    <main className="flex-shrink-0">
      <div className="container">
        <Todos todos={todos} onDelete={onDelete}/>
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
