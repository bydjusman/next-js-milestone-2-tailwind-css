import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require ("../../../public/about.jpg")}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About me 
        <br className="hidden lg:inline-block" />
      </h1>
      <p className="mb-8 leading-relaxed">
      I'm a passionate web developer with a strong foundation in HTML, CSS, and JavaScript. 
      Currently, I am honing my skills in React and Next.js to build responsive, 
      high-performance websites. I enjoy problem-solving and have a keen interest in creating user-friendly,
       visually appealing interfaces. I’m committed to continuous learning and excited to leverage my skills to contribute to innovative projects in the tech industry.
      </p>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
