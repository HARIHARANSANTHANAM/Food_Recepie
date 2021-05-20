import React, { useRef,useState ,useEffect} from "react";
import SearchIcon from "@material-ui/icons/Search";
import '../css/searchbar.module.css';
import { Typography } from "@material-ui/core";


export default function SearchBar() {
  const searchinput = useRef("");
  const searchresult = useRef("");
  const [searchvalue, setsearchvalue] = useState("");
  const searchkeyword=["Chennai Super kings","Mumbai Indians","Royal challengers Bangalore","Sunrises Hyderabad","Kolkata Knight Riders","Rajasthan Royals","Punjab Kings","Delhi Capitals"];
  const [searchkeys,setsearchkeys]=useState(searchkeyword);

  const normalsearchbar = () => { 
    searchresult.current.style.width = "300px";
    searchresult.current.style.height = "0px";
  };
  

  const handleSearch = (e) => {  
    setsearchkeys(searchkeyword);
    const keys=e.target.value;
    const result=searchkeyword.filter(key=> key.toLowerCase().indexOf(keys)>-1);
    console.log(result)

    if (e.target.value) {
      setsearchkeys(result);
      setsearchvalue(keys);
      searchresult.current.style.width = "520px";
      searchresult.current.style.height = "300px";
    }
    else {
      setsearchkeys(result);
      setsearchvalue(e.target.value);
      searchresult.current.style.height = "0px";
    }
  }
  const handleclickedsearch=(value)=>{
   setsearchvalue(value);
   normalsearchbar();
   setsearchkeys(searchkeyword);
   console.log(searchkeys);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#605e7c",
          borderRadius: "5px",
          padding: "10px",
          width: "500px",
          transition: ".5s"
        }}
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
          width: "480px"
          }}
          type="text"
          onChange={handleSearch}
          placeholder="Search..."
          value={searchvalue}
        />
      </div>
      <div ref={searchresult} style={{ transition:".2s",overflow:"hidden",overflowY:"auto",position: "absolute", marginTop: "10px", background: "white", color: "black", width: "520px",height:0, borderRadius: "5px", boxShadow: "0px 5px 5px" }}>
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
