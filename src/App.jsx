import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import HomePage from './pages/HomePage'
import Error404 from './pages/Error404'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='product' element={<Product />}></Route>
        <Route path='pricing' element={<Pricing />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='app' element={<AppLayout />}>
          <Route index element={<p>list of cities</p>}></Route>
          <Route path='cities' element={<p>list of cities</p>}></Route>
          <Route path='countries' element={<p>list of countries</p>}></Route>
          <Route path='form' element={<p>Form</p>}></Route>
        </Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
