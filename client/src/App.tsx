import Datecard from './components/Datecard/Datecard';
import Navbar from './components/Mast/Mast';

function App() {
  return (
    <div className='flex w-screen justify-center'>
      <div className="flex w-7/12 m-4">
        <nav className='flex w-full justify-between'>
        <Navbar />
        <Datecard />
        </nav>
      </div>
    </div>
  );
}

export default App;
