import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          A bookstore is a store that sells books, and where people can buy
          them. A bookstore will provide the details regarding each book which
          includes author,description,price etc used books.
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          
        </Typography>
      </Box>
    </div>
  );
};
export default About;
