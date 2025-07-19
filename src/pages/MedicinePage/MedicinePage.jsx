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
  const [search, setSearh] = useState("");
  const [category, setCategory] = useState("");
  const isLoading = useSelector(selectIsLoading);
  const product = useSelector(selectProducts);
  const dispatch = useDispatch();
  const page = PaginationButton(product.totalPages);
  const perPage = 12;
  console.log(toPage, search, category);

  useEffect(() => {
    dispatch(
      requestForMedicines({
        perPage: perPage,
        page: toPage,
        search: search,
        type: category,
      })
    );
  }, [dispatch, toPage, search, category]);
  return (
    <section className={s.medicinesSection}>
      <h1 className={s.titleMedicine}>Medicine </h1>
      <SearchMedicines setSearh={setSearh} setCategory={setCategory} />
      <MedicinesList product={product.data} isLoading={isLoading} />
      {product.totalPages > 1 && (
        <Pagination
          numberOfPages={page}
          totalPages={product.totalPages}
          setToPage={setToPage}
          toPage={toPage}
        />
      )}
    </section>
  );
}
