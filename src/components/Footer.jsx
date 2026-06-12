import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="footer-title">Location</h2>
          <p>632 Quirino Ave.<br/>Tambo, Paranaque</p>
        </div>

        <div className="footer-column">
          <h2 className="footer-title">Socials</h2>
          <div className="socials">
            <a href="https://www.facebook.com/carlvincent.ko" target="_blank" rel="noopener noreferrer">
              <img src="/elements/footer/fb.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/carl_ng_lahat/" target="_blank" rel="noopener noreferrer">
              <img src="/elements/footer/ig.png" alt="Instagram" />
            </a>
            <a href="https://x.com/BillySchmidht" target="_blank" rel="noopener noreferrer">
              <img src="/elements/footer/x.png" alt="X" />
            </a>
            <a href="https://www.linkedin.com/in/carlvincentko/" target="_blank" rel="noopener noreferrer">
              <img src="/elements/footer/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h2 className="footer-title">Contact</h2>
          <p>carl_ko@dlsu.edu.ph<br/>+63 969 149 5270</p>
        </div>
      </div>
    </footer>
  )
}
