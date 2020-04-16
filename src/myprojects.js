const projects = {
  project1: {
    name: "Philly Auto Emporium",
    image: "/images/PhillyCarEmporium.png",
    desc: `This application allows a Used Car Dealership to keep track and manage it's inventory, as well as display it for potential buyers.
    This is a full-stack web application that follows the MVC design pattern. This specific application utilizes a third-party API (CarMD) to collect accurate car data, AJAX calls to get/post/delete data, Node for back-end, Express for routing, NodeMailer for sending emails, and MySQL for saving/deleting car data for inventory purposes. The front-end design was built with HTML, CSS, and Foundataion framework.`,
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
};

export default projects;
