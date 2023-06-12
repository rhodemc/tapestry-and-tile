import React from "react";
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return <div className="py-4 text-center bg-primary text-white flex justify-center ">
            <div className="py-5">
                <a
                    href="https://twitter.com/"
                    className="pr-4 inline-block text-accent hover:text-white"
                >
                {" "}
                <AiOutlineTwitter size={40} />{" "}
                </a>
                <a
                    href="https://www.youtube.com/"
                    className="pr-4 inline-block text-accent hover:text-white"
                >
                {" "}
                <AiOutlineYoutube size={40} />{" "}
                </a>
                <a
                    href="https://www.facebook.com/"
                    className="pr-4 inline-block text-accent hover:text-white"
                >
                {" "}
                <AiOutlineFacebook size={40} />{" "}
                </a>
            </div>
  </div>;
};

export default Footer;