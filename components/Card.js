import { SiTinder } from "react-icons/si";

export default function Card() {
  return (
    <div className={style.wrapper}>
      <div className={style.cardMain}>
        <div className={style.noMoreWrapper}>
          <SiTinder className={style.tinderLogo} />
          <div className={style.noMoreText}>
            No more profiles in your location...
          </div>
        </div>
        <div className={style.swipeContainer}>
          {/* {cardsData.map((card, index) => (
            <TinderCardItem card={card} key={index} />
          ))} */}
        </div>
      </div>
      {/* <CardFooter/> */}
    </div>
  );
}
