import logo from './logo.svg';
import './App.css';
import About from '../src/components/about';
import Contact from '../src/components/contact';
import Footer from '../src/components/footer';
import Header from './components/header';
import Portfolio from '../src/components/portfolio';
import Resume from '../src/components/resume';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path = '/' element={<About/>}></Route>
        <Route path = '/Contact' element={<Contact/>}></Route>
        <Route path = '/Portfolio' element={<Portfolio/>}></Route>
        <Route path = '/Resume' element={<Resume/>}></Route>


      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
