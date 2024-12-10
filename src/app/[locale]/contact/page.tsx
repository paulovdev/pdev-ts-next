"use client";

import { useTranslations } from 'next-intl';
import { MotionSection } from "@/components/motion";
import { MdEmail, MdPhone } from 'react-icons/md';
import './contact.scss';

export default function Contact() {
    const t = useTranslations('Contact'); 

    return (
        <MotionSection
            id='contact'
            initial={{ opacity: 0, filter: "blur(15px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>

            <h1>{t('heading')}</h1> 
            <p>{t('description')}</p> 

            <div className="contact-links">
                <a href="mailto:paulo@gmail.com"><MdEmail />{t('email')}</a> 
                <a href="tel:+1234567890"><MdPhone />{t('call')}</a> 
            </div>

            <form className="contact-container" onClick={(e) => e.preventDefault()}>
                <div className="input-wrapper">
                    <input type="text" autoComplete='name' placeholder={t('namePlaceholder')} />
                    <input type="email" autoComplete='email' placeholder={t('emailPlaceholder')} />
                </div>
                <textarea placeholder={t('messagePlaceholder')}></textarea>
                <button>{t('sendButton')}</button>
            </form>

            <h2>{t('responseTime')} <span>{t('avgResponse')}</span></h2>
        </MotionSection>
    );
}
