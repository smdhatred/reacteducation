import style from "./UserCard.module.css";

import maleIcon from "@icons/male.svg";
import femaleIcon from "@icons/female.svg";
import User from "../../data/user";

/**
 * @param {Object} props
 * @param {User} props.user
 */
export default function UserCard({ user }) {
  return (
    <li className={style.card}>
      <img
        src={user.gender == "male" ? maleIcon : femaleIcon}
        alt={user.firstName}
        className={style.avatar}
      />
      <h3 className={style.name}>{user.fullName}</h3>
      <h5 className={style.gender}>{user.gender}</h5>
    </li>
  );
}
