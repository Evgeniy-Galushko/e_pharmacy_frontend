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
import { selectOrder, selectRrorProduct } from "../../redux/order/selectors.js";
import ModalLogin from "../../components/ModalLogin/ModalLogin.jsx";
import ModalRegister from "../../components/ModalRegister/ModalRegister.jsx";
import { resetError } from "../../redux/order/slice.js";

export default function MedicinePage() {
  const [toPage, setToPage] = useState(1);
  const [search, setSearh] = useState("");
  const [isOpenModaLogin, setIsOpenModaLogin] = useState(false);
  const [isOpenModaRegister, setIsOpenModaRegister] = useState(false);
  const [category, setCategory] = useState("");
  const isLoading = useSelector(selectIsLoading);
  const product = useSelector(selectProducts);
  const order = useSelector(selectOrder);
  const dispatch = useDispatch();
  const page = PaginationButton(product.totalPages);
  const error = useSelector(selectRrorProduct);
  const perPage = 12;
  // console.log(order);

  useEffect(() => {
    dispatch(resetError());
    dispatch(
      requestForMedicines({
        perPage: perPage,
        page: toPage,
        search: search,
        type: category,
      })
    );
  }, [dispatch, toPage, search, category]);

  useEffect(() => {
    if (error) {
      toast.error("The product has already been added");
      dispatch(resetError());
    }
  }, [error]);

  const handleCloseModalLogin = () => {
    setIsOpenModaLogin(false);
  };

  const handleOpenModalLogin = () => {
    setIsOpenModaLogin(true);
  };

  const handleOpenModalRegister = () => {
    setIsOpenModaRegister(true);
  };

  const handleCloseModalRegister = () => {
    setIsOpenModaRegister(false);
  };

  return (
    <section className={s.medicinesSection}>
      <ModalLogin
        isOpen={isOpenModaLogin}
        onClose={handleCloseModalLogin}
        handleOpenModalRegister={handleOpenModalRegister}
      />
      <ModalRegister
        isOpen={isOpenModaRegister}
        onClose={handleCloseModalRegister}
        handleOpenModalLogin={handleOpenModalLogin}
      />
      <Toaster
        toastOptions={{
          className: "",
          duration: 3000,
          style: {},
        }}
      />
      <h1 className={s.titleMedicine}>Medicine </h1>
      <SearchMedicines setSearh={setSearh} setCategory={setCategory} />
      <MedicinesList
        product={product.data}
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
