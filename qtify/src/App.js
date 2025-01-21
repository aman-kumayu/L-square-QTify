import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
