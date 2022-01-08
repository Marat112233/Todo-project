import '../App.css';
import { Route, Routes } from "react-router-dom";
import { routes } from './routes';
import './Section';
import Section from './Section';



function App() {
  return (
    <div className="App">
      
        <Section />
        <Routes >
        {routes.map((route, index) => {
          return <Route
            element={route.element}
            path={route.path}
            key={index}
          />
        })}
      </Routes>
        
      
    </div>
  );
}

export default App;
