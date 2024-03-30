import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Lessons from '../components/Kanban';
import NewCard from '../pages/newCard';
import InfoPerson from '../pages/infoPerson';


export default function App(){
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/NewCard" element={<NewCard/>} />
        <Route path="Lessons" element={<Lessons/>} />
        <Route path="Info" element={<InfoPerson/>} />
      </Routes>
    </Router>
  );
}
