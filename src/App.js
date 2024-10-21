import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {PageSelectSet} from "./pages/pageSelectSet/PageSelectSet";
import {PageViewSet} from "./pages/pageViewSet/PageViewSet";
import {PageCreateSet} from "./pages/pageCreateSet/PageCreateSet";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet/>} />
        <Route path="/set/:id" element={<PageViewSet/>} />
        <Route path="/admin" element={<PageCreateSet/>} />
        <Route path="*" element={<PageSelectSet/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
