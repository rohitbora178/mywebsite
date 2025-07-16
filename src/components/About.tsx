import React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import Footer from '../common/Footer';

const useStyles = mergeStyleSets({
  root: {
    padding: '80px 20px',
    backgroundColor: '#fff',
    color: '#333',
    textAlign: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 800,
    marginBottom: 20,
    color: '#c62828', // Ganpati theme color (red/maroon tone)
  },
  subheading: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 40,
    maxWidth: 800,
    margin: '0 auto 40px auto',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 40,
    paddingTop: 20,
    maxWidth: 1200,
    margin: '0 auto',
  },
  card: {
    padding: 24,
    backgroundColor: '#fdf6f0',
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    textAlign: 'left',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    },
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 600,
    color: '#c62828',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
  },
});

const About: React.FC = () => {
  const classes = useStyles;

  return (
    <>
      <div className={classes.root}>
        <h1 className={classes.heading}>मंडळाबद्दल</h1>
        <p className={classes.subheading}>
          सिद्धिविनायक युवा मंच हे पुण्यातील एक अग्रगण्य गणेश मंडळ असून, सामाजिक बांधिलकी, सांस्कृतिक कार्यक्रम आणि भक्तिमय गणेशोत्सवाचे आयोजन हे आमचे प्रमुख उद्दिष्ट आहे.
        </p>

        <div className={classes.contentGrid}>
          <div className={classes.card}>
            <h3 className={classes.cardTitle}>आमचे ध्येय</h3>
            <p className={classes.cardText}>
              समाजात भक्ती, संस्कृती आणि ऐक्याची भावना निर्माण करणे आणि गणेशोत्सवाच्या माध्यमातून सकारात्मक ऊर्जा पसरवणे.
            </p>
          </div>
          <div className={classes.card}>
            <h3 className={classes.cardTitle}>आमची दृष्टिकोन</h3>
            <p className={classes.cardText}>
              युवा पिढीला एकत्र आणणारे, सामाजिक उपक्रमांना चालना देणारे आणि प्रेरणादायी उपक्रम राबवणारे मंडळ बनणे.
            </p>
          </div>
          <div className={classes.card}>
            <h3 className={classes.cardTitle}>आमच्या मूल्यांची शिदोरी</h3>
            <p className={classes.cardText}>
              भक्ती, पारदर्शकता, समाजसेवा आणि एकात्मता ही आमच्या कार्यपद्धतीची मूलभूत तत्त्वे आहेत.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
