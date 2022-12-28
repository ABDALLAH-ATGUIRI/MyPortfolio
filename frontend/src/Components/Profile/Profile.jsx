import { Typography } from '@material-ui/core'
import CustomTimeline, { CustomTimelineSeparator } from '../TimeLine/Timeline';
import resumeData from '../../utils/resumeData';
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined"
import React from 'react'
import './Profile.css';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineConnector from '@material-ui/lab/TimelineConnector';

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineConnector className='timeline_content'>
            {link ? (<Typography className='timelineItem_text'><span>{title}:<a href={link} target="_blank">{text}</a></span></Typography>) : (<Typography className='timelineItem_text'><span>{title}:</span>{text}</Typography>)}
        </TimelineConnector>
    </TimelineItem>
)

function Profile() {
    return (
        <>
            <div className=' profile container_shadow'>
                <div className='profile_name'>
                    <Typography className="name">{resumeData.name}</Typography>
                    <Typography className="title">{resumeData.title}</Typography>
                </div>

                <figure className='profile_image'>
                    <img src="https://cdn.discordapp.com/attachments/940892724566048790/958023021656961045/0P9A2606.JPG" alt="profile" />
                </figure>

                <div className='profile_information'>
                    <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
                        <CustomTimelineItem title={"Name"} text={resumeData.name} />
                        <CustomTimelineItem title={"Title"} text={resumeData.title} />
                        <CustomTimelineItem title={"Email"} text={resumeData.email} />
                        {
                            Object.keys(resumeData.socials).map(key => (
                                <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />

                            ))
                        }
                    </CustomTimeline>
                    <br />
                    < button>my Button</button>
                </div>
            </div>


        </>

    )
}

export default Profile