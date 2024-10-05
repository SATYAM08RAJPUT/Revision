import { createServer, Model } from "miragejs";

export default function server({ environment = 'development' } = {}) {
    let server = createServer({
        environment,
        models: {
            course: Model,
            topic: Model,
        },
        seeds(server) {
            server.create("course", {
                id: "1",
                url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/001/original/html.png?1616282665',
                title: 'HTML Cheatsheet',
                subtitle: 'Codeccharya HTML cheatsheet',
                btn: 'Go to Cheatsheet',
                topicid: ["11", "12"]
            }),
                server.create("course", {
                    id: "2",
                    url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/002/original/css.png?1616282675',
                    title: 'Css Cheatsheet',
                    subtitle: 'Codeccharya Css cheatsheet',
                    btn: 'Go to Cheatsheet',
                    topicid: ["21", "22"]
                }),
                server.create("course", {
                    id: "3",
                    url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/003/original/javascript.png?1616282692',
                    title: ' Javascript Cheatsheet',
                    subtitle: 'Codeccharya Javascript cheatsheet',
                    btn: 'Go to Cheatsheet',
                    topicid: ["31", "32"]
                }),
                server.create("course", {
                    id: "4",
                    url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/006/original/react.jpg?1617889774',
                    title: 'React Cheatsheet',
                    subtitle: 'Codeccharya React cheatsheet',
                    btn: 'Go to Cheatsheet',
                    topicid: ["41", "42"]
                }),
                server.create("topic", {
                    id: "11",
                    courseid: "1",
                    name: "htmlbasic",
                    descriptions: [
                        {
                            topicId: "1",
                            topicName: "learn about html basic",
                            description: "html basic descriotion"
                        }
                    ]
                }),
                server.create("topic", {
                    id: "12",
                    courseid: "1",
                    name: "htmlbasic1",
                    descriptions: [
                        {
                            topicId: "2",
                            topicName: "learn about html basic1",
                            description: "html basic1 descriotion"
                        }
                    ]
                }),
                server.create("topic", {
                    id: "21",
                    courseid: "2",
                    name: "cssbasic",
                    descriptions: [
                        {
                            topicId: "1",
                            topicName: "learn about css basic",
                            description: "css basic descriotion"
                        }
                    ]
                }),
                server.create("topic", {
                    id: "22",
                    courseid: "2",
                    name: "cssbasic1",
                    descriptions: [
                        {
                            topicId: "2",
                            topicName: "learn about css basic1",
                            description: "css basic descriotion"
                        }
                    ]
                }),
                server.create("topic", {
                    id: "31",
                    courseid: "3",
                    name: "jsbasic",
                    descriptions: [
                        {
                            topicId: "1",
                            topicName: "learn about js basic",
                            description: "js basic descriotion"
                        }
                    ]
                }),
                server.create("topic", {
                    id: "32",
                    courseid: "3",
                    name: "jsbasic1",
                    descriptions: [
                        {
                            topicId: "2",
                            topicName: "learn about js basic1",
                            description: "js basic descriotion"
                        }
                    ]
                }),
                server.create("topic", {
                    id: "41",
                    courseid: "4",
                    name: "reactbasic",
                    descriptions: [
                        {
                            topicId: "1",
                            topicName: "learn about react basic",
                            description: "react basic descriotion"
                        }
                    ]
                }),
                server.create("topic", {
                    id: "42",
                    courseid: "4",
                    name: "reactbasic1",
                    descriptions: [
                        {
                            topicId: "2",
                            topicName: "learn about react basic1",
                            description: "react basic1 descriotion"
                        }
                    ]
                })


        },
        routes() {
            this.namespace = "api"
            this.get("/codeccharya", (schema, request) => {
                let q = request.queryParams.q.toLocaleLowerCase();
                if (q) {
                    return schema.cssFiles.where(item => item.cssFiles.where(item => item.cssDataFile.filter(item1 => item1.type.toLowerCase().includes(q))))
                }

                return schema.courses.all()

            })

            this.get('/course', (schema, request) => {
                console.log(schema)
                return schema.courses.all()
            })

            this.get('/course/:id', (schema, request) => {
                let courseId = request.params.id;
                console.log(schema.courses.find(courseId))
                return schema.courses.find(courseId);
                // let cour = schema.courses.find(courseId);
                // console.log(schema)
                // let topic = schema.topics.where({ courseId })
                // console.log(topic)
                // return{
                //     ...cour.attrs,
                //     topics:topic.models.map(((item) =>item.attrs))
                // }
            })

            this.get("/topic/:id", (schema, request) => {
                let topicId = request.params.id;
                console.log(topicId)
                let topic = schema.topics.find(topicId);
                
                return topic.attrs;
              });
        }
        
    })
    return server;
}