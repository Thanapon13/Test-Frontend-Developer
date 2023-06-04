import { useContext } from "react";
import { EditFormDataContext } from "../contexts/EditFormData";

export default function useEditFormData() {
  return useContext(EditFormDataContext);
}
