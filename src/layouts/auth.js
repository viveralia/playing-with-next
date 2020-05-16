import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgWrapper: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  img: {
    width: "80%",
  },
}));

const AuthLayout = ({ img, children }) => {
  const { src, alt } = img;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7} className={classes.imgWrapper}>
            <img src={src} alt={alt} className={classes.img} />
          </Grid>
          <Grid item xs={12} md={5}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

AuthLayout.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
