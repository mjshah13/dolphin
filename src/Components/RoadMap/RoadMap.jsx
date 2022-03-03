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
          <img src='Assets/line.svg' alt='line' />
        </div>

        <div className={styles.roadmap_container}>
          <div className={styles.roadmapOne_container}>
            <div className={styles.drop_container}>
              <div className={styles.container}>
                <img src='Assets/drop.svg' alt='drop' />
                <p>
                  1:1 Prototype <br /> Review
                </p>
              </div>
              <img
                className={styles.dotted_line}
                src='Assets/road-map-line.svg'
                alt=''
              />
            </div>
            <div className={styles.drop_container}>
              <div className={styles.container}>
                <img src='Assets/world.svg' alt='world' />
                <p>x thousands unique worlds mint</p>
              </div>
              <img
                className={styles.dotted_line}
                src='Assets/road-map-line.svg'
                alt=''
              />
            </div>
            <div className={styles.drop_container}>
              <div className={styles.container}>
                <img src='Assets/decoration.svg' alt='decoration' />
                <p>claim your identical decoration</p>
              </div>
              <img
                className={styles.dotted_line}
                src='Assets/road-map-line.svg'
                alt=''
              />
            </div>
            <div className={styles.drop_container}>
              <div className={styles.container}>
                <img src='Assets/ecosystem.svg' alt='ecosystem' />
                <p>Special access to Dolphin ecosystem</p>
              </div>
              <img
                className={styles.dotted_line}
                src='Assets/road-map-line.svg'
                alt=''
              />
            </div>
            <div className={styles.drop_container}>
              <div className={styles.container}>
                <img src='Assets/metaverse.svg' alt='roadmap' />
                <p>Metaverse teleportation vault</p>
              </div>
              <img
                className={styles.dotted_line}
                src='Assets/road-map-line.svg'
                alt=''
              />
            </div>
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
