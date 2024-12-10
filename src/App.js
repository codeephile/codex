import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
//import Slider from './components/Slider'
import Footer from './components/Footer'
import Page from './pages/Page'
import Product from './pages/Product'
import Login from './pages/Login'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Page /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/product' element={<Product /> } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App


//login //
// const App = () => {
//     const location = useLocation();
//   return (
//     <Router>
//         <Header />
//         {location.pathname !== '/login' && <Slider />}
//         <Routes>
//             <Route path="/" element={<Page />}/>
//             <Route path="/login" element={<Login />} />
//         </Routes>
//         <Footer />
//     </Router>
//   )
// }

// export default App


//slider //
// const App = () => {
//   return (
//     <Router>
//       <Main />
//     </Router>
//   )
// }

// const Main = () => {
//   const location = useLocation();

//   const shouldDisplaySlider = location.pathname !== '/login' &&
//   location.pathname !== '/product';

//   return (
//     <>
//       <Header />
//       {/* Conditionally render Slider based on the pathname */}
//       {shouldDisplaySlider && <Slider />}
//       <Routes>
//         <Route path="/" element={<Page />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//       <Footer />
//     </>
//   )
// }