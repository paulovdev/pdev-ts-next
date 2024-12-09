"use client"

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import { IoLanguage } from 'react-icons/io5';
import { MotionDiv, AnimatePresenceDiv } from '@c/motion';
import LocaleSwitcherSelect from './locale-switcher-select';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleModal} className="locale-switcher-button">
                <IoLanguage size={24} />
            </button>
            <AnimatePresenceDiv>
                {isOpen && (
                    <MotionDiv
                        className="locale-switcher-modal"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
                            {routing.locales.map((cur) => (
                                <option key={cur} value={cur}>
                                    {t('locale', { locale: cur })}
                                </option>
                            ))}
                        </LocaleSwitcherSelect>
                        <button onClick={toggleModal} className="close-button">Close</button>
                    </MotionDiv>
                )}
            </AnimatePresenceDiv>
        </div>
    );
}