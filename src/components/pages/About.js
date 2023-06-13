import React from "react";
import RhodemcImg from "../../assets/images/rhodemc-img.jpeg";


const About = () => {
    return (
        <section className="bg-primary text-white py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
                <div className="hero-info pb-5 md:pb-0">
                    <h1 className="text:4xl lg:text-6xl">
                        Hi, <br />
                        I am <span className="text-accent">M</span>att Rhodes <br />
                        Software Engineer
                    </h1>
                    <p className="py-5 mr-4 text-justify">My name is Matt Rhodes. I currently live in Astoria, Oregon and am the Head Research 
                        and Development Brewer at Fort George Brewery. I've been in the Beer Industry for ten years but seek 
                        a career change to find a greater sense of work-life balance. Making beer is an orchestration of technical 
                        knowledge and art. Because Software Engineering is also a combination of the two, my brewing experience 
                        sets me up for success on this new career path.<br />
                        <br />
                        When not brewing, I enjoy traveling, going to concerts, playing ice hockey and spending time with my dogs. 
                        Cheers!
                    </p>
                    {/* <button className="btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent">See Projects</button> */}
                </div>
                <div className="rhodemc-img">
                    <img src={ RhodemcImg } alt="Matt Rhodes" className="lgw-[80%] ml-auto" />
                </div>
            </div>
        </section>
    )
}

export default About;