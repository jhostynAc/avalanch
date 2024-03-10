import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Curso1  from './componentes/curso1.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>}></Route>
  <Route path='/curso1' element={<Curso1/>}></Route>
  </Routes>
  </BrowserRouter>
)
