import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Find your Job Now</h1>
      </header>
      <main className="home-content">
        <section className="intro">
          It is a unified website for recruiters and candidates to post new jobs as well as to look for new job openings. 
        </section>
        <h1>Welcome !!! </h1>
        <section className="image-section">
          <marquee behavior="scroll" direction="left">
            <img 
              src="https://static.toiimg.com/thumb/msid-106098609,width-1280,height-720,resizemode-4/106098609.jpg" 
              alt="Job search illustration"
            />
            <img 
              src="https://storage.googleapis.com/interactapp-202211.appspot.com/cfB7YHEC863JJOB-POSTING-1024x576.png"
              alt="Job search illustration"
            />
            <img 
              src="https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Job search illustration"
            />
            <img 
              src="https://media.istockphoto.com/id/1420794762/photo/were-hiring-join-our-team.webp?b=1&s=170667a&w=0&k=20&c=ZV-nsluH_R8S9Fse1uHPFOW0GUDskRu65PixxyhJXBg="
              alt="Job search illustration"
            />
          </marquee>
        </section>
      </main>
    </div>
  );
}

export default Home;
