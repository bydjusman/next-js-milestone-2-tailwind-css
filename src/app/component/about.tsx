import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/about.jpg"
              width={500} // Replace with the actual width of your image
              height={300} // Replace with the actual height of your image
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About me
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              I&apos;m Usman, a dedicated Full Stack Web Developer with a passion
              for building dynamic and responsive applications. With experience
              in both front-end and back-end technologies like React, Node.js,
              and Next.js, I&apos;m focused on creating efficient, user-centered
              applications. Currently, I&apos;m advancing my skills in cloud
              technologies and Next.js to bring even more value to my projects.
              I look forward to connecting with others and exploring exciting
              new opportunities!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
