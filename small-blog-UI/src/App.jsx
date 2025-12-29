import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './App.css'
import About from './pages/About';
import Post from './pages/Post';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog';

function App() {
  
  return(
    
    <BrowserRouter>
    <div>
      <Header />
    </div>
    <div className='flex justify-center items-center bg-slate-900 min-h-screen'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/post/:id' element={<Post />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
    </div>
    <div>
      <Footer/>
    </div>
  </BrowserRouter>
  )
}


export default App
