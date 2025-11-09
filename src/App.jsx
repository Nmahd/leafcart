
import  './app.css'
import { Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';



function App() {


  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
     </Routes>
    </>
  )
}

export default App;
