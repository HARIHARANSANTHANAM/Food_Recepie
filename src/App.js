import "./styles.css";
import Appbar from "./components/Appbar";
import React from 'react';
import MenuCard from "./components/MenuCard";
import Table from './components/Table';
import { Button, Typography,Popover, makeStyles, Grid, Container, RadioGroup, Radio,FormControlLabel } from "@material-ui/core";4
import {Route,Switch} from 'react-router-dom';
import CartPage from "./components/CartPage";
import configureStore from './app/store';
import { Provider } from "react-redux";


const usestyles=makeStyles((theme)=>({
  textwrapbox:{
    width:theme.spacing(100),
    background:"red",
    padding:theme.spacing(1)
  },
  themeColor:{
    background:"none"
  }
}))

export default function App() {
  const classes=usestyles();
  const [User, setUser] = React.useState("");
  const [sortType, setsortType] = React.useState("");

  const handleSortByType=(e)=>{
    setsortType(e.target.value);
  }

  return (
    <div>
      <Provider store={configureStore}>
      <Switch>
        <Route path="/Admin">
          
      <h2>Fish Gravy</h2>
          <Appbar></Appbar>
           <Table/> 
        </Route>
        <Route path="/Home" exact>
        <Appbar />
      <h2>Fish Gravy</h2>
      
      <Grid container className={classes.themeColor}>
        <Grid item xs={12}  sm={12} md={2} lg={2.5} >
            <Container style={{border:"2px solid black",margin:"10px 5px",width:"95%",borderRadius:"10px"}}>
              <center>
              <Typography variant="h5">
                Filter
              </Typography>
              </center>
              <RadioGroup onChange={handleSortByType}>
                <FormControlLabel value="Low to High" control={<Radio />} label="Low to High" />
                <FormControlLabel value="High to Low" control={<Radio />} label="High to Low" />
              </RadioGroup>
            </Container>
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={9.5}>

        <MenuCard sortBytype={sortType}/>
        </Grid>
      </Grid>
        </Route>

        <Route path="/Cart">
          <Appbar/>
          <h2>Fish Gravy</h2>
          <CartPage/>
        </Route>
      </Switch>
      </Provider>
    </div>
  );
}
