"use client";

import { useState, useRef, useLayoutEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { MotionDiv, MotionButton } from '@/components/motion';
import { useTranslations } from 'next-intl';

import './setup.scss';

export default function HomeSetup() {
    const t = useTranslations('HomeSetup');

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleItems, setVisibleItems] = useState(5);
    const containerRef = useRef<HTMLDivElement>(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });

    useLayoutEffect(() => {
        if (containerRef.current) {
            setConstraints({
                left: -containerRef.current.scrollWidth + containerRef.current.clientWidth,
                right: 0
            });
        }
    }, []);

    const setupItems = [
        { title: t('cpu'), description: t('cpuDescription'), category: t('components') },
        { title: t('ram'), description: t('ramDescription'), category: t('components') },
        { title: t('graphicsCard'), description: t('graphicsCardDescription'), category: t('components') },
        { title: t('motherboard'), description: t('motherboardDescription'), category: t('components') },
        { title: t('storage'), description: t('storageDescription'), category: t('components') },
        { title: t('mouse'), description: t('mouseDescription'), category: t('peripherals') },
        { title: t('keyboard'), description: t('keyboardDescription'), category: t('peripherals') },
        { title: t('monitor'), description: t('monitorDescription'), category: t('peripherals') },
        { title: t('case'), description: t('caseDescription'), category: t('components') },
        { title: t('headset'), description: t('headsetDescription'), category: t('peripherals') },
        { title: t('lineFilter'), description: t('lineFilterDescription'), category: t('accessories') },
        { title: t('gamerCabinet'), description: t('gamerCabinetDescription'), category: t('components') },
        { title: t('coolerProcessor'), description: t('coolerProcessorDescription'), category: t('components') },
        { title: t('gamerChair'), description: t('gamerChairDescription'), category: t('furniture') },
        { title: t('speakers'), description: t('speakersDescription'), category: t('peripherals') },
        { title: t('webcam'), description: t('webcamDescription'), category: t('peripherals') },
        { title: t('powerSupply'), description: t('powerSupplyDescription'), category: t('components') },
        { title: t('extraStorage'), description: t('extraStorageDescription'), category: t('components') },
        { title: t('router'), description: t('routerDescription'), category: t('network') },
        { title: t('microphone'), description: t('microphoneDescription'), category: t('peripherals') },
        { title: t('vrHeadset'), description: t('vrHeadsetDescription'), category: t('peripherals') }
    ];


    const categories = ['All', 'Components', 'Peripherals', 'Network', 'Furniture', 'Accessories'];

    const showMoreItems = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 8);
    };

    return (
        <MotionDiv
            className="home-setup"
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
            <div className="home-setup-sticky">
                <h1>{t('heading')}</h1>
                <p>{t('subheading')}</p>
            </div>

            <div className="categories-container" ref={containerRef}>
                <MotionDiv
                    className="categories"
                    drag="x"
                    dragConstraints={constraints}
                >
                    {categories.map((category, index) => (
                        <MotionButton
                            key={index}
                            className={selectedCategory === category ? 'active' : ''}
                            onClick={() => setSelectedCategory(category)}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t(`category.${category}`)}
                        </MotionButton>
                    ))}
                </MotionDiv>
            </div>

            <ul>
                {setupItems
                    .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
                    .slice(0, visibleItems)
                    .map((item, index) => (
                        <li key={index}>
                            <strong>{item.title} <span>{t(`category.${item.category}`)}</span></strong>
                            <p>{item.description}</p>
                        </li>
                    ))}
            </ul>
            {visibleItems < setupItems.length && (
                <div className="show-more">
                    <button onClick={showMoreItems}><IoIosArrowDown />{t('showMore')}</button>
                </div>
            )}
        </MotionDiv>
    );
}
