"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MotionSection } from '@/components/motion';
import Image from 'next/image';
import { CgClose } from 'react-icons/cg';
import { GoLinkExternal } from "react-icons/go";

import './works.scss';

export default function Works() {
    const t = useTranslations('Works');
    const [searchTerm, setSearchTerm] = useState('');

    const works = [
        {
            id: 1,
            imgSrc: "/works/work-1.webp",
            title: t('items.0.title'),
            description: t('items.0.description'),
            src: "https://quimplo.online",
            width: 250,
            height: 300
        },
        {
            id: 2,
            imgSrc: "/works/work-2.webp",
            title: t('items.1.title'),
            description: t('items.1.description'),
            src: "https://post-and-publish.netlify.app/",
            width: 250,
            height: 300
        },
        {
            id: 3,
            imgSrc: "/works/work-3.webp",
            title: t('items.2.title'),
            description: t('items.2.description'),
            src: "https://paulovdev.framer.website/",
            width: 250,
            height: 300
        },
        {
            id: 4,
            imgSrc: "/works/work-4.webp",
            title: t('items.3.title'),
            description: t('items.3.description'),
            src: "https://shopease.example.com",
            width: 250,
            height: 300
        },
        {
            id: 5,
            imgSrc: "/works/work-5.webp",
            title: t('items.4.title'),
            description: t('items.4.description'),
            src: "https://devportfolio.example.com",
            width: 250,
            height: 300
        },
        {
            id: 6,
            imgSrc: "/works/work-3.webp",
            title: t('items.5.title'),
            description: t('items.5.description'),
            src: "https://creativehub.example.com",
            width: 250,
            height: 300
        },
        {
            id: 7,
            imgSrc: "/works/work-3.webp",
            title: t('items.6.title'),
            description: t('items.6.description'),
            src: "https://eduplatform.example.com",
            width: 250,
            height: 300
        },
        {
            id: 8,
            imgSrc: "/works/work-3.webp",
            title: t('items.7.title'),
            description: t('items.7.description'),
            src: "https://healthcarepro.example.com",
            width: 250,
            height: 300
        },
        {
            id: 9,
            imgSrc: "/works/work-3.webp",
            title: t('items.8.title'),
            description: t('items.8.description'),
            src: "https://travelbuddy.example.com",
            width: 250,
            height: 300
        },
        {
            id: 10,
            imgSrc: "/works/work-3.webp",
            title: t('items.9.title'),
            description: t('items.9.description'),
            src: "https://artgallery.example.com",
            width: 250,
            height: 300
        }
    ];

    const filteredWorks = works.filter(work =>
        work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        work.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const clearSearch = () => {
        setSearchTerm('');
    };

    return (
        <MotionSection id='works'
            initial={{ opacity: 0, filter: "blur(15px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
            <h1>{t('title')}</h1>
            <p>{t('description')}</p>

            <div className="filters">
                <input
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <button onClick={clearSearch}><CgClose /></button>
            </div>

            <div className="works-container">
                {filteredWorks.length > 0 ? (
                    filteredWorks.map(work => (
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
                    ))
                ) : (
                    <p>{t('noWorksFound')}</p>
                )}
            </div>
        </MotionSection>
    );
}
