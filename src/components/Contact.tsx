import React from 'react';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import Footer from '../common/Footer';

const useStyles = mergeStyleSets({
  banner: {
    background: 'linear-gradient(to right, #c62828, #8e0000)', // Red tone for Ganpati theme
    color: '#fff',
    padding: '100px 20px 60px',
    textAlign: 'center',
  },
  bannerHeading: {
    fontSize: 44,
    fontWeight: 800,
    marginBottom: 10,
  },
  bannerSubheading: {
    fontSize: 20,
    fontWeight: 400,
    maxWidth: 700,
    margin: '0 auto',
  },
  container: {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
  },
  formCard: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 16,
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  input: {
    padding: '14px 18px',
    fontSize: 16,
    borderRadius: 8,
    border: '1px solid #ccc',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    ':focus': {
      outline: 'none',
      borderColor: '#c62828',
      boxShadow: '0 0 0 3px rgba(198,40,40,0.2)',
    },
  },
  textarea: {
    resize: 'vertical',
    minHeight: 120,
    fontFamily: "'Nunito Sans', sans-serif",
  },
  button: {
    backgroundColor: '#c62828',
    color: '#fff',
    padding: '14px 20px',
    fontSize: 16,
    fontWeight: 600,
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#8e0000',
    },
  },
  success: {
    textAlign: 'center',
    color: '#28a745',
    fontWeight: 600,
  },
});

const Contact: React.FC = () => {
  const classes = useStyles;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('तुमचा संदेश यशस्वीरित्या पाठवला गेला आहे!');
  };

  return (
    <>
      {/* Header/Banner */}
      <div className={classes.banner}>
        <h1 className={classes.bannerHeading}>संपर्क साधा</h1>
        <p className={classes.bannerSubheading}>
          तुम्ही कार्यक्रमासाठी, सूचना किंवा शुभेच्छांसाठी आमच्याशी संपर्क करू शकता. आम्हाला तुमचं मनापासून स्वागत आहे!
        </p>
      </div>

      {/* Contact Form */}
      <div className={classes.container}>
        <form className={classes.formCard} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="तुमचं नाव"
            required
            className={classes.input}
          />
          <input
            type="email"
            placeholder="तुमचा ई-मेल"
            required
            className={classes.input}
          />
          <textarea
            placeholder="तुमचा संदेश"
            required
            className={`${classes.input} ${classes.textarea}`}
          />
          <button type="submit" className={classes.button}>
            संदेश पाठवा
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
