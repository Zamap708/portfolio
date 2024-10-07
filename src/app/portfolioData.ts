interface Project {
  name: string;
  url: string;
  git: string;
  image: string; // If using next/image
  stack: string;
  description: string;
}

const projects: { sites: Project[] } = {
  sites: [
    {
      name: "Ngome Marian Shrine Website",
      url: "https://www.ngomemarianshrine.co.za",
      git: "https://github.com/Zamap708/ngome-website",
      image: "/assets/images/ngomeSS.jpg",
      stack: "React JS, CSS, MongoDB, ExpressJS, NodeJS, NextJS",
      description:
        "This is a website currently in progress for a client. It is a modernised version of their current website complete with an entirely new UI designed by myself. It is also to include CRUD functionalities to allow for social interactivity on the site such as making posts, updating blogs, leaving comments and also a user database.",
    },
    {
      name: "Pillar South Africa Website",
      url: "https://zamap708.github.io/Pillar-SA/",
      git: "https://github.com/Zamap708/Pillar-SA/tree/master",
      image: "/assets/images/PillarSS.jpg",
      stack: "React JS, CSS",
      description:
        "This is a website made for a client. It is a single page application built in React, as they are a recruitment agency I have simplified the email process for them by allowing users to complete a form and submit their CVs all on the home page, removing the middle step and allowing a more fluid experience.",
    },
    {
      name: "Gatsby Softworks",
      url: "https://www.gatsbysoftworks.co.za/",
      git: "https://github.com/Zamap708/gatsby-website",
      image: "/assets/images/gatsbySS.png",
      stack: "React JS, CSS, Gatsby",
      description:
        "Gatsby Softworks is the website for my Web and Software Development company. The website takes a simple, fun approach in presentation and offers a form submission service that allows direct contact to the company email.",
    },
    {
      name: "Soulistic Agency Website",
      url: "https://soulisticagency.africa",
      git: "",
      image: "/assets/images/Soulistic-ss.jpg",
      stack: "HTML, CSS, Javascript",
      description:
        "Soulistic Agency is a company based in Johannesburg, they are a prestigious talent management and event coordinating company. I aimed to give them a modern revamp that represents the style the client wanted to boost their online image. The site conforms to an elegant, sleek design that aims to catalogue their talent and events while also creating a booking and query system for potential clients.",
    },
    {
      name: "Quanden Plumbing and Projects",
      url: "https://quandenplumbingandprojects.co.za/",
      git: "",
      image: "/assets/images/quandenSS.png",
      stack: "HTML, CSS, Javascript, PHP, MySQL",
      description:
        "Quanden Plumbing is a Durban based plumbing and trade company that approached us to improve their visibility online. We made them a simple website showcasing their work and services. The client wanted to continue updating the site independently so I created a simple CMS in PHP where they could update text and images. I built the CMS with authentication for security purposes and connected it to a SQL database.",
    },
    {
      name: "Server Side Filtering App",
      url: "https://zamap708.github.io/MI-C3-Assessment/",
      git: "https://github.com/Zamap708/MI-C3-Assessment",
      image: "/assets/images/mi-c3-assessment.jpg",
      stack: "React JS, Redux Toolkit, CSS",
      description:
        "This app was made to assess my skills with React and Redux, as well as my familiarity with handling APIs. The app is a search engine that filters on the server side, it takes in input from the search bar and parses the parameters to produce a link that is used to fetch data from the API. It then returns and parses the data in a easy to understand format for the user.",
    },
  ],
};

export default projects;
