import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set up smooth scrolling behavior for the entire document
document.documentElement.style.scrollBehavior = "smooth";

createRoot(document.getElementById("root")!).render(<App />);
