import React from 'react'
import styles from "./Footer.module.scss";
import { Row,Col } from 'reactstrap';
import Dolphin from "../../Assets/dolphinn.svg"
import Logo from "../../Assets/logo.svg";
import Icon1 from "../../Assets/discord.svg";
import Icon2 from "../../Assets/twitter.svg";


const Footer = () => {
  return (
    <div className={styles.main_container}>
        <Row className={`${styles.main_div} gx-0`}>
            <Col md={6} sm={12}>
<div className={styles.text_container}>
    <p>Join Our Community</p>
    <h3>Subscribe Discord server channel to <br /> stay informed of our news</h3>
    <button>Join our server</button>
</div>
            </Col>
            <Col md={6} sm={12}>
<div className={styles.img_container}>
    <img src={Dolphin} alt="dolphin" />
</div>
            </Col>
        </Row>
        <hr />
        <div className={styles.footer_container}>
        <div className={styles.logo_container}>
          <img src={Logo} alt="dolphin-logo" />
        </div>
        <div className={styles.icons_container}>
          <img src={Icon1} alt="icon-1" />
          <img src={Icon2} alt="icon-2" />
        </div>
      </div>
        </div>
  )
}

export default Footer