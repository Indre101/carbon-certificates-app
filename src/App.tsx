import { Route, Routes } from "react-router-dom";
import { Certificates, Favourites, Layout } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Certificates />} />
        <Route path="favourites" element={<Favourites />} />
      </Route>
    </Routes>
  );
};

export default App;
