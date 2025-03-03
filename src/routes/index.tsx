import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import Dashboard from "../pages/Dashboard";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="teste" element={<div>asdasd</div>} /> */}
      </Route>
    </Routes>
  );
};
