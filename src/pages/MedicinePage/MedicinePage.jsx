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
import toast, { Toaster } from "react-hot-toast";
import { selectOrder } from "../../redux/order/selectors.js";
import ModalLogin from "../../components/ModalLogin/ModalLogin.jsx";

export default function MedicinePage() {
  const [toPage, setToPage] = useState(1);
  const [search, setSearh] = useState("");
  const [isOpenModaLogin, setIsOpenModaLogin] = useState(false);
  const [category, setCategory] = useState("");
  const isLoading = useSelector(selectIsLoading);
  const product = useSelector(selectProducts);
  const order = useSelector(selectOrder);
  const dispatch = useDispatch();
  const page = PaginationButton(product.totalPages);
  const perPage = 12;
  // console.log(order);

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

  // if (order) {
  //   toast.success("Changes added");
  // }

  const handleCloseModalLogin = () => {
    console.log(close);
    setIsOpenModaLogin(false);
  };

  const handleOpenModalLogin = () => {
    setIsOpenModaLogin(true);
  };

  return (
    <section className={s.medicinesSection}>
      <ModalLogin isOpen={isOpenModaLogin} onClose={handleCloseModalLogin} />
      <Toaster
        toastOptions={{
          className: "",
          duration: 4000,
          style: {},
        }}
      />
      <h1 className={s.titleMedicine}>Medicine </h1>
      <SearchMedicines setSearh={setSearh} setCategory={setCategory} />
      <MedicinesList
        product={product.data}
        isLoading={isLoading}
        handleOpenModalLogin={handleOpenModalLogin}
      />
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
