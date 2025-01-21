import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';  // Assuming Card component exists
import styles from './Section.module.css';
import CustomCard from '../Card/Card';
import Button from '../Button/Button';

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
  const displayedData = collapsed ?  data : data.slice(0,7);
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Button onClick={handleCollapse} textValue={!collapsed ? "Show All" : "Collapse"}/>
      </div>
      
      <div className={styles.grid}>
        {displayedData.map((album) => (
          <CustomCard key={album.id} album={album} />  // Pass album data to Card component
        ))}
      </div>
    </div>
  );
}

export default Section;
