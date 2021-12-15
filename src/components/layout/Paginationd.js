import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import axios from "axios";
import { API_URL as api_url } from "../../actions/types";

const columns = [
  { id: "username", label: "Username", minWidth: 170 },
  { id: "code", label: "Email", minWidth: 100 },
  {
    id: "population",
    label: "Is Active",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "size",
    label: "Referer",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    // format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  {
    name: "India",
    code: "IN",
  },
  {
    name: "India",
    code: "IN",
  },
  // createData("India", "IN", 1324171354, 3287263),
  // createData("China", "CN", 1403500365, 9596961),
  // createData("Italy", "IT", 60483973, 301340),
  // createData("United States", "US", 327167434, 9833520),
  // createData("Canada", "CA", 37602103, 9984670),
  // createData("Australia", "AU", 25475400, 7692024),
  // createData("Germany", "DE", 83019200, 357578),
  // createData("Ireland", "IE", 4857000, 70273),
  // createData("Mexico", "MX", 126577691, 1972550),
  // createData("Japan", "JP", 126317000, 377973),
  // createData("France", "FR", 67022000, 640679),
  // createData("United Kingdom", "GB", 67545757, 242495),
  // createData("Russia", "RU", 146793744, 17098246),
  // createData("Nigeria", "NG", 200962417, 923768),
  // createData("Brazil", "BR", 210147125, 8515767),
];

export default function Paginationd() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [topReferral, setTopReferral] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [noData, setNoData] = React.useState("no_data");

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  React.useEffect(() => {
    setIsLoading(true);

    axios
      .get(api_url + "/v1/user/all/registered/users", null, config)
      .then((data) => {
        // //console.log(data.data.allData[0].firstname);
        // let initial = data.data.allData.firstname.match(/\b(\w)/g).join("mama");
        console.log(data.data.allData);
        setTopReferral(data.data.allData);
        if (data.status === 200) {
          setIsLoading(false);
        } else {
          setIsLoading(true);
        }

        if (data.data.allData.length === 0) {
          setNoData("data");
        }
      });

    // }
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      style={{ marginTop: "120px" }}
      sx={{ width: "100%", overflow: "hidden" }}
    >
      <TableContainer sx={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}

              {/* <TableCell
                // key={column.id}
                align='center'
                style={{textAlign: 'right'}}
              >
                uuuuu
              </TableCell>
              <TableCell
                // key={column.id}
                align='center'
                style={{textAlign: 'right'}}
              >
                uuuuu
              </TableCell>
              <TableCell
                // key={column.id}
                align='center'
                style={{textAlign: 'right'}}
              >
                uuuuu
              </TableCell>
              <TableCell
                // key={column.id}
                align='center'
                style={{textAlign: 'right'}}
              >
                uuuuu
              </TableCell>
              <TableCell
                // key={column.id}
                align='center'
                style={{textAlign: 'right'}}
              >
                uuuuu
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {topReferral
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={topReferral.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
