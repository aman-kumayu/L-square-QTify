import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tab, Tabs, Box, Chip } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Songs.css'; // Custom styling for the tabs and carousel
import Carousel from '../Carousel/Carousel';

const Songs = () => {
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All'); // Default selected genre is 'All'
  
  // Fetch genres and songs data
  useEffect(() => {
    const fetchData = async () => {
      const genresResponse = await axios.get('https://qtify-backend-labs.crio.do/genres');
      const songsResponse = await axios.get('https://qtify-backend-labs.crio.do/songs');
      
      setGenres(genresResponse.data.data);
      setSongs(songsResponse.data);
    };
    
    fetchData();
  }, []);

  // Filter songs based on selected genre
  const filteredSongs = selectedGenre === 'All' 
    ? songs 
    : songs.filter(song => song.genre.key === selectedGenre);

  // Handle Tab change
  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const renderSong = (song) => {
    return <div className="song-card" key={song.id}>
        <img src={song.image} alt={song.title} />
        <h3>{song.title}</h3>
        <Chip label={`Likes: ${song.likes}`} color="primary" />
    </div>
  }

  return (
    <div className="songs-section">
      <h2>Songs</h2>
      
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={selectedGenre}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="genres tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          {/* Add the All tab and other genre tabs */}
          <Tab label="All" value="All" />
          {genres.map(genre => (
            <Tab key={genre.key} label={genre.label} value={genre.key} />
          ))}
        </Tabs>
      </Box>
      <Carousel data={filteredSongs} renderItem={renderSong} />
      
      {/* Carousel for displaying songs */}
      {/* <Swiper spaceBetween={10} slidesPerView="auto" loop={true}>
        {filteredSongs.map(song => (
          <SwiperSlide key={song.id}>
            <div className="song-card" key={song.id}>
              <img src={song.image} alt={song.title} />
              <h3>{song.title}</h3>
              <Chip label={`Likes: ${song.likes}`} color="primary" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default Songs;
