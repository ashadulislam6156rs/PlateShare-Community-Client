import React from 'react';
import bannerImg  from "../assets/banner.png"
import Container from './Container/Container';

const Banner = () => {
    return (
      <>
        <Container>
          <div
            className="bg-cover h-[280px] md:h-[480px] relative bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${bannerImg})` }}
          >
            <div className="h-[280px] md:h-[480px] w-full bg-[#00000070] absolute top-0 left-0 z-10"></div>

            <div className="space-y-5 md:w-2/4 mx-auto px-3 md:px-0 z-50">
              <h1 className="text-3xl font-bold text-[#fd7d07] text-center drop-shadow-[0_2px_4px_rgb(0,0,0,0.6)]">
                Would you like a Cup of Delicious Coffee?
              </h1>

              <h3 className="text-center leading-6 md:w-4/5 mx-auto text-[#f4f4f4eb] drop-shadow-[0_1px_3px_rgb(0,0,0,0.7)]">
                It's coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of every moment!!! Enjoy the
                beautiful moments and make them memorable.
              </h3>

              <div className="flex items-center justify-center">
                <button className="my-btn bg-linear-to-r text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07]">
                  View All Foods
                </button>
              </div>
            </div>
          </div>
        </Container>
      </>
    ); 
        
};

export default Banner;