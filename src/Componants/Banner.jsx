import React from 'react';
import bannerImg  from "../assets/banner.png"
import Container from './Container/Container';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
      <>
        <div
          className="bg-cover h-80 md:h-[480px] relative bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="h-80 md:h-[480px] w-full bg-[#00000070] absolute top-0 left-0 z-10"></div>

          <Container>
            <div className="space-y-5 relative md:w-2/4 mx-auto px-3 md:px-0 z-30">
              <h1 className="text-3xl font-bold text-[#fd7d07] text-center drop-shadow-[0_2px_4px_rgb(0,0,0,0.6)]">
                <Typewriter
                  words={["Will you share a fresh meal with someone?"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={2000}
                />
              </h1>

              <h3 className="text-center leading-6 md:w-4/5 mx-auto text-[#ffff] drop-shadow-[0_1px_3px_rgb(0,0,0,0.9)]">
                Sharing an extra meal can brighten someone’s difficult day. A
                simple plate offers comfort, reduces waste, and spreads
                kindness. Donate what you can and help create meaningful change
                through small, caring actions.
              </h3>

              <div className="flex items-center justify-center">
                <Link
                  to={"/viewAllFoods"}
                  className="my-btn bg-linear-to-r text-white hover:bg-linear-to-l dark:via-[#fd7e07] dark:hover:bg-linear-to-l dark:from-[#fd7e07] dark:to-[#fd7e07] from-[#012444] dark:hover:from-[#012444] via-[#1b2f5b] to-[#fd7e07]"
                >
                  View All Foods
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </>
    ); 
        
};

export default Banner;