import { useDispatch, useSelector } from "react-redux";
import MedicinesList from "../../components/MedicinesList/MedicinesList .jsx";
import SearchMedicines from "../../components/SearchMedicines/SearchMedicines.jsx";
import s from "./MedicinePage.module.css";
import {
  selectIsLoading,
  selectProducts,
} from "../../redux/product/selectors.js";
import { useEffect, useState } from "react";
import { requestForMedicines } from "../../redux/product/operations.js";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { PaginationButton } from "../../utils/pagination_button.js";

export default function MedicinePage() {
  const [toPage, setToPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const product = useSelector(selectProducts);
  const dispatch = useDispatch();
  const page = PaginationButton(product.totalPages);
  console.log(product);

  useEffect(() => {
    dispatch(requestForMedicines());
  }, [dispatch]);
  return (
    <section className={s.medicinesSection}>
      <h1 className={s.titleMedicine}>Medicine </h1>
      <SearchMedicines />
      <MedicinesList product={product.data} isLoading={isLoading} />
      <Pagination
        numberOfPages={page}
        totalPages={product.totalPages}
        setToPage={setToPage}
        toPage={toPage}
      />
    </section>
  );
}
