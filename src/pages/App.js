import "../assets/css/App.css";
import AddTodo from "../component/AddTodo";
import TodoList from "../component/TodoList";

function App() {
  return (
    <div className="container">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
