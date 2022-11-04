import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoLists from "./components/TodoLists";
import TotalItems from "./components/TotalItems";

function App() {
  return (
    <Container maxWidth="lg">
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
    </Container>
  );
}

export default App;
