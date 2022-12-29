import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import GithubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { AssessmentOutlined, WebOutlined } from "@material-ui/icons"

export default {
    name: "ABDALLAH ATGUIRI",
    title: "Full stack developer",
    birthday: "06th December 1999",
    email: "wahbidox@gmail.com",
    address: "123 Test St",
    phone: "0623779270",
    socials: {
        facebook: {
            link: "https://www.facebook.com",
            text: "MyFacebook",
            icon: <FacebookIcon />
        },
        twitter: {
            link: "https://www.facebook.com",
            text: "MyTwitter",
            icon: <TwitterIcon />
        },
        linkedIn: {
            link: "https://www.facebook.com",
            text: "MyLinkedin",
            icon: <LinkedInIcon />
        },
        GitHub: {
            link: "https://www.facebook.com",
            text: "MyGithub",
            icon: <GithubIcon />
        }

    },
    about: "🌱 I’m currently learning Javascrept, React.js, Laravel, NodeJs \n\n 🤝 I’m looking for help with my professional career \n\n 📝 I regularly write articles on atguiri.com \n\n📫 How to reach me AbdallahAtguiri @gmail.com \n\n📄 Know about my experiences atguiri.com \n\n⚡ Fun fact When I am not coding you can find me playing gym or having fun with friends.",
    experiences: [
        {
            title: "WorK 1",
            date: "2021 - Present",
            description: "Stage Développeur web Full Stack A Développeur-informatique.ma - Agadir"
        },
        {
            title: "WorK 2",
            date: "2018 - 2020",
            description: "Stage Développeur web Full Stack A Développeur-informatique.ma - Agadir"
        },
        {
            title: "WorK 3",
            date: "Aug 2016 - Sept 2018",
            description: "Stage Développeur web Full Stack A Développeur-informatique.ma - Agadir"
        },
    ],

    educations: [
        {
            title: "education 1",
            date: "2021 - Present",
            description: "Stage Développeur web Full Stack A Développeur-informatique.ma - Agadir"
        },
        {
            title: "education 2",
            date: "2018 - 2020",
            description: "Stage Développeur web Full Stack A Développeur-informatique.ma - Agadir"
        },
        {
            title: "education 3",
            date: "Aug 2016 - Sept 2018",
            description: "Stage Développeur web Full Stack A Développeur-informatique.ma - Agadir"
        },
    ],

    services: [
        {
            title: "Web Dev",
            description: "i have a been web developer for 2 years",
            icon: <WebOutlined />
        },
        {
            title: "Web Dev",
            description: "i have a been web developer for 2 years",
            icon: <AssessmentOutlined/>
        },
        {
            title: "Web Dev",
            description: "i have a been web developer for 2 years",
            icon: <WebOutlined />
        }
    ],

    skills: [
        {
            title: "FRONT-END",
            description: ["ReactJS", "JavaScript", "TypeScript", "Bootstrap", "Material UI"]
        },
        {
            title: "BACK-END",
            description: ["NodeJS", "Express", "GraphQL", "JWT"]
        },
        {
            title: "DATABASES",
            description: ["Firebase", "My SQL", "MongoDB", "Oraqel"]
        },
        {
            title: "SOURCE CONTROL",
            description: ["Git", "GitHub", "SCUM/Agile", "Doker"]
        },

    ]

}