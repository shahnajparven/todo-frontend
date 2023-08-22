
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/index.js';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  
     <BrowserRouter>
     <Provider store={store}>
     <ToastContainer
          position="top-right"
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          autoClose={1000}
        />
    <App />
    </Provider>
    </BrowserRouter>
)
