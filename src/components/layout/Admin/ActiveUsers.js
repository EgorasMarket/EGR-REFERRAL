import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import axios from "axios";
import { API_URL as api_url } from "../../../actions/types";

const columns = [
  { id: 'username', label: 'Username', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  {
    id: 'is_active',
    label: 'Is Active',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'referer',
    label: 'Referer',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'walletAddress',
    label: 'Wallet Address',
    minWidth: 170,
    align: 'right',
    // format: (value) => value.toFixed(2),
  },
];


export default function ActiveUsers() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);
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
      .get(api_url + "/v1/user/all/active/users", null, config)
      .then((data) => {
        // //console.log(data.data.allData[0].firstname);
        // let initial = data.data.allData.firstname.match(/\b(\w)/g).join("mama");
        // console.log(data.data.allData);
        setTopReferral(data.data.allData);
        console.log(data.data.allData);
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
    <Paper style={{marginTop: '120px'}} sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 800 }}>
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
            {
              topReferral.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      // console.log(value);
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value === true
                            ? 1
                            : value === false ? 0 : value}
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
        rowsPerPageOptions={[10, 25, 50, 100]}
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
