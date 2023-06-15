
import './App.scss'

//NavBar 
import Navbar from './components/Navbar/Navbar' // absolute
//sections
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Skills from './pages/Skills'
import Contact from './pages/Contact'



function App() {
  return (
    <section className='relative w-full h-100vh box-border md:pl-7 md:pr-7 ' >
      <Navbar/>
<div className='bg-background-color flex flex-col  rounded-lg  ' >
        <Home  name="Orel Karako" subtitle='Im Full stack Developer' imgSrc='/images/devImg.png'/>
        <Services />
        <About />
        <Portfolio />
        <Blog />
        <Skills />
        <Contact />
</div>

 
    </section>
  )
}

export default App
