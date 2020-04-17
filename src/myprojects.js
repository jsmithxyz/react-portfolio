const projects = {
  project1: {
    name: "Philly Auto Emporium",
    image: "/images/PhillyCarEmporium.png",
    desc: `This application allows a Used Car Dealership to keep track and manage it's inventory, as well as display it for potential buyers.
    This is a full-stack web application that follows the MVC design pattern. This specific application utilizes a third-party API (CarMD) to collect accurate car data, AJAX calls to get/post/delete data, Node for back-end, Express for routing, NodeMailer for sending emails, and MySQL for saving/deleting car data for inventory purposes. The front-end design was built with HTML, CSS, and Foundation framework.`,
    githubURL: "https://github.com/jsmithxyz/philly-car-emporium",
    website: "https://philly-car-emporium.herokuapp.com/",
  },
  project2: {
    name: "Pooch Quest",
    image: "/images/PoochQuestPhoto.png",
    desc:
      "Pooch Quest is an application that assists the user in finding their perfect dog. This application utilizes TheDog API and PetFinder API, AJAX calls to pull data, and a polished UI using Materialize as the framework.",
    githubURL: "https://github.com/jsmithxyz/pooch-quest",
    website: "https://alyssacucunato.com/pooch-quest/",
  },
  project3: {
    name: "Godzilla Quiz",
    image: "/images/GodzillaQuizPhoto.png",
    desc:
      "This application will run the user through a Godzilla themed quiz. The user will then be able to track their scores in the same session, and see these scores at any time. Scores are based off of how many seconds are remaining when all of the questions are answered. Simple application built on CSS, HTML, and JS.",
    githubURL: "https://github.com/jsmithxyz/godzilla-quiz",
    website: "https://jsmithxyz.github.io/godzilla-quiz/quiz.html",
  },
  project4: {
    name: "Eat-Da-Burger",
    image: "/images/BurgerApp.png",
    desc:
      "This application is designed to provide the user the ability of adding and keeping track of the different types of burgers they desire and have devoured. This is a burger logger application built with MySQL, Node, Express, Handlebars and a homemade ORM.",
    githubURL: "https://github.com/jsmithxyz/Eat-Da-Burger",
    website: "https://jsmithxyz-burger.herokuapp.com/",
  },
};

export default projects;
