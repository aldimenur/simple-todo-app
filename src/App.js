import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoLists from "./components/TodoLists";

function App() {
  return (
    <div className="Container">
      <AddTodo />
      <TodoLists />
    </div>
  );
}

export default App;
