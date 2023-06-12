import React from 'react'

const Resume = () => {
    return (
            <section className="bg-primary text-white px-5 py-32" id="resume">
                <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                    <div className="mb-5">
                        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                            Resume
                        </h2>
                        <div className="flex py-5">
                            <a
                                href="#"
                                className="pr-4 inline-block text-accent hover:text-white"
                                >Here's a link to my resume!</a>
                        </div>
                        <h3 className="py-5 mr-4 text-justify">Front-End Proficiencies:</h3>
                            <ul className="py-5 mr-4 text-justify">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>TailwindCSS</li>
                            </ul>
                        <h3 className="py-5 mr-4 text-justify">Back-End Proficiencies:</h3>
                            <ul className="py-5 mr-4 text-justify">
                                <li>APIs</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL, Sequelize</li>
                                <li>MongoDB, Mongoose</li>
                                <li>REST</li>
                                <li>GraphQL</li>
                            </ul>
                    </div>
                </div>
            </section>
    )
}

export default Resume