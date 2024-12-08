'use client';

import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { GoLinkExternal } from "react-icons/go";

import './works.scss';

export default function Works() {
    const [searchTerm, setSearchTerm] = useState('');

    const works = [
        {
            id: 1,
            imgSrc: "/works/work-1.webp",
            title: "Quimplo",
            description: "Quimplo is a marketplace website for selling templates.",
            src: "https://quimplo.online"
        },
        {
            id: 2,
            imgSrc: "/works/work-2.webp",
            title: "Paulin",
            description: "Paulin is a simple minimal portfolio website.",
            src: "https://post-and-publish.netlify.app/"
        },
        {
            id: 3,
            imgSrc: "/works/work-3.webp",
            title: "paulovdev",
            description: "paulovdev is a full portfolio website.",
            src: "https://paulovdev.framer.website/"
        },
        {
            id: 4,
            imgSrc: "/works/work-4.webp",
            title: "The Batman",
            description: "ShopEase is an e-commerce platform for easy online shopping.",
            src: "https://shopease.example.com"
        },
        {
            id: 5,
            imgSrc: "/works/work-5.webp",
            title: "Meow Café",
            description: "DevPortfolio is a sleek and modern portfolio for developers.",
            src: "https://devportfolio.example.com"
        },
        {
            id: 6,
            imgSrc: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80",
            title: "Coming soon",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis velit suscipit est praesentium sint error nihil eum eveniet.",
            src: "https://creativehub.example.com"
        },
        {
            id: 7,
            imgSrc: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80",
            title: "Coming soon",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis velit suscipit est praesentium sint error nihil eum eveniet.",
            src: "https://eduplatform.example.com"
        },
        {
            id: 8,
            imgSrc: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80",
            title: "Coming soon",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis velit suscipit est praesentium sint error nihil eum eveniet.",
            src: "https://healthcarepro.example.com"
        },
        {
            id: 9,
            imgSrc: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80",
            title: "Coming soon",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis velit suscipit est praesentium sint error nihil eum eveniet.",
            src: "https://travelbuddy.example.com"
        },
        {
            id: 10,
            imgSrc: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80",
            title: "Coming soon",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis velit suscipit est praesentium sint error nihil eum eveniet.",
            src: "https://artgallery.example.com"
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
        <section id='works'>
            <h1>My Works</h1>
            <p>Explore my portfolio of projects spanning from 2021 to 2024.</p>

            <div className="filters">
                <input
                    type="text"
                    placeholder="Search by title or description..."
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
                                <img src={work.imgSrc} alt={work.title} />
                            </div>
                            <h1>{work.title}</h1>
                            <p>{work.description}</p>
                            <div className="see-work">
                                <GoLinkExternal />
                            </div>
                        </a>
                    ))
                ) : (
                    <p>No works found matching your search criteria.</p>
                )}
            </div>
        </section>
    );
}