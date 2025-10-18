import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer
      position='bottom-right'
      autoClose={1500}
      hideProgressBar={true}
      theme='dark'
      transition={Slide}
      />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
