
import './App.css'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {

  return (
    <>
      <h2>React Redux Toolkit Todo.</h2>
      <div className='grid grid-cols-2 items-center'>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
