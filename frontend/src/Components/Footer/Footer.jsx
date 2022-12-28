import { Typography } from '@material-ui/core'
import React from 'react'
import resumeData from '../../utils/resumeData'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer_left">
        <Typography className="footer_copyright">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">Designed and Devloped by <a href='/'>Abdallah ATGUIRI</a><br />Clone idea from <a href='/' target={"_blank"}>Tavonline</a>.</Typography>
      </div>

    </div>
  )
}

export default Footer