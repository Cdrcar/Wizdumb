import {github, javascript, html, node, express, reactImage } from '../assets';

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
        description:"HTML and CSS are the building blocks of web development.Learn to create and style structured  webpages and develop an understanding of HTML's markup capabilities. This course covers how to create, structure and style web pages.",
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
        description:"Node.js is a powerful JavaScript runtime environment that allows you to build efficient server-side applications. This course covers the fundamentals of Node.js and teaches you how to develop web applications using Node.js.",
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
        description:"Git is a distributed version control system that allows a developer to track changes made to files in their projects.It serves as a popular platform for open-source projects and offers extensive documentation and community support.",
        icon: github,
        modules: [{
            One: "Introduction to Github",
            Two: "Setting up Github ",
            Three: "Creating and sharing repositories",
            Four: "Pushing code to github",
            Five: "Pull requests and merging",
        }]   
    },
    {
        name:"React",
        description:"Introducing React, a JavaScript library for building dynamic user interfaces. Learn how to create reusable UI components and build fast and interactive web applications. Gain skills in component-based development and enhance your understanding of React.",
        icon: reactImage,
        modules: [{
            One: "React Essentials: Mastering the fundamentals",
            Two: "Dynamic User Interfaces",
            Three: "Reusable UI Elements",
            Four: "Data Rendering and Manipulation",
            Five: "React Project",
        }]    
    },
]


export default courses;