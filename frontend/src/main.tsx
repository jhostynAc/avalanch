import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Curso1  from './componentes/curso1.tsx';
import Curso2  from './componentes/curso2.tsx';
import Curso3  from './componentes/curso3.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>}></Route>
  <Route path='/curso1' element={<Curso1/>}></Route>
  <Route path='/curso2' element={<Curso2/>}></Route>
  <Route path='/curso3' element={<Curso3/>}></Route>
  </Routes>
  </BrowserRouter>
)
