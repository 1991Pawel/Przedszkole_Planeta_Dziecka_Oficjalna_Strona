import AllRoutes from "./components/ForAllPages/AllRoutes";
import styles from "./style";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className={`${styles.boxWidth}`}>
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
}