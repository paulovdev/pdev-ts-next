"use client";

import { useTranslations } from 'next-intl'; 
import { MotionDiv } from '@/components/motion';
import { BiBook, BiMusic } from 'react-icons/bi';
import { MdOutlineMovie } from 'react-icons/md';

import './updates.scss';

export default function HomeUpdates() {
    const t = useTranslations('HomeUpdates'); 

    return (
        <MotionDiv className="home-updates"
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0.455, 0.03, 0.515, 0.955]
                }
            }}
            viewport={{ once: true }}>
            <h1>{t('heading')}</h1> 
            <p>{t('subheading')}</p> 

            <ul>
                <li>
                    <span><div className="icon"><BiBook /></div>{t('reading')}</span>
                    <div className="card-update">
                        <p>{t('readingDescription')}</p> 
                    </div>
                </li>
                <li>
                    <span><div className="icon"><BiMusic /></div>{t('listening')}</span>
                    <div className="card-update">
                        <p>{t('listeningDescription')}</p> 
                    </div>
                </li>
                <li>
                    <span><div className="icon"><MdOutlineMovie /></div>{t('watching')}</span>
                    <div className="card-update">
                        <p>{t('watchingDescription')}</p> 
                    </div>
                </li>
            </ul>
        </MotionDiv>
    );
}
