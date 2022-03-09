import dayjs from "dayjs";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Spinner } from "./components";
import { routes } from "./router";

dayjs.locale("ko");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map(({ ...route }, index) => (
            <Route
              key={index}
              {...route}
              element={
                <Suspense fallback={<Spinner />}>{route.element}</Suspense>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
