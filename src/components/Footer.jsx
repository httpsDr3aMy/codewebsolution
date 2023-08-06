import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [year, setYear] = useState('');

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    setYear(currentYear);
  }, []);
  
  return (
    <footer className='footer' id='footer'>
      <p className="footer__copyright">
        <span>&copy; {year}</span> CodeWeb Solution <FontAwesomeIcon icon={faSpider} style={{ color: '#00839f' }}/>
      </p>
    </footer>
  );
}

export default Footer;
