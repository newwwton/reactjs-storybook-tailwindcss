import React from 'react';
import './footer.css';
import Link from '../../atoms/link/link';

function Footer() {
  return (
    <div className="footer">
      <p className="text-footer">
        Made with ❤️ by
        {' '}
        <Link href="https://newwwton.com" title="Newwwton" />
      </p>
    </div>
  );
}

export default Footer;
