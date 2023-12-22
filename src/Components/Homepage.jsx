
import React from "react";
import DrawerAppBar from "./Home";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import MultiActionAreaCard from "./Card";
import { Box, Typography } from "@mui/material";

const Homepage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <DrawerAppBar />

      <Outlet />
      <Box sx={{ flexGrow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h3" color="textSecondary" sx={{ mt: 2 }}>
         <center>  The Only Way To Ensure Your Vegetables as Pesticide Free,Then</center>
        </Typography>
        <Typography variant="h2" color="textSecondary">
          "GROW YOUR OWN"
        </Typography>
        <Button variant="contained" href="/LoginForm" sx={{ mt: 2 }}>
          Get Started
        </Button>
        <br></br> <br></br><br></br>
        <br /><br></br>
        <br></br>
        <br></br>
        <br /> <br></br>
        <br></br><br></br>
        <br /> <br></br>
        <br></br>
        <br></br>
        <br />
        
        <center>
  
        <MultiActionAreaCard sx={{mt:6}}/>
        </center>
        <br></br>
        <br></br>
        <br /> <br></br>
        <br></br><br></br>
        <br /> <br></br>
        <br></br>
        <br></br>
        <br />
        <Typography variant="h3" color="textSecondary" sx={{ mt: 2 }}>
         <center>  The Love of Gardening is a SEED once sown</center>
        </Typography>
        <Typography variant="h2" color="textSecondary">
          That NEVER DIES
        </Typography>
        <Button variant="contained" href="/LoginForm" sx={{ mt: 2 }}>
          Start Planting
        </Button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center> 
      <img src="https://thumbs.dreamstime.com/b/plant-tree-hands-putting-soil-water-to-trees-plant-tree-hands-putting-soil-water-to-trees-nature-light-112723129.jpg" alt="Image 1" style={{ width: '1500px', maxWidth: '600px', margin: '30px 0' }} />
      <img src="https://img.freepik.com/premium-photo/people-hands-planting-small-tree-sunset-concept-save-earth_34152-3251.jpg" alt="Image 1" style={{ width: '1500px', maxWidth: '600px', margin: '30px 0' }} />
      
        </center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </Box>
  );
};

export default Homepage;
