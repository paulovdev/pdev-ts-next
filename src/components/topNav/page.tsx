"use client"

import { useState, useEffect } from 'react';

import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

import ThemeChange from '../themeChange/themeChange';
import { useLocale } from "next-intl"

import "./topNav.scss";
import LocaleSwitcherSelect from '../locale-switcher-select';

const TopNav = () => {
    const locale = useLocale()
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date: Date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${hours}:${minutes} ${period}`;
    };

    return (
        <div id='top-nav'>
            <div className="top-nav-container">
                <ul>
                    <li>
                        <div className="icon">
                            <FaLocationDot />
                        </div>
                        <p>Brazil</p>
                        <span>  </span>
                        <div className="icon">
                            <GoClockFill />
                        </div>
                        <p>{formatTime(time)}</p>
                    </li>

                    <li>
                        <div className="theme-switch">

                            <LocaleSwitcherSelect defaultValue={locale} />
                        </div>
                        <ThemeChange />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopNav;
