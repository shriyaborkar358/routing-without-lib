import ReactDOM from 'react-dom/client';
import Home from "./views/Home/Home"
import About from './views/About/About';
import Contact from './views/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

const currentPath = window.location.pathname;

if(currentPath=="/"){
  root.render(<Home/>)
}
else if(currentPath=="/about"){
  root.render(<About/>)
}
else if(currentPath=="/contact"){
  root.render(<Contact/>)
}

