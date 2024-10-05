import { createServer, Model } from "miragejs";

export default function server({ environment = 'development' } = {}) {
    let server = createServer({
        environment,
        models: {
            courseList: Model,
            topic:Model
        },
        seeds(server) {
            server.create('courseList', { 
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

             server.create('topic', {
                    html: [
                        { 
                            id: 1, 
                            title: 'Introduction to HTML', 
                            content: 'HTML stands for Hypertext Markup Language. It is the standard markup language for creating web pages. HTML elements are the building blocks of HTML pages, defining the structure and layout of a web document.' 
                        },
                        { 
                            id: 2, 
                            title: 'What is HTML?', 
                            content: 'HTML is a markup language used to create the structure of web pages. It allows web developers to format text, images, links, and other content on the internet using tags.' 
                        },
                        { 
                            id: 3, 
                            title: 'HTML Tags', 
                            content: 'Tags are the fundamental building blocks of HTML, consisting of an opening tag and a closing tag, such as <p> for a paragraph. Some tags can be self-closing, like <img />.' 
                        },
                        { 
                            id: 4, 
                            title: 'HTML Attributes', 
                            content: 'Attributes provide additional information about HTML elements and are specified in the opening tag in name/value pairs, like <a href="https://www.example.com">.' 
                        },
                        { 
                            id: 5, 
                            title: 'HTML Elements', 
                            content: 'An HTML element is a complete structure that consists of an opening tag, content, and a closing tag, e.g., <h1>This is a Heading</h1>.' 
                        },
                        { 
                            id: 6, 
                            title: 'HTML Forms', 
                            content: 'HTML forms are used to collect user input, including text fields, checkboxes, and submit buttons, created with the <form> tag.' 
                        },
                        { 
                            id: 7, 
                            title: 'HTML Semantic Elements', 
                            content: 'Semantic HTML elements clearly describe their meaning, such as <header>, <footer>, <article>, and <section>, improving accessibility and SEO.' 
                        },
                        { 
                            id: 8, 
                            title: 'HTML Images', 
                            content: 'Images are embedded using the <img> tag, with the src attribute for the image source and the alt attribute for alternative text.' 
                        },
                        { 
                            id: 9, 
                            title: 'HTML Links', 
                            content: 'Links are created using the <a> tag, where the href attribute specifies the URL, connecting to external sites, internal pages, or email addresses.' 
                        },
                        { 
                            id: 10, 
                            title: 'HTML Meta Tag', 
                            content: 'HTML meta tags provide metadata about the HTML document, which can include information such as the character set, page description, keywords, author, and viewport settings. They are placed within the <head> section of an HTML document.' 
                        },
                        { 
                            id: 11, 
                            title: 'HTML List', 
                            content: 'In HTML, lists are used to group related items together. There are three main types of lists: ordered lists (<ol>), unordered lists (<ul>), and description lists. Here’s a quick overview of each type along with examples..' 
                        },
                        { 
                            id: 12, 
                            title: 'HTML input Tag', 
                            content: 'The HTML <input> tag is used to create interactive fields in forms where users can enter data. It supports various types of input, each suited for different kinds of data. Here’s a breakdown of the most common types of the <input> tag along with examples.' 
                        },
                        { 
                            id: 13, 
                            title: 'Global attribute', 
                            content: 'HTML global attributes are attributes that can be applied to any HTML element. They provide additional information or functionality and help enhance the behavior of elements. Here are some of the most commonly used global attributes' 
                        },
                        { 
                            id: 14, 
                            title: 'Template Element', 
                            content: 'The <template> element holds client-side content that will not be rendered when the page loads but can be instantiated later using JavaScript.' 
                        }
                    ]
                });
                server.create('topic', {
                    css: [
                        { 
                            id: 1, 
                            title: 'Introduction to CSS', 
                            content: 'CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML. It controls the layout and appearance of web pages, making them visually appealing.' 
                        },
                        { 
                            id: 2, 
                            title: 'CSS Syntax', 
                            content: 'CSS syntax consists of selectors and declaration blocks. A selector points to the HTML element you want to style, and the declaration block contains property-value pairs, such as `color: blue;`.' 
                        },
                        { 
                            id: 3, 
                            title: 'CSS Selectors', 
                            content: 'Selectors are patterns used to select the elements you want to style. Common types include class selectors (e.g., `.className`), ID selectors (e.g., `#idName`), and element selectors (e.g., `div`).' 
                        },
                        { 
                            id: 4, 
                            title: 'CSS Box Model', 
                            content: 'The CSS box model describes how elements are structured and how they occupy space. It includes margins, borders, padding, and the content area, affecting layout and spacing.' 
                        },
                        { 
                            id: 5, 
                            title: 'CSS Flexbox', 
                            content: 'Flexbox is a layout model that provides an efficient way to arrange items in a one-dimensional space along a row or column. It allows for responsive design by adjusting item sizes and spacing.' 
                        },
                        { 
                            id: 6, 
                            title: 'CSS Grid', 
                            content: 'CSS Grid is a two-dimensional layout system that allows developers to create complex layouts easily. It divides the page into rows and columns, providing control over placement and alignment of items.' 
                        },
                        { 
                            id: 7, 
                            title: 'CSS Responsive Design', 
                            content: 'Responsive design ensures that web pages look good on all devices by using fluid grids, flexible images, and media queries to adjust styles based on screen size and orientation.' 
                        },
                        { 
                            id: 8, 
                            title: 'CSS Transitions and Animations', 
                            content: 'CSS transitions allow you to change property values smoothly over a specified duration, while animations provide more complex movements and effects, making web pages interactive and dynamic.' 
                        },
                        { 
                            id: 9, 
                            title: 'CSS Variables', 
                            content: 'CSS variables, also known as custom properties, allow you to store values that can be reused throughout your stylesheets. They provide better maintainability and flexibility in design.' 
                        },
                        { 
                            id: 10, 
                            title: 'CSS Responsive', 
                            content: 'Creating responsive designs with CSS ensures that your web pages look great on a variety of devices and screen sizes. Here are some key concepts and techniques to make your CSS responsive:.' 
                        },
                        { 
                            id: 11, 
                            title: 'CSS Units', 
                            content: 'CSS offers a variety of units to define sizes, lengths, and dimensions in web design. Understanding these units is essential for effective layout and responsive design.' 
                        }
                    ]
                });
                server.create('topic', {
                    javascript: [
                        { 
                            id: 1, 
                            title: 'Introduction to JavaScript', 
                            content: 'JavaScript is a versatile programming language primarily used for web development. It enables interactive web pages and is an essential part of web applications, alongside HTML and CSS.' 
                        },
                        { 
                            id: 2, 
                            title: 'JavaScript Variables', 
                            content: 'Variables in JavaScript are containers for storing data values. You can declare variables using var, let, or const, each with different scopes and mutability.' 
                        },
                        { 
                            id: 3, 
                            title: 'JavaScript Data Types', 
                            content: 'JavaScript has several data types, including primitive types like strings, numbers, booleans, null, and undefined, as well as complex types like objects and arrays.' 
                        },
                        { 
                            id: 4, 
                            title: 'JavaScript Functions', 
                            content: 'Functions are reusable blocks of code in JavaScript. They can be declared using function declarations, expressions, or arrow functions, and can take parameters and return values.' 
                        },
                        { 
                            id: 5, 
                            title: 'JavaScript Conditionals', 
                            content: 'Conditional statements in JavaScript, such as if, else if, and switch, allow you to execute different blocks of code based on specific conditions.' 
                        },
                        { 
                            id: 6, 
                            title: 'JavaScript Loops', 
                            content: 'Loops are used to execute a block of code repeatedly. Common loop structures in JavaScript include for, while, and do...while loops.' 
                        },
                        { 
                            id: 7, 
                            title: 'JavaScript Events', 
                            content: 'Events are actions that occur in the browser, such as clicks or key presses. JavaScript allows you to respond to these events using event listeners.' 
                        },
                        { 
                            id: 8, 
                            title: 'JavaScript DOM Manipulation', 
                            content: 'The Document Object Model (DOM) represents the structure of a web page. JavaScript can manipulate the DOM to change content, structure, and styles dynamically.' 
                        },
                        { 
                            id: 9, 
                            title: 'JavaScript ES6 Features', 
                            content: 'ES6 (ECMAScript 2015) introduced several new features to JavaScript, including let and const for variable declarations, arrow functions, classes, and template literals.' 
                        },
                        { 
                            id: 10, 
                            title: 'JavaScript Promises', 
                            content: 'Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never.' 
                        },
                        { 
                            id: 11, 
                            title: 'JavaScript Async/Await', 
                            content: 'Async/Await is a syntactic sugar built on top of Promises that allows for writing asynchronous code in a more synchronous style.' 
                        },
                        { 
                            id: 12, 
                            title: 'JavaScript Modules', 
                            content: 'Modules in JavaScript help in organizing code by allowing you to export and import functions, objects, or primitive values between different files.' 
                        },
                        { 
                            id: 13, 
                            title: 'JavaScript Error Handling', 
                            content: 'Error handling in JavaScript can be done using try/catch blocks to manage exceptions and prevent program crashes.' 
                        },
                        { 
                            id: 14, 
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
                            title: 'JavaScript Scope', 
                            content: 'Scope defines the accessibility of variables in JavaScript. It can be global or local, and understanding it is crucial for avoiding errors.' 
                        },
                        { 
                            id: 17, 
                            title: 'JavaScript Callbacks', 
                            content: 'Callbacks are functions that are passed as arguments to other functions, allowing for asynchronous execution and control flow management.' 
                        },
                        { 
                            id: 18, 
                            title: 'JavaScript Regular Expressions', 
                            content: 'Regular expressions are patterns used to match character combinations in strings, providing powerful string manipulation capabilities.' 
                        },
                        { 
                            id: 19, 
                            title: 'JavaScript Object-Oriented Programming', 
                            content: 'JavaScript supports object-oriented programming through prototypes, allowing for inheritance and encapsulation of data.' 
                        },
                        { 
                            id: 20, 
                            title: 'JavaScript Memory Management', 
                            content: 'JavaScript automatically manages memory through garbage collection, freeing up memory that is no longer needed, but understanding it can help optimize performance.' 
                        }
                    ]                
                });
                   
                server.create('topic', {
                    react: [
                        { 
                            id: 1, 
                            title: 'Introduction to React', 
                            content: 'React is a popular JavaScript library for building user interfaces, developed by Facebook. It allows developers to create large web applications that can change data without reloading the page.' 
                        },
                        { 
                            id: 2, 
                            title: 'React Components', 
                            content: 'Components are the building blocks of a React application. They encapsulate the rendering logic and can be reused throughout the app. Components can be functional or class-based.' 
                        },
                        { 
                            id: 3, 
                            title: 'JSX in React', 
                            content: 'JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code within JavaScript. It makes it easier to create React elements and components.' 
                        },
                        { 
                            id: 4, 
                            title: 'State', 
                            content: 'State is a built-in object that allows components to manage dynamic data. Props (short for properties) are used to pass data from parent to child components, making them reusable.' 
                        },
                        { 
                            id: 5, 
                            title: 'React Hooks', 
                            content: 'Hooks are functions that let you use state and other React features in functional components. Common hooks include useState and useEffect, which simplify state management and side effects.' 
                        },
                        { 
                            id: 6, 
                            title: 'Handling Events in React', 
                            content: 'React allows you to handle events in a declarative way. You can add event handlers directly to elements using camelCase syntax, like onClick for click events.' 
                        },
                        { 
                            id: 7, 
                            title: 'React Router', 
                            content: 'React Router is a library for routing in React applications. It enables navigation between different components and allows for dynamic routing based on the URL.' 
                        },
                        { 
                            id: 8, 
                            title: 'React Lifecycle Methods', 
                            content: 'Lifecycle methods are special methods in class components that allow you to run code at specific points in a components life, such as when it mounts, updates, or unmounts.' 
                        },
                        { 
                            id: 9, 
                            title: 'Managing Forms in React', 
                            content: 'React provides a way to manage forms by controlling their state through controlled components. This allows you to manage form data and handle user input effectively.' 
                        },
                        { 
                            id: 10, 
                            title: 'Props', 
                            content: 'Props (short for properties) in React are a fundamental concept used to pass data and event handlers from one component to another. They enable components to be dynamic and reusable. Here’s a breakdown of how props work in React:' 
                        },
                        { 
                            id: 11, 
                            title: 'Context API', 
                            content: 'The Context API in React provides a way to share values (like state or functions) between components without having to pass props down manually at every level. This can be particularly useful for global state management, theming, or any scenario where you want multiple components to access the same data)' 
                        },
                        { 
                            id: 12, 
                            title: 'Server-Side Rendering (SSR)', 
                            content: 'Server-Side Rendering (SSR) is a technique used to render web pages on the server rather than in the browser. In a React application, SSR can improve performance, SEO, and the initial loading experience.' 
                        }
                    ]
                });
                

        },

        routes() {
            this.namespace = "api"
            this.get("/codeccharya", (schema, request) => {
                console.log(schema)
                return schema.cssFiles.all()
            })
            this.get('/courseLists', (schema) => {
                console.log(schema);
                return schema.courseLists.all()
            })
            // this.get('/topics', (schema) => {
            //     console.log(schema);
            //     return schema.topics.all()
            // })
            this.get("/topics", (schema) => {
                // console.log("topics" , schema)
                return schema.topics.all()
            })
        }
        
    })
    return server;
}