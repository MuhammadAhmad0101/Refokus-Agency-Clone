import { FaArrowRightLong } from "react-icons/fa6";
function Card({ card, index }) {
      return (
            <div className={`w-${card.width} h-[65vh] rounded-md bg-[#27272A] p-4`}>
                  <div className="flex justify-between">
                        <h4>{card.smallMessage}</h4>
                        <FaArrowRightLong style={{ opacity: 0.65 }} />
                  </div>
                  <div className={`h-${card.height} w-full flex flex-col justify-between py-4`}>
                        <h1 className="text-3xl">{card.headline}</h1>
                        <p className={card.isButton ? card.ctnStyling : "opacity-75"}>{card.ctn}</p>
                  </div>
                  {card.isButton && <button className="border-solid border-[1px] text-white px-5 py-1 bg-transparent outline-none rounded-full text-sm mt-2">Contact Us</button>}
            </div>
      );
}

export default Card;
