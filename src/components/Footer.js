import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return <div className="py-4 text-center bg-primary text-white flex justify-center ">
            <div className="py-5">
                <a
                    href="https://github.com/rhodemc"
                    className="pr-4 inline-block text-accent hover:text-white"
                >
                {" "}
                <AiOutlineGithub size={40} />{" "}
                </a>
                <a
                    href="https://www.linkedin.com/"
                    className="pr-4 inline-block text-accent hover:text-white"
                >
                {" "}
                <AiOutlineLinkedin size={40} />{" "}
                </a>
                <a
                    href="https://www.twitter.com/"
                    className="pr-4 inline-block text-accent hover:text-white"
                >
                {" "}
                <AiOutlineTwitter size={40} />{" "}
                </a>
            </div>
  </div>;
};

export default Footer;