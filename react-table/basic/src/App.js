import './App.css';
import { useTable } from "react-table";
import React from "react";
import fakeData from "../src/MOCK_DATA.json"
function App() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(()=> [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "First Name",
      accessor: "first_name"
    },
    {
      Header: "E-mail",
      accessor: "email"
    }
  ], []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
          {
            headerGroups.map((headerGroup) =>
                (<tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                    ))
                  }
            </tr>))
          }
          </thead>
          <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
