import HomePage from './HomePage.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ShopPage from './ShopPage.jsx'
import ContactPage from './ContactPage.jsx'
import AboutUsPage from './AboutUsPage.jsx'



function App() {

  return (
    <dev>
      <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='/home' element ={<HomePage/>}/>
        <Route path='/shop' element ={<ShopPage/>}/>
        <Route path='/contact' element ={<ContactPage/>}/>
        <Route path='/about' element ={<AboutUsPage/>}/>
      </Routes>
    </dev>
  )
}


export default App
