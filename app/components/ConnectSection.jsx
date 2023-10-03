"use client";
import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import InstagramIcon from "../../public/insta-icon.svg";
import fbIcon from "../../public/fb-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ConnectSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-1 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 ">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/SafnasKaldeen">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/safnas-kaldeen">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
          </Link>
          <Link href="https://www.instagram.com/safnas_kaldeen/">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
          <Link href="https://www.facebook.com/mohammed.safnas.7330/">
            <Image src={fbIcon} alt="fbIcon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
