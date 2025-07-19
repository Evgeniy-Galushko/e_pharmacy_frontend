import { useSelector } from "react-redux";
import s from "./Description.module.css";
import { selectOneMedicine } from "../../redux/product/selectors.js";

export default function Description() {
  const product = useSelector(selectOneMedicine);

  // console.log(product);
  return <p>{product.description}</p>;
}
