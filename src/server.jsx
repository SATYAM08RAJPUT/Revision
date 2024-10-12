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
                        courseId: '1',
                        select: '1'
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

                server.create('topic', {
                    html: [
                        {
                            id: 1,
                            courseId: 1,
                            title: 'Introduction to HTML',
                            content: 'HTML stands for Hypertext Markup Language. It is the standard markup language for creating web pages. HTML elements are the building blocks of HTML pages, defining the structure and layout of a web document.',
                            courseId: '1',
                            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Introduction to HTML</title>\n</head>\n<body>\n    <h1>Welcome to HTML</h1>\n    <p>HTML is the foundation of web development.</p>\n</body>\n</html>'
                        },
                        {
                            id: 2,
                            courseId: 1,
                            title: 'What is HTML?',
                            content: 'HTML is a markup language used to create the structure of web pages. It allows web developers to format text, images, links, and other content on the internet using tags.',
                            courseId: '1',
                            code: '"<p>This is a paragraph in HTML.</p>\n<a href=\"https://www.example.com\">Visit Example</a>'
                        },
                        {
                            id: 3,
                            courseId: 1,
                            title: 'HTML Elements',
                            content: 'An HTML element is a complete structure that consists of an opening tag, content, and a closing tag, e.g., <h1>This is a Heading</h1>.',
                            courseId: '1',
                            code: '<html>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html>'
                        },
                        {
                            id: 4,
                            courseId: 1,
                            title: 'HTML Tags',
                            content: 'Tags are the fundamental building blocks of HTML, consisting of an opening tag and a closing tag, such as <p> for a paragraph. Some tags can be self-closing, like <img />.',
                            courseId: '1',
                            code: '<p>This is a paragraph.</p>\n<img src=\"image.jpg\" alt=\"Description\" />'
                        },
                        {
                            id: 5,
                            courseId: 1,
                            title: 'HTML Attributes',
                            content: 'Attributes provide additional information about HTML elements and are specified in the opening tag in name/value pairs, like <a href="https://www.example.com">.',
                            courseId: '1',
                            code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h2>The href Attribute</h2>\n\n<p>HTML links are defined with the a tag. The link address is specified in the href attribute:</p>\n\n<a href=\"https://www.w3schools.com\">Visit W3Schools</a>\n\n</body>\n</html>'
                        },
                        {
                            id: 6,
                            title: "HTML Headings",
                            content: "HTML headings are defined with the <h1> to <h6> tags. The <h1> tag defines the most important heading, typically used for the main title, while the <h6> tag represents the least important heading. Headings help organize content and improve accessibility and SEO.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Headings</title>\n</head>\n<body>\n\n<h1>This is a Heading 1</h1>\n<h2>This is a Heading 2</h2>\n<h3>This is a Heading 3</h3>\n<h4>This is a Heading 4</h4>\n<h5>This is a Heading 5</h5>\n<h6>This is a Heading 6</h6>\n\n<p>Headings are important for structuring your content. They allow readers and search engines to understand the hierarchy of the information presented.</p>\n\n</body>\n</html>"
                        },
                        {
                            id: 7,
                            title: "HTML Paragraph",
                            content: "HTML paragraphs are defined with the <p> tag. Paragraphs can contain text and other inline elements. They are used to structure blocks of text and make content more readable.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Paragraph</title>\n</head>\n<body>\n\n<h1>HTML Paragraph</h1>\n<p>This is a paragraph.</p>\n<p>This is another paragraph. It can contain <strong>bold</strong> text, <em>italic</em> text, and <a href=\"#\">links</a>.</p>\n\n</body>\n</html>"
                        },
                        {
                            id: 8,
                            title: "HTML Style",
                            content: "You can use the style attribute to add CSS styles to HTML elements, allowing you to change their appearance directly within the HTML. This is useful for quick styling but is generally better handled with external CSS files for larger projects.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Style</title>\n</head>\n<body>\n\n<h1 style=\"color: blue;\">This is a blue heading</h1>\n<p style=\"font-size: 20px;\">This is a larger paragraph. Inline styles can be applied directly to individual elements.</p>\n\n</body>\n</html>"
                        },
                        {
                            id: 9,
                            title: "HTML Formatting",
                            content: "HTML provides various tags for text formatting, including <b>, <i>, <u>, and <strong>. These tags allow you to emphasize text in different ways, helping to convey meaning and importance within your content.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Formatting</title>\n</head>\n<body>\n\n<h1>HTML Formatting</h1>\n<p><b>This text is bold</b></p>\n<p><i>This text is italic</i></p>\n<p><u>This text is underlined</u></p>\n<p><strong>This text is strong</strong></p>\n\n</body>\n</html>"
                        },
                        {
                            id: 10,
                            title: "HTML Comments",
                            content: "HTML comments are not displayed in the browser and are used to leave notes in the code. They are useful for explaining sections of your code or for temporary code that you want to keep for reference but not display.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Comments</title>\n</head>\n<body>\n\n<h1>HTML Comments</h1>\n<p>This is a paragraph.</p>\n<!-- This is a comment and will not be displayed in the browser. -->\n<p>Another paragraph.</p>\n\n</body>\n</html>"
                        },
                        {
                            id: 11,
                            title: "HTML Links",
                            content: "Links are created using the <a> tag, where the href attribute specifies the URL. Links can connect to external websites, internal pages, or even specific sections within the same page, making navigation easier for users.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Links</title>\n</head>\n<body>\n\n<h1>HTML Links</h1>\n<p>To visit an example website, click the link below:</p>\n<a href=\"https://www.example.com\">Visit Example</a>\n\n</body>\n</html>"
                        },
                        {
                            id: 12,
                            title: "HTML Images",
                            content: "Images are embedded using the <img> tag, which requires the src attribute for the image source and the alt attribute for alternative text. The alt attribute is important for accessibility and SEO, as it describes the image when it cannot be displayed.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Images</title>\n</head>\n<body>\n\n<h1>HTML Images</h1>\n<p>Here is an example of an image:</p>\n<img src=\"image.jpg\" alt=\"Description of the image\">\n\n</body>\n</html>"
                        },
                        {
                            id: 13,
                            title: "HTML Page Title",
                            content: "The title of an HTML page is set in the <title> tag within the <head> section. This title is displayed in the browser's title bar or tab, and it is also important for search engine optimization (SEO) as it helps describe the page's content.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>My First HTML Page</title>\n</head>\n<body>\n\n<h1>HTML Page Title</h1>\n<p>This page demonstrates how to set the title of an HTML document.</p>\n\n</body>\n</html>"
                        },
                        {
                            id: 14,
                            title: "HTML Tables",
                            content: "HTML tables are defined with the <table> tag. They consist of rows and cells, making it easy to organize and display data in a structured format. Each row is defined with the <tr> tag, headers with <th>, and data cells with <td>.",
                            courseId: "1",
                            code: `
                            <!DOCTYPE html>
                            <html>
                            <head>
                                <title>HTML Tables</title>
                            </head>
                            <body>
                            
                            <h1>HTML Tables</h1>
                            <p>HTML tables are defined using the table tag. They consist of rows and cells.</p>
                            
                            <h2>Example Table</h2>
                            <table border="1">
                                <tr>
                                    <th>Header 1</th>
                                    <th>Header 2</th>
                                </tr>
                                <tr>
                                    <td>Row 1, Cell 1</td>
                                    <td>Row 1, Cell 2</td>
                                </tr>
                                <tr>
                                    <td>Row 2, Cell 1</td>
                                    <td>Row 2, Cell 2</td>
                                </tr>
                            </table>
                            
                            </body>
                            </html>
                          `
                        },
                        {
                            id: 15,
                            title: "HTML List",
                            content: "HTML lists can be ordered (<ol>) or unordered (<ul>). Unordered lists use bullet points, while ordered lists use numbers to indicate the sequence of items. Lists are useful for organizing information clearly.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Lists</title>\n</head>\n<body>\n\n<h1>HTML Lists</h1>\n<h2>Unordered List</h2>\n<ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n</ul>\n<h2>Ordered List</h2>\n<ol>\n    <li>First Item</li>\n    <li>Second Item</li>\n</ol>\n\n</body>\n</html>"
                        },
                        {
                            id: 16,
                            title: "HTML Frames",
                            content: "HTML frames are used to divide the browser window into multiple sections. Each frame can load a different document. Note: Frames are deprecated in HTML5, and it's recommended to use CSS for layout instead.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<frameset cols=\"50%,50%\">\n    <frame src=\"frame_a.html\">\n    <frame src=\"frame_b.html\">\n</frameset>\n</html>"
                        },
                        {
                            id: 17,
                            title: "HTML Iframes",
                            content: "Iframes (Inline Frames) allow you to embed another document within the current HTML document. This is useful for displaying content from other websites or documents seamlessly within your own page.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Iframes</title>\n</head>\n<body>\n\n<h1>HTML Iframes</h1>\n<iframe src=\"https://www.example.com\" width=\"300\" height=\"200\"></iframe>\n\n</body>\n</html>"
                        },
                        {
                            id: 18,
                            title: "HTML Block and Inline",
                            content: "HTML elements can be classified as block elements or inline elements. Block elements take up the full width of their parent container, while inline elements take only the width of their content, allowing them to sit side by side.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Block and Inline</title>\n</head>\n<body>\n\n<h1>HTML Block and Inline Elements</h1>\n<div>This is a block element.</div>\n<span>This is an inline element.</span>\n\n</body>\n</html>"
                        },
                        {
                            id: 19,
                            title: "HTML Div",
                            content: "The <div> tag is a block-level container used to group other elements. It is often used for styling purposes and to organize content on a webpage.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Div</title>\n</head>\n<body>\n\n<div>\n    <h2>Title</h2>\n    <p>Content goes here.</p>\n</div>\n\n</body>\n</html>"
                        },
                        {
                            id: 20,
                            title: "HTML Classes",
                            content: "The class attribute is used to specify a class for an HTML element, which can be styled with CSS. Multiple elements can share the same class to apply the same styles.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Classes</title>\n    <style>\n        .my-class {\n            color: blue;\n            font-weight: bold;\n        }\n    </style>\n</head>\n<body>\n\n<div class=\"my-class\">This div has a class.</div>\n\n</body>\n</html>"
                        },
                        {
                            id: 21,
                            title: "HTML Id",
                            content: "The id attribute is used to specify a unique id for an HTML element. It is often used for styling and scripting purposes, allowing you to target specific elements.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Id</title>\n    <style>\n        #uniqueId {\n            color: green;\n            font-size: 20px;\n        }\n    </style>\n</head>\n<body>\n\n<div id=\"uniqueId\">This div has a unique id.</div>\n\n</body>\n</html>"
                        },
                        {
                            id: 22,
                            title: "HTML Fonts",
                            content: "You can change the font of text using the <font> tag (deprecated) or CSS. It is recommended to use CSS for font styling in modern web design.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Fonts</title>\n    <style>\n        .arial {\n            font-family: Arial;\n        }\n    </style>\n</head>\n<body>\n\n<span class=\"arial\">This text is Arial.</span>\n\n</body>\n</html>"
                        },
                        {
                            id: 23,
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
                            id: 24,
                            title: "HTML Marquees",
                            content: "Marquees are used to create scrolling text. The <marquee> tag is deprecated in HTML5, and its use is discouraged. CSS animations are recommended for similar effects in modern web design.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Marquees</title>\n</head>\n<body>\n\n<marquee>Scrolling Text</marquee>\n\n</body>\n</html>"
                        },
                        {
                            id: 25,
                            title: "HTML – Header",
                            content: "The <header> element represents introductory content or navigational links. It is typically used at the top of a page or section and can contain headings, logos, and navigation menus.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Header</title>\n</head>\n<body>\n\n<header>\n    <h1>Website Title</h1>\n    <nav>\n        <a href=\"#\">Home</a>\n        <a href=\"#\">About</a>\n    </nav>\n</header>\n\n</body>\n</html>"
                        },
                        {
                            id: 26,
                            title: "HTML – Tag Reference",
                            content: "HTML provides a wide range of tags for various functionalities, from structuring content to creating forms and multimedia elements. Below is a list of commonly used HTML tags.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Tag Reference</title>\n</head>\n<body>\n    <h1>HTML Tags Reference</h1>\n    <h2>1. Structural Elements</h2>\n    <ul>\n        <li><code>&lt;html&gt;</code>: Root element of an HTML page.</li>\n        <li><code>&lt;head&gt;</code>: Contains meta-information about the document.</li>\n        <li><code>&lt;title&gt;</code>: Specifies the title of the document.</li>\n        <li><code>&lt;body&gt;</code>: Contains the content of the document.</li>\n    </ul>\n    <h2>2. Text Formatting Tags</h2>\n    <ul>\n        <li><code>&lt;p&gt;</code>: Defines a paragraph.</li>\n        <li><code>&lt;h1&gt; to &lt;h6&gt;</code>: Defines HTML headings.</li>\n        <li><code>&lt;b&gt;</code>: Bold text.</li>\n        <li><code>&lt;i&gt;</code>: Italic text.</li>\n        <li><code>&lt;u&gt;</code>: Underlined text.</li>\n        <li><code>&lt;strong&gt;</code>: Important text.</li>\n        <li><code>&lt;em&gt;</code>: Emphasized text.</li>\n        <li><code>&lt;small&gt;</code>: Smaller text.</li>\n    </ul>\n    <h2>3. Links and Images</h2>\n    <ul>\n        <li><code>&lt;a&gt;</code>: Defines a hyperlink.</li>\n        <li><code>&lt;img&gt;</code>: Embeds an image.</li>\n    </ul>\n    <h2>4. Lists</h2>\n    <ul>\n        <li><code>&lt;ul&gt;</code>: Unordered list.</li>\n        <li><code>&lt;ol&gt;</code>: Ordered list.</li>\n        <li><code>&lt;li&gt;</code>: List item.</li>\n    </ul>\n    <h2>5. Tables</h2>\n    <ul>\n        <li><code>&lt;table&gt;</code>: Defines a table.</li>\n        <li><code>&lt;tr&gt;</code>: Table row.</li>\n        <li><code>&lt;th&gt;</code>: Table header cell.</li>\n        <li><code>&lt;td&gt;</code>: Table data cell.</li>\n    </ul>\n    <h2>6. Forms</h2>\n    <ul>\n        <li><code>&lt;form&gt;</code>: Defines a form.</li>\n        <li><code>&lt;input&gt;</code>: Input control.</li>\n        <li><code>&lt;label&gt;</code>: Defines a label for an input element.</li>\n        <li><code>&lt;button&gt;</code>: Defines a clickable button.</li>\n    </ul>\n    <h2>7. Semantic Elements</h2>\n    <ul>\n        <li><code>&lt;header&gt;</code>: Defines a header for a document or section.</li>\n        <li><code>&lt;footer&gt;</code>: Defines a footer for a document or section.</li>\n        <li><code>&lt;article&gt;</code>: Defines an independent piece of content.</li>\n        <li><code>&lt;section&gt;</code>: Defines a section in a document.</li>\n        <li><code>&lt;aside&gt;</code>: Defines content aside from the main content.</li>\n    </ul>\n    <h2>8. Multimedia Elements</h2>\n    <ul>\n        <li><code>&lt;audio&gt;</code>: Embeds audio content.</li>\n        <li><code>&lt;video&gt;</code>: Embeds video content.</li>\n        <li><code>&lt;canvas&gt;</code>: Used for drawing graphics via scripting.</li>\n    </ul>\n    <h2>9. Miscellaneous Tags</h2>\n    <ul>\n        <li><code>&lt;div&gt;</code>: Defines a division or section in a document.</li>\n        <li><code>&lt;span&gt;</code>: Inline container for text.</li>\n        <li><code>&lt;blockquote&gt;</code>: Defines a section that is quoted from another source.</li>\n        <li><code>&lt;cite&gt;</code>: Defines the title of a work.</li>\n    </ul>\n    <h2>10. Comments</h2>\n    <ul>\n        <li><code>&lt;!-- Comment --&gt;</code>: Defines a comment that is not displayed in the browser.</li>\n    </ul>\n</body>\n</html>"
                        },
                        {
                            id: 27,
                            title: "HTML Semantic Elements",
                            content: "Semantic elements clearly describe their meaning in a human- and machine-readable way, such as <article>, <section>, and <aside>.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Semantic Elements</title>\n</head>\n<body>\n    <article>\n        <h2>Article Title</h2>\n        <p>This is the content of the article.</p>\n    </article>\n    <section>\n        <h2>Section Title</h2>\n        <p>This is a section of the document.</p>\n    </section>\n    <aside>\n        <h2>Related Information</h2>\n        <p>This is some related information.</p>\n    </aside>\n</body>\n</html>"
                        },
                        {
                            id: 28,
                            title: "HTML Graphics",
                            content: "HTML5 supports graphics through the <canvas> element, allowing for dynamic, scriptable rendering.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Graphics</title>\n</head>\n<body>\n    <h1>HTML Graphics</h1>\n    <p>The <canvas> element is used for drawing graphics via scripting (usually JavaScript).</p>\n    <canvas id=\"myCanvas\" width=\"200\" height=\"100\" style=\"border:1px solid #000000;\"></canvas>\n    <script>\n        var canvas = document.getElementById('myCanvas');\n        var ctx = canvas.getContext('2d');\n        ctx.fillStyle = '#FF0000';\n        ctx.fillRect(20, 20, 150, 50);\n    </script>\n</body>\n</html>"
                        },
                        {
                            id: 29,
                            title: "HTML Media",
                            content: "HTML5 introduced <audio> and <video> tags for embedding media content, allowing developers to integrate audio and video directly into web pages without the need for plugins. These tags support various formats and provide built-in controls for user interaction.",
                            courseId: "1",
                            code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Media</title>\n</head>\n<body>\n\n<h1>HTML Media</h1>\n<p>HTML5 introduced the &lt;audio&gt; and &lt;video&gt; tags for embedding media content directly into web pages, enhancing the user experience without relying on external plugins.</p>\n\n<h2>Embedding Audio</h2>\n<p>The &lt;audio&gt; tag allows you to embed sound content. You can provide multiple source files for different formats.</p>\n<audio controls>\n    <source src=\"audio.mp3\" type=\"audio/mpeg\">\n    Your browser does not support the audio element.\n    <p>Please download the audio file: <a href=\"audio.mp3\">audio.mp3</a></p>\n</audio>\n\n<h2>Embedding Video</h2>\n<p>The &lt;video&gt; tag allows you to embed video content. Like the audio tag, you can provide different formats for compatibility.</p>\n<video width=\"320\" height=\"240\" controls>\n    <source src=\"video.mp4\" type=\"video/mp4\">\n    Your browser does not support the video tag.\n    <p>Please download the video file: <a href=\"video.mp4\">video.mp4</a></p>\n</video>\n\n</body>\n</html>"
                        }

                        // { 
                        //     id: 6, 
                        //     title: 'HTML Forms', 
                        //     content: 'HTML forms are used to collect user input, including text fields, checkboxes, and submit buttons, created with the <form> tag.',
                        //     courseId:'1' ,
                        //     code:''
                        // },
                        // { 
                        //     id: 7, 
                        //     title: 'HTML Semantic Elements', 
                        //     content: 'Semantic HTML elements clearly describe their meaning, such as <header>, <footer>, <article>, and <section>, improving accessibility and SEO.' ,
                        //     courseId:'1',
                        //     code:''
                        // },
                        // { 
                        //     id: 8, 
                        //     title: 'HTML Images', 
                        //     content: 'Images are embedded using the <img> tag, with the src attribute for the image source and the alt attribute for alternative text.' ,
                        //     courseId:'1',
                        //     code:''
                        // },
                        // { 
                        //     id: 9, 
                        //     title: 'HTML Links', 
                        //     content: 'Links are created using the <a> tag, where the href attribute specifies the URL, connecting to external sites, internal pages, or email addresses.' ,
                        //     courseId:'1',
                        //     code:''
                        // },
                        // { 
                        //     id: 10, 
                        //     title: 'HTML Meta Tag', 
                        //     content: 'HTML meta tags provide metadata about the HTML document, which can include information such as the character set, page description, keywords, author, and viewport settings. They are placed within the <head> section of an HTML document.' ,
                        //     courseId:'1',
                        //     code:''
                        // },
                        // { 
                        //     id: 11, 
                        //     title: 'HTML List', 
                        //     content: 'In HTML, lists are used to group related items together. There are three main types of lists: ordered lists (<ol>), unordered lists (<ul>), and description lists. Here’s a quick overview of each type along with examples..',
                        //     courseId:'1' ,
                        //     code:''
                        // },
                        // { 
                        //     id: 12, 
                        //     title: 'HTML input Tag', 
                        //     content: 'The HTML <input> tag is used to create interactive fields in forms where users can enter data. It supports various types of input, each suited for different kinds of data. Here’s a breakdown of the most common types of the <input> tag along with examples.' ,
                        //     courseId:'1',
                        //     code:''
                        // },
                        // { 
                        //     id: 13, 
                        //     title: 'Global attribute', 
                        //     content: 'HTML global attributes are attributes that can be applied to any HTML element. They provide additional information or functionality and help enhance the behavior of elements. Here are some of the most commonly used global attributes' ,
                        //     courseId:'1',
                        //     code:''
                        // },
                        // { 
                        //     id: 14, 
                        //     title: 'Template Element', 
                        //     content: 'The <template> element holds client-side content that will not be rendered when the page loads but can be instantiated later using JavaScript.' ,
                        //     courseId:'1',
                        //     code:''
                        // }
                    ]
                });
            server.create('topic', {
                css: [
                    {
                        id: 1,
                        courseId: 2,
                        title: 'Introduction to CSS',
                        content: 'CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML. It controls the layout and appearance of web pages, making them visually appealing.',
                        courseId: '2',
                        code:'/* Basic CSS Reset */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Body Styling */\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f4f4f4;\n    color: #333;\n}\n\n/* Header Styling */\nheader {\n    background: #007bff;\n    color: #fff;\n    padding: 10px 0;\n    text-align: center;\n}\n\n/* Navigation Menu */\nnav {\n    margin: 15px 0;\n}\n\nnav a {\n    color: white;\n    padding: 10px 15px;\n    text-decoration: none;\n    border-radius: 5px;\n}\n\nnav a:hover {\n    background: #0056b3;\n}\n\n/* Main Content */\nmain {\n    padding: 20px;\n    background: white;\n    border-radius: 5px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n/* Footer */\nfooter {\n    text-align: center;\n    padding: 20px;\n    background: #007bff;\n    color: white;\n    position: relative;\n    bottom: 0;\n    width: 100%;\n}'
                    },
                    {
                        id: 2,
                        courseId: 2,
                        title: "CSS Box Model",
                        content: "The CSS Box Model describes the rectangular boxes generated for elements in the document tree and includes margins, borders, padding, and the actual content area. Understanding the Box Model is essential for effective layout design.",
                        code:""
                    },
                    {
                        id: 3,
                        courseId: 2,
                        title: "CSS Box Sizing",
                        content: "The box-sizing property in CSS allows you to control how the width and height of an element are calculated. It determines whether the specified width and height include padding and borders or not. This is crucial for layout design.",
                        code: "/* Setting box-sizing to border-box */\n* {\n    box-sizing: border-box;\n}\n\n/* Example of Box Sizing */\n.box {\n    width: 300px; /* Total width will include padding and border */\n    padding: 20px; /* Space inside the box */\n    border: 5px solid black; /* Border thickness */\n    background-color: lightcoral; /* Background color */\n}"
                    },
                    {
                        id: 4,
                        courseId: 2,
                        title: "CSS Display: Inline and Block",
                        content: "The display property in CSS specifies how an element is displayed on the web page. The most common values are 'inline' and 'block'. Inline elements do not start on a new line and only take up as much width as necessary, while block elements start on a new line and take up the full width available.",
                        code:"/* Inline Example */\n.inline {\n    display: inline;\n    background-color: lightgreen;\n    padding: 10px;\n}\n\n/* Block Example */\n.block {\n    display: block;\n    background-color: lightblue;\n    padding: 10px;\n    margin: 10px 0;\n}"
                    },
                    {
                        id: 5,
                        courseId: 2,
                        title: "CSS Selectors",
                        content: "CSS selectors are patterns used to select the elements you want to style. They can target elements based on their type, class, id, attributes, and more. Understanding these selectors is essential for applying styles effectively.",
                        code: "/* Type Selector */\nh1 {\n    color: blue;\n}\n\n/* Class Selector */\n.button {\n    background-color: green;\n}\n\n/* ID Selector */\n#header {\n    text-align: center;\n}\n\n/* Descendant Selector */\ndiv p {\n    margin: 10px;\n}\n\n/* Child Selector */\nul > li {\n    list-style-type: square;\n}\n\n/* Attribute Selector */\na[href=\"https://example.com\"] {\n    color: red;\n}\n\n/* Universal Selector */\n* {\n    box-sizing: border-box;\n}\n\n/* Grouping Selector */\nh1, h2, h3 {\n    font-family: Arial, sans-serif;\n}",
                    },
                    {
                        id: 6,
                        courseId: 2,
                        title: "CSS Positioning",
                        content: "CSS positioning allows you to control the placement of elements on a web page. There are several position values: static, relative, absolute, fixed, and sticky, each with its own behavior and use cases.",
                        code: "/* Static Positioning */\n.static {\n    position: static;\n}\n\n/* Relative Positioning */\n.relative {\n    position: relative;\n    top: 10px;\n    left: 10px;\n}\n\n/* Absolute Positioning */\n.absolute {\n    position: absolute;\n    top: 50px;\n    right: 20px;\n}\n\n/* Fixed Positioning */\n.fixed {\n    position: fixed;\n    bottom: 10px;\n    left: 10px;\n}\n\n/* Sticky Positioning */\n.sticky {\n    position: sticky;\n    top: 0;\n    background-color: yellow;\n}"
                    },
                    {
                        id: 7,
                        courseId: 2,
                        title: "CSS z-index",
                        content: "The z-index property in CSS controls the stacking order of overlapping elements. It only works on positioned elements (those with position values other than static). Higher z-index values bring elements closer to the front.",
                        code:"/* Example with z-index */\n.box1 {\n    position: absolute;\n    z-index: 1;\n    background-color: lightcoral;\n    width: 200px;\n    height: 200px;\n}\n\n.box2 {\n    position: absolute;\n    z-index: 2;\n    background-color: lightblue;\n    width: 150px;\n    height: 150px;\n    top: 50px;\n    left: 50px;\n}\n\n.box3 {\n    position: absolute;\n    z-index: 0;\n    background-color: lightgreen;\n    width: 100px;\n    height: 100px;\n    top: 100px;\n    left: 100px;\n}"
                    },
                    {
                        id: 8,
                        courseId: 2,
                        title: "CSS Overflow",
                        content: "The overflow property in CSS controls how content that overflows an element's box is handled. It can be set to visible, hidden, scroll, or auto, determining whether to show, hide, or provide scrollbars for overflowing content.",
                        code: "/* Example of overflow */\n.container {\n    width: 300px;\n    height: 150px;\n    border: 1px solid black;\n    overflow: auto; /* Change to visible, hidden, or scroll to see different behaviors */\n}\n\n.content {\n    height: 300px;\n    background-color: lightblue;\n}"
                    },
                    {
                        id: 9,
                        courseId: 2,
                        title: "CSS Background Position",
                        content: "The background-position property in CSS sets the initial position of a background image within its container. It can take values such as keywords (top, right, bottom, left, center) or specific length values (pixels or percentages) to define its position.",
                        code: "/* Example of background-position */\n.container {\n    width: 300px;\n    height: 200px;\n    background-image: url('https://example.com/image.jpg');\n    background-position: center; /* Change to top, bottom, left, right, or specific values */\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: 1px solid black;\n}"
                    },
                    {
                        id: 10,
                        courseId: 2,
                        title: "CSS Background Properties: Origin, Clip, and Attachment",
                        content: "These properties control how background images are displayed within an element's box. 'background-origin' specifies the positioning area of the background image, 'background-clip' determines the area the background is painted, and 'background-attachment' defines whether the background image scrolls with the content or is fixed.",
                        code:"/* Example of background-origin, clip, and attachment */\n.container {\n    width: 300px;\n    height: 200px;\n    background-image: url('https://example.com/image.jpg');\n    background-origin: padding-box; /* Change to content-box or border-box */\n    background-clip: border-box; /* Change to padding-box or content-box */\n    background-attachment: fixed; /* Change to scroll or local */\n    background-size: cover;\n    border: 1px solid black;\n}"
                    },
                    {
                        id: 11,
                        courseId: 2,
                        title: "CSS Gradients",
                        content: "CSS gradients are a way to create smooth transitions between two or more colors. They can be used as a background for elements and come in two main types: linear and radial gradients. Gradients are defined using the `background-image` property.",
                        code: "/* Example of linear gradient */\n.container {\n    width: 300px;\n    height: 200px;\n    background-image: linear-gradient(to right, red, yellow); /* Change direction and colors as needed */\n    border: 1px solid black;\n}\n\n/* Example of radial gradient */\n.container-radial {\n    width: 300px;\n    height: 200px;\n    background-image: radial-gradient(circle, blue, green); /* Change shape and colors as needed */\n    border: 1px solid black;\n}"
                    },
                    {
                        id: 12,
                        courseId: 2,
                        title: "CSS Filters",
                        content: "The CSS filter property allows you to apply visual effects to elements, such as blurring, brightness, contrast, and more. Filters can enhance images and other elements, providing a range of creative possibilities.",
                        code: "/* Example of filters */\n.image {\n    width: 300px;\n    height: auto;\n    filter: blur(5px); /* Change to brightness, contrast, grayscale, etc. */\n}\n\n/* Combining multiple filters */\n.text {\n    filter: brightness(1.2) contrast(1.5) saturate(1.5);\n}"
                    },
                    {
                        id: 13,
                        courseId: 2,
                        title: "CSS Percentages",
                        content: "Percentages in CSS are used to define sizes, margins, paddings, and positions relative to other elements or the viewport. This allows for responsive design, adapting elements based on their parent container or the screen size.",
                        code: "/* Example of using percentages */\n.container {\n    width: 80%; /* Container takes 80% of the viewport width */\n    height: 200px;\n    margin: 0 auto; /* Center the container */\n    background-color: lightgray;\n}\n\n.box {\n    width: 50%; /* Box takes 50% of the container's width */\n    height: 100%;\n    background-color: teal;\n}"
                    },
                    {
                        id: 14,
                        courseId: 2,
                        title: "CSS Min-Height and Min-Width",
                        content: "The `min-height` and `min-width` properties in CSS define the minimum height and width of an element. These properties ensure that an element will not be smaller than the specified values, regardless of its content or the size of its container.",
                        code: "/* Example of min-height and min-width */\n.box {\n    min-height: 150px; /* Minimum height of 150 pixels */\n    min-width: 300px; /* Minimum width of 300 pixels */\n    background-color: lightblue;\n    padding: 20px;\n    border: 1px solid black;\n}"
                    },
                    {
                        id: 15,
                        courseId: 2,
                        title: "CSS Units: rem and em",
                        content: "`rem` and `em` are relative units in CSS used for sizing elements, such as fonts, margins, and padding. `em` is relative to the font size of its nearest parent, while `rem` is relative to the font size of the root element, usually the `<html>` element. This allows for more flexible and scalable designs.",
                        code: "/* Example of using rem and em */\nbody {\n    font-size: 16px; /* Base font size */\n}\n\nh1 {\n    font-size: 2rem; /* 32px (2 * 16px) */\n}\n\np {\n    font-size: 1.5em; /* 24px (1.5 * parent's font size) */\n    margin: 1em; /* Margin based on paragraph's font size */\n}\n\n.container {\n    padding: 2em; /* Padding based on the container's font size */\n    background-color: lightgray;\n}"
                    },
                    {
                        id: 16,
                        courseId: 2,
                        title: "CSS Units: vh and vw",
                        content: "`vh` (viewport height) and `vw` (viewport width) are relative units in CSS that represent a percentage of the viewport's height and width, respectively. These units are particularly useful for creating responsive layouts that adapt to the size of the user's screen.",
                        code: "/* Example of using vh and vw */\n.fullscreen {\n    width: 100vw; /* 100% of the viewport width */\n    height: 100vh; /* 100% of the viewport height */\n    background-color: lightblue;\n}\n\n.half {\n    width: 50vw; /* 50% of the viewport width */\n    height: 50vh; /* 50% of the viewport height */\n    background-color: lightcoral;\n}"
                    },
                    {
                        id: 17,
                        courseId: 2,
                        title: "Responsive Design",
                        content: "Responsive design is an approach that ensures web content adapts to different screen sizes and orientations. It uses flexible grids, layouts, and CSS media queries to create a seamless user experience across devices, from desktops to smartphones.",
                        code: "/* Example of responsive design using media queries */\n.container {\n    width: 100%;\n    padding: 20px;\n    background-color: lightgray;\n}\n\n.box {\n    width: 100%;\n    height: 200px;\n    background-color: teal;\n}\n\n/* Media query for tablets and larger screens */\n@media (min-width: 768px) {\n    .box {\n        width: 50%;\n    }\n}\n\n/* Media query for desktops */\n@media (min-width: 1024px) {\n    .box {\n        width: 33.33%;\n    }\n}"
                    }, 
                    {
                        id: 18,
                        courseId: 2,
                        title: "Media Queries",
                        content: "Media queries help you create responsive designs by applying different styles depending on the size of the screen. This means you can make your website look good on desktops, tablets, and smartphones. With media queries, you can change layouts, font sizes, and more based on how wide or tall the user's screen is.",
                        code: "/* Example of media queries */\n.container {\n    width: 100%;\n    padding: 20px;\n    background-color: lightgray;\n}\n\n.box {\n    width: 100%;\n    height: 200px;\n    background-color: teal;\n}\n\n/* Styles for tablets and larger screens */\n@media (min-width: 768px) {\n    .box {\n        width: 50%; /* 2 boxes in a row */\n    }\n}\n\n/* Styles for desktops */\n@media (min-width: 1024px) {\n    .box {\n        width: 33.33%; /* 3 boxes in a row */\n    }\n}"
                    },
                    {
                        id: 19,
                        courseId: 2,
                        title: "Viewport Meta Tag",
                        content: "The viewport meta tag controls the layout on mobile browsers. It sets the width of the viewport to the device's width and adjusts the scaling. This is essential for responsive design, ensuring that your website looks good on all devices, from smartphones to desktops.",
                        code:"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Viewport Meta Tag</title>\n</head>\n<body>\n    <h1>Responsive Web Design</h1>\n    <p>This page is optimized for mobile devices!</p>\n</body>\n</html>"
                    },
                    {
                        id: 20,
                        courseId: 2,
                        title: "Mobile-First Design",
                        content: "The mobile-first approach is a web design strategy that prioritizes mobile devices over desktop. This means you start by designing for smaller screens, ensuring a good user experience on smartphones, and then progressively enhance the layout for larger screens using media queries. This method often results in faster loading times and better performance.",
                        code: "/* Mobile styles (default) */\n.container {\n    width: 100%;\n    padding: 10px;\n    background-color: lightgray;\n}\n\n.box {\n    width: 100%;\n    height: 150px;\n    background-color: teal;\n}\n\n/* Styles for tablets and larger screens */\n@media (min-width: 768px) {\n    .box {\n        width: 50%; /* Two boxes in a row on tablets */\n    }\n}\n\n/* Styles for desktops */\n@media (min-width: 1024px) {\n    .box {\n        width: 33.33%; /* Three boxes in a row on desktops */\n    }\n}"
                    },
                    {
                        id: 21,
                        courseId: 2,
                        title: "Fluid Design",
                        content: "Fluid design uses relative units like percentages, `vw`, and `vh` to create layouts that adapt to different screen sizes. Instead of fixed widths, elements resize based on the viewport, ensuring that the design looks good on any device. This approach enhances flexibility and usability across various screen resolutions.",
                        code:  "/* Example of fluid design */\n.container {\n    width: 90%; /* Container takes 90% of the viewport width */\n    margin: 0 auto; /* Center the container */\n    background-color: lightgray;\n}\n\n.box {\n    width: 45%; /* Box takes 45% of the container's width */\n    height: 200px;\n    background-color: teal;\n    margin: 2.5%; /* Space between boxes */\n}"
                    },
                    {
                        id: 22,
                        courseId: 2,
                        title: "Adaptive Design",
                        content: "Adaptive design is a web design approach that creates distinct layouts for different screen sizes or devices. Unlike fluid design, which uses flexible layouts, adaptive design delivers specific layouts based on the user's device. This method ensures optimal user experience by tailoring the content and layout for various screen resolutions.",
                        code: "/* Example of adaptive design using media queries */\n.container {\n    width: 100%;\n    padding: 20px;\n    background-color: lightgray;\n}\n\n.box {\n    height: 200px;\n    background-color: teal;\n}\n\n/* Layout for mobile devices */\n@media (max-width: 767px) {\n    .box {\n        width: 100%; /* Full width on mobile */\n    }\n}\n\n/* Layout for tablets */\n@media (min-width: 768px) and (max-width: 1023px) {\n    .box {\n        width: 50%; /* Two boxes in a row on tablets */\n    }\n}\n\n/* Layout for desktops */\n@media (min-width: 1024px) {\n    .box {\n        width: 33.33%; /* Three boxes in a row on desktops */\n    }\n}"
                    }
                    
                    // {
                    //     id: 4,
                    //     courseId: 2,
                    //     title: 'CSS Box Model',
                    //     content: 'The CSS box model describes how elements are structured and how they occupy space. It includes margins, borders, padding, and the content area, affecting layout and spacing.',
                    //     courseId: '2'
                    // },
                    // {
                    //     id: 5,
                    //     courseId: 2,
                    //     title: 'CSS Flexbox',
                    //     content: 'Flexbox is a layout model that provides an efficient way to arrange items in a one-dimensional space along a row or column. It allows for responsive design by adjusting item sizes and spacing.',
                    //     courseId: '2'
                    // },
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
                        courseId: 3,
                        title: 'Introduction to JavaScript',
                        content: 'JavaScript is a versatile programming language primarily used for web development. It enables interactive web pages and is an essential part of web applications, alongside HTML and CSS.',
                        courseId: '3',
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
                        title: 'JavaScript Loops',
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
                    }
                ]
            });

            server.create('topic', {
                react: [
                    {
                        id: 1,
                        title: 'Introduction to React',
                        content: 'React is a popular JavaScript library for building user interfaces, developed by Facebook. It allows developers to create large web applications that can change data without reloading the page.',
                        courseId: '4'
                    },
                    {
                        id: 2,
                        title: 'React Components',
                        content: 'Components are the building blocks of a React application. They encapsulate the rendering logic and can be reused throughout the app. Components can be functional or class-based.',
                        courseId: '4'
                    },
                    {
                        id: 3,
                        title: 'JSX in React',
                        content: 'JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code within JavaScript. It makes it easier to create React elements and components.',
                        courseId: '4'
                    },
                    {
                        id: 4,
                        title: 'State',
                        content: 'State is a built-in object that allows components to manage dynamic data. Props (short for properties) are used to pass data from parent to child components, making them reusable.',
                        courseId: '4'
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
            this.get('/courseLists', (schema) => {
                // console.log(schema);
                return schema.courseLists.all()
            })
            this.get("/topics", (schema) => {
                return schema.topics.all()
            })

            this.get("/topics/search", (schema, request) => {
                // console.log("request" ,request);

                let searchTerm = request.queryParams.term.toLowerCase();
                const topicsModels = schema.topics.all().models;
                // console.log(topicsModels);

                // const topicAttrs = topicsModels.map((item) =>{
                const topicAttrs = topicsModels.flatMap((item) => {
                    // console.log(item.attrs);
                    const topicKey = Object.keys(item.attrs)[0];
                    // console.log(topicKey);
                    const topicData = item.attrs[topicKey];
                    // console.log(topicData);
                    return topicData.filter(itemFilter =>
                        itemFilter.title.toLowerCase().includes(searchTerm)
                    );
                })

                return topicAttrs;
            });
        }

    })
    return server;
}
