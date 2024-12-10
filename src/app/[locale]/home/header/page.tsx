"use client";

import { useTranslations } from 'next-intl'; 
import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoIosArrowUp } from "react-icons/io";
import Image from 'next/image';
import { MotionDiv, AnimatePresenceDiv } from '@/components/motion';

import "./header.scss";

export default function HomeHeader() {
    const [showMoreAbout, setShowMoreAbout] = useState(false);
    const t = useTranslations('HomeHeader'); 

    return (
        <MotionDiv className="home-header"
            initial={{ opacity: 0, filter: "blur(15px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="profile-content">
                <div className="l-content">
                    <Image src="/photo.webp" width={125} height={125} alt="profile-photo" />
                </div>
                <div className="r-content">
                    <h1>{t('name')} <VscVerifiedFilled /></h1> 

                    <div className="available-for-works">
                        <div className="ball-green"></div>
                        {t('availableForWorks')} 
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
                <h2>{t('description')}</h2> 

                <AnimatePresenceDiv>
                    {showMoreAbout && (
                        <MotionDiv className="modal-more-about"
                            initial={{ opacity: 0, y: -10, filter: "blur(15px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -10, filter: "blur(15px)" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <p>{t('moreAbout.p1')}</p> 
                            <p>{t('moreAbout.p2')}</p> 
                            <span>{t('signature')}</span> 
                        </MotionDiv>
                    )}
                </AnimatePresenceDiv>

                <button onClick={() => setShowMoreAbout(!showMoreAbout)} className={!showMoreAbout ? "active" : ""}>
                    {t('moreAboutButton')} <IoIosArrowUp />
                </button> 
            </div>
        </MotionDiv>
    );
}
