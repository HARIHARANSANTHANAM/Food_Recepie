import React from "react";
import homestyle from "../css/home.module.css";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge
} from "@material-ui/core";
import Searchbar from "./Searchbar";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ShoppingIcon from "@material-ui/icons/ShoppingBasket";
import CameraIcon from "@material-ui/icons/Camera";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import {selectfood} from '../features/Food/foodSlice';

const useStyles = makeStyles((theme)=>({
  header: {
    background: "#0c1441",
  },
  title:{
    [theme.breakpoints.down('sm')]: {
      display:"none"
    }
  },
  IconHelpers:{
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      display:"none"
    }
  },
  link:{
    color:"white",
    textDecoration:"none",
    '&:hover':{
      color:"white",
      textDecoration: "none"
    }
  }
}));

export default function Appbar() {
  const classes = useStyles();
  const cart=useSelector(selectfood);
  React.useEffect(() => {
    console.log(cart)
  }, [cart])
  return (
    <>
      <AppBar className={classes.header} onLeftIconButtonClick={()=>console.log("lefticon is clicked")}>
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton edge="start" color="inherit" aria-label="open drawer">
                <MenuIcon />
              </IconButton>
                  <Link to="/Home" className={classes.link}>
              <Typography variant="h5" className={classes.title}>TastyFoods</Typography>
              </Link>
            </div>
            <Searchbar style={{width:"20px"}}/>
            <div
              className={classes.IconHelpers}
            >
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={7} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Link to="/Cart" className={classes.link}>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={cart?cart.length:0} color="primary">
                  <ShoppingIcon/>
                </Badge>
              </IconButton>
              </Link>

              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={4} color="primary">
                  <CameraIcon />
                </Badge>
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
