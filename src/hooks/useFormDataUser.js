import { useContext } from "react";
import { FormDataUserContext } from "../contexts/FormDataUser";

export default function useFormDataUser() {
  return useContext(FormDataUserContext);
}
