"use client";

import { useState, useRef, useLayoutEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { MotionDiv, MotionButton } from '@/components/motion';

import './setup.scss';

export default function HomeSetup() {
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
        { title: 'Processor', description: 'Intel Core i7-12700K, 3.6GHz, 12-core, 20-threads', category: 'Components' },
        { title: 'RAM', description: 'Team Group T-Force Vulcan Pichau, (2x32GB)', category: 'Components' },
        { title: 'Graphics Card', description: 'RX 6600 CLD 8GB ASRock AMD Radeon', category: 'Components' },
        { title: 'Motherboard', description: 'ASUS Prime H610M-E D4 LGA 1700', category: 'Components' },
        { title: 'Storage', description: 'SSD NVME 2 SSD 480GB XrayDisk', category: 'Components' },
        { title: 'Mouse', description: 'Logitech G Pro', category: 'Peripherals' },
        { title: 'Keyboard', description: 'Logitech G Pro', category: 'Peripherals' },
        { title: 'Monitor', description: 'AOC 21.5" LED Full HD', category: 'Peripherals' },
        { title: 'Case', description: 'Pichau HX300 Glass', category: 'Components' },
        { title: 'Headset', description: 'Havit, 50mm', category: 'Peripherals' },
        { title: 'Line Filter', description: 'DPS Clamper Energia 8 Black, 013000', category: 'Accessories' },
        { title: 'Gamer Cabinet', description: 'Pichau HX300 Glass Black, PG-HX3-G01', category: 'Components' },
        { title: 'Cooler for Processor', description: 'Cooler Master Hyper H410R 92mm Red Led, RR-H410-20PK-R1', category: 'Components' },
        { title: 'Gamer Chair', description: 'TGT Heron TX, Black and Gray, TGT-HRTX-BK01', category: 'Furniture' },
        { title: 'Speakers', description: 'Logitech Z333', category: 'Peripherals' },
        { title: 'Webcam', description: 'Logitech C920', category: 'Peripherals' },
        { title: 'Power Supply', description: 'Corsair CV550, 550W', category: 'Components' },
        { title: 'Extra Storage', description: 'Seagate 2TB External HDD', category: 'Components' },
        { title: 'Router', description: 'TP-Link Archer C6', category: 'Network' },
        { title: 'Microphone', description: 'Blue Yeti USB Microphone', category: 'Peripherals' },
        { title: 'VR Headset', description: 'Oculus Rift S', category: 'Peripherals' }
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
                <h1>Setup</h1>
                <p>Here you will find the main equipment I use in my setup.</p>
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
                            {category}
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
                            <strong>{item.title} <span>{item.category}</span></strong>
                            <p>{item.description}</p>
                        </li>
                    ))}
            </ul>
            {visibleItems < setupItems.length && (
                <div className="show-more">
                    <button onClick={showMoreItems}><IoIosArrowDown />Show more</button>
                </div>
            )}
        </MotionDiv>
    );
}
