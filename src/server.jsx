
import { createServer, Model } from "miragejs";

export default function server({ environment = 'development' } = {}) {
    let server = createServer({
        environment,
        models: {
            CSSFile: Model,
            multiSection:Model,
            SidebarContent:Model
        },
        seeds(server) {
            server.create("CSSFile", {
                cssDataFile: [
                    {
                        content: [
                            {
                                heading: "CSS Margins",
                                def:"Margins are used to create space around elements, outside of any defined borders.",
                                details: [
                                    {name:"item1"},
                                    {name:"item2"},
                                    {name:"item3"}
                                ]
                            },
                            {
                                heading: "CSS Padding",
                                details: "Padding is used to create space around an element's content, inside of any defined borders.",
                                diff:"ahgfsdbfk"
                            },
                            {
                                heading: "CSS Borders",
                                details: [
                                    {
                                    id:"1",
                                    url:"https://t4.ftcdn.net/jpg/06/31/94/07/360_F_631940703_olFOPib8TNgTO9vXF108GKci7daMsTld.jpg"
                                },
                                {
                                    id:"1",
                                    url:"https://t4.ftcdn.net/jpg/06/31/94/07/360_F_631940703_olFOPib8TNgTO9vXF108GKci7daMsTld.jpg"
                                },
                                           {
                                    id:"1",
                                    url:"https://t4.ftcdn.net/jpg/06/31/94/07/360_F_631940703_olFOPib8TNgTO9vXF108GKci7daMsTld.jpg"
                                }
                            ]
                            },
                            

                        ],
                        type: "cssBasic"
                    },
                    {
                        content: [
                            {
                                heading: "Box Modal",
                                details: "The CSS box model is a container that contains multiple properties including borders, margin, padding, and the content itself. It is used to create the design and layout of web pages. It can be used as a toolkit for customizing the layout of different elements. The web browser renders every element as a rectangular box according to the CSS box model."
                            },
                            {
                                heading: "Box Sizing",
                                details: "The box-sizing CSS property sets how the total width and height of an element is calculated."
                            }

                        ],
                        type: "cssBoxModel"
                    },
                    {
                        content: [
                            {
                                heading: "Display Block",
                                details: "A block-level element ALWAYS starts on a new line and takes up the full width available ."
                            },
                            {
                                heading: "Inline Display",
                                details: "The inline display property ignores the height and the width set by the user."
                            },
                            {
                                heading: "Inline-block",
                                details: "it can edit the height and the width of the block. Basically, this will align the div both in block and inline fashion."
                            }

                        ],
                        type: "cssDisplay"
                    },
                    {
                        content: [
                            {
                                heading: "element Selector",
                                details: "The element selector selects HTML elements based on the element name."
                            },
                            {
                                heading: "id Selector",
                                details: "The id selector uses the id attribute of an HTML element to select a specific element.",
                                detailsProperty: [
                                    "margin-top",
                                    "margin-right",
                                    "margin-bottom",
                                    "margin-left"
                                ]
                            },
                            {
                                heading: "class Selector",
                                details: "The class selector selects HTML elements with a specific class attribute."
                            }

                        ],
                        type: "cssSelector"
                    },
                    {
                        content: [
                            {
                                heading: "Position Static",
                                details: "HTML elements are positioned static by default."
                            },
                            {
                                heading: "Position relative",
                                details: "An element with position: relative; is positioned relative to its normal position."
                            },
                            {
                                heading: "Position Absolute",
                                details: "An element with position: absolute; is positioned relative to the viewport."
                            }

                        ],
                        type: "cssPosition"
                    },
                    {
                        content: [
                            {
                                heading: "Background-attachment",
                                details: "The background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page)"
                            },
                            {
                                heading: "background gradient",
                                details: "A background gradient is a way to create a smooth transition between two or more colors in a design. Gradients can be used to transform the look and feel of a design, from retro to modern. They can also add shadows and highlights to make a flat design pop out."
                            }
                        ],
                        type: "cssBackground"
                    }
                ]
            }),
            server.create('multiSection', {
                chatsheets:[
                    { 
                      id:"1",
                      url:'//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/001/original/html.png?1616282665',
                      title:'HTML Cheatsheet',
                      subtitle:'Codeccharya HTML cheatsheet',
                      btn:'Go to Cheatsheet'
                     },
                     {
                      id:"2",
                      url:'//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/002/original/css.png?1616282675',
                      title:'Css Cheatsheet',
                      subtitle:'Codeccharya Css cheatsheet',
                      btn:'Go to Cheatsheet'
                     },
                     {
                      id:"3",
                      url:'//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/003/original/javascript.png?1616282692',
                      title:' Javascript Cheatsheet',
                      subtitle:'Codeccharya Javascript cheatsheet',
                      btn:'Go to Cheatsheet'
                     },
                     {
                      id:"4",
                      url:'//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/006/original/react.jpg?1617889774',
                      title:'React Cheatsheet',
                      subtitle:'Codeccharya React cheatsheet',
                      btn:'Go to Cheatsheet'
                     }
                  ]
            }),
            server.create('SidebarContent',{
                sideBarData:[
                    {
                        id:"1",
                        title:"Css Basic",
                        type:"Basic"
                    },
                    {
                        id:"2",
                        title:"Box Model",
                        type:"Box model"
                    },
                    {
                        id:"3",
                        title:"Display",
                        type:"display"
                    },
                    {
                        id:"4",
                        title:"CSS Selector",
                        type:"selector"
                    },
                    {
                        id:"5",
                        title:"Position",
                        type:"position"
                    },
                    {
                        id:"6",
                        title:"Background",
                        type:"background"
                    },
                    {
                        id:"7",
                        title:"Units",
                        type:"unit"
                    },
                    {
                        id:"8",
                        title:"Responsive",
                        type:"responsive"
                    },
                    {
                        id:"9",
                        title:"Text & Font",
                        type:"text"
                    },
                    {
                        id:"10",
                        title:"Transforming Elements",
                        type:"tranforming"
                    },
                    {
                        id:"11",
                        title:"Transitioning & Animations",
                        type:"transition"
                    },
                    {
                        id:"12",
                        title:"Advanced Css",
                        type:"advance css"
                    }
                ]
            })

        },
        routes() {
            this.namespace = "api"
            this.get("/codeccharya", (schema, request) => {
                console.log(schema)
                return schema.cssFiles.all()
            })
            this.get('/multiSections', (schema) => {
                console.log(schema);
                return schema.multiSections.all()
            })
            this.get('/sidebarContents', (schema) => {
                console.log(schema);
                return schema.sidebarContents.all()
            })
        }
    })
    return server;
}