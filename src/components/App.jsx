import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const SharedLayout = lazy(() =>
  import("../components/SharedLayout/SharedLayout.jsx")
);

const RegisterPage = lazy(() =>
  import("../pages/RegisterPage/RegisterPage.jsx")
);

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage.jsx"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const MedicineStorePage = lazy(() =>
  import("../pages/MedicineStorePage/MedicineStorePage.jsx")
);
const MedicinePage = lazy(() =>
  import("../pages/MedicinePage/MedicinePage.jsx")
);
const ProductPage = lazy(() => import("../pages/ProductPage/ProductPage.jsx"));
const CartPage = lazy(() => import("../pages/CartPage/CartPage.jsx"));
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  return (
    <Suspense fallback={"Loader"}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="medicine-store" element={<MedicineStorePage />} />
          <Route path="medicine" element={<MedicinePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
