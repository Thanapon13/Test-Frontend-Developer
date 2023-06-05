import { Button, Checkbox } from "antd";
import { GoFileDirectory } from "react-icons/go";
import useEditFormData from "../../hooks/uerEditFormData";
import EditDataUser from "../test2.js/EditDataUser";
import ReactPaginate from "react-paginate";

export default function DataUser({}) {
  const {
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
  } = useEditFormData();

  return (
    <>
      <div className="w-[90%] flex flex-col gap-2 m-auto">
        {/* Container Top All */}
        <div>
          <Checkbox className="text-" onClick={() => setSelectAll(true)}>
            เลือกทั้งหมด
          </Checkbox>
          {selectAll && (
            <Button className="bg-white" onClick={deleteFormDatasAll}>
              ลบทั้งหมด
            </Button>
          )}
        </div>

        {/* Container Bottom All */}
        <div className="bg-white">
          <div className="flex justify-between items-center border-2 p-2">
            <div className="flex-1 text-center border-r-2">
              <h1>Id</h1>
            </div>
            <div className="flex-1 text-center border-r-2">
              <h1>ชื่อ</h1>
            </div>
            <div className="flex-1 text-center  border-r-2">
              <h1>เพศ</h1>
            </div>
            <div className="flex-1 text-center  border-r-2">
              <h1>หมายเลขโทรศัพท์มือถือ</h1>
            </div>
            <div className="flex-1 text-center  border-r-2">
              <h1>สัญชาติ</h1>
            </div>
            <div className="flex-1 text-center">
              <h1>จัดการ</h1>
            </div>
          </div>

          {formDatas.length === 0 ? (
            <div className="bg-white h-[400px] flex flex-col justify-center items-center">
              <i className="text-6xl">
                <GoFileDirectory />
              </i>
              <h1 className="text-2xl">ยังไม่มีข้อมูล</h1>
            </div>
          ) : (
            <div className="bg-white h-[400px] ">
              {formDatas.map((item, idx) => (
                <div
                  key={idx}
                  className="flex  justify-start items-start p-2 border-b-2"
                >
                  <div className="flex-1 text-center">
                    <h1>{item.id}</h1>
                  </div>
                  <div className="flex-1 text-center">
                    <h1>
                      {item.prefix} {item.firstName} {item.lastName}
                    </h1>
                  </div>
                  <div className="flex-1 text-center">
                    <h1>{item.sex}</h1>
                  </div>
                  <div className="flex-1 text-center">
                    <h1>
                      {item.countryCode}-{item.mobilePhoneNumber}
                    </h1>
                  </div>
                  <div className="flex-1 text-center">
                    <h1>{item.nationality}</h1>
                  </div>
                  <div className="flex items-center justify-around flex-1">
                    <Button
                      className="bg-white"
                      onClick={() => handleEditClick(formDatas, item.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="bg-red-500"
                      onClick={() => deleteFormDatas(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <ReactPaginate
          className="flex items-center gap-3"
          previousLabel={"previous"}
          nextAriaLabel={"next"}
          pageCount={10}
          marginPagesDisplayed={5}
          pageRangeDisplayed={3}
        />
      </div>

      <EditDataUser
        onClose={onClose}
        currentFormData={currentFormDatas}
        handleEditFormChange={handleEditFormChange}
        handleEditSubmit={handleEditSubmit}
        open={open}
      />
    </>
  );
}
