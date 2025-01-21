import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import React from 'react';
import styles from './Card.module.css';

function CustomCard({ album }) {
  return (
    <div className={styles.card}>
      <img src={album.image} alt={album.title} className={styles.image} />
      {/* <p className={styles.description}>{album.description}</p> */}
      <Chip label={album.follows + " Follows"}/>
      <h3 className={styles.title}>{album.title}</h3>
    </div>

    
  );
}

export default CustomCard;
