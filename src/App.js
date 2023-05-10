import 'bootstrap/dist/css/bootstrap.css'
import './Layout/Layout.css'
import Nav from './Layout/Nav';
import Footer from './Layout/Footer';
import 'bootstrap/dist/js/bootstrap.js'
import Todos from './Components/Todos';

function App() {
  return (
    <>
    <Nav></Nav>
    <main className="flex-shrink-0">
      <div className="container">
        <Todos/>
      </div>
    </main>
    <Footer></Footer>
    </>
  );
}

export default App;
