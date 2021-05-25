import React from 'react';
import { Card, 
        CardContent,
        CardActionArea, 
        CardMedia, 
        Typography, 
        Container, 
        Button,
        IconButton,
         Grid, 
         Avatar,
         Box,
         Fade,
          Paper,
          Grow,
          FormControl} from '@material-ui/core';
import {MenuItem,Select,InputLabel} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {AddtoCart} from '../features/Food/foodSlice';
import {makeStyles} from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import { AppsOutlined,ListAltOutlined, ShoppingBasket } from '@material-ui/icons';
import ListRecpie from './ListRecpie';

const useStyles=makeStyles((theme)=>({
    container:{
        [theme.breakpoints.down('sm')]:{
            margin:"0px"
        }
    }
}))


function MenuCard(props) {
    const [view, setview] = React.useState(true)
    const [food,setfood]=React.useState([]);
    const [sort, setsort] = React.useState("");
    const classes=useStyles();
    const {sortBytype}=props;
    const dispatch=useDispatch();

    React.useEffect(async ()=>{
        const res=await fetch(' https://my-json-server.typicode.com/HARIHARANSANTHANAM/recepie/Recipie');
        const data=await res.json();
        console.log(data);
        setsort(Object.keys(data[0]).filter(f=> f==="price"));
        setfood(data);
    },[])

    function sortByProperty(property){  
        return function(a,b){  
           if(a[property] > b[property])  
              return 1;  
           else if(a[property] < b[property])  
              return -1;  
       
           return 0;  
        }  
     }

     function sortByAsc(property){  
        return function(a,b){  
           if(a[property] < b[property])  
              return 1;  
           else if(a[property] > b[property])  
              return -1;  
       
           return 0;  
        }  
     }

    const handleChange=(e)=>{
        setsort(e.target.value);
    }
    return (
        <div className={classes.container}>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap" alignItems="center">
            <Typography variant="h5">
            Delecious And Spicy Foods
            </Typography>
            <Box>
                <FormControl  style={{margin:"5px",minWidth:120}}>
        <InputLabel id="demo-simple-select-outlined-label" >Sort By</InputLabel>
            <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={sort}
          onChange={handleChange}
          label="SortBy"
        >
            
            {
                        food[0] && Object.keys(food[0]).filter(f=> f=="price" || f=="rating").map((f,i)=>{
                           return(<MenuItem key={i} value={f}>{f}</MenuItem>);
                        })
            }
        </Select>
        </FormControl>
            <IconButton onClick={()=>setview(true)}>
            <AppsOutlined/>
            </IconButton>
            <IconButton onClick={()=>setview(false)}>
            <ListAltOutlined/>
            </IconButton>
            </Box>
            </Box>
        <div >
            {
                view? 
                <Fade in={view}>
                <div style={{ display: "flex", flexBasis: "100%",justifyContent:"flex-start" ,flexWrap: "wrap" }}>
                {food.sort(sortBytype === "Low to High" ?sortByProperty(sort):sortByAsc(sort)).map((f)=>{
                    return(
                        <Card  style={{ margin:"10px 10px",overflow:"hidden" }}>
                        <CardActionArea>
                            <CardMedia
                                style={{ height: "300px", width: "300px" }}
                                image={f.image}
    
                            />
                            <CardContent>
                                <Grid container xs={12}>
                                    <Grid item xs={8}>
                                        <Grid xs={12} item >
                                         <Typography variant="body2" noWrap>
                                            {f.title}
                                        </Typography>
                                        </Grid>
                                    
                                <Rating
                                    name="read-only"
                                    value={f.rating}
                                    readOnly 
                                />
                                </Grid>
                                <Grid item xs={4}>
                                <Typography variant="h6">
                                    Rs {f.price}
                                 </Typography>
                                 
                                 <Button variant="outlined" color="primary" onClick={(e)=>{console.log("dispatched");dispatch(AddtoCart(f))}}>
                                    Cart
                                    </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    );
                })
                }
                </div>
                </Fade>
                :
                
                <Grow in={!view} >
                    <ListRecpie sortby={sort} data={food} animate={!view}/>
                </Grow>

            }
           </div>
        </div>
    )
}

export default MenuCard
