import React from 'react'
import './Footer.css'

const Footer = () => {
  // social links
  const instagram = 'https://www.instagram.com/zannonly_/'
  const tiktok = 'https://www.tiktok.com/@zan.ae'
  const whatsapp = 'https://wa.me/6285340827717'

  return (
    <div className='footer-container '>

      <p><i>Developed & Designed by</i> <b>@zannonly_</b></p>

      {/*my social accounts */}
      <div className='socials'>

        <div onClick={() => window.open(instagram, '_blank')} className='social-icon'><i class="fa-brands fa-instagram"></i></div>
        <div onClick={() => window.open(tiktok, '_blank')} className='social-icon'><i class="fa-brands fa-tiktok"></i></div>
        <div onClick={() => window.open(whatsapp, '_blank')} className='social-icon'><i class="fa-brands fa-whatsapp"></i></div>
        <div onClick={() => window.open('mailto:admin@irzan.us')} className='social-icon'><i class="fa-solid fa-envelope"></i></div>

      </div>

    </div>
  )
}

export default Footer
