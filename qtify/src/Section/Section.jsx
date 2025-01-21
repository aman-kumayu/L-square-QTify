import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Section.module.css';
import Button from '../Button/Button';
import Carousel from '../Carousel/Carousel';  // Import the Carousel component
import CustomCard from '../Card/Card';  // Assuming Card component exists

function Section({ title, apiEndpoint }) {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  // Fetch data for albums
  useEffect(() => {
    axios.get(apiEndpoint)
      .then((response) => {
        setData(response.data);  // Assuming the data structure is an array of albums
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apiEndpoint]);

  // Toggle collapse state
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const renderCard = (album) => (
    <CustomCard key={album.id} album={album} />
  );

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Button onClick={handleCollapse} textValue={!collapsed ? "Show All" : "Collapse"} />
      </div>
      
      {collapsed ? (
        <Carousel data={data} renderItem={renderCard} />  // Render the carousel when collapsed
      ) : (
        <div className={styles.grid}>
          {data.slice(0, 7).map((album) => (
            <CustomCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
