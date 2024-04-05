import React from "react";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
import {
  PLANNED_TRAVEL_PAGE,
  TRAVEL_DIARY_PAGE,
  DRAFT_PAGE,
} from "../../../utils/consts";

function Header() {
  return (
    <header className={s.header_main}>
      <div className={s.header_links}>
        <div className={s.icon}>Эмблема</div>
        <Link to={PLANNED_TRAVEL_PAGE}>Future trips</Link>
        <Link to={TRAVEL_DIARY_PAGE}>Past trips</Link>
      </div>
      {/* <div className={s.center_panel}>
        панель для какой нибудь инфы типо погоды
      </div> */}
      <div className={s.header_buttons}>
        <Link className={s.header_btn2}>Go trip</Link>
        <Link className={s.header_btn1}>Add day</Link>
        <Link className={s.header_btn1} to={DRAFT_PAGE}>
          Add travel
        </Link>
      </div>
    </header>
  );
}

export default Header;
