"use client";

import { useTranslations } from 'next-intl'; 
import { MotionDiv } from '@/components/motion';
import Image from 'next/image';

import './stack.scss';

export default function HomeStack() {
    const t = useTranslations('HomeStack'); 

    const stacks = [
        {
            img: "/stacks/react.png",
            title: t('react.title'), 
            subTitle: t('react.subTitle'), 
            width: 40,
            height: 40
        },
        {
            img: "/stacks/firebase.png",
            title: t('firebase.title'),
            subTitle: t('firebase.subTitle'),
            width: 40,
            height: 40
        },
        {
            img: "/stacks/notion.png",
            title: t('notion.title'),
            subTitle: t('notion.subTitle'),
            width: 40,
            height: 40
        },
        {
            img: "/stacks/figma.png",
            title: t('figma.title'),
            subTitle: t('figma.subTitle'),
            width: 40,
            height: 40
        },
        {
            img: "/stacks/vs-code.png",
            title: t('vsCode.title'),
            subTitle: t('vsCode.subTitle'),
            width: 40,
            height: 40
        },
        {
            img: "/stacks/chat-gpt.png",
            title: t('chatGpt.title'),
            subTitle: t('chatGpt.subTitle'),
            width: 40,
            height: 40
        },
    ];

    return (
        <MotionDiv className="home-stack"
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

            <ul>
                {stacks.map((stack, index) => (
                    <li key={index}>
                        <div className="l-content">
                            <div className="icon-content">
                                <Image src={stack.img} width={stack.width} height={stack.height} alt="icon" />
                            </div>
                        </div>
                        <div className="r-content">
                            <h1>{stack.title}</h1>
                            <p>{stack.subTitle}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </MotionDiv>
    );
}
