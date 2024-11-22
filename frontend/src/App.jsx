import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routers from "./router";
function App() {
  return (
    <Router>
      <Routes>
        {routers.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout || <></>;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
