import { Button } from '@material-ui/core'
import React from 'react'

function Button({ text, icon }) {
    return (
        <>
            <Button className="site_btn" endIcon={icon ? <div className='btn_icon_container' >{icon}</div> : null} ><span className="btn_text">{text}</span></Button>
        </>
    )
}

export default Button