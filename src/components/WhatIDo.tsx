import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          O<span className="hat-h2">UR</span>
          <div>
            A<span className="do-h2">CTIVITIES</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7"/>
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7"/>
            </svg>
          </div>

          {/* Activity 1 */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6"/>
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6"/>
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>CREATIVE ARTS</h3>
              <h4>Hands-on Artistic Exploration</h4>
              <p>
                Kids explore painting, drawing, crafts, and creative design.
                These activities encourage imagination, creativity, and
                self-expression in a fun environment.
              </p>

              <h5>Activities</h5>
              <div className="what-content-flex">
                <div className="what-tags">Painting</div>
                <div className="what-tags">Drawing</div>
                <div className="what-tags">DIY Crafts</div>
                <div className="what-tags">Paper Art</div>
                <div className="what-tags">Clay Modeling</div>
                <div className="what-tags">Creative Design</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6"/>
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DISCOVERY & LEARNING</h3>
              <h4>Fun Educational Experiences</h4>
              <p>
                Interactive storytelling, nature walks, and learning games
                designed to spark curiosity and help kids explore the world
                around them.
              </p>

              <h5>Activities</h5>
              <div className="what-content-flex">
                <div className="what-tags">Storytelling</div>
                <div className="what-tags">Nature Walks</div>
                <div className="what-tags">Team Games</div>
                <div className="what-tags">Creative Thinking</div>
                <div className="what-tags">Problem Solving</div>
                <div className="what-tags">Group Activities</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}