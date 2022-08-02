import style from "./heart.module.scss";
import { useNavigate } from "react-router-dom";

export default function Heart({
  quote,
  fetchNewSuggestionsAction,
  userId,
  setHeartClicked,
  updatePageButtonAction,
}) {
  const navigate = useNavigate();
  const HeartCLickHandler = () => {
    fetchNewSuggestionsAction(userId);
    setHeartClicked(true);
    navigate("/brainmates");
    updatePageButtonAction("brainmates");
  };

  return (
    <div className={style.container}>
      <div className={style.heart_container} onClick={() => HeartCLickHandler()}>
        {<div className={style.heart} />}
      </div>
      <div className={style.text}>
        <div className={style.quote}>{quote?.quote}</div>
        <div className={style.author}>{quote?.author}</div>
      </div>
    </div>
  );
}
