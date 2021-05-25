import React from 'react'
import {
    Typography, 
     Avatar,
     IconButton,Fade} from '@material-ui/core';
     
import { Rating } from '@material-ui/lab';

import { ShoppingBasket,ShoppingCart } from '@material-ui/icons';

function ListRecpie(props) {
    const {data,sortby,animate}=props;
    function sortByProperty(property){  
        return function(a,b){  
           if(a[property] > b[property])  
              return 1;  
           else if(a[property] < b[property])  
              return -1;  
       
           return 0;  
        }  
     }
    return (
        <Fade in={animate}>
            <ul style={{width:"95%"}}>
                { 
                sortby?
                    data.sort(sortByProperty(sortby)).map((f,i) =>{
                         return(
                                <li key={i} >
                                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"5px"}}>
                                        <div  style={{display:"flex",alignItems:"center",justifyContent:"space-between",felxWrap:"wrap",flex:0.2}}>
                                    <Avatar
                                      src={f.image}
                                      />
                                      <div style={{display:"flex",flexDirection:"column",marginTop:"5%",marginLeft:"5px"}}>
                                      <Typography variant="body1" noWrap >
                                          {f.title} • Rs {f.price}
                                      </Typography>
                                      <Rating
                                        readOnly
                                        value={f.rating}
                                        />
                                        </div>
                                      </div>
                                      <div style={{display:"flex",alignItems:"center"}}>
                                      
                                        <IconButton variant="outlined" color="secondary">
                                           <ShoppingCart/>
                                        </IconButton>
                                        </div>
                                        </div>
                                </li>
                         );
                    }): data.map((f,i) =>{
                        return(
                               <li key={i} >
                                   <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"5px"}}>
                                       <div  style={{display:"flex",alignItems:"center",justifyContent:"space-between",felxWrap:"wrap",flex:0.1}}>
                                   <Avatar
                                     src={f.image}
                                     />
                                     <div style={{display:"flex",flexDirection:"column",marginTop:"5%",marginLeft:"5px"}}>
                                     <Typography variant="body1" noWrap >
                                         {f.title} • Rs {f.price}
                                     </Typography>
                                     <Rating
                                       readOnly
                                       value={f.rating}
                                       />
                                       </div>
                                     </div>
                                     <div style={{display:"flex",alignItems:"center"}}>
                                     
                                       <IconButton variant="outlined" color="secondary">
                                          <ShoppingCart/>
                                       </IconButton>
                                       </div>
                                       </div>
                               </li>
                        );
                   })
                }
                
                </ul>
                
        </Fade>
    )
}

export default ListRecpie
