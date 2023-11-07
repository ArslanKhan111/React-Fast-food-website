import React from 'react'

function Footer() {
  return (
    <div className='container footer'>
  
      <footer className="kfc-footer">
      <div className="footer-logo">
            <img src="images/footer-logo2.png" alt="KFC Logo" />
          </div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Promotions</a></li>
              <li><a href="#">Find a KFC</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-info">
          
          <div className='f-p'>
          <p>&copy; 2023 KFC Pakistan. All rights reserved.</p>
          
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
