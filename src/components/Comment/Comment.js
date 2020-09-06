import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageShow from '../ImageShow/ImageShow';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Detail = () => {
    const classes = useStyles();
    const {postDetails} = useParams();
    const [detail, setDetail] = useState([]);
    const [comment, setComment] = useState([]);
    const [image, SetImage] = useState([]);

    const img = image.map(img=>img.picture.thumbnail)
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postDetails}`)
        .then(res=>res.json())
        .then(data=>setDetail(data))
        }, [])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postDetails}`)
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[])

    useEffect(()=>{
        fetch('https://randomuser.me/api/')
        .then(res=>res.json())
        .then(data=>SetImage(data.results))
    },[])

    
    return (
        <div>
            <div>
            <Card  style={{marginLeft: '500px', marginBottom: '10px'}} className={classes.root}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
            image={img}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {detail.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {detail.body}
            </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
            </CardActions>
            </Card>
            </div>

            <div>
            {
                comment.map(comment=><ImageShow comment={comment} img={img} key={comment.id}>
                </ImageShow>)
            }
            </div>
        </div>
        
    );
};

export default Detail;