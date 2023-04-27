import './components/styles.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div>
      <header className='header'>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting={'Bienvenido'}/>
      </main>
    </div>
  );
}

export default App;
