import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Product from './Components/Product';
import Header from './Components/Heade';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import configureStore from './store';
import Login from './Components/Project/Login';
import {Shopping} from './Components/Shopping';
import { ShoppingProvider } from './Components/ShoppingStore';

const store = configureStore()

function App() {
  return (
    <div className="App">
       <Provider store = {store}>
        <ShoppingProvider>
       <BrowserRouter>
       <Header />
       <div className='main'>
       <Routes>
        {/* <Route path='/' element={<Layout />}></Route> */}
        <Route path='/product' element={<Product />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/shopping' element={<Shopping />}></Route>


       </Routes>
       </div>
       <Footer />
       </BrowserRouter>
       </ShoppingProvider>
       </Provider>


    </div>
  );
}

export default App;
