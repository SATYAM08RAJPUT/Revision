import { createServer, Model } from 'miragejs';

export default function server({ environment = 'development' } = {}) {
  let server = createServer({
    environment,
    models: {
      courseList: Model,
      topic: Model,
      // allRoadmap: Model
      roadmap: Model,
    },

    seeds(server) {
      server.create('courseList', {
        chatsheets: [
          {
            id: '1',
            url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/001/original/html.png?1616282665',
            title: 'HTML Cheatsheet',
            subtitle: 'Codeccharya HTML cheatsheet',
            btn: 'Go to Cheatsheet',
            courseId: '1',
            select: '1',
          },
          {
            id: '2',
            url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/002/original/css.png?1616282675',
            title: 'Css Cheatsheet',
            subtitle: 'Codeccharya Css cheatsheet',
            btn: 'Go to Cheatsheet',
            courseId: '2',
            select: '1',
          },
          {
            id: '3',
            url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/003/original/javascript.png?1616282692',
            title: ' Javascript Cheatsheet',
            subtitle: 'Codeccharya Javascript cheatsheet',
            btn: 'Go to Cheatsheet',
            courseId: '3',
            select: '1',
          },
          {
            id: '4',
            url: '//s3.amazonaws.com/shecodesio-production/cheatsheets/logos/000/000/006/original/react.jpg?1617889774',
            title: 'React Cheatsheet',
            subtitle: 'Codeccharya React cheatsheet',
            btn: 'Go to Cheatsheet',
            courseId: '4',
            select: '1',
          },
          {
            id: '5',
            url: 'https://static.wixstatic.com/media/d6c009_ebfffd3f5541444f8ddcefefaad3f86f~mv2.png',
            title: 'React Recipe',
            subtitle: 'Codeccharya React Recipe',
            btn: 'Go to React Recipe',
            courseId: '5',
            select: '1',
          },
          {
            id: '6',
            url: 'https://infinity.bgscollege.in/uploads/images/image_750x_5dde1599de425.jpg',
            title: 'React Revision',
            subtitle: 'Codeccharya React Revision',
            btn: 'Go to React Revision',
            courseId: '6',
            select: '1',
          },
          {
            id: '7',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0dEWCCGh2o0lqkpSmOsotb2ceSMV0j8OTw&s',
            title: 'React + Next JS Advance Question',
            subtitle: 'Codeccharya React + Next JS Advance Question',
            btn: 'Go to React + Next JS Advance Question',
            courseId: '7',
            select: '1',
          },
          {
            id: '8',
            url: 'https://resources.biginterview.com/wp-content/uploads/2020/10/interview-anxiety.png',
            title: 'React Interviwer Asking Questions',
            subtitle: 'Codeccharya React Interviwer Asking Questions',
            btn: 'Go to React Interviwer Asking Questions',
            courseId: '8',
            select: '1',
          },
        ],
      }),
        server.create('roadmap', {
          roadMap: [
            {
              id: '1',
              courseId: '1',
              commomId: '1',
              topicName: 'Introduction of HTML',
              subTopics: [
                {
                  id: '2',
                  courseId: '1',
                  commomId: '1',
                  subtitle: 'What is HTML',
                },
                {
                  id: '33',
                  courseId: '1',
                  commomId: '33',
                  subtitle: 'Basic structure of an HTML document',
                },
                {
                  id: '4',
                  courseId: '1',
                  commomId: '4',
                  subtitle: 'HTML tags',
                },
                {
                  id: '3',
                  courseId: '1',
                  commomId: '3',
                  subtitle: 'HTML elements.',
                },
                {
                  id: '5',
                  courseId: '1',
                  commomId: '5',
                  subtitle: 'HTML attributes',
                },
              ],
            },
            {
              id: '4',
              courseId: '1',
              topicName: ' Basic HTML Tags',
              subTopics: [
                {
                  id: '34',
                  courseId: '1',
                  subtitle: 'Headings (<h1> to <h6>)',
                },
                {
                  id: 7,
                  courseId: '1',
                  subtitle: 'Paragraphs (<p>)',
                },
                {
                  id: '11',
                  courseId: '1',
                  subtitle: 'Links (<a>)',
                },
                {
                  id: '12',
                  courseId: '1',
                  subtitle: 'Images (<img>)',
                },
                {
                  id: '15',
                  courseId: '1',
                  subtitle: 'HTML Lists (ordered <ol> and unordered <ul>)',
                },
              ],
            },
            {
              id: '9',
              courseId: '1',
              topicName: 'HTML Formatting',
              subTopics: [
                {
                  id: '35',
                  courseId: '1',
                  subtitle: 'Bold (<strong>), Italics (<em>), Underline (<u>)',
                },
                {
                  id: '36',
                  courseId: '1',
                  subtitle: 'Blockquotes (<blockquote>)',
                },
                {
                  id: '37',
                  courseId: '1',
                  subtitle: 'Horizontal rules (<hr>)',
                },
              ],
            },
            {
              id: '23',
              courseId: '1',
              topicName: 'HTML Forms',
              subTopics: [
                {
                  id: '23',
                  courseId: '1',
                  subtitle: 'Form element (<form>)',
                },
                {
                  id: '39',
                  courseId: '1',
                  subtitle:
                    'Input types (text, email, password, radio, checkbox)',
                },
                {
                  id: '40',
                  courseId: '1',
                  subtitle: 'Labels (<label>)',
                },
                {
                  id: '41',
                  courseId: '1',
                  subtitle: 'Buttons (<button>, <input type=submit>)',
                },
                {
                  id: '42',
                  courseId: '1',
                  subtitle: 'Textareas (<textarea>)',
                },
                {
                  id: '43',
                  courseId: '1',
                  subtitle: 'Select dropdowns (<select>)',
                },
              ],
            },
            {
              id: '27',
              courseId: '1',
              topicName: 'HTML Semantic Elements',
              subTopics: [
                {
                  id: '25',
                  courseId: '1',
                  subtitle:
                    'Using semantic tags (<header>, <nav>, <section>, <article>, <footer>)',
                },
                {
                  id: '26',
                  courseId: '1',
                  subtitle:
                    'Importance of semantic HTML for accessibility and SEO',
                },
              ],
            },
            {
              id: '5',
              courseId: '1',
              topicName: 'HTML Attributes',

              subTopics: [
                {
                  id: '20',
                  courseId: '1',
                  subtitle: 'HTML class',
                },
                {
                  id: '21',
                  courseId: '1',
                  subtitle: 'HTML id',
                },
                {
                  id: '8',
                  courseId: '1',
                  subtitle: 'HTML style',
                },
                {
                  id: '44',
                  courseId: '1',
                  subtitle: 'Data attributes (data-*)',
                },
              ],
            },
            {
              id: '29',
              courseId: '1',
              topicName: 'Multimedia Elements',
              subTopics: [
                {
                  id: '45',
                  courseId: '1',
                  subtitle: 'Embedding videos (<video>)',
                },
                {
                  id: '46',
                  courseId: '1',
                  subtitle: 'Embedding audio (<audio>)',
                },
                {
                  id: '16',
                  courseId: '1',
                  subtitle: 'Using iframes (<iframe>)',
                },
              ],
            },
            {
              id: '30',
              courseId: '1',
              topicName: 'Responsive Design Basics',
              subTopics: [
                {
                  id: '30',
                  courseId: '1',
                  subtitle: 'Introduction to responsive design',
                },
                {
                  id: '47',
                  courseId: '1',
                  subtitle: 'The role of the viewport (<meta name=viewport>)',
                },
              ],
            },
            {
              id: '32',
              courseId: '1',
              topicName: 'Introduction to HTML5 API',
              subTopics: [
                {
                  id: '48',
                  courseId: '1',
                  subtitle: 'Canvas API',
                },
                {
                  id: '49',
                  courseId: '1',
                  subtitle: 'Geolocation API',
                },
                {
                  id: '50',
                  courseId: '1',
                  subtitle: 'Local storage API',
                },
                {
                  id: '51',
                  courseId: '1',
                  subtitle: 'session storage API',
                },
              ],
            },
          ],
          id: '1',
          roadMapTitle: 'HTML',
        });
      server.create('roadmap', {
        roadMap: [
          {
            id: '1',
            courseId: '2',
            topicName: 'Basic',
            subTopics: [
              {
                id: '1',
                courseId: '2',
                subtitle: 'HTML Basic Tag',
              },
              {
                id: '2',
                courseId: '2',
                subtitle: 'Css Basic Properties',
              },
              {
                id: '3',
                courseId: '2',
                subtitle: 'One Page Site demo',
              },
            ],
          },
          {
            id: '2',
            courseId: '2',
            topicName: 'Box Modal',
            //   subTopics:["Box Modal","Box Sizing","Display","Css Selectors"]
            subTopics: [
              {
                id: '2',
                courseId: '2',
                subtitle: 'Box Modal',
              },
              {
                id: 3,
                courseId: '2',
                subtitle: 'Box Sizing',
              },
              {
                id: '4',
                courseId: '2',
                subtitle: 'Display',
              },
              {
                id: '5',
                courseId: '2',
                subtitle: 'Css Selectors',
              },
            ],
          },
          {
            id: '6',
            courseId: '2',
            topicName: 'Positions',
            //   subTopics:["Css Positions","Z-index","OverFlow"]
            subTopics: [
              {
                id: '6',
                courseId: '2',
                subtitle: 'Css Positions',
              },
              {
                id: '7',
                courseId: '2',
                subtitle: 'Z-index',
              },
              {
                id: '8',
                courseId: '2',
                subtitle: 'OverFlow',
              },
            ],
          },
          {
            id: '9',
            courseId: '2',
            topicName: 'Background',
            //   subTopics:["Background-size","Background-position","Orign,clip & Attachment","Gradient","Filters","Styling svgs"]
            subTopics: [
              {
                id: '10',
                courseId: '2',
                subtitle: 'Background-size',
              },
              {
                id: '10',
                courseId: '2',
                subtitle: 'Background-position',
              },
              {
                id: '10',
                courseId: '2',
                subtitle: 'Orign,clip & Attachment',
              },
              {
                id: '11',
                courseId: '2',
                subtitle: 'Gradient',
              },
              {
                id: '12',
                courseId: '2',
                subtitle: 'Filters',
              },
            ],
          },
          {
            id: '16',
            courseId: '2',
            topicName: 'Units',
            //   subTopics:["%","Min-height & min-width","Rem % em","vh & vw","Auto"]
            subTopics: [
              {
                id: '13',
                courseId: '2',
                subtitle: '%',
              },
              {
                id: '14',
                courseId: '2',
                subtitle: 'Min-height & min-width',
              },
              {
                id: '15',
                courseId: '2',
                subtitle: 'Rem % em',
              },
              {
                id: '16',
                courseId: '2',
                subtitle: 'vh & vw',
              },
            ],
          },
          {
            id: '17',
            courseId: '2',
            topicName: 'Responsive',
            //   subTopics:["Media queries","viewport meta tag","Mobile first","fluid designs","Adaptive designs"]

            subTopics: [
              {
                id: '18',
                courseId: '2',
                subtitle: 'Media queries',
              },
              {
                id: '19',
                courseId: '2',
                subtitle: 'viewport meta tag',
              },
              {
                id: '20',
                courseId: '2',
                subtitle: 'Mobile first',
              },
              {
                id: '21',
                courseId: '2',
                subtitle: 'fluid designs',
              },
              {
                id: '22',
                courseId: '2',
                subtitle: 'Adaptive designs',
              },
            ],
          },
          {
            id: '23',
            courseId: '2',
            topicName: 'Text & Fonts',
            //   subTopics:["Font families","google font","Custom fonts","Font format & prop","Letter spacing","Line height","Text-decoration & shadom"]
            subTopics: [
              {
                id: '27',
                courseId: '2',
                subtitle: 'Font families',
              },
              {
                id: '28',
                courseId: '2',
                subtitle: 'google font',
              },
              {
                id: '29',
                courseId: '2',
                subtitle: 'Custom fonts',
              },
              {
                id: '30',
                courseId: '2',
                subtitle: 'Letter spacing',
              },
              {
                id: '31',
                courseId: '2',
                subtitle: 'Line height',
              },
              {
                id: '32',
                courseId: '2',
                subtitle: 'Text-decoration & shadom',
              },
            ],
          },
          {
            id: '24',
            courseId: '2',
            topicName: 'Transforming Elements',
            subTopics: [
              {
                id: '33',
                courseId: '2',
                subtitle: 'Transform-origin',
              },
              {
                id: '34',
                courseId: '2',
                subtitle: 'Rotate & translate',
              },
              {
                id: '35',
                courseId: '2',
                subtitle: 'Skew & Scale',
              },
              {
                id: '36',
                courseId: '2',
                subtitle: 'Transformation shorthands',
              },
              {
                id: '37',
                courseId: '2',
                subtitle: 'Rotation in 3D',
              },
              {
                id: '38',
                courseId: '2',
                subtitle: 'perspective',
              },
              {
                id: '39',
                courseId: '2',
                subtitle: 'z-axis',
              },
              {
                id: '40',
                courseId: '2',
                subtitle: 'translate-z',
              },
              {
                id: '41',
                courseId: '2',
                subtitle: 'Flipping elements',
              },
            ],
          },
          {
            id: '25',
            courseId: '2',
            topicName: 'Transitionings & Animations',
            subTopics: [
              {
                id: '25',
                courseId: '2',
                subtitle: 'Transition',
              },
              {
                id: '33',
                courseId: '2',
                subtitle: 'Timing function',
              },
              {
                id: '3',
                courseId: '2',
                subtitle: 'Animations',
              },
              {
                id: '4',
                courseId: '2',
                subtitle: 'multiple Keyframes',
              },
            ],
          },
          {
            id: '26',
            courseId: '2',
            topicName: 'Adavnces Css',
            //   subTopics:["Css Modules","Css Variables","Vendor Prefixes","@support","Polyfills","Cross-browser compatibility","naming conventions","Vanila Css & Frameworks"]
            subTopics: [
              {
                id: '1',
                courseId: '2',
                subtitle: 'Css Modules',
              },
              {
                id: '2',
                courseId: '2',
                subtitle: 'Css Variables',
              },
              {
                id: '3',
                courseId: '2',
                subtitle: 'Vendor Prefixes',
              },
              {
                id: '4',
                courseId: '2',
                subtitle: '@support',
              },
              {
                id: '5',
                courseId: '2',
                subtitle: 'Polyfills',
              },
              {
                id: '6',
                courseId: '2',
                subtitle: 'Cross-browser compatibility',
              },
              {
                id: '7',
                courseId: '2',
                subtitle: 'naming conventions',
              },
              {
                id: '8',
                courseId: '2',
                subtitle: 'Vanila Css & Frameworks',
              },
            ],
          },
        ],
        id: '2',
        roadMapTitle: 'CSS',
      });

      server.create('roadmap', {
        roadMap: [
          {
            id: '1',
            courseId: '3',
            topicName: 'Introduction of JavaScript',
            subTopics: [
              {
                id: '1',
                courseId: '3',
                subtitle: 'What is JavaScript?',
              },
              {
                id: '27',
                courseId: '3',
                subtitle: 'Setting Up Environment',
              },
            ],
          },
          {
            id: '2',
            courseId: '3',
            topicName: 'Basic Syntax and Concepts',
            subTopics: [
              {
                id: '2',
                courseId: '3',
                subtitle: 'Variables:',
              },
              {
                id: 3,
                courseId: '3',
                subtitle: 'Data Types',
              },
              {
                id: '6',
                courseId: '3',
                subtitle: 'Control Structures',
              },
            ],
          },
          {
            id: '4',
            courseId: '3',
            topicName: 'Functions',
            subTopics: [
              {
                id: '28',
                courseId: '3',
                subtitle: 'Function Declarations and Expressions',
              },
              {
                id: '29',
                courseId: '3',
                subtitle: 'Arrow Functions',
              },
              {
                id: '30',
                courseId: '3',
                subtitle: 'Parameters and Return Values',
              },
            ],
          },
          {
            id: '23',
            courseId: '3',
            topicName: 'Objects',
            subTopics: [
              {
                id: '22',
                courseId: '3',
                subtitle: 'Creating Objects',
              },
              {
                id: '23',
                courseId: '3',
                subtitle: 'Accessing Object Properties',
              },
              {
                id: '24',
                courseId: '3',
                subtitle: 'Modifying Objects',
              },
              {
                id: '25',
                courseId: '3',
                subtitle: 'Looping Through Object Properties',
              },
              {
                id: '26',
                courseId: '3',
                subtitle: 'Common Methods',
              },
            ],
          },
          {
            id: '31',
            courseId: '3',
            topicName: 'Array',
            subTopics: [
              {
                id: '32',
                courseId: '3',
                subtitle: 'Methods of Array',
              },
              {
                id: '33',
                courseId: '3',
                subtitle: 'Arrays and forEach',
              },
            ],
          },
          {
            id: '34',
            courseId: '3',
            topicName: 'Intermediate JavaScript',

            subTopics: [
              {
                id: '35',
                courseId: '3',
                subtitle: 'DOM Manipulation',
              },
              {
                id: '37',
                courseId: '3',
                subtitle: 'Asynchronous JavaScript',
              },
              {
                id: '38',
                courseId: '3',
                subtitle: 'Modules',
              },
              {
                id: '39',
                courseId: '3',
                subtitle: 'JSON',
              },
            ],
          },
          {
            id: '40',
            courseId: '3',
            topicName: 'advanced JavaScript',
            subTopics: [
              {
                id: '41',
                courseId: '3',
                subtitle: 'Promises',
              },
              {
                id: '42',
                courseId: '3',
                subtitle: 'Async/Await',
              },
              {
                id: '43',
                courseId: '3',
                subtitle: 'Event Loop and Concurrency Model',
              },
            ],
          },
          {
            id: '30',
            courseId: '1',
            topicName: 'Responsive Design Basics',
            subTopics: [
              {
                id: '30',
                courseId: '1',
                subtitle: 'Introduction to responsive design',
              },
              {
                id: '47',
                courseId: '1',
                subtitle: 'The role of the viewport (<meta name=viewport>)',
              },
            ],
          },
          {
            id: '32',
            courseId: '1',
            topicName: 'Introduction to HTML5 API',
            subTopics: [
              {
                id: '48',
                courseId: '1',
                subtitle: 'Canvas API',
              },
              {
                id: '49',
                courseId: '1',
                subtitle: 'Geolocation API',
              },
              {
                id: '50',
                courseId: '1',
                subtitle: 'Local storage API',
              },
              {
                id: '51',
                courseId: '1',
                subtitle: 'session storage API',
              },
            ],
          },
        ],
        id: '3',
        roadMapTitle: 'JavaScript',
      });

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
            ],
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
              {
                id: 17,
                subtitle: 'React Conditional Rendering',
                courseId: '4',
              },
              { id: 18, subtitle: 'React Lists', courseId: '4' },
              { id: 19, subtitle: 'React Forms', courseId: '4' },
              { id: 20, subtitle: 'React Router', courseId: '4' },
              { id: 21, subtitle: 'React Memo', courseId: '4' },
            ],
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
            ],
          },
          {
            id: 4,
            topicName: 'React More Topics',
            courseId: '4',
            subTopics: [
              {
                id: 31,
                subtitle: 'Control and  uncontrolled components',
                courseId: '4',
              },
              { id: 32, subtitle: ' React Portals', courseId: '4' },
              { id: 33, subtitle: 'React Performance', courseId: '4' },
            ],
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
              {
                id: 38,
                subtitle: 'Server-Side Rendering (SSR)',
                courseId: '4',
              },
              {
                id: 39,
                subtitle: 'Static Site Generation (SSG)',
                courseId: '4',
              },
              {
                id: 40,
                subtitle: 'Performance Optimization Techniques',
                courseId: '4',
              },
            ],
          },
        ],
        id: '4',
        roadMapTitle: 'React',
      });
      server.create('roadmap', {
        roadMap: [
          {
            id: '1',
            courseId: '5',
            topicName: 'Grid-Recipe',
            subTopics: [
              {
                id: '2',
                courseId: '5',
                subtitle: 'Search functionality(Backend) with Mirage Js',
              },
              {
                id: '3',
                courseId: '5',
                subtitle: 'Delete functionality (Backend) with Mirage Js',
              },
              {
                id: '4',
                courseId: '5',
                subtitle: 'Edit functionality (Backend) with Mirage Js',
              },
            ],
          },
          {
            id: '5',
            courseId: '5',
            topicName: 'Tab-Recipe',
            subTopics: [
              {
                id: '6',
                courseId: '5',
                subtitle: 'How can be take Data',
              },
              {
                id: '7',
                courseId: '5',
                subtitle: 'How can be implement with index',
              },
            ],
          },
          {
            id: '8',
            courseId: '5',
            topicName: 'Nested Comment-Recipe',
            subTopics: [
              {
                id: '9',
                courseId: '5',
                subtitle: 'How can be take Nexted Data',
              },
              {
                id: '10',
                courseId: '5',
                subtitle: 'How can be implement on UI',
              },
            ],
          },
          {
            id: '11',
            courseId: '5',
            topicName: 'Nested Menu- Recipe',
            subTopics: [
              {
                id: '12',
                courseId: '5',
                subtitle: 'How can be take Nested Data',
              },
              {
                id: '13',
                courseId: '5',
                subtitle: 'How can be implement on UI',
              },
            ],
          },
          {
            id: '14',
            courseId: '5',
            topicName: 'Router-Recipe',
            subTopics: [
              {
                id: '15',
                courseId: '5',
                subtitle: 'How can be Setup Step by Step',
              },
              {
                id: '16',
                courseId: '5',
                subtitle: 'Navigating Between Routes',
              },
              {
                id: '17',
                courseId: '5',
                subtitle:
                  '1. What is React Router? How do you install React Router?',
              },
              {
                id: '18',
                courseId: '5',
                subtitle: '2. What are the benefits of using React Router?',
              },
            ],
          },
          {
            id: '19',
            courseId: '5',
            topicName: 'Modal-Recipe',
            subTopics: [
              {
                id: '20',
                courseId: '5',
                subtitle: 'Modal Reuseable Components',
              },
            ],
          },
          {
            id: '21',
            courseId: '5',
            topicName: 'Visible-not Visible',
            subTopics: [
              {
                id: '22',
                courseId: '5',
                subtitle: 'How to applied a Functionlity to toggle',
              },
            ],
          },
          {
            id: '23',
            courseId: '5',
            topicName: 'Search & Delete without Mirage Js',
            subTopics: [
              {
                id: '24',
                courseId: '5',
                subtitle: 'How to applied a Functionlity to Search implement',
              },
              {
                id: '25',
                courseId: '5',
                subtitle: 'How to applied a Functionlity to Delete',
              },
            ],
          },
          {
            id: '26',
            courseId: '5',
            topicName: 'Weather App Recipe',
            subTopics: [
              {
                id: '27',
                courseId: '5',
                subtitle: 'How can take API & ApiKey',
              },
            ],
          },
          {
            id: '28',
            courseId: '5',
            topicName: 'Custom Hooks',
            subTopics: [
              {
                id: '29',
                courseId: '5',
                subtitle: 'useFetch API',
              },
              {
                id: '30',
                courseId: '5',
                subtitle: 'use Counter',
              },
              {
                id: '36',
                courseId: '5',
                subtitle: 'use Arrow Key Down-up',
              },
              {
                id: '37',
                courseId: '5',
                subtitle: 'useLocalStorage Hooks',
              },
              {
                id: '41',
                courseId: '5',
                subtitle: 'usewindowWidth Hook',
              },
            ],
          },
          {
            id: '31',
            courseId: '5',
            topicName: 'Card Components',
            subTopics: [
              {
                id: '32',
                courseId: '5',
                subtitle: 'How can be use card Components',
              },
            ],
          },
          {
            id: '33',
            courseId: '5',
            topicName: 'Components',
            subTopics: [
              {
                id: '34',
                courseId: '5',
                subtitle: 'Function Compoenent',
              },
              {
                id: '35',
                courseId: '5',
                subtitle: 'Class Compoenents',
              },
              {
                id: '38',
                courseId: '5',
                subtitle: 'Higher order Component',
              },
            ],
          },
          {
            id: '39',
            courseId: '5',
            topicName: 'Audio Player Setup',
            subTopics: [
              {
                id: '40',
                courseId: '5',
                subtitle: 'How can be use audio Player setup',
              },
            ],
          },
          {
            id: '42',
            courseId: '5',
            topicName: 'Image-Gallery',
            subTopics: [
              {
                id: '43',
                courseId: '5',
                subtitle: 'How can be take Data for gallery',
              },
            ],
          },
        ],
        id: '5',
        roadMapTitle: 'React-Recipe',
      });
      server.create('roadmap', {
        roadMap: [
          {
            id: '1',
            courseId: '6',
            topicName:
              'Question.1 Can you explain the difference between == and === in JavaScript? Why would you prefer one over the other in certain scenarios?',
            subTopics: [],
          },
          {
            id: '2',
            courseId: '6',
            topicName:
              'Question.2 Can you describe the virtual DOM in React and explain how it helps improve the performance of a web application?',
            subTopics: [],
          },
          {
            id: '3',
            courseId: '6',
            topicName:
              'Question.3 Can you explain the purpose of useEffect in React and provide an example of a common use case where you would use it?',
            subTopics: [],
          },
          {
            id: '4',
            courseId: '6',
            topicName:
              'Question.4 Can you explain the concept of lifting state up in React, and provide an example scenario where this would be necessary?',
            subTopics: [],
          },
          {
            id: '5',
            courseId: '6',
            topicName:
              'Question.5 What are higher-order components (HOCs) in React? Can you describe a situation where using an HOC would be beneficial and provide an example of how to create one?',
            subTopics: [],
          },
          {
            id: '6',
            courseId: '6',
            topicName:
              'Question.6 What are controlled and uncontrolled components in React? Can you explain the differences between them and provide examples of when you might use each?',
            subTopics: [],
          },
          {
            id: '7',
            courseId: '6',
            topicName:
              "Question.7 What is the purpose of React's context API, and how would you use it to manage global state in an application? Can you provide an example of how to implement it?",
            subTopics: [],
          },
          {
            id: '8',
            courseId: '6',
            topicName:
              'Question.8 can you explain the difference between useState and useRef?',
            subTopics: [],
          },
          {
            id: '9',
            courseId: '6',
            topicName:
              'Question.9 Can you explain how React’s Reconciliation Algorithm works? Specifically, how does React determine which parts of the DOM to update, and how does the Virtual DOM help in this process?',
            subTopics: [],
          },
          {
            id: '10',
            courseId: '6',
            topicName:
              'Question.10  How would you handle performance optimization in a React application? Can you provide examples of specific techniques or tools you would use to improve rendering performance, especially for complex or large-scale applications?',
            subTopics: [],
          },
          {
            id: '11',
            courseId: '6',
            topicName:
              'Question.11 How do you manage and optimize state in a large React application? What approaches or libraries would you use to handle state in complex applications with many components?',
            subTopics: [],
          },
          {
            id: '12',
            courseId: '6',
            topicName:
              'Question.12  How do you handle form validation in React? What approaches or libraries do you use to manage complex forms and ensure data integrity?',
            subTopics: [],
          },
          {
            id: '13',
            courseId: '6',
            topicName:
              'Question.13 What are React Fragments, and why would you use them? Can you provide an example of their usage?',
            subTopics: [],
          },
          {
            id: '14',
            courseId: '6',
            topicName:
              'Question.14 What is the difference between server-side rendering (SSR) and client-side rendering (CSR) in React? What are the pros and cons of each approach?',
            subTopics: [],
          },
          {
            id: '15',
            courseId: '6',
            topicName:
              'Question.15 Can you explain the purpose and benefits of code splitting in React? How is it implemented?',
            subTopics: [],
          },
          {
            id: '16',
            courseId: '6',
            topicName:
              'Question.16 What are React portals, and when would you use them? Can you show a simple implementation example?',
            subTopics: [],
          },
          {
            id: '17',
            courseId: '6',
            topicName:
              "Question.17 What is React's useReducer hook, and how does it differ from useState? When would you choose useReducer over useState in a React application?",
            subTopics: [],
          },
          {
            id: '18',
            courseId: '6',
            topicName:
              'Question.18 Can you explain how React.memo works and when you should use it? What are some potential pitfalls or limitations of using React.memo for performance optimization?',
            subTopics: [],
          },
          {
            id: '19',
            courseId: '6',
            topicName:
              'Question.19  Can you explain the purpose of React.lazy and Suspense, and how they work together? Can you provide an example of how you would implement code splitting using these features?',
            subTopics: [],
          },
          {
            id: '20',
            courseId: '6',
            topicName:
              'Question.20 What are custom hooks in React, and why would you create one? Can you show an example of a custom hook and explain how it can be reused in different components?',
            subTopics: [],
          },
          {
            id: '21',
            courseId: '6',
            topicName:
              'Question.21 What is the purpose of useCallback and useMemo hooks in React? How do they differ, and when would you use each one?',
            subTopics: [],
          },
        ],
        id: '6',
        roadMapTitle: 'React-Revision',
      });
      server.create('roadmap', {
        roadMap: [
          {
            id: '1',
            courseId: '7',
            topicName:
              'Question.1 How do you optimize performance in a NextJS application?',
            subTopics: [],
          },
          {
            id: '2',
            courseId: '7',
            topicName:
              'Question.2 What are some key differences between server-side rendering (SSR) and static site generation (SSG) in NextJS?',
            subTopics: [],
          },
          {
            id: '3',
            courseId: '7',
            topicName:
              'Question.3 Can you explain how React’s context API compares to Redux in terms of state management?',
            subTopics: [],
          },
          {
            id: '4',
            courseId: '7',
            topicName:
              'Question.4 Describe how you would integrate an OpenAI GPT model with a frontend application.',
            subTopics: [],
          },
          {
            id: '5',
            courseId: '7',
            topicName:
              'Question.5 What challenges do you anticipate when handling large payloads from AI models in the UI, and how would you solve them?',
            subTopics: [],
          },
          {
            id: '6',
            courseId: '7',
            topicName:
              'Question.6 What are the advantages of using WebSockets over HTTP polling for real-time applications?',
            subTopics: [],
          },
          {
            id: '7',
            courseId: '7',
            topicName:
              'Question.7 Can you write a simple code snippet to demonstrate how you would implement a WebSocket connection in React?',
            subTopics: [],
          },
          {
            id: '8',
            courseId: '7',
            topicName:
              'Question.8 How would you handle socket disconnections gracefully to ensure a good user experience?',
            subTopics: [],
          },
          {
            id: '9',
            courseId: '7',
            topicName:
              'Question.9 How do you measure the performance of a React component?',
            subTopics: [],
          },
          {
            id: '10',
            courseId: '7',
            topicName:
              'Question.10  Can you walk me through a scenario where you had to refactor a poorly performing application? What approach did you take?',
            subTopics: [],
          },
          {
            id: '11',
            courseId: '7',
            topicName: 'Question.11 What is Static Site Generation(SSG)?',
            subTopics: [],
          },
          {
            id: '12',
            courseId: '7',
            topicName: 'Question.12 What is Server-Side Rendering(SSR)?',
            subTopics: [],
          },
        ],
        id: '7',
        roadMapTitle: 'React + Next JS Advance Question',
      });
      server.create('roadmap', {
        roadMap: [
          {
            id: '1',
            courseId: '8',
            topicName: 'Question.1 What is CMD Command?',
            subTopics: [],
          },
          {
            id: '2',
            courseId: '8',
            topicName: 'Question.2 Authentication?',
            subTopics: [],
          },
          {
            id: '3',
            courseId: '8',
            topicName: 'Question.3 Version Control System',
            subTopics: [],
          },
        ],
        id: '8',
        roadMapTitle: 'Interviwer Asking Question',
      });

      server.create('topic', {
        html: [
          {
            id: 1,
            courseId: 1,
            title: 'Introduction to HTML',
            content:
              'HTML stands for Hypertext Markup Language. It is the standard markup language for creating web pages. HTML elements are the building blocks of HTML pages, defining the structure and layout of a web document.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Introduction to HTML</title>\n</head>\n<body>\n    <h1>Welcome to HTML</h1>\n    <p>HTML is the foundation of web development.</p>\n</body>\n</html>',
          },
          {
            id: 2,
            courseId: 1,
            commomId: '1',
            title: 'What is HTML?',
            content:
              'HTML is a markup language used to create the structure of web pages. It allows web developers to format text, images, links, and other content on the internet using tags.',
            courseId: '1',
            code: '"<p>This is a paragraph in HTML.</p>\n<a href="https://www.example.com">Visit Example</a>',
            subTopics: [
              {
                id: '34',
                courseId: '1',
                subtitle: 'Headings (<h1> to <h6>)',
              },
              {
                id: 7,
                courseId: '1',
                subtitle: 'Paragraphs (<p>)',
              },
              {
                id: '11',
                courseId: '1',
                subtitle: 'Links (<a>)',
              },
              {
                id: '12',
                courseId: '1',
                subtitle: 'Images (<img>)',
              },
              {
                id: '15',
                courseId: '1',
                subtitle: 'HTML Lists (ordered <ol> and unordered <ul>)',
              },
            ],
          },
          {
            id: 3,
            courseId: 1,
            commomId: '2',
            title: 'HTML Elements',
            content:
              'An HTML element is a complete structure that consists of an opening tag, content, and a closing tag, e.g., <h1>This is a Heading</h1>.',
            courseId: '1',
            code: '<html>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html>',
          },
          {
            id: 4,
            courseId: 1,
            commomId: '4',
            title: 'HTML Tags',
            content:
              'Tags are the fundamental building blocks of HTML, consisting of an opening tag and a closing tag, such as <p> for a paragraph. Some tags can be self-closing, like <img />.',
            courseId: '1',
            code: '<p>This is a paragraph.</p>\n<img src="image.jpg" alt="Description" />',
          },
          {
            id: 5,
            courseId: 1,
            title: 'HTML Attributes',
            content:
              'Attributes provide additional information about HTML elements and are specified in the opening tag in name/value pairs, like <a href="https://www.example.com">.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h2>The href Attribute</h2>\n\n<p>HTML links are defined with the a tag. The link address is specified in the href attribute:</p>\n\n<a href="https://www.w3schools.com">Visit W3Schools</a>\n\n</body>\n</html>',
          },
          {
            id: 6,
            title: 'HTML Headings',
            content:
              'HTML headings are defined with the <h1> to <h6> tags. The <h1> tag defines the most important heading, typically used for the main title, while the <h6> tag represents the least important heading. Headings help organize content and improve accessibility and SEO.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Headings</title>\n</head>\n<body>\n\n<h1>This is a Heading 1</h1>\n<h2>This is a Heading 2</h2>\n<h3>This is a Heading 3</h3>\n<h4>This is a Heading 4</h4>\n<h5>This is a Heading 5</h5>\n<h6>This is a Heading 6</h6>\n\n<p>Headings are important for structuring your content. They allow readers and search engines to understand the hierarchy of the information presented.</p>\n\n</body>\n</html>',
          },
          {
            id: 7,
            title: 'HTML Paragraph',
            content:
              'HTML paragraphs are defined with the <p> tag. Paragraphs can contain text and other inline elements. They are used to structure blocks of text and make content more readable.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Paragraph</title>\n</head>\n<body>\n\n<h1>HTML Paragraph</h1>\n<p>This is a paragraph.</p>\n<p>This is another paragraph. It can contain <strong>bold</strong> text, <em>italic</em> text, and <a href="#">links</a>.</p>\n\n</body>\n</html>',
          },
          {
            id: 8,
            title: 'HTML Style',
            content:
              'You can use the style attribute to add CSS styles to HTML elements, allowing you to change their appearance directly within the HTML. This is useful for quick styling but is generally better handled with external CSS files for larger projects.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Style</title>\n</head>\n<body>\n\n<h1 style="color: blue;">This is a blue heading</h1>\n<p style="font-size: 20px;">This is a larger paragraph. Inline styles can be applied directly to individual elements.</p>\n\n</body>\n</html>',
          },
          {
            id: 9,
            title: 'HTML Formatting',
            content:
              'HTML provides various tags for text formatting, including <b>, <i>, <u>, and <strong>. These tags allow you to emphasize text in different ways, helping to convey meaning and importance within your content.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Formatting</title>\n</head>\n<body>\n\n<h1>HTML Formatting</h1>\n<p><b>This text is bold</b></p>\n<p><i>This text is italic</i></p>\n<p><u>This text is underlined</u></p>\n<p><strong>This text is strong</strong></p>\n\n</body>\n</html>',
          },
          {
            id: 10,
            title: 'HTML Comments',
            content:
              'HTML comments are not displayed in the browser and are used to leave notes in the code. They are useful for explaining sections of your code or for temporary code that you want to keep for reference but not display.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Comments</title>\n</head>\n<body>\n\n<h1>HTML Comments</h1>\n<p>This is a paragraph.</p>\n<!-- This is a comment and will not be displayed in the browser. -->\n<p>Another paragraph.</p>\n\n</body>\n</html>',
          },
          {
            id: 11,
            title: 'HTML Links',
            content:
              'Links are created using the <a> tag, where the href attribute specifies the URL. Links can connect to external websites, internal pages, or even specific sections within the same page, making navigation easier for users.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Links</title>\n</head>\n<body>\n\n<h1>HTML Links</h1>\n<p>To visit an example website, click the link below:</p>\n<a href="https://www.example.com">Visit Example</a>\n\n</body>\n</html>',
          },
          {
            id: 12,
            title: 'HTML Images',
            content:
              'Images are embedded using the <img> tag, which requires the src attribute for the image source and the alt attribute for alternative text. The alt attribute is important for accessibility and SEO, as it describes the image when it cannot be displayed.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Images</title>\n</head>\n<body>\n\n<h1>HTML Images</h1>\n<p>Here is an example of an image:</p>\n<img src="image.jpg" alt="Description of the image">\n\n</body>\n</html>',
          },
          {
            id: 13,
            title: 'HTML Page Title',
            content:
              "The title of an HTML page is set in the <title> tag within the <head> section. This title is displayed in the browser's title bar or tab, and it is also important for search engine optimization (SEO) as it helps describe the page's content.",
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My First HTML Page</title>\n</head>\n<body>\n\n<h1>HTML Page Title</h1>\n<p>This page demonstrates how to set the title of an HTML document.</p>\n\n</body>\n</html>',
          },
          {
            id: 14,
            title: 'HTML Tables',
            content:
              'HTML tables are defined with the <table> tag. They consist of rows and cells, making it easy to organize and display data in a structured format. Each row is defined with the <tr> tag, headers with <th>, and data cells with <td>.',
            courseId: '1',
            code: `
                            <!DOCTYPE html>
                            <html>
                            <head>
                                <title>HTML Tables</title>
                            </head>
                            <body>
                            
                            Basic Example: 2. 
                            <label for="username">Username:</label>
                            <input type="text" id="username" name="username">
                            
                            Checkbox Example: 3.
                            <label for="subscribe">
                            <input type="checkbox" id="subscribe" name="subscribe"> Subscribe to newsletter
                            </label>
                            
                            </body>
                            </html>
                        `,
          },
          {
            id: 15,
            title: 'HTML List',
            content:
              'HTML lists can be ordered (<ol>) or unordered (<ul>). Unordered lists use bullet points, while ordered lists use numbers to indicate the sequence of items. Lists are useful for organizing information clearly.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Lists</title>\n</head>\n<body>\n\n<h1>HTML Lists</h1>\n<h2>Unordered List</h2>\n<ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n</ul>\n<h2>Ordered List</h2>\n<ol>\n    <li>First Item</li>\n    <li>Second Item</li>\n</ol>\n\n</body>\n</html>',
          },
          {
            id: 16,
            title: 'Using iframes (<iframe>)',
            content:
              'The <iframe> element in HTML is used to embed another HTML document within the current document. This allows you to display content such as videos, maps, or other web pages directly within your page. Here’s a guide on how to use <iframe>, along with its attributes, best practices, and examples..',
            courseId: '1',
            code: `
    Basic Syntax:

    <iframe src="https://www.example.com" width="600" height="400" title="Description of the content"></iframe>
    `,
          },
          {
            id: 17,
            title: 'HTML Iframes',
            content:
              'Iframes (Inline Frames) allow you to embed another document within the current HTML document. This is useful for displaying content from other websites or documents seamlessly within your own page.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Iframes</title>\n</head>\n<body>\n\n<h1>HTML Iframes</h1>\n<iframe src="https://www.example.com" width="300" height="200"></iframe>\n\n</body>\n</html>',
          },
          {
            id: 18,
            title: 'HTML Block and Inline',
            content:
              'HTML elements can be classified as block elements or inline elements. Block elements take up the full width of their parent container, while inline elements take only the width of their content, allowing them to sit side by side.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Block and Inline</title>\n</head>\n<body>\n\n<h1>HTML Block and Inline Elements</h1>\n<div>This is a block element.</div>\n<span>This is an inline element.</span>\n\n</body>\n</html>',
          },
          {
            id: 19,
            title: 'HTML Div',
            content:
              'The <div> tag is a block-level container used to group other elements. It is often used for styling purposes and to organize content on a webpage.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Div</title>\n</head>\n<body>\n\n<div>\n    <h2>Title</h2>\n    <p>Content goes here.</p>\n</div>\n\n</body>\n</html>',
          },
          {
            id: 20,
            title: 'HTML Classes',
            content:
              'The class attribute is used to specify a class for an HTML element, which can be styled with CSS. Multiple elements can share the same class to apply the same styles.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Classes</title>\n    <style>\n        .my-class {\n            color: blue;\n            font-weight: bold;\n        }\n    </style>\n</head>\n<body>\n\n<div class="my-class">This div has a class.</div>\n\n</body>\n</html>',
          },
          {
            id: 21,
            title: 'HTML Id',
            content:
              'The id attribute is used to specify a unique id for an HTML element. It is often used for styling and scripting purposes, allowing you to target specific elements.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Id</title>\n    <style>\n        #uniqueId {\n            color: green;\n            font-size: 20px;\n        }\n    </style>\n</head>\n<body>\n\n<div id="uniqueId">This div has a unique id.</div>\n\n</body>\n</html>',
          },
          {
            id: 22,
            title: 'HTML Fonts',
            content:
              'You can change the font of text using the <font> tag (deprecated) or CSS. It is recommended to use CSS for font styling in modern web design.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Fonts</title>\n    <style>\n        .arial {\n            font-family: Arial;\n        }\n    </style>\n</head>\n<body>\n\n<span class="arial">This text is Arial.</span>\n\n</body>\n</html>',
          },
          {
            id: 23,
            title: 'HTML Forms',
            content:
              'HTML forms are used to collect user input. They can include various input types such as text fields, checkboxes, radio buttons, and more. Forms are essential for user interactions on web pages.',
            courseId: '1',
            code: `
                            <!DOCTYPE html>
                            <html>
                            <head>
                                <title>HTML Media</title>
                            </head>
                            <body>
                            
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
                            </form>`,
          },
          {
            id: 23,
            courseId: '1',
            title: 'Select dropdowns (<select>)',
            content:
              'The <select> element in HTML is used to create a dropdown list, allowing users to choose one or more options from a predefined list. Here’s a detailed overview of how to use <select> elements, their attributes, and best practices.:',
            code: `
                            <select name="options" id="options">
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                            </select>
                            .`,
          },
          {
            id: 24,
            title: 'HTML Semantic Elements',
            content:
              'Semantic elements clearly describe their meaning in a human- and machine-readable way, such as <article>, <section>, and <aside>.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Semantic Elements</title>\n</head>\n<body>\n    <article>\n        <h2>Article Title</h2>\n        <p>This is the content of the article.</p>\n    </article>\n    <section>\n        <h2>Section Title</h2>\n        <p>This is a section of the document.</p>\n    </section>\n    <aside>\n        <h2>Related Information</h2>\n        <p>This is some related information.</p>\n    </aside>\n</body>\n</html>',
          },
          {
            id: 25,
            courseId: '1',
            title:
              'Using semantic tags (<header>, <nav>, <section>, <article>, <footer>)',
            content:
              'Semantic tags in HTML5 clearly define the structure and meaning of the content, enhancing accessibility and SEO. The <header>, <nav>, <section>, <article>, and <footer> tags are essential for organizing web pages.',
            code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Semantic HTML Example</title>\n    <style>\n        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }\n        header, footer { background-color: #f4f4f4; padding: 20px; text-align: center; }\n        nav { margin: 20px 0; }\n        section { padding: 20px; }\n        article { margin-bottom: 20px; border: 1px solid #ccc; padding: 10px; }\n    </style>\n</head>\n<body>\n\n<header>\n    <h1>My Blog</h1>\n    <p>Welcome to my blog where I share my thoughts and experiences.</p>\n</header>\n\n<nav>\n    <ul>\n        <li><a href="#home">Home</a></li>\n        <li><a href="#about">About</a></li>\n        <li><a href="#contact">Contact</a></li>\n    </ul>\n</nav>\n\n<section>\n    <h2>Latest Articles</h2>\n\n    <article>\n        <h3>Understanding Semantic HTML</h3>\n        <p>Semantic HTML tags clearly describe their meaning in a human- and machine-readable way.</p>\n        <p><a href="#">Read more...</a></p>\n    </article>\n\n    <article>\n        <h3>The Benefits of Clean Code</h3>\n        <p>Writing clean code improves maintainability and reduces errors.</p>\n        <p><a href="#">Read more...</a></p>\n    </article>\n</section>\n\n<footer>\n    <p>&copy; 2024 My Blog. All rights reserved.</p>\n</footer>\n\n</body>\n</html>',
          },
          {
            id: 26,
            title: 'Importance of semantic HTML for accessibility and SEO',
            content:
              'HTML provides a wide range of tags for various functionalities, from structuring content to creating forms and multimedia elements. Below is a list of commonly used HTML tags.',
            courseId: '1',
            code: `
                            Importance for Accessibility: 
                            Clear Structure: Semantic tags (like <header>, <nav>, <section>, <article>, and <footer>) help create a logical structure for web content. This makes it easier for assistive technologies (like screen readers) to navigate and interpret the page.
                            
                            Meaningful Elements: Each semantic element conveys meaning about the content it contains. For example, <article> indicates that the content is a standalone piece, while <nav> clearly defines navigation links. This helps users understand the context and purpose of different sections.
                            
                            Enhanced Navigation: Screen readers can announce the roles of different parts of the page, allowing users to quickly jump to relevant sections, such as the main content or navigation.
                            
                            Improved Focus Management: Semantic elements can help manage focus more effectively, allowing keyboard users to navigate through a webpage in a meaningful way.
                            
                            Accessibility Standards Compliance: Using semantic HTML helps meet web accessibility standards, such as the Web Content Accessibility Guidelines (WCAG), making your site more inclusive for all users.
                            `,
          },
          {
            id: 27,
            courseId: 1,
            title: 'HTML Attributes',
            content:
              'Attributes provide additional information about HTML elements and are specified in the opening tag in name/value pairs, like <a href="https://www.example.com">.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h2>The href Attribute</h2>\n\n<p>HTML links are defined with the a tag. The link address is specified in the href attribute:</p>\n\n<a href=\"https://www.w3schools.com\">Visit W3Schools</a>\n\n</body>\n</html>',
          },
          {
            id: 28,
            title: 'HTML Classes',
            content:
              'The class attribute is used to specify a class for an HTML element, which can be styled with CSS. Multiple elements can share the same class to apply the same styles.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Classes</title>\n    <style>\n        .my-class {\n            color: blue;\n            font-weight: bold;\n        }\n    </style>\n</head>\n<body>\n\n<div class="my-class">This div has a class.</div>\n\n</body>\n</html>',
          },
          {
            id: 29,
            title: 'HTML Id',
            content:
              'The id attribute is used to specify a unique id for an HTML element. It is often used for styling and scripting purposes, allowing you to target specific elements.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Id</title>\n    <style>\n        #uniqueId {\n            color: green;\n            font-size: 20px;\n        }\n    </style>\n</head>\n<body>\n\n<div id="uniqueId">This div has a unique id.</div>\n\n</body>\n</html>',
          },
          {
            id: 30,
            title: 'HTML Style',
            content:
              'You can use the style attribute to add CSS styles to HTML elements, allowing you to change their appearance directly within the HTML. This is useful for quick styling but is generally better handled with external CSS files for larger projects.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Style</title>\n</head>\n<body>\n\n<h1 style="color: blue;">This is a blue heading</h1>\n<p style="font-size: 20px;">This is a larger paragraph. Inline styles can be applied directly to individual elements.</p>\n\n</body>\n</html>',
          },
          {
            id: 31,
            title: 'Data attributes (data-*)',
            content:
              'The data-* attribute is used to store custom data private to the page or application. It provides a way to embed custom data attributes on all HTML elements.',
            courseId: '1',
            code: '<div data-user-id="12345">User Info</div>',
          },
          {
            id: '32',
            courseId: '1',
            title: 'Multimedia Elements',
            content:
              'HTML5 introduced multimedia elements like <audio> and <video> that allow developers to embed audio and video directly into web pages. These elements support various formats and come with built-in controls for playback.',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>Multimedia Elements</title>\n</head>\n<body>\n    <h1>Embedding Multimedia</h1>\n    <h2>Audio Example</h2>\n    <audio controls>\n        <source src="audio.mp3" type="audio/mpeg">\n        Your browser does not support the audio element.\n        <p>Please download the audio file: <a href="audio.mp3">audio.mp3</a></p>\n    </audio>\n    <h2>Video Example</h2>\n    <video width="320" height="240" controls>\n        <source src="video.mp4" type="video/mp4">\n        Your browser does not support the video tag.\n        <p>Please download the video file: <a href="video.mp4">video.mp4</a></p>\n    </video>\n</body>\n</html>',
          },
          {
            id: 33,
            title: 'Embedding videos (<video>)',
            content:
              'The <video> element in HTML is used to embed video content directly into a web page. It provides a standardized way to play videos without relying on external plugins. Here’s how to use the <video> element, along with its attributes and best practices..',
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
                            
                                    `,
          },
          {
            id: 34,
            title: 'Embedding audio (<audio>)',
            content:
              'The <audio> element in HTML is used to embed audio content directly into a web page. It provides a standardized way to play audio files without relying on external plugins. Here’s how to use the <audio> element, along with its attributes and best practices.',
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
                            </audio>`,
          },
          {
            id: 35,
            title: 'Using iframes (<iframe>)',
            content:
              'The <iframe> element in HTML is used to embed another HTML document within the current document. This allows you to display content such as videos, maps, or other web pages directly within your page. Here’s a guide on how to use <iframe>, along with its attributes, best practices, and examples..',
            courseId: '1',
            code: `
                            Basic Syntax:
                            
                            <iframe src="https://www.example.com" width="600" height="400" title="Description of the content"></iframe>`,
          },
          {
            id: '36',
            courseId: '1',
            title: 'Responsive Design Basics',
            content:
              'Responsive design ensures that your website looks good on all devices, from desktops to smartphones. Here are some basic concepts and techniques you can use in HTML and CSS to achieve responsive design.',
            code: `<!DOCTYPE html>
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
                            </html>
                        `,
          },
          {
            id: 24,
            title: 'HTML Marquees',
            content:
              'Marquees are used to create scrolling text. The <marquee> tag is deprecated in HTML5, and its use is discouraged. CSS animations are recommended for similar effects in modern web design.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Marquees</title>\n</head>\n<body>\n\n<marquee>Scrolling Text</marquee>\n\n</body>\n</html>',
          },
          {
            id: 25,
            title:
              'Using semantic tags (<header>, <nav>, <section>, <article>, <footer>)',
            content:
              'The <header> element represents introductory content or navigational links. It is typically used at the top of a page or section and can contain headings, logos, and navigation menus.',
            courseId: '1',
            code: `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
        header, footer { background-color: #f4f4f4; padding: 20px; text-align: center; }
        nav { margin: 20px 0; }
        section { padding: 20px; }
        article { margin-bottom: 20px; border: 1px solid #ccc; padding: 10px; }
    </style>
    </head>
    <body>



    <section>
    <h2>Latest Articles</h2>

    <article>
        <h3>Understanding Semantic HTML</h3>
        <p>Semantic HTML tags clearly describe their meaning in a human- and machine-readable way.</p>
        <p><a href="#">Read more...</a></p>
    </article>

    <article>
        <h3>The Benefits of Clean Code</h3>
        <p>Writing clean code improves maintainability and reduces errors.</p>
        <p><a href="#">Read more...</a></p>
    </article>
    </section>

    <footer>
    <p>&copy; 2024 My Blog. All rights reserved.</p>
    </footer>

    </body>
    </html>
    `,
          },
          {
            id: 26,
            title: 'Importance of semantic HTML for accessibility and SEO',
            content:
              'HTML provides a wide range of tags for various functionalities, from structuring content to creating forms and multimedia elements. Below is a list of commonly used HTML tags.',
            courseId: '1',
            code: `
    Importance for Accessibility: 
    Clear Structure: Semantic tags (like <header>, <nav>, <section>, <article>, and <footer>) help create a logical structure for web content. This makes it easier for assistive technologies (like screen readers) to navigate and interpret the page.

    Meaningful Elements: Each semantic element conveys meaning about the content it contains. For example, <article> indicates that the content is a standalone piece, while <nav> clearly defines navigation links. This helps users understand the context and purpose of different sections.

    Enhanced Navigation: Screen readers can announce the roles of different parts of the page, allowing users to quickly jump to relevant sections, such as the main content or navigation.

    Improved Focus Management: Semantic elements can help manage focus more effectively, allowing keyboard users to navigate through a webpage in a meaningful way.

    Accessibility Standards Compliance: Using semantic HTML helps meet web accessibility standards, such as the Web Content Accessibility Guidelines (WCAG), making your site more inclusive for all users.
    `,
          },
          {
            id: 27,
            title: 'HTML Semantic Elements',
            content:
              'Semantic elements clearly describe their meaning in a human- and machine-readable way, such as <article>, <section>, and <aside>.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Semantic Elements</title>\n</head>\n<body>\n    <article>\n        <h2>Article Title</h2>\n        <p>This is the content of the article.</p>\n    </article>\n    <section>\n        <h2>Section Title</h2>\n        <p>This is a section of the document.</p>\n    </section>\n    <aside>\n        <h2>Related Information</h2>\n        <p>This is some related information.</p>\n    </aside>\n</body>\n</html>',
          },
          {
            id: 28,
            title: 'HTML Graphics',
            content:
              'HTML5 supports graphics through the <canvas> element, allowing for dynamic, scriptable rendering.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Graphics</title>\n</head>\n<body>\n    <h1>HTML Graphics</h1>\n    <p>The <canvas> element is used for drawing graphics via scripting (usually JavaScript).</p>\n    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>\n    <script>\n        var canvas = document.getElementById(\'myCanvas\');\n        var ctx = canvas.getContext(\'2d\');\n        ctx.fillStyle = \'#FF0000\';\n        ctx.fillRect(20, 20, 150, 50);\n    </script>\n</body>\n</html>',
          },
          {
            id: 29,
            title: 'HTML Media',
            content:
              'HTML5 introduced <audio> and <video> tags for embedding media content, allowing developers to integrate audio and video directly into web pages without the need for plugins. These tags support various formats and provide built-in controls for user interaction.',
            courseId: '1',
            code: '<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Media</title>\n</head>\n<body>\n\n<h1>HTML Media</h1>\n<p>HTML5 introduced the &lt;audio&gt; and &lt;video&gt; tags for embedding media content directly into web pages, enhancing the user experience without relying on external plugins.</p>\n\n<h2>Embedding Audio</h2>\n<p>The &lt;audio&gt; tag allows you to embed sound content. You can provide multiple source files for different formats.</p>\n<audio controls>\n    <source src="audio.mp3" type="audio/mpeg">\n    Your browser does not support the audio element.\n    <p>Please download the audio file: <a href="audio.mp3">audio.mp3</a></p>\n</audio>\n\n<h2>Embedding Video</h2>\n<p>The &lt;video&gt; tag allows you to embed video content. Like the audio tag, you can provide different formats for compatibility.</p>\n<video width="320" height="240" controls>\n    <source src="video.mp4" type="video/mp4">\n    Your browser does not support the video tag.\n    <p>Please download the video file: <a href="video.mp4">video.mp4</a></p>\n</video>\n\n</body>\n</html>',
          },
          {
            id: 30,
            title: 'Responsive Design Basic',
            content:
              'Responsive design ensures that your website looks good on all devices, from desktops to smartphones. Here are some basic concepts and techniques you can use in HTML and CSS to achieve responsive design.',
            courseId: '1',
            code: `
    1. Viewport Meta Tag: Include the viewport meta tag in the <head> section of your HTML to control the layout on mobile browsers.

    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    2. Fluid Layouts: Use relative units like percentages or vw (viewport width) and vh (viewport height) instead of fixed units like pixels for widths and heights.

    .container {
    width: 80%; /* 80% of the viewport width */
    }

    3. CSS Media Queries: Media queries allow you to apply different styles based on the screen size.

    /* Base styles */
    body {
    font-size: 16px;
    }

    /* Styles for devices with a max-width of 600px */
    @media (max-width: 600px) {
    body {
        font-size: 14px;
    }
    }

                        `,
          },
          {
            id: 31,
            title: 'Introduction of HTML features',
            content:
              'Responsive design ensures that your website looks good on all devices, from desktops to smartphones. Here are some basic concepts and techniques you can use in HTML and CSS to achieve responsive design.',
            courseId: '1',
            code: `
    1. Viewport Meta Tag: Include the viewport meta tag in the <head> section of your HTML to control the layout on mobile browsers.

    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    2. Fluid Layouts: Use relative units like percentages or vw (viewport width) and vh (viewport height) instead of fixed units like pixels for widths and heights.

    .container {
    width: 80%; /* 80% of the viewport width */
    }

    3. CSS Media Queries: Media queries allow you to apply different styles based on the screen size.

    /* Base styles */
    body {
    font-size: 16px;
    }

    /* Styles for devices with a max-width of 600px */
    @media (max-width: 600px) {
    body {
        font-size: 14px;
    }
    }

                        `,
          },
          {
            id: 32,
            title: 'Introduction of HTML5 API',
            content:
              'HTML5 introduced a range of APIs that enhance web applications by enabling rich interactions, multimedia capabilities, and better data handling. Here’s a brief overview of some key HTML5 APIs:',
            courseId: '1',
            code: `
    1. Local storage & Session storage
    2. Canvas API`,
          },
          {
            id: 33,
            title: 'Basic Structure of an HTML Document',
            content:
              'HTML (HyperText Markup Language) is the standard markup language used to create web pages. It structures content on the web, allowing browsers to interpret and display text, images, links, and other elements.',
            courseId: '1',
            code: `
    Basic Structure of an HTML Document

    <!DOCTYPE html>: Declares the document as an HTML5 document.

    <html>: The root element that encompasses all HTML content.

    <head>: Contains meta-information about the document, such as:

    <meta charset="UTF-8">: Specifies the character encoding.

    <title>: Sets the title of the webpage displayed in the browser tab.

    <link>: Links to external resources like stylesheets.

    <body>: Contains the content of the webpage that is visible to users, including:

    Text elements: Headings (<h1>, <h2>, etc.), paragraphs (<p>).

    Lists: Ordered (<ol>) and unordered (<ul>).

    Links: Hyperlinks using the <a> tag.

    Images: Displayed using the <img> tag.

    Sections: Organized using <header>, <nav>, <main>, <footer>, and <section> elements.

    Example of Basic HTML Structure: 

    <!DOCTYPE html>
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
    </html>

                            `,
          },
          {
            id: 34,
            title: 'Headings (<h1> to <h6>)',
            content:
              'Headings in HTML are used to define the hierarchy and structure of content on a webpage. They range from <h1> to <h6>, with <h1> being the highest level and most important, and <h6> being the lowest. Here s a brief overview:',
            courseId: '1',
            code: `
    Headings Overview: 
    1.<h1>: The main heading of the page. There should generally be only one <h1> per page to indicate the primary topic.
    <h1>Main Title of the Page</h1>

    <h2>: Subheading that introduces a new section under the <h1>.
    <h2>First Subheading</h2>

    <h3>: Further divides sections introduced by <h2>.
    <h3>Subsection under First Subheading</h3>

    <h4>: A subheading under <h3>.
    <h4>Details of the Subsection</h4>

    <h5>: A subheading under <h4>.
    <h5>Additional Information</h5>

    <h6>: The lowest level heading, used for the least important headings.
    <h6>Minor Details</h6>


    Example of Headings in HTML

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heading Example</title>
    </head>
    <body>
    <h1>Main Title</h1>
    <h2>First Subheading</h2>
    <h3>Subsection</h3>
    <h4>More Details</h4>
    <h5>Additional Info</h5>
    <h6>Minor Points</h6>
    </body>
    </html>


                        `,
          },
          {
            id: 35,
            courseId: '1',
            title: 'Bold (<strong>), Italics (<em>), Underline (<u>)',
            content:
              'In HTML, you can emphasize text using various tags to make it bold, italicized, or underlined. Here’s a breakdown of the <strong>, <em>, and <u> tags:',
            code: `
    Text Formatting Tags
    1. Bold Text (<strong>)

    The <strong> tag is used to make text bold and indicates that the text is of strong importance.

    Bold: <strong>Your text here</strong>
    2. Italics: <em>Your text here</em>
    3. <u>Underline</u>: <u>Your text here</u>
    .`,
          },
          {
            id: 36,
            courseId: '1',
            title: 'Blockquotes (<blockquote>)',
            content:
              'In HTML, you can create a blockquote using the <blockquote> tag. This tag is used to denote a section that is being quoted from another source. Here’s an example:',
            code: `
    <blockquote>: 
    <blockquote>
    <p>This is a quote from someone or something important.</p>
    <footer>— Author Name</footer>
    </blockquote>

    .`,
          },
          {
            id: 37,
            courseId: '1',
            title: 'Horizontal rules (<hr>)',
            content:
              'In HTML, you can create a horizontal rule (a line) using the <hr> tag. This tag is self-closing and is typically used to separate content or sections. Here’s a simple example:',
            code: `
    <p>First section of text.</p>
    <hr>
    <p>Second section of text.</p>

    You can also customize the appearance of the horizontal rule with CSS. For example

    <hr style="border: 1px solid black; width: 50%; margin: auto;">


    .`,
          },
          {
            id: 38,
            courseId: '1',
            title: 'Input types',
            content:
              'HTML5 introduced new input types such as email, url, tel, number, range, date, time, datetime-local, color, and search to improve form usability and validation.:',
            code: `
    <p>First section of text.</p>
    <hr>
    <p>Second section of text.</p>

    You can also customize the appearance of the horizontal rule with CSS. For example

    <hr style="border: 1px solid black; width: 50%; margin: auto;">


    .`,
          },
          {
            id: 39,
            courseId: '1',
            title: 'Input types',
            content:
              'HTML provides a variety of input types for forms, allowing for different types of data entry. Here’s a list of common input types::',
            code: `
    1. Text Input
    <input type="text"> - Single-line text input.

    2. Password Input
    <input type="password"> - Similar to text but obscures the input.

    3. Email Input
    <input type="email"> - For email addresses, with basic validation.

    4. URL Input

    <input type="url"> - For web addresses, with basic validation.

    5. Number Input
    <input type="number"> - For numeric values, can include min, max, and step attributes.

    6. Range Input
    <input type="range"> - Slider for selecting a number within a range.

    7. Checkbox Input
    <input type="checkbox"> - Allows selection of multiple options.

    8. Radio Input
    <input type="radio"> - Allows selection of one option from a set.

    9. File Input
    <input type="file"> - For file uploads.

    10. Date Input
    <input type="date"> - For selecting dates.

    11. Time Input
    <input type="time"> - For selecting time.

    12. Color Input
    <input type="color"> - For selecting a color.

    13. Search Input
    <input type="search"> - For search fields, typically styled differently.

    14. Tel Input
    <input type="tel"> - For telephone numbers, with no validation.

    15.Textarea
    <textarea> - Multi-line text input.

    16. Button Input
    <input type="button"> - A clickable button.

    17. Submit Button
    <input type="submit"> - Submits the form.

    18. Reset Button
    <input type="reset"> - Resets the form fields to default values.

    .`,
          },
          {
            id: 40,
            courseId: '1',
            title: 'Labels (<label>) ',
            content:
              'The <label> element in HTML is used to define a label for form controls. It improves accessibility and usability by associating a descriptive text with a corresponding input element. Here’s how it works:',
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
    </label>


    .`,
          },
          {
            id: 41,
            courseId: '1',
            title: 'Buttons (<button>, <input type=submit>',
            content:
              'In HTML, buttons are created using the <button> element or various <input> types. Here’s an overview of how to use buttons, their types, and best practices:',
            code: `
    Button Types:

    1.Button Element
    <button type="button">Click Me</button>

    2. Submit Button
    <button type="submit">Submit</button>

    3. Reset Button
    <button type="reset">Reset</button>

    Input Button Types: 

    1. Input Button:
    <input type="button" value="Click Me">

    2. Input Submit
    <input type="submit" value="Submit">

    3. Input Reset:
    <input type="reset" value="Reset">


    .`,
          },
          {
            id: 42,
            courseId: '1',
            title: 'Textareas (<textarea>)',
            content:
              'The <textarea> element in HTML is used for multi-line text input, allowing users to enter larger amounts of text. Here’s an overview of how to use <textarea>, its attributes, and best practices:',
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
    </form>


    .`,
          },
          {
            id: 43,
            courseId: '1',
            title: 'Select dropdowns (<select>)',
            content:
              'The <select> element in HTML is used to create a dropdown list, allowing users to choose one or more options from a predefined list. Here’s a detailed overview of how to use <select> elements, their attributes, and best practices.:',
            code: `
    <select name="options" id="options">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    </select>
    .`,
          },
          {
            id: 44,
            title: 'Data attributes (data-*)',
            content:
              'The data-* attribute is used to store custom data private to the page or application. It provides a way to embed custom data attributes on all HTML elements.',
            courseId: '1',
            code: '<div data-user-id="12345">User Info</div>',
          },
          {
            id: 45,
            title: 'Embedding videos (<video>)',
            content:
              'The <video> element in HTML is used to embed video content directly into a web page. It provides a standardized way to play videos without relying on external plugins. Here’s how to use the <video> element, along with its attributes and best practices..',
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

                            `,
          },
          {
            id: 46,
            title: 'Embedding audio (<audio>)',
            content:
              'The <audio> element in HTML is used to embed audio content directly into a web page. It provides a standardized way to play audio files without relying on external plugins. Here’s how to use the <audio> element, along with its attributes and best practices.',
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
    </audio>

                            `,
          },
          {
            id: 47,
            title: 'The role of the viewport (<meta name=viewport>)',
            content:
              'The <meta name="viewport"> tag is an essential element for responsive web design. It helps control the layout of a web page on different devices, particularly on mobile screens. Here’s an overview of its role and importance:',
            courseId: '1',
            code: `
    Example.1:
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    Key Attributes
    width: This can be set to a specific pixel value or to device-width, which makes the width of the viewport equal to the width of the device screen.

    initial-scale: Sets the initial zoom level when the page is first loaded. A value of 1.0 means no zoom.

    maximum-scale: Defines the maximum zoom level the user can achieve.

    user-scalable: Allows or disallows users to zoom in/out. Setting it to no prevents zooming, which can affect accessibility.


                            `,
          },
          {
            id: 48,
            title: 'Canvas API',
            content:
              'The Canvas API in HTML5 provides a powerful way to draw graphics and animations directly in the browser using JavaScript. It enables developers to create dynamic, interactive content like games, charts, and visual effects. Here’s an overview of how to use the Canvas API, its features, and some examples.',
            courseId: '1',
            code: `
    Basic Setup:
    <canvas id="myCanvas" width="600" height="400" style="border:1px solid #000;"></canvas>

    Accessing the Canvas:
    You can access and manipulate the canvas using JavaScript:

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d'); // Get the 2D drawing context

    Drawing Shapes:
    1. Rectangles: You can draw filled and outlined rectangles.

    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 200, 100); // Fill a blue rectangle
    ctx.strokeStyle = 'red';
    ctx.strokeRect(50, 50, 200, 100); // Draw a red outline

    2. Circles: To draw a circle, you use the arc method.

    ctx.beginPath(); // Start a new path
    ctx.arc(300, 200, 50, 0, Math.PI * 2); // Draw a circle
    ctx.fillStyle = 'green';
    ctx.fill(); // Fill the circle with green
    ctx.stroke(); // Outline the circle

    3. Lines: You can draw lines by moving the "pen" to a starting point and then drawing to an endpoint.

    ctx.beginPath();
    ctx.moveTo(50, 50); // Starting point
    ctx.lineTo(200, 200); // Endpoint
    ctx.strokeStyle = 'black';
    ctx.stroke(); // Draw the line

                            `,
          },
          {
            id: 49,
            title: 'Geolocation API',
            content:
              'The Geolocation API allows web applications to access the geographical location of a device. It provides a simple way to retrieve the user  current position, which can enhance user experience by offering location-based services. Here s an overview of how to use the Geolocation API, its feature and some practical examples..',
            courseId: '1',
            code: `
    Basic Usage:

    To use the Geolocation API, you typically call navigator.geolocation.getCurrentPosition() to get the user's current location.

    Requesting Location:

    Here's a basic example of how to request the user's location::

    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
    console.log("Geolocation is not supported by this browser.");
    }

    function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(Latitude: {latitude}, Longitude: {longitude});
    }

    function errorCallback(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.");
            break;
    }
    }

                            `,
          },
          {
            id: 50,
            title: 'Local storage API',
            content:
              'The Local Storage API is part of the Web Storage API that allows web applications to store data in the user browser persistently. This means that data stored in local storage remains even after the browser is closed or the user navigates away from the page. It’s useful for storing small amounts of data that you want to keep between sessions, such as user preferences, settings, or game progress.',
            courseId: '1',
            code: `
    Basic Usage:

    Setting Items
    To store data in local storage, use the setItem method:
    localStorage.setItem('key', 'value');

    Getting Items
    To retrieve data, use the getItem method:

    const value = localStorage.getItem('key');
    console.log(value); // Outputs: 'value'

    Removing Items
    To remove a specific item, use the removeItem method
    localStorage.removeItem('key');

    Clearing All Items
    To clear all data stored in local storage, use the clear method:
    localStorage.clear();


                        `,
          },
          {
            id: 51,
            title: 'session storage API',
            content:
              'TThe Session Storage API is part of the Web Storage API that allows web applications to store data temporarily in the user browser for the duration of a page session. Data stored in session storage is accessible only within the same tab or window, and it is cleared when the tab or window is closed. This makes it useful for storing information that should not persist beyond the current session, such as form data or user interface states.',
            courseId: '1',
            code: `
    Basic Usage:

    Setting Items
    To store data in local storage, use the setItem method:
    localStorage.setItem('key', 'value');

    Getting Items
    To retrieve data, use the getItem method:

    const value = localStorage.getItem('key');
    console.log(value); // Outputs: 'value'

    Removing Items
    To remove a specific item, use the removeItem method
    localStorage.removeItem('key');

    Clearing All Items
    To clear all data stored in local storage, use the clear method:
    localStorage.clear();


                        `,
          },
        ],
      });

      server.create('topic', {
        css: [
          {
            id: 1,
            courseId: 2,
            title: 'Introduction to CSS',
            content:
              'CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML. It controls the layout and appearance of web pages, making them visually appealing.',
            courseId: '2',
            code: '/* Basic CSS Reset /\n {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Body Styling /\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f4f4f4;\n    color: #333;\n}\n\n/ Header Styling /\nheader {\n    background: #007bff;\n    color: #fff;\n    padding: 10px 0;\n    text-align: center;\n}\n\n/ Navigation Menu /\nnav {\n    margin: 15px 0;\n}\n\nnav a {\n    color: white;\n    padding: 10px 15px;\n    text-decoration: none;\n    border-radius: 5px;\n}\n\nnav a:hover {\n    background: #0056b3;\n}\n\n/ Main Content /\nmain {\n    padding: 20px;\n    background: white;\n    border-radius: 5px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n/ Footer */\nfooter {\n    text-align: center;\n    padding: 20px;\n    background: #007bff;\n    color: white;\n    position: relative;\n    bottom: 0;\n    width: 100%;\n}',
          },
          {
            id: 2,
            courseId: 2,
            title: 'CSS Box Model',
            content:
              'The CSS Box Model describes the rectangular boxes generated for elements in the document tree and includes margins, borders, padding, and the actual content area. Understanding the Box Model is essential for effective layout design.',
            code: '',
          },
          {
            id: 3,
            courseId: 2,
            title: 'CSS Box Sizing',
            content:
              'The box-sizing property in CSS allows you to control how the width and height of an element are calculated. It determines whether the specified width and height include padding and borders or not. This is crucial for layout design.',
            code: '/* Setting box-sizing to border-box /\n {\n    box-sizing: border-box;\n}\n\n/* Example of Box Sizing /\n.box {\n    width: 300px; / Total width will include padding and border /\n    padding: 20px; / Space inside the box /\n    border: 5px solid black; / Border thickness /\n    background-color: lightcoral; / Background color */\n}',
          },
          {
            id: 4,
            courseId: 2,
            title: 'CSS Display: Inline and Block',
            content:
              "The display property in CSS specifies how an element is displayed on the web page. The most common values are 'inline' and 'block'. Inline elements do not start on a new line and only take up as much width as necessary, while block elements start on a new line and take up the full width available.",
            code: '/* Inline Example /\n.inline {\n    display: inline;\n    background-color: lightgreen;\n    padding: 10px;\n}\n\n/ Block Example */\n.block {\n    display: block;\n    background-color: lightblue;\n    padding: 10px;\n    margin: 10px 0;\n}',
          },
          {
            id: 5,
            courseId: 2,
            title: 'CSS Selectors',
            content:
              'CSS selectors are patterns used to select the elements you want to style. They can target elements based on their type, class, id, attributes, and more. Understanding these selectors is essential for applying styles effectively.',
            code: '/* Type Selector /\nh1 {\n    color: blue;\n}\n\n/ Class Selector /\n.button {\n    background-color: green;\n}\n\n/ ID Selector /\n#header {\n    text-align: center;\n}\n\n/ Descendant Selector /\ndiv p {\n    margin: 10px;\n}\n\n/ Child Selector /\nul > li {\n    list-style-type: square;\n}\n\n/ Attribute Selector /\na[href="https://example.com"] {\n    color: red;\n}\n\n/ Universal Selector /\n {\n    box-sizing: border-box;\n}\n\n/* Grouping Selector */\nh1, h2, h3 {\n    font-family: Arial, sans-serif;\n}',
          },
          {
            id: 6,
            courseId: 2,
            title: 'CSS Positioning',
            content:
              'CSS positioning allows you to control the placement of elements on a web page. There are several position values: static, relative, absolute, fixed, and sticky, each with its own behavior and use cases.',
            code: '/* Static Positioning /\n.static {\n    position: static;\n}\n\n/ Relative Positioning /\n.relative {\n    position: relative;\n    top: 10px;\n    left: 10px;\n}\n\n/ Absolute Positioning /\n.absolute {\n    position: absolute;\n    top: 50px;\n    right: 20px;\n}\n\n/ Fixed Positioning /\n.fixed {\n    position: fixed;\n    bottom: 10px;\n    left: 10px;\n}\n\n/ Sticky Positioning */\n.sticky {\n    position: sticky;\n    top: 0;\n    background-color: yellow;\n}',
          },
          {
            id: 7,
            courseId: 2,
            title: 'CSS z-index',
            content:
              'The z-index property in CSS controls the stacking order of overlapping elements. It only works on positioned elements (those with position values other than static). Higher z-index values bring elements closer to the front.',
            code: '/* Example with z-index */\n.box1 {\n    position: absolute;\n    z-index: 1;\n    background-color: lightcoral;\n    width: 200px;\n    height: 200px;\n}\n\n.box2 {\n    position: absolute;\n    z-index: 2;\n    background-color: lightblue;\n    width: 150px;\n    height: 150px;\n    top: 50px;\n    left: 50px;\n}\n\n.box3 {\n    position: absolute;\n    z-index: 0;\n    background-color: lightgreen;\n    width: 100px;\n    height: 100px;\n    top: 100px;\n    left: 100px;\n}',
          },
          {
            id: 8,
            courseId: 2,
            title: 'CSS Overflow',
            content:
              "The overflow property in CSS controls how content that overflows an element's box is handled. It can be set to visible, hidden, scroll, or auto, determining whether to show, hide, or provide scrollbars for overflowing content.",
            code: '/* Example of overflow /\n.container {\n    width: 300px;\n    height: 150px;\n    border: 1px solid black;\n    overflow: auto; / Change to visible, hidden, or scroll to see different behaviors */\n}\n\n.content {\n    height: 300px;\n    background-color: lightblue;\n}',
          },
          {
            id: 9,
            courseId: 2,
            title: 'CSS Background Position',
            content:
              'The background-position property in CSS sets the initial position of a background image within its container. It can take values such as keywords (top, right, bottom, left, center) or specific length values (pixels or percentages) to define its position.',
            code: "/* Example of background-position /\n.container {\n    width: 300px;\n    height: 200px;\n    background-image: url('https://example.com/image.jpg');\n    background-position: center; / Change to top, bottom, left, right, or specific values */\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: 1px solid black;\n}",
          },
          {
            id: 10,
            courseId: 2,
            title: 'CSS Background Properties: Origin, Clip, and Attachment',
            content:
              "These properties control how background images are displayed within an element's box. 'background-origin' specifies the positioning area of the background image, 'background-clip' determines the area the background is painted, and 'background-attachment' defines whether the background image scrolls with the content or is fixed.",
            code: "/* Example of background-origin, clip, and attachment /\n.container {\n    width: 300px;\n    height: 200px;\n    background-image: url('https://example.com/image.jpg');\n    background-origin: padding-box; / Change to content-box or border-box /\n    background-clip: border-box; / Change to padding-box or content-box /\n    background-attachment: fixed; / Change to scroll or local */\n    background-size: cover;\n    border: 1px solid black;\n}",
          },
          {
            id: 11,
            courseId: 2,
            title: 'CSS Gradients',
            content:
              'CSS gradients are a way to create smooth transitions between two or more colors. They can be used as a background for elements and come in two main types: linear and radial gradients. Gradients are defined using the background-image property.',
            code: '/* Example of linear gradient /\n.container {\n    width: 300px;\n    height: 200px;\n    background-image: linear-gradient(to right, red, yellow); / Change direction and colors as needed /\n    border: 1px solid black;\n}\n\n/ Example of radial gradient /\n.container-radial {\n    width: 300px;\n    height: 200px;\n    background-image: radial-gradient(circle, blue, green); / Change shape and colors as needed */\n    border: 1px solid black;\n}',
          },
          {
            id: 12,
            courseId: 2,
            title: 'CSS Filters',
            content:
              'The CSS filter property allows you to apply visual effects to elements, such as blurring, brightness, contrast, and more. Filters can enhance images and other elements, providing a range of creative possibilities.',
            code: '/* Example of filters /\n.image {\n    width: 300px;\n    height: auto;\n    filter: blur(5px); / Change to brightness, contrast, grayscale, etc. /\n}\n\n/ Combining multiple filters */\n.text {\n    filter: brightness(1.2) contrast(1.5) saturate(1.5);\n}',
          },
          {
            id: 13,
            courseId: 2,
            title: 'CSS Percentages',
            content:
              'Percentages in CSS are used to define sizes, margins, paddings, and positions relative to other elements or the viewport. This allows for responsive design, adapting elements based on their parent container or the screen size.',
            code: "/* Example of using percentages /\n.container {\n    width: 80%; / Container takes 80% of the viewport width /\n    height: 200px;\n    margin: 0 auto; / Center the container /\n    background-color: lightgray;\n}\n\n.box {\n    width: 50%; / Box takes 50% of the container's width */\n    height: 100%;\n    background-color: teal;\n}",
          },
          {
            id: 14,
            courseId: 2,
            title: 'CSS Min-Height and Min-Width',
            content:
              'The min-height and min-width properties in CSS define the minimum height and width of an element. These properties ensure that an element will not be smaller than the specified values, regardless of its content or the size of its container.',
            code: '/* Example of min-height and min-width /\n.box {\n    min-height: 150px; / Minimum height of 150 pixels /\n    min-width: 300px; / Minimum width of 300 pixels */\n    background-color: lightblue;\n    padding: 20px;\n    border: 1px solid black;\n}',
          },
          {
            id: 15,
            courseId: 2,
            title: 'CSS Units: rem and em',
            content:
              'rem and em are relative units in CSS used for sizing elements, such as fonts, margins, and padding. em is relative to the font size of its nearest parent, while rem is relative to the font size of the root element, usually the <html> element. This allows for more flexible and scalable designs.',
            code: "/* Example of using rem and em /\nbody {\n    font-size: 16px; / Base font size /\n}\n\nh1 {\n    font-size: 2rem; / 32px (2 * 16px) /\n}\n\np {\n    font-size: 1.5em; / 24px (1.5 * parent's font size) /\n    margin: 1em; / Margin based on paragraph's font size /\n}\n\n.container {\n    padding: 2em; / Padding based on the container's font size */\n    background-color: lightgray;\n}",
          },
          {
            id: 16,
            courseId: 2,
            title: 'CSS Units: vh and vw',
            content:
              "vh (viewport height) and vw (viewport width) are relative units in CSS that represent a percentage of the viewport's height and width, respectively. These units are particularly useful for creating responsive layouts that adapt to the size of the user's screen.",
            code: '/* Example of using vh and vw /\n.fullscreen {\n    width: 100vw; / 100% of the viewport width /\n    height: 100vh; / 100% of the viewport height /\n    background-color: lightblue;\n}\n\n.half {\n    width: 50vw; / 50% of the viewport width /\n    height: 50vh; / 50% of the viewport height */\n    background-color: lightcoral;\n}',
          },
          {
            id: 17,
            courseId: 2,
            title: 'Responsive Design',
            content:
              'Responsive design is an approach that ensures web content adapts to different screen sizes and orientations. It uses flexible grids, layouts, and CSS media queries to create a seamless user experience across devices, from desktops to smartphones.',
            code: '/* Example of responsive design using media queries /\n.container {\n    width: 100%;\n    padding: 20px;\n    background-color: lightgray;\n}\n\n.box {\n    width: 100%;\n    height: 200px;\n    background-color: teal;\n}\n\n/ Media query for tablets and larger screens /\n@media (min-width: 768px) {\n    .box {\n        width: 50%;\n    }\n}\n\n/ Media query for desktops */\n@media (min-width: 1024px) {\n    .box {\n        width: 33.33%;\n    }\n}',
          },
          {
            id: 18,
            courseId: 2,
            title: 'Media Queries',
            content:
              "Media queries help you create responsive designs by applying different styles depending on the size of the screen. This means you can make your website look good on desktops, tablets, and smartphones. With media queries, you can change layouts, font sizes, and more based on how wide or tall the user's screen is.",
            code: '/* Example of media queries /\n.container {\n    width: 100%;\n    padding: 20px;\n    background-color: lightgray;\n}\n\n.box {\n    width: 100%;\n    height: 200px;\n    background-color: teal;\n}\n\n/ Styles for tablets and larger screens /\n@media (min-width: 768px) {\n    .box {\n        width: 50%; / 2 boxes in a row /\n    }\n}\n\n/ Styles for desktops /\n@media (min-width: 1024px) {\n    .box {\n        width: 33.33%; / 3 boxes in a row */\n    }\n}',
          },
          {
            id: 19,
            courseId: 2,
            title: 'Viewport Meta Tag',
            content:
              "The viewport meta tag controls the layout on mobile browsers. It sets the width of the viewport to the device's width and adjusts the scaling. This is essential for responsive design, ensuring that your website looks good on all devices, from smartphones to desktops.",
            code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Viewport Meta Tag</title>\n</head>\n<body>\n    <h1>Responsive Web Design</h1>\n    <p>This page is optimized for mobile devices!</p>\n</body>\n</html>',
          },
          {
            id: 20,
            courseId: 2,
            title: 'Mobile-First Design',
            content:
              'The mobile-first approach is a web design strategy that prioritizes mobile devices over desktop. This means you start by designing for smaller screens, ensuring a good user experience on smartphones, and then progressively enhance the layout for larger screens using media queries. This method often results in faster loading times and better performance.',
            code: '/* Mobile styles (default) /\n.container {\n    width: 100%;\n    padding: 10px;\n    background-color: lightgray;\n}\n\n.box {\n    width: 100%;\n    height: 150px;\n    background-color: teal;\n}\n\n/ Styles for tablets and larger screens /\n@media (min-width: 768px) {\n    .box {\n        width: 50%; / Two boxes in a row on tablets /\n    }\n}\n\n/ Styles for desktops /\n@media (min-width: 1024px) {\n    .box {\n        width: 33.33%; / Three boxes in a row on desktops */\n    }\n}',
          },
          {
            id: 21,
            courseId: 2,
            title: 'Fluid Design',
            content:
              'Fluid design uses relative units like percentages, vw, and vh to create layouts that adapt to different screen sizes. Instead of fixed widths, elements resize based on the viewport, ensuring that the design looks good on any device. This approach enhances flexibility and usability across various screen resolutions.',
            code: "/* Example of fluid design /\n.container {\n    width: 90%; / Container takes 90% of the viewport width /\n    margin: 0 auto; / Center the container /\n    background-color: lightgray;\n}\n\n.box {\n    width: 45%; / Box takes 45% of the container's width /\n    height: 200px;\n    background-color: teal;\n    margin: 2.5%; / Space between boxes */\n}",
          },
          {
            id: 22,
            courseId: 2,
            title: 'Adaptive Design',
            content:
              "Adaptive design is a web design approach that creates distinct layouts for different screen sizes or devices. Unlike fluid design, which uses flexible layouts, adaptive design delivers specific layouts based on the user's device. This method ensures optimal user experience by tailoring the content and layout for various screen resolutions.",
            code: '/* Example of adaptive design using media queries /\n.container {\n    width: 100%;\n    padding: 20px;\n    background-color: lightgray;\n}\n\n.box {\n    height: 200px;\n    background-color: teal;\n}\n\n/ Layout for mobile devices /\n@media (max-width: 767px) {\n    .box {\n        width: 100%; / Full width on mobile /\n    }\n}\n\n/ Layout for tablets /\n@media (min-width: 768px) and (max-width: 1023px) {\n    .box {\n        width: 50%; / Two boxes in a row on tablets /\n    }\n}\n\n/ Layout for desktops /\n@media (min-width: 1024px) {\n    .box {\n        width: 33.33%; / Three boxes in a row on desktops */\n    }\n}',
          },
          {
            id: 23,
            courseId: 2,
            title: 'Text & Font',
            content:
              'Text refers to the written content that appears on a webpage. CSS provides various properties to control its appearance, including.',
            code: `
    The font-family property in CSS specifies the typeface for text. It can include specific font names as well as generic font families. Here’s a breakdown of how to use it effectively:
                            
     selector {
        font-family: "Font Name", generic-family;
    }
    
    `,
          },
          {
            id: 24,
            courseId: 2,
            title: 'Transforming Elements',
            content:
              'Transforming elements in CSS allows you to manipulate their appearance in 2D or 3D space. Here are some key properties and examples to get you started:',
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
    
    
    `,
          },

          {
            id: 25,
            courseId: 2,
            title: 'Transitionings & Animations',
            content:
              'CSS transitions and animations are powerful tools for enhancing the visual appeal of your web designs. They allow you to create smooth changes and dynamic effects when elements change state. Here’s a comprehensive guide to help you understand and implement both transitions and animations.',
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
    }`,
          },
          {
            id: 26,
            courseId: 2,
            title: 'Adavnces Css',
            content:
              'Advanced CSS techniques enable you to create more sophisticated, responsive, and visually appealing web designs. Here are some key concepts and techniques you might find useful:.',
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
    
    `,
          },
          {
            id: 27,
            courseId: 2,
            title: 'Font families',
            content:
              "In CSS, font families are specified using the font-family property. You can list multiple font families as a fallback system in case the first choice isn't available. Here are some common font families and how to use them:",
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
    
    
    
    `,
          },
          {
            id: 28,
            courseId: 2,
            title: 'Google Fonts',
            content:
              'Google Fonts is a free web font service that allows you to easily integrate a wide variety of fonts into your web projects. Here’s how to use Google Fonts effectively:',
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
    
    
    
    
    `,
          },
          {
            id: 29,
            courseId: 2,
            title: 'Custom Fonts',
            content:
              'Using custom fonts on your website involves a few steps, typically involving either self-hosting the font files or using a web font service. Here’s how to implement custom fonts effectively:',
            code: `
    1. Self-Hosting Custom Fonts
    
    body {
        font-family: 'MyCustomFont', sans-serif;
    }
    
    `,
          },
          {
            id: 30,
            courseId: 2,
            title: 'Letter Spacing',
            content:
              'Letter spacing, also known as tracking, refers to the space between characters in a word or line of text. Adjusting letter spacing can significantly affect the readability and visual appeal of text. Here are some key points about letter spacing:',
            code: `
    1. Guidelines for Letter Spacing:
    
    Default Spacing: Most fonts come with a default letter spacing that works well for general use.
    Small Text: Increase letter spacing slightly for small text to improve legibility.
    Large Text: Decrease letter spacing for large text to maintain cohesion and a polished look.
    Capital Letters: Be cautious with letter spacing in all-caps text, as it often requires more space to prevent a cramped appearance.
    
    p {
      letter-spacing: 0.05em; /* Adjust value as needed */
    }
    
    
    `,
          },
          {
            id: 31,
            courseId: 2,
            title: 'Line height',
            content:
              'Line height, also known as leading, refers to the vertical space between lines of text. It plays a crucial role in text readability and overall aesthetics. Here are some key points about line height:',
            code: `
    1. Guidelines for Letter Spacing:
    
    Default Spacing: Most fonts come with a default letter spacing that works well for general use.
    Small Text: Increase letter spacing slightly for small text to improve legibility.
    Large Text: Decrease letter spacing for large text to maintain cohesion and a polished look.
    Capital Letters: Be cautious with letter spacing in all-caps text, as it often requires more space to prevent a cramped appearance.
    
    p {
      letter-spacing: 0.05em; /* Adjust value as needed */
    }
    
    
    `,
          },
          {
            id: 32,
            courseId: 2,
            title: 'Text decoration and text shadow',
            content:
              "Text decoration and text shadow are two important CSS properties that enhance the visual presentation of text. Here's a breakdown of both:",
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
    
    `,
          },
          {
            id: 33,
            courseId: 2,
            title: 'Transform-origin',
            content:
              'The transform-origin property in CSS is used to change the point around which a transformation is applied. By default, transformations occur around the center of the element, but with transform-origin, you can specify a different point. This can create interesting effects, especially when rotating or scaling elements.:',
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
    
    
    `,
          },
          {
            id: 34,
            courseId: 2,
            title: 'Rotate & translate',
            content:
              'Combining rotate and translate in CSS can create dynamic effects where an element both moves and rotates simultaneously. Here’s how you can use these transformations together effectively.',
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
    
    
    
    `,
          },
          {
            id: 35,
            courseId: 2,
            title: 'Skew and Scale',
            content:
              'Combining skew and scale in CSS can create interesting visual effects by distorting and resizing elements simultaneously. Here’s how you can use these transformations together effectively.',
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
    
    
    
    
    
    `,
          },
          {
            id: 36,
            courseId: 2,
            title: 'Transformation shorthands',
            content:
              'In CSS, you can use shorthand properties to apply multiple transformations in a single line for cleaner and more efficient code. The transform property is the primary shorthand for this purpose. Here’s how to effectively use transformation shorthands.',
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
    `,
          },
          {
            id: 37,
            courseId: 2,
            title: 'Rotation in 3D',
            content:
              'In CSS, you can create 3D rotation effects using the transform property in conjunction with functions like rotateX(), rotateY(), and rotateZ(). These functions allow you to rotate elements along different axes in a 3D space, creating a more dynamic visual experience..',
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
    
    `,
          },
          {
            id: 38,
            courseId: 2,
            title: 'perspective',
            content:
              'The perspective property in CSS is crucial for creating a sense of depth in 3D space. It defines how far the viewer is from the z=0 plane, influencing how 3D transformations appear on the screen.',
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
    
    
    `,
          },
          {
            id: 39,
            courseId: 2,
            title: 'z-axis',
            content:
              'The z-axis in CSS transformations is used to manipulate the depth of elements in 3D space. When applying transformations, the z-axis allows you to move elements closer to or further away from the viewer. This is essential for creating compelling 3D effects.',
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
    
    `,
          },
          {
            id: 40,
            courseId: 2,
            title: 'translate-z',
            content:
              'The translateZ() function in CSS is used to move an element along the z-axis in a 3D space. This allows you to position elements closer to or further away from the viewer, creating depth in your layout',
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
    
    
    `,
          },
          {
            id: 41,
            courseId: 2,
            title: 'Flipping elements',
            content:
              'Flipping elements in CSS can create engaging visual effects, especially in interactive designs. You can achieve a flip effect using CSS transformations, particularly with rotateY() for horizontal flips and rotateX() for vertical flips.',
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
    
    `,
          },
        ],
      });

      server.create('topic', {
        javascript: [
          {
            id: 1,
            courseId: 3,
            title: 'Introduction to JavaScript',
            content:
              'JavaScript is a versatile programming language primarily used for web development. It enables interactive web pages and is an essential part of web applications, alongside HTML and CSS.',
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
    </html>`,
          },
          {
            id: 2,
            courseId: 3,
            title: 'JavaScript Variables',
            content:
              'JavaScript variables are containers used to store data values. You can think of them as labels that hold information which can be referenced and manipulated throughout your code. There are three ways to declare variables in JavaScript: using var, let, and const..',
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
    
    `,
          },
          {
            id: 3,
            courseId: 3,
            title: 'JavaScript Data Types',
            content:
              'JavaScript has several data types, including primitive types like strings, numbers, booleans, null, and undefined, as well as complex types like objects and arrays.',
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
    
    `,
          },
          {
            id: 4,
            courseId: 3,
            title: 'JavaScript Functions',
            content:
              'Functions in JavaScript are reusable blocks of code designed to perform a specific task. They help organize code, make it more readable, and enable modular programming. Here’s a breakdown of how functions work in JavaScript, along with examples.',
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
    `,
          },
          {
            id: 5,
            courseId: 3,
            title: 'JavaScript Conditionals',
            content:
              'JavaScript conditionals allow you to execute different code based on whether a condition is true or false. The most common conditional statements are if, else if, and else. Here’s a breakdown with examples:',
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
    
                            }`,
          },
          {
            id: 6,
            courseId: 3,
            title: 'Control Structures',
            content:
              'Loops are used to execute a block of code repeatedly. Common loop structures in JavaScript include for, while, and do...while loops.',
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
    `,
          },
          {
            id: 7,
            courseId: 3,
            title: 'JavaScript Events',
            content:
              'Events are actions that occur in the browser, such as clicks or key presses. JavaScript allows you to respond to these events using event listeners.',
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
    
    `,
          },
          {
            id: 8,
            courseId: 3,
            title: 'JavaScript DOM Manipulation',
            content:
              'The Document Object Model (DOM) represents the structure of a web page. JavaScript can manipulate the DOM to change content, structure, and styles dynamically.',
          },
          {
            id: 9,
            courseId: 3,
            title: 'JavaScript ES6 Features',
            content:
              'ES6 (ECMAScript 2015) introduced several new features to JavaScript, including let and const for variable declarations, arrow functions, classes, and template literals.',
          },
          {
            id: 10,
            courseId: 3,
            title: 'JavaScript Promises',
            content:
              'Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never.',
          },
          {
            id: 11,
            courseId: 3,
            title: 'JavaScript Async/Await',
            content:
              'Async/Await is a syntactic sugar built on top of Promises that allows for writing asynchronous code in a more synchronous style.',
          },
          {
            id: 12,
            courseId: 3,
            title: 'JavaScript Modules',
            content:
              'Modules in JavaScript help in organizing code by allowing you to export and import functions, objects, or primitive values between different files.',
          },
          {
            id: 13,
            courseId: 3,
            title: 'JavaScript Error Handling',
            content:
              'Error handling in JavaScript can be done using try/catch blocks to manage exceptions and prevent program crashes.',
          },
          {
            id: 14,
            courseId: 3,
            title: 'JavaScript Fetch API',
            content:
              'The Fetch API provides a modern way to make network requests in JavaScript, allowing you to handle responses as Promises.',
          },
          {
            id: 15,
            title: 'JavaScript Closures',
            content:
              'Closures are a feature in JavaScript where an inner function has access to the outer function’s variables, creating a private scope.',
          },
          {
            id: 16,
            courseId: 3,
            title: 'JavaScript Scope',
            content:
              'Scope defines the accessibility of variables in JavaScript. It can be global or local, and understanding it is crucial for avoiding errors.',
          },
          {
            id: 17,
            courseId: 3,
            title: 'JavaScript Callbacks',
            content:
              'Callbacks are functions that are passed as arguments to other functions, allowing for asynchronous execution and control flow management.',
          },
          {
            id: 18,
            courseId: 3,
            title: 'JavaScript Regular Expressions',
            content:
              'Regular expressions are patterns used to match character combinations in strings, providing powerful string manipulation capabilities.',
          },
          {
            id: 19,
            courseId: 3,
            title: 'JavaScript Object-Oriented Programming',
            content:
              'JavaScript supports object-oriented programming through prototypes, allowing for inheritance and encapsulation of data.',
          },
          {
            id: 20,
            courseId: 3,
            title: 'JavaScript Memory Management',
            content:
              'JavaScript automatically manages memory through garbage collection, freeing up memory that is no longer needed, but understanding it can help optimize performance.',
          },
          {
            id: 21,
            courseId: 3,
            title: 'Objects',
            content:
              'In JavaScript, objects are collections of key-value pairs, where each key (also known as a property) is a string, and each value can be of any data type, including numbers, strings, arrays, functions, or even other objects. Here’s a quick overview of how to work with objects in JavaScript:',
            code: `
    Example of Object:
    const person = {
        name: "Alice",
        age: 30,
        greet: function() {
            console.log(Hello, my name is {this.name});
        }
    };
    
                              `,
          },
          {
            id: 22,
            courseId: 3,
            title: 'Creating Objects',
            content:
              'Creating objects in JavaScript can be done in several ways. Here’s an overview of the most common methods:',
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
    
    
    
                              `,
          },
          {
            id: 23,
            courseId: 3,
            title: 'Accessing Object Properties',
            content:
              'Accessing object properties in JavaScript can be done in two main ways: dot notation and bracket notation. Here’s how each works:',
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
    
    
    
                              `,
          },
          {
            id: 24,
            courseId: 3,
            title: 'Modifying Objects',
            content:
              'Modifying objects in JavaScript involves changing their properties or adding new ones. Here’s how you can do that:',
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
    
                              `,
          },
          {
            id: 25,
            courseId: 3,
            title: 'Looping Through Object Properties',
            content:
              'Accessing object properties in JavaScript can be done in two main ways: dot notation and bracket notation. Here’s how each works:',
            code: `
    1. You can use for...in or Object.keys():
    Using for...in:
    
    for (let key in person) {
        console.log({key}: {person[key]});
    }
    
    2. Using Object.keys():
    
    Object.keys(person).forEach(key => {
        console.log({key}: {person[key]});
    });`,
          },
          {
            id: 26,
            courseId: 3,
            title: 'Common Methods',
            content:
              'JavaScript objects come with a variety of built-in methods that help in manipulating and interacting with them. Here are some common methods and functionalities you should know:',
            code: `
    1. Object.assign(): Copies values from one or more source objects to a target object.
    
    const target = {};
    const source = { a: 1, b: 2 };
    Object.assign(target, source);
    
    
    2. Object.entries(): Returns an array of a given object's own enumerable string-keyed property [key, value] pairs
    
    const entries = Object.entries(person);
    
    3. Object.freeze(): Freezes an object, preventing new properties from being added and existing properties from being modified.
    
    Object.freeze(person);
    `,
          },
          {
            id: 27,
            courseId: 3,
            title: 'Setting Up Environment',
            content:
              'Setting up a JavaScript development environment can vary depending on whether you want to run JavaScript in the browser or on the server (using Node.js). Here’s a guide for both scenarios::',
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
    
    `,
          },
          {
            id: 28,
            courseId: 3,
            title: 'Function Declarations and Expressions',
            content:
              'In JavaScript, functions can be defined in two main ways: function declarations and function expressions. Heres a breakdown of each',
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
    
    
    `,
          },
          {
            id: 29,
            courseId: 3,
            title: 'Arrow functions ',
            content:
              'Arrow functions are a concise way to write function expressions in JavaScript, introduced in ES6 (ECMAScript 2015). They provide several benefits, including shorter syntax and a different behavior regarding the this keyword. Here’s a detailed overview:',
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
    
    
    `,
          },
          {
            id: 30,
            courseId: 3,
            title: 'Parameters and Return Values',
            content:
              'In JavaScript, functions can take parameters (inputs) and return values (outputs). Understanding how to work with parameters and return values is fundamental to writing effective functions. Here’s a breakdown of both concepts:',
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
    
    
    `,
          },
          {
            id: 31,
            courseId: 3,
            title: 'Array',
            content:
              'An array is a special type of object used to store multiple values in a single variable. Arrays can hold elements of any data type, including numbers, strings, objects, and even other arrays.',
            code: `
    Creating Arrays: 
    1.Using Array Literals:
    const fruits = ['apple', 'banana', 'cherry'];
    
    2. Using the Array Constructor:
    const numbers = new Array(1, 2, 3);
    
    3.Empty Array:
    const emptyArray = [];
    
    
    `,
          },
          {
            id: 32,
            courseId: 3,
            title: 'Methods of Array',
            content:
              'Here are some commonly used array methods along with examples:',
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
    
    `,
          },
          {
            id: 33,
            courseId: 3,
            title: 'Arrays and forEach',
            content:
              'Arrays and forEach are two distinct concepts in JavaScript, often used together but serving different purposes. Here’s a breakdown of their differences:',
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
    
    `,
          },
          {
            id: 34,
            courseId: 3,
            title: 'Intermediate JavaScript',
            content:
              'Intermediate JavaScript builds upon the foundational knowledge you have and introduces more complex concepts and techniques. Here’s a structured overview of key topics to focus on at the intermediate level:',
            code: `
    1. DOM Manipulation: Selecting elements, modifying content and styles, 2.2.2. event handling
    3. Asynchronous JavaScript: Callbacks, Promises, async/await
    4. Modules: ES6 modules, CommonJS, module bundlers (like Webpack)
    5 .JSON: Working with JSON data;
    
    `,
          },
          {
            id: 35,
            courseId: 3,
            title: 'DOM Manipulation',
            content:
              'DOM (Document Object Model) manipulation is a way to interact with and modify the structure, style, and content of a web page using JavaScript. Here are some key concepts and methods you can use for DOM manipulation:',
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
    
    `,
          },
          {
            id: 36,
            courseId: 3,
            title: 'Asynchronous JavaScript',
            content:
              'Asynchronous JavaScript is a programming paradigm that allows for non-blocking code execution. This is essential for improving performance and user experience, especially in web applications where tasks like fetching data from a server can take time.',
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
    
    `,
          },
          {
            id: 37,
            courseId: 3,
            title: 'Asynchronous JavaScript',
            content:
              'Asynchronous JavaScript is a programming paradigm that allows for non-blocking code execution. This is essential for improving performance and user experience, especially in web applications where tasks like fetching data from a server can take time.',
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
    
    `,
          },
          {
            id: 38,
            courseId: 3,
            title: 'Modules',
            content:
              'JavaScript modules are a way to organize and encapsulate code, enabling better code management, reusability, and maintainability. Here  a deeper dive into modules, covering their structure, types, and usage:.',
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
    
    
    `,
          },
          {
            id: 39,
            courseId: 3,
            title: 'JSON',
            content:
              'JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is widely used for transmitting data between a server and a web application as an alternative to XML..',
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
    
    
    `,
          },
          {
            id: 40,
            courseId: 3,
            title: 'advanced JavaScript',
            content:
              'Diving into advanced JavaScript involves exploring deeper concepts and techniques that can enhance your skills and understanding of the language. Here’s a detailed breakdown of advanced JavaScript topics:',
            code: `
    1. Promises Programming
    2. Async/Await Functions
    3. Event Loop and Concurrency Model
    `,
          },
          {
            id: 41,
            courseId: 3,
            title: 'Promises',
            content:
              'In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises allow you to write cleaner, more manageable asynchronous code.',
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
    
    `,
          },
          {
            id: 42,
            courseId: 3,
            title: 'Async/Await',
            content:
              'async and await are keywords in JavaScript that provide a more intuitive way to work with asynchronous code, making it easier to read and write compared to traditional promise chaining..',
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
    
    `,
          },
          {
            id: 43,
            courseId: 3,
            title: 'The Event Loop and Concurrency Model',
            content:
              'The Event Loop and Concurrency Model in JavaScript are crucial concepts for understanding how asynchronous operations are handled in a single-threaded environment. Here’s a breakdown of these concepts',
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
    `,
          },
        ],
      });

      server.create('topic', {
        react: [
          {
            id: 1,
            title: 'Introduction to React',
            content:
              'React is a popular JavaScript library for building user interfaces, developed by Facebook. It allows developers to create large web applications that can change data without reloading the page.',
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
                  export default Counter;`,
          },
          {
            id: 2,
            title: 'React ES6',
            content:
              'ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.',
            courseId: '4',
            ex: 'Example',
            function:
              'React uses ES6, and you should be familiar with some of the new features like:',
            info: 'Classes \n Arrow Functions\nVariables (let, const, var)\nArray Methods like .map()\nDestructuring\nModules\nTernary Operator\nSpread Operator',
            code: `import React, { Component } from 'react';
                  
                  class Greeting extends Component {
                  render() {
                  return <h1>Hello, {this.props.name}!</h1>;
                  }
                  }
                  
                  export default Greeting;
                  `,
          },
          {
            id: 3,
            title: 'React ES6 Classes',
            content:
              'React is a popular JavaScript library for building user interfaces, developed by Facebook. It allows developers to create large web applications that can change data without reloading the page.',
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
                            `,
          },
          {
            id: 4,
            title: 'React ES6 Arrow Functions',
            content:
              'Arrow functions are a shorthand way to write functions in JavaScript. They are especially useful in React for writing concise and clear components. Arrow functions do not have their own this, which means they inherit this from the parent scope, making them ideal for handling events.',
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
                            `,
          },
          {
            id: 5,
            title: 'React ES6 Variables',
            content:
              'In ES6, you can use let and const to declare variables. const is used for variables that won’t change, while let is for variables that can be reassigned. Using these keywords helps manage scope and improve code readability.',
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
                            `,
          },
          {
            id: 6,
            title: 'React ES6 Array Methods',
            content:
              'ES6 introduces several array methods that make it easier to manipulate arrays. Common methods include .map(), .filter(), and .reduce(). These methods are particularly useful in React for rendering lists and managing state.',
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
                            `,
          },
          {
            id: 7,
            title: 'React ES6 Destructuring',
            content:
              'Destructuring allows you to unpack values from arrays or properties from objects into distinct variables. This is especially useful in React for extracting props or state values, making your code cleaner and easier to read.',
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
                            `,
          },
          {
            id: 8,
            title: 'React ES6 Spread Operator',
            content:
              'The spread operator (...) allows you to expand elements of an iterable (like an array or object) into individual elements. In React, it’s often used to copy objects or arrays and to pass props to components more conveniently.',
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
                            `,
          },
          {
            id: 9,
            title: 'React ES6 Modules',
            content:
              'ES6 modules allow you to split your code into separate files, making it easier to manage and maintain. You can export components, functions, or variables from one file and import them into another. This modular approach enhances code organization and reusability.',
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
                            `,
          },
          {
            id: 10,
            title: 'React ES6 Ternary Operator',
            content:
              'The ternary operator is a shorthand way to write conditional statements in JavaScript. It is often used in React for rendering elements based on a condition. The syntax is condition ? exprIfTrue : exprIfFalse, which allows for concise and readable code.',
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
                            `,
          },
          {
            id: 11,
            title: 'React Render HTML',
            content:
              'In React, you can render HTML using JSX, which allows you to write HTML-like syntax within JavaScript. This makes it easy to create and manage UI components. JSX elements can be composed, and you can also embed JavaScript expressions directly within your HTML structure.',
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
                            `,
          },
          {
            id: 12,
            title: 'React JSX',
            content:
              'JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It makes it easier to create and visualize the structure of your UI components. JSX gets compiled to JavaScript function calls, enabling a smooth integration of UI and logic.',
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
                            `,
          },
          {
            id: 13,
            title: 'React Components',
            content:
              'Components are the building blocks of any React application. They allow you to break down your UI into reusable pieces, each managing its own state and logic. React supports two types of components: class components and functional components, with functional components being the modern approach due to their simplicity and hooks support.',
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
                            `,
          },
          {
            id: 14,
            title: 'React Class Components',
            content:
              'Class components are one of the two ways to create components in React. They allow you to manage local state and lifecycle methods. Class components extend React.Component and require a render() method to return the JSX to be displayed.',
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
                            `,
          },
          {
            id: 15,
            title: 'React Props',
            content:
              'Props (short for properties) are a way to pass data from parent components to child components in React. They allow you to customize components and make them reusable. Props are read-only and cannot be modified by the child component.',
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
                            `,
          },
          {
            id: 16,
            title: 'React Events',
            content:
              'Events in React are similar to HTML events, but they are named using camelCase syntax. React allows you to handle events directly in your JSX, making it easy to manage user interactions. You can pass event handlers as props to handle specific actions like clicks, changes, and more.',
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
                            `,
          },
          {
            id: 17,
            title: 'React Conditional Rendering',
            content:
              'Conditional rendering in React allows you to render different UI elements based on certain conditions. You can use JavaScript operators like if, &&, and the ternary operator to achieve this. This feature is useful for showing or hiding components based on state or props.',
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
                            `,
          },
          {
            id: 18,
            title: 'React Lists',
            content:
              'In React, you can render lists of data using the .map() method. This allows you to create a list of components dynamically based on an array of data. Each element in the list should have a unique key prop to help React identify which items have changed, been added, or removed.',
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
                            `,
          },
          {
            id: 19,
            title: 'React Forms',
            content:
              'Forms in React are controlled components, meaning that the form data is handled by the component’s state. This allows you to manage the input values and validate user input easily. React provides an intuitive way to handle form submissions and changes through event handlers.',
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
                            `,
          },
          {
            id: 20,
            title: 'React Router',
            content:
              'React Router is a library for managing navigation in React applications. It allows you to create single-page applications with dynamic routing. By using components like BrowserRouter, Route, and Link, you can define multiple routes and navigate between them without reloading the page.',
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
                            `,
          },
          {
            id: 21,
            title: 'React Memo',
            content:
              'React.memo is a higher-order component that optimizes functional components by memoizing their output. It prevents unnecessary re-renders by only re-rendering the component when its props change. This can lead to performance improvements in your React applications, especially with components that receive complex objects as props.',
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
                            `,
          },
          {
            id: 22,
            title: 'What is a Hook?',
            content:
              'Hooks are a new addition in React 16.8 that allow you to use state and other React features in functional components. They enable you to manage state, side effects, context, and more, without converting your components to class components. The most commonly used hooks are useState, useEffect, and useContext.',
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
                            `,
          },
          {
            id: 23,
            title: 'React useState Hook',
            content:
              'The useState hook is a built-in React hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state. This makes it easy to manage and track changes in state without needing class components.',
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
                            `,
          },
          {
            id: 24,
            title: 'React useEffect Hook',
            content:
              'The useEffect hook is a built-in React hook that allows you to perform side effects in functional components. It runs after the component renders and can be used for tasks like data fetching, subscriptions, or manually changing the DOM. You can control when useEffect runs by providing a dependency array.',
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
                            `,
          },
          {
            id: 25,
            title: 'React useContext Hook',
            content:
              'The useContext hook is a built-in React hook that allows you to access the value of a React context directly in your functional components. It simplifies state management and allows you to avoid prop drilling by providing a way to share values across the component tree without passing props manually at every level.',
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
                            `,
          },
          {
            id: 26,
            title: 'React useRef Hook',
            content:
              'The useRef hook is a built-in React hook that allows you to create mutable object references that persist for the full lifetime of a component. It is commonly used to access DOM elements directly or to hold mutable values that do not trigger re-renders when changed.',
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
                            `,
          },
          {
            id: 27,
            title: 'React useRef Hook',
            content:
              'The useRef hook is a built-in React hook that allows you to create mutable object references that persist for the full lifetime of a component. It is commonly used to access DOM elements directly or to hold mutable values that do not trigger re-renders when changed.',
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
                            `,
          },
          {
            id: 28,
            title: 'React useCallback Hook',
            content:
              'The useCallback hook is a built-in React hook that returns a memoized version of a callback function. It is useful for optimizing performance by preventing unnecessary re-creation of functions on every render, especially when passing callbacks to optimized child components that rely on reference equality to prevent re-renders.',
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
                            `,
          },
          {
            id: 29,
            title: 'React useMemo Hook',
            content:
              'The useMemo hook is a built-in React hook that allows you to memoize the result of a computation. This can help improve performance by preventing expensive calculations on every render unless the dependencies change. It is particularly useful for optimizing components that involve costly calculations or rendering large lists.',
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
                            `,
          },
          {
            id: 30,
            title: 'React Custom Hooks',
            content:
              'Custom hooks are a way to extract and reuse stateful logic in React applications. They allow you to create reusable logic that can be shared across multiple components while maintaining the benefits of hooks. A custom hook is simply a JavaScript function whose name starts with "use" and can call other hooks.',
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
                            `,
          },
          {
            id: 31,
            title: 'Control and Uncontrolled Components',
            content:
              'Controlled components are preferred when you need to control and validate user input, and when you need to keep the form input values synchronized with the state of your component. Uncontrolled components can be used when you want to quickly integrate forms with minimal state management, and when you do not need to keep track of every change in the input fields.',
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
                        `,
          },
          {
            id: 32,
            title: 'React Portal',
            content:
              'React Portals provide a way to render children into a DOM node that exists outside the hierarchy of the parent component. This is useful for modals, tooltips, and other overlay components.',
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
            note: 'Make sure to have a <div id="portal-root"></div> in your HTML file to render the portal.',
          },
          {
            id: 33,
            title: 'React Performance',
            content:
              'React Performance refers to the efficiency of a React application in rendering components and handling updates. Optimizing performance is crucial for providing a smooth user experience, especially in larger applications.',
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
            note: 'Always profile your application using the React DevTools to identify performance bottlenecks.',
          },
          {
            id: 34,
            title: 'React Context API',
            courseId: '4',
            content:
              'React Context API is a way to manage global state in a React application without having to pass props down manually at every level. It provides a way to share values between components without explicitly passing props through every level of the tree.',
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
            content:
              'Error boundaries are a way to catch JavaScript errors in a component tree and display a fallback UI instead of crashing the whole application. They work only on class components.',
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
            content:
              'Fragments allow you to group a list of children without adding extra nodes to the DOM. This helps to avoid unnecessary wrapper elements.',
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
            content:
              'Lazy loading allows you to load components only when they are needed, which can improve performance by reducing the initial load time of your application.',
            ex: 'Example:',
            function: '',
            code: `
                        import React, { Suspense, lazy } from 'react';
                        
                        const LazyComponent = lazy(() => import('./LazyComponent')); `,
          },
        ],
      });
      server.create('topic', {
        recipe: [
          {
            id: 1,
            title: 'Grid-Recipe',
            content:
              'Grid-Recipe ek aisa component hota hai jo data ko grid format mein dikhata hai aur us par operations perform karne ki suvidha deta hai, jaise search, delete, aur edit functionalities. Iske liye aapko kuch basic steps follow karne honge.',
            courseId: '5',
            ex: 'Example:',
            function: '',
            code: `
import { useEffect, useState } from "react"
import './studentsGrid.css'


export default function StudentData() {
    const [studentData, setStudentData] = useState([])
    const [search, setSearch] = useState('')
    const [edit, setEdit] = useState(null)
    const [updateData, setUpdateData] = useState({ name: "", Class: "", subject: "", Marks: "", Attendance: "" })

    const studentApi = async () => {
        const response = await fetch("/api/students")
        const result = await response.json()
        console.log(result.students)
        setStudentData(result.students)
    }
    useEffect(() => {
        studentApi()
    }, [])

    const searchfilter = async () => {
        const response = await fetch(/api/search?q={search})
        const result = await response.json()
        console.log(result)
        setStudentData(result)
    }

    useEffect(() => {
        searchfilter()
    }, [search])

    const handledeletebutton = async (id) => {
        console.log("Original :------", studentData)
        console.log(id)
        const response = await fetch(/api/delete/{id}, {
            method: "DELETE"
        })
        studentApi()
    }

    const handleEdit = async (id) => {
        console.log(id)
        const response = await fetch(/api/edit/{id}, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
        studentApi()
        setEdit(null)
    }

    const handleSave = (student) => {
        setEdit(student.id)
        setUpdateData({ ...student })
    }
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setUpdateData((predata) => ({ ...predata, [name]: value }))
    }

    const tableData = studentData.map((student, index) => (
        <tr key={student.id}>
            <td>
                {
                    edit === student.id ? (<input type="text" name="name" value={updateData.name} onChange={handleEditChange} />) : (student.name)
                }
            </td>
            <td>
                {
                    edit === student.id ? (<input type="number" name="Class" value={updateData.Class} onChange={handleEditChange} />) : (student.Class)
                }
            </td>
            <td>
                {
                    edit === student.id ? (<input type="text" name="subject" value={updateData.subject} onChange={handleEditChange} />) : (student.subject)
                }
            </td>
            <td>
                {
                    edit === student.id ? (<input type="number" name="Marks" value={updateData.Marks} onChange={handleEditChange} />) : (student.Marks)
                }
            </td>
            <td>
                {
                    edit === student.id ? (<input type="text" name="Attendance" value={updateData.Attendance} onChange={handleEditChange} />) : (student.Attendance)
                }
            </td>
            <td ><button onClick={() => handledeletebutton(student.id)}>{student.delete}</button></td>
            <td>{edit === student.id ? (<button onClick={() => handleEdit(student.id)}>save</button>)
                : (<button onClick={() => handleSave(student)}>{student.Edit}</button>)}</td>
        </tr>
    ))

    return (
        <>
            <div>
                <input type="search" placeholder="Search a name...."
                    onChange={(e) => setSearch(e.target.value)}
                    className="searchInput"
                />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Class</th>
                            <th>Subject</th>
                            <th>Marks</th>
                            <th>Attendance</th>
                            <th>Delete-Name</th>
                            <th>Edit-Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>
        </>
    )
}
    `,
          },
          {
            id: 2,
            title: 'Search functionality(Backend) with Mirage Js',
            content:
              'Using Mirage JS to implement search functionality on the backend involves creating a mock server that can respond to search requests based on the data you have. Here’s a step-by-step guide on how to set this up',
            courseId: '5',
            ex: 'Example',
            code: `
Step 1: Install Mirage JS: Make sure you have Mirage JS installed in your project. You can add it using npm or yarn:

npm install miragejs
# or
yarn add miragejs

Step 2: Set Up Mirage Server:
                this.get('/search', (schema, request) => {
                console.log(request)
                let qdata = request.queryParams.q.toLowerCase();
                let valueData = schema.students.all().models;
                if (qdata) {
                    valueData = valueData.filter(student => (
                        student.name.toLowerCase().includes(qdata) 
                    ))
                }
                return valueData

Step 3 : Fetch Data with Search
const [search, setSearch] = useState("");

const searchfilter = async () => {
    const response = await fetch(/api/search?q={search})
    const result = await response.json()
    console.log(result)
    setStudentData(result)
}

useEffect(() => {
    searchfilter()
}, [search])
})

return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );

                  `,
          },
          {
            id: 3,
            title: 'Delete functionality (Backend) with Mirage Js',
            content:
              'To implement delete functionality in your Mirage JS backend, you need to set up a route that handles DELETE requests for your recipes. Here’s how you can do it step by step:.',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
Step: 1: Make a delete API:
            this.delete('/delete/:id',(schema,request) => {
                console.log(request.params)
                let id = request.params.id
                console.log(id)
                return schema.students.find(id).destroy();
            })


Step: 2: How can be implement:
const handledeletebutton = async (id) => {
        console.log("Original :------", studentData)
        console.log(id)
        const response = await fetch(/api/delete/{id}, {
            method: "DELETE"
        })
        studentApi() - (ye vo hai jisse ki pura data render ho rha hai ui pr or usse data me item ko delete kr rhe ho)
    }
             `,
          },
          {
            id: 3,
            title: 'Edit functionality (Backend) with Mirage Js',
            content:
              'To implement edit functionality using Mirage JS on the backend, you will need to set up a route that handles PUT or PATCH requests for updating recipes. Here’s a step-by-step guide on how to do this:',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
Step: 1: Make a Edit API:
             this.put('/edit/:id', (schema, request) => {
                let id = request.params.id;
                let updatedData = JSON.parse(request.requestBody)
                let editDat = schema.students.find(id).update(updatedData)
                return editDat
            })


Step: 2: How can be implement:

const handleSave = (student) => {
    setEdit(student.id)
    setUpdateData({ ...student })
}
const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((predata) => ({ ...predata, [name]: value }))
}

const tableData = studentData.map((student, index) => (
    <tr key={student.id}>
        <td>
            {
                edit === student.id ? (<input type="text" name="name" value={updateData.name} onChange={handleEditChange} />) : (student.name)
            }
        </td>
        <td>
            {
                edit === student.id ? (<input type="number" name="Class" value={updateData.Class} onChange={handleEditChange} />) : (student.Class)
            }
        </td>
        <td>
            {
                edit === student.id ? (<input type="text" name="subject" value={updateData.subject} onChange={handleEditChange} />) : (student.subject)
            }
        </td>
        <td>
            {
                edit === student.id ? (<input type="number" name="Marks" value={updateData.Marks} onChange={handleEditChange} />) : (student.Marks)
            }
        </td>
        <td>
            {
                edit === student.id ? (<input type="text" name="Attendance" value={updateData.Attendance} onChange={handleEditChange} />) : (student.Attendance)
            }
        </td>
        <td ><button onClick={() => handledeletebutton(student.id)}>{student.delete}</button></td>
        <td>{edit === student.id ? (<button onClick={() => handleEdit(student.id)}>save</button>)
            : (<button onClick={() => handleSave(student)}>{student.Edit}</button>)}</td>
    </tr>
))
             `,
          },
          {
            id: 5,
            title: 'Tab-Recipe',
            content:
              'To implement Tab-Recipe using, of index. so we can pass a index to different item and content will render acoording to index. ',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
 import { useState } from "react";
import './tab.css'

const tab =[
    {id:"1",title:"Tab-1",context:"Render Tab-1 "},
    {id:"2",title:"Tab-2",context:"Render Tab-2 "},
    {id:"3",title:"Tab-3",context:"Render Tab-3 "},
    {id:"4",title:"Tab-4",context:"Render Tab-4 "},
]

export default function TabComponents(){
        const [activeIndex,setActiveIndex] =useState(0)

        const handleIndex =(index) => {
            setActiveIndex(index)
        }

        return(
            <>
            <ul>
                {tab.map((tab,index) => (
                    <li onClick={() => handleIndex(index)} className={activeIndex === index ? "active": ""}>{tab.title}</li>
                ))}
            </ul>
            {tab[activeIndex] && tab[activeIndex].context}
            </>
        )
    
}

             `,
          },
          {
            id: 6,
            title: 'How can be take Data',
            content:
              'you can take data either mirage js or make a json. so according to take data fetch all data in UI',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
 const tab =[
    {id:"1",title:"Tab-1",context:"Render Tab-1 "},
    {id:"2",title:"Tab-2",context:"Render Tab-2 "},
    {id:"3",title:"Tab-3",context:"Render Tab-3 "},
    {id:"4",title:"Tab-4",context:"Render Tab-4 "},
]`,
          },
          {
            id: 7,
            title: 'How can be implement with index',
            content:
              'To implement a tabbed recipe interface using an index to manage the active tab, you can modify the existing code. Here’s how to do it using an index-based approach:',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
export default function TabComponents(){
        const [activeIndex,setActiveIndex] =useState(0)

        const handleIndex =(index) => {
            setActiveIndex(index)
        }

        return(
            <>
            <ul>
                {tab.map((tab,index) => (
                    <li onClick={() => handleIndex(index)} className={activeIndex === index ? "active": ""}>{tab.title}</li>
                ))}
            </ul>
            {tab[activeIndex] && tab[activeIndex].context}
            </>
        )
    
}`,
          },
          {
            id: 8,
            title: 'Nested Comment-Recipe',
            content:
              'To create a nested comment Mirage Js structure in React.js, you can follow these steps::',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
export default function NestedComments({ comment }) {
    return (
        <>
            <ul>
                {comment.title}
                {comment.replies && comment.replies.map((comment) => (
                    <li>
                        <NestedComments comment={comment} />
                    </li>
                ))}

            </ul>
        </>
    )
}
`,
          },
          {
            id: 9,
            title: 'How can be take Nexted  Data',
            content:
              'To create a nested Data with Mirage Js and we can make a data like below structure:',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
 const commentData = [
    {
      id: 1,
      title: 'This is the first comment.',
      replies: [
        {
          id: 2,
          title: 'This is a reply to the first comment.',
          replies: [
            {
              id:2.1,
              title: "This is first nexted comments"
            },
            {
              id:2.2,
              title: "This is first final comments",
              replies:[
                {
                  id:"2.3",
                  title:"First Finally Comments"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'This is the second comment.',
      replies: [
        {
          id: 2,
          title: 'This is a reply to the second comment.',
          replies: []
        }
      ]
    },
  ]

  
`,
          },
          {
            id: 10,
            title: 'How can be implement on UI',
            content: 'we can implement a nested data thriught by Ul & li tags:',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import './App.css'
import NestedComments from './nested-comments/nestedComments'
function App() {
  const commentData = [
    {
      id: 1,
      title: 'This is the first comment.',
      replies: [
        {
          id: 2,
          title: 'This is a reply to the first comment.',
          replies: [
            {
              id:2.1,
              title: "This is first nexted comments"
            },
            {
              id:2.2,
              title: "This is first final comments",
              replies:[
                {
                  id:"2.3",
                  title:"First Finally Comments"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'This is the second comment.',
      replies: [
        {
          id: 2,
          title: 'This is a reply to the second comment.',
          replies: []
        }
      ]
    },
  ]

  return (
    <>
      <h2>Nested Comment</h2>
      {commentData.map((comment) => (
        <NestedComments comment={comment}/>
      ))}
    </>
  )
}

export default App


`,
          },
          {
            id: 11,
            title: 'Nested Menu- Recipe',
            content: 'we can implement a nexted menu throught by Ul & li tags:',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
export default function NestedMenu({menu,handleNextedItem,handleShow,isOpen}){
    console.log(handleShow)
    return (
        <>
        <ul>
           <span onClick={handleShow}>
           {menu.title}
           </span> 
            {isOpen && menu.nestedMenu && menu.nestedMenu.map((menu) => (
                <NestedMenu menu={menu} handleNextedItem={handleNextedItem} />
            ))}
        </ul>
        </>
    )
}

`,
          },
          {
            id: 12,
            title: 'How can be take Nested Data',
            content: 'we can implement a nested menu throught by Ul & li tags:',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
const nextedMenu =[
        {
            id:"1",
            title:"index",
        },
        {
            id:"2",
            title:"Starred",
        },
        {
            id:"3",
            title:"Snoozed",
        },
        {
            id:"4",
            title:"Sent",
        },
        {
            id:"5",
            title:"Drift",
            nestedMenu:[
                {
                    id:"5.1",
                    title:"Social",
                },
                {
                    id:"5.2",
                    title:"Updates"
                },
                {
                    id:"5.3",
                    title:"Forms"
                },
                {
                    id:"5.4",
                    title:"Promotions"
                }
            ]
        },
        {
            id:"6",
            title:"Categories",
            nestedMenu:[
                {
                    id:"7",
                    title:"Social"
                },
                {
                    id:"8",
                    title:"Updates"
                },
                {
                    id:"9",
                    title:"Forms"
                },
                {
                    id:"10",
                    title:"Promotions"
                }
            ]
        }
]
export default nextedMenu

`,
          },
          {
            id: 13,
            title: 'How can be implement on UI',
            content: 'we can implement a nested menu throught by Ul & li tags:',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import './App.css'
import { useState,useEffect } from 'react'
import NestedMenu from './nested-Menu/nestedMenu'

function App() {
  const [nestMenu, setNestMenu] = useState([])
  const [show, setShow] = useState(false)
  
  const nestMenuData = async () => {
    const response = await fetch('/api/nextedMenus')
    const result = await response.json()
    console.log(result.nextedMenus)
    setNestMenu(result.nextedMenus)
  }

  useEffect(() => {
      nestMenuData()
  }, [])

  const handleShow = (id) => {
      setShow(show === id ? null : id)
  }

  const handleNextedItem =(id) => {
      alert(id)
  }


  return (
    <> 
      <h2>Nested Menu</h2>
      {nestMenu.map((item) => (
          <NestedMenu menu={item} handleShow={() => handleShow(item.id)} handleNextedItem ={handleNextedItem} isOpen={show === item.id}/>
      ))}
    </>
  )
}
export default App


`,
          },
          {
            id: 14,
            title: 'Router-Recipe',
            content:
              'In React, routing is typically managed using a library called React Router. It allows you to handle navigation between different components and pages in your application without reloading the entire page. Here’s a quick overview of how to set it up and use it.',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
Installation: 
First, install React Router using npm or yarn:
npm install react-router-dom

import React from 'react'
import { BrowserRouter as  Router, Routes, Route,Link,useParams,Outlet,Navigate,useSearchParams,useNavigate } from 'react-router-dom'

import './App.css'
import FirstPage from './Router-Path/firstRouterPage'

function Home() {
    const navigate = useNavigate()

  function handleGoToAbout(){
      navigate('/about')
  }

  return (
    <h2>
      Welcome to Home
      <button onClick={handleGoToAbout}>Go to About</button>
    </h2>
  )
}


function About() { 
  return (
    <h2>
      Welcome to About
      <Link to={'team'}>Team</Link>
      <Link to={'history'}>History</Link>
      <Outlet />
    </h2>
  )
}

function Navigation(){
  return(
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/user/123456'>User Profile</Link>
        </li>
        <li>
          <Link to='/user/987654/account/abcder'>Account</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/search/?q=Hello'>Search Page</Link>
        </li>
        <li>
          <Link to='/sa/ty/am'>Satyam Page</Link>
        </li>
        <li>
          <Link to='/go/firstPage'>Check Skills</Link>
        </li>
      </ul>
    </nav>
  )
}

function UserProfile(){
  const useParam = useParams()
  console.log(useParam)
  return(
    <h2>User Profile of {useParam.userId}</h2>
  )
}

function AccountInfo(){
  const params =useParams()
  console.log(params)

  return (
    <h2>
      Account id is {params.accountId}
    </h2>
  )
}

function Team(){
  return(
    <h2>
      Our Teams
    </h2>
  )
}

function History(){
  return(
    <h2>
      Our History
    </h2>
  )
}

function Dashboard(){
  return(
    <h2>
        Welcome to Dashboard
    </h2>
  )
}

function ProtectedRoute({isLoggedIn,children}){

  return(
      isLoggedIn ? children : <Navigate to={'/'} />
  )
}

function SearchPage(){
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  return(
    <h2>
      Search Result for: {query}
    </h2>
  )
}

function NotFound(){
  return(
    <h2>
      404 Page not Found
    </h2>
  )
}

function SatyamPage(){
  return(
    <>
    WELCOME TO SATYAM PAGE
    </>
  )
}
function App() {
  const isLoggedIn =true
  return (
    <Router>
      <Navigation />
      <Routes>
      <Route path='*' element={<NotFound />}/>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='team' element={<Team />} />
          <Route path='history' element={<History />}/>
        </Route>
        <Route path='/user/:userId' element={<UserProfile />} />
        <Route path='/user/:userId/account/:accountId' element={<AccountInfo />} />
        <Route path='/dashboard' element={<ProtectedRoute isLoggedIn={isLoggedIn}>
          <Dashboard />
        </ProtectedRoute>}/>
        <Route path='/search' element={<SearchPage /> }/>
        <Route path='/sa/ty/am' element={<SatyamPage />}/>
        <Route path='/go/firstPage' element={<FirstPage />}/>
      </Routes>
    </Router>
  )
}

export default App


`,
          },
          {
            id: 15,
            title: 'How can be Setup Step by Step',
            content: 'In React, We can be setup one by one.',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
Basic Setup: 

1.Import Necessary Components:In your main application file (usually App.js), import the necessary components from react-router-dom:

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

2. Define Your Routes: Wrap your application with the Router component, and use Route components to define the different routes:

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

Components Explained
Router: This component wraps the entire application and keeps the UI in sync with the URL.
Route: This component is used to define a route. It takes a path prop and a component prop (or a render prop) to specify what should be displayed when the path matches.
Switch: This component renders the first child Route that matches the location, ensuring that only one route is rendered at a time.
`,
          },
          {
            id: 16,
            title: 'Navigating Between Routes',
            content:
              'To navigate between different routes, you can use the Link or NavLink components:',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

Additional Features
Nested Routes: You can create nested routes for more complex applications.
Route Parameters: Use route parameters to pass dynamic data in the URL.
Redirects: Use the Redirect component to redirect users to different routes.

Example of Route Parameters: Here's how you might set up a route with parameters:

<Route path="/user/:id" component={UserProfile} />

In the UserProfile component, you can access the id parameter using the useParams hook:
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}

`,
          },
          {
            id: 17,
            title: ' What is React Router? How do you install React Router?',
            content:
              'React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `

You can install React Router using npm or yarn: 
Using npm: 
npm install react-router-dom
Using Yarn:
yarn add react-router-dom
`,
          },
          {
            id: 18,
            title: 'What are the benefits of using React Router?',
            content:
              'Declarative Routing, Dynamic Routing, Code Splitting, History Management, Server-Side Rendering',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
1. Declarative Routing: React Router provides a declarative way to define routing in your application using JSX syntax. 
2. Dynamic Routing: React Router supports dynamic routing, that allows you to define routes with parameters that can change based on user input or application state. 
3. Code Splitting: React Router supports code splitting that allows you to split your application into smaller chunks that are loaded on demand.
4. History Management: React Router provides a history API that allows you to programmatically navigate between different pages in your application.
5. Server-Side Rendering: React Router is compatible with server-side rendering (SSR) frameworks like Next.js..
`,
          },
          {
            id: 19,
            title: 'Modal-Recipe',
            content:
              'Creating a modal for displaying a recipe in React involves several steps, including setting up the modal component, styling it, and managing its visibility through state. Heres a step-by-step guide to building a simple recipe modal',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import './modal.css'
export default function Modal({ isopen, onclose, children }) {
    if (!isopen) return null
    return (
        <>
            <div className='modal-overlay'>
                <div className="modal-content">
                    <button onClick={onclose}>Close</button>
                    {children}
                </div>
            </div>
        </>
    )
} 

function App() {
    const [showModal,setShowModal] = useState(false)
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);  
    return (
      <>
        <button onClick={handleOpenModal}>Open-Modal</button>
        <Modal onclose={handleCloseModal}isopen={showModal} >
            <h1>I am Open Right Now</h1>
        </Modal>
      </>
    )
  }
  
  export default App
`,
          },
          {
            id: 20,
            title: 'Modal Reuseable Components',
            content:
              'Creating a modal for displaying a recipe in React involves several steps, including setting up the modal component, styling it, and managing its visibility through state. Heres a step-by-step guide to building a simple recipe modal',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import './modal.css'
export default function Modal({ isopen, onclose, children }) {
    if (!isopen) return null
    return (
        <>
            <div className='modal-overlay'>
                <div className="modal-content">
                    <button onClick={onclose}>Close</button>
                    {children}
                </div>
            </div>
        </>
    )
} 
`,
          },
          {
            id: 21,
            title: 'Visible-not Visible',
            content:
              'In React, you can control the visibility of an element using several methods:',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
1. Conditional Rendering: This is the most common approach. You can use a conditional statement (e.g., ternary operator or && operator) to render the element based on a state variable.
import { useState } from "react"

export default function ShowHide(){
    const [visible,setVisible] = useState(false)
    
    const handleVisble = () => {
        setVisible((previsible) => (!previsible))
    }
    return(
        <>
        <button onClick={handleVisble}>Click me </button>
        {visible && (<h2 onClick={() => alert("Hello ")}>Welcome to Visible Content</h2>)}
        </>
    )
}
`,
          },
          {
            id: 22,
            title: 'How to applied a Functionlity to toggle',
            content:
              'In React, you can control the visibility of an element using several methods:',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
1. Conditional Rendering: This is the most common approach. You can use a conditional statement (e.g., ternary operator or && operator) to render the element based on a state variable.
import { useState } from "react"

export default function ShowHide(){
    const [visible,setVisible] = useState(false)
    
    const handleVisble = () => {
        setVisible((previsible) => (!previsible))
    }
    return(
        <>
        <button onClick={handleVisble}>Click me </button>
        {visible && (<h2 onClick={() => alert("Hello ")}>Welcome to Visible Content</h2>)}
        </>
    )
}
`,
          },
          {
            id: 23,
            title: 'Search & Delete without Mirage Js',
            content:
              "If you're looking to implement search and delete functionality in a React application without using Mirage JS, here's a breakdown of how you can achieve it:",
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import { useEffect } from "react"
import { useState } from "react"
import Input from "../Common-Components/input"
import Button from "../Common-Components/button"

export default function StudentsInfo() {
    const [studentData, setStudentsData] = useState([])
    const [search, setSearch] = useState('')

    const studentInfo = async () => {
        const response = await fetch('/public/Data/students.json')
        const result = await response.json()
        console.log(result)
        setStudentsData(result)
    }
    useEffect(() => {
        studentInfo()
    }, [])

    const filterStudents = studentData.filter((itm) => {
        return itm.name.toLowerCase().includes(search.toLowerCase())
    })
    console.log(filterStudents)

    const handleSeach = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    const handleDelte = (id) => {
        const deleteStudents= studentData.filter((item) => item.id !==id)
        setStudentsData(deleteStudents)
    }
    return (
        <>
            <Input value={search} onchange={handleSeach} type={"search"} />
            <ul>
                {filterStudents.map((itm,index) => (
                    <>
                        <li key={itm.id}>{itm.name} <Button onclick={() => handleDelte(itm.id)}>{itm.deletBtn}</Button></li>
                    </>
                ))}
            </ul>
        </>
    )
}
`,
          },
          {
            id: 24,
            title: 'How to applied a Functionlity to Search implement.',
            content:
              'To implement search functionality in React.js, you can follow these steps:',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
export default function StudentsInfo() {
    const [studentData, setStudentsData] = useState([])
    const [search, setSearch] = useState('')

    const studentInfo = async () => {
        const response = await fetch('/public/Data/students.json')
        const result = await response.json()
        console.log(result)
        setStudentsData(result)
    }
    useEffect(() => {
        studentInfo()
    }, [])

    const filterStudents = studentData.filter((itm) => {
        return itm.name.toLowerCase().includes(search.toLowerCase())
    })
    console.log(filterStudents)

    const handleSeach = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    return (
        <>
            <Input value={search} onchange={handleSeach} type={"search"} />
            <ul>
                {filterStudents.map((itm,index) => (
                    <>
                        <li key={itm.id}>{itm.name}</li>
                    </>
                ))}
            </ul>
        </>
    )
}
`,
          },
          {
            id: 25,
            title: 'How to applied a Functionlity to Delete.',
            content:
              'To implement Delete functionality in React.js, you can follow these steps:',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
export default function StudentsInfo() {
    const [studentData, setStudentsData] = useState([])
    const studentInfo = async () => {
        const response = await fetch('/public/Data/students.json')
        const result = await response.json()
        console.log(result)
        setStudentsData(result)
    }
    useEffect(() => {
        studentInfo()
    }, [])
    
      const handleDelte = (id) => {
        const deleteStudents= studentData.filter((item) => item.id !==id)
        setStudentsData(deleteStudents)
    }

    return (
        <>
            <ul>
                {filterStudents.map((itm,index) => (
                    <>
                        <li key={itm.id}>{itm.name}</li>
                    </>
                ))}
            </ul>
        </>
    )
}
`,
          },
          {
            id: 26,
            title: 'Weather App Recipe',
            content: 'To make a weather API',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import { useState } from "react";
import './weather.css'

export default function Weather() {
    const [cityName, setCityName] = useState('')
    const [weatherData, setWeatherData] = useState(null)
    const apiKey = "5cd03ffa4ade7224dfb98adb9b6ca421"

    const getWeather = async () => {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={apiKey}&units=metric")
        const result = await response.json();
        console.log(result)
        setWeatherData(result)
    }

    return (
        <>
            <div className="weather-container">
                <input type="text" placeholder="Search a weather" onChange={(e) => setCityName(e.target.value)} />
                <button onClick={getWeather}>Get Weather</button>
                {weatherData && (
                    <div className="weather-info ">
                        <h2>City Name: {weatherData.name}</h2>
                        <p>Temp:-{weatherData.main.temp}</p>
                        <p>Description:- {weatherData.weather[0].description}</p>
                    </div>
                )}

            </div>
        </>
    )
}
`,
          },
          {
            id: 27,
            title: 'How can take API & ApiKey',
            content: 'we can make a api throught openweather.com .',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
const getWeather = async () => {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={apiKey}&units=metric")
        const result = await response.json();
        console.log(result)
        setWeatherData(result)
    }
`,
          },
          {
            id: 28,
            title: 'Custom Hooks',
            content:
              'In React JS, custom hooks are JavaScript functions that let you extract and reuse stateful logic between different components. They allow you to encapsulate complex logic and share it across your application, making your components cleaner and more maintainable.',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import { useEffect } from "react";
import { useState } from "react";

 const useFetch = (url) => {
        const [data,setData] =useState([]);
        const [title,setTitle] =useState([])
        const [loading,setLoading] = useState(true);

        useEffect(() => {
            const fetchUrl = async() => {
                const response = await fetch(url)
                const result = await response.json()
                setData(result)
                setTitle(result)
                setLoading(false)
            }
            fetchUrl()
        },[url])
        return {url,data,loading,title}
}   

export default useFetch
`,
          },
          {
            id: 29,
            title: 'useFetch API',
            content:
              'In React JS, custom hooks are JavaScript functions that let you extract and reuse stateful logic between different components. They allow you to encapsulate complex logic and share it across your application, making your components cleaner and more maintainable.',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import { useEffect } from "react";
import { useState } from "react";

 const useFetch = (url) => {
        const [data,setData] =useState([]);
        const [title,setTitle] =useState([])
        const [loading,setLoading] = useState(true);

        useEffect(() => {
            const fetchUrl = async() => {
                const response = await fetch(url)
                const result = await response.json()
                setData(result)
                setTitle(result)
                setLoading(false)
            }
            fetchUrl()
        },[url])
        return {url,data,loading,title}
}   

export default useFetch
`,
          },
          {
            id: 30,
            title: 'use Counter',
            content:
              'In React JS, The useCounter hook is useful for managing a counter value with additional options for minimum and maximum limits. .',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import { useState } from "react";

export default function useCouter(){
    const [count,setCount] = useState(0)

    function handleIncrese(){
        setCount(count+1)
    }
    function handleDecrese(){
        setCount(count-1)
    }
    return {count,handleDecrese,handleIncrese}
}
`,
          },
          {
            id: 31,
            title: 'Card Components',
            content:
              'In Card Compoents helpful with render a product List with title , content with img.',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import './card.css'
const Card = ({title,content,imageUrl}) => {
        return(
            <>
            <div className="card">
                    {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
                    <h2 className="card-title">{title}</h2>
                    <p className="card-content">{content}</p>
            </div>
            </>
        )
}

export default Card
`,
          },
          {
            id: 32,
            title: 'How can be use card Components',
            content:
              'In Card Compoents helpful with render a product List with title , content with img.',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import './App.css'
import Card from './card/card'

const animalData = [
  {
    id: "1", title: "cat", content: "Hey , I am cat", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },
  {
    id: "2", title: "Donkey", content: "Hey, I am Donkey dog", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQgnL2QX7ZxSVdUqoqSkWKAUptgZBNUUIsg&s"
  },
  {
    id: "3", title: "Leopard", content: "Hey, I am Leopard", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nhiRcld2xouR6aeQa55eIX6JUohHqYQo4Q&s"
  },
  {
    id: "4", title: "Polar bear", content: "Hey,I am Polar bear", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  }
]

function App() {

  return (
    <>
      {animalData.map((item) => (
        <Card title={item.title} imageUrl={item.imageUrl} content={item.content} />
      ))}

    </>
  )
}

export default App

`,
          },
          {
            id: 33,
            title: 'Components',
            content:
              'In React, components are the building blocks of the user interface (UI). A component is essentially a self-contained, reusable piece of code that defines how a part of the UI should look or behave. Components can be either functional components or class components',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
Types of Components in React:
Functional Components
Class Components
Pure Components
Higher-Order Components (HOCs)
Presentational and Container Components
`,
          },
          {
            id: 34,
            title: 'Function Compoenent',
            content:
              'Functional components are simpler and are typically used for presenting UI and handling simple logic. They are defined as JavaScript functions that return JSX (JavaScript XML)',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
export default function FunctionComponents({message}){
    return(
        <>
        <h3>{message}</h3>
        </>
    )
}
`,
          },
          {
            id: 35,
            title: 'Class Compoenents',
            content:
              'Class components are more traditional and were the primary way to define components in React before the introduction of Hooks. These components use ES6 classes and must extend React.Component (or React.PureComponent for optimization).',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import { Component } from "react";
import React from "react";
class Greeting extends Component{
    render(){
        return <h3>{this.props.message}</h3>
    }
}

export default Greeting
`,
          },
          {
            id: 36,
            title: 'use Arrow Key Down-up',
            content:
              'Import the useArrowKeyNavigation hook into your component.Pass an array of options to the hook.Use the returned activeIndex to highlight the focused option or perform any other actions based on the navigation..',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import { useEffect, useState } from "react"

const useArrowPress = (data,onEnter) => {
    const [activeIndex,setActiveIndex] = useState(0);

    const handlekeyDown =(event) => {
        if (event.key === "ArrowUp") {
            setActiveIndex((preIndex) => Math.max(preIndex - 1, 0))
            console.log(activeIndex)
        } else if (event.key === "ArrowDown") {
            setActiveIndex((preIndex) => Math.min(preIndex + 1, data.length - 1))
            console.log(activeIndex)
        } else if (event.key === "Enter") {
            onEnter(data[activeIndex])
        }
    }
    useEffect(() => {
        window.addEventListener('keydown',handlekeyDown)
        return () => {
            window.removeEventListener('keydown',handlekeyDown)
        }
    },[data,activeIndex])

    return {activeIndex}
}   

export default useArrowPress;
`,
          },
          {
            id: 37,
            title: 'useLocalStorage Hooks',
            content:
              'This custom hook allows you to read from and write to localStorage while ensuring that the state remains in sync.',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `

import { useState } from "react";

export default function useLocalStorage(key,initialValue){
        const storeValue = localStorage.getItem(key)
        const parseValue = storeValue ? JSON.parse(storeValue) :initialValue;

        const [value,setValue] = useState(parseValue)

        const setStoredValue = (newValue) => {
            setValue(newValue);
            localStorage.setItem(key,JSON.stringify(newValue))
        }
        return [value,setStoredValue]
}

How can be use:
<h2>Custom uselocalstorage Hook</h2>
<h3>{name}</h3>
<input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
`,
          },
          {
            id: 38,
            title: 'Higher order Component',
            content:
              'A Higher-Order Component (HOC) is a pattern in React that allows you to reuse component logic. HOCs are functions that take a component as an argument and return a new component that has enhanced functionality. They don’t modify the original component; instead, they add extra behavior or functionality by wrapping the component.',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
`,
          },
          {
            id: 39,
            title: 'Audio Player Setup',
            content: 'we can make a Audio Player Setup',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import { useRef, useState } from "react"
import './audionplayer.css'

const AudioPlayer = () => {
    const [isplaying, setIsPlaying] = useState(false)
    const [currentSong,setCurrentSong] = useState(0)
    const audioRef = useRef(null)

    const [songs] = useState([
        {
            id:"1",
            title:"Song-1",
            artist: 'Artist 1',
            src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            id:"2",
            title:"Song-2",
            artist: 'Artist 2',
            src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            id:"3",
            title:"Song-3",
            artist: 'Artist 3',
            src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        }
    ])


    const togglePlay = () => {
        if (isplaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isplaying)
    }

    const handlePreviosSong = () => {
        setCurrentSong((presong) => (presong-1 + songs.length) % songs.length)
    }

    const handleNextSongs = () => {
        setCurrentSong((presong) => (presong+1) % songs.length)
    }

    return (
        <>
        <div className="audio-player">
            <h2>{songs[currentSong].title}</h2>
            <audio ref={audioRef} src={songs[currentSong].src} onEnded={handleNextSongs} controls />
        </div>
        <div className="controls">
            <button onClick={handlePreviosSong}>Previous Song</button>
            <button onClick={togglePlay}>{isplaying ? 'pause' : "play"}</button>
            <button onClick={handleNextSongs}>Next Song</button>
        </div>
        </>
    )
}

export default AudioPlayer

.audio-player {
    text-align: center;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 10px;
    max-width: 400px;
    margin: auto;
  }
  
  .controls{
    text-align: center;
  }
  .controls button {
    margin: 10px;
    padding: 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .controls button:hover {
    background-color: #0056b3;
  }
  
`,
          },
          {
            id: 40,
            title: 'How can be use audio Player setup',
            content: 'How can be use audio Player setup.',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
const [songs] = useState([
        {
            id:"1",
            title:"Song-1",
            artist: 'Artist 1',
            src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            id:"2",
            title:"Song-2",
            artist: 'Artist 2',
            src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            id:"3",
            title:"Song-3",
            artist: 'Artist 3',
            src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        }
    ])

`,
          },
          {
            id: 41,
            title: 'usewindowWidth Hook',
            content:
              'We can use usewindowWidth and calculate window width resize',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import { useEffect, useState } from "react"

const useWindowWidth =() => {
    const [width,setWidth] = useState(window.innerWidth)

    useEffect(() =>{
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize',handleResize)
        return () => window.removeEventListener('resize',handleResize)
    },[])
    return {width}
}
export default useWindowWidth
`,
          },
          {
            id: 42,
            title: 'Image-Gallery',
            content: 'We can make a Image-Gallery.',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import { useState } from "react"
import './imageGallery.css'
const imageGallery = [
    {
        id:"1",
        url:"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
        name:"Cat-1"
    },
    {
        id:"2",
        url:"https://static.vecteezy.com/system/resources/thumbnails/024/646/930/small_2x/ai-generated-stray-cat-in-danger-background-animal-background-photo.jpg",
        name:"Cat-2"
    },
    {
        id:"3",
        url:"https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=",
        name:"Cat-3"
    },
    {
        id:"4",
        url:"https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
        name:"Cat-4"
    },
    {
        id:"5",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSb4lwHgV4u_7iYRzpvKgyGeM2UM6Nqex8Q&s",
        name:"Cat-5"
    },
    {
        id:"6",
        url:"https://static.vecteezy.com/system/resources/thumbnails/028/699/790/small_2x/white-cat-pink-sofa-generate-ai-photo.jpg",
        name:"Cat-6"
    }
]

export default function ImageGalleryCom(){
    const [imageIndex,setImageIndex] = useState(0)

    const handlePrevios =() => {
        setImageIndex((preindex) => preindex === 0 ? imageGallery.length-1 : preindex-1)
    }
    const handleNext = () => {
        setImageIndex((preindex) => preindex === imageGallery.length-1? 0: preindex+1)
    }
    return(
        <>
        <div className="gallery">
            <img src={imageGallery[imageIndex].url}/>
            <h2>{imageGallery[imageIndex].name}</h2>
        </div>
        <div className="buttons">
        <button onClick={handlePrevios}>Pre</button>
        <button onClick={handleNext}>Next</button>

        </div>
        </>
    )
}

`,
          },
          {
            id: 43,
            title: 'How can be take Data for gallery',
            content: 'How can be take Data for gallery',
            courseId: '5',
            ex: 'Examples:',
            function: '',
            code: `
import { useState } from "react"
import './imageGallery.css'
const imageGallery = [
    {
        id:"1",
        url:"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
        name:"Cat-1"
    },
    {
        id:"2",
        url:"https://static.vecteezy.com/system/resources/thumbnails/024/646/930/small_2x/ai-generated-stray-cat-in-danger-background-animal-background-photo.jpg",
        name:"Cat-2"
    },
    {
        id:"3",
        url:"https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=",
        name:"Cat-3"
    },
    {
        id:"4",
        url:"https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
        name:"Cat-4"
    },
    {
        id:"5",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSb4lwHgV4u_7iYRzpvKgyGeM2UM6Nqex8Q&s",
        name:"Cat-5"
    },
    {
        id:"6",
        url:"https://static.vecteezy.com/system/resources/thumbnails/028/699/790/small_2x/white-cat-pink-sofa-generate-ai-photo.jpg",
        name:"Cat-6"
    }
]


`,
          },
        ],
      });
      server.create('topic', {
        reactRevision: [
          {
            id: 1,
            title:
              'Question.1 Can you explain the difference between == and === in JavaScript? Why would you prefer one over the other in certain scenarios?',
            content:
              'In JavaScript, both == and === are comparison operators, but they behave differently when comparing values. Here s a breakdown of their differences:',
            courseId: '6',
            ex: 'Example:',
            function: '',
            code: `
1. == (Loose Equality / Abstract Equality): The == operator compares two values for equality, but check type of value.

'5' == 5      // true, because '5' is coerced into a number
0 == false    // true, because false is coerced into 0
null == undefined  // true, special case in JavaScript

2. === (Strict Equality): The === operator compares both value and type.

'5' === 5     // false, because the types are different (string vs. number)
0 === false   // false, because the types are different (number vs. boolean)
null === undefined // false, because null and undefined are not the same type

`,
          },
          {
            id: 2,
            title:
              'Question.2 Can you describe the virtual DOM in React and explain how it helps improve the performance of a web application?',
            content:
              'The virtual DOM is a concept in React that helps enhance the performance of web applications by creating an abstract representation of the real DOM. Here s how it works and why it s beneficial:',
            courseId: '6',
            ex: 'Example',
            code: `
What is the virtual DOM? The virtual DOM is a lightweight copy of the real DOM, stored in memory. It is a JavaScript object that React uses to keep track of changes that 
need to be made to the actual DOM.

How does it work? When the state of a React component changes, React updates the virtual DOM instead of updating the real DOM directly. This process involves:

Rendering the changes in the virtual DOM: React creates a new virtual DOM tree representing the updated state.
Diffing: React compares the new virtual DOM with the previous version to find the minimal set of changes.
Reconciliation: React calculates the most efficient way to apply these changes and updates only the parts of the real DOM that need to change.
Why does it improve performance?

Minimizes direct DOM manipulations: Updating the real DOM is relatively slow because of the reflow and repaint processes that the browser performs. 
By batching and optimizing updates, React ensures minimal interaction with the real DOM.
Efficient updates: The diffing algorithm allows React to apply changes in a smart, targeted way, preventing unnecessary re-renders and enhancing the app's performance.
`,
          },
          {
            id: 3,
            title:
              'Question.3 Can you explain the purpose of useEffect in React and provide an example of a common use case where you would use it?',
            content:
              'The useEffect hook in React is used to handle side effects in functional components. Side effects are operations that affect something outside the scope of the function component, such as data fetching, subscriptions, or manually changing the DOM..',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
The useEffect hook in React is used to handle side effects in functional components. Side effects are operations that affect something outside the scope of the function component, such as data fetching, subscriptions, or manually changing the DOM.

Purpose of useEffect:
It allows you to perform side effects after a component renders or updates.
It can be used to mimic lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
The hook runs after the render cycle is completed, ensuring that the UI is updated before side effects occur.

Common Use Cases for useEffect:
Data fetching from an API when the component loads.
Subscribing to events like window resize or scroll.
Setting up and clearing timers (e.g., setInterval or setTimeout).
Cleaning up when a component unmounts, such as removing event listeners
             `,
          },
          {
            id: 4,
            title:
              'Question.4  Can you explain the concept of lifting state up in React, and provide an example scenario where this would be necessary?',
            content:
              'The concept of lifting state up in React refers to the process of moving shared state to a common parent component so that it can be passed down as props to child components. This technique is used when multiple components need to share and synchronize state.',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
The concept of lifting state up in React refers to the process of moving shared state to a common parent component so that it can be passed down as props to child components. This technique is used when multiple components need to share and synchronize state.

Why lift state up?

When two or more components need to share and reflect the same state, it's efficient to keep that state in their closest common ancestor.
This ensures that updates in one child component can propagate to others seamlessly, maintaining consistency in the UI.
Example Scenario: Suppose you have a form with two input fields, and you want to display their combined values in a third component. You can lift the state to their common parent component so both inputs can share and update the state.

import React, { useState } from 'react';

function ParentComponent() {
  // Lift the state up to the parent component
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  return (
    <div>
      <InputComponent
        value={inputValue1}
        onChange={e => setInputValue1(e.target.value)}
      />
      <InputComponent
        value={inputValue2}
        onChange={e => setInputValue2(e.target.value)}
      />
      <CombinedOutput value1={inputValue1} value2={inputValue2} />
    </div>
  );
}

function InputComponent({ value, onChange }) {
  return <input type="text" value={value} onChange={onChange} />;
}

function CombinedOutput({ value1, value2 }) {
  return <p>Combined Values: {value1} {value2}</p>;
}
             `,
          },
          {
            id: 5,
            title:
              'Question.5 What are higher-order components (HOCs) in React? Can you describe a situation where using an HOC would be beneficial and provide an example of how to create one?',
            content:
              'Higher-order components (HOCs) in React are functions that take a component and return a new component. They allow you to reuse component logic across multiple components and are a common pattern for cross-cutting concerns, such as access control, logging, or theming.',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
Definition: An HOC is essentially a function with the following signature:

const EnhancedComponent = higherOrderComponent(WrappedComponent);
Here, WrappedComponent is the original component, and EnhancedComponent is the new, modified version that adds extra functionality.

Why use HOCs?

They help abstract and reuse common logic without duplicating code.
They are used to enhance components with additional props, state, or behavior.
They can be used to implement common patterns like conditional rendering, data fetching, or context-based logic.
Example Use Case: Imagine you need to add authentication checks to multiple components to ensure they only render if the user is logged in.

Creating a Basic HOC:

import React from 'react';

// HOC that adds authentication logic to a component
function withAuth(WrappedComponent) {
  return function EnhancedComponent(props) {
    const isAuthenticated = true; // Replace this with real authentication logic

    if (!isAuthenticated) {
      return <div>Please log in to access this content.</div>;
    }

    return <WrappedComponent {...props} />;
  };
}

// Sample component that will be wrapped
function Dashboard(props) {
  return <div>Welcome to the dashboard, {props.user}!</div>;
}

// Wrapping the Dashboard component with the HOC
const ProtectedDashboard = withAuth(Dashboard);

// Usage
function App() {
  return <ProtectedDashboard user="John" />;
}
             `,
          },
          {
            id: 6,
            title:
              'Question.6 What are controlled and uncontrolled components in React? Can you explain the differences between them and provide examples of when you might use each?',
            content:
              "Controlled Components: In a controlled component, React manages the form element’s value via state. The input field's value is controlled by the value prop, and updates to that value are handled by event handlers like onChange, which update the component’s state.",
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
Controlled Components: In a controlled component, React manages the form element’s value via state. The input field's value is controlled by the value prop, and updates to that value are handled by event handlers like onChange, which update the component’s state.

When to use: Useful when you need to track or manipulate form data within React, such as for validation, conditionally rendering UI, or handling dynamic form inputs.
Example:

import React, { useState } from 'react';

function ControlledComponent() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value); // Update state on input change
  };

  return (
    <div>
      <input
        type="text"
        value={value} // Controlled by state
        onChange={handleChange} // Updates state
      />
    </div>
  );
}
Uncontrolled Components: In an uncontrolled component, React does not manage the input’s value directly. Instead, the DOM manages it, and React uses a ref to access the value. This means the input element handles its own state, and React doesn’t need to track or update it.

When to use: Suitable for simple forms or when you don’t need to interact with form data directly in React. Often used when integrating React with non-React libraries.
Example:

import React, { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Input value: ' + inputRef.current.value); // Access input value using ref
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} /> {/* Uncontrolled */}
      <button type="submit">Submit</button>
    </form>
  );
}
             `,
          },
          {
            id: 7,
            title:
              'Question.7  What is the purpose of React s context API, and how would you use it to manage global state in an application? Can you provide an example of how to implement it?',
            content:
              'The React Context API is a way to manage and share state across components without passing props down manually at every level. It provides a mechanism to pass data (such as theme settings, user information, or global app state) through the component tree without having to explicitly pass props to each component.',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
 The React Context API is a way to manage and share state across components without passing props down manually at every level. It provides a mechanism to pass data 
 (such as theme settings, user information, or global app state) through the component tree without having to explicitly pass props to each component.

Purpose of React Context:
Global State Management: It allows you to share state globally across many components without prop drilling (passing props through every intermediate component).
Better Component Decoupling: Components can consume the context values directly, making them less dependent on the parent-child component structure.
Efficiency: Useful for scenarios like themes, authentication state, or user preferences that need to be accessible in many parts of an application.
Steps to use Context API:
Create Context: Use React.createContext to create a context object.
Provide Context: Use the Provider component to make the context available to components that need it.
Consume Context: Use the useContext hook or Context.Consumer to access the context value in any component that needs it.
Example:
Here's how you can implement a simple global theme context (dark mode vs. light mode):

1. Create Context
import React, { createContext, useState } from 'react';

// Create a Context
const ThemeContext = createContext();
2. Provide Context
In your root component (or wherever you want to manage the state):

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    // Provide context to the component tree
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Header />
      <MainContent />
    </ThemeContext.Provider>
  );
}
3. Consume Context
In any child component, you can now consume the context using the useContext hook:

import React, { useContext } from 'react';
import { ThemeContext } from './App';

function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ background: isDarkMode ? 'black' : 'white', color: isDarkMode ? 'white' : 'black' }}>
      <h1>Welcome to the App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}`,
          },
          {
            id: 8,
            title:
              'Question.8  can you explain the difference between useState and useRef?',
            content:
              "Yes, I'd be happy to explain the difference between useState and useRef in React. Both are hooks that allow you to manage and persist data across renders, but they serve different purposes and have different behaviors..",
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
1. useState:
useState is a hook that allows you to declare state variables in functional components. It triggers a re-render of the component whenever the state is updated.

Purpose: It's used to store and manage data that needs to trigger a re-render when it changes.
Re-rendering: When you update the state, React will trigger a re-render of the component to reflect the new state.
Usage: Typically used for values that represent dynamic, changing data, such as user inputs, fetched data, or anything that the UI depends on.

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0
  
  const increment = () => {
    setCount(count + 1); // This triggers a re-render
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

2. useRef:useRef is a hook that creates a persistent reference to a value that doesn’t trigger a re-render when it changes. 
It is often used for accessing DOM elements directly or storing mutable values across renders 
without affecting the render cycle.

Purpose: It's used for storing values that don't need to trigger a re-render, such as storing references to DOM elements or keeping track of values that persist across renders 
without affecting the UI.
Re-rendering: Updating a useRef value does not trigger a re-render. The component stays the same, and the value is just updated internally.
Usage: Commonly used for mutable values like timer IDs, previous values, or DOM references.
Example:
import React, { useRef } from 'react';

function Timer() {
  const timerId = useRef(null); // Persistent reference, doesn't trigger re-renders
  const count = useRef(0);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      count.current += 1;
      console.log(count.current); // Updates without causing re-renders
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current); // Stops the interval when called
  };

  return (
    <div>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

`,
          },
          {
            id: 9,
            title:
              'Question.9 Can you explain how React’s Reconciliation Algorithm works? Specifically, how does React determine which parts of the DOM to update, and how does the Virtual DOM help in this process?',
            content:
              "React's Reconciliation Algorithm is the process by which React updates the DOM efficiently by determining what changes need to be made based on the difference between the current DOM and the new virtual DOM. The goal is to minimize updates to the real DOM, which is an expensive operation, and ensure that the UI remains fast and responsive.",
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
React's Reconciliation Algorithm is the process by which React updates the DOM efficiently by determining what changes need to be made based on the difference between 
the current DOM and the new virtual DOM. The goal is to minimize updates to the real DOM, which is an expensive operation, and ensure that the UI remains fast and responsive.

How React Reconciliation Works:
Virtual DOM:

React creates a lightweight in-memory representation of the actual DOM, called the Virtual DOM. This allows React to compare changes to the UI without directly interacting 
with the browser’s DOM.
Diffing Algorithm:

When the state or props of a component change, React creates a new virtual DOM tree and compares it with the previous virtual DOM. This process is called diffing.
React uses an efficient algorithm to find the minimal set of changes needed to update the real DOM. It works by:
Comparing elements at the root level and checking if they are of the same type (e.g., <div> vs <span>).
Key-based optimizations: When rendering lists, React uses key attributes to identify which items have changed, been added, or removed.
Reconciliation Process:

Element type comparison: If the element types are different (e.g., a component is replaced by a DOM element), React will discard the old DOM node and create a new one.
Props comparison: If the element types are the same, React checks whether the props have changed. If they have, React updates only the affected properties.
Children comparison: For a component with children, React compares the old and new children and updates only the changed parts. This is where keys in lists come into
 play, as they help React recognize which child has changed.
Batch Updates:

React batches updates together, meaning that multiple state changes and re-renders can be grouped into a single update to improve performance.
Commit Phase:

Once React finishes calculating the changes (or diffing), it proceeds to the commit phase, where it applies the minimal set of updates to the real DOM.
How the Virtual DOM Helps:
Efficient Comparison: By maintaining a virtual DOM, React can compare changes in memory (which is faster) rather than directly manipulating the DOM. This minimizes 
expensive DOM manipulations and ensures that only the necessary changes are made.
Reduced Performance Overhead: Without the virtual DOM, each change to the UI would trigger a full re-render of the DOM, which can lead to slow performance, especially 
for large applications.
Example of Key Usage in List Reconciliation:
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>  // 'key' helps React identify and optimize the updates
      ))}
    </ul>
  );
}
The key attribute helps React efficiently track and update only the changed list items, rather than re-rendering the entire list.
Summary:
React uses a Virtual DOM to compare the current and previous state of the UI.
The diffing algorithm helps React efficiently determine which changes need to be made to the real DOM.
React optimizes rendering using keys and batching updates to minimize performance overhead and ensure fast updates.
This process makes React applications highly performant, even with large and dynamic UIs.

`,
          },
          {
            id: 10,
            title:
              'Question.10  How would you handle performance optimization in a React application? Can you provide examples of specific techniques or tools you would use to improve rendering performance, especially for complex or large-scale applications?',
            content:
              'Optimizing performance in React functional components is essential for ensuring smooth user experiences, especially in larger applications. Here are various techniques you can use to optimize rendering performance in functional components',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
Optimizing performance in React functional components is essential for ensuring smooth user experiences, especially in larger applications. Here are various techniques
you can use to optimize rendering performance in functional components:

1. Use React’s Built-in Optimization Methods:
React.memo:

Purpose: A higher-order component that prevents re-renders of functional components when the props haven't changed.
Use case: Use React.memo to optimize rendering of functional components that receive the same props and don’t need to re-render.
Example:
const MyComponent = React.memo(({ value }) => {
  return <div>{value}</div>;
});
useMemo and useCallback Hooks:

Purpose: Both hooks help avoid unnecessary recalculations and re-creations of functions or objects on every render.
useMemo: Caches the result of expensive calculations.
useCallback: Memoizes a function so it doesn’t get recreated unless its dependencies change.
Example:
const expensiveCalculation = useMemo(() => computeExpensiveValue(value), [value]);
const memoizedCallback = useCallback(() => { doSomething(); }, [dependency]);
2. Code Splitting:
Purpose: Split the JavaScript bundle into smaller chunks so the application only loads the code required for the current page. This reduces the initial load time.
Tools: React’s React.lazy and Suspense help with dynamic imports and code splitting at the component level.
Example:
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
3. Avoid Inline Functions in JSX:
Purpose: Inline functions inside JSX will be recreated on every render, causing unnecessary re-renders.
Optimization: Instead of using inline functions, define them outside the JSX.
Example:
// Inefficient
<button onClick={() => handleClick()}>Click</button>

// Optimized
<button onClick={handleClick}>Click</button>
4. Virtualization and Windowing:
Purpose: For lists with a large number of items (e.g., tables, grids), rendering all of them at once can be inefficient. Virtualization renders only the visible portion of the list 
at any given time.
Tools: Use libraries like react-window or react-virtualized to efficiently render large lists.
Example:
import { FixedSizeList as List } from 'react-window';

function MyList() {
  return (
    <List
      height={150}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {({ index, style }) => <div style={style}>Item {index}</div>}
    </List>
  );
}
5. Throttling and Debouncing:
Purpose: For events that trigger frequently (e.g., scrolling, resizing, or typing), throttle or debounce the handler to reduce the frequency of updates and improve performance.
Tools: Use libraries like lodash for throttling and debouncing.
Example:
import { debounce } from 'lodash';

const handleSearch = debounce((e) => {
  console.log(e.target.value);
}, 500);
6. Performance Profiling and Monitoring:
React Developer Tools: Use the Profiler tab in React DevTools to identify performance bottlenecks in your application.
Web Vitals: Use Google's Web Vitals and Lighthouse to measure real-world performance.
7. Image Optimization:
Purpose: Images can be large and slow to load. Optimize images by using smaller sizes or modern formats like WebP. Tools like Image CDN or lazy loading can help.

`,
          },
          {
            id: 11,
            title:
              'Question.11 How do you manage and optimize state in a large React application? What approaches or libraries would you use to handle state in complex applications with many component',
            content:
              'Managing and optimizing state in a large React application is crucial for maintaining performance, scalability, and simplicity. Here are the key approaches and libraries commonly used to manage state in complex React applications:',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
Managing and optimizing state in a large React application is crucial for maintaining performance, scalability, and simplicity. Here are the key approaches and libraries commonly 
used to manage state in complex React applications:

1. Local Component State
Use of useState and useReducer:
For smaller, isolated pieces of state, useState is sufficient.
For more complex state logic, useReducer provides a better alternative to useState as it allows you to manage more complex state transitions, similar to Redux.
Example using useReducer:
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
2. Context API
Purpose: For passing state deeply through a component tree without having to pass props manually at every level. It is suitable for global or application-wide state like 
authentication status, user preferences, or theme.
Limitation: The Context API can lead to performance problems (like unnecessary re-renders) if used improperly for large-scale state management. It is best suited for
 relatively simple or less frequently changing state.
Example:
const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
3. External State Management Libraries
For larger applications with complex state logic and multiple components needing access to shared state, more sophisticated libraries can be used to manage state outside of 
React’s built-in options.
`,
          },
          {
            id: 12,
            title:
              'Question.12  How do you handle form validation in React? What approaches or libraries do you use to manage complex forms and ensure data integrity?',
            content:
              "Manual Validation: Simple forms with basic validation can be handled using React's useState and custom validation logic.Formik & Yup: Use Formik for managing form state and Yup for schema-based validation, especially for larger or more complex forms.React Hook Form: A performant library with a minimal API that handles form state and validation with hooks.",
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
Managing and optimizing state in a large React application is crucial for maintaining performance, scalability, and simplicity. Here are the key approaches and libraries commonly 
used to manage state in complex React applications:

1. Local Component State
Use of useState and useReducer:
For smaller, isolated pieces of state, useState is sufficient.
For more complex state logic, useReducer provides a better alternative to useState as it allows you to manage more complex state transitions, similar to Redux.
Example using useReducer:
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
2. Context API
Purpose: For passing state deeply through a component tree without having to pass props manually at every level. It is suitable for global or application-wide state like 
authentication status, user preferences, or theme.
Limitation: The Context API can lead to performance problems (like unnecessary re-renders) if used improperly for large-scale state management. It is best suited for
 relatively simple or less frequently changing state.
Example:
const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
3. External State Management Libraries
For larger applications with complex state logic and multiple components needing access to shared state, more sophisticated libraries can be used to manage state outside of 
React’s built-in options.
`,
          },
          {
            id: 13,
            title:
              'Question.13 What are React Fragments, and why would you use them? Can you provide an example of their usage?',
            content:
              'React Fragments let you group a list of children elements without adding extra nodes to the DOM. This is useful when you want to return multiple elements from a component without wrapping them in an unnecessary <div>.',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
import React from 'react';

function FragmentExample() {
  return (
    <>
      <h1>Title</h1>
      <p>Description text.</p>
    </>
  );
}
Using <>...</> or <React.Fragment>...</React.Fragment> avoids adding extra DOM elements, keeping the DOM cleaner.`,
          },
          {
            id: 14,
            title:
              'Question.14 What is the difference between server-side rendering (SSR) and client-side rendering (CSR) in React? What are the pros and cons of each approach?',
            content:
              'The main difference between Server-Side Rendering (SSR) & client-side rendering (CSR)',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
Server-Side Rendering (SSR):
Pros: Faster initial load, better SEO, pre-rendered HTML for quicker interaction.
Cons: Higher server load, potential increased response time for each request.
Example: Implemented using frameworks like Next.js.
Client-Side Rendering (CSR):
Pros: Faster subsequent navigation within the app, lower server cost.
Cons: Slower initial load as JavaScript must be downloaded and executed.
Example: Standard create-react-app structure.
Use Case: SSR is ideal for SEO-driven and content-heavy sites, while CSR works well for highly interactive web apps..`,
          },
          {
            id: 15,
            title:
              'Question.15 Can you explain the purpose and benefits of code splitting in React? How is it implemented?',
            content:
              'Code splitting is the technique of breaking up your application’s JavaScript bundle into smaller chunks that can be loaded on demand, rather than all at once. This means that users only load the parts of your app they need, improving performance and reducing the initial loading time.',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
In React, code splitting is typically achieved using dynamic imports or React.lazy() in combination with React Suspense, allowing parts of the app to be loaded lazily only when 
they are needed (e.g., when a user navigates to a specific route or interacts with a specific component).

Benefits of Code Splitting:
1. Improved Initial Load Time: 
Instead of downloading the entire JavaScript bundle upfront, code splitting allows the browser to load only the critical code (e.g., the main page, essential assets). As the user 
interacts with the app, additional code is loaded as needed.
This results in faster initial page load, which improves the user experience, especially on slower networks.

2. Reduced Memory Usage:
By loading only necessary parts of the code, the browser consumes less memory, leading to faster performance for the user.

3.Optimized Caching:
Once a chunk is downloaded, it is cached in the browser. If the user navigates back to a previously visited part of the app, it can be loaded from the cache without needing to 
download it again.

4. Better User Experience:
Code splitting allows you to display essential content to the user as soon as possible, even if some parts of the app are still being downloaded. This helps avoid the "blank page"
 experience.

5. Improved Maintainability:
Code splitting allows you to separate your app into smaller, more manageable pieces, which can make the codebase easier to maintain, especially as your app grows.
                        `,
          },
          {
            id: 16,
            title:
              'Question.16 What are React portals, and when would you use them? Can you show a simple implementation example?',
            content:
              'React Portals allow rendering a component’s children into a different part of the DOM tree, outside its parent component hierarchy. They are useful for modals, tooltips, or pop-ups. Implementation:',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root') // Assumes this div exists in your HTML
  );
}

function App() {
  return (
    <div>
      <h1>Main App</h1>
      <Modal>Modal Content</Modal>
    </div>
  );
}
Use Case: Portals are often used to bypass CSS restrictions and keep components accessible.
                        `,
          },
          {
            id: 17,
            title:
              'Question.17 What is React  useReducer hook, and how does it differ from useState? When would you choose useReducer over useState in a React application?',
            content:
              'The useReducer hook in React is another way to manage state in functional components, similar to useState. However, it offers more control and flexibility when dealing with more complex state logic or managing state transitions in a predictable manner, especially when you need to manage state updates based on previous states or multiple actions.',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
What is useReducer?
useReducer is a hook that lets you manage complex state in React components. It is often seen as a more powerful alternative to useState for managing state, especially when 
state updates depend on the previous state or when there are multiple state transitions.

The basic idea behind useReducer is similar to Redux, which follows the reducer pattern. A reducer function defines how the state should change in response to different actions.
const [state, dispatch] = useReducer(reducer, initialState);

import React, { useReducer } from 'react';

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

Summary of Differences:

Feature	        useState	                useReducer
Use case	    Simple state management	Complex state logic, state with multiple actions
State update	Directly set new state	Updates state based on actions dispatched to a reducer
State complexity	Best for simple or independent state variables	Best for complex state or state with multiple transitions
State structure	
Typically single values	Can handle complex state objects (e.g., objects, arrays)
Multiple state values	Multiple calls to useState	Single useReducer for related state variables
Actions	No predefined actions	State transitions are based on dispatched actions

                        `,
          },
          {
            id: 18,
            title:
              'Question.18 Can you explain how React.memo works and when you should use it? What are some potential pitfalls or limitations of using React.memo for performance optimization?',
            content:
              'React.memo is a higher-order component (HOC) that optimizes performance by memoizing a functional component. It prevents unnecessary re-renders by ensuring that a component only re-renders if its props have changed.',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `

How React.memo Works:
React.memo wraps a functional component and uses shallow comparison on its props.
If the props remain the same between renders, React reuses the last rendered output, skipping the rendering process for that component.
Example:

import React from 'react';

const MyComponent = React.memo(function MyComponent({ value }) {
  console.log('Rendered');
  return <div>{value}</div>;
});

// Usage
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <MyComponent value="Hello, world!" />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

                        `,
          },
          {
            id: 19,
            title:
              'Question.19  Can you explain the purpose of React.lazy and Suspense, and how they work together? Can you provide an example of how you would implement code splitting using these features?',
            content:
              'React.lazy and Suspense are used in React to implement code splitting, which helps in loading parts of a React application on demand. This improves performance by reducing the amount of code that needs to be downloaded and executed upfront..',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `

Purpose of React.lazy:
React.lazy enables you to dynamically import components only when they are needed.
This helps in splitting your codebase into smaller chunks that are loaded as the user navigates through your app.
Purpose of Suspense:
Suspense provides a fallback UI (e.g., a loading spinner) while the component being loaded with React.lazy is being fetched.
It acts as a placeholder until the lazy-loaded component is ready.
How They Work Together:
React.lazy is used to declare a component that will be loaded lazily.
Suspense wraps around the component and provides a fallback UI to display during the loading process.
Example of Implementation:
import React, { Suspense } from 'react';

// Lazy-loaded component
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <h1>My React App</h1>
      {/* Suspense wraps the lazy-loaded component */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
Explanation:

When App renders, it immediately shows the h1 element.
The LazyComponent is imported only when needed, and Suspense displays "Loading..." until it loads.
Benefits:
Reduces initial load time by splitting large applications into smaller bundles.
Loads code on-demand, which improves performance and the user experience.
Considerations:
Ensure that Suspense is used to provide a fallback UI; otherwise, the app will not handle the loading phase correctly.
Not supported for server-side rendering (SSR) as of now, but libraries like Next.js have their own implementation for handling dynamic imports.

                        `,
          },
          {
            id: 20,
            title:
              'Question.20 What are custom hooks in React, and why would you create one? Can you show an example of a custom hook and explain how it can be reused in different components?',
            content:
              'Custom hooks are JavaScript functions that allow you to reuse logic across multiple components in a clean and reusable way. They are a way to extract and share stateful logic without changing the component structure. Custom hooks are just normal JavaScript functions that may call other hooks (like useState, useEffect, etc.), but they follow a naming convention of use<name> (e.g., useFetch, useLocalStorage).',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `

Why Create a Custom Hook?
Code Reusability: Custom hooks allow you to encapsulate logic that needs to be shared across components, making the code DRY (Don't Repeat Yourself).
Separation of Concerns: Custom hooks separate the logic from the UI, which can help in maintaining clean and more readable code.
Testability: Isolating logic in custom hooks makes it easier to test because the hook itself can be tested in isolation.
Example of a Custom Hook: useLocalStorage
Here's an example of a custom hook that handles reading from and writing to localStorage.

import { useState } from 'react';

// Custom hook to manage state with localStorage
function useLocalStorage(key, initialValue) {
  // Check if the value is stored in localStorage
  const storedValue = localStorage.getItem(key);

  // If the value exists in localStorage, use it; otherwise, use the initial value
  const [storedState, setStoredState] = useState(storedValue ? JSON.parse(storedValue) : initialValue);

  // Set the value in localStorage whenever it changes
  const setValue = (value) => {
    setStoredState(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedState, setValue];
}

export default useLocalStorage;
Usage of the Custom Hook:
import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage('name', 'John Doe');
  const [age, setAge] = useLocalStorage('age', 25);

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Your age is: {age}</p>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name" 
      />
      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
        placeholder="Enter your age" 
      />
    </div>
  );
}

export default App;
Explanation:
The useLocalStorage custom hook abstracts the logic for storing and retrieving data from localStorage.
The hook returns the current value from localStorage (or the initial value) and provides a setter function to update both the state and localStorage.
You can now reuse this custom hook in any component that needs to interact with localStorage, making the code more modular and maintainable.
Advantages of Using Custom Hooks:
Reusability: The custom hook useLocalStorage can be reused across multiple components where localStorage needs to be accessed.
Separation of Concerns: The logic for interacting with localStorage is encapsulated within the custom hook, leaving components focused on UI.
Cleaner Code: Components are cleaner, as they don’t need to handle the localStorage logic directly.

                        `,
          },
          {
            id: 20,
            title:
              'Question.21 What is the purpose of useCallback and useMemo hooks in React? How do they differ, and when would you use each one?',
            content:
              'Both useCallback and useMemo are performance optimization hooks in React that help prevent unnecessary re-renders or recalculations by memoizing values or functions.',
            courseId: '6',
            ex: 'Examples:',
            function: '',
            code: `
useCallback:
useCallback is used to memoize a function so that it is not re-created on every render.
It returns a memoized version of the callback function that only changes if one of the dependencies changes.
Typically used when passing functions to child components that may otherwise cause unnecessary re-renders.
useMemo:
useMemo is used to memoize a value (the result of a calculation) so that it is only recalculated when its dependencies change.
It can help optimize expensive calculations by preventing them from being recalculated on every render.

Example of useCallback:
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Memoize the callback function to prevent unnecessary re-creation
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <ChildComponent increment={increment} />;
}

function ChildComponent({ increment }) {
  return <button onClick={increment}>Increment</button>;
}
Example of useMemo:
import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ data }) {
  const [input, setInput] = useState('');

  // Memoize the expensive calculation to avoid recalculating on every render
  const filteredData = useMemo(() => {
    return data.filter(item => item.includes(input));
  }, [data, input]);

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <ul>
        {filteredData.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

                        `,
          },
        ],
      });
      server.create('topic', {
        reactNextRevision: [
          {
            id: 1,
            title:
              'Question.1 How do you optimize performance in a NextJS application?',
            content:
              'Performance optimization in a NextJS application can be achieved through several approaches:',
            courseId: '7',
            ex: 'Example:',
            function: '',
            code: `

Server-Side Rendering (SSR) and Static Site Generation (SSG): Use SSG for pages with static content and ISR (Incremental Static Regeneration) for frequently updated pages.
Image Optimization: Leverage the built-in <Image /> component to handle lazy loading, resizing, and serving optimized images.
Code Splitting: Use dynamic imports with next/dynamic to load components only when needed.
Caching: Use getServerSideProps or getStaticProps to cache API responses or fetch minimal data.
Performance Audits: Analyze performance using Lighthouse and tools like webpack-bundle-analyzer to identify and fix bottlenecks.
Asset Compression: Enable gzip or Brotli compression for assets., we're referring to the process of reducing the size of static assets such as JavaScript, CSS, HTML, and images 
to make the website load faster.`,
          },
          {
            id: 2,
            title:
              'Question.2 What are some key differences between server-side rendering (SSR) and static site generation (SSG) in NextJS?',
            content:
              'Server-Side Rendering (SSR) and Static Site Generation (SSG) are two rendering methods in Next.js that can improve the performance and user experience of your application:',
            courseId: '7',
            ex: 'Example',
            code: `
SSR:
Renders the page on the server at each request.
Ideal for pages with frequently changing content or requiring user-specific data.
Slower for high traffic since each request triggers a new render.
SSG:
Pre-renders the page at build time.
Best for static, less frequently updated content.
Pages load faster because they are served as static files.
For example, in a blog application, a user dashboard might use SSR for dynamic data, while blog posts can use SSG for faster performance..
`,
          },
          {
            id: 3,
            title:
              'Question.3 Can you explain how React’s context API compares to Redux in terms of state management',
            content:
              'The Context API is a lightweight solution for passing data through the component tree without manually drilling props, ideal for small, localized state like theme settings or authentication status.',
            courseId: '7',
            ex: 'Examples:',
            function: '',
            code: `
Redux, on the other hand, is more robust and suitable for managing global, complex states involving multiple reducers, middleware for async actions, and time-travel debugging.

Key Differences:

Scalability: Redux scales better for large applications with complex state.
Boilerplate: Redux requires more setup compared to the Context API.
Performance: Context re-renders all consumers when state changes, while Redux allows fine-grained updates with connect or useSelector.
AI Integration
             `,
          },
          {
            id: 4,
            title:
              'Question.4  Describe how you would integrate an OpenAI GPT model with a frontend application.',
            content:
              'Setup API Key: Obtain an API key from OpenAI and securely store it (e.g., in an environment variable).',
            courseId: '7',
            ex: 'Examples:',
            function: '',
            code: `
Create Backend Proxy: Set up a lightweight backend (e.g., using Node.js) to handle API calls, protecting the API key from being exposed on the frontend.
Frontend Integration:
Use fetch or Axios to send user input to the backend endpoint.
Handle responses and display them in the UI.
Optimize UX:
Implement loading indicators while waiting for AI responses.
Stream responses using WebSockets or progressive updates for large outputs.
For example, in a chatbot application, user input can be sent to the backend, which forwards it to OpenAI’s API, processes the response, and sends it back to the frontend.
`,
          },
          {
            id: 5,
            title:
              'Question.5 What challenges do you anticipate when handling large payloads from AI models in the UI, and how would you solve them?',
            content:
              'What challenges do you anticipate when handling large payloads from AI models in the UI, and how would you solve them?',
            courseId: '7',
            ex: 'Examples:',
            function: '',
            code: `
Challenge: Rendering delays due to large payloads.
Solution: Paginate or chunk the payload and render progressively.
Challenge: UI freezing during heavy computation.
Solution: Use Web Workers to offload computation from the main thread.
Challenge: Managing real-time updates.
Solution: Use a WebSocket connection to stream data incrementally.
Challenge: Handling long API response times.
Solution: Use spinners or placeholders to maintain UX during delays.
Socket Programming
             `,
          },
          {
            id: 6,
            title:
              'Question.6 What are the advantages of using WebSockets over HTTP polling for real-time applications?',
            content:
              "Controlled Components: In a controlled component, React manages the form element’s value via state. The input field's value is controlled by the value prop, and updates to that value are handled by event handlers like onChange, which update the component’s state.",
            courseId: '7',
            ex: 'Examples:',
            function: '',
            code: `
Persistent Connection: WebSockets establish a single connection for bidirectional communication, reducing latency compared to repeated HTTP requests.
Efficiency: Less overhead as data packets are smaller, unlike HTTP requests that include headers.
Real-Time Updates: Ideal for scenarios requiring immediate updates, like chat apps or live notifications.
             `,
          },
          {
            id: 7,
            title:
              'Question.7  Can you write a simple code snippet to demonstrate how you would implement a WebSocket connection in React?',
            content:
              'The React Context API is a way to manage and share state across components without passing props down manually at every level. It provides a mechanism to pass data (such as theme settings, user information, or global app state) through the component tree without having to explicitly pass props to each component.',
            courseId: '7',
            ex: 'Examples:',
            function: '',
            code: `
import { useEffect, useState } from 'react';

const WebSocketDemo = () => {
  const [messages, setMessages] = useState([]);
  const socket = new WebSocket('wss://example.com/socket');

  useEffect(() => {
    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => socket.close(); // Cleanup on unmount
  }, []);

  return (
    <div>
      <h1>WebSocket Messages</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketDemo;`,
          },
          {
            id: 8,
            title:
              'Question.8  How would you handle socket disconnections gracefully to ensure a good user experience?',
            content:
              'Reconnect Logic: Implement exponential backoff for reconnection attempts.',
            courseId: '8',
            ex: 'Examples:',
            function: '',
            code: `
Reconnect Logic: Implement exponential backoff for reconnection attempts.
User Feedback: Notify users with a message (e.g., "Reconnecting...") during disconnections.
Heartbeat Mechanism: Send periodic pings to detect and close inactive connections.
Fallbacks: Provide an HTTP polling fallback if WebSocket reconnection fails.
Code Optimization and Problem Solving`,
          },
          {
            id: 9,
            title:
              'Question.9 How do you measure the performance of a React component?',
            content:
              'Use React Developer Tools to analyze component rendering.',
            courseId: '9',
            ex: 'Examples:',
            function: '',
            code: `
Use React Developer Tools to analyze component rendering.
Add console.time() and console.timeEnd() for custom measurements.
Use the useMemo and useCallback hooks to optimize expensive computations or re-renders.
Profile performance with Chrome DevTools to analyze JavaScript execution time and memory usage.`,
          },
          {
            id: 10,
            title:
              'Question.10  Can you walk me through a scenario where you had to refactor a poorly performing application? What approach did you take?',
            content:
              'In one project, the dashboard app was slow due to repeated API calls and unoptimized re-renders.',
            courseId: '7',
            ex: 'Examples:',
            function: '',
            code: `
Steps Taken:

Analyzed performance with React Profiler and identified unnecessary renders.
Implemented memoization with React.memo and useCallback.
Optimized API calls by batching requests and using React Query for caching.
Rewrote large, monolithic components into smaller, reusable components.
As a result, the app's load time decreased by 40%, and the user experience improved significantly.

`,
          },
          {
            id: 11,
            title: 'Question.11 What is Static Site Generation(SSG)?',
            content: 'SSR is Static Site Generation',
            courseId: '7',
            ex: 'Examples:',
            function: '',
            code: `
In Next.js, SSG stands for Static Site Generation. It’s a method for pre-rendering web pages at build time. This means that the HTML of your pages is generated in advance, and 
when a user requests a page, the pre-rendered HTML is served, leading to faster page loads.

Key Points of SSG in Next.js:
Build-Time Rendering: With SSG, pages are rendered at build time, not on each request. This results in faster load times since the HTML is ready to be served.

Use Case 1: Marketing or Blog Websites
If your website is a marketing site, blog, or portfolio where the content does not change frequently and you don’t need user-specific data, SSG is the best option. 
These websites can benefit from the speed of pre-rendered HTML pages.

Example: A personal portfolio, a blog (like WordPress or Medium), or a company landing page. 
The content doesn’t change much, and it can be pre-built once, making the site load faster and have better performance.

`,
          },
          {
            id: 12,
            title: 'Question.12 What is Server-Side Rendering(SSR)?',
            content: 'Server-Side Rendering(SSR)',
            courseId: '7',
            ex: 'Examples:',
            function: '',
            code: `
SSR in Next.js refers to the process of rendering a web page on the server for every request made by the user. This means that for every page request, 
the server generates the HTML, which includes any dynamic content, and sends it to the browser.

Use Case 1: Frequently Changing Content

If the content of your website changes frequently or needs to be updated regularly 
(e.g., live news websites, event ticketing), SSR ensures that users always get the latest version of the page with real-time data.

Example: A news website like BBC or CNN, where articles and news updates are changing constantly. 
You need the page to always reflect the most recent content, and SSR will ensure the content is always fresh.

`,
          },
        ],
      });
      server.create('topic', {
        reactInterViewerQuestion: [
          {
            id: 1,
            title: 'Question.1 What is CMD Command?',
            content:
              'The Command Prompt (CMD), also known as cmd.exe, is a command-line interface (CLI) available in Windows operating systems. It allows users to execute commands to perform various system tasks such as file management, network operations, and running programs or scripts.',
            courseId: '8',
            ex: 'Example:',
            function: '',
            code: `
Here is an overview of some common CMD commands and their functionalities:

1 Basic File and Directory Commands:

dir: Displays a list of files and folders in the current directory.

dir

cd (Change Directory): Changes the current directory.

cd foldername  # Navigate to a specific folder
cd ..          # Move up one directory level
mkdir (Make Directory): Creates a new directory.

mkdir newfolder

rmdir (Remove Directory): Deletes an empty directory.:
rmdir foldername

.`,
          },
          {
            id: 2,
            title: 'Question.2 Authentication?',
            content:
              'Server-Side Rendering (SSR) and Static Site Generation (SSG) are two rendering methods in Next.js that can improve the performance and user experience of your application:',
            courseId: '7',
            ex: 'Example',
            code: `
SSR:
Renders the page on the server at each request.
Ideal for pages with frequently changing content or requiring user-specific data.
Slower for high traffic since each request triggers a new render.
SSG:
Pre-renders the page at build time.
Best for static, less frequently updated content.
Pages load faster because they are served as static files.
For example, in a blog application, a user dashboard might use SSR for dynamic data, while blog posts can use SSG for faster performance..
`,
          },
          {
            id: 3,
            title: 'Question.3 Version Control System',
            content:
              'In React (and in web development in general), a Version Control System (VCS) is essential for managing the history of your project code and collaborating with others. A VCS helps you track changes to the project, revert to previous versions, and collaborate more efficiently with other developers.',
            courseId: '8',
            ex: 'Examples:',
            function: '',
            code: `
Here’s how version control applies to a React project:
1. Using Git as Version Control for React

How to set up Git for React:
Install Git: First, ensure that Git is installed on your computer. You can download Git from git-scm.com.

Initialize Git in a React project: If you have a React project that isn’t already a Git repository, open your terminal in the project folder and run:

git init

Add project files to Git: After initializing the repository, add your project files to Git:
git add .

Commit your changes: Make your first commit to save the current state of the project:
git commit -m "Initial commit"

Connect to a remote repository: If you want to push your changes to a platform like GitHub, create a new repository on GitHub, then add the remote repository URL:

git remote add origin https://github.com/your-username/your-repo-name.git
s

Push your changes to the remote repository: Push the changes to GitHub (or another remote platform):

git push -u origin master

             `,
          },
        ],
      });
    },

    routes() {
      this.namespace = 'api';
      this.get('/courseLists', (schema, request) => {
        console.log(schema, request);
        return schema.courseLists.all();
      });

      this.get('/topics', (schema) => {
        return schema.topics.all();
      });

      this.get('/topics/search', (schema, request) => {
        let searchTerm = request.queryParams.term.toLowerCase();
        const topicsModels = schema.topics.all().models;
        const topicAttrs = topicsModels.flatMap((item) => {
          const topicKey = Object.keys(item.attrs)[0];
          const topicData = item.attrs[topicKey];
          return topicData.filter((itemFilter) =>
            itemFilter.title.toLowerCase().includes(searchTerm)
          );
        });

        return topicAttrs;
      });

      this.get('/roadmaps', (schema) => {
        return schema.roadmaps.all();
      });
    },
  });
  return server;
}
