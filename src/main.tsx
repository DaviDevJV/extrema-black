import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureUtmParameters } from "@/lib/meta-tracking";

captureUtmParameters();

createRoot(document.getElementById("root")!).render(<App />);
