import React from 'react'
import '../Components/Footer.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <>
    <footer>
<div class="footer">
<div class="icons">
<YouTubeIcon />
<InstagramIcon  />
<FacebookIcon />
<LinkedInIcon />
</div>

<div class="bar">
<ul>
<li>Contact us</li>
<li>Our Services</li>
<li>Privacy Policy</li>
<li>Terms & Conditions</li>

</ul>
</div>

<div class="text">
    Crypto Cares © 2024 || Designed By: Team Deblock
</div>
</div>
</footer>
    </>
  ) 
}

export default Footer