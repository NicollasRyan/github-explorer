import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { RepositoryDetails } from "../pages/RepositoryDetails";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/repository"
        element={<RepositoryDetails />}
      />
    </Routes>
  </BrowserRouter>
);
