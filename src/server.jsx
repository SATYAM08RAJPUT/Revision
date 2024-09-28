
import { createServer, Model } from "miragejs";

export default function server({ environment = 'development' } = {}) {
    let server = createServer({
        environment,
        models: {
            CSSFile: Model,
            multisectionViwer:Model
        },
        seeds(server) {
            server.create("CSSFile", {
                cssDataFile: [
                    {
                        content: [
                            {
                                heading: "CSS Margins",
                                details: "The CSS margin properties are used to create space around elements, outside of any defined borders."
                            },
                            {
                                heading: "Margin - Individual Sides",
                                details: "CSS has properties for specifying the margin for each side of an element",
                                detailsProperty: [
                                    "margin-top",
                                    "margin-right",
                                    "margin-bottom",
                                    "margin-left"
                                ]
                            },
                            {
                                heading: "Margin - Shorthand Property",
                                details: "To shorten the code, it is possible to specify all the margin properties in one property."
                            }

                        ],
                        type: "cssBasic"
                    },
                    {
                        Questions: [
                            {
                                Question: "What is the difference between margin and padding?",
                                Answer: "Margin is used to create space around elements and padding is used to create space around elements inside the border.We can set the margin property to auto but we cannot set the padding property to auto.In Margin property we can allow negative or float number but in padding we cannot allow negative values.Margin and padding target all the 4 sides of the element. Margin and padding will work without the border property also. The difference will be more clear with the following example."
                            },
                            {
                                Question: "What is CSS Box Model?",
                                Answer: "The CSS box model is a container that contains multiple properties including borders, margin, padding, and the content itself. It is used to create the design and layout of web pages. It can be used as a toolkit for customizing the layout of different elements. The web browser renders every element as a rectangular box according to the CSS box model."
                            },
                            {
                                Question: "What is the difference between CSS border and outline?",
                                Answer: "CSS border properties allow us to set the style, color, and width of the border. CSS outline property allows us to draw a line around the element, outside the border."
                            },
                            {
                                Question: "How can we hide an element in CSS?",
                                Answer: "The style display property is used to hide and show the content of HTML DOM by accessing the DOM element using JavaScript/jQuery."
                            },
                            {
                                Question: "Can we overlap elements in CSS?",
                                Answer: "Creating an overlay effect simply means putting two div together at the same place but both the div appear when needed i.e while hovering or while clicking on one of the div to make the second one appear. Overlays are very clean and give the webpage a tidy look. It looks sophisticated and is simple to design. Overlays can create using two simple CSS properties:"
                            }
                        ],
                        type: "display"

                    },
                    {
                        Questions: [
                            {
                                Question: "How does absolute positioning work?",
                                Answer: "Absolute positioning is used to place the element which is then removed from the HTML document from the normal workflow without creating any space for the element in the HTML page layout. The element can be positioned respectively to the closest positioned ancestor; otherwise, if the ancestor is not found, the element is placed with respect to the initial container box. The values provided to the top, right, left and bottom determine the final position of the element."
                            },
                            {
                                Question: "Does this property work overflow: hidden?",
                                Answer: "Overflow: the hidden property is used to specify the content’s clipping. We need to add scrollbars to the content area at the time of specified container size exceeding the content limit where the content gets enclosed. This makes the content invisible via clipping; also the overflow value will be hidden."
                            },
                            {
                                Question: "Tell us about CSS float property.",
                                Answer: "The float property of CSS positions an image to the right or left as needed, including text wrapping around it. All properties of elements used before it remain unchanged. "
                            },
                            {
                                Question: "What do you understand by pseudo-elements?",
                                Answer: "Pseudo-elements provide special effects to some selectors. CSS finds use in applying styles in HTML markups. If additional markup or style is not feasible for a document, the pseudo-elements help by allowing extra markup without interfering with the original document."
                            },

                            {
                                Question: "Differentiate between logical and physical tags.",
                                Answer: "Logical tags mainly focus on content and are older as compared to physical ones. Logical ones do not find much usage in presentation and terms of aesthetics. At the same time, physical ones find application in presentation. "
                            }
                        ],
                        type: "positions"
                    }
                ]
            })
            server.create('multisectionViwer',{
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
            })
        },
        routes() {
            this.namespace = "api"
            this.namespace = 'api'
            this.get("/codeccharya", (schema, request) => {
                console.log(schema)
                return schema.cssFiles.all()
            })
            this.get("/multisectionViwers", (schema, request) => {
                console.log(schema)
                return schema.multisectionViwers.all()
            })
        }
    })
    return server;
}