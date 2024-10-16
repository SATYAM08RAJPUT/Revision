import { createServer, Model } from "miragejs";


export default function server({ environment = 'development' } = {}) {
    let server = createServer({
        environment,
        models: {
            courseList: Model,
            topic: Model,
            // allRoadmap: Model
            roadmap: Model
        },

        seeds(server) {
            server.create('courseList', {
                chatsheets: [
                    {
                        id: "1",
                        url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/001/original/html.png?1616282665',
                        title: 'HTML Cheatsheet',
                        subtitle: 'Codeccharya HTML cheatsheet',
                        btn: 'Go to Cheatsheet',
                        courseId: '1',
                        select: '1',
                    },
                    {
                        id: "2",
                        url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/002/original/css.png?1616282675',
                        title: 'Css Cheatsheet',
                        subtitle: 'Codeccharya Css cheatsheet',
                        btn: 'Go to Cheatsheet',
                        courseId: '2',
                        select: '1'
                    },
                    {
                        id: "3",
                        url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/003/original/javascript.png?1616282692',
                        title: ' Javascript Cheatsheet',
                        subtitle: 'Codeccharya Javascript cheatsheet',
                        btn: 'Go to Cheatsheet',
                        courseId: '3',
                        select: '1'
                    },
                    {
                        id: "4",
                        url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/006/original/react.jpg?1617889774',
                        title: 'React Cheatsheet',
                        subtitle: 'Codeccharya React cheatsheet',
                        btn: 'Go to Cheatsheet',
                        courseId: '4',
                        select: '1'
                    }
                ]
            }),

                server.create('roadmap', {
                    roadMap: [
                        {
                            id: "1",
                            courseId: '1',
                            topicName: "Introduction of HTML",
                            subTopics: [
                                { id: "2", courseId: '1', subtitle: "What is HTML" },
                                { id: "3", courseId: '1', subtitle: "Basic structure of an HTML document" },
                                { id: "4", courseId: '1', subtitle: "HTML tags" },
                                { id: "5", courseId: '1', subtitle: "HTML elements." },
                                { id: "6", courseId: '1', subtitle: "HTML attributes" }
                            ]
                        },
                        {
                            id: "7",
                            courseId: '1',
                            topicName: "Basic HTML Tags",
                            subTopics: [
                                { id: "8", courseId: '1', subtitle: "Headings (<h1> to <h6>)" },
                                { id: "9", courseId: '1', subtitle: "Paragraphs (<p>)" },
                                { id: "10", courseId: '1', subtitle: "Links (<a>)" },
                                { id: "11", courseId: '1', subtitle: "Images (<img>)" },
                                { id: "12", courseId: '1', subtitle: "HTML Lists (ordered <ol> and unordered <ul>)" }
                            ]
                        },
                        {
                            id: "13",
                            courseId: '1',
                            topicName: "HTML Formatting",
                            subTopics: [
                                { id: "14", courseId: '1', subtitle: "Bold (<strong>), Italics (<em>), Underline (<u>)" },
                                { id: "15", courseId: '1', subtitle: "Blockquotes (<blockquote>)" },
                                { id: "16", courseId: '1', subtitle: "Horizontal rules (<hr>)" }
                            ]
                        },
                        {
                            id: "17",
                            courseId: '1',
                            topicName: "HTML Forms",
                            subTopics: [
                                { id: "18", courseId: '1', subtitle: "Form element (<form>)" },
                                { id: "19", courseId: '1', subtitle: "Input types (text, email, password, radio, checkbox)" },
                                { id: "20", courseId: '1', subtitle: "Labels (<label>)" },
                                { id: "21", courseId: '1', subtitle: "Buttons (<button>, <input type=submit>)" },
                                { id: "22", courseId: '1', subtitle: "Textareas (<textarea>)" },
                                { id: "23", courseId: '1', subtitle: "Select dropdowns (<select>)" }
                            ]
                        },
                        {
                            id: "24",
                            courseId: '1',
                            topicName: "HTML Semantic Elements",
                            subTopics: [
                                { id: "25", courseId: '1', subtitle: "Using semantic tags (<header>, <nav>, <section>, <article>, <footer>)" },
                                { id: "26", courseId: '1', subtitle: "Importance of semantic HTML for accessibility and SEO" }
                            ]
                        },
                        {
                            id: "27",
                            courseId: '1',
                            topicName: "HTML Attributes",
                            subTopics: [
                                { id: "28", courseId: '1', subtitle: "HTML class" },
                                { id: "29", courseId: '1', subtitle: "HTML id" },
                                { id: "30", courseId: '1', subtitle: "HTML style" },
                                { id: "31", courseId: '1', subtitle: "Data attributes (data-*)" }
                            ]
                        },
                        {
                            id: "32",
                            courseId: '1',
                            topicName: "Multimedia Elements",
                            subTopics: [
                                { id: "33", courseId: '1', subtitle: "Embedding videos (<video>)" },
                                { id: "34", courseId: '1', subtitle: "Embedding audio (<audio>)" },
                                { id: "35", courseId: '1', subtitle: "Using iframes (<iframe>)" }
                            ]
                        },
                        {
                            id: "36",
                            courseId: '1',
                            topicName: "Responsive Design Basics",
                            subTopics: [
                                { id: "37", courseId: '1', subtitle: "Introduction to responsive design" },
                                { id: "38", courseId: '1', subtitle: "The role of the viewport (<meta name=viewport>)" }
                            ]
                        },
                        {
                            id: "39",
                            courseId: '1',
                            topicName: "Introduction to HTML5 API",
                            subTopics: [
                                { id: "40", courseId: '1', subtitle: "Canvas API" },
                                { id: "41", courseId: '1', subtitle: "Geolocation API" },
                                { id: "42", courseId: '1', subtitle: "Local storage API" },
                                { id: "43", courseId: '1', subtitle: "Session storage API" }
                            ]
                        }
                    ],
                    id: '1'
                });

            server.create('roadmap', {
                roadMap: [
                    {
                        id: "1",
                        courseId: '2',
                        topicName: "Basic",
                        subTopics: [
                            {
                                id: "1",
                                courseId: '2',
                                subtitle: "Introduction to css"
                            },
                            {
                                id: "2",
                                courseId: '2',
                                subtitle: "Css Basic Properties"
                            },
                            {
                                id: "3",
                                courseId: '2',
                                subtitle: "One Page Site demo"
                            }
                        ]
                    },
                    {
                        id: "2",
                        courseId: '2',
                        topicName: "Box Modal",
                        subTopics: [
                            {
                                id: "2",
                                courseId: '2',
                                subtitle: "Box Modal"
                            },
                            {
                                id: 3,
                                courseId: '2',
                                subtitle: "Box Sizing"
                            },
                            {
                                id: "4",
                                courseId: '2',
                                subtitle: "Display"
                            },
                            {
                                id: "5",
                                courseId: '2',
                                subtitle: "Css Selectors"
                            }
                        ]
                    },
                    {
                        id: "6",
                        courseId: '2',
                        topicName: "Positions",
                        subTopics: [
                            {
                                id: "6",
                                courseId: '2',
                                subtitle: "Css Positions"
                            },
                            {
                                id: "7",
                                courseId: '2',
                                subtitle: "Z-index"
                            },
                            {
                                id: "8",
                                courseId: '2',
                                subtitle: "OverFlow"
                            }
                        ]
                    },
                    {
                        id: "9",
                        courseId: '2',
                        topicName: "Background",
                        subTopics: [
                            {
                                id: "10",
                                courseId: '2',
                                subtitle: "Background-size"
                            },
                            {
                                id: "10",
                                courseId: '2',
                                subtitle: "Background-position"
                            },
                            {
                                id: "10",
                                courseId: '2',
                                subtitle: "Orign,clip & Attachment"
                            },
                            {
                                id: "11",
                                courseId: '2',
                                subtitle: "Gradient"
                            },
                            {
                                id: "12",
                                courseId: '2',
                                subtitle: "Filters"
                            }
                        ]
                    },
                    {
                        id: "16",
                        courseId: '2',
                        topicName: "Units",
                        subTopics: [
                            {
                                id: "13",
                                courseId: '2',
                                subtitle: "%"
                            },
                            {
                                id: "14",
                                courseId: '2',
                                subtitle: "Min-height & min-width"
                            },
                            {
                                id: "15",
                                courseId: '2',
                                subtitle: "Rem % em"
                            },
                            {
                                id: "16",
                                courseId: '2',
                                subtitle: "vh & vw"
                            }
                        ]
                    },
                    {
                        id: "17",
                        courseId: '2',
                        topicName: "Responsive",
                        subTopics: [
                            {
                                id: "18",
                                courseId: '2',
                                subtitle: "Media queries"
                            },
                            {
                                id: "19",
                                courseId: '2',
                                subtitle: "viewport meta tag"
                            },
                            {
                                id: "20",
                                courseId: '2',
                                subtitle: "Mobile first"
                            },
                            {
                                id: "21",
                                courseId: '2',
                                subtitle: "fluid designs"
                            },
                            {
                                id: "22",
                                courseId: '2',
                                subtitle: "Adaptive designs"
                            }
                        ]
                    },
                    {
                        id: "23",
                        courseId: '2',
                        topicName: "Text & Fonts",
                        subTopics: [
                            {
                                id: "27",
                                courseId: '2',
                                subtitle: "Font families"
                            },
                            {
                                id: "28",
                                courseId: '2',
                                subtitle: "google font"
                            },
                            {
                                id: "29",
                                courseId: '2',
                                subtitle: "Custom fonts"
                            },
                            {
                                id: "30",
                                courseId: '2',
                                subtitle: "Letter spacing"
                            },
                            {
                                id: "31",
                                courseId: '2',
                                subtitle: "Line height"
                            },
                            {
                                id: "32",
                                courseId: '2',
                                subtitle: "Text-decoration & shadom"
                            }
                        ]
                    },
                    {
                        id: "24",
                        courseId: '2',
                        topicName: "Transforming Elements",
                        subTopics: [
                            {
                                id: "33",
                                courseId: '2',
                                subtitle: "Transform-origin"
                            },
                            {
                                id: "34",
                                courseId: '2',
                                subtitle: "Rotate & translate"
                            },
                            {
                                id: "35",
                                courseId: '2',
                                subtitle: "Skew & Scale"
                            },
                            {
                                id: "36",
                                courseId: '2',
                                subtitle: "Transformation shorthands"
                            },
                            {
                                id: "37",
                                courseId: '2',
                                subtitle: "Rotation in 3D"
                            },
                            {
                                id: "38",
                                courseId: '2',
                                subtitle: "perspective"
                            },
                            {
                                id: "39",
                                courseId: '2',
                                subtitle: "z-axis"
                            },
                            {
                                id: "40",
                                courseId: '2',
                                subtitle: "translate-z"
                            },
                            {
                                id: "41",
                                courseId: '2',
                                subtitle: "Flipping elements"
                            }
                        ]
                    },
                    {
                        id: "25",
                        courseId: '2',
                        topicName: "Transitionings & Animations",
                        subTopics: [
                            {
                                id: "25",
                                courseId: '2',
                                subtitle: "Transition"
                            },
                            {
                                id: "33",
                                courseId: '2',
                                subtitle: "Timing function"
                            },
                            {
                                id: "3",
                                courseId: '2',
                                subtitle: "Animations"
                            },
                            {
                                id: "4",
                                courseId: '2',
                                subtitle: "multiple Keyframes"
                            }
                        ]
                    },
                    {
                        id: "26",
                        courseId: '2',
                        topicName: "Adavnces Css",
                        subTopics: [
                            {
                                id: "1",
                                courseId: '2',
                                subtitle: "Css Modules"
                            },
                            {
                                id: "2",
                                courseId: '2',
                                subtitle: "Css Variables"
                            },
                            {
                                id: "3",
                                courseId: '2',
                                subtitle: "Vendor Prefixes"
                            },
                            {
                                id: "4",
                                courseId: '2',
                                subtitle: "@support"
                            },
                            {
                                id: "5",
                                courseId: '2',
                                subtitle: "Polyfills"
                            },
                            {
                                id: "6",
                                courseId: '2',
                                subtitle: "Cross-browser compatibility"
                            },
                            {
                                id: "7",
                                courseId: '2',
                                subtitle: "naming conventions"
                            },
                            {
                                id: "8",
                                courseId: '2',
                                subtitle: "Vanila Css & Frameworks"
                            }
                        ]
                    }
                ],
                id: "2"
            });

            server.create('roadmap', {
                roadMap: [
                    {
                        id: "1",
                        courseId: '3',
                        topicName: "Introduction of JavaScript",
                        subTopics: [
                            {
                                id: "1",
                                courseId: '3',
                                subtitle: "What is JavaScript?"
                            },
                            {
                                id: "27",
                                courseId: '3',
                                subtitle: "Setting Up Environment"
                            }
                        ]
                    },
                    {
                        id: "2",
                        courseId: '3',
                        topicName: "Basic Syntax and Concepts",
                        subTopics: [
                            {
                                id: "2",
                                courseId: '3',
                                subtitle: "Variables:"
                            },
                            {
                                id: 3,
                                courseId: '3',
                                subtitle: "Data Types"
                            },
                            {
                                id: "6",
                                courseId: '3',
                                subtitle: "Control Structures"
                            }
                        ]

                    },
                    {
                        id: "4",
                        courseId: '3',
                        topicName: "Functions",
                        subTopics: [
                            {
                                id: "28",
                                courseId: '3',
                                subtitle: "Function Declarations and Expressions"
                            },
                            {
                                id: "29",
                                courseId: '3',
                                subtitle: "Arrow Functions"
                            },
                            {
                                id: "30",
                                courseId: '3',
                                subtitle: "Parameters and Return Values"
                            }
                        ]
                    },
                    {
                        id: "23",
                        courseId: '3',
                        topicName: "Objects",
                        subTopics: [
                            {
                                id: "22",
                                courseId: '3',
                                subtitle: "Creating Objects"
                            },
                            {
                                id: "23",
                                courseId: '3',
                                subtitle: "Accessing Object Properties"
                            },
                            {
                                id: "24",
                                courseId: '3',
                                subtitle: "Modifying Objects"
                            },
                            {
                                id: "25",
                                courseId: '3',
                                subtitle: "Looping Through Object Properties"
                            },
                            {
                                id: "26",
                                courseId: '3',
                                subtitle: "Common Methods"
                            }
                        ]
                    },
                    {
                        id: "31",
                        courseId: '3',
                        topicName: "Array",
                        subTopics: [
                            {
                                id: "32",
                                courseId: '3',
                                subtitle: "Methods of Array"
                            },
                            {
                                id: "33",
                                courseId: '3',
                                subtitle: "Arrays and forEach"
                            }
                        ]
                    },
                    {
                        id: "34",
                        courseId: '3',
                        topicName: "Intermediate JavaScript",

                        subTopics: [
                            {
                                id: "35",
                                courseId: '3',
                                subtitle: "DOM Manipulation"
                            },
                            {
                                id: "37",
                                courseId: '3',
                                subtitle: "Asynchronous JavaScript"
                            },
                            {
                                id: "38",
                                courseId: '3',
                                subtitle: "Modules"
                            },
                            {
                                id: "39",
                                courseId: '3',
                                subtitle: "JSON"
                            }
                        ]
                    },
                    {
                        id: "40",
                        courseId: '3',
                        topicName: "advanced JavaScript",
                        subTopics: [
                            {
                                id: "41",
                                courseId: '3',
                                subtitle: "Promises"
                            },
                            {
                                id: "42",
                                courseId: '3',
                                subtitle: "Async/Await"
                            },
                            {
                                id: "43",
                                courseId: '3',
                                subtitle: "Event Loop and Concurrency Model"
                            }
                        ]
                    },
                    {
                        id: "30",
                        courseId: '1',
                        topicName: "Responsive Design Basics",
                        subTopics: [
                            {
                                id: "30",
                                courseId: '1',
                                subtitle: "Introduction to responsive design"
                            },
                            {
                                id: "47",
                                courseId: '1',
                                subtitle: "The role of the viewport (<meta name=viewport>)"
                            }
                        ]
                    },
                    {
                        id: "32",
                        courseId: '1',
                        topicName: "Introduction to HTML5 API",
                        subTopics: [
                            {
                                id: "48",
                                courseId: '1',
                                subtitle: "Canvas API"
                            },
                            {
                                id: "49",
                                courseId: '1',
                                subtitle: "Geolocation API"
                            },
                            {
                                id: "50",
                                courseId: '1',
                                subtitle: "Local storage API"
                            },
                            {
                                id: "51",
                                courseId: '1',
                                subtitle: "session storage API"
                            }
                        ]
                    }
                ],
                id: "3"
            })

            server.create('roadmap', {
                roadMap: [
                    {
                        id: 2,
                        topicName: 'React ES6',
                        courseId: '4',
                        subTopics: [
                            { id: 1, subtitle: 'Introduction to React', courseId: '4' },
                            { id: 2, subtitle: 'React ES6?', courseId: '4' },
                            { id: 3, subtitle: 'React ES6 Classes', courseId: '4' },
                            { id: 4, subtitle: 'React ES6 Arrow Functions', courseId: '4' },
                            { id: 5, subtitle: 'React ES6 Variables', courseId: '4' },
                            { id: 6, subtitle: 'React ES6 Array Methods', courseId: '4' },
                            { id: 7, subtitle: 'React ES6 Destructuring', courseId: '4' },
                            { id: 8, subtitle: 'React ES6 Spread Operator', courseId: '4' },
                            { id: 9, subtitle: 'React ES6 Modules', courseId: '4' },
                            { id: 10, subtitle: 'React ES6 Ternary Operator', courseId: '4' },
                        ]
                    },
                    {
                        id: 1,
                        topicName: 'React',
                        courseId: '4',
                        subTopics: [
                            { id: 11, subtitle: 'React Render HTML', courseId: '4' },
                            { id: 12, subtitle: 'React JSX', courseId: '4' },
                            { id: 13, subtitle: 'React Components', courseId: '4' },
                            { id: 14, subtitle: 'React Class Components', courseId: '4' },
                            { id: 15, subtitle: 'React Props', courseId: '4' },
                            { id: 16, subtitle: 'React Events', courseId: '4' },
                            { id: 17, subtitle: 'React Conditional Rendering', courseId: '4' },
                            { id: 18, subtitle: 'React Lists', courseId: '4' },
                            { id: 19, subtitle: 'React Forms', courseId: '4' },
                            { id: 20, subtitle: 'React Router', courseId: '4' },
                            { id: 21, subtitle: 'React Memo', courseId: '4' },
                        ]
                    },
                    {
                        id: 31,
                        topicName: 'React Hooks',
                        courseId: '4',
                        subTopics: [
                            { id: 22, subtitle: 'What is a Hook?', courseId: '4' },
                            { id: 23, subtitle: 'React useState Hook', courseId: '4' },
                            { id: 24, subtitle: 'React useEffect Hooks', courseId: '4' },
                            { id: 25, subtitle: 'React useContext Hook', courseId: '4' },
                            { id: 26, subtitle: 'React useRef Hook', courseId: '4' },
                            { id: 27, subtitle: 'React useReducer Hook', courseId: '4' },
                            { id: 28, subtitle: 'React useCallback Hook', courseId: '4' },
                            { id: 29, subtitle: 'React useMemo Hook', courseId: '4' },
                            { id: 30, subtitle: 'React Custom Hooks', courseId: '4' },
                        ]
                    },
                    {
                        id: 4,
                        topicName: 'React More Topics',
                        courseId: '4',
                        subTopics: [
                            { id: 31, subtitle: 'Control and  uncontrolled components', courseId: '4' },
                            { id: 32, subtitle: ' React Portals', courseId: '4' },
                            { id: 33, subtitle: 'React Performance', courseId: '4' },
                        ]
                    },
                    {
                        id: 34,
                        topicName: 'React Advanced Topics',
                        courseId: '4',
                        subTopics: [
                            { id: 34, subtitle: 'React Context API', courseId: '4' },
                            { id: 35, subtitle: 'React Error Boundaries', courseId: '4' },
                            { id: 36, subtitle: 'React Fragments', courseId: '4' },
                            { id: 37, subtitle: 'React Lazy Loading', courseId: '4' },
                            { id: 38, subtitle: 'Server-Side Rendering (SSR)', courseId: '4' },
                            { id: 39, subtitle: 'Static Site Generation (SSG)', courseId: '4' },
                            { id: 40, subtitle: 'Performance Optimization Techniques', courseId: '4' },
                        ]
                    }
                ],
                id: "4"
            }
            );





            server.create('topic', {
                html: [
                    {
                        id: 1,
                        courseId: 1,
                        title: 'Introduction to HTML',
                        content: 'HTML stands for Hypertext Markup Language. It is the standard markup language for creating web pages. HTML elements are the building blocks of HTML pages, defining the structure and layout of a web document.',
                        code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Introduction to HTML</title>\n</head>\n<body>\n    <h1>Welcome to HTML</h1>\n    <p>HTML is the foundation of web development.</p>\n</body>\n</html>'
                    },
                    {
                        id: 2,
                        courseId: 1,
                        title: 'What is HTML?',
                        content: 'HTML is a markup language used to create the structure of web pages. It allows web developers to format text, images, links, and other content on the internet using tags.',
                        code: '<p>This is a paragraph in HTML.</p>\n<a href="https://www.example.com">Visit Example</a>'
                    },
                    {
                        id: 3,
                        courseId: 1,
                        title: 'Basic Structure of an HTML Document',
                        content: 'HTML (HyperText Markup Language) is the standard markup language used to create web pages. It structures content on the web, allowing browsers to interpret and display text, images, links, and other elements.',
                        code: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Sample Page</title>
            </head>
            <body>
                <h1>Hello, World!</h1>
                <p>This is a sample HTML document.</p>
            </body>
            </html>`
                    },
                    {
                        id: 4,
                        courseId: 1,
                        title: 'HTML Tags',
                        content: 'Tags are the fundamental building blocks of HTML, consisting of an opening tag and a closing tag, such as <p> for a paragraph. Some tags can be self-closing, like <img />.',
                        code: '<p>This is a paragraph.</p>\n<img src="image.jpg" alt="Description" />'
                    },
                    {
                        id: 5,
                        "courseId": "1",
                        "title": "HTML Elements",
                        "content": "HTML elements are the building blocks of HTML pages. An HTML element consists of a start tag, content, and an end tag. Here are some common elements:",
                        "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Elements</title>\n</head>\n<body>\n    <h1>This is a heading</h1>\n    <p>This is a paragraph.</p>\n    <a href=\"#\">This is a link</a>\n    <img src=\"image.jpg\" alt=\"Image description\">\n</body>\n</html>"
                    },
                    {
                        id: 6,
                        courseId: 1,
                        title: 'HTML Attributes',
                        content: 'Attributes provide additional information about HTML elements and are specified in the opening tag in name/value pairs, like <a href="https://www.example.com">',
                        code: '<!DOCTYPE html>\n<html>\n<body>\n<h2>The href Attribute</h2>\n<p>HTML links are defined with the a tag. The link address is specified in the href attribute:</p>\n<a href="https://www.w3schools.com">Visit W3Schools</a>\n</body>\n</html>'
                    },
                    {
                        id:7,
                        "courseId": "1",
                        "title": "Basic HTML Tags",
                        "content": "Basic HTML tags are essential for structuring a web page. They include tags for headings, paragraphs, links, images, and more.",
                        "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Basic HTML Tags</title>\n</head>\n<body>\n    <h1>This is a Heading</h1>\n    <p>This is a paragraph of text.</p>\n    <a href=\"https://example.com\">This is a link</a>\n    <img src=\"image.jpg\" alt=\"Image description\">\n</body>\n</html>"
                    },
                    {
                        id: 8,
                        courseId: 1,
                        title: 'HTML Headings',
                        content: 'HTML headings are defined with the <h1> to <h6> tags. The <h1> tag defines the most important heading, typically used for the main title, while the <h6> tag represents the least important heading.',
                        code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Headings</title>\n</head>\n<body>\n<h1>This is a Heading 1</h1>\n<h2>This is a Heading 2</h2>\n<h3>This is a Heading 3</h3>\n<h4>This is a Heading 4</h4>\n<h5>This is a Heading 5</h5>\n<h6>This is a Heading 6</h6>\n<p>Headings are important for structuring your content.</p>\n</body>\n</html>'
                    },
                    {
                        id: 9,
                        courseId: 1,
                        title: 'HTML Paragraph',
                        content: 'HTML paragraphs are defined with the <p> tag. Paragraphs can contain text and other inline elements.',
                        code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Paragraph</title>\n</head>\n<body>\n<h1>HTML Paragraph</h1>\n<p>This is a paragraph.</p>\n<p>This is another paragraph. It can contain <strong>bold</strong> text, <em>italic</em> text, and <a href="#">links</a>.</p>\n</body>\n</html>'
                    },
                    {
                        id: 10,
                        title: "HTML Links",
                        content: "Links are created using the <a> tag, where the href attribute specifies the URL. Links can connect to external websites, internal pages, or even specific sections within the same page, making navigation easier for users.",
                        courseId: "1",
                        code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Links</title>\n</head>\n<body>\n\n<h1>HTML Links</h1>\n<p>To visit an example website, click the link below:</p>\n<a href=\"https://www.example.com\">Visit Example</a>\n\n</body>\n</html>"
                    },
                    {
                        id: 11,
                        title: "HTML Images",
                        content: "Images are embedded using the <img> tag, which requires the src attribute for the image source and the alt attribute for alternative text. The alt attribute is important for accessibility and SEO, as it describes the image when it cannot be displayed.",
                        courseId: "1",
                        code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Images</title>\n</head>\n<body>\n\n<h1>HTML Images</h1>\n<p>Here is an example of an image:</p>\n<img src=\"image.jpg\" alt=\"Description of the image\">\n\n</body>\n</html>"
                    },
                    {
                        id: 12,
                        "courseId": "1",
                        "title": "HTML Lists (ordered <ol> and unordered <ul>)",
                        "content": "HTML provides two main types of lists: ordered lists (<ol>) for numbered items and unordered lists (<ul>) for bullet points. Both types can be nested and styled using CSS.",
                        "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Lists</title>\n</head>\n<body>\n    <h1>HTML Lists Example</h1>\n    <h2>Ordered List</h2>\n    <ol>\n        <li>First item</li>\n        <li>Second item</li>\n        <li>Third item</li>\n    </ol>\n    <h2>Unordered List</h2>\n    <ul>\n        <li>Bullet point one</li>\n        <li>Bullet point two</li>\n        <li>Bullet point three</li>\n    </ul>\n</body>\n</html>"
                    },
                    {
                        id: 13,
                        title: "HTML Formatting",
                        content: "HTML provides various tags for text formatting, including <b>, <i>, <u>, and <strong>. These tags allow you to emphasize text in different ways, helping to convey meaning and importance within your content.",
                        courseId: "1",
                        code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Formatting</title>\n</head>\n<body>\n\n<h1>HTML Formatting</h1>\n<p><b>This text is bold</b></p>\n<p><i>This text is italic</i></p>\n<p><u>This text is underlined</u></p>\n<p><strong>This text is strong</strong></p>\n\n</body>\n</html>"
                    },
                    {
                        id: 14,
                        courseId: '1',
                        title: 'Bold (<strong>), Italics (<em>), Underline (<u>)',
                        content: 'In HTML, you can emphasize text using various tags to make it bold, italicized, or underlined. Here’s a breakdown of the <strong>, <em>, and <u> tags:',
                        code: `
                    Text Formatting Tags
                    1. Bold Text (<strong>)
                    
                    The <strong> tag is used to make text bold and indicates that the text is of strong importance.
                    
                    Bold: <strong>Your text here</strong>
                    2. Italics: <em>Your text here</em>
                    3. <u>Underline</u>: <u>Your text here</u>
                    .`
                    },
                    {
                        "id": "15",
                        "courseId": "1",
                        "title": "Blockquotes (<blockquote>)",
                        "content": "In HTML, you can create a blockquote using the <blockquote> tag. This tag is used to denote a section that is being quoted from another source. Blockquotes are typically indented and may include a citation.",
                        "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Blockquote Example</title>\n</head>\n<body>\n    <h1>Using Blockquotes</h1>\n    <blockquote>\n        <p>This is a quote from someone or something important.</p>\n        <footer>— Author Name</footer>\n    </blockquote>\n</body>\n</html>"
                    },
                    {
                        id: 16,
                        courseId: '1',
                        title: 'Horizontal rules (<hr>)',
                        content: 'In HTML, you can create a horizontal rule (a line) using the <hr> tag. This tag is self-closing and is typically used to separate content or sections. Here’s a simple example:',
                        code: `
                    <p>First section of text.</p>
                    <hr>
                    <p>Second section of text.</p>
                    
                    You can also customize the appearance of the horizontal rule with CSS. For example
                    
                    <hr style="border: 1px solid black; width: 50%; margin: auto;">`
                    },
                    {
                        id: 17,
                        title: "HTML Forms",
                        content: "HTML forms are used to collect user input. They can include various input types such as text fields, checkboxes, radio buttons, and more. Forms are essential for user interactions on web pages.",
                        courseId: "1",
                        code: `
                            <!DOCTYPE html>
                            <html>
                            <head>
                                <title>HTML Media</title>
                            </head>
                            <body>
                            
                            <h1>HTML Media</h1>
                            <p>HTML5 introduced the &lt;audio&gt; and &lt;video&gt; tags for embedding media content directly into web pages..</p>
                            
                            <h2>Embedding Audio</h2>
                            <p>The &lt;audio&gt; tag allows you to embed sound content. You can provide multiple source files for different formats.</p>
                            <audio controls>
                                <source src="audio.mp3" type="audio/mpeg">
                                Your browser does not support the audio element.
                                <p>Please download the audio file: <a href="audio.mp3">audio.mp3</a></p>
                            </audio>
                            
                            <h2>Embedding Video</h2>
                            <p>The &lt;video&gt; tag allows you to embed video content. Like the audio tag, you can provide different formats for compatibility.</p>
                            <video width="320" height="240" controls>
                                <source src="video.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                                <p>Please download the video file: <a href="video.mp4">video.mp4</a></p>
                            </video>
                            
                            </body>
                            </html>
                        `
                    },
                    {
                        id: 18,
                        "courseId": "1",
                        "title": "Form element (<form>)",
                        "content": "The <form> element is used to create interactive controls in a web page that users can use to submit data to a server. Forms can contain various input types, including text fields, checkboxes, radio buttons, and submit buttons.",
                        "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Form Example</title>\n</head>\n<body>\n    <h1>HTML Form Example</h1>\n    <form action=\"/submit\" method=\"post\">\n        <label for=\"name\">Name:</label>\n        <input type=\"text\" id=\"name\" name=\"name\"><br><br>\n        <label for=\"email\">Email:</label>\n        <input type=\"email\" id=\"email\" name=\"email\"><br><br>\n        <input type=\"submit\" value=\"Submit\">\n    </form>\n</body>\n</html>"
                    },
                    {
                        id: 19,
                        "courseId": "1",
                        "title": "Input types (text, email, password, radio, checkbox)",
                        "content": "HTML provides various input types for forms, enhancing user experience and validation. Common input types include text, email, password, radio buttons, and checkboxes.",
                        "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Input Types Example</title>\n</head>\n<body>\n    <h1>Input Types Example</h1>\n    <form>\n        <label for=\"text\">Text Input:</label>\n        <input type=\"text\" id=\"text\" name=\"text\"><br><br>\n        <label for=\"email\">Email Input:</label>\n        <input type=\"email\" id=\"email\" name=\"email\"><br><br>\n        <label for=\"password\">Password:</label>\n        <input type=\"password\" id=\"password\" name=\"password\"><br><br>\n        <label>Choose a fruit:</label><br>\n        <input type=\"radio\" id=\"apple\" name=\"fruit\" value=\"apple\">\n        <label for=\"apple\">Apple</label><br>\n        <input type=\"radio\" id=\"banana\" name=\"fruit\" value=\"banana\">\n        <label for=\"banana\">Banana</label><br><br>\n        <label for=\"checkbox\">Select Options:</label><br>\n        <input type=\"checkbox\" id=\"option1\" name=\"option1\" value=\"Option 1\">\n        <label for=\"option1\">Option 1</label><br>\n        <input type=\"checkbox\" id=\"option2\" name=\"option2\" value=\"Option 2\">\n        <label for=\"option2\">Option 2</label><br><br>\n        <input type=\"submit\" value=\"Submit\">\n    </form>\n</body>\n</html>"
                    },
                    {
                        id: 20,
                        courseId: '1',
                        title: 'Labels (<label>) ',
                        content: 'The <label> element in HTML is used to define a label for form controls. It improves accessibility and usability by associating a descriptive text with a corresponding input element. Here’s how it works:',
                        code: `
                    Basic Example: 1.
                    <label for="inputId">Label Text</label>
                    <input type="text" id="inputId" name="inputName">
                    
                    Basic Example: 2. 
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username">
                    
                    Checkbox Example: 3.
                    <label for="subscribe">
                    <input type="checkbox" id="subscribe" name="subscribe"> Subscribe to newsletter
                    </label>
                    
                    Radio Button Example: 4.
                    <label>
                    <input type="radio" name="gender" value="male"> Male
                    </label>
                    <label>
                    <input type="radio" name="gender" value="female"> Female
                    </label>`
                    },
                    {
                        id: 21,
                        "courseId": "1",
                        "title": "Buttons (<button>, <input type=submit>)",
                        "content": "HTML provides different ways to create buttons in forms. The <button> tag and the <input type='submit'> are commonly used to submit forms or trigger actions.",
                        "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Button Example</title>\n</head>\n<body>\n    <h1>Button Example</h1>\n    <form>\n        <label for=\"name\">Name:</label>\n        <input type=\"text\" id=\"name\" name=\"name\"><br><br>\n        <button type=\"button\" onclick=\"alert('Button Clicked!')\">Click Me!</button><br><br>\n        <input type=\"submit\" value=\"Submit\">\n    </form>\n</body>\n</html>"
                    },
                    {
                        id: 22,
                        courseId: '1',
                        title: 'Textareas (<textarea>)',
                        content: 'The <textarea> element in HTML is used for multi-line text input, allowing users to enter larger amounts of text. Here’s an overview of how to use <textarea>, its attributes, and best practices:',
                        code: `
                    1. <textarea name="message" rows="4" cols="50"></textarea>
                    
                    Key Attributes
                    name: The name of the textarea, used to identify the form data after submission.
                    
                    rows: Specifies the number of visible text lines.
                    
                    cols: Specifies the visible width of the textarea, measured in character units.
                    
                    placeholder: Provides a short hint that describes the expected value of the textarea (e.g., "Type your message here...").
                    
                    maxlength: Limits the maximum number of characters that can be entered.
                    
                    required: Indicates that the textarea must be filled out before submitting the form.
                    
                    readonly: Makes the textarea non-editable, allowing users to see the text but not change it.
                    
                    disabled: Disables the textarea, preventing user interaction and submission.
                    
                    <form action="/submit" method="post">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" cols="50" placeholder="Type your message here..." required></textarea>
                    <button type="submit">Send</button>
                    </form>`
                    },
                    {
                        id: 23,
                        courseId: '1',
                        title: 'Select dropdowns (<select>)',
                        content: 'The <select> element in HTML is used to create a dropdown list, allowing users to choose one or more options from a predefined list. Here’s a detailed overview of how to use <select> elements, their attributes, and best practices.:',
                        code: `
                    <select name="options" id="options">
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    </select>
                    .`
                    },
                    {
                        id: 24,
                        title: "HTML Semantic Elements",
                        content: "Semantic elements clearly describe their meaning in a human- and machine-readable way, such as <article>, <section>, and <aside>.",
                        courseId: "1",
                        code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Semantic Elements</title>\n</head>\n<body>\n    <article>\n        <h2>Article Title</h2>\n        <p>This is the content of the article.</p>\n    </article>\n    <section>\n        <h2>Section Title</h2>\n        <p>This is a section of the document.</p>\n    </section>\n    <aside>\n        <h2>Related Information</h2>\n        <p>This is some related information.</p>\n    </aside>\n</body>\n</html>"
                    },
                    {
                        id: 25,
                        "courseId": "1",
                        "title": "Using semantic tags (<header>, <nav>, <section>, <article>, <footer>)",
                        "content": "Semantic tags in HTML5 clearly define the structure and meaning of the content, enhancing accessibility and SEO. The <header>, <nav>, <section>, <article>, and <footer> tags are essential for organizing web pages.",
                        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Semantic HTML Example</title>\n    <style>\n        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }\n        header, footer { background-color: #f4f4f4; padding: 20px; text-align: center; }\n        nav { margin: 20px 0; }\n        section { padding: 20px; }\n        article { margin-bottom: 20px; border: 1px solid #ccc; padding: 10px; }\n    </style>\n</head>\n<body>\n\n<header>\n    <h1>My Blog</h1>\n    <p>Welcome to my blog where I share my thoughts and experiences.</p>\n</header>\n\n<nav>\n    <ul>\n        <li><a href=\"#home\">Home</a></li>\n        <li><a href=\"#about\">About</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n    </ul>\n</nav>\n\n<section>\n    <h2>Latest Articles</h2>\n\n    <article>\n        <h3>Understanding Semantic HTML</h3>\n        <p>Semantic HTML tags clearly describe their meaning in a human- and machine-readable way.</p>\n        <p><a href=\"#\">Read more...</a></p>\n    </article>\n\n    <article>\n        <h3>The Benefits of Clean Code</h3>\n        <p>Writing clean code improves maintainability and reduces errors.</p>\n        <p><a href=\"#\">Read more...</a></p>\n    </article>\n</section>\n\n<footer>\n    <p>&copy; 2024 My Blog. All rights reserved.</p>\n</footer>\n\n</body>\n</html>"
                    },
                    {
                        id: 26,
                        title: "Importance of semantic HTML for accessibility and SEO",
                        content: "HTML provides a wide range of tags for various functionalities, from structuring content to creating forms and multimedia elements. Below is a list of commonly used HTML tags.",
                        courseId: "1",
                        code: `
                    Importance for Accessibility: 
                    Clear Structure: Semantic tags (like <header>, <nav>, <section>, <article>, and <footer>) help create a logical structure for web content. This makes it easier for assistive technologies (like screen readers) to navigate and interpret the page.
                    
                    Meaningful Elements: Each semantic element conveys meaning about the content it contains. For example, <article> indicates that the content is a standalone piece, while <nav> clearly defines navigation links. This helps users understand the context and purpose of different sections.
                    
                    Enhanced Navigation: Screen readers can announce the roles of different parts of the page, allowing users to quickly jump to relevant sections, such as the main content or navigation.
                    
                    Improved Focus Management: Semantic elements can help manage focus more effectively, allowing keyboard users to navigate through a webpage in a meaningful way.
                    
                    Accessibility Standards Compliance: Using semantic HTML helps meet web accessibility standards, such as the Web Content Accessibility Guidelines (WCAG), making your site more inclusive for all users.
                    `
                    },
                    {
                        id: 27,
                        courseId: 1,
                        title: 'HTML Attributes',
                        content: 'Attributes provide additional information about HTML elements and are specified in the opening tag in name/value pairs, like <a href="https://www.example.com">.',
                        courseId: '1',
                        code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h2>The href Attribute</h2>\n\n<p>HTML links are defined with the a tag. The link address is specified in the href attribute:</p>\n\n<a href=\"https://www.w3schools.com\">Visit W3Schools</a>\n\n</body>\n</html>'
                    },
                    {
                        id: 28,
                        title: "HTML Classes",
                        content: "The class attribute is used to specify a class for an HTML element, which can be styled with CSS. Multiple elements can share the same class to apply the same styles.",
                        courseId: "1",
                        code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Classes</title>\n    <style>\n        .my-class {\n            color: blue;\n            font-weight: bold;\n        }\n    </style>\n</head>\n<body>\n\n<div class=\"my-class\">This div has a class.</div>\n\n</body>\n</html>"
                    },
                    {
                        id: 29,
                        title: "HTML Id",
                        content: "The id attribute is used to specify a unique id for an HTML element. It is often used for styling and scripting purposes, allowing you to target specific elements.",
                        courseId: "1",
                        code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Id</title>\n    <style>\n        #uniqueId {\n            color: green;\n            font-size: 20px;\n        }\n    </style>\n</head>\n<body>\n\n<div id=\"uniqueId\">This div has a unique id.</div>\n\n</body>\n</html>"
                    },
                    {
                        id: 30,
                        title: "HTML Style",
                        content: "You can use the style attribute to add CSS styles to HTML elements, allowing you to change their appearance directly within the HTML. This is useful for quick styling but is generally better handled with external CSS files for larger projects.",
                        courseId: "1",
                        code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Style</title>\n</head>\n<body>\n\n<h1 style=\"color: blue;\">This is a blue heading</h1>\n<p style=\"font-size: 20px;\">This is a larger paragraph. Inline styles can be applied directly to individual elements.</p>\n\n</body>\n</html>"
                    },
                    {
                        id: 31,
                        title: 'Data attributes (data-*)',
                        content: 'The data-* attribute is used to store custom data private to the page or application. It provides a way to embed custom data attributes on all HTML elements.',
                        courseId: '1',
                        code: '<div data-user-id="12345">User Info</div>'
                    },
                    {
                        "id": "32",
                        "courseId": "1",
                        "title": "Multimedia Elements",
                        "content": "HTML5 introduced multimedia elements like <audio> and <video> that allow developers to embed audio and video directly into web pages. These elements support various formats and come with built-in controls for playback.",
                        "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Multimedia Elements</title>\n</head>\n<body>\n    <h1>Embedding Multimedia</h1>\n    <h2>Audio Example</h2>\n    <audio controls>\n        <source src=\"audio.mp3\" type=\"audio/mpeg\">\n        Your browser does not support the audio element.\n        <p>Please download the audio file: <a href=\"audio.mp3\">audio.mp3</a></p>\n    </audio>\n    <h2>Video Example</h2>\n    <video width=\"320\" height=\"240\" controls>\n        <source src=\"video.mp4\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n        <p>Please download the video file: <a href=\"video.mp4\">video.mp4</a></p>\n    </video>\n</body>\n</html>"
                    },
                    {
                        id: 33,
                        title: 'Embedding videos (<video>)',
                        content: 'The <video> element in HTML is used to embed video content directly into a web page. It provides a standardized way to play videos without relying on external plugins. Here’s how to use the <video> element, along with its attributes and best practices..',
                        courseId: '1',
                        code: `
                    Basic Syntax:
                    
                    <video width="640" height="360" controls>
                    <source src="video.mp4" type="video/mp4">
                    <source src="video.webm" type="video/webm">
                    Your browser does not support the video tag.
                    </video>
                    
                    Example.2:
                    
                    <video width="640" height="360" controls poster="thumbnail.jpg">
                    <source src="video.mp4" type="video/mp4">
                    <source src="video.webm" type="video/webm">
                    Your browser does not support the video tag.
                    </video>
                    
                            `
                    },
                    {
                        id: 34,
                        title: 'Embedding audio (<audio>)',
                        content: 'The <audio> element in HTML is used to embed audio content directly into a web page. It provides a standardized way to play audio files without relying on external plugins. Here’s how to use the <audio> element, along with its attributes and best practices.',
                        courseId: '1',
                        code: `
                    <audio controls>
                    <source src="audio.mp3" type="audio/mpeg">
                    <source src="audio.ogg" type="audio/ogg">
                    Your browser does not support the audio tag.
                    </audio>
                    
                    Example.2: 
                    
                    <audio controls>
                    <source src="audio.mp3" type="audio/mpeg">
                    <source src="audio.ogg" type="audio/ogg">
                    Your browser does not support the audio tag.
                    </audio>`
                    },
                    {
                        id: 35,
                        title: "Using iframes (<iframe>)",
                        content: "The <iframe> element in HTML is used to embed another HTML document within the current document. This allows you to display content such as videos, maps, or other web pages directly within your page. Here’s a guide on how to use <iframe>, along with its attributes, best practices, and examples..",
                        courseId: "1",
                        code: `
                    Basic Syntax:
                    
                    <iframe src="https://www.example.com" width="600" height="400" title="Description of the content"></iframe>`
                    },
                    {
                        "id": "36",
                        "courseId": "1",
                        "title": "Responsive Design Basics",
                        "content": "Responsive design ensures that your website looks good on all devices, from desktops to smartphones. Here are some basic concepts and techniques you can use in HTML and CSS to achieve responsive design.",
                        "code": `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Responsive Design Basics</title>
                        <style>
                            body { font-family: Arial, sans-serif; }
                            .container { width: 80%; margin: auto; }
                            
                            @media (max-width: 600px) {
                                .container {
                                    width: 100%; /* Full width on smaller screens */
                                }
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>Responsive Design</h1>
                            <p>This content adjusts based on screen size.</p>
                        </div>
                    </body>
                    </html>`
                    },
                    {
                        "id": "37",
                        "courseId": "1",
                        "title": "Introduction to Responsive Design",
                        "content": "Responsive design is an approach to web development that ensures websites provide an optimal viewing experience across a wide range of devices. It involves fluid grids, flexible images, and CSS media queries.",
                        "code": `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Introduction to Responsive Design</title>
                        <style>
                            body { font-family: Arial, sans-serif; }
                            .container { width: 80%; margin: auto; }
                            
                            @media (max-width: 600px) {
                                .container {
                                    width: 100%; /* Full width on smaller screens */
                                }
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>Introduction to Responsive Design</h1>
                            <p>Responsive design ensures that your website looks good on all devices, from desktops to smartphones.</p>
                        </div>
                    </body>
                    </html>`
                    },
                    {
                        "id": "38",
                        "courseId": "1",
                        "title": "The Role of the Viewport",
                        "content": "The viewport meta tag controls the layout of a webpage on mobile browsers. It allows developers to specify the width and scaling of the viewport, ensuring proper rendering on different devices.",
                        "code": `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>The Role of the Viewport</title>
                    </head>
                    <body>
                        <h1>The Role of the Viewport</h1>
                        <p>The <code>&lt;meta name="viewport"&gt;</code> tag is essential for responsive web design. It helps ensure that the website is displayed correctly on all devices.</p>
                        <p>Example of a viewport meta tag:</p>
                        <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>
                    </body>
                    </html>`
                    },
                    {
                        "id": "39",
                        "courseId": "1",
                        "title": "Introduction to HTML5 API",
                        "content": "HTML5 introduced a range of APIs that enhance web applications by enabling rich interactions, multimedia capabilities, and better data handling. Here’s a brief overview of some key HTML5 APIs:",
                        "code": `
                        <h2>Key HTML5 APIs:</h2>
                        <ul>
                            <li><strong>Local Storage:</strong> Allows web applications to store data locally within the user's browser.</li>
                            <li><strong>Session Storage:</strong> Similar to local storage but the data is cleared when the page session ends.</li>
                            <li><strong>Canvas API:</strong> Enables drawing graphics via JavaScript on a web page.</li>
                            <li><strong>Geolocation API:</strong> Allows the user's location to be accessed and used in applications.</li>
                            <li><strong>Web Audio API:</strong> Provides powerful audio processing capabilities.</li>
                        </ul>
                        <p>These APIs allow developers to create more interactive and dynamic web applications.</p>
                        `
                    },
                    {
                        "id": "40",
                        "courseId": "1",
                        "title": "Canvas API",
                        "content": "The Canvas API in HTML5 allows for dynamic, scriptable rendering of 2D shapes and bitmap images. It provides a powerful way to draw graphics and create animations directly in the browser using JavaScript.",
                        "code": `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <title>Canvas API Example</title>
                        </head>
                        <body>
                            <h1>Canvas API Example</h1>
                            <canvas id="myCanvas" width="400" height="200" style="border:1px solid #000000;"></canvas>
                            <script>
                                var canvas = document.getElementById('myCanvas');
                                var ctx = canvas.getContext('2d');
                    
                                // Draw a rectangle
                                ctx.fillStyle = '#FF0000';
                                ctx.fillRect(10, 10, 150, 100);
                    
                                // Draw a circle
                                ctx.beginPath();
                                ctx.arc(200, 100, 50, 0, 2 * Math.PI);
                                ctx.fillStyle = '#00FF00';
                                ctx.fill();
                                ctx.stroke();
                            </script>
                        </body>
                        </html>
                        `
                    },
                    {
                        "id": "41",
                        "courseId": "1",
                        "title": "Geolocation API",
                        "content": "The Geolocation API allows web applications to access the geographical location of the user’s device. This can be used for location-based services, such as mapping and location tracking.",
                        "code": `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <title>Geolocation API Example</title>
                        </head>
                        <body>
                            <h1>Geolocation API Example</h1>
                            <button onclick="getLocation()">Get Location</button>
                            <p id="location"></p>
                    
                            <script>
                                function getLocation() {
                                    if (navigator.geolocation) {
                                        navigator.geolocation.getCurrentPosition(showPosition);
                                    } else { 
                                        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
                                    }
                                }
                    
                                function showPosition(position) {
                                    document.getElementById("location").innerHTML = "Latitude: " + position.coords.latitude + 
                                    "<br>Longitude: " + position.coords.longitude;
                                }
                            </script>
                        </body>
                        </html>
                        `
                    },
                    {
                        "id": "42",
                        "courseId": "1",
                        "title": "Local Storage API",
                        "content": "The Local Storage API allows web applications to store data locally within the user's browser. This data persists even after the browser is closed, making it useful for saving user preferences and other information.",
                        "code": `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <title>Local Storage API Example</title>
                        </head>
                        <body>
                            <h1>Local Storage API Example</h1>
                            <input type="text" id="myInput" placeholder="Enter some text">
                            <button onclick="saveData()">Save to Local Storage</button>
                            <button onclick="loadData()">Load from Local Storage</button>
                            <p id="output"></p>
                    
                            <script>
                                function saveData() {
                                    var input = document.getElementById("myInput").value;
                                    localStorage.setItem("myData", input);
                                }
                    
                                function loadData() {
                                    var data = localStorage.getItem("myData");
                                    document.getElementById("output").innerHTML = data ? data : "No data found.";
                                }
                            </script>
                        </body>
                        </html>
                        `
                    },
                    {
                        "id": "43",
                        "courseId": "1",
                        "title": "Session Storage API",
                        "content": "The Session Storage API allows web applications to store data temporarily for the duration of the page session. Unlike Local Storage, the data is cleared when the page session ends.",
                        "code": `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <title>Session Storage API Example</title>
                        </head>
                        <body>
                            <h1>Session Storage API Example</h1>
                            <input type="text" id="myInput" placeholder="Enter some text">
                            <button onclick="saveData()">Save to Session Storage</button>
                            <button onclick="loadData()">Load from Session Storage</button>
                            <p id="output"></p>
                    
                            <script>
                                function saveData() {
                                    var input = document.getElementById("myInput").value;
                                    sessionStorage.setItem("myData", input);
                                }
                    
                                function loadData() {
                                    var data = sessionStorage.getItem("myData");
                                    document.getElementById("output").innerHTML = data ? data : "No data found.";
                                }
                            </script>
                        </body>
                    </html>`
                    },                    
                    
                    


                ]
            })


            server.create('topic', {
                css: [
                    {
                        id: 1,
                        courseId: 2,
                        title: 'Introduction to CSS',
                        content: 'CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML. It controls the layout and appearance of web pages, making them visually appealing.',
                        courseId: '2',
                        code: '/* Basic CSS Reset /\n {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Body Styling /\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f4f4f4;\n    color: #333;\n}\n\n/ Header Styling /\nheader {\n    background: #007bff;\n    color: #fff;\n    padding: 10px 0;\n    text-align: center;\n}\n\n/ Navigation Menu /\nnav {\n    margin: 15px 0;\n}\n\nnav a {\n    color: white;\n    padding: 10px 15px;\n    text-decoration: none;\n    border-radius: 5px;\n}\n\nnav a:hover {\n    background: #0056b3;\n}\n\n/ Main Content /\nmain {\n    padding: 20px;\n    background: white;\n    border-radius: 5px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n/ Footer */\nfooter {\n    text-align: center;\n    padding: 20px;\n    background: #007bff;\n    color: white;\n    position: relative;\n    bottom: 0;\n    width: 100%;\n}'
                    },
                    {
                        id: 2,
                        courseId: 2,
                        title: "CSS Box Model",
                        content: "The CSS Box Model describes the rectangular boxes generated for elements in the document tree and includes margins, borders, padding, and the actual content area. Understanding the Box Model is essential for effective layout design.",
                        code: ""
                    },
                    {
                        id: 3,
                        courseId: 2,
                        title: "CSS Box Sizing",
                        content: "The box-sizing property in CSS allows you to control how the width and height of an element are calculated. It determines whether the specified width and height include padding and borders or not. This is crucial for layout design.",
                        code: "/* Setting box-sizing to border-box /\n {\n    box-sizing: border-box;\n}\n\n/* Example of Box Sizing /\n.box {\n    width: 300px; / Total width will include padding and border /\n    padding: 20px; / Space inside the box /\n    border: 5px solid black; / Border thickness /\n    background-color: lightcoral; / Background color */\n}"
                    },
                    {
                        id: 4,
                        courseId: 2,
                        title: "CSS Display: Inline and Block",
                        content: "The display property in CSS specifies how an element is displayed on the web page. The most common values are 'inline' and 'block'. Inline elements do not start on a new line and only take up as much width as necessary, while block elements start on a new line and take up the full width available.",
                        code: "/* Inline Example /\n.inline {\n    display: inline;\n    background-color: lightgreen;\n    padding: 10px;\n}\n\n/ Block Example */\n.block {\n    display: block;\n    background-color: lightblue;\n    padding: 10px;\n    margin: 10px 0;\n}"
                    },
                    {
                        id: 5,
                        courseId: 2,
                        title: "CSS Selectors",
                        content: "CSS selectors are patterns used to select the elements you want to style. They can target elements based on their type, class, id, attributes, and more. Understanding these selectors is essential for applying styles effectively.",
                        code: "/* Type Selector /\nh1 {\n    color: blue;\n}\n\n/ Class Selector /\n.button {\n    background-color: green;\n}\n\n/ ID Selector /\n#header {\n    text-align: center;\n}\n\n/ Descendant Selector /\ndiv p {\n    margin: 10px;\n}\n\n/ Child Selector /\nul > li {\n    list-style-type: square;\n}\n\n/ Attribute Selector /\na[href=\"https://example.com\"] {\n    color: red;\n}\n\n/ Universal Selector /\n {\n    box-sizing: border-box;\n}\n\n/* Grouping Selector */\nh1, h2, h3 {\n    font-family: Arial, sans-serif;\n}",
                    },
                    {
                        id: 6,
                        courseId: 2,
                        title: "CSS Positioning",
                        content: "CSS positioning allows you to control the placement of elements on a web page. There are several position values: static, relative, absolute, fixed, and sticky, each with its own behavior and use cases.",
                        code: "/* Static Positioning /\n.static {\n    position: static;\n}\n\n/ Relative Positioning /\n.relative {\n    position: relative;\n    top: 10px;\n    left: 10px;\n}\n\n/ Absolute Positioning /\n.absolute {\n    position: absolute;\n    top: 50px;\n    right: 20px;\n}\n\n/ Fixed Positioning /\n.fixed {\n    position: fixed;\n    bottom: 10px;\n    left: 10px;\n}\n\n/ Sticky Positioning */\n.sticky {\n    position: sticky;\n    top: 0;\n    background-color: yellow;\n}"
                    },
                    {
                        id: 7,
                        courseId: 2,
                        title: "CSS z-index",
                        content: "The z-index property in CSS controls the stacking order of overlapping elements. It only works on positioned elements (those with position values other than static). Higher z-index values bring elements closer to the front.",
                        code: "/* Example with z-index */\n.box1 {\n    position: absolute;\n    z-index: 1;\n    background-color: lightcoral;\n    width: 200px;\n    height: 200px;\n}\n\n.box2 {\n    position: absolute;\n    z-index: 2;\n    background-color: lightblue;\n    width: 150px;\n    height: 150px;\n    top: 50px;\n    left: 50px;\n}\n\n.box3 {\n    position: absolute;\n    z-index: 0;\n    background-color: lightgreen;\n    width: 100px;\n    height: 100px;\n    top: 100px;\n    left: 100px;\n}"
                    },
                    {
                        id: 8,
                        courseId: 2,
                        title: "CSS Overflow",
                        content: "The overflow property in CSS controls how content that overflows an element's box is handled. It can be set to visible, hidden, scroll, or auto, determining whether to show, hide, or provide scrollbars for overflowing content.",
                        code: "/* Example of overflow /\n.container {\n    width: 300px;\n    height: 150px;\n    border: 1px solid black;\n    overflow: auto; / Change to visible, hidden, or scroll to see different behaviors */\n}\n\n.content {\n    height: 300px;\n    background-color: lightblue;\n}"
                    },
                    {
                        id: 9,
                        courseId: 2,
                        title: "CSS Background Position",
                        content: "The background-position property in CSS sets the initial position of a background image within its container. It can take values such as keywords (top, right, bottom, left, center) or specific length values (pixels or percentages) to define its position.",
                        code: "/* Example of background-position /\n.container {\n    width: 300px;\n    height: 200px;\n    background-image: url('https://example.com/image.jpg');\n    background-position: center; / Change to top, bottom, left, right, or specific values */\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: 1px solid black;\n}"
                    },
                    {
                        id: 10,
                        courseId: 2,
                        title: "CSS Background Properties: Origin, Clip, and Attachment",
                        content: "These properties control how background images are displayed within an element's box. 'background-origin' specifies the positioning area of the background image, 'background-clip' determines the area the background is painted, and 'background-attachment' defines whether the background image scrolls with the content or is fixed.",
                        code: "/* Example of background-origin, clip, and attachment /\n.container {\n    width: 300px;\n    height: 200px;\n    background-image: url('https://example.com/image.jpg');\n    background-origin: padding-box; / Change to content-box or border-box /\n    background-clip: border-box; / Change to padding-box or content-box /\n    background-attachment: fixed; / Change to scroll or local */\n    background-size: cover;\n    border: 1px solid black;\n}"
                    },
                    {
                        id: 11,
                        courseId: 2,
                        title: "CSS Gradients",
                        content: "CSS gradients are a way to create smooth transitions between two or more colors. They can be used as a background for elements and come in two main types: linear and radial gradients. Gradients are defined using the background-image property.",
                        code: "/* Example of linear gradient /\n.container {\n    width: 300px;\n    height: 200px;\n    background-image: linear-gradient(to right, red, yellow); / Change direction and colors as needed /\n    border: 1px solid black;\n}\n\n/ Example of radial gradient /\n.container-radial {\n    width: 300px;\n    height: 200px;\n    background-image: radial-gradient(circle, blue, green); / Change shape and colors as needed */\n    border: 1px solid black;\n}"
                    },
                    {
                        id: 12,
                        courseId: 2,
                        title: "CSS Filters",
                        content: "The CSS filter property allows you to apply visual effects to elements, such as blurring, brightness, contrast, and more. Filters can enhance images and other elements, providing a range of creative possibilities.",
                        code: "/* Example of filters /\n.image {\n    width: 300px;\n    height: auto;\n    filter: blur(5px); / Change to brightness, contrast, grayscale, etc. /\n}\n\n/ Combining multiple filters */\n.text {\n    filter: brightness(1.2) contrast(1.5) saturate(1.5);\n}"
                    },
                    {
                        id: 13,
                        courseId: 2,
                        title: "CSS Percentages",
                        content: "Percentages in CSS are used to define sizes, margins, paddings, and positions relative to other elements or the viewport. This allows for responsive design, adapting elements based on their parent container or the screen size.",
                        code: "/* Example of using percentages /\n.container {\n    width: 80%; / Container takes 80% of the viewport width /\n    height: 200px;\n    margin: 0 auto; / Center the container /\n    background-color: lightgray;\n}\n\n.box {\n    width: 50%; / Box takes 50% of the container's width */\n    height: 100%;\n    background-color: teal;\n}"
                    },
                    {
                        id: 14,
                        courseId: 2,
                        title: "CSS Min-Height and Min-Width",
                        content: "The min-height and min-width properties in CSS define the minimum height and width of an element. These properties ensure that an element will not be smaller than the specified values, regardless of its content or the size of its container.",
                        code: "/* Example of min-height and min-width /\n.box {\n    min-height: 150px; / Minimum height of 150 pixels /\n    min-width: 300px; / Minimum width of 300 pixels */\n    background-color: lightblue;\n    padding: 20px;\n    border: 1px solid black;\n}"
                    },
                    {
                        id: 15,
                        courseId: 2,
                        title: "CSS Units: rem and em",
                        content: "rem and em are relative units in CSS used for sizing elements, such as fonts, margins, and padding. em is relative to the font size of its nearest parent, while rem is relative to the font size of the root element, usually the <html> element. This allows for more flexible and scalable designs.",
                        code: "/* Example of using rem and em /\nbody {\n    font-size: 16px; / Base font size /\n}\n\nh1 {\n    font-size: 2rem; / 32px (2 * 16px) /\n}\n\np {\n    font-size: 1.5em; / 24px (1.5 * parent's font size) /\n    margin: 1em; / Margin based on paragraph's font size /\n}\n\n.container {\n    padding: 2em; / Padding based on the container's font size */\n    background-color: lightgray;\n}"
                    },
                    {
                        id: 16,
                        courseId: 2,
                        title: "CSS Units: vh and vw",
                        content: "vh (viewport height) and vw (viewport width) are relative units in CSS that represent a percentage of the viewport's height and width, respectively. These units are particularly useful for creating responsive layouts that adapt to the size of the user's screen.",
                        code: "/* Example of using vh and vw /\n.fullscreen {\n    width: 100vw; / 100% of the viewport width /\n    height: 100vh; / 100% of the viewport height /\n    background-color: lightblue;\n}\n\n.half {\n    width: 50vw; / 50% of the viewport width /\n    height: 50vh; / 50% of the viewport height */\n    background-color: lightcoral;\n}"
                    },
                    {
                        id: 17,
                        courseId: 2,
                        title: "Responsive Design",
                        content: "Responsive design is an approach that ensures web content adapts to different screen sizes and orientations. It uses flexible grids, layouts, and CSS media queries to create a seamless user experience across devices, from desktops to smartphones.",
                        code: "/* Example of responsive design using media queries /\n.container {\n    width: 100%;\n    padding: 20px;\n    background-color: lightgray;\n}\n\n.box {\n    width: 100%;\n    height: 200px;\n    background-color: teal;\n}\n\n/ Media query for tablets and larger screens /\n@media (min-width: 768px) {\n    .box {\n        width: 50%;\n    }\n}\n\n/ Media query for desktops */\n@media (min-width: 1024px) {\n    .box {\n        width: 33.33%;\n    }\n}"
                    },
                    {
                        id: 18,
                        courseId: 2,
                        title: "Media Queries",
                        content: "Media queries help you create responsive designs by applying different styles depending on the size of the screen. This means you can make your website look good on desktops, tablets, and smartphones. With media queries, you can change layouts, font sizes, and more based on how wide or tall the user's screen is.",
                        code: "/* Example of media queries /\n.container {\n    width: 100%;\n    padding: 20px;\n    background-color: lightgray;\n}\n\n.box {\n    width: 100%;\n    height: 200px;\n    background-color: teal;\n}\n\n/ Styles for tablets and larger screens /\n@media (min-width: 768px) {\n    .box {\n        width: 50%; / 2 boxes in a row /\n    }\n}\n\n/ Styles for desktops /\n@media (min-width: 1024px) {\n    .box {\n        width: 33.33%; / 3 boxes in a row */\n    }\n}"
                    },
                    {
                        id: 19,
                        courseId: 2,
                        title: "Viewport Meta Tag",
                        content: "The viewport meta tag controls the layout on mobile browsers. It sets the width of the viewport to the device's width and adjusts the scaling. This is essential for responsive design, ensuring that your website looks good on all devices, from smartphones to desktops.",
                        code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Viewport Meta Tag</title>\n</head>\n<body>\n    <h1>Responsive Web Design</h1>\n    <p>This page is optimized for mobile devices!</p>\n</body>\n</html>"
                    },
                    {
                        id: 20,
                        courseId: 2,
                        title: "Mobile-First Design",
                        content: "The mobile-first approach is a web design strategy that prioritizes mobile devices over desktop. This means you start by designing for smaller screens, ensuring a good user experience on smartphones, and then progressively enhance the layout for larger screens using media queries. This method often results in faster loading times and better performance.",
                        code: "/* Mobile styles (default) /\n.container {\n    width: 100%;\n    padding: 10px;\n    background-color: lightgray;\n}\n\n.box {\n    width: 100%;\n    height: 150px;\n    background-color: teal;\n}\n\n/ Styles for tablets and larger screens /\n@media (min-width: 768px) {\n    .box {\n        width: 50%; / Two boxes in a row on tablets /\n    }\n}\n\n/ Styles for desktops /\n@media (min-width: 1024px) {\n    .box {\n        width: 33.33%; / Three boxes in a row on desktops */\n    }\n}"
                    },
                    {
                        id: 21,
                        courseId: 2,
                        title: "Fluid Design",
                        content: "Fluid design uses relative units like percentages, vw, and vh to create layouts that adapt to different screen sizes. Instead of fixed widths, elements resize based on the viewport, ensuring that the design looks good on any device. This approach enhances flexibility and usability across various screen resolutions.",
                        code: "/* Example of fluid design /\n.container {\n    width: 90%; / Container takes 90% of the viewport width /\n    margin: 0 auto; / Center the container /\n    background-color: lightgray;\n}\n\n.box {\n    width: 45%; / Box takes 45% of the container's width /\n    height: 200px;\n    background-color: teal;\n    margin: 2.5%; / Space between boxes */\n}"
                    },
                    {
                        id: 22,
                        courseId: 2,
                        title: "Adaptive Design",
                        content: "Adaptive design is a web design approach that creates distinct layouts for different screen sizes or devices. Unlike fluid design, which uses flexible layouts, adaptive design delivers specific layouts based on the user's device. This method ensures optimal user experience by tailoring the content and layout for various screen resolutions.",
                        code: "/* Example of adaptive design using media queries /\n.container {\n    width: 100%;\n    padding: 20px;\n    background-color: lightgray;\n}\n\n.box {\n    height: 200px;\n    background-color: teal;\n}\n\n/ Layout for mobile devices /\n@media (max-width: 767px) {\n    .box {\n        width: 100%; / Full width on mobile /\n    }\n}\n\n/ Layout for tablets /\n@media (min-width: 768px) and (max-width: 1023px) {\n    .box {\n        width: 50%; / Two boxes in a row on tablets /\n    }\n}\n\n/ Layout for desktops /\n@media (min-width: 1024px) {\n    .box {\n        width: 33.33%; / Three boxes in a row on desktops */\n    }\n}"
                    },
                    {
                        id: 23,
                        courseId: 2,
                        title: "Text & Font",
                        content: "Text refers to the written content that appears on a webpage. CSS provides various properties to control its appearance, including.",
                        code: `
    The font-family property in CSS specifies the typeface for text. It can include specific font names as well as generic font families. Here’s a breakdown of how to use it effectively:
                            
     selector {
        font-family: "Font Name", generic-family;
    }
    
    `
                    },
                    {
                        id: 24,
                        courseId: 2,
                        title: "Transforming Elements",
                        content: "Transforming elements in CSS allows you to manipulate their appearance in 2D or 3D space. Here are some key properties and examples to get you started:",
                        code: `
    Key CSS Transform Properties:
    1. translate()
    Moves an element from its current position.
    Syntax: transform: translate(x, y);
    
    .box {
      transform: translate(50px, 100px);
    }
    
    2. rotate():
    Rotates an element around a specified point.
    Syntax: transform: rotate(angle);
    
    .box {
      transform: rotate(45deg);
    }
    
    3. scale()
    Resizes an element.
    Syntax: transform: scale(x, y);
    
    .box {
      transform: scale(1.5, 1.5);
    }
    
    4. skew()
    Skews an element along the X and Y axes.
    Syntax: transform: skew(x-angle, y-angle);
    
    .box {
      transform: skew(20deg, 10deg);
    }
    
    5.Combining Transformations: 
    
    .box {
      transform: translate(50px, 50px) rotate(30deg) scale(1.2);
    }
    
    
    `
                    },

                    {
                        id: 25,
                        courseId: 2,
                        title: "Transitionings & Animations",
                        content: "CSS transitions and animations are powerful tools for enhancing the visual appeal of your web designs. They allow you to create smooth changes and dynamic effects when elements change state. Here’s a comprehensive guide to help you understand and implement both transitions and animations.",
                        code: `
    CSS Transitions
    Transitions allow you to change property values smoothly over a specified duration.
    
    Key Properties
    1. transition-property: Specifies which property you want to animate.
    2. transition-duration: Defines how long the transition will take.
    3. transition-timing-function: Specifies the speed curve of the transition (e.g., linear, ease-in, ease-out).
    4. transition-delay: Sets a delay before the transition starts.
    
    .element {
      transition: property duration timing-function delay;
    }
    
    
    .button {
      background-color: blue;
      color: white;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    .button:hover {
      background-color: green; /* Changes on hover */
      color: black; /* Changes on hover */
    }`
                    },
                    {
                        id: 26,
                        courseId: 2,
                        title: "Adavnces Css",
                        content: "Advanced CSS techniques enable you to create more sophisticated, responsive, and visually appealing web designs. Here are some key concepts and techniques you might find useful:.",
                        code: `
    1. CSS Grid Layout: CSS Grid is a powerful layout system that allows you to create complex, responsive layouts easily.
    
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    
    .item {
      background-color: lightblue;
      padding: 20px;
    }
    
    2. Flexbox: Flexbox is great for one-dimensional layouts, providing alignment and space distribution among items in a container.
    
    .container {
      display: flex;
      justify-content: space-between; /* Aligns items */
      align-items: center; /* Centers items vertically */
    }
    
    3. CSS Variables (Custom Properties): CSS variables allow you to store values that can be reused throughout your stylesheets, making them easier to maintain.
    
    :root {
      --primary-color: #3498db;
    }
    
    .button {
      background-color: var(--primary-color);
    }
    
    4. Media Queries: Media queries help create responsive designs by applying styles based on device characteristics like width, height, or resolution.
    
    @media (max-width: 600px) {
      .container {
        flex-direction: column; /* Stacks items vertically on small screens */
      }
    }
    
    5. Advanced Selectors: Utilizing advanced selectors can help target elements more precisely.
    
    Attribute selectors:
    
    a[href^="https"] { /* Targets links starting with https */ }
    
    Pseudo-classes:
    
    li:nth-child(odd) { /* Styles odd list items */ }
    
    Pseudo-elements:
    
    p::first-line { /* Styles the first line of paragraphs */ }
    
    `
                    },
                    {
                        id: 27,
                        courseId: 2,
                        title: "Font families",
                        content: "In CSS, font families are specified using the font-family property. You can list multiple font families as a fallback system in case the first choice isn't available. Here are some common font families and how to use them:",
                        code: `
    Common Font Families: 
    
    1.Serif Fonts: These have small lines or decorations at the ends of their letters.
    Examples: Times New Roman, Georgia, Garamond
    
    p {
      font-family: 'Times New Roman', Times, serif;
    }
    
    2.Sans-Serif Fonts: These do not have the small lines at the ends of their letters.
    Examples: Arial, Helvetica, Verdana
    
    h1 {
      font-family: Arial, Helvetica, sans-serif;
    }
    
    
    
    `
                    },
                    {
                        id: 28,
                        courseId: 2,
                        title: "Google Fonts",
                        content: "Google Fonts is a free web font service that allows you to easily integrate a wide variety of fonts into your web projects. Here’s how to use Google Fonts effectively:",
                        code: `
    Steps to Use Google Fonts: 
    
    1.Select a Font:
    Visit the Google Fonts website.
    Browse or search for fonts. You can filter by categories, such as serif, sans-serif, display, etc.
    
    2.Choose Styles: Click on a font to see its styles (weights, italics, etc.). Select the styles you want to use.
    
    3. Embed the Font: Once you’ve selected your fonts, click on the “View Selected Families” button at the bottom right.
    You will see an embed link. Copy the <link> tag provided.
    
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    
    
    <head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    </head>
    
    
    
    
    `
                    },
                    {
                        id: 29,
                        courseId: 2,
                        title: "Custom Fonts",
                        content: "Using custom fonts on your website involves a few steps, typically involving either self-hosting the font files or using a web font service. Here’s how to implement custom fonts effectively:",
                        code: `
    1. Self-Hosting Custom Fonts
    
    body {
        font-family: 'MyCustomFont', sans-serif;
    }
    
    `
                    },
                    {
                        id: 30,
                        courseId: 2,
                        title: "Letter Spacing",
                        content: "Letter spacing, also known as tracking, refers to the space between characters in a word or line of text. Adjusting letter spacing can significantly affect the readability and visual appeal of text. Here are some key points about letter spacing:",
                        code: `
    1. Guidelines for Letter Spacing:
    
    Default Spacing: Most fonts come with a default letter spacing that works well for general use.
    Small Text: Increase letter spacing slightly for small text to improve legibility.
    Large Text: Decrease letter spacing for large text to maintain cohesion and a polished look.
    Capital Letters: Be cautious with letter spacing in all-caps text, as it often requires more space to prevent a cramped appearance.
    
    p {
      letter-spacing: 0.05em; /* Adjust value as needed */
    }
    
    
    `
                    },
                    {
                        id: 31,
                        courseId: 2,
                        title: "Line height",
                        content: "Line height, also known as leading, refers to the vertical space between lines of text. It plays a crucial role in text readability and overall aesthetics. Here are some key points about line height:",
                        code: `
    1. Guidelines for Letter Spacing:
    
    Default Spacing: Most fonts come with a default letter spacing that works well for general use.
    Small Text: Increase letter spacing slightly for small text to improve legibility.
    Large Text: Decrease letter spacing for large text to maintain cohesion and a polished look.
    Capital Letters: Be cautious with letter spacing in all-caps text, as it often requires more space to prevent a cramped appearance.
    
    p {
      letter-spacing: 0.05em; /* Adjust value as needed */
    }
    
    
    `
                    },
                    {
                        id: 32,
                        courseId: 2,
                        title: "Text decoration and text shadow",
                        content: "Text decoration and text shadow are two important CSS properties that enhance the visual presentation of text. Here's a breakdown of both:",
                        code: `
    Text Decoration
    As mentioned earlier, text decoration refers to styles applied to text that can convey meaning or improve aesthetics. Here are the main types:
    
    Underline: Adds a line beneath the text.
    
    Example: text-decoration: underline;
    Overline: Places a line above the text.
    
    Example: text-decoration: overline;
    Line-through (Strikethrough): Draws a line through the middle of the text.
    
    Example: text-decoration: line-through;
    None: Removes any decoration.
    
    Example: text-decoration: none;
    
    
    Text Shadow
    Text shadow adds a shadow effect behind text, creating depth and enhancing legibility. It can be used for stylistic purposes as well. Here’s how it works:
    
    Syntax
    The text-shadow property takes up to four values:
    
    Horizontal Offset: The distance of the shadow from the text on the x-axis (right/left).
    Vertical Offset: The distance of the shadow from the text on the y-axis (up/down).
    Blur Radius: The blur radius of the shadow. The larger the value, the more blurred the shadow appears.
    Color: The color of the shadow.
    
    h1 {
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Horizontal, Vertical, Blur, Color */
    }
    
    a {
      text-decoration: underline;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }
    
    `
                    },
                    {
                        id: 33,
                        courseId: 2,
                        title: "Transform-origin",
                        content: "The transform-origin property in CSS is used to change the point around which a transformation is applied. By default, transformations occur around the center of the element, but with transform-origin, you can specify a different point. This can create interesting effects, especially when rotating or scaling elements.:",
                        code: `
    transform-origin: x-axis y-axis;
    
    x-axis: Defines the horizontal position (e.g., left, center, right, or a length value like 50px).
    y-axis: Defines the vertical position (e.g., top, center, bottom, or a length value).
    
    .element {
        transform-origin: top left;
        transform: rotate(45deg);
    }
    
    .element {
        transform-origin: 50% 100%; /* Center horizontally, bottom vertically */
        transform: scale(1.5);
    }
    
    
    `
                    },
                    {
                        id: 34,
                        courseId: 2,
                        title: "Rotate & translate",
                        content: "Combining rotate and translate in CSS can create dynamic effects where an element both moves and rotates simultaneously. Here’s how you can use these transformations together effectively.",
                        code: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rotate and Translate Example</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
            }
    
            .box {
                width: 100px;
                height: 100px;
                background-color: #007BFF;
                transition: transform 0.5s ease;
            }
    
            .box:hover {
                transform: translate(50px, 30px) rotate(45deg);
            }
        </style>
    </head>
    <body>
    
        <div class="box"></div>
    
    </body>
    </html>
    
    
    
    `
                    },
                    {
                        id: 35,
                        courseId: 2,
                        title: "Skew and Scale",
                        content: "Combining skew and scale in CSS can create interesting visual effects by distorting and resizing elements simultaneously. Here’s how you can use these transformations together effectively.",
                        code: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Skew and Scale Example</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
            }
    
            .box {
                width: 100px;
                height: 100px;
                background-color: #007BFF;
                transition: transform 0.5s ease;
            }
    
            .box:hover {
                transform: scale(1.2) skew(15deg, 10deg);
            }
        </style>
    </head>
    <body>
    
        <div class="box"></div>
    
    </body>
    </html>
    
    
    
    
    
    `
                    },
                    {
                        id: 36,
                        courseId: 2,
                        title: "Transformation shorthands",
                        content: "In CSS, you can use shorthand properties to apply multiple transformations in a single line for cleaner and more efficient code. The transform property is the primary shorthand for this purpose. Here’s how to effectively use transformation shorthands.",
                        code: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Transformation Shorthands Example</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
            }
    
            .box {
                width: 100px;
                height: 100px;
                background-color: #007BFF;
                transition: transform 0.5s ease;
            }
    
            .box:hover {
                transform: translate(30px, 20px) rotate(45deg) scale(1.2) skew(10deg, 5deg);
            }
        </style>
    </head>
    <body>
    
        <div class="box"></div>
    
    </body>
    </html>
    `
                    },
                    {
                        id: 37,
                        courseId: 2,
                        title: "Rotation in 3D",
                        content: "In CSS, you can create 3D rotation effects using the transform property in conjunction with functions like rotateX(), rotateY(), and rotateZ(). These functions allow you to rotate elements along different axes in a 3D space, creating a more dynamic visual experience..",
                        code: `
    transform: rotateX(angle) rotateY(angle) rotateZ(angle);
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>3D Rotation Example</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
            }
    
            .scene {
                perspective: 1000px; /* Sets the perspective for 3D space */
            }
    
            .box {
                width: 100px;
                height: 100px;
                background-color: #007BFF;
                transition: transform 0.5s;
                transform-style: preserve-3d; /* Preserve 3D transformations */
            }
    
            .box:hover {
                transform: rotateY(180deg) rotateX(20deg); /* Rotate on hover */
            }
        </style>
    </head>
    <body>
    
        <div class="scene">
            <div class="box"></div>
        </div>
    
    </body>
    </html>
    
    `
                    },
                    {
                        id: 38,
                        courseId: 2,
                        title: "perspective",
                        content: "The perspective property in CSS is crucial for creating a sense of depth in 3D space. It defines how far the viewer is from the z=0 plane, influencing how 3D transformations appear on the screen.",
                        code: `
    perspective: <length>;
    <length>: Specifies the distance from the viewer to the z=0 plane. Values can be in pixels (e.g., 500px) or other length units.
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Perspective Example</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
            }
    
            .scene {
                perspective: 600px; /* Set perspective for the 3D scene */
            }
    
            .box {
                width: 100px;
                height: 100px;
                background-color: #007BFF;
                transition: transform 0.5s;
                transform-style: preserve-3d; /* Preserve 3D transformations */
            }
    
            .box:hover {
                transform: rotateY(180deg); /* Rotate on hover */
            }
        </style>
    </head>
    <body>
    
        <div class="scene">
            <div class="box"></div>
        </div>
    
    </body>
    </html>
    
    
    `
                    },
                    {
                        id: 39,
                        courseId: 2,
                        title: "z-axis",
                        content: "The z-axis in CSS transformations is used to manipulate the depth of elements in 3D space. When applying transformations, the z-axis allows you to move elements closer to or further away from the viewer. This is essential for creating compelling 3D effects.",
                        code: `
    Understanding the Z-Axis
      Direction: In a 3D coordinate system:
        X-axis: Horizontal (left and right).
        Y-axis: Vertical (up and down).
        Z-axis: Depth (forward and backward).
    
    Using the Z-Axis in Transformations
    You can use the z-axis with transformations like translateZ(), rotateX(), rotateY(), and scaleZ().
    
    Example of Using the Z-Axis
    Here’s a simple example that demonstrates the use of the z-axis in CSS:
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Z-Axis Example</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
                perspective: 800px; /* Set perspective for the 3D scene */
            }
    
            .scene {
                width: 200px;
                height: 200px;
                position: relative;
            }
    
            .box {
                width: 100px;
                height: 100px;
                background-color: #007BFF;
                position: absolute;
                transition: transform 0.5s;
            }
    
            .box:hover {
                transform: translateZ(50px) rotateY(45deg); /* Move closer and rotate */
            }
        </style>
    </head>
    <body>
    
        <div class="scene">
            <div class="box"></div>
        </div>
    
    </body>
    </html>
    
    `
                    },
                    {
                        id: 40,
                        courseId: 2,
                        title: "translate-z",
                        content: "The translateZ() function in CSS is used to move an element along the z-axis in a 3D space. This allows you to position elements closer to or further away from the viewer, creating depth in your layout",
                        code: `
    transform: translateZ(value);
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Translate Z Example</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
                perspective: 800px; /* Perspective for 3D space */
            }
    
            .scene {
                width: 200px;
                height: 200px;
                position: relative;
            }
    
            .box {
                width: 100px;
                height: 100px;
                background-color: #007BFF;
                position: absolute;
                transition: transform 0.5s;
            }
    
            .box:hover {
                transform: translateZ(50px) rotateY(45deg); /* Move closer and rotate */
            }
        </style>
    </head>
    <body>
    
        <div class="scene">
            <div class="box"></div>
        </div>
    
    </body>
    </html>
    
    
    `
                    },
                    {
                        id: 41,
                        courseId: 2,
                        title: "Flipping elements",
                        content: "Flipping elements in CSS can create engaging visual effects, especially in interactive designs. You can achieve a flip effect using CSS transformations, particularly with rotateY() for horizontal flips and rotateX() for vertical flips.",
                        code: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Horizontal Flip Example</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
                perspective: 1000px; /* Perspective for 3D effect */
            }
    
            .scene {
                width: 200px;
                height: 200px;
                position: relative;
                transform-style: preserve-3d; /* Preserve 3D transformations */
                transition: transform 0.6s; /* Smooth transition */
            }
    
            .card {
                width: 100%;
                height: 100%;
                position: absolute;
                backface-visibility: hidden; /* Hide back face */
            }
    
            .front {
                background-color: #007BFF; /* Front color */
            }
    
            .back {
                background-color: #FF5733; /* Back color */
                transform: rotateY(180deg); /* Rotate back face */
            }
    
            .scene:hover {
                transform: rotateY(180deg); /* Flip the card on hover */
            }
        </style>
    </head>
    <body>
    
        <div class="scene">
            <div class="card front"></div>
            <div class="card back"></div>
        </div>
    
    </body>
    </html>
    
    `
                    },

                ]
            });

            server.create('topic', {
                javascript: [
                    {
                        id: 1,
                        courseId: 3,
                        title: 'Introduction to JavaScript',
                        content: 'JavaScript is a versatile programming language primarily used for web development. It enables interactive web pages and is an essential part of web applications, alongside HTML and CSS.',
                        code: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JavaScript Example</title>
    </head>
    <body>
        <h1>Hello, JavaScript!</h1>
        <button id="myButton">Click me!</button>
    
        <script src="script.js"></script>
    </body>
    </html>`
                    },
                    {
                        id: 2,
                        courseId: 3,
                        title: 'JavaScript Variables',
                        content: 'JavaScript variables are containers used to store data values. You can think of them as labels that hold information which can be referenced and manipulated throughout your code. There are three ways to declare variables in JavaScript: using var, let, and const..',
                        courseId: '3',
                        code: `1. var
    Scope: Function-scoped or globally scoped.
    Redeclaration: Can be redeclared.
    Hoisting: Hoisted to the top of their scope.
    
    var name = "Alice";
    console.log(name); // Output: Alice
    
    var name = "Bob"; // Redeclaring
    console.log(name); // Output: Bob
    
    2. let
    Scope: Block-scoped.
    Redeclaration: Cannot be redeclared in the same scope.
    Hoisting: Hoisted, but not initialized.
    
    let age = 25;
    console.log(age); // Output: 25
    // let age = 30; // Error: Identifier 'age' has already been declared
    age = 30; // This is fine
    console.log(age); // Output: 30
    
    3. const
    Scope: Block-scoped.
    Redeclaration: Cannot be redeclared or reassigned.
    Hoisting: Hoisted, but not initialized.
    
    const pi = 3.14;
    console.log(pi); // Output: 3.14
    
    // pi = 3.14159; // Error: Assignment to constant variable
    // const pi = 3.14159; // Error: Identifier 'pi' has already been declared
    
    `
                    },
                    {
                        id: 3,
                        courseId: 3,
                        title: 'JavaScript Data Types',
                        content: 'JavaScript has several data types, including primitive types like strings, numbers, booleans, null, and undefined, as well as complex types like objects and arrays.',
                        courseId: '3',
                        code: `
    1. Primitive Types: Primitive types are the most basic data types and include the following:
    String: Represents a sequence of characters.
    
    let greeting = "Hello, world!";
    
    Number: Represents both integer and floating-point numbers.
    
    let age = 30;        // Integer
    let price = 19.99;  // Floating-point
    
    Boolean: Represents a logical entity that can be either true or false.
    
    let isStudent = true;
    
    Undefined: Indicates that a variable has been declared but has not been assigned a value
    
    let value;
    console.log(value); // Output: undefined
    
    Null: Represents the intentional absence of any object value.
    
    let emptyValue = null;
    
    Symbol: A unique and immutable primitive value, primarily used as object property keys (introduced in ES6).
    
    const uniqueKey = Symbol("description");
    
    BigInt: A numeric type that can represent integers with arbitrary precision (introduced in ES11).
    
    const bigNumber = BigInt(123456789012345678901234567890);
    
    `
                    },
                    {
                        id: 4,
                        courseId: 3,
                        title: 'JavaScript Functions',
                        content: 'Functions in JavaScript are reusable blocks of code designed to perform a specific task. They help organize code, make it more readable, and enable modular programming. Here’s a breakdown of how functions work in JavaScript, along with examples.',
                        courseId: '3',
                        code: `
    1. Function Declaration: A function can be defined using the function keyword, followed by a name, parentheses, and a block of code.
    
    function greet(name) {
        return "Hello, " + name + "!";
    }
    
    console.log(greet("Alice")); // Output: Hello, Alice!
    
    2. Function Expression: A function can also be defined as an expression and assigned to a variable.
    
    const square = function(x) {
        return x * x;
    };
    console.log(square(5)); // Output: 25
    
    3. Arrow Functions: Introduced in ES6, arrow functions provide a more concise syntax for writing functions.
    
    const multiply = (a, b) => a * b;
    console.log(multiply(2, 3)); // Output: 6
    
    Summary
    Function Declaration: Defined with the function keyword.
    Function Expression: Assigned to a variable.
    Arrow Functions: Concise syntax for functions.
    Default Parameters: Default values for parameters.
    Rest Parameters: Capture variable numbers of arguments.
    Return Values: Functions can return values.
    IIFE: Functions executed immediately upon definition.
    Callback Functions: Functions passed as arguments to other functions.
    `
                    },
                    {
                        id: 5,
                        courseId: 3,
                        title: 'JavaScript Conditionals',
                        content: 'JavaScript conditionals allow you to execute different code based on whether a condition is true or false. The most common conditional statements are if, else if, and else. Here’s a breakdown with examples:',
                        courseId: '3',
                        code: `
    1. if Statement: The if statement executes a block of code if the specified condition is true.
    
    let age = 18;
    
    if (age >= 18) {
        console.log("You are an adult.");
    }
    
    2. else Statement: The else statement can be used to execute a block of code when the condition in the if statement is false.
    let age = 16;
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }
    
    3. else if Statement: You can chain multiple conditions using else if.
    
    let age = 20;
    if (age < 13) {
        console.log("You are a child.");
    } else if (age < 18) {
        console.log("You are a teenager.");
    } else {
        console.log("You are an adult.");
    }
    
    4. Ternary Operator: For simple conditional assignments, you can use the ternary operator.
    
    let age = 15;
    let status = (age >= 18) ? "Adult" : "Minor";
    
    console.log(status); // Output: Minor
    
    5. Switch Statement: The switch statement is another way to handle multiple conditions based on the value of a variable.
    
    let day = 3;
    let dayName;
    
    switch (day) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        default:
            dayName = "Invalid day";
    }
    
    console.log(dayName); // Output: Wednesday
    
                            }`
                    },
                    {
                        id: 6,
                        courseId: 3,
                        title: 'Control Structures',
                        content: 'Loops are used to execute a block of code repeatedly. Common loop structures in JavaScript include for, while, and do...while loops.',
                        code: `1. For Loop: The for loop is often used when the number of iterations is known.
                                
                                for (let i = 0; i < 5; i++) {
                                    console.log("Iteration: " + i);
                                }
     2. While Loop: The while loop continues to execute as long as the specified condition is true.
                                
                                let i = 0;
                                while (i < 5) {
                                    console.log("Iteration: " + i);
                                i++;
                                }
    3. Do...While Loop: The do...while loop executes the block of code once before checking the condition.
    
                                let i = 0;
                                do {
                                    console.log(i); // Outputs 0, 1, 2, 3, 4
                                    i++;
                                } while (i < 5);
    
    4. For...of Loop: The for...of loop is used to iterate over iterable objects like arrays or strings.
                                const array = [10, 20, 30];
                                for (const value of array) {
                                    console.log(value); // Outputs 10, 20, 30
                                }
                                    
    5. For...in Loop: The for...in loop is used to iterate over the properties of an object.
                                const obj = { a: 1, b: 2, c: 3 };
                                for (const key in obj) {
                                    console.log(key, obj[key]); // Outputs: a 1, b 2, c 3
                                }
    
    6. Array Methods (forEach): You can also use array methods like forEach to loop through an array.
                                const array = [1, 2, 3];
                                array.forEach((value) => {
                                    console.log(value); // Outputs 1, 2, 3
                                });
    `
                    },
                    {
                        id: 7,
                        courseId: 3,
                        title: 'JavaScript Events',
                        content: 'Events are actions that occur in the browser, such as clicks or key presses. JavaScript allows you to respond to these events using event listeners.',
                        code: `
    1. Event Types: 
    Some common types of events include:
    Mouse Events: click, dblclick, mouseover, mouseout
    Keyboard Events: keydown, keyup, keypress
    Form Events: submit, change, focus, blur
    Window Events: load, resize, scroll
    
    2. Adding Event Listeners:You can add event listeners to elements using the addEventListener method.
    
    <button id="myButton">Click Me!</button>
    <script>
        const button = document.getElementById("myButton");
    
        button.addEventListener("click", function() {
            alert("Button was clicked!");
        });
    </script>
    
    3. Event Object: When an event occurs, an event object is created that contains useful information about the event.
    
    <input type="text" id="myInput">
    <script>
        const input = document.getElementById("myInput");
    
        input.addEventListener("focus", function(event) {
            console.log("Input focused", event);
        });
    </script>
    
    4. Removing Event Listeners: You can remove an event listener using the removeEventListener method.
    
    <button id="myButton">Click Me!</button>
    <script>
        const button = document.getElementById("myButton");
    
        function handleClick() {
            alert("Button was clicked!");
            button.removeEventListener("click", handleClick);
        }
    
        button.addEventListener("click", handleClick);
    </script>
    
    5. Event Delegation: Event delegation is a technique where you add a single event listener to a parent element to manage events for multiple child elements.
    
    <ul id="myList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <script>
        const list = document.getElementById("myList");
    
        list.addEventListener("click", function(event) {
            if (event.target.tagName === "LI") {
                alert("Clicked on " + event.target.textContent);
            }
        });
    </script>
    
    6. Keyboard Events Example: You can also listen for keyboard events and respond accordingly.
    
    <input type="text" id="myInput">
    <script>
        const input = document.getElementById("myInput");
    
        input.addEventListener("keydown", function(event) {
            console.log("Key pressed:", event.key);
        });
    </script>
    
    `
                    },
                    {
                        id: 8,
                        courseId: 3,
                        title: 'JavaScript DOM Manipulation',
                        content: 'The Document Object Model (DOM) represents the structure of a web page. JavaScript can manipulate the DOM to change content, structure, and styles dynamically.'
                    },
                    {
                        id: 9,
                        courseId: 3,
                        title: 'JavaScript ES6 Features',
                        content: 'ES6 (ECMAScript 2015) introduced several new features to JavaScript, including let and const for variable declarations, arrow functions, classes, and template literals.'
                    },
                    {
                        id: 10,
                        courseId: 3,
                        title: 'JavaScript Promises',
                        content: 'Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never.'
                    },
                    {
                        id: 11,
                        courseId: 3,
                        title: 'JavaScript Async/Await',
                        content: 'Async/Await is a syntactic sugar built on top of Promises that allows for writing asynchronous code in a more synchronous style.'
                    },
                    {
                        id: 12,
                        courseId: 3,
                        title: 'JavaScript Modules',
                        content: 'Modules in JavaScript help in organizing code by allowing you to export and import functions, objects, or primitive values between different files.'
                    },
                    {
                        id: 13,
                        courseId: 3,
                        title: 'JavaScript Error Handling',
                        content: 'Error handling in JavaScript can be done using try/catch blocks to manage exceptions and prevent program crashes.'
                    },
                    {
                        id: 14,
                        courseId: 3,
                        title: 'JavaScript Fetch API',
                        content: 'The Fetch API provides a modern way to make network requests in JavaScript, allowing you to handle responses as Promises.'
                    },
                    {
                        id: 15,
                        title: 'JavaScript Closures',
                        content: 'Closures are a feature in JavaScript where an inner function has access to the outer function’s variables, creating a private scope.'
                    },
                    {
                        id: 16,
                        courseId: 3,
                        title: 'JavaScript Scope',
                        content: 'Scope defines the accessibility of variables in JavaScript. It can be global or local, and understanding it is crucial for avoiding errors.'
                    },
                    {
                        id: 17,
                        courseId: 3,
                        title: 'JavaScript Callbacks',
                        content: 'Callbacks are functions that are passed as arguments to other functions, allowing for asynchronous execution and control flow management.'
                    },
                    {
                        id: 18,
                        courseId: 3,
                        title: 'JavaScript Regular Expressions',
                        content: 'Regular expressions are patterns used to match character combinations in strings, providing powerful string manipulation capabilities.'
                    },
                    {
                        id: 19,
                        courseId: 3,
                        title: 'JavaScript Object-Oriented Programming',
                        content: 'JavaScript supports object-oriented programming through prototypes, allowing for inheritance and encapsulation of data.'
                    },
                    {
                        id: 20,
                        courseId: 3,
                        title: 'JavaScript Memory Management',
                        content: 'JavaScript automatically manages memory through garbage collection, freeing up memory that is no longer needed, but understanding it can help optimize performance.'
                    },
                    {
                        id: 21,
                        courseId: 3,
                        title: 'Objects',
                        content: 'In JavaScript, objects are collections of key-value pairs, where each key (also known as a property) is a string, and each value can be of any data type, including numbers, strings, arrays, functions, or even other objects. Here’s a quick overview of how to work with objects in JavaScript:',
                        code: `
    Example of Object:
    const person = {
        name: "Alice",
        age: 30,
        greet: function() {
            console.log(Hello, my name is {this.name});
        }
    };
    
                              `
                    },
                    {
                        id: 22,
                        courseId: 3,
                        title: 'Creating Objects',
                        content: 'Creating objects in JavaScript can be done in several ways. Here’s an overview of the most common methods:',
                        code: `
    1. Object Literal Syntax:
    
    const person = {
        name: "Alice",
        age: 30,
        greet: function() {
            console.log(Hello, my name is {this.name})
        }
    };
    
    2. Using the new Object() Syntax:
    
    const car = new Object();
    car.make = "Toyota";
    car.model = "Camry";
    car.year = 2020;
    
    3. Using Constructor Functions:
    
    function Dog(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    const myDog = new Dog("Buddy", "Golden Retriever");
    
    4. Using ES6 Classes:
    
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const myCat = new Cat("Whiskers", 2);
    
    
    
                              `
                    },
                    {
                        id: 23,
                        courseId: 3,
                        title: 'Accessing Object Properties',
                        content: 'Accessing object properties in JavaScript can be done in two main ways: dot notation and bracket notation. Here’s how each works:',
                        code: `
    1. Dot Notation: You can access properties of an object using the dot (.) operator.
    
    const person = {
        name: 'John',
        age: 30,
        greet: function() {
            console.log(Hello, my name is ${this.name});
        }
    };
    
    console.log(person.name); // Output: John
    console.log(person.age);  // Output: 30
    person.greet();           // Output: Hello, my name is John
    
    
    2. Using the new Object() Syntax:
    
    const car = new Object();
    car.make = "Toyota";
    car.model = "Camry";
    car.year = 2020;
    
    3. Using Constructor Functions:
    
    function Dog(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    const myDog = new Dog("Buddy", "Golden Retriever");
    
    4. Using ES6 Classes:
    
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const myCat = new Cat("Whiskers", 2);
    
    
    
                              `
                    },
                    {
                        id: 24,
                        courseId: 3,
                        title: 'Modifying Objects',
                        content: 'Modifying objects in JavaScript involves changing their properties or adding new ones. Here’s how you can do that:',
                        code: `
    
    1. Adding Properties: You can add new properties to an object using either dot notation or bracket notation.
    
    const person = {
        name: 'John',
        age: 30
    };
    
    // Using dot notation
    person.city = 'New York';
    
    // Using bracket notation
    person['occupation'] = 'Engineer';
    
    console.log(person);
    // Output: { name: 'John', age: 30, city: 'New York', occupation: 'Engineer' }
    
    2. Modifying Existing Properties: You can change the value of an existing property similarly.
    
    person.age = 31;          // Using dot notation
    person['city'] = 'Los Angeles'; // Using bracket notation
    
    console.log(person);
    // Output: { name: 'John', age: 31, city: 'Los Angeles', occupation: 'Engineer' }
    
    3. Deleting Properties: You can remove a property from an object using the delete operator.
    
    delete person.occupation;
    
    console.log(person);
    // Output: { name: 'John', age: 31, city: 'Los Angeles' }
    
    4. Updating Nested Properties: If an object contains nested objects, you can modify properties within those objects.
    
    const student = {
        name: 'Alice',
        grades: {
            math: 90,
            science: 85
        }
    };
    
    // Modifying a nested property
    student.grades.math = 95;
    
    console.log(student);
    // Output: { name: 'Alice', grades: { math: 95, science: 85 } }
    
    
    5. Using Object.assign(): You can use Object.assign() to copy properties from one object to another or to merge objects.
    const defaults = {
        name: 'Unknown',
        age: 0
    };
    
    const user = {
        name: 'Bob'
    };
    
    const newUser = Object.assign({}, defaults, user);
    
    console.log(newUser);
    // Output: { name: 'Bob', age: 0 }
    
                              `
                    },
                    {
                        id: 25,
                        courseId: 3,
                        title: 'Looping Through Object Properties',
                        content: 'Accessing object properties in JavaScript can be done in two main ways: dot notation and bracket notation. Here’s how each works:',
                        code: `
    1. You can use for...in or Object.keys():
    Using for...in:
    
    for (let key in person) {
        console.log({key}: {person[key]});
    }
    
    2. Using Object.keys():
    
    Object.keys(person).forEach(key => {
        console.log({key}: {person[key]});
    });`
                    },
                    {
                        id: 26,
                        courseId: 3,
                        title: 'Common Methods',
                        content: 'JavaScript objects come with a variety of built-in methods that help in manipulating and interacting with them. Here are some common methods and functionalities you should know:',
                        code: `
    1. Object.assign(): Copies values from one or more source objects to a target object.
    
    const target = {};
    const source = { a: 1, b: 2 };
    Object.assign(target, source);
    
    
    2. Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs
    
    const entries = Object.entries(person);
    
    3. Object.freeze(): Freezes an object, preventing new properties from being added and existing properties from being modified.
    
    Object.freeze(person);
    `
                    },
                    {
                        id: 27,
                        courseId: 3,
                        title: 'Setting Up Environment',
                        content: 'Setting up a JavaScript development environment can vary depending on whether you want to run JavaScript in the browser or on the server (using Node.js). Here’s a guide for both scenarios::',
                        code: `
    1. Browser Environment: You can run JavaScript directly in a web browser. Here's how to set it up:
    
    a. Using the Browser Console
    1.Open a Web Browser: Use any modern browser (Chrome, Firefox, Edge, etc.).
    2. Open Developer Tools:
      Right-click on the page and select "Inspect" or press F12.
      Navigate to the "Console" tab.
    3. Type JavaScript Code: You can write and execute JavaScript directly in the console.
    b. Using HTML Files
    1.  Create an HTML File: Create a new file named index.html.
    2.  Add JavaScript: You can include JavaScript within <script> tags
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JavaScript Example</title>
    </head>
    <body>
        <h1>Hello, JavaScript!</h1>
        <script>
            console.log('Hello from JavaScript!');
        </script>
    </body>
    </html>
    
    `
                    },
                    {
                        id: 28,
                        courseId: 3,
                        title: 'Function Declarations and Expressions',
                        content: 'In JavaScript, functions can be defined in two main ways: function declarations and function expressions. Heres a breakdown of each',
                        code: `
    1. Function Declarations: A function declaration defines a named function that can be called anywhere in the scope in which it is defined.
    
    function functionName(parameters) {
        // Function body
        return value; // Optional
    }
    
    function greet(name) {
        return  Hello,{name}!;
    }
    console.log(greet('Alice')); // Output: Hello, Alice!
    
    2.Key Characteristics of Function Declarations
    
    Hoisting: Function declarations are hoisted, meaning you can call the function before it is defined in the code.
    
    console.log(sayHello('Bob')); // Output: Hello, Bob!
    
    function sayHello(name) {
        return Hello, {name}!;
    
    }
    
    2. Function Expressions: A function expression defines a function as part of a larger expression. Function expressions can be anonymous (without a name) or named.
    
    const functionName = function(parameters) {
        // Function body
        return value; // Optional
    };
    
    
    `
                    },
                    {
                        id: 29,
                        courseId: 3,
                        title: 'Arrow functions ',
                        content: 'Arrow functions are a concise way to write function expressions in JavaScript, introduced in ES6 (ECMAScript 2015). They provide several benefits, including shorter syntax and a different behavior regarding the this keyword. Here’s a detailed overview:',
                        code: `
    Syntax: The basic syntax of an arrow function can vary slightly depending on the number of parameters and whether you need a function body with braces.
    
    1. Single Parameter:If there’s only one parameter, you can omit the parentheses.
    
    const square = x => x * x;
    
    console.log(square(5)); // Output: 25
    
    2. Multiple Parameters: If there are multiple parameters, you need to enclose them in parentheses.
    
    const add = (a, b) => a + b;
    
    console.log(add(3, 4)); // Output: 7
    
    3. No Parameters: If there are no parameters, use empty parentheses.
    
    const greet = () => 'Hello, World!';
    
    console.log(greet()); // Output: Hello, World!
    
    4. Function Body with Multiple Statements: If the function body contains more than one statement, use curly braces and the return statement.
    
    const multiply = (a, b) => {
        const result = a * b;
        return result;
    };
    
    console.log(multiply(3, 4)); // Output: 12
    
    
    `
                    },
                    {
                        id: 30,
                        courseId: 3,
                        title: 'Parameters and Return Values',
                        content: 'In JavaScript, functions can take parameters (inputs) and return values (outputs). Understanding how to work with parameters and return values is fundamental to writing effective functions. Here’s a breakdown of both concepts:',
                        code: `
    
    1. Parameters: Parameters are variables that are used to pass information into functions. You can define a function with any number of parameters, including none.
    
    a. Defining Parameters: You specify parameters within the parentheses of the function declaration or expression.
    
    function greet(name) {
        return Hello, ${name}!;
    }
    
    console.log(greet('Alice')); // Output: Hello, Alice!
    
    b. Multiple Parameters:You can define multiple parameters by separating them with commas.
    
    function add(a, b) {
        return a + b;
    }
    
    console.log(add(5, 3)); // Output: 8
    
    c. Default Parameters: You can provide default values for parameters, which will be used if no value is provided when the function is called.
    
    function multiply(a, b = 1) {
        return a * b;
    }
    
    console.log(multiply(5));   // Output: 5 (5 * 1)
    console.log(multiply(5, 2)); // Output: 10
    
    
    `
                    },
                    {
                        id: 31,
                        courseId: 3,
                        title: 'Array',
                        content: 'An array is a special type of object used to store multiple values in a single variable. Arrays can hold elements of any data type, including numbers, strings, objects, and even other arrays.',
                        code: `
    Creating Arrays: 
    1.Using Array Literals:
    const fruits = ['apple', 'banana', 'cherry'];
    
    2. Using the Array Constructor:
    const numbers = new Array(1, 2, 3);
    
    3.Empty Array:
    const emptyArray = [];
    
    
    `
                    },
                    {
                        id: 32,
                        courseId: 3,
                        title: 'Methods of Array',
                        content: 'Here are some commonly used array methods along with examples:',
                        code: `
    1. Adding and Removing Elements:
    push(): Adds one or more elements to the end of an array.
    
    fruits.push('orange'); // ['apple', 'banana', 'cherry', 'orange']
    
    pop(): Removes the last element from an array and returns that element.
    const lastFruit = fruits.pop(); // 'orange'
    
    unshift(): Adds one or more elements to the beginning of an array.
    
    fruits.unshift('kiwi'); // ['kiwi', 'apple', 'banana', 'cherry']
    
    shift(): Removes the first element from an array and returns that element.
    const firstFruit = fruits.shift(); // 'kiwi'
    
    2. Finding Elements: indexOf(): Returns the first index at which a given element can be found, or -1 if it’s not found.
    
    const index = fruits.indexOf('banana'); // 1
    
    includes(): Determines whether an array includes a certain value, returning true or false.
    const hasCherry = fruits.includes('cherry'); // true
    
    
    3. Iterating Over Arrays: 
    forEach(): Executes a provided function once for each array element.
    
    fruits.forEach((fruit) => {
        console.log(fruit);
    });
    
    map(): Creates a new array populated with the results of calling a provided function on every element.
    
    const fruitLengths = fruits.map((fruit) => fruit.length); // [5, 6, 6]
    
    filter(): Creates a new array with all elements that pass the test implemented by the provided function.
    
    const longFruits = fruits.filter((fruit) => fruit.length > 5); // ['banana', 'cherry']
    
    4. Reducing Arrays: 
    
    reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
    
    const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0); // Total length of all fruit names
    
    5. Slicing and Splicing: 
    
    slice(): Returns a shallow copy of a portion of an array into a new array.
    const citrus = fruits.slice(1, 3); // ['banana', 'cherry']
    
    
    splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
    
    fruits.splice(1, 1, 'mango'); // Replaces 'banana' with 'mango'
    
    6. Concatenation and Joining: 
    concat(): Merges two or more arrays and returns a new array.
    const vegetables = ['carrot', 'potato'];
    const food = fruits.concat(vegetables); // Merged array
    
    join(): Joins all elements of an array into a string.
    
    const fruitString = fruits.join(', '); // 'apple, mango, cherry'
    
    `
                    },
                    {
                        id: 33,
                        courseId: 3,
                        title: 'Arrays and forEach',
                        content: 'Arrays and forEach are two distinct concepts in JavaScript, often used together but serving different purposes. Here’s a breakdown of their differences:',
                        code: `
    1. Definition:
    
    Array:An array is a data structure that stores a collection of items (elements). Each element can be accessed using its index.
    const fruits = ['apple', 'banana', 'cherry'];
    
    forEach:
    1.1 forEach is a method available on arrays that allows you to execute a provided function once for each array element.
    1.2 It is used for iterating over the elements of an array.
    
    fruits.forEach((fruit) => {
        console.log(fruit);
    });
    
    `
                    },
                    {
                        id: 34,
                        courseId: 3,
                        title: 'Intermediate JavaScript',
                        content: 'Intermediate JavaScript builds upon the foundational knowledge you have and introduces more complex concepts and techniques. Here’s a structured overview of key topics to focus on at the intermediate level:',
                        code: `
    1. DOM Manipulation: Selecting elements, modifying content and styles, 2.2.2. event handling
    3. Asynchronous JavaScript: Callbacks, Promises, async/await
    4. Modules: ES6 modules, CommonJS, module bundlers (like Webpack)
    5 .JSON: Working with JSON data;
    
    `
                    },
                    {
                        id: 35,
                        courseId: 3,
                        title: 'DOM Manipulation',
                        content: 'DOM (Document Object Model) manipulation is a way to interact with and modify the structure, style, and content of a web page using JavaScript. Here are some key concepts and methods you can use for DOM manipulation:',
                        code: `
    1. Selecting Elements:
    getElementById: Selects an element by its ID.
    
    const element = document.getElementById('myId');
    
    getElementsByClassName: Selects elements by their class name.
    
    const elements = document.getElementsByClassName('myClass');
    
    getElementsByTagName: Selects elements by their tag name.
    
    const elements = document.getElementsByTagName('div');
    
    querySelector: Selects the first matching element based on a CSS selector.
    
    const element = document.querySelector('.myClass');
    
    querySelectorAll: Selects all matching elements.
    
    const elements = document.querySelectorAll('.myClass');
    
    2. Modifying Elements
    
    Text Content: Change the text inside an element.
    
    element.textContent = 'New Text';
    
    `
                    },
                    {
                        id: 36,
                        courseId: 3,
                        title: 'Asynchronous JavaScript',
                        content: 'Asynchronous JavaScript is a programming paradigm that allows for non-blocking code execution. This is essential for improving performance and user experience, especially in web applications where tasks like fetching data from a server can take time.',
                        code: `
    1. Key Concepts:
    
    Callbacks: Functions that are passed as arguments to other functions. They execute after a task is completed. However, excessive use of callbacks can lead to "callback hell," making code hard to read and maintain.
    
    function fetchData(callback) {
        setTimeout(() => {
            callback("Data received");
        }, 1000);
    }
    
    fetchData((data) => {
        console.log(data);
    });
    
    Promises: A cleaner alternative to callbacks, promises represent a value that may be available now, or in the future, or never. They can be in one of three states: pending, fulfilled, or rejected.
    
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data received");
            }, 1000);
        });
    };
    
    fetchData()
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    
    
    Async/Await: A syntax that makes working with promises easier and more readable. It allows you to write asynchronous code that looks synchronous.
    
    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data received");
            }, 1000);
        });
    };
    
    const fetchAndLogData = async () => {
        try {
            const data = await fetchData();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    
    fetchAndLogData();
    
    
    Advantages of Asynchronous JavaScript:
    Improved Performance: Non-blocking calls allow other code to run while waiting for a response.
    Better User Experience: Users can interact with the application while data is being fetched or processed.
    Scalability: Asynchronous patterns can handle many operations simultaneously.
    
    Use Cases
    Fetching data from APIs (e.g., using fetch or axios).
    Handling user interactions without freezing the UI.
    Performing tasks like reading files or querying databases without blocking the main thread.
    
    `
                    },
                    {
                        id: 37,
                        courseId: 3,
                        title: 'Asynchronous JavaScript',
                        content: 'Asynchronous JavaScript is a programming paradigm that allows for non-blocking code execution. This is essential for improving performance and user experience, especially in web applications where tasks like fetching data from a server can take time.',
                        code: `
    1. Key Concepts:
    
    Callbacks: Functions that are passed as arguments to other functions. They execute after a task is completed. However, excessive use of callbacks can lead to "callback hell," making code hard to read and maintain.
    
    function fetchData(callback) {
        setTimeout(() => {
            callback("Data received");
        }, 1000);
    }
    
    fetchData((data) => {
        console.log(data);
    });
    
    Promises: A cleaner alternative to callbacks, promises represent a value that may be available now, or in the future, or never. They can be in one of three states: pending, fulfilled, or rejected.
    
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data received");
            }, 1000);
        });
    };
    
    fetchData()
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    
    
    Async/Await: A syntax that makes working with promises easier and more readable. It allows you to write asynchronous code that looks synchronous.
    
    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data received");
            }, 1000);
        });
    };
    
    const fetchAndLogData = async () => {
        try {
            const data = await fetchData();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    
    fetchAndLogData();
    
    
    Advantages of Asynchronous JavaScript:
    Improved Performance: Non-blocking calls allow other code to run while waiting for a response.
    Better User Experience: Users can interact with the application while data is being fetched or processed.
    Scalability: Asynchronous patterns can handle many operations simultaneously.
    
    Use Cases
    Fetching data from APIs (e.g., using fetch or axios).
    Handling user interactions without freezing the UI.
    Performing tasks like reading files or querying databases without blocking the main thread.
    
    `
                    },
                    {
                        id: 38,
                        courseId: 3,
                        title: 'Modules',
                        content: 'JavaScript modules are a way to organize and encapsulate code, enabling better code management, reusability, and maintainability. Here  a deeper dive into modules, covering their structure, types, and usage:.',
                        code: `
    1. Types of JavaScript Modules
    ES Modules (ESM): The modern standard for modules in JavaScript, introduced in ES6 (ECMAScript 2015). They use import and export syntax.
    
    // math.js
    export const add = (a, b) => a + b;
    export const subtract = (a, b) => a - b;
    
    Importing:
    
    // main.js
    import { add, subtract } from './math.js';
    
    console.log(add(2, 3));       // Outputs: 5
    console.log(subtract(5, 2));  // Outputs: 3
    
    CommonJS: Used primarily in Node.js. It uses require() for importing and module.exports for exporting.
    
    // math.js
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    
    module.exports = { add, subtract };
    
    
    Importing
    // main.js
    const { add, subtract } = require('./math');
    
    console.log(add(2, 3));       // Outputs: 5
    console.log(subtract(5, 2));  // Outputs: 3
    
    
    `
                    },
                    {
                        id: 39,
                        courseId: 3,
                        title: 'JSON',
                        content: 'JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is widely used for transmitting data between a server and a web application as an alternative to XML..',
                        code: `
    Key Characteristics of JSON
    1. Format: JSON is a text format that is completely language-independent, although it is based on JavaScript syntax. It consists of key-value pairs and ordered lists.
    
    2. Data Types: JSON supports the following data types:
    
    String: Enclosed in double quotes. E.g., "hello"
    Number: Can be an integer or floating-point. E.g., 42 or 3.14
    Object: An unordered collection of key-value pairs. E.g., {"name": "Alice", "age": 30}
    Array: An ordered list of values. E.g., ["apple", "banana", "cherry"]
    Boolean: true or false
    Null: Represents an empty value. E.g., null
    
    Basic JSON Structure: Here's an example of a JSON object representing a user:
    
    {
        "name": "Alice",
        "age": 30,
        "isStudent": false,
        "courses": ["Math", "Science"],
        "address": {
            "street": "123 Main St",
            "city": "Anytown"
        }
    }
    
    Working with JSON in JavaScript: 
    
    1. Parsing JSON: You can convert a JSON string into a JavaScript object using JSON.parse().
    
    const jsonString = '{"name": "Alice", "age": 30}';
    const user = JSON.parse(jsonString);
    console.log(user.name); // Outputs: Alice
    
    2. Stringifying Objects: To convert a JavaScript object into a JSON string, use JSON.stringify().
    
    const user = {
        name: "Alice",
        age: 30
    };
    const jsonString = JSON.stringify(user);
    console.log(jsonString); // Outputs: '{"name":"Alice","age":30}'
    
    
    `
                    },
                    {
                        id: 40,
                        courseId: 3,
                        title: 'advanced JavaScript',
                        content: 'Diving into advanced JavaScript involves exploring deeper concepts and techniques that can enhance your skills and understanding of the language. Here’s a detailed breakdown of advanced JavaScript topics:',
                        code: `
    1. Promises Programming
    2. Async/Await Functions
    3. Event Loop and Concurrency Model
    `
                    },
                    {
                        id: 41,
                        courseId: 3,
                        title: 'Promises',
                        content: 'In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises allow you to write cleaner, more manageable asynchronous code.',
                        code: `
    Key Concepts: 
    1 States:
    Pending: The initial state, neither fulfilled nor rejected.
    Fulfilled: The operation completed successfully.
    Rejected: The operation failed.
    
    2. Creating a Promise: You can create a promise using the Promise constructor, which takes a function with two parameters: resolve and reject.
    
    const myPromise = new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        const success = true; // change to false to see rejection
    
        setTimeout(() => {
            if (success) {
                resolve("Operation was successful!");
            } else {
                reject("Operation failed!");
            }
        }, 1000);
    });
    
    3.Consuming a Promise: You can use .then() to handle fulfillment and .catch() to handle rejection.
    
    myPromise
        .then(result => {
            console.log(result); // "Operation was successful!"
        })
        .catch(error => {
            console.error(error); // "Operation failed!"
        });
    
    4. Chaining Promises: You can chain multiple .then() calls to handle sequential asynchronous operations.
    
    myPromise
        .then(result => {
            console.log(result);
            return "Next step";
        })
        .then(nextResult => {
            console.log(nextResult); // "Next step"
        })
        .catch(error => {
            console.error(error);
        });
    
    5. Promise.all(): To execute multiple promises concurrently and wait for all of them to complete, use Promise.all().
    
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'foo');
    });
    const promise3 = 42;
    
    Promise.all([promise1, promise2, promise3])
        .then(values => {
            console.log(values); // [3, "foo", 42]
        })
        .catch(error => {
            console.error(error);
        });
    
    `
                    },
                    {
                        id: 42,
                        courseId: 3,
                        title: 'Async/Await',
                        content: 'async and await are keywords in JavaScript that provide a more intuitive way to work with asynchronous code, making it easier to read and write compared to traditional promise chaining..',
                        code: `
    Key Concepts: 
    
    1.Async Functions: An async function always returns a promise. If the function returns a value, that value is wrapped in a resolved promise. If it throws an error, it returns a rejected promise.
    
    async function myAsyncFunction() {
        return "Hello, World!";
    }
    
    myAsyncFunction().then(result => console.log(result)); // "Hello, World!"
    
    2.Await: The await keyword can only be used inside async functions. It pauses the execution of the function until the promise is resolved or rejected. This allows you to write code that looks synchronous, making it easier to follow.
    
    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    }
    
    fetchData();
    
    3.Error Handling: You can use try...catch blocks to handle errors in async functions, making it straightforward to manage exceptions.
    
    async function fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }
    
    fetchData();
    
    `
                    },
                    {
                        id: 43,
                        courseId: 3,
                        title: 'The Event Loop and Concurrency Model',
                        content: 'The Event Loop and Concurrency Model in JavaScript are crucial concepts for understanding how asynchronous operations are handled in a single-threaded environment. Here’s a breakdown of these concepts',
                        code: `
    JavaScript Concurrency Model:
    1. Single-Threaded Nature:
    
    JavaScript is single-threaded, meaning it has one call stack and can only execute one piece of code at a time. This can lead to blocking operations if not managed properly.
    
    2. Asynchronous Execution:
    
    To handle tasks that take time (like network requests, timers, etc.) without blocking the main thread, JavaScript uses an asynchronous model with callbacks, promises, and async/await.
    
    The Event Loop:
    
    1. Call Stack:
    This is where the JavaScript engine keeps track of what function is currently running. Functions are pushed onto the stack when called and popped off when they return.
    
    2. Web APIs:
    For asynchronous tasks (like setTimeout, fetch, etc.), the JavaScript engine delegates these tasks to the browser's Web APIs. Once they are completed, they send their callbacks to the callback queue.
    
    3.Callback Queue:
    This queue holds messages (callbacks) that are ready to be processed. It waits for the call stack to be empty before pushing its items into the stack.
    
    4.Event Loop:
    The event loop continuously checks whether the call stack is empty. If it is, it takes the first callback from the callback queue and pushes it onto the call stack for execution. This process allows JavaScript to perform non-blocking operations.
    `
                    },
                ]
            });

            server.create('topic', {
                react: [
                    {
                        id: 1,
                        title: 'Introduction to React',
                        content: 'React is a popular JavaScript library for building user interfaces, developed by Facebook. It allows developers to create large web applications that can change data without reloading the page.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `import React, { useState } from 'react';
                            function Counter() {
                                const [count, setCount] = useState(0); // Declare a state variable
                  
                                const increment = () => {
                                    setCount(count + 1); // Update the state
                                };
                  
                                return (
                                    <div>
                                    <h1>Count: {count}</h1>
                                    <button onClick={increment}>Increment</button>
                                    </div>
                                );
                                }
                  export default Counter;`
                    },
                    {
                        id: 2,
                        title: 'React ES6',
                        content: 'ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.',
                        courseId: '4',
                        ex: 'Example',
                        function: 'React uses ES6, and you should be familiar with some of the new features like:',
                        info: 'Classes \n Arrow Functions\nVariables (let, const, var)\nArray Methods like .map()\nDestructuring\nModules\nTernary Operator\nSpread Operator',
                        code: `import React, { Component } from 'react';
                  
                  class Greeting extends Component {
                  render() {
                  return <h1>Hello, {this.props.name}!</h1>;
                  }
                  }
                  
                  export default Greeting;
                  `
                    },
                    {
                        id: 3,
                        title: 'React ES6 Classes',
                        content: 'React is a popular JavaScript library for building user interfaces, developed by Facebook. It allows developers to create large web applications that can change data without reloading the page.',
                        courseId: '4',
                        ex: 'Examples:',
                        function: '',
                        code: `
                                import React from 'react';
                        
                                // Example 1: Simple Class Component
                                class Greeting extends React.Component {
                                    render() {
                                        return <h1>Hello, {this.props.name}!</h1>;
                                    }
                                }
                        
                                // Example 2: Class Component with State
                                class Counter extends React.Component {
                                    constructor(props) {
                                        super(props);
                                        this.state = { count: 0 };
                                    }
                        
                                    increment = () => {
                                        this.setState({ count: this.state.count + 1 });
                                    };
                        
                                    render() {
                                        return (
                                            <div>
                                                <h1>Count: {this.state.count}</h1>
                                                <button onClick={this.increment}>Increment</button>
                                            </div>
                                        );
                                    }
                                }
                                
                                export { Greeting, Counter };
                            `
                    },
                    {
                        id: 4,
                        title: 'React ES6 Arrow Functions',
                        content: 'Arrow functions are a shorthand way to write functions in JavaScript. They are especially useful in React for writing concise and clear components. Arrow functions do not have their own this, which means they inherit this from the parent scope, making them ideal for handling events.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React, { useState } from 'react';
                        
                                const Counter = () => {
                                    const [count, setCount] = useState(0);
                        
                                    const increment = () => {
                                        setCount(count + 1);
                                    };
                        
                                    const decrement = () => {
                                        setCount(count - 1);
                                    };
                        
                                    return (
                                        <div>
                                            <h1>Count: {count}</h1>
                                            <button onClick={increment}>Increment</button>
                                            <button onClick={decrement}>Decrement</button>
                                        </div>
                                    );
                                };
                        
                                export default Counter;
                            `
                    },
                    {
                        id: 5,
                        title: 'React ES6 Variables',
                        content: 'In ES6, you can use let and const to declare variables. const is used for variables that won’t change, while let is for variables that can be reassigned. Using these keywords helps manage scope and improve code readability.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React from 'react';
                        
                                const Greeting = () => {
                                    const greetingMessage = "Hello, welcome to React!";
                                    let count = 0;
                        
                                    const incrementCount = () => {
                                        count += 1;
                                        console.log(count);
                                    };
                        
                                    return (
                                        <div>
                                            <h1>{greetingMessage}</h1>
                                            <button onClick={incrementCount}>Increment Count</button>
                                        </div>
                                    );
                                };
                        
                                export default Greeting;
                            `
                    },
                    {
                        id: 6,
                        title: 'React ES6 Array Methods',
                        content: 'ES6 introduces several array methods that make it easier to manipulate arrays. Common methods include .map(), .filter(), and .reduce(). These methods are particularly useful in React for rendering lists and managing state.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React from 'react';
                        
                                const TodoList = () => {
                                    const todos = ['Learn React', 'Study ES6', 'Build a project'];
                        
                                    return (
                                        <div>
                                            <h1>My Todo List</h1>
                                            <ul>
                                                {todos.map((todo, index) => (
                                                    <li key={index}>{todo}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                };
                        
                                export default TodoList;
                            `
                    },
                    {
                        id: 7,
                        title: 'React ES6 Destructuring',
                        content: 'Destructuring allows you to unpack values from arrays or properties from objects into distinct variables. This is especially useful in React for extracting props or state values, making your code cleaner and easier to read.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React from 'react';
                        
                                const UserProfile = ({ name, age }) => {
                                    return (
                                        <div>
                                            <h1>Name: {name}</h1>
                                            <h2>Age: {age}</h2>
                                        </div>
                                    );
                                };
                        
                                const App = () => {
                                    const user = { name: 'Alice', age: 30 };
                        
                                    return <UserProfile {...user} />;
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 8,
                        title: 'React ES6 Spread Operator',
                        content: 'The spread operator (...) allows you to expand elements of an iterable (like an array or object) into individual elements. In React, it’s often used to copy objects or arrays and to pass props to components more conveniently.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React from 'react';
                        
                                const Person = ({ name, age }) => {
                                    return (
                                        <div>
                                            <h1>Name: {name}</h1>
                                            <h2>Age: {age}</h2>
                                        </div>
                                    );
                                };
                        
                                const App = () => {
                                    const personDetails = { name: 'Bob', age: 25 };
                        
                                    return <Person {...personDetails} />;
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 9,
                        title: 'React ES6 Modules',
                        content: 'ES6 modules allow you to split your code into separate files, making it easier to manage and maintain. You can export components, functions, or variables from one file and import them into another. This modular approach enhances code organization and reusability.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                // Greeting.js
                                import React from 'react';
                        
                                const Greeting = () => {
                                    return <h1>Hello, World!</h1>;
                                };
                        
                                export default Greeting;
                        
                                // App.js
                                import React from 'react';
                                import Greeting from './Greeting';
                        
                                const App = () => {
                                    return (
                                        <div>
                                            <Greeting />
                                        </div>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 10,
                        title: 'React ES6 Ternary Operator',
                        content: 'The ternary operator is a shorthand way to write conditional statements in JavaScript. It is often used in React for rendering elements based on a condition. The syntax is condition ? exprIfTrue : exprIfFalse, which allows for concise and readable code.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React from 'react';
                        
                                const Greeting = ({ isLoggedIn }) => {
                                    return (
                                        <div>
                                            {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>}
                                        </div>
                                    );
                                };
                        
                                const App = () => {
                                    const userLoggedIn = true; // Change this to false to see the other message
                        
                                    return <Greeting isLoggedIn={userLoggedIn} />;
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 11,
                        title: 'React Render HTML',
                        content: 'In React, you can render HTML using JSX, which allows you to write HTML-like syntax within JavaScript. This makes it easy to create and manage UI components. JSX elements can be composed, and you can also embed JavaScript expressions directly within your HTML structure.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React from 'react';
                        
                                const App = () => {
                                    const title = "Welcome to My Website";
                                    const description = "This is a simple React application.";
                        
                                    return (
                                        <div>
                                            <h1>{title}</h1>
                                            <p>{description}</p>
                                            <ul>
                                                <li>Feature 1</li>
                                                <li>Feature 2</li>
                                                <li>Feature 3</li>
                                            </ul>
                                        </div>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 12,
                        title: 'React JSX',
                        content: 'JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It makes it easier to create and visualize the structure of your UI components. JSX gets compiled to JavaScript function calls, enabling a smooth integration of UI and logic.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React from 'react';
                        
                                const App = () => {
                                    return (
                                        <div>
                                            <h1>Hello, World!</h1>
                                            <p>This is a simple React component using JSX.</p>
                                            <button onClick={() => alert('Button Clicked!')}>Click Me</button>
                                        </div>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 13,
                        title: 'React Components',
                        content: 'Components are the building blocks of any React application. They allow you to break down your UI into reusable pieces, each managing its own state and logic. React supports two types of components: class components and functional components, with functional components being the modern approach due to their simplicity and hooks support.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React from 'react';
                        
                                // Functional Component
                                const Header = () => {
                                    return <h1>My React App</h1>;
                                };
                        
                                // Class Component
                                class Footer extends React.Component {
                                    render() {
                                        return <footer>© 2024 My React App</footer>;
                                    }
                                }
                        
                                const App = () => {
                                    return (
                                        <div>
                                            <Header />
                                            <p>Welcome to my React application!</p>
                                            <Footer />
                                        </div>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 14,
                        title: 'React Class Components',
                        content: 'Class components are one of the two ways to create components in React. They allow you to manage local state and lifecycle methods. Class components extend React.Component and require a render() method to return the JSX to be displayed.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React from 'react';
                        
                                class Counter extends React.Component {
                                    constructor(props) {
                                        super(props);
                                        this.state = { count: 0 };
                                    }
                        
                                    increment = () => {
                                        this.setState({ count: this.state.count + 1 });
                                    };
                        
                                    render() {
                                        return (
                                            <div>
                                                <h1>Count: {this.state.count}</h1>
                                                <button onClick={this.increment}>Increment</button>
                                            </div>
                                        );
                                    }
                                }
                        
                                const App = () => {
                                    return <Counter />;
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 15,
                        title: 'React Props',
                        content: 'Props (short for properties) are a way to pass data from parent components to child components in React. They allow you to customize components and make them reusable. Props are read-only and cannot be modified by the child component.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React from 'react';
                        
                                const Greeting = ({ name }) => {
                                    return <h1>Hello, {name}!</h1>;
                                };
                        
                                const App = () => {
                                    return (
                                        <div>
                                            <Greeting name="Alice" />
                                            <Greeting name="Bob" />
                                        </div>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 16,
                        title: 'React Events',
                        content: 'Events in React are similar to HTML events, but they are named using camelCase syntax. React allows you to handle events directly in your JSX, making it easy to manage user interactions. You can pass event handlers as props to handle specific actions like clicks, changes, and more.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React from 'react';
                        
                                const App = () => {
                                    const handleClick = () => {
                                        alert('Button Clicked!');
                                    };
                        
                                    return (
                                        <div>
                                            <h1>React Events Example</h1>
                                            <button onClick={handleClick}>Click Me</button>
                                        </div>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 17,
                        title: 'React Conditional Rendering',
                        content: 'Conditional rendering in React allows you to render different UI elements based on certain conditions. You can use JavaScript operators like if, &&, and the ternary operator to achieve this. This feature is useful for showing or hiding components based on state or props.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React, { useState } from 'react';
                        
                                const App = () => {
                                    const [isLoggedIn, setIsLoggedIn] = useState(false);
                        
                                    const toggleLogin = () => {
                                        setIsLoggedIn(prev => !prev);
                                    };
                        
                                    return (
                                        <div>
                                            <h1>{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</h1>
                                            <button onClick={toggleLogin}>
                                                {isLoggedIn ? 'Log Out' : 'Log In'}
                                            </button>
                                        </div>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 18,
                        title: 'React Lists',
                        content: 'In React, you can render lists of data using the .map() method. This allows you to create a list of components dynamically based on an array of data. Each element in the list should have a unique key prop to help React identify which items have changed, been added, or removed.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React from 'react';
                        
                                const App = () => {
                                    const items = ['Apple', 'Banana', 'Cherry', 'Date'];
                        
                                    return (
                                        <div>
                                            <h1>Fruit List</h1>
                                            <ul>
                                                {items.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 19,
                        title: 'React Forms',
                        content: 'Forms in React are controlled components, meaning that the form data is handled by the component’s state. This allows you to manage the input values and validate user input easily. React provides an intuitive way to handle form submissions and changes through event handlers.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React, { useState } from 'react';
                        
                                const App = () => {
                                    const [name, setName] = useState('');
                        
                                    const handleSubmit = (event) => {
                                        event.preventDefault();
                                        alert('A name was submitted: ' + name);
                                    };
                        
                                    return (
                                        <div>
                                            <h1>React Form Example</h1>
                                            <form onSubmit={handleSubmit}>
                                                <label>
                                                    Name:
                                                    <input
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </label>
                                                <button type="submit">Submit</button>
                                            </form>
                                        </div>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 20,
                        title: 'React Router',
                        content: 'React Router is a library for managing navigation in React applications. It allows you to create single-page applications with dynamic routing. By using components like BrowserRouter, Route, and Link, you can define multiple routes and navigate between them without reloading the page.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React from 'react';
                                import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
                        
                                const Home = () => <h2>Home Page</h2>;
                                const About = () => <h2>About Page</h2>;
                        
                                const App = () => {
                                    return (
                                        <Router>
                                            <div>
                                                <nav>
                                                    <ul>
                                                        <li>
                                                            <Link to="/">Home</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/about">About</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                        
                                                <Switch>
                                                    <Route path="/" exact component={Home} />
                                                    <Route path="/about" component={About} />
                                                </Switch>
                                            </div>
                                        </Router>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 21,
                        title: 'React Memo',
                        content: 'React.memo is a higher-order component that optimizes functional components by memoizing their output. It prevents unnecessary re-renders by only re-rendering the component when its props change. This can lead to performance improvements in your React applications, especially with components that receive complex objects as props.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React, { useState } from 'react';
                        
                                const ExpensiveComponent = React.memo(({ value }) => {
                                    console.log('Rendering Expensive Component');
                                    return <div>Value: {value}</div>;
                                });
                        
                                const App = () => {
                                    const [count, setCount] = useState(0);
                                    const [inputValue, setInputValue] = useState('');
                        
                                    return (
                                        <div>
                                            <h1>React.memo Example</h1>
                                            <ExpensiveComponent value={count} />
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                            />
                                            <button onClick={() => setCount(count + 1)}>Increment</button>
                                        </div>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 22,
                        title: 'What is a Hook?',
                        content: 'Hooks are a new addition in React 16.8 that allow you to use state and other React features in functional components. They enable you to manage state, side effects, context, and more, without converting your components to class components. The most commonly used hooks are useState, useEffect, and useContext.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React, { useState, useEffect } from 'react';
                        
                                const Counter = () => {
                                    const [count, setCount] = useState(0);
                        
                                    useEffect(() => {
                                        document.title = \Count: \${count}\;
                                    }, [count]);
                        
                                    return (
                                        <div>
                                            <h1>{count}</h1>
                                            <button onClick={() => setCount(count + 1)}>Increment</button>
                                        </div>
                                    );
                                };
                        
                                const App = () => {
                                    return <Counter />;
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 23,
                        title: 'React useState Hook',
                        content: 'The useState hook is a built-in React hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state. This makes it easy to manage and track changes in state without needing class components.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React, { useState } from 'react';
                        
                                const Counter = () => {
                                    const [count, setCount] = useState(0);
                        
                                    return (
                                        <div>
                                            <h1>Count: {count}</h1>
                                            <button onClick={() => setCount(count + 1)}>Increment</button>
                                            <button onClick={() => setCount(count - 1)}>Decrement</button>
                                        </div>
                                    );
                                };
                        
                                const App = () => {
                                    return <Counter />;
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 24,
                        title: 'React useEffect Hook',
                        content: 'The useEffect hook is a built-in React hook that allows you to perform side effects in functional components. It runs after the component renders and can be used for tasks like data fetching, subscriptions, or manually changing the DOM. You can control when useEffect runs by providing a dependency array.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React, { useState, useEffect } from 'react';
                        
                                const Timer = () => {
                                    const [seconds, setSeconds] = useState(0);
                        
                                    useEffect(() => {
                                        const interval = setInterval(() => {
                                            setSeconds(prevSeconds => prevSeconds + 1);
                                        }, 1000);
                        
                                        // Cleanup function to clear the interval
                                        return () => clearInterval(interval);
                                    }, []);
                        
                                    return (
                                        <div>
                                            <h1>Seconds Elapsed: {seconds}</h1>
                                        </div>
                                    );
                                };
                        
                                const App = () => {
                                    return <Timer />;
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 25,
                        title: 'React useContext Hook',
                        content: 'The useContext hook is a built-in React hook that allows you to access the value of a React context directly in your functional components. It simplifies state management and allows you to avoid prop drilling by providing a way to share values across the component tree without passing props manually at every level.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React, { useState, useContext, createContext } from 'react';
                        
                                const ThemeContext = createContext();
                        
                                const ThemeProvider = ({ children }) => {
                                    const [theme, setTheme] = useState('light');
                        
                                    const toggleTheme = () => {
                                        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
                                    };
                        
                                    return (
                                        <ThemeContext.Provider value={{ theme, toggleTheme }}>
                                            {children}
                                        </ThemeContext.Provider>
                                    );
                                };
                        
                                const ThemedComponent = () => {
                                    const { theme, toggleTheme } = useContext(ThemeContext);
                        
                                    return (
                                        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
                                            <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
                                            <button onClick={toggleTheme}>Toggle Theme</button>
                                        </div>
                                    );
                                };
                        
                                const App = () => {
                                    return (
                                        <ThemeProvider>
                                            <ThemedComponent />
                                        </ThemeProvider>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 26,
                        title: 'React useRef Hook',
                        content: 'The useRef hook is a built-in React hook that allows you to create mutable object references that persist for the full lifetime of a component. It is commonly used to access DOM elements directly or to hold mutable values that do not trigger re-renders when changed.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React, { useRef } from 'react';
                        
                                const FocusInput = () => {
                                    const inputRef = useRef(null);
                        
                                    const handleFocus = () => {
                                        inputRef.current.focus();
                                    };
                        
                                    return (
                                        <div>
                                            <h1>Focus Input Example</h1>
                                            <input ref={inputRef} type="text" placeholder="Click the button to focus" />
                                            <button onClick={handleFocus}>Focus Input</button>
                                        </div>
                                    );
                                };
                        
                                const App = () => {
                                    return <FocusInput />;
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 27,
                        title: 'React useRef Hook',
                        content: 'The useRef hook is a built-in React hook that allows you to create mutable object references that persist for the full lifetime of a component. It is commonly used to access DOM elements directly or to hold mutable values that do not trigger re-renders when changed.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React, { useRef } from 'react';
                        
                                const FocusInput = () => {
                                    const inputRef = useRef(null);
                        
                                    const handleFocus = () => {
                                        inputRef.current.focus();
                                    };
                        
                                    return (
                                        <div>
                                            <h1>Focus Input Example</h1>
                                            <input ref={inputRef} type="text" placeholder="Click the button to focus" />
                                            <button onClick={handleFocus}>Focus Input</button>
                                        </div>
                                    );
                                };
                        
                                const App = () => {
                                    return <FocusInput />;
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 28,
                        title: 'React useCallback Hook',
                        content: 'The useCallback hook is a built-in React hook that returns a memoized version of a callback function. It is useful for optimizing performance by preventing unnecessary re-creation of functions on every render, especially when passing callbacks to optimized child components that rely on reference equality to prevent re-renders.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React, { useState, useCallback } from 'react';
                        
                                const Counter = React.memo(({ count, increment }) => {
                                    console.log('Counter rendered');
                                    return (
                                        <div>
                                            <h1>{count}</h1>
                                            <button onClick={increment}>Increment</button>
                                        </div>
                                    );
                                });
                        
                                const App = () => {
                                    const [count, setCount] = useState(0);
                                    const [otherState, setOtherState] = useState('');
                        
                                    const increment = useCallback(() => {
                                        setCount(c => c + 1);
                                    }, []);
                        
                                    return (
                                        <div>
                                            <Counter count={count} increment={increment} />
                                            <input
                                                type="text"
                                                value={otherState}
                                                onChange={(e) => setOtherState(e.target.value)}
                                            />
                                        </div>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 29,
                        title: 'React useMemo Hook',
                        content: 'The useMemo hook is a built-in React hook that allows you to memoize the result of a computation. This can help improve performance by preventing expensive calculations on every render unless the dependencies change. It is particularly useful for optimizing components that involve costly calculations or rendering large lists.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React, { useState, useMemo } from 'react';
                        
                                const ExpensiveComputation = ({ number }) => {
                                    const computeFactorial = (n) => {
                                        return n <= 0 ? 1 : n * computeFactorial(n - 1);
                                    };
                        
                                    const factorial = useMemo(() => computeFactorial(number), [number]);
                        
                                    return <h2>Factorial of {number} is {factorial}</h2>;
                                };
                        
                                const App = () => {
                                    const [number, setNumber] = useState(0);
                                    const [otherState, setOtherState] = useState('');
                        
                                    return (
                                        <div>
                                            <input
                                                type="number"
                                                value={number}
                                                onChange={(e) => setNumber(Number(e.target.value))}
                                            />
                                            <ExpensiveComputation number={number} />
                                            <input
                                                type="text"
                                                value={otherState}
                                                onChange={(e) => setOtherState(e.target.value)}
                                            />
                                        </div>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 30,
                        title: 'React Custom Hooks',
                        content: 'Custom hooks are a way to extract and reuse stateful logic in React applications. They allow you to create reusable logic that can be shared across multiple components while maintaining the benefits of hooks. A custom hook is simply a JavaScript function whose name starts with "use" and can call other hooks.',
                        courseId: '4',
                        ex: 'Example:',
                        function: '',
                        code: `
                                import React, { useState, useEffect } from 'react';
                        
                                const useFetch = (url) => {
                                    const [data, setData] = useState(null);
                                    const [loading, setLoading] = useState(true);
                                    const [error, setError] = useState(null);
                        
                                    useEffect(() => {
                                        const fetchData = async () => {
                                            try {
                                                const response = await fetch(url);
                                                if (!response.ok) {
                                                    throw new Error('Network response was not ok');
                                                }
                                                const result = await response.json();
                                                setData(result);
                                            } catch (error) {
                                                setError(error);
                                            } finally {
                                                setLoading(false);
                                            }
                                        };
                        
                                        fetchData();
                                    }, [url]);
                        
                                    return { data, loading, error };
                                };
                        
                                const App = () => {
                                    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
                        
                                    if (loading) return <h2>Loading...</h2>;
                                    if (error) return <h2>Error: {error.message}</h2>;
                        
                                    return (
                                        <div>
                                            <h1>Posts</h1>
                                            <ul>
                                                {data.map(post => (
                                                    <li key={post.id}>{post.title}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                };
                        
                                export default App;
                            `
                    },
                    {
                        id: 31,
                        title: 'Control and Uncontrolled Components',
                        content: 'Controlled components are preferred when you need to control and validate user input, and when you need to keep the form input values synchronized with the state of your component. Uncontrolled components can be used when you want to quickly integrate forms with minimal state management, and when you do not need to keep track of every change in the input fields.',
                        courseId: '4',
                        ex: 'Example:',
                        function: 'Controlled Component Example',
                        code: `
                        import React, { useState } from 'react';
                        
                        const ControlledComponent = () => {
                            const [inputValue, setInputValue] = useState('');
                        
                            const handleChange = (event) => {
                                setInputValue(event.target.value);
                            };
                        
                            const handleSubmit = (event) => {
                                event.preventDefault();
                                alert(\Submitted value: \${inputValue}\);
                            };
                        
                            return (
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={handleChange}
                                    />
                                    <button type="submit">Submit</button>
                                </form>
                            );
                        };
                        
                        export default ControlledComponent;
                        `,
                        ex2: 'Uncontrolled Component Example',
                        code2: `
                        import React, { useRef } from 'react';
                        
                        const UncontrolledComponent = () => {
                            const inputRef = useRef(null);
                        
                            const handleSubmit = (event) => {
                                event.preventDefault();
                                alert(\Submitted value: \${inputRef.current.value}\);
                            };
                        
                            return (
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        ref={inputRef}
                                    />
                                    <button type="submit">Submit</button>
                                </form>
                            );
                        };
                        
                        export default UncontrolledComponent;
                        `
                    },
                    {
                        id: 32,
                        title: 'React Portal',
                        content: 'React Portals provide a way to render children into a DOM node that exists outside the hierarchy of the parent component. This is useful for modals, tooltips, and other overlay components.',
                        courseId: '4',
                        ex: 'Example:',
                        function: 'Portal Example',
                        code: `
                        import React from 'react';
                        import ReactDOM from 'react-dom';
                        
                        const Modal = ({ children, onClose }) => {
                            return ReactDOM.createPortal(
                                <div style={modalStyle}>
                                    <div>{children}</div>
                                    <button onClick={onClose}>Close</button>
                                </div>,
                                document.getElementById('portal-root')
                            );
                        };
                        
                        const modalStyle = {
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            padding: '20px',
                            backgroundColor: 'white',
                            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        };
                        
                        const PortalExample = () => {
                            const [isOpen, setIsOpen] = React.useState(false);
                        
                            const openModal = () => setIsOpen(true);
                            const closeModal = () => setIsOpen(false);
                        
                            return (
                                <div>
                                    <button onClick={openModal}>Open Modal</button>
                                    {isOpen && <Modal onClose={closeModal}>This is a portal modal!</Modal>}
                                </div>
                            );
                        };
                        
                        export default PortalExample;
                        `,
                        note: 'Make sure to have a <div id="portal-root"></div> in your HTML file to render the portal.'
                    },
                    {
                        id: 33,
                        title: 'React Performance',
                        content: 'React Performance refers to the efficiency of a React application in rendering components and handling updates. Optimizing performance is crucial for providing a smooth user experience, especially in larger applications.',
                        courseId: '4',
                        ex: 'Example Techniques to Improve Performance:',
                        function: 'Performance Optimization Techniques',
                        code: `
                        1. Use React.memo to prevent unnecessary re-renders of functional components.
                        2. Implement shouldComponentUpdate in class components to control rendering behavior.
                        3. Use useMemo and useCallback hooks to memoize values and functions, respectively.
                        4. Code-splitting with React.lazy and Suspense to load components only when needed.
                        5. Avoid inline functions and objects in render methods to reduce unnecessary re-renders.
                        6. Optimize context usage to prevent prop drilling while minimizing re-renders.
                        `,
                        note: 'Always profile your application using the React DevTools to identify performance bottlenecks.'
                    },
                    {
                        id: 34,
                        title: 'React Context API',
                        courseId: '4',
                        content: 'React Context API is a way to manage global state in a React application without having to pass props down manually at every level. It provides a way to share values between components without explicitly passing props through every level of the tree.',
                        ex: 'Example:',
                        function: '',
                        code: `
                        import React, { createContext, useContext, useState } from 'react';
                        
                        const MyContext = createContext();
                        
                        const MyProvider = ({ children }) => {
                            const [value, setValue] = useState('Hello, World!');
                        
                            return (
                                <MyContext.Provider value={{ value, setValue }}>
                                    {children}
                                </MyContext.Provider>
                            );
                        };
                        
                        const ComponentA = () => {
                            const { value } = useContext(MyContext);
                            return <div>{value}</div>;
                        };
                        
                        const App = () => {
                            return (
                                <MyProvider>
                                    <ComponentA />
                                </MyProvider>
                            );
                        };
                        
                        export default App;
                        `,
                    },
                    {
                        id: 35,
                        title: 'React Error Boundaries',
                        courseId: '4',
                        content: 'Error boundaries are a way to catch JavaScript errors in a component tree and display a fallback UI instead of crashing the whole application. They work only on class components.',
                        ex: 'Example:',
                        function: '',
                        code: `
                        import React from 'react';
                        
                        class ErrorBoundary extends React.Component {
                            constructor(props) {
                                super(props);
                                this.state = { hasError: false };
                            }
                        
                            static getDerivedStateFromError(error) {
                                return { hasError: true };
                            }
                        
                            componentDidCatch(error, info) {
                                console.error("Error caught:", error, info);
                            }
                        
                            render() {
                                if (this.state.hasError) {
                                    return <h1>Something went wrong.</h1>;
                                }
                        
                                return this.props.children; 
                            }
                        }
                        
                        const BuggyComponent = () => {
                            throw new Error("I crashed!");
                        };
                        
                        const App = () => (
                            <ErrorBoundary>
                                <BuggyComponent />
                            </ErrorBoundary>
                        );
                        
                        export default App;
                        `,
                    },
                    {
                        id: 36,
                        title: 'React Fragments',
                        courseId: '4',
                        content: 'Fragments allow you to group a list of children without adding extra nodes to the DOM. This helps to avoid unnecessary wrapper elements.',
                        ex: 'Example:',
                        function: '',
                        code: `
                        import React from 'react';
                        
                        const FragmentExample = () => {
                            return (
                                <React.Fragment>
                                    <h1>Title</h1>
                                    <p>Content goes here.</p>
                                </React.Fragment>
                            );
                        };
                        
                        export default FragmentExample;
                        `,
                    },
                    {
                        id: 37,
                        title: 'React Lazy Loading',
                        courseId: '4',
                        content: 'Lazy loading allows you to load components only when they are needed, which can improve performance by reducing the initial load time of your application.',
                        ex: 'Example:',
                        function: '',
                        code: `
                        import React, { Suspense, lazy } from 'react';
                        
                        const LazyComponent = lazy(() => import('./LazyComponent')); `
                    }
                ]
            });


        },

        routes() {
            this.namespace = "api"
            this.get('/courseLists', (schema) => {
                return schema.courseLists.all();
            })

            this.get("/topics", (schema) => {
                return schema.topics.all();
            })

            this.get("/topics/search", (schema, request) => {

                let searchTerm = request.queryParams.term.toLowerCase();
                const topicsModels = schema.topics.all().models;
                const topicAttrs = topicsModels.flatMap((item) => {
                    const topicKey = Object.keys(item.attrs)[0];
                    const topicData = item.attrs[topicKey];
                    return topicData.filter(itemFilter =>
                        itemFilter.title.toLowerCase().includes(searchTerm)
                    );
                })

                return topicAttrs;
            })

            this.get('/roadmaps', (schema) => {
                return schema.roadmaps.all()
            })
        }
    })
    return server;
}




