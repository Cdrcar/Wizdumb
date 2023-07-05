import {github, javascript, html, node, express } from '../assets';

const courses = [
    {
        name:"Javascript",
        description:"JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.",
        icon: javascript,
        modules: [{
            One: "Hello World",
            Two: "Conditionals",
            Three: "Functions",
            Four: "Arrays",
            Five: "Loops",
        }]   
    },
    {
        name:"HTML & CSS",
        description:"Learn the essentials of HTML and CSS, the building blocks of web development. This course covers how to create and structure web pages using HTML, as well as how to style and layout those pages using CSS.",
        icon: html,
        modules: [{
            One: "Elements and Structure",
            Two: "Forms",
            Three: "Semantic HTML",
            Four: "Syntax and Selectors",
            Five: "Responsive design",
        }]   
    },
    {
        name:"NodeJS",
        description:"Node.js is a powerful JavaScript runtime environment that allows you to build scalable and efficient server-side applications. This course covers the fundamentals of Node.js and teaches you how to develop web applications using Node.js.",
        icon: node,
        modules: [{
            One: "Introduction to NodeJS",
            Two: "Node Package Manager",
            Three: "Node Modules",
            Four: "Javascript for NodeJS",
            Five: "Understanding JSON",
        }]    
    },
    {
        name:"ExpressJS",
        description:"Express.js is a popular web application framework for Node.js. In this course, you'll learn how to build web applications using Express.js. Topics covered include routing, middleware, template engines, and working with databases",
        icon: express,
        modules: [{
            One: "Introduction to ExpressJS",
            Two: "Routes",
            Three: "Middleware",
            Four: "Template engines",
            Five: "Routing challenges",
        }]    
    },
    {
        name:"Github",
        description:"Git is a distributed version control system that allows a developer to track changes made to files in their projects.",
        icon: github,
        modules: [{
            One: "Introduction to Github",
            Two: "Setting up Github ",
            Three: "Creating and sharing repositories",
            Four: "Pushing code to github",
            Five: "Pull requests and merging",
        }]   
    }
]


export default courses;