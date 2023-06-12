import React from 'react'
import ConcertCompass from '../assets/images/concert-compass.jpg'
import Tacod from '../assets/images/tacod.jpg'

const Portfolio = () => {
    // const projects = [...];

    return (
        <section className="bg-primary text-white px-5 py-32" id="portfolio">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        Portfolio
                    </h2>
                    <p className="pb-5">These are my best projects. They were built using various tools but mainly React, MERN and TailwindCSS. Check them out!</p>
                </div>
            </div>

            <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
                <div>
                    <a href="ch3rnand3z.github.io/Concert-Compass">
                        <img src={ ConcertCompass } alt="An image of Concert Compass" />
                    </a>
                </div>
                <div>
                    <a href="ch3rnand3z.github.io/Concert-Compass">
                        <img src={ ConcertCompass } alt="An image of Concert Compass" />
                    </a>
                </div>
                <div>
                    <a href="ch3rnand3z.github.io/Concert-Compass">
                        <img src={ ConcertCompass } alt="An image of Concert Compass" />
                    </a>
                </div>
                <div>
                    <a href="ch3rnand3z.github.io/Concert-Compass">
                        <img src={ ConcertCompass } alt="An image of Concert Compass" />
                    </a>
                </div>
                <div>
                    <a href="ch3rnand3z.github.io/Concert-Compass">
                        <img src={ ConcertCompass } alt="An image of Concert Compass" />
                    </a>
                </div>
                <div>
                    <a href="ch3rnand3z.github.io/Concert-Compass">
                        <img src={ ConcertCompass } alt="An image of Concert Compass" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio