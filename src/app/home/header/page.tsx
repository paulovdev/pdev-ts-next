"use client"

import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoIosArrowUp } from "react-icons/io";
import Image from 'next/image';

import "./homeHeader.scss";

export default function HomeHeader() {
    const [showMoreAbout, setShowMoreAbout] = useState(false);

    return (
        <div className="home-header" >
            <div className="profile-content">
                <div className="l-content">
                    <Image src="/photo.webp" width={125} height={125} alt="profile-photo" />
                </div>
                <div className="r-content">
                    <h1>Paulo Vitor <VscVerifiedFilled /></h1>

                    <div className="available-for-works">

                        <div className="ball-green"></div>
                        Available for new works.

                    </div>

                    <div className="icon-content">
                        <div className="icon-bg">
                            <FaLinkedin />
                        </div>

                        <div className="icon-bg">
                            <FaTwitter />
                        </div>

                        <div className="icon-bg">
                            <FaGithub />
                        </div>
                    </div>
                </div>
            </div>


            <div className="more-about">
                <h2>
                    Front-end developer & UX/UI design, specializing in creating immersive and intuitive user experiences, consistently pushing the boundaries of design innovation.
                </h2>

                {showMoreAbout && (
                    <div className="modal-more-about">
                        <p>As we talked about, I'm a front-end developer passionate about music and games. In addition to creating amazing interfaces for the web, I also dedicate my free time to producing music and exploring the world of games.</p>

                        <p>I love working on challenging projects and diving into long, engaging texts. My creativity and technical skills allow me to create unique and engaging digital experiences for users. I always seek to improve my skills and stay up to date with the latest trends in the world of web development.</p>

                        <span>Paulo Vitor Pimentel dos Santos</span>
                    </div>
                )}

                <button onClick={() => setShowMoreAbout(!showMoreAbout)} className={!showMoreAbout ? "active" : ""}>
                    More about me <IoIosArrowUp />
                </button>
            </div>
        </div>
    );
}
