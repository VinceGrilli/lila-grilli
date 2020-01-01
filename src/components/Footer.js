import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow me <a href="https://instagram.com/lila_seveda/">@Lila_Seveda</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://vincegrilli.dev/">Vince Grilli</a>.
        </span>
      </div>
    </footer>
  </div>
)
