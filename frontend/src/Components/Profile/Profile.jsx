import { Typography } from '@material-ui/core'
import CustomTimeline from '../TimeLine/Timeline';
import React from 'react'
import './Profile.css';
function Profile() {
    return (
        <>
            <div className=' profile container_shadow'>
                <div className='profile_name'>
                    <Typography className="name">name</Typography>
                    <Typography className="title">Title</Typography>
                </div>
                <figure className='profile_image'>
                    <img src="https://cdn.discordapp.com/attachments/940892724566048790/958023021656961045/0P9A2606.JPG" alt="profile" />
                </figure>
            </div>
            <div className='profile_information'>
                Insert Timeline
                <br />
                < button>my Button</button>
                <CustomTimeline />

            </div>
        </>

    )
}

export default Profile