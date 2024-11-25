import Card from "./Card";
function Cards() {
      const cardData = [
            { smallMessage: "Up Next: News", headline: "Insights and behind the scenes", ctn: "Explore what drives our team", isButton: false, width: "1/2", height: "full" },
            { smallMessage: "Get In Touch", headline: "Let's get to it, together.", ctn: "Start a Project", isButton: true, ctnStyling: "font-bold text-6xl", width: "full", height: "5/6" },
      ];
      return (
            <div className="max-w-screen-lg mt-32 gap-2 mx-auto flex text-white">
                  {cardData.map((card, index) => {
                        return <Card key={index} index={index} card={card} />;
                  })}
            </div>
      );
}

export default Cards;
