import { createServer, Model } from "miragejs";

export default function server({ environment = 'development' } = {}) {
    let server = createServer({
        environment,
        models: {
            CSSFile: Model,
            CourseList: Model, 
            SidebarContent: Model,
            htmlFile: Model,
            CssFileSheet: Model,
            allTopic:Model,
            topic:Model
        },
        seeds(server) {
                server.create('CourseList', {
                    chatsheets: [
                        {
                            id: "1",
                            url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/001/original/html.png?1616282665',
                            title: 'HTML Cheatsheet',
                            subtitle: 'Codeccharya HTML cheatsheet',
                            btn: 'Go to Cheatsheet'
                        },
                        {
                            id: "2",
                            url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/002/original/css.png?1616282675',
                            title: 'Css Cheatsheet',
                            subtitle: 'Codeccharya Css cheatsheet',
                            btn: 'Go to Cheatsheet'
                        },
                        {
                            id: "3",
                            url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/003/original/javascript.png?1616282692',
                            title: ' Javascript Cheatsheet',
                            subtitle: 'Codeccharya Javascript cheatsheet',
                            btn: 'Go to Cheatsheet'
                        },
                        {
                            id: "4",
                            url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/006/original/react.jpg?1617889774',
                            title: 'React Cheatsheet',
                            subtitle: 'Codeccharya React cheatsheet',
                            btn: 'Go to Cheatsheet'
                        }
                    ]
                })
            server.create('topic',{
                HTML:[
                    {
                        id:"1",
                        title:"HTML Element",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"2",
                        title:"HTML Tag",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"3",
                        title:"HTML Vlaue",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"4",
                        title:"Meta Tag",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"5",
                        title:"Global Attribute",
                        content:"SIJSDBPG"
                    }
                ]
            })
            server.create('topic', {
                css:[
                    {
                        id:"1",
                        title:"Basic CSS",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"2",
                        title:"Box Modal",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"3",
                        title:"Position",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"4",
                        title:"Background",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"5",
                        title:"Units",
                        content:"SIJSDBPG"
                    },                    {
                        id:"6",
                        title:"Responsive",
                        content:"SIJSDBPG"
                    },                    {
                        id:"7",
                        title:"Text & Font",
                        content:"SIJSDBPG"
                    },                    {
                        id:"8",
                        title:"Display",
                        content:"SIJSDBPG"
                    },                    {
                        id:"9",
                        title:"Transforming Elements",
                        content:"SIJSDBPG"
                    },                    
                    {
                        id:"10",
                        title:"Transitioning & Animations",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"11",
                        title:"Transitioning & Animations",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"12",
                        title:"Advanced CSS",
                        content:"SIJSDBPG"
                    }
                ]
            })
            server.create('topic', {
                Js:[
                    {
                        id:"1",
                        title:"Basic JS",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"2",
                        title:"Clouses",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"3",
                        title:"Position",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"4",
                        title:"Background",
                        content:"SIJSDBPG"
                    },
                    {
                        id:"5",
                        title:"Units",
                        content:"SIJSDBPG"
                    }
                ]
            })

        },

        routes() {
            this.namespace = "api"
            this.get('/courseLists', (schema) => {
                console.log(schema);
                return schema.courseLists.all()
            })
            this.get('/topics', (schema) => {
                console.log(schema);
                return schema.topics.all()
            })
        }
        
    })
    return server;
}