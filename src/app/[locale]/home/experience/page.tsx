"use client";

import { useTranslations } from 'next-intl';
import { MotionDiv } from '@/components/motion';
import { FaBuilding, FaGraduationCap } from 'react-icons/fa';
import { TbBabyCarriageFilled } from 'react-icons/tb';

import './experience.scss';

const HomeExperience = () => {
    const t = useTranslations('HomeExperience');

    const experiences = [
        {
            year: "Sep 2024 – Oct 2028",
            company: t('exp1.company'),
            role: t('exp1.role'),
            icon: <FaGraduationCap size={22} />,
            span: <span style={{ color: "#f74c19" }}>.</span>
        },
        {
            year: "Mar 2022 – Present",
            company: t('exp2.company'),
            role: t('exp2.role'),
            icon: <FaBuilding size={18} />,
            span: <span style={{ color: "#e9561f" }}>.</span>
        },
        {
            year: "Oct 2021 – Nov 2022",
            company: t('exp3.company'),
            role: t('exp3.role'),
            icon: <FaBuilding size={18} />,
            span: <span style={{ color: "#00de00" }}>.</span>
        },
        {
            year: "Fev 2021 – Jan 2022",
            company: t('exp4.company'),
            role: t('exp4.role'),
            icon: <FaGraduationCap size={22} />,
            span: <span style={{ color: "#9453ee" }}>.</span>
        }
    ];

    return (
        <MotionDiv className="home-experience"
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

            <div className="timeline">
                <div className="timeline-line"></div>

                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-year">{exp.year}</div>
                        <div className="timeline-icon">{exp.icon}</div>

                        <div className="timeline-card">
                            <h1>{exp.company} {exp.span}</h1>
                            <p>{exp.role}</p>
                        </div>
                    </div>
                ))}
                <div className="end"><TbBabyCarriageFilled size={18} /> {t('bornIn')}</div>
            </div>
        </MotionDiv>
    );
}

export default HomeExperience;
