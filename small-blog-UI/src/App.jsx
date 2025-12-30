import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './App.css'
import About from './pages/About';
import Posts from './pages/Posts';
import Header from './components/Header';
import Footer from './components/Footer';
import PostDetail from './pages/PostDetail';

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
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/:id' element={<PostDetail/>}/>
    </Routes>
    </div>
    <div>
      <Footer/>
    </div>
  </BrowserRouter>
  )
}


export default App
