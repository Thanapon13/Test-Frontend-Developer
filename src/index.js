import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FormDataUserContextProvider from "./contexts/FormDataUser";
import EditFormDataContextProvider from "./contexts/EditFormData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormDataUserContextProvider>
      <EditFormDataContextProvider>
        <App />
      </EditFormDataContextProvider>
    </FormDataUserContextProvider>
  </React.StrictMode>
);

reportWebVitals();
