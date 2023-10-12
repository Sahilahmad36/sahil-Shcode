// import React from "react";
// import "./testimonials.css";
// import AVTR1 from "../asset/theme.jpg";
// import AVTR2 from "../asset/Image.jpeg";
// import AVTR3 from "../asset/Sahil-1.jpg"
// import { Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";

// const peers = [
//   {
//     avatar: AVTR1,
//     name: "Shahier Nashaat",
//     review:
//       "Somdotta is one of the best teammates I have ever worked with, she is a very good listener, a fast learner provides help to anyone in the team if needed, and is very committed to the responsibilities that she has.",
//   },
//   {
//     avatar: AVTR2,
//     name: "Chimwewme Sinyinza",
//     review:
//       "I had the chance to work with Somdotta on different projects. Her technical skills were always impressive. She constantly showed professional behaviour and a high level of problem-solving skills.She is always creative with writing codes and shows a nice attitude towards team members. Based on that, I would gladly recommend her as a software developer with her technical and soft skills.",
//   },
//   {
//     avatar: AVTR3,
//     name:"Richard",
//     review:
//     "I had the chance to work with Somdotta on different projects. Her technical skills were always impressive. She constantly showed professional behaviour and a high level of problem-solving skills.She is always creative with writing codes and shows a nice attitude towards team members. Based on that, I would gladly recommend her as a software developer with her technical and soft skills.",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials">
//       <h5>Review</h5>
//       <h2>Testimonials</h2>
//       <Swiper
//         className="container testimonials_container"
//         navigation={true}
//         modules={[Navigation]}
//         spaceBetween={40}
//         slidesPerView={1}
//       >
//         {peers.map(({ avatar, name, review }, index) => {
//           return (
//             <SwiperSlide key={index} className="testimonial">
//               <div className="peer_avatar">
//                 <img src={avatar} alt={name} />
//               </div>
//               <h5 className="peer_name">{name}</h5>
//               <small className="peer_review">{review}</small>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </section>
//   );
// };

// export default Testimonials;

import React from "react";
import "./testimonials.css";
import IMG1 from "../assets/Screenshot1.png";
import IMG2 from "../assets/Screenshot2.png";
import IMG3 from "../assets/Screenshot3.png";
import IMG4 from "../assets/Screenshot4.png";
import IMG5 from "../assets/Screenshot5.png";
import IMG6 from "../assets/Screenshot6.png";
import IMG7 from "../assets/Screenshot7.png";
import IMG8 from "../assets/Screenshot8.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Chat-App",
    desc: "This is the real time chat-app.... Developed chat app beta version with functionality like Authorization, Authentication. Created using MERN stack and with the assistance of npm and socket io.",
    github: "https://github.com/Sahilahmad36/Chat-app",
    demo: "https://clone-chat-app-5h0j.onrender.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "E-commerce website",
    desc: "This is the E-commerce website..In this website how to add product, delete product, update product etc...",
    github: "https://github.com/Sahilahmad36/E-comm_app",
    demo: "https://frolicking-rolypoly-baa0cf.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: " Meme Generator-App",
    desc: "This is the real time meme generator app , using react+vite and tailwind css",
    github: "https://github.com/Sahilahmad36/Meme-Generator",
    demo: "https://radiant-nasturtium-547a57.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Social_media-clone-app",
    desc: "This is the social media clone app, Add image,video,share etc....",
    github: "https://github.com/Sahilahmad36/Social_media-clone-app",
    demo: "https://fascinating-marigold-184d74.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Task Management-App",
    desc: "This is the Task management app. You can add and delete tasks in this app. ",
    github: "https://github.com/Sahilahmad36/Task-Management",
    demo: "https://sahilahmad36.github.io/Task-Management/",
  },
  {
    id: 6,
    image: IMG6,
    title: "SnapShot-App",
    desc: "A simple snapshot application that displays the image and search based app. You can search images of Mountain, Code, Birds and Food etc.. in this app.",
    github: "https://github.com/Sahilahmad36/Snapshot",
    demo: "https://sahilahmad36.github.io/Snapshot/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Move-Box",
    desc: "You can move the box towards right, left, bottom and top in this app.",
    github: "https://github.com/Sahilahmad36/Move-Box",
    demo: "https://gleeful-trifle-523e74.netlify.app/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Search-Filtering-app",
    desc: "This app is a search filter app. In this app you can filter any line which is inside the API.",
    github: "https://github.com/Sahilahmad36/Search-Filtering-app",
    demo: "https://sahilahmad36.github.io/Search-Filtering-app/",
  },
];
const Testimonials = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      {/* <h2>Portfolio</h2> */}

      <div className="container portfolio__container">
        {data.map(({ id, image, title, desc, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className=".portfolio-item-desc">{desc}</div>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
