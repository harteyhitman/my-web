 // "imageKey": require('../images/download.png'),
import css3 from '../images/css3.png'
import javascript from '../images/javscript.png'
import nextjs from '../images/nextjs.png'
import react from '../images/react.jpg'
import sass from '../images/sass.png'
import styledcomponents from '../images/styled components.png'
import tailwindcss from '../images/tailwindcss.png'
import Rentitpro from '../images/rentit project.png'
import Workjeje from '../images/workjeje.png'
import MusicDemo from '../asset/music-demo.png'
import CountryFlags from '../images/Flags.png'
import CountDown from '../images/count-down.png'
import AppleStore from '../images/Apple store.png'
import GalleryPhotos from '../images/GalleryPhotos.png'
import Html5 from '../images/html5.png'
import BankApp from '../images/bank-app.png'
export const ToolsData = [
   {
        'id': '5',
        "imageKey": react,
        'text': 'ReactJS'
    }, 
      {
        'id': '3',
        "imageKey": nextjs,
        'text': 'NextJS'
    },
    {
        'id': '2',
        "imageKey": javascript,
        'text': 'Javascript'
    },
   {
        'id': '7',
        "imageKey": sass,
        'text': 'Sass'
    },

   {
        'id': '1',
        "imageKey": css3,
        'text': 'Css3'
    },
  
   {
        'id': '8',
        "imageKey": styledcomponents,
        'text': 'Styled Components'
    },
 
 {
        'id': '10',
        "imageKey": tailwindcss,
        'text': 'Tailwind Css'
    },
    {
        'id': '11',
        "imageKey": Html5,
        'text': 'Html5'

    }



  
]

export const projects = [
    {
        'id': '1',
        projectsTools: 'Html, Css, ReactJS',
        realProjects: Rentitpro,
        gotoProjects:'https://rent-it-real-estate-platform.vercel.app/'
    },
    {
        'id': '2',
        projectsTools: 'Html, Css, ReactJS',
        realProjects: Workjeje,
        gotoProjects:'https://work-jeje.vercel.app/'
    },
    {
        'id': '3',
        projectsTools: 'Html, Css, ReactJS',
        realProjects: MusicDemo,
        gotoProjects:'https://music-demo-app.vercel.app/'
    },
 
    {
        'id': '4',
        projectsTools: 'Html, Css, ReactJS',
        realProjects: BankApp,
        gotoProjects:'https://bank-app-indol-one.vercel.app/'
    },
 
]


export const smallProject = [
    
    {
        smallProjectLink: 'https://country-flags-names.vercel.app/',
        id: '2',
        smallProjectImg: CountryFlags,
        smallProjectTitle: 'Country Flags'
    },
    {
        smallProjectLink: 'https://count-downapp.vercel.app/',
        id: '3',
        smallProjectImg: CountDown,
        smallProjectTitle: 'Timer CountDown'
    },
    {
        smallProjectLink: 'https://updatedapplestore.vercel.app/',
        id: '4',
        smallProjectImg: AppleStore,
        smallProjectTitle: 'Apple Store'
    },
    {
        smallProjectLink: 'https://gallery-photos-phi.vercel.app/',
        id: '6',
        smallProjectImg: GalleryPhotos,
        smallProjectTitle: 'Gallery Photos'
    },
]

