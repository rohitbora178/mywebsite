import React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';

const useStyles = mergeStyleSets({
  footer: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: '40px 20px',
    fontFamily: 'Segoe UI, sans-serif',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '30px',
  },
  column: {
    flex: '1 1 200px',
    minWidth: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 12,
    color: '#00b2ff',
  },
  link: {
    display: 'block',
    color: '#ccc',
    fontSize: 14,
    marginBottom: 8,
    textDecoration: 'none',
    ':hover': {
      color: '#fff',
    },
  },
  contact: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 6,
  },
  bottomBar: {
    textAlign: 'center',
    borderTop: '1px solid #333',
    paddingTop: 20,
    color: '#777',
    fontSize: 13,
  },
});

const Footer: React.FC = () => {
  const classes = useStyles;

  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.column}>
          <div className={classes.title}>आमच्या सेवा</div>
          <a className={classes.link} href="#">गणेशोत्सव आयोजन</a>
          <a className={classes.link} href="#">सांस्कृतिक कार्यक्रम</a>
          <a className={classes.link} href="#">छायाचित्रण व व्हिडिओ</a>
          <a className={classes.link} href="#">स्मरणिका व अल्बम</a>
        </div>

        <div className={classes.column}>
          <div className={classes.title}>गॅलरी</div>
          <a className={classes.link} href="#">फोटो गॅलरी</a>
          <a className={classes.link} href="#">व्हिडिओ गॅलरी</a>
        </div>

        <div className={classes.column}>
          <div className={classes.title}>मंडळाबद्दल</div>
          <a className={classes.link} href="#">इतिहास</a>
          <a className={classes.link} href="#">संपर्क करा</a>
          <a className={classes.link} href="#">कार्यकारी मंडळ</a>
        </div>

        <div className={classes.column}>
          <div className={classes.title}>संपर्क</div>
          <div className={classes.contact}>📍 बेलापूर, महाराष्ट्र</div>
          <div className={classes.contact}>📞 +91 9766599007</div>
          <div className={classes.contact}>📧 siddhivinayakyuvamanch@gmail.com</div>
        </div>
      </div>

      <div className={classes.bottomBar}>
        © {new Date().getFullYear()} सिद्धिविनायक युवा मंच. सर्व हक्क राखीव.
      </div>
    </footer>
  );
};

export default Footer;
