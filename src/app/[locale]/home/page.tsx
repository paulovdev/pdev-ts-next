import HomeExperience from "./experience/page";
import HomeHeader from "./header/page";
import HomeStack from "./stack/page";
import HomeWorks from "./works/page";
import HomeSetup from "./setup/page"
import HomeUpdates from "./updates/page";

import "./home.scss"

export default function HomePage() {
    return (
        <section id="home">
            <HomeHeader />
            <div className="border-left"></div>
            <HomeWorks />
            <div className="border-left"></div>
            <HomeExperience />
            <div className="border-left"></div>
            <HomeStack />
            <div className="border-left"></div>
            <HomeSetup />
            <div className="border-left"></div>
            <HomeUpdates />
        </section>
    );
}
