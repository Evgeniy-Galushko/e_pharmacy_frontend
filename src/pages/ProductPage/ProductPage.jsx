import { useParams } from "react-router-dom";
import s from "./ProductPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { requestById } from "../../redux/product/operations.js";
import { selectOneMedicine } from "../../redux/product/selectors.js";

export default function ProductPage() {
  const { produstId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectOneMedicine);

  console.log(product);

  useEffect(() => {
    dispatch(requestById(produstId));
  }, [dispatch]);

  console.log(produstId);

  return (
    <>
      <h1>{product.name}</h1>
      <img src={product.photo} alt="" width={335} />
    </>
  );
}
