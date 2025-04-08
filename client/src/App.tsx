import Datecard from './components/Datecard/Datecard';
import Navbar from './components/Mast/Mast';
import HabitList from './components/HabitList/HabitList';
import './App.css'

function App() {
  return (
    <div className="grid-container">
      <div className='sidebar'></div>
      <div className='content'>
        <nav className='flex w-full justify-between'>
          <Navbar />
          <Datecard />
        </nav>
        <HabitList />
      </div>
      <div className='sidebar'></div>
    </div>
  );
}

export default App;
