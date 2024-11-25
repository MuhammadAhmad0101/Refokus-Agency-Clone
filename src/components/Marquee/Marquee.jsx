function Marquee({ marqCollection }) {
      return (
            <div className="w-full py-8 flex items-center justify-between gap-14">
                  {marqCollection.map((url, index) => (
                        <img className="object-cover flex-shrink-0" key={index} src={url} alt="" />
                  ))}
            </div>
      );
}

export default Marquee;
