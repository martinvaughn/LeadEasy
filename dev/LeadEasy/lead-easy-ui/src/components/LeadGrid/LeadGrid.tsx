import { 
    DataGrid, 
    GridCellValue,
    GridApi,
    GridCellParams,
    GridActionsCellItem,
    GridRowId,
    GridColDef
} from "@mui/x-data-grid";

// import {
//   DataGrid,
//   GridColDef,
//   GridApi,
//   GridCellValue,
//   GridCellParams
// } from "@material-ui/data-grid";

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { FC, useCallback, useState } from 'react';
import { useHistory } from "react-router-dom";
import { IApiData } from '../IApiData/IApiData';
import Button from "@material-ui/core/Button";
import SelectStatus from "../SelectStatus/SelectStatus";


const LeadGrid:FC<IApiData> = (props) => {
    const history = useHistory();
    const rowVals = props.rows;
    const { rows, setRows } = useState([]);
    setRows(rowVals);

    const columns: any = [
      { field: 'name', headerName: 'Name', width: 155, editable: false}, 
      { field: 'email', headerName: 'Email', width: 155, editable: false},
      { field: 'phone', headerName: 'Phone', width: 155, editable: false},
      { field: 'status', headerName: 'Status', width: 155, editable: false},
      {
        field: "details",
        headerName: "Details",
        width: 180,
        // disableClickEventBubbling: true,
        renderCell: () => {
          return (
            <Button variant="contained" color="primary">
              Details
            </Button>
          );
      }},
      {
        field: 'Change Status',
        type: 'actions',
          getActions: (params: any) => [
            <GridActionsCellItem
              icon={<AssignmentTurnedInIcon />}
              label="Change Status"
              
            />,
        ]
      },
      { field: 'notes', headerName: 'Notes', width: 0, editable: false, hide: true},
    ];

    const changeStatus = useCallback(
    (id: GridRowId) => () => {
      setRows((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id)!;
        const newRows = [...prevRows, { ...rowToDuplicate, id: Date.now() }];
        console.log(newRows);
        return newRows;
      });
    },
    [],
    );

    function selected(params: GridCellParams) {
        const value = params.colDef.field;
        
        if (!(value === "details")) { 
          return;
        }
        const fields = apiRef.current.getAllColumns().map((c) => c.field)
          .filter((c) => c !== "__check__" && !!c);

        const row: Record<string, GridCellValue> = {};
    
        fields.forEach((f: string) => {
          row[f] = params.getValue(params.id, f);
        }); 
        
        const location = {
            pathname: "/lead/1",
            state: { row: row}
          }
        history.push(location);
      }
    return(
        <>
            <h5>Lead Grid</h5>
            <div style={{ height: 400, width: '95%', textAlign: "center", padding: "10px"}}>
            <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
                <DataGrid 
                columns={columns2}
                rows={props.rows}
                onCellClick={selected}
                checkboxSelection
                disableSelectionOnClick
                />
            </div>
            </div>
            </div>
        </>
    );
}

export default LeadGrid;