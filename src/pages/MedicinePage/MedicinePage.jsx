import { useDispatch, useSelector } from "react-redux";
import MedicinesList from "../../components/MedicinesList/MedicinesList .jsx";
import SearchMedicines from "../../components/SearchMedicines/SearchMedicines.jsx";
import s from "./MedicinePage.module.css";
import {
  selectIsLoading,
  selectProducts,
} from "../../redux/product/selectors.js";
import { useEffect } from "react";
import { requestForMedicines } from "../../redux/product/operations.js";

export default function MedicinePage() {
  const isLoading = useSelector(selectIsLoading);
  const product = useSelector(selectProducts);
  const dispatch = useDispatch();

  console.log(product.data);

  useEffect(() => {
    dispatch(requestForMedicines());
  }, [dispatch]);
  return (
    <section>
      <SearchMedicines />
      <MedicinesList />
    </section>
  );
}
