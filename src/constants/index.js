import css from '../assessts/css.png';
import tailwind from '../assessts/tailwind.png';
import html from '../assessts/html.png';
import c from '../assessts/c.jpeg';
import cpp from '../assessts/cpp.jpeg';
import Reactjs from '../assessts/Reactjs.png';
// import Reactjs from '../assessts/Reactsymbol.png';
import sql from '../assessts/sql.png';
// import webMonitor from '../assessts/webMonitor.png'
import web from '../assessts/web.png';
import webworking from '../assessts/webWorking.png';
import javascript from '../assessts/javascript.png';
import pro1 from '../assessts/pro1.png';
import pro2 from '../assessts/pro2.png';



const services = [
    {
        title : 'Web Developer',
        icon : web,
    },
    {
        title: 'React Developer',
        icon: Reactjs,
    },
    {
        title:'c++ Developer',
        icon: webworking
    },
];

const technologies = [
    {
        name:'HTML',
        icon:html,
    },
    {
        name:'CSS',
        icon:css,
    },
    {
        name:'React.js',
        icon:Reactjs,
    },
    {
        name:'C',
        icon: c,
    },
    {
        name:'C++',
        icon:cpp,
    },
    {
        name:'Javascript',
        icon:javascript,
    },
    {
        name:'Taiwind',
        icon:tailwind,
    },
    {
        name:'MySql',
        icon:sql,
    },

];

const projects =[
    {
        name:'Shoes Web Site',
        description:
            'Web Site for selling Shoes using HTML,CSS and JAVASCRIPT',
        tags:[
            {
                name:'HTML',
                color:'blue-text-gradient',
            },
            {
                name:'CSS',
                color:'green-text-gradient',
            },
            {
                name:'javascript',
                color:"pink-text-gradient",
            },
        ],
        image:pro1,
        source_code_link:"https://github.com/PrasadShinde413/Sneakerswebsite",
        source_deploy_link:"https://shoe-web-app.netlify.app",
    },
    {
        name:'Todo Web App',
        description:
            'Web Application that enables users to manage their daily task and to manage the time efficiently',
        tags:[
            {
                name:"HTML",
                color:'blue-text-gradient',
            },
            {
                name:'CSS',
                color:'green-text-gradient',
            },
            {
                name:'javascript',
                color:"pink-text-gradient",
            },
        ],
        image:pro2,
        source_code_link:"https://github.com/PrasadShinde413/Todo-Web-App",
        source_deploy_link:"https://prasadshinde413.github.io/Todo-Web-App/",
    },
    {
        name:'Shoes Web Site',
        description:
            'Web Site for selling Shoes using HTML,CSS and JAVASCRIPT',
        tags:[
            {
                name:'HTML',
                color:'blue-text-gradient',
            },
            {
                name:'CSS',
                color:'green-text-gradient',
            },
            {
                name:'javascript',
                color:"pink-text-gradient",
            },
        ],
        image:pro1,
        source_code_link:"https://github.com/PrasadShinde413/Sneakerswebsite",
        source_deploy_link:"https://shoe-web-app.netlify.app",
    },

];
export{services,technologies,projects};