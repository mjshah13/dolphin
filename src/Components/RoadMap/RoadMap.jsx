import React from 'react';
import styles from './RoadMap.module.scss';
import FirstImg from '../../Assets/first-img.png';
import SecondImg from '../../Assets/last-img.png';
import Line from '../../Assets/line.png';
import RoadMap1 from '../../Assets/roadmap1.svg';
import RoadMap2 from '../../Assets/roadmap2.svg';
import RoadMap3 from '../../Assets/roadmap3.svg';
import RoadMap4 from '../../Assets/roadmap4.svg';
import RoadMap5 from '../../Assets/roadmap.svg';
import Underline from '../../Assets/underline.png';

const RoadMap = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.div}>
          <div className={styles.heading_container}>
            <h1>
              road <span>map</span>
            </h1>
            <img src={Line} alt='line' />
          </div>

          <div className={styles.roadmap_container}>
            <div className={styles.roadmapOne_container}>
              <img src={RoadMap1} alt='roadmap' />
            </div>
            <div className={styles.roadmapOne_container}>
              <img src={RoadMap2} alt='roadmap' />
            </div>
            <div className={styles.roadmapOne_container}>
              <img src={RoadMap3} alt='roadmap' />
            </div>
            <div className={styles.roadmapOne_container}>
              <img src={RoadMap4} alt='roadmap' />
            </div>
            <div className={styles.roadmapOne_container}>
              <img src={RoadMap5} alt='roadmap' />
            </div>
          </div>
          <div className={styles.underline_container}>
            <img src={Underline} alt='underline' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
