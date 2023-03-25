import RianImage from "../../assets/images/team/rian-ceo.png";
import RikoImage from "../../assets/images/team/riko-co.png";
import AulImage from "../../assets/images/team/aul-felead.png";
import {FiFacebook, FiInstagram, FiLinkedin, FiTwitter} from "react-icons/fi";

const headTeam = [
    {
        image: RianImage,
        name: 'Rian Gho, S.Kom',
        designation: 'Founder & CEO',
        location: 'Jakarta, Indonesia',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]

    },
    {
        image: RikoImage,
        name: 'Riko Wie, S.Kom',
        designation: 'Co Founder',
        location: 'Medan, Indonesia',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiLinkedin />,
                url: '#'
            },
        ]

    },
    {
        image: RianImage,
        name: 'Lisia Lim, S.M',
        designation: 'Growth Manager',
        location: 'Poland',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]

    }
]

const developerTeam = [
    {
        image: RianImage,
        name: 'Hendry Tanaka, S.Kom',
        designation: 'Project Manager',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]

    },
    {
        image: RianImage,
        name: 'Erman Sibarani, S.Kom, M.Kom',
        designation: 'Tech Lead',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]

    },
    {
        image: AulImage,
        name: 'Aul Aryansyah, A.Md.T',
        designation: 'Frontend Lead Engineer',
        location: 'Medan, Indonesia',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiLinkedin />,
                url: '#'
            },
        ]

    },
]

export {
    headTeam,
    developerTeam
}
