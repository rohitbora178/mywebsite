import React, { useRef } from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { IconButton } from '@fluentui/react/lib/Button';
import Footer from '../common/Footer';
import image1 from '../images/image 1.jpg';
import image2 from '../images/image 2.jpg';
import image3 from '../images/image 3.jpg'; 
import image4 from '../images/image 4.jpg';
import image5 from '../images/image 5.jpg';
const NAVBAR_HEIGHT = 71.6;

const useStyles = mergeStyleSets({
  root: {
    height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
    width: '100%',
    backgroundImage:
      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    animation: 'fadeIn 2s ease-in-out',
    position: 'relative',
  },
  headline: {
    fontSize: 52,
    fontWeight: 800,
    marginBottom: 10,
    animation: 'slideDown 1s ease-out',
    color: '#FFD700', // Gold color for highlight
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 400,
    marginBottom: 40,
    animation: 'slideUp 1.5s ease-out',
    maxWidth: 800,
  },
  albumWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: 1200,
    display: 'flex',
    alignItems: 'center',
    padding: '0 40px',
    boxSizing: 'border-box',
  },
  albumContainer: {
    display: 'flex',
    overflowX: 'hidden',
    gap: 24,
    scrollBehavior: 'smooth',
    padding: '10px 0',
  },
  photoCard: {
    flex: '0 0 auto',
    width: 300,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 6px 15px rgba(0,0,0,0.4)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'scale(1.06)',
      boxShadow: '0 8px 18px rgba(0,0,0,0.5)',
    },
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    backgroundColor: '#FFD700',
    color: '#000',
  },
  leftButton: {
    left: 0,
  },
  rightButton: {
    right: 0,
  },
  section: {
    padding: '80px 20px',
    textAlign: 'center',
  },
  sectionDark: {
    backgroundColor: '#f0f4f8',
    color: '#333',
  },
  sectionLight: {
    backgroundColor: '#fff',
    color: '#333',
  },
  sectionHeading: {
    fontSize: 36,
    marginBottom: 40,
    fontWeight: 700,
    color: '#d32f2f', // Festive red
  },
  serviceCard: {
    maxWidth: 300,
    margin: '0 auto',
  },
  testimonial: {
    maxWidth: 300,
    fontStyle: 'italic',
    margin: '0 auto',
  },
  greenSection: {
    backgroundColor: '#e8f5e9',
    color: '#1b5e20',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  '@keyframes slideDown': {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  '@keyframes slideUp': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
});

const photos = [
  image1,
  image2,
  image3,
  image4,
  image5
];

const Home: React.FC = () => {
  const classes = useStyles;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 340;
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  

  return (
    <>
      <div className={classes.root}>
        <h1 className={classes.headline}>सिद्धिविनायक युवा मंच</h1>
        <p className={classes.subtitle}>गणरायाच्या भक्तिमय आठवणी... तुमच्यासोबत शेअर करत आहोत</p>

        <div className={classes.albumWrapper}>
          <IconButton
            iconProps={{ iconName: 'ChevronLeft' }}
            className={`${classes.navButton} ${classes.leftButton}`}
            onClick={() => scroll('left')}
            ariaLabel="Scroll left"
          />
          <div className={classes.albumContainer} ref={scrollRef}>
            {photos.map((url, index) => (
              <div className={classes.photoCard} key={index}>
                <img src={url} alt={`गणेशोत्सव छायाचित्र ${index + 1}`} className={classes.photo} />
              </div>
            ))}
          </div>
          <IconButton
            iconProps={{ iconName: 'ChevronRight' }}
            className={`${classes.navButton} ${classes.rightButton}`}
            onClick={() => scroll('right')}
            ariaLabel="Scroll right"
          />
        </div>
      </div>

      <section className={`${classes.section} ${classes.sectionDark}`}>
        <h2 className={classes.sectionHeading}>आमच्या सेवा – भक्ती आणि आयोजन एकत्र</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 40 }}>
          <div className={classes.serviceCard}>
            <h3>गणेशोत्सव आयोजन</h3>
            <p>दर्जेदार मंडप, सजावट आणि सांस्कृतिक कार्यक्रमांचे आयोजन.</p>
          </div>
          <div className={classes.serviceCard}>
            <h3>छायाचित्रण</h3>
            <p>गणेश मूर्ती, आरास व कार्यक्रमांचे व्यावसायिक छायाचित्रण.</p>
          </div>
          <div className={classes.serviceCard}>
            <h3>स्मरणिका व अल्बम</h3>
            <p>उत्कृष्ट स्मरणिका व डिजिटल अल्बम तयार करण्याची सेवा.</p>
          </div>
        </div>
      </section>

      <section className={`${classes.section} ${classes.sectionLight}`}>
        <h2 className={classes.sectionHeading}>भक्तांचे अभिप्राय</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 40 }}>
          <blockquote className={classes.testimonial}>
            "मंडळाचं आयोजन खूपच उत्तम आणि भक्तिमय होतं. दरवर्षी येतो!"
            <br /><br /><strong>- अमित जोशी</strong>
          </blockquote>
          <blockquote className={classes.testimonial}>
            "आरास आणि कार्यक्रम अप्रतिम होते. संपूर्ण टीमचं अभिनंदन!"
            <br /><br /><strong>- श्रेया कुलकर्णी</strong>
          </blockquote>
        </div>
      </section>

      <section className={`${classes.section} ${classes.greenSection}`}>
        <h2 className={classes.sectionHeading}>आमचे ध्येय – वृक्षारोपण आणि हरित पर्यावरण</h2>
        <div style={{ maxWidth: 800, margin: '0 auto', fontSize: 18, lineHeight: 1.8 }}>
          🌿 <strong>सिद्धिविनायक युवा मंच</strong> हे केवळ गणेशोत्सवापुरते मर्यादित नाही — आमचा मुख्य हेतू आहे
          पर्यावरणसंवर्धन. प्रत्येक वर्षी आम्ही विविध भागात वृक्षारोपण मोहीम राबवतो. <br /><br />
          आमच्या कार्यातून आम्ही समाजात हरित क्रांती घडवू इच्छितो — कारण "एक झाड, एक जीवन" हीच आमची खरी श्रद्धा आहे.
        </div>
      </section>


      <Footer />
    </>
  );
};

export default Home;
