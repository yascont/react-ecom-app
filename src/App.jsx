
import './App.css'
import Header from './component/Header'
import Footer from './component/footer'
import Routes from './component/Router'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (

    <>
      <BrowserRouter>
        <Header></Header>

        <Routes></Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
