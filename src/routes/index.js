import { Routes as Router, Route, BrowserRouter } from "react-router-dom";
import { Rockets, Missions } from "../views";
import { Layout } from "./Layout";

export const Routes = () => {
  return (
    <BrowserRouter>
    <Router>
        {/* public routes */}
       <Route element={<Layout />}>
       <Route path="rockets" element={<Rockets />} />
       <Route path="missions" element={<Missions />} />
       </Route>
     
        {/* catch all */}
        <Route path="*" element={<p>Missing Route</p>} />
    </Router>
    </BrowserRouter>
  );
};
