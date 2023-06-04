import { createContext, useEffect, useState } from "react";
import useFromDataUser from "../hooks/useFormDataUser";

export const EditFormDataContext = createContext();

export default function EditFormDataContextProvider({ children }) {
  const { formDatas, deleteFormDatas, deleteFormDatasAll, setFormDatas } =
    useFromDataUser();

  const [selectAll, setSelectAll] = useState(false);
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const [currentFormDatas, setCurrentFormDatas] = useState({});

  const handleEditFormChange = (field, value) => {
    setCurrentFormDatas(prevFormDatas => ({
      ...prevFormDatas,
      [field]: value
    }));

    // console.log("currentFormDatas", currentFormDatas);
  };

  const handleEditClick = (formDatas, id) => {
    setOpen(true);
    const selectedData = formDatas.find(data => data.id === id);
    if (selectedData) {
      setOpen(true);
      setCurrentFormDatas({ ...selectedData });
    }
  };

  const handleUpdateFormData = (id, updatedFormData) => {
    if (id === undefined || id === null) {
      console.error("No id provided for updating form data");
      return;
    }

    const updatedItems = formDatas.map(item => {
      return item.id === id ? updatedFormData : item;
    });

    setOpen(false);
    setFormDatas(updatedItems);
  };

  const handleEditSubmit = () => {
    handleUpdateFormData(currentFormDatas.id, currentFormDatas);
  };

  return (
    <EditFormDataContext.Provider
      value={{
        setSelectAll,
        selectAll,
        deleteFormDatasAll,
        formDatas,
        handleEditClick,
        deleteFormDatas,
        onClose,
        currentFormDatas,
        handleEditFormChange,
        handleEditSubmit,
        open
      }}
    >
      {children}
    </EditFormDataContext.Provider>
  );
}
