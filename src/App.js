import Grid from "@mui/material/Grid";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoLists from "./components/TodoLists";
import TotalItems from "./components/TotalItems";

function App() {
  return (
    <div className="Container">
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item lg={4} xs={10}>
          <AddTodo />
        </Grid>
        <Grid item lg={6} xs={10}>
          <TodoLists />
          <TotalItems />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
