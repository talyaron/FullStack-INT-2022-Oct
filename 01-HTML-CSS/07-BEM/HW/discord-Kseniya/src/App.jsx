import "./App.css";
import Accounts from "./Components/Accounts/Accounts";
import Center from "./Components/Center/Center";
import Navbar from "./Components/Navbar/Navbar";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container columns={20}>
      <Grid item xs={1}>
        <Accounts />
      </Grid>
      <Grid item  xs={3} xl={2}>
        <Navbar />
      </Grid>
      <Grid item  xs={16} xl={17}>
        <Center />
      </Grid>
    </Grid>
  );
}

export default App;
