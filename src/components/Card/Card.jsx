import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
function Card({ card, index, hover }) {
      return (
            <motion.div whileHover={{ backgroundColor: index == 1 ? "#2563EB" : "null" }} className={`w-${card.width} h-[65vh] rounded-md cursor-pointer bg-[#27272A] p-4`}>
                  <motion.div className="flex justify-between">
                        <h4>{card.smallMessage}</h4>
                        <FaArrowRightLong style={{ opacity: 0.65 }} />
                  </motion.div>
                  <motion.div whileHover={{ paddingLeft: "5px" }} className={`${index == 0 ? "h-full" : "h-5/6"} w-full flex flex-col justify-between py-4`}>
                        <h1 className="text-3xl">{card.headline}</h1>
                        <p className={card.isButton ? card.ctnStyling : "opacity-75"}>{card.ctn}</p>
                  </motion.div>
                  {card.isButton && <button className="border-solid border-[1px] text-white px-5 py-1 bg-transparent outline-none rounded-full text-sm mt-2">Contact Us</button>}
            </motion.div>
      );
}

export default Card;
