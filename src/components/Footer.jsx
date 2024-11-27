function Footer() {
      return (
            <div className="max-w-screen-lg mt-12 pt-20 mx-auto flex gap-10 text-white">
                  <h1 className="text-[13vw] font-semibold">refokus.</h1>
                  <div className="flex w-full  items-center">
                        <div className="w-full h-full justify-around py-12 px-5 flex flex-col">
                              <p className="opacity-50">Socials</p>
                              <div>
                                    {["Instagram", "Twitter", "Linkedin"].map((social, index) => {
                                          return (
                                                <p className="opacity-50" key={index}>
                                                      {social}
                                                </p>
                                          );
                                    })}
                              </div>
                        </div>
                        <div className="w-full h-full justify-between py-10  px-5 flex flex-col">
                              <p className="opacity-50 mt-6">Sitemaps</p>
                              <div>
                                    {["Home", "Work", "Careers", "Contact"].map((Sitemaps, index) => {
                                          return (
                                                <p className="opacity-50" key={index}>
                                                      {Sitemaps}
                                                </p>
                                          );
                                    })}
                              </div>
                        </div>
                        <div className="flex items-center flex-col">
                              <p className="text-xs text-right w-[80%] mt-20">Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                              <img className="mt-5" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                        </div>
                  </div>
            </div>
      );
}

export default Footer;
