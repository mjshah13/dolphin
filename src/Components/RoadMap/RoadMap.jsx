import React from 'react';
import styles from './RoadMap.module.scss';

const RoadMap = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.div}>
        <div className={styles.heading_container}>
          <h1>
            road <span>map</span>
          </h1>
          <img src='Assets/line.png' alt='line' />
        </div>

        <div className={styles.roadmap_container}>
          <div className={styles.roadmapOne_container}>
            <img src='Assets/roadmap1.svg' alt='roadmap' />
          </div>
          <div className={styles.roadmapOne_container}>
            <img src='Assets/roadmap2.svg' alt='roadmap' />
          </div>
          <div className={styles.roadmapOne_container}>
            <img src='Assets/roadmap3.svg' alt='roadmap' />
          </div>
          <div className={styles.roadmapOne_container}>
            <img src='Assets/roadmap4.svg' alt='roadmap' />
          </div>
          <div className={styles.roadmapOne_container}>
            <img src='Assets/roadmap.svg' alt='roadmap' />
          </div>
        </div>
        <div className={styles.underline_container}>
          <img src='Assets/underline.png' alt='underline' />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
