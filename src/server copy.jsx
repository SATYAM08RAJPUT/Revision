import { createServer, Model } from "miragejs";


export default function server({ environment = "development" } = {}) {
    let server = createServer({
        environment,
        models: {
            multiSection:Model
        },

        seeds(server) {
        server.create('multiSection', {
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
        })
    },


        routes() {
            this.namespace = 'api';
            this.get('/multiSections', (schema) => {
                console.log(schema);
                return schema.multiSections.all()
            })
        }
    })
    return server;
}
