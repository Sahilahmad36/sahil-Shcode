import React from "react";
import CertificateCard from "./CertificateCard";
import "./Certificate.css";

import risec from "../asset/certificate.jpeg";
import img5 from "../asset/img5.jpg";
import unschool from "../asset/img1.png";
import risc from "../asset/sahil_certificate.jpeg";
import img3 from "../asset/img3.jpg";
import img4 from "../asset/img4.jpg";
import img7 from "../asset/img7.jpg";
import img8 from "../asset/img8.png";
import img9 from "../asset/img9.png";

function Certificate() {
  const certificatelist = [
    {
      title: "Pantech E-Learning",
      imgUrl: risec,
      siteUrl: "https://www.pantechelearning.com/",
      tagline: "Full Stack Development intern",
    },
    {
      title: "Multigrad",
      imgUrl: img5,
      siteUrl: "https://www.multigrad.in",
      tagline: "Full Stack Development intern",
    },
    {
      title: "Unschool",
      imgUrl: unschool,
      siteUrl: "https://www.unschool.in/",
      tagline: "Full Stack Development Course",
    },
    {
      title: "Code-Alpha",
      imgUrl: img8,
      siteUrl: "www.codealpha.co.in",
      tagline: "Web Development intern",
    },
    {
      title: "Edu-Versity",
      imgUrl: risc,
      siteUrl: "https://edu-versity.in/",
      tagline: "Web Development Intern",
    },
    {
      title: "unstop-igniters-club",
      imgUrl: img3,
      siteUrl: "https://unstop.com/unstop-igniters-club",
      tagline: "Web Development Contest Team Work",
    },
    {
      title: "Uni Compiler",
      imgUrl: img4,
      siteUrl: "https://unicompiler.online/",
      tagline: "Web Developer & Design Intern",
    },

    {
      title: "Coding Ninjas",
      imgUrl: img7,
      siteUrl: "https://www.codingninjas.com/",
      tagline: "Competitive Programming course",
    },
    {
      title: "HackerRank",
      imgUrl: img9,
      siteUrl: "https://www.hackerrank.com/",
      tagline: "Python course",
    },
  ];

  return (
    <section
      className="certificate"
      data-aos="fade-left"
      style={{ paddingTop: "30px", minHeight: "80vh" }}
    >
      <div className="container">
        <div
          className="section-title"
          style={{ height: "5px", paddingLeft: "1rem" }}
        >
          <h2>Certificate's</h2>
        </div>

        <div className="row">
          {certificatelist.map((element) => {
            return (
              <div className="column">
                <CertificateCard
                  title={element.title}
                  tagline={element.tagline}
                  imgUrl={element.imgUrl}
                  siteUrl={element.siteUrl}
                />
              </div>
            );
          })}
        </div>
        <div
          className="row"
          style={{ justifyContent: "center", padding: "50px" }}
        >
          {/* <Link to="/certificates" className="btn" style={{ maxWidth: "98%" }}>
            View More Certification..
          </Link> */}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
