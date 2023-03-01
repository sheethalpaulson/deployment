import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">Books World</Typography>
          
          <div display= "flex">
      <div margin-top="20px" margin-right= "50px">
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3NoZWxmfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          width="800px"
          height="400px"
        />
      </div>
      <div display="flex">
    <div>
      <h2>Deciding what to do Next?</h2>
      <p>
        You’re in the right place. Tell us what titles or genres you’ve
        enjoyed in the past, and we’ll give you surprisingly insightful
        recommendations.
      </p>
    </div>
    <div>
      <h2>What are your friends reading?</h2>
      <p>
        Chances are your friends are discussing their favorite (and least
        favorite) books on Goodreads.
      </p>
    </div>
    </div>
    <div display= "flex" flexdirection= "column">
      <div>
      <a href="./Bookone.js">
        <img 
          src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1409595968i/929.jpg"
          width="100px"
          height="200px"
        />
        </a>
        <a href="theguernsey.html"><img src="https://m.media-amazon.com/images/I/51AefKieyHL._SX321_BO1,204,203,200_.jpg" width="100px" height="200px" />
        </a>
        <a href="thehelp.html"> <img src="https://m.media-amazon.com/images/I/51qhaqPbtEL._SY344_BO1,204,203,200_QL70_ML2_.jpg" width="100px" height="200px" />
        </a>
        </div>
      <div>
        <a href="thefirstdays.html"><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388800064i/9648068.jpg" width="100px" height="200px" /></a>
        <a href="feed.html"><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1517425038i/34326012.jpg" width="100px" height="200px" /></a>
        <a href="rotrun.html"><img src="https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781442402331_9781442402331_lg.jpg" width="100px" height="200px" /></a>
      </div>
    </div>
    </div>
  
        </Button>
      </Box>
    </div>
  );
};

export default Home;