import { createServer, Model } from "miragejs";

export default function server({ environment = 'development' } = {}) {
    let server = createServer({
        environment,
        models: {
            courseList: Model,
            topic: Model
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
                        courseId: '1'
                    },
                    {
                        id: "2",
                        url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/002/original/css.png?1616282675',
                        title: 'Css Cheatsheet',
                        subtitle: 'Codeccharya Css cheatsheet',
                        btn: 'Go to Cheatsheet',
                        courseId: '2'
                    },
                    {
                        id: "3",
                        url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/003/original/javascript.png?1616282692',
                        title: ' Javascript Cheatsheet',
                        subtitle: 'Codeccharya Javascript cheatsheet',
                        btn: 'Go to Cheatsheet',
                        courseId: '3'
                    },
                    {
                        id: "4",
                        url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/006/original/react.jpg?1617889774',
                        title: 'React Cheatsheet',
                        subtitle: 'Codeccharya React cheatsheet',
                        btn: 'Go to Cheatsheet',
                        courseId: '4'
                    }
                ]
            }),

                server.create('topic', {
                    topicData: [
                        {
                            id: 11,
                            courseId: 1,
                            title: 'Introduction to HTML',
                            content: 'HTML stands for Hypertext Markup Language. It is the standard markup language for creating web pages. HTML elements are the building blocks of HTML pages, defining the structure and layout of a web document.',
                            courseId: '1',
                            topicId: '1'
                        },
                        {
                            id: 12,
                            courseId: 1,
                            title: 'What is HTML?',
                            content: 'HTML is a markup language used to create the structure of web pages. It allows web developers to format text, images, links, and other content on the internet using tags.',
                            courseId: '1',
                            topicId: '1'
                        },
                        {
                            id: 13,
                            courseId: 1,
                            title: 'HTML Tags',
                            content: 'Tags are the fundamental building blocks of HTML, consisting of an opening tag and a closing tag, such as <p> for a paragraph. Some tags can be self-closing, like <img />.',
                            courseId: '1',
                            topicId: '1'
                        },
                        {
                            id: 14,
                            courseId: 1,
                            title: 'HTML Attributes',
                            content: 'Attributes provide additional information about HTML elements and are specified in the opening tag in name/value pairs, like <a href="https://www.example.com">.',
                            courseId: '1',
                            topicId: '1'
                        },
                        {
                            id: 15,
                            courseId: 1,
                            title: 'HTML Elements',
                            content: 'An HTML element is a complete structure that consists of an opening tag, content, and a closing tag, e.g., <h1>This is a Heading</h1>.',
                            courseId: '1',
                            topicId: '1'
                        }
                    ]
                });
            server.create('topic', {
                topicData: [
                    {
                        id: 21,
                        courseId: 2,
                        title: 'Introduction to CSS',
                        content: 'CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML. It controls the layout and appearance of web pages, making them visually appealing.',
                        courseId: '2',
                        topicId: '2'
                    },
                    {
                        id: 22,
                        courseId: 2,
                        title: 'CSS Syntax',
                        content: 'CSS syntax consists of selectors and declaration blocks. A selector points to the HTML element you want to style, and the declaration block contains property-value pairs, such as `color: blue;`.',
                        courseId: '2',
                        topicId: '2'
                    },
                    {
                        id: 23,
                        courseId: 2,
                        title: 'CSS Selectors',
                        content: 'Selectors are patterns used to select the elements you want to style. Common types include class selectors (e.g., `.className`), ID selectors (e.g., `#idName`), and element selectors (e.g., `div`).',
                        courseId: '2',
                        topicId: '2'
                    },
                    {
                        id: 24,
                        courseId: 2,
                        title: 'CSS Box Model',
                        content: 'The CSS box model describes how elements are structured and how they occupy space. It includes margins, borders, padding, and the content area, affecting layout and spacing.',
                        courseId: '2',
                        topicId: '2'
                    },
                    {
                        id: 25,
                        courseId: 2,
                        title: 'CSS Flexbox',
                        content: 'Flexbox is a layout model that provides an efficient way to arrange items in a one-dimensional space along a row or column. It allows for responsive design by adjusting item sizes and spacing.',
                        courseId: '2',
                        topicId: '2'
                    }
                ]
            });
            server.create('topic', {
                topicData: [
                    {
                        id: 31,
                        courseId: 3,
                        title: 'Introduction to JavaScript',
                        content: 'JavaScript is a versatile programming language primarily used for web development. It enables interactive web pages and is an essential part of web applications, alongside HTML and CSS.',
                        courseId: '3',
                        topicId: '3'
                    },
                    {
                        id: 32,
                        courseId: 3,
                        title: 'JavaScript Variables',
                        content: 'Variables in JavaScript are containers for storing data values. You can declare variables using var, let, or const, each with different scopes and mutability.',
                        courseId: '3',
                        topicId: '3'
                    },
                    {
                        id: 33,
                        courseId: 3,
                        title: 'JavaScript Data Types',
                        content: 'JavaScript has several data types, including primitive types like strings, numbers, booleans, null, and undefined, as well as complex types like objects and arrays.,',
                        courseId: '3',
                        topicId: '3'
                    },
                    {
                        id: 34,
                        courseId: 3,
                        title: 'JavaScript Functions',
                        content: 'Functions are reusable blocks of code in JavaScript. They can be declared using function declarations, expressions, or arrow functions, and can take parameters and return values.',
                        courseId: '3',
                        topicId: '3'
                    },
                    {
                        id: 35,
                        courseId: 3,
                        title: 'JavaScript Conditionals',
                        content: 'Conditional statements in JavaScript, such as if, else if, and switch, allow you to execute different blocks of code based on specific conditions.',
                        courseId: '3',
                        topicId: '3'
                    }
                ]
            });

            server.create('topic', {
                topicData: [
                    {
                        id: 41,
                        title: 'Introduction to React',
                        content: 'React is a popular JavaScript library for building user interfaces, developed by Facebook. It allows developers to create large web applications that can change data without reloading the page.',
                        courseId: '4',
                        topicId: '4'
                    },
                    {
                        id: 42,
                        title: 'React Components',
                        content: 'Components are the building blocks of a React application. They encapsulate the rendering logic and can be reused throughout the app. Components can be functional or class-based.',
                        courseId: '4',
                        topicId: '4'
                    },
                    {
                        id: 43,
                        title: 'JSX in React',
                        content: 'JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code within JavaScript. It makes it easier to create React elements and components.',
                        courseId: '4',
                        topicId: '4'
                    },
                    {
                        id: 44,
                        title: 'State',
                        content: 'State is a built-in object that allows components to manage dynamic data. Props (short for properties) are used to pass data from parent to child components, making them reusable.',
                        courseId: '4',
                        topicId: '4'
                    },
                    {
                        id: 45,
                        title: 'React Hooks',
                        content: 'Hooks are functions that let you use state and other React features in functional components. Common hooks include useState and useEffect, which simplify state management and side effects.'
                    },
                    {
                        id: 46,
                        title: 'Handling Events in React',
                        content: 'React allows you to handle events in a declarative way. You can add event handlers directly to elements using camelCase syntax, like onClick for click events.'
                    },
                    {
                        id: 47,
                        title: 'React Router',
                        content: 'React Router is a library for routing in React applications. It enables navigation between different components and allows for dynamic routing based on the URL.'
                    },
                    {
                        id: 48,
                        title: 'React Lifecycle Methods',
                        content: 'Lifecycle methods are special methods in class components that allow you to run code at specific points in a components life, such as when it mounts, updates, or unmounts.'
                    },
                    {
                        id: 49,
                        title: 'Managing Forms in React',
                        content: 'React provides a way to manage forms by controlling their state through controlled components. This allows you to manage form data and handle user input effectively.'
                    }
                ]
            })
        },

        routes() {
            this.namespace = "api"
            this.get('/courseLists', (schema) => {
                return schema.courseLists.all()
            })
            this.get("/topics", (schema) => {
                return schema.topics.all()
            })

            this.get("/topics/search", (schema, request) => {

                let searchTerm = request.queryParams.term.toLowerCase();
                const topicsModels = schema.topics.all().models;

                const matchedTopics = [];

                topicsModels.forEach((item) => {
                    const topicData = Object.values(item.attrs)[0];
                    const filteredTopics = topicData.filter(topicItem => topicItem.title.toLowerCase().includes(searchTerm));
                    matchedTopics.push(...filteredTopics);
                })
                return matchedTopics;
            });
        }
    })
    return server;
}