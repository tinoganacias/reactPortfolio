import React, {useState} from "react";
import PortfolioCard from "./PortfolioCard"
import "./style/Portfolio.css";


const Projects = () => {
    const [portfolioCards] = useState([
        {
            link:"https://tinoganacias.github.io/employeeTracker/",
            image: "https://user-images.githubusercontent.com/84544540/130340066-05c54c44-2a0e-4afd-bc7c-d3909b4c6f50.PNG",
            title:"Employee Tracker",
            languages: "Node.js, Inquirer, MySQL",
            description: "This is a content management system (CMS). It is a command-line application which manages my company’s employee database using Node.js, Inquirer, and MySQL."
        },
        {
            link:"https://tinoganacias.github.io/readMeGen/",
            image: "https://user-images.githubusercontent.com/84544540/129463450-c2843ea7-b21c-4eba-a929-1949a4e0e4d1.png",
            title:"readMe Generator",
            languages: "Javascript, Inquirer, Node.js",
            description: "Made with Javascript, Inquirer, and Node.js, this readMe generator seamlessly generates a quality readMe through the computer terminal."
        },
        {
            link:"https://tinoganacias.github.io/e-Commerce-Backend/",
            image: "https://user-images.githubusercontent.com/84544540/132078880-e5ce0878-b264-4a97-b371-5198350259e7.png",
            title:"e-Commerce Back-End",
            languages: "MySQL, MySQL2, Express.js, Sequelize, dotenv",
            description: "For a manager of an internet retail company, this backend of an e-commerce website has CRUD functionality for its data which strengthens its competitveness in the market."
        },
        {
            link:"https://rg-247fbk.herokuapp.com/",
            image: "https://user-images.githubusercontent.com/84544540/131913102-6744b7a9-d643-4407-9143-8f196811e5f1.png",
            title:"24/7 Football For Kids",
            languages: "express, dotenv, bcrypt, react, sequelize",
            description: "24/7 Football for Kids is a fun, interactive application, providing kids an opportunity to search for their favorite fantasy football stars."
        },
        {
            link:"https://tinoganacias.github.io/portfolio/",
            image: "https://user-images.githubusercontent.com/84544540/132341864-a09ec94e-f295-4bc5-97cb-bdd18945cb54.png",
            title:"First Portfolio",
            languages: "HTML, CSS",
            description: "My first attempt at a portfolio"
        },
        {
            link:"https://tinoganacias.github.io/passwordGenerator/",
            image: "https://user-images.githubusercontent.com/84544540/132342125-28d51c50-1552-489d-ac43-b7f8a45dc909.png",
            title:"Password Generator",
            languages: "JavaScript,HTML,CSS",
            description: "This password generator creates random passwords between 8 and 128 charaters long."
        },])
    
        return (

    <div className="portfolio-card">
    {portfolioCards.map((project,i)=> (
        <PortfolioCard 
        key = {i}
        link = {project.link}
        image={project.image}
        title={project.title}
        languages={project.languages}
        description={project.description}/>
    ))}
</div>
    )
}

export default Projects