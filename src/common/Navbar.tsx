import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
  Stack,
  IconButton,
  Panel,
  Link,
  Text,
  mergeStyleSets,
} from '@fluentui/react';
import { initializeIcons } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg'
initializeIcons();

const colors = {
  navbarBg: '#1e1e2f',
  linkDefault: '#61dafb',
  linkHover: '#21a1f1',
  panelBg: '#292b3e',
  textPrimary: '#ffffff',
  brandColor: '#f54291',
};

const styles = mergeStyleSets({
  navbar: {
    backgroundColor: colors.navbarBg,
    color: colors.textPrimary,
    padding: '0 24px',
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
  },
  logoImage: {
    height: 40,
    cursor: 'pointer',
    userSelect: 'none',
  },
  navLinks: {
    display: 'flex',

    gap: 32,
  },
  panelLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    padding: 24,
  },
  link: {
    color: colors.linkDefault,
    fontWeight: 600,
    fontSize: 16,
    selectors: {
      ':hover': {
        color: colors.linkHover,
        textDecoration: 'underline',
      },
    },
  },
  hamburgerButton: {
    color: colors.textPrimary,
  },
  brand: {
    fontWeight: 'bold',
    fontSize: 22,
    color: colors.brandColor,
    userSelect: 'none',
    letterSpacing: 1.2,
  },
});

const MOBILE_BREAKPOINT = 600;

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (navigate: ReturnType<typeof useNavigate>, path: string) => {
    navigate(path);
    if (isPanelOpen) {
      setIsPanelOpen(false);
    }
  };
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);
  const wasMobile = useRef(isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(mobile);

      if (wasMobile.current && !mobile && isPanelOpen) {
        setIsPanelOpen(false);
      }
      wasMobile.current = mobile;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isPanelOpen]);

  const navItems = (
    <>
      <Link className={styles.link} onClick={() => handleNavigation(navigate, '/')}>
        Home
      </Link>
      <Link className={styles.link} onClick={() => handleNavigation(navigate, '/about')}>
        About
      </Link>
      <Link className={styles.link} onClick={() => handleNavigation(navigate, '/contact')}>
        Contact
      </Link>
    </>
  );

  return (
    <>
      <nav className={styles.navbar}>
        <img
          src={logo}
          alt="Logo"
          className={styles.logoImage}
          onClick={() => navigate('/')}  
        />

        {!isMobile ? (
          <Stack horizontal className={styles.navLinks}>
            {navItems}
          </Stack>
        ) : (
          <IconButton
            iconProps={{ iconName: 'GlobalNavButton' }}
            ariaLabel="Open menu"
            onClick={() => setIsPanelOpen(true)}
            className={styles.hamburgerButton}
          />
        )}
      </nav>

      <Panel
        isOpen={isPanelOpen}
        onDismiss={() => setIsPanelOpen(false)}
        closeButtonAriaLabel="Close"
        headerText=""
        isLightDismiss
        styles={{
          main: { backgroundColor: colors.panelBg },
          headerText: { color: colors.textPrimary, fontWeight: 'bold' },
          closeButton: {
            color: colors.navbarBg,
            selectors: {
              ':hover': {
                color: colors.linkHover,
              },
            },
          },
        }}
      >
        <Stack className={styles.panelLinks}>{navItems}</Stack>
      </Panel>
    </>
  );
};

export default Navbar;
