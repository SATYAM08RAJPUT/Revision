import { createServer, Model } from "miragejs";


export default function server({ environment = "development" } = {}) {
    let server = createServer({
        environment,
        models: {
            // sidebar:Model,
            chatsheet:Model
        },


        routes() {
            this.namespace = 'api';
            // this.get('/sidebars', () => ({
            //     sidebars: [
            //         { id: 1, icon: 'FaHtml5', title: 'Html' },
            //         { id: 2, icon: 'FaCss3Alt', title: 'Css' },
            //         { id: 3, icon: 'IoLogoJavascript', title: 'Javascript' },
            //         { id: 4, icon: 'FaReact', title: 'React Js' }
            //     ]
            // }))

            this.get('/chatsheets',() => ({
                chatsheets:[
                  { 
                    id:1,
                    url:'//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/001/original/html.png?1616282665',
                    title:'HTML Cheatsheet',
                    subtitle:'Codeccharya HTML cheatsheet',
                    btn:'Go to Cheatsheet'
                   },
                   {
                    id:2,
                    url:'//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/002/original/css.png?1616282675',
                    title:'Css Cheatsheet',
                    subtitle:'Codeccharya Css cheatsheet',
                    btn:'Go to Cheatsheet'
                   },
                   {
                    id:3,
                    url:'//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/003/original/javascript.png?1616282692',
                    title:' Javascript Cheatsheet',
                    subtitle:'Codeccharya Javascript cheatsheet',
                    btn:'Go to Cheatsheet'
                   },
                   {
                    id:4,
                    url:'//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/006/original/react.jpg?1617889774',
                    title:'React Cheatsheet',
                    subtitle:'Codeccharya React cheatsheet',
                    btn:'Go to Cheatsheet'
                   }
                ]
            }))
        }
    })
    return server;
}
