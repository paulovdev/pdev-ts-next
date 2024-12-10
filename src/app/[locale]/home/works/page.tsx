"use client";

import { useTranslations } from 'next-intl'; 
import { MotionDiv } from '@/components/motion';
import { GoLinkExternal } from "react-icons/go";
import Image from 'next/image';

import "./works.scss";

export default function HomeWorks() {
    const t = useTranslations('HomeWorks'); 

    const works = [
        {
            id: 1,
            imgSrc: "/works/work-1.webp",
            title: t('work1.title'), 
            description: t('work1.description'), 
            src: "https://quimplo.online",
            width: 250,
            height: 300
        },
        {
            id: 2,
            imgSrc: "/works/work-2.webp",
            title: t('work2.title'),
            description: t('work2.description'),
            src: "https://post-and-publish.netlify.app/",
            width: 250,
            height: 300
        },
        {
            id: 3,
            imgSrc: "/works/work-3.webp",
            title: t('work3.title'),
            description: t('work3.description'),
            src: "https://paulovdev.framer.website/",
            width: 250,
            height: 300
        }
    ];

    return (
        <MotionDiv className="home-works"
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0.455, 0.03, 0.515, 0.955]
                }
            }}
            viewport={{ once: true }}
        >
            <h1>{t('heading')}</h1>
            <p>{t('subheading')}</p> 

            <div className="works-container">
                {works.map(work => (
                    <a href={work.src} target="_blank" className="w-content" key={work.id}>
                        <div className="img-content">
                            <Image src={work.imgSrc} alt={work.title} width={work.width} height={work.height} />
                        </div>
                        <h1>{work.title}</h1>
                        <p>{work.description}</p>
                        <div className="see-work">
                            <GoLinkExternal />
                        </div>
                    </a>
                ))}
            </div>
        </MotionDiv>
    );
}
