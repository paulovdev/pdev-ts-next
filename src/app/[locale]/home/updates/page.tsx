import { MotionDiv } from '@/components/motion'
import { BiBook, BiMusic } from 'react-icons/bi';
import { MdOutlineMovie } from 'react-icons/md';

import "./updates.scss";


export default function HomeUpdates() {
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
            <h1>Updates</h1>
            <p>What am I doing at the moment besides studying ;)</p>
            <ul>
                <li>
                    <span><div className="icon"><BiBook /></div>Reading to:</span>
                    <div className="card-update">
                        <p>I've got my nose in "Steal Like an Artist" by Austin Kleon. A book about the process of creativity and the value of harnessing inspiration from various sources. I find myself resonating with the idea that nothing is original and creativity is a remix of our experiences and influences. </p>
                    </div>
                </li>
                <li>
                    <span><div className="icon"><BiMusic /></div>Listening to:</span>
                    <div className="card-update">
                        <p>MGMT's blend of synth-pop, rock, and unconventional lyrics provide a captivating soundtrack to my creative process.</p>
                    </div>
                </li>
                <li>
                    <span><div className="icon"><MdOutlineMovie /></div>Watching to:</span>
                    <div className="card-update">
                        <p>MGMT's blend of synth-pop, rock, and unconventional lyrics provide a captivating soundtrack to my creative process.</p>
                    </div>
                </li>

            </ul>

        </MotionDiv >
    );
}
