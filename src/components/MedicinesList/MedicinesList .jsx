import MedicinesItem from "../MedicinesItem/MedicinesItem.jsx";
import s from "./MedicinesList.module.css";

export default function MedicinesList() {
  return (
    <ul>
      <li>
        <MedicinesItem />
      </li>
    </ul>
  );
}
