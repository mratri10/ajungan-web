import {
  Table,
  TableContainer,
  makeStyles,
  Paper,
  TableHead,
  TableRow,
  withStyles,
  TableCell,
  Container,
  TableBody,
} from "@material-ui/core";
import React from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function JadwalDokter() {
  const classes = useStyles();

  return (
    <Container>
      <div>DAFTAR KEHADIRAN DOKTER SAAT INI</div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Jadwal Dokter"></Table>
        <TableHead>
          <TableRow>
            <StyledTableCell component="th" colSpan={1}>
              Nama
            </StyledTableCell>
            <StyledTableCell align="right">No SIP</StyledTableCell>
            <StyledTableCell align="right">Jumlah Pasien</StyledTableCell>
            <StyledTableCell align="right">Status Kehadiran</StyledTableCell>
            <StyledTableCell align="right">Kehadiran</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" size="medium">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

export default JadwalDokter;
