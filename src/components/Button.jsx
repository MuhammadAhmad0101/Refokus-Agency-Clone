import { IoIosReturnRight } from "react-icons/io";
function Button({ ctn="Get Started" }) {
      return (
            <div className="w-32 cursor-pointer h-10 px-4 py-4 text-sm text-nowrap font-Satoshi font-medium flex justify-center items-center gap-2 rounded-full text-[#000000] bg-[#F4F4F5]  hover:bg-transparent hover:border-solid hover:border-[.5px] transition-all duration-300 hover:text-white">
                  {ctn}
                  <IoIosReturnRight size={"4rem"} />
            </div>
      );
}

export default Button;
