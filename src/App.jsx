import ActionLoader from "./components/loaders/ActionLoader";
import PageLoader from "./components/loaders/PageLoader";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useUI } from "./utils/providers/UiContext";
import MainLayout from "./pages/MainLayout";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import UserProfile from "./pages/UserProfile";
import Notification from "./components/notification/Notification";
import { useEffect } from "react";
import PageError from "./components/404/PageError";
import Checkout from "./pages/Checkout";
import CartsLoader from "./components/loaders/CartsLoader";
function App() {
  const { isLoading, notification, setNotification } = useUI();

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification("");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <BrowserRouter>
      {isLoading.actionLoader && <ActionLoader />}
      {isLoading.pageLoader && <PageLoader />}
      {notification && <Notification notification={notification} />}

      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PageError />} />
        <Route path="/prueba" element={<CartsLoader />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/me" element={<UserProfile />} />
          <Route path="/pay" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
