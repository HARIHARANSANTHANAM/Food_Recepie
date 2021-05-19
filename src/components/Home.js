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
import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";
import CameraIcon from "@material-ui/icons/Camera";

const useStyles = makeStyles({
  header: {
    background: "#0c1441"
  }
});

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.header}>
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

              <Typography variant="h5">Ipl 2021</Typography>
            </div>
            <Searchbar />
            <div
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={7} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={4} color="primary">
                  <MailIcon />
                </Badge>
              </IconButton>

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
