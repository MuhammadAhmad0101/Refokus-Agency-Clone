function Stripe({ data }) {
      return (
            <div data-scroll data-scroll-speed="0" className="flex w-full justify-between items-center border-[#484850] border-solid border-[.5px] px-3">
                  <img className="object-cover scale-[.85]" src={data.url} alt="" />
                  <h1 className="text-lg font-Satoshi font-semibold">{data.number}</h1>
            </div>
      );
}

export default Stripe;
