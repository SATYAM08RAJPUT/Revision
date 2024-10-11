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
                      btn:'Go to Cheatsheet',
                      courseId:'1',
                      select:'1'
                     },
                     {
                      id:"2",
                      url:'//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/002/original/css.png?1616282675',
                      title:'Css Cheatsheet',
                      subtitle:'Codeccharya Css cheatsheet',
                      btn:'Go to Cheatsheet',
                      courseId:'2',
                      select:'1'
                     },
                     {
                      id:"3",
                      url:'//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/003/original/javascript.png?1616282692',
                      title:' Javascript Cheatsheet',
                      subtitle:'Codeccharya Javascript cheatsheet',
                      btn:'Go to Cheatsheet',
                      courseId:'3',
                      select:'1'
                     },
                     {
                      id:"4",
                      url:'//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/006/original/react.jpg?1617889774',
                      title:'React Cheatsheet',
                      subtitle:'Codeccharya React cheatsheet',
                      btn:'Go to Cheatsheet',
                      courseId:'4',
                      select:'1'
                     }
                  ]
            }),

                server.create('topic', {
                    html: [
                        { 
                            id: 1, 
                            courseId:1,
                            title: 'Introduction to HTML', 
                            content: 'HTML stands for Hypertext Markup Language. It is the standard markup language for creating web pages. HTML elements are the building blocks of HTML pages, defining the structure and layout of a web document.',
                            courseId:'1' ,
                            
                        },
                        { 
                            id:2, 
                            courseId:1,
                            title: 'What is HTML?', 
                            content: 'HTML is a markup language used to create the structure of web pages. It allows web developers to format text, images, links, and other content on the internet using tags.' ,
                            courseId:'1' 
                        },
                        { 
                            id: 3, 
                            courseId:1,
                            title: 'HTML Tags', 
                            content: 'Tags are the fundamental building blocks of HTML, consisting of an opening tag and a closing tag, such as <p> for a paragraph. Some tags can be self-closing, like <img />.' ,
                            courseId:'1' 
                        },
                        { 
                            id: 4, 
                            courseId:1,
                            title: 'HTML Attributes', 
                            content: 'Attributes provide additional information about HTML elements and are specified in the opening tag in name/value pairs, like <a href="https://www.example.com">.',
                            courseId:'1'  
                        },
                        { 
                            id: 5, 
                            courseId:1,
                            title: 'HTML Elements', 
                            content: 'An HTML element is a complete structure that consists of an opening tag, content, and a closing tag, e.g., <h1>This is a Heading</h1>.' ,
                            courseId:'1'
                        },
                        
                        { 
                            id: 6, 
                            title: 'HTML Forms', 
                            content: 'HTML forms are used to collect user input, including text fields, checkboxes, and submit buttons, created with the <form> tag.',
                            courseId:'1' 
                        },
                        { 
                            id: 7, 
                            title: 'HTML Semantic Elements', 
                            content: 'Semantic HTML elements clearly describe their meaning, such as <header>, <footer>, <article>, and <section>, improving accessibility and SEO.' ,
                             courseId:'1'
                        },
                        { 
                            id: 8, 
                            title: 'HTML Images', 
                            content: 'Images are embedded using the <img> tag, with the src attribute for the image source and the alt attribute for alternative text.' ,
                             courseId:'1'
                        },
                        { 
                            id: 9, 
                            title: 'HTML Links', 
                            content: 'Links are created using the <a> tag, where the href attribute specifies the URL, connecting to external sites, internal pages, or email addresses.' ,
                             courseId:'1'
                        },
                        { 
                            id: 10, 
                            title: 'HTML Meta Tag', 
                            content: 'HTML meta tags provide metadata about the HTML document, which can include information such as the character set, page description, keywords, author, and viewport settings. They are placed within the <head> section of an HTML document.' ,
                             courseId:'1'
                        },
                        { 
                            id: 11, 
                            title: 'HTML List', 
                            content: 'In HTML, lists are used to group related items together. There are three main types of lists: ordered lists (<ol>), unordered lists (<ul>), and description lists. Here’s a quick overview of each type along with examples..',
                            courseId:'1' 
                        },
                        { 
                            id: 12, 
                            title: 'HTML input Tag', 
                            content: 'The HTML <input> tag is used to create interactive fields in forms where users can enter data. It supports various types of input, each suited for different kinds of data. Here’s a breakdown of the most common types of the <input> tag along with examples.' ,
                             courseId:'1'
                        },
                        { 
                            id: 13, 
                            title: 'Global attribute', 
                            content: 'HTML global attributes are attributes that can be applied to any HTML element. They provide additional information or functionality and help enhance the behavior of elements. Here are some of the most commonly used global attributes' ,
                             courseId:'1'
                        },
                        { 
                            id: 14, 
                            title: 'Template Element', 
                            content: 'The <template> element holds client-side content that will not be rendered when the page loads but can be instantiated later using JavaScript.' ,
                             courseId:'1'
                        }
                    ]
                });
                server.create('topic', {
                    css: [
                        { 
                            id: 1,
                            courseId:2, 
                            title: 'Introduction to CSS', 
                            content: 'CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML. It controls the layout and appearance of web pages, making them visually appealing.' ,
                            courseId:'2'
                        },
                        { 
                            id: 2,
                            courseId:2,  
                            title: 'CSS Syntax', 
                            content: 'CSS syntax consists of selectors and declaration blocks. A selector points to the HTML element you want to style, and the declaration block contains property-value pairs, such as `color: blue;`.' ,
                            courseId:'2'
                        },
                        { 
                            id: 3, 
                            courseId:2, 
                            title: 'CSS Selectors', 
                            content: 'Selectors are patterns used to select the elements you want to style. Common types include class selectors (e.g., `.className`), ID selectors (e.g., `#idName`), and element selectors (e.g., `div`).',
                            courseId:'2' 
                        },
                        { 
                            id: 4, 
                            courseId:2, 
                            title: 'CSS Box Model', 
                            content: 'The CSS box model describes how elements are structured and how they occupy space. It includes margins, borders, padding, and the content area, affecting layout and spacing.',
                            courseId:'2' 
                        },
                        { 
                            id: 5, 
                            courseId:2, 
                            title: 'CSS Flexbox', 
                            content: 'Flexbox is a layout model that provides an efficient way to arrange items in a one-dimensional space along a row or column. It allows for responsive design by adjusting item sizes and spacing.' ,
                            courseId:'2'
                        },
                        // { 
                        //     id: 6, 
                        //     title: 'CSS Grid', 
                        //     content: 'CSS Grid is a two-dimensional layout system that allows developers to create complex layouts easily. It divides the page into rows and columns, providing control over placement and alignment of items.' 
                        // },
                        // { 
                        //     id: 7, 
                        //     title: 'CSS Responsive Design', 
                        //     content: 'Responsive design ensures that web pages look good on all devices by using fluid grids, flexible images, and media queries to adjust styles based on screen size and orientation.' 
                        // },
                        // { 
                        //     id: 8, 
                        //     title: 'CSS Transitions and Animations', 
                        //     content: 'CSS transitions allow you to change property values smoothly over a specified duration, while animations provide more complex movements and effects, making web pages interactive and dynamic.' 
                        // },
                        // { 
                        //     id: 9, 
                        //     title: 'CSS Variables', 
                        //     content: 'CSS variables, also known as custom properties, allow you to store values that can be reused throughout your stylesheets. They provide better maintainability and flexibility in design.' 
                        // },
                        // { 
                        //     id: 10, 
                        //     title: 'CSS Responsive', 
                        //     content: 'Creating responsive designs with CSS ensures that your web pages look great on a variety of devices and screen sizes. Here are some key concepts and techniques to make your CSS responsive:.' 
                        // },
                        // { 
                        //     id: 11, 
                        //     title: 'CSS Units', 
                        //     content: 'CSS offers a variety of units to define sizes, lengths, and dimensions in web design. Understanding these units is essential for effective layout and responsive design.' 
                        // }
                    ]
                });
                server.create('topic', {
                    javascript: [
                        { 
                            id: 1, 
                            courseId:3, 
                            title: 'Introduction to JavaScript', 
                            content: 'JavaScript is a versatile programming language primarily used for web development. It enables interactive web pages and is an essential part of web applications, alongside HTML and CSS.' ,
                            courseId:'3',
                            code:`
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
                            courseId:3, 
                            title: 'JavaScript Variables', 
                            content: 'JavaScript variables are containers used to store data values. You can think of them as labels that hold information which can be referenced and manipulated throughout your code. There are three ways to declare variables in JavaScript: using var, let, and const..' ,
                            courseId:'3',
                            code:`1. var
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
                            courseId:3, 
                            title: 'JavaScript Data Types', 
                            content: 'JavaScript has several data types, including primitive types like strings, numbers, booleans, null, and undefined, as well as complex types like objects and arrays.' ,
                            courseId:'3',
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
                            courseId:3, 
                            title: 'JavaScript Functions', 
                            content: 'Functions in JavaScript are reusable blocks of code designed to perform a specific task. They help organize code, make it more readable, and enable modular programming. Here’s a breakdown of how functions work in JavaScript, along with examples.' ,
                            courseId:'3',
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
                            courseId:3,  
                            title: 'JavaScript Conditionals', 
                            content: 'JavaScript conditionals allow you to execute different code based on whether a condition is true or false. The most common conditional statements are if, else if, and else. Here’s a breakdown with examples:' ,
                            courseId:'3',
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
                            courseId:3,  
                            title: 'JavaScript Loops', 
                            content: 'Loops are used to execute a block of code repeatedly. Common loop structures in JavaScript include for, while, and do...while loops.',
                            code:  `1. For Loop: The for loop is often used when the number of iterations is known.
                            
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
                            courseId:3,  
                            title: 'JavaScript Events', 
                            content: 'Events are actions that occur in the browser, such as clicks or key presses. JavaScript allows you to respond to these events using event listeners.',
                            code:`
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
                            courseId:3,  
                            title: 'JavaScript DOM Manipulation', 
                            content: 'The Document Object Model (DOM) represents the structure of a web page. JavaScript can manipulate the DOM to change content, structure, and styles dynamically.' 
                        },
                        { 
                            id: 9, 
                            courseId:3,  
                            title: 'JavaScript ES6 Features', 
                            content: 'ES6 (ECMAScript 2015) introduced several new features to JavaScript, including let and const for variable declarations, arrow functions, classes, and template literals.' 
                        },
                        { 
                            id: 10, 
                            courseId:3,  
                            title: 'JavaScript Promises', 
                            content: 'Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never.' 
                        },
                        { 
                            id: 11, 
                            courseId:3,  
                            title: 'JavaScript Async/Await', 
                            content: 'Async/Await is a syntactic sugar built on top of Promises that allows for writing asynchronous code in a more synchronous style.' 
                        },
                        { 
                            id: 12, 
                            courseId:3,  
                            title: 'JavaScript Modules', 
                            content: 'Modules in JavaScript help in organizing code by allowing you to export and import functions, objects, or primitive values between different files.' 
                        },
                        { 
                            id: 13, 
                            courseId:3,  
                            title: 'JavaScript Error Handling', 
                            content: 'Error handling in JavaScript can be done using try/catch blocks to manage exceptions and prevent program crashes.' 
                        },
                        { 
                            id: 14, 
                            courseId:3,  
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
                            courseId:3,  
                            title: 'JavaScript Scope', 
                            content: 'Scope defines the accessibility of variables in JavaScript. It can be global or local, and understanding it is crucial for avoiding errors.' 
                        },
                        { 
                            id: 17, 
                            courseId:3,  
                            title: 'JavaScript Callbacks', 
                            content: 'Callbacks are functions that are passed as arguments to other functions, allowing for asynchronous execution and control flow management.' 
                        },
                        { 
                            id: 18, 
                            courseId:3,  
                            title: 'JavaScript Regular Expressions', 
                            content: 'Regular expressions are patterns used to match character combinations in strings, providing powerful string manipulation capabilities.' 
                        },
                        { 
                            id: 19, 
                            courseId:3,  
                            title: 'JavaScript Object-Oriented Programming', 
                            content: 'JavaScript supports object-oriented programming through prototypes, allowing for inheritance and encapsulation of data.' 
                        },
                        { 
                            id: 20, 
                            courseId:3,  
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
                            content: 'React is a popular JavaScript library for building user interfaces, developed by Facebook. It allows developers to create large web applications that can change data without reloading the page.',
                            courseId:'4'  
                        },
                        { 
                            id: 2, 
                            title: 'React Components', 
                            content: 'Components are the building blocks of a React application. They encapsulate the rendering logic and can be reused throughout the app. Components can be functional or class-based.',
                            courseId:'4' 
                        },
                        { 
                            id: 3, 
                            title: 'JSX in React', 
                            content: 'JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code within JavaScript. It makes it easier to create React elements and components.' ,
                            courseId:'4'
                        },
                        { 
                            id: 4, 
                            title: 'State', 
                            content: 'State is a built-in object that allows components to manage dynamic data. Props (short for properties) are used to pass data from parent to child components, making them reusable.' ,
                            courseId:'4'
                        },
                        // { 
                        //     id: 5, 
                        //     title: 'React Hooks', 
                        //     content: 'Hooks are functions that let you use state and other React features in functional components. Common hooks include useState and useEffect, which simplify state management and side effects.' 
                        // },
                        // { 
                        //     id: 6, 
                        //     title: 'Handling Events in React', 
                        //     content: 'React allows you to handle events in a declarative way. You can add event handlers directly to elements using camelCase syntax, like onClick for click events.' 
                        // },
                        // { 
                        //     id: 7, 
                        //     title: 'React Router', 
                        //     content: 'React Router is a library for routing in React applications. It enables navigation between different components and allows for dynamic routing based on the URL.' 
                        // },
                        // { 
                        //     id: 8, 
                        //     title: 'React Lifecycle Methods', 
                        //     content: 'Lifecycle methods are special methods in class components that allow you to run code at specific points in a components life, such as when it mounts, updates, or unmounts.' 
                        // },
                        // { 
                        //     id: 9, 
                        //     title: 'Managing Forms in React', 
                        //     content: 'React provides a way to manage forms by controlling their state through controlled components. This allows you to manage form data and handle user input effectively.' 
                        // },
                        // { 
                        //     id: 10, 
                        //     title: 'Props', 
                        //     content: 'Props (short for properties) in React are a fundamental concept used to pass data and event handlers from one component to another. They enable components to be dynamic and reusable. Here’s a breakdown of how props work in React:' 
                        // },
                        // { 
                        //     id: 11, 
                        //     title: 'Context API', 
                        //     content: 'The Context API in React provides a way to share values (like state or functions) between components without having to pass props down manually at every level. This can be particularly useful for global state management, theming, or any scenario where you want multiple components to access the same data)' 
                        // },
                        // { 
                        //     id: 12, 
                        //     title: 'Server-Side Rendering (SSR)', 
                        //     content: 'Server-Side Rendering (SSR) is a technique used to render web pages on the server rather than in the browser. In a React application, SSR can improve performance, SEO, and the initial loading experience.' 
                        // }
                    ]
                });
        },

        routes() {
            this.namespace = "api"
            this.get('/courseLists', (schema) => {
                // console.log(schema);
                return schema.courseLists.all()
            })
            this.get("/topics", (schema) => {
                return schema.topics.all()
            })

            // this.get("/topics/search", (schema , request) => {                
            //     // console.log("request" ,request);
            //     let searchTerm = request.queryParams.term || "";

            //     const topics = schema.topics.all()
            //     console.log(topics);
            

            //     const filterData = topics.models.map((item) =>{
            //         // console.log("itemsssssssssss" , item);
                    
            //         const modelAttrs = item.attrs;
            //         console.log("Model Attributes:",modelAttrs);
            //         const modelKeys = Object.keys(modelAttrs)[0];
            //         // console.log(modelKeys);
            //         const modelData = modelAttrs[modelKeys];
            //         console.log(modelData);

            //     })

            //     return filterData;
            // })
            
            this.get("/topics/search", (schema, request) => {
                // console.log("request" ,request);
                                
                let searchTerm = request.queryParams.term.toLowerCase();
                const topicsModels = schema.topics.all().models;
                // console.log(topicsModels);

                // const topicAttrs = topicsModels.map((item) =>{
                    const topicAttrs = topicsModels.flatMap((item) =>{
                    // console.log(item.attrs);
                    const topicKey = Object.keys(item.attrs)[0];
                    // console.log(topicKey);
                    const topicData = item.attrs[topicKey];
                    // console.log(topicData);
                    return topicData.filter(itemFilter => 
                        itemFilter.title.toLowerCase().includes(searchTerm)
                    );
                })
                
                // console.log(searchTerm)
                // console.log(topicAttrs);
                return topicAttrs;
            });
        }

    })
    return server;
}

  // const topicsModel = topics.models;
                // console.log("topicsModel" ,topicsModel);

                // const mapInTopicModels = topicsModel.forEach((topic) =>{
                //     const modelAttrs = topic.attrs;
                //     const modelkey = Object.keys(modelAttrs)[0];
                //     console.log(modelkey);
                //     const modelData = modelAttrs[modelkey]
                //     console.log(modelData);
                                    
                // })

// const filteredTitles = topics.models.filter(item =>{
                //     // console.log(item);
                //     return item.attrs;
                // })
                // .filter(attrs => {
                //     // console.log("attrs" ,attrs);
                //     attrs.
                //     // return Object.values(attrs).find(arry =>
                //     //     arry.filter(itm =>
                //     //         // console.log(itm.title)
                //     //         itm.title && itm.title.toLowerCase().includes(searchTerm.toLowerCase())
                //     //     )   
                //     // )
                // })