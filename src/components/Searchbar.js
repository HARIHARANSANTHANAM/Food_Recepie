import React, { useRef,useState ,useEffect} from "react";
import SearchIcon from "@material-ui/icons/Search";
import '../css/searchbar.module.css';
import { Typography } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  header: {
    background: "#0c1441",
  },
  searchContainer:{
    display: "flex",
          alignItems: "center",
          background: "#605e7c",
          borderRadius: "5px",
          padding: "10px",
          width: "300px",
          transition: ".5s",
    [theme.breakpoints.down('sm')]: {
       width:"250px"
    }
  },
  searchresultContainer:{
    transition:".2s",
    overflow:"hidden",
    overflowY:"auto",
    position: "absolute",
     marginTop: "10px",
      background: "white",
       color: "black",
        width: "320px",
        height:"0px",
         borderRadius: "5px",
        boxShadow: "0px 5px 5px" ,
        [theme.breakpoints.down('sm')]:{
          width:"270px"
        }
  }
}));

export default function SearchBar() {
  const searchinput = useRef("");
  const searchresult = useRef("");
  const [food,setfood]=React.useState([]);
  const [searchvalue, setsearchvalue] = useState("");
  const searchkeyword=food.map(f=>f.title);
  const [searchkeys,setsearchkeys]=useState(searchkeyword);
  const classes=useStyles();

  React.useEffect(async ()=>{
    const res=await fetch(' https://my-json-server.typicode.com/HARIHARANSANTHANAM/recepie/Recipie');
    const data=await res.json();
    setfood(data);
},[])

  const normalsearchbar = () => { 
    searchresult.current.style.height = "0px";
  };
  

  const handleSearch = (e) => {  
    setsearchkeys(searchkeyword);
    const keys=e.target.value;
    console.log(searchkeyword);
    const result=searchkeyword.filter(key=> key.indexOf(keys)>-1);
    console.log(result)

    if (e.target.value && result.length>0) {
      setsearchkeys(result);
      setsearchvalue(keys);
      searchresult.current.style.height = "300px";
    }
    else {
      setsearchkeys(result);
      setsearchvalue(e.target.value);
      handlesearchresult();
    }
  }
  const handlesearchresult=()=>{
    searchresult.current.style.height = "0px";
  }

  const handleclickedsearch=(value)=>{
   setsearchvalue(value);
   normalsearchbar();
   setsearchkeys(searchkeyword);
   console.log(searchkeys);
  }

  const handler=(e)=>{

    console.log(e.charCode);
    switch (e.charCode) {
      case 13:
         console.log("Up key is pressed.");
         break;
      case 15:
         console.log("Down key is pressed.");
         break;
    }
  }

  return (
    <div>
      <div
        className={classes.searchContainer}
      >
        <SearchIcon />
        <input
          ref={searchinput}
          style={{
            background: "transparent",
            color: "white",
            fontSize: "16px",
            border: "none",
            outline: "none",
          width: "280px"
          }}
          type="text"
          onChange={handleSearch}
          placeholder="Search..."
          value={searchvalue}
          onBlur={handlesearchresult}
          onKeyPress={handler}
        />
      </div>
      <div ref={searchresult} className={classes.searchresultContainer}>
        <ul >
          {
            searchkeys.map(s=>{
              return  <li onClick={()=>handleclickedsearch(`${s}`)}><SearchIcon></SearchIcon><Typography variant="body1">{s}</Typography></li>
         
            })
          }
       </ul>
      </div>
    </div>
  );
}
