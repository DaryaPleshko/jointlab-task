import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './page/MainPage/MainPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
      </Routes>
    </>
  );
}

export default App;



