import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";
import arqitel from "../../../public/videos/arqitel.webm";
import ttr from "../../../public/videos/ttr.webm";
import yir from "../../../public/videos/yir.webm";
import yahoo from "../../../public/videos/yahoo.webm";

function Products() {
      const ProductData = [
            {
                  title: "Arqitel",
                  description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
                  live: true,
                  caseStudyButton: false,
            },
            {
                  title: "TTR",
                  description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
                  live: true,
                  caseStudyButton: false,
            },
            {
                  title: "YIR 2022",
                  description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
                  live: true,
                  caseStudyButton: true,
            },
            {
                  title: "Yahoo!",
                  description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
                  live: true,
                  caseStudyButton: true,
            },
      ];
      const [yPos, setYPos] = useState(null);
      const productAnimate = (index) => {
            setYPos(index * 19.4);
      };
      return (
            <div className="text-white w-full mt-20 relative">
                  {ProductData.map((item, index) => (
                        <Product key={index} index={index} productAnimate={productAnimate} product={item} />
                  ))}

                  <div className="w-full h-full pointer-events-none absolute top-0">
                        <motion.div transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }} initial={{ y: yPos, x: "-50%" }} animate={{ y: yPos + "rem" }} className="w-[20rem] rounded-md h-[19.4rem] absolute left-[45%] overflow-hidden">
                              <motion.div transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }} animate={{ y: -yPos + "rem" }} className="w-full h-full">
                                    {yPos == 0 && (
                                          <video className="w-full h-full" autoPlay muted loop>
                                                <source src={arqitel} type="video/webm" />
                                                Your browser does not support the video tag.
                                          </video>
                                    )}
                              </motion.div>
                              <motion.div transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }} animate={{ y: -yPos + "rem" }} className="w-full h-full">
                                    <video className="w-full h-full" autoPlay muted loop>
                                          <source src={ttr} type="video/webm" />
                                          Your browser does not support the video tag.
                                    </video>
                              </motion.div>
                              <motion.div transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }} animate={{ y: -yPos + "rem" }} className="w-full h-full">
                                    <video className="w-full h-full" autoPlay muted loop>
                                          <source src={yir} type="video/webm" />
                                          Your browser does not support the video tag.
                                    </video>
                              </motion.div>
                              <motion.div transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }} animate={{ y: -yPos + "rem" }} className="w-full h-full">
                                    <video className="w-full h-full" autoPlay muted loop>
                                          <source src={yahoo} type="video/webm" />
                                          Your browser does not support the video tag.
                                    </video>
                              </motion.div>
                        </motion.div>
                  </div>
            </div>
      );
}

export default Products;
