import React,{useRef,useMemo} from "react";
import "./skills.css";

import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

const Skills = () => {
  // gsap.registerPlugin(CSSPlugin, ScrollTrigger);

  const comp1 = useRef();

  // const tl = useMemo(() => gsap.timeline({ paused: false,scrollTrigger:".s" }), []);

  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors

      // tl.fromTo(
      //   ".skills-content",
      //   {
      //     scale: 0.7,
      //     opacity: 0.5,
      //   },
      //   {
      //     opacity: 1,
      //     scale: 1,
      //     scrollTrigger: {
      //       trigger: ".skills-content",
      //       scrub: true,
      //       markers: false,
      //       start: "top 80%",
      //       end: "bottom 30%",
      //     },
      //   },
      //   "a"
      // );
      gsap.fromTo(
        ".progress",
        {
          y: "110px",
          opacity: 0.3,
        },
        {
          y: 0,
          opacity:1,
          stagger: 0.3,
          delay: 0.05,
          duration: 3,
          // scrollTrigger:".s"
          

          scrollTrigger: {
            trigger: ".skills-content",
            // scrub: true,
            markers: true,
            start: 'top bottom',
            end: 'bottom center',
            scrub:true,
            // end: "bottom 30%",
          },
        },
        "a"
      );
      
    }, comp1);

    return () =>{ ctx.revert();
    }
  }, []);

  return (
    <div  id="skills" className="s" ref={comp1}>
      <div className="s-container">
      <div class="section-title">
          <h2 className="heading">Skills</h2>
        </div>
        <div class="row skills-content">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" 
          // data-aos="fade-up" 
          // data-aos-delay='100' 
          // data-aos-duration='500'
          >
            <div class="progress">
              <span class="skill">HTML 
              {/* <i class="val">100%</i> */}
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: '90%'}}
                ></div>
              </div>
            </div>
            <div class="progress">
              <span class="skill">CSS 
              {/* <i class="val">90%</i> */}
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="86"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: '86%'}}
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">JavaScript 
              {/* <i class="val">75%</i> */}
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: '75%'}}
                ></div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"
            // data-aos="fade-up"
            // data-aos-delay='100' 
            // data-aos-duration='500'
            >
            <div class="progress">
              <span class="skill">Problem Solving
              {/* <i class="val">80%</i> */}
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: '80%'}}
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">C/C++ 
              {/* <i class="val">90%</i> */}
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: '90%'}}
                ></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">ReactJS 
              {/* <i class="val">55%</i> */}
              </span>
              <div class="progress-bar-wrap">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="55"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{width: '55%'}}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
