import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
  { field: "ID", headerName: "ID", width: 90, hideable: true },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "phone_number", headerName: "Phone Number", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "address", headerName: "Address", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
];

function DataTable() {
  const [open, setOpen] = useState(false);
  const { contactData, getData } = useGetData();
  const [selectionModel, setSelectionModel] = useState<string[]>([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <Modal 
          id={selectionModel} 
          open={open} 
          onClose={handleClose} />
      <div className="flex flex-row">
        <div>
          <Button
            onClick={handleOpen}
            className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
          >
            Create New Request
          </Button>
          <Button
            onClick={handleOpen}
            className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
          >
            Update
          </Button>
          <Button
            onClick={deleteData}
            className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
          >
            Delete
          </Button>
        </div>
      </div>
      <div
        className={open ? "hidden" : "container mx-10 my-5 flex flex-col"}
        style={{ height: 400, width: "100%" }}
      >
        <h2 className="p-3 bg-slate-300 my-2 rounded">My Requests</h2>
        <DataGrid
          rows={contactData}
          columns={columns}
          rowsPerPageOptions={[5]}
          checkboxSelection={true}
          onSelectionModelChange={(item: any) => {
            setSelectionModel(item);
          }}
        />
      </div>
    </>
  );
}

export default DataTable;
