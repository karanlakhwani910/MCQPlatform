import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./button.styles.scss";



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(9),
      
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (    
      <Button
      className={classes.root}
      onClick={props.onClick}
       style={{
        borderRadius: 2,
        backgroundColor: "cyan",
        height: "60px",
        width: "106px",
        padding: "18px 36px",
        fontSize: "18px",
        margin: "80px"
    }}
    variant="contained"
    >
        {props.children}
      </Button>
  );
}