import logo from './logo.png';
import './App.css';
import Header from './components/Header/Header';
import Mensaje from './components/Mensaje/Mensaje';
import Footer from './components/Footer/Footer';

const newDate = new Date();
const year  = newDate.getFullYear();

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="message">
      <Mensaje text="Ejercicio react"></Mensaje>
      <Mensaje type="lorem" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius "></Mensaje>
      </div>
      <Footer year={year}></Footer>
    </div>
  );
}

export default App;
