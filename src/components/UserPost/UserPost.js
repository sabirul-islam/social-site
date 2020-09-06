import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));



const UserPost = (props) => {
    const classes = useStyles();
    const {title, body, id} = props.user;
    
    return (
    <div style={{display: 'inline-flex', margin:'10px', padding: '10px', width:'300px'}} className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                <h4>{title}</h4> 
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                {body}
                </Typography>
                <Typography variant="body2" gutterBottom>
                <Link style={{textDecoration: 'none'}} to={`/detail/${id}`}><Button variant="contained" color="secondary">See Details</Button></Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>       
    );
};

export default UserPost;