import { useScroll } from "motion/react";
import { useState } from "react";
function Work() {
      const [images, setImage] = useState([
            {
                  url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
                  top: "50%",
                  left: "50%",
                  isActive: false,
            },
            {
                  url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
                  top: "56%",
                  left: "44%",
                  isActive: false,
            },
            {
                  url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
                  top: "45%",
                  left: "56%",
                  isActive: false,
            },
            {
                  url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
                  top: "60%",
                  left: "53%",
                  isActive: false,
            },
            {
                  url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
                  top: "43%",
                  left: "40%",
                  isActive: false,
            },
            {
                  url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
                  top: "65%",
                  left: "55%",
                  isActive: false,
            },
      ]);
      const imageAnimation = (arr) => {
            setImage((images) => images.map((imageDetail, index) => (index == arr.indexOf(index) ? { ...imageDetail, isActive: true } : { ...imageDetail, isActive: false })));
      };
      const { scrollYProgress } = useScroll();
      scrollYProgress.on("change", (latest) => {
            switch (Math.floor(latest * 100)) {
                  case 0:
                        imageAnimation([]);
                        break;
                  case 1:
                        imageAnimation([0]);
                        break;
                  case 3:
                        imageAnimation([0, 1]);
                        break;
                  case 4:
                        imageAnimation([0, 1, 2]);
                        break;
                  case 6:
                        imageAnimation([0, 1, 2, 3]);
                        break;
                  case 8:
                        imageAnimation([0, 1, 2, 3, 4]);
                        break;
                  case 9:
                        imageAnimation([0, 1, 2, 3, 4, 5]);
                        break;
            }
      });
      return (
            <div className="max-w-screen-lg mx-auto select-none relative text-white">
                  <h1 className="text-[35vw] leading-none text-center font-medium">work</h1>
                  <div className="absolute top-0 w-full h-full">{images.map((item, index) => item.isActive && <img data-scroll data-scroll-speed="0.7" className="rounded-md w-56 absolute -translate-x-1/2 -translate-y-1/2" style={{ left: item.left, top: item.top }} key={index} src={item.url} alt="" />)}</div>
            </div>
      );
}

export default Work;
