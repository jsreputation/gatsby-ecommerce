import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Volchok \n A Russian brand`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Volchok is an innovative Russian brand with a
              contemporary edge. We make timeless everyday casual clothing.
            </p>
            <br />
            <br />
            <p>
              We created some of the world's first T-shirts and spent decades
              perfecting the feel of the cotton in Russia. Today we are the only brand
              that makes T-shirts in Russia.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
                Vasily Volchok (his surname means “spinning top” in Russian) founded the brand in 2014. He was driven by the ambition “to add his contribution and vision to the segment, to create high-quality and interesting content, to tell the story of ‘Russian Gothic’”.
                The brand’s first hits were T-shirts with the inscriptions “Faith”, “Youth” and “My Defense”.
              </p>
              <ol>
                <li>Be an ecowear</li>
                <li>Sophisticated and not mass-produced</li>
                <li>Only natural materials</li>
              </ol>
              <img alt={'founder'} src={'/about2.png'}></img>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
