import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <section className='App'>
      <div className='container'>
        <div className='header d-flex flex-row justify-content-between'>
          <h2>My Todos</h2>
          <button>Add Todos</button>
        </div>
        <Todo />
      </div>
    </section>
  );
}

export default App;
