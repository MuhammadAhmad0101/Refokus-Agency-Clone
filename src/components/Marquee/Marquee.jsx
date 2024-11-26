import { motion } from "framer-motion";

function Marquee({ marqCollection, direction }) {
      return (
            <div className="w-full flex justify-between overflow-hidden">
                  <motion.div initial={{ x: direction === "left" ? "0" : "-100%" }} animate={{ x: direction === "left" ? "-100%" : "0" }} transition={{ ease: "linear", duration: 20, repeat: Infinity }} className="flex flex-shrink-0 gap-20 py-8 pr-14">
                        {marqCollection.map((url, index) => (
                              <img key={index} src={url} className="object-cover" />
                        ))}
                  </motion.div>

                  <motion.div initial={{ x: direction === "left" ? "0" : "-100%" }} animate={{ x: direction === "left" ? "-100%" : "0" }} transition={{ ease: "linear", duration: 20, repeat: Infinity }} className="flex flex-shrink-0 gap-20 py-8 pr-14">
                        {marqCollection.map((url, index) => (
                              <img key={index} src={url} className="object-cover" />
                        ))}
                  </motion.div>
            </div>
      );
}

export default Marquee;
