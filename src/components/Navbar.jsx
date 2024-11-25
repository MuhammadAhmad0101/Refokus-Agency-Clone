import Button from "./Button";

function Navbar() {
      return (
            <div className="max-w-screen-lg mx-auto py-6 text-white flex items-center justify-between gap-20 border-b-[1px] border-[#3C3C43]">
                  <div className="flex items-center gap-20 justify-between">
                        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="Refokus LOGO" />
                        <div className="flex items-center gap-14">
                              {["Home", "Work", "Culture", "", "News"].map((tag, index) => {
                                    return (
                                          <a className="font-Satoshi font-medium flex items-center gap-1" key={index} href="#">
                                                {index == 1 && <span style={{ boxShadow: "0 0 0.25em #00FF19" }} className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>}
                                                {index == 3 ? <div className="bg-[#54545D] w-[1px] h-10"></div> : tag}
                                          </a>
                                    );
                              })}
                        </div>
                  </div>
                  <Button />
            </div>
      );
}

export default Navbar;
