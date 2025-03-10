import Stripe from "./Stripe";

function Stripes() {
      const stripeData = [
            {
                  url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
                  number: 52,
            },
            {
                  url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
                  number: 2,
            },
            {
                  url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
                  number: 15,
            },
            {
                  url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
                  number: 52,
            },
            {
                  url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
                  number: 2,
            },
            {
                  url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
                  number: 15,
            },
      ];
      return (
            <div className="w-full h-12 text-white mt-14 flex">
                  {stripeData.map((item, index) => (
                        <Stripe key={index} data={item} />
                  ))}
            </div>
      );
}

export default Stripes;
