import { Button, Grid, GridList, makeStyles, Modal } from "@material-ui/core";
import React, { useState } from "react";

function Reservasi({ onPilih }) {
  const classes = useStyles();
  const tahunNow = new Date().getFullYear();
  const [alertDay, setAlertDay] = useState(false);
  const [alertMonth, setAlertMonth] = useState(false);
  const [alertYear, setAlertYear] = useState(false);
  const [day, setDay] = useState("01");
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState(tahunNow.toString());

  const [clickDay, setClickDay] = useState(false);

  const pilihDay = (item) => {
    setAlertDay(false);
    setDay(
      item.toString().length === 1 ? "0" + item.toString() : item.toString()
    );
  };
  const pilihMonth = (item) => {
    setAlertMonth(false);
    setMonth(
      item.toString().length === 1 ? "0" + item.toString() : item.toString()
    );
  };
  const pilihYear = (item) => {
    setAlertYear(false);
    setYear(item.toString());
  };
  return (
    <div>
      <div style={{ height: 20 }} />
      <div className="text-bantuan">
        Anda akan Reservasi untuk Pelayanan hari apa ?
      </div>

      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            onClick={() => setAlertDay(true)}
            color="primary"
            variant="contained"
          >
            {day}
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => setAlertMonth(true)}
            color="primary"
            variant="contained"
          >
            {month}
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => setAlertYear(true)}
            color="primary"
            variant="contained"
          >
            {year}
          </Button>
        </Grid>
      </Grid>
      <Button
        onClick={() => onPilih("pilih-dokter")}
        style={{ color: "white", background: "orange", marginTop: 20 }}
        variant="contained"
      >
        Lanjut
      </Button>
      <Modal
        className={classes.modal}
        open={alertDay}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="modal-view">
          <div className="modal-title">Pilih Tanggal Reservasi</div>
          <GridList cols={4}>
            {dayValue.map((item) => (
              <Button
                style={{ height: 50, width: 50, marginBottom: 10 }}
                color="primary"
                variant="contained"
                onClick={() => pilihDay(item)}
                className={classes.button}
              >
                {item.toString().length === 1
                  ? "0" + item.toString()
                  : item.toString()}
              </Button>
            ))}
          </GridList>
        </div>
      </Modal>
      <Modal
        className={classes.modal}
        open={alertMonth}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="modal-view">
          <div className="modal-title">Pilih Bulan Reservasi</div>
          <GridList cols={4}>
            {monthValue.map((item) => (
              <Button
                style={{ height: 50, width: 50, marginBottom: 10 }}
                color="primary"
                variant="contained"
                onClick={() => pilihMonth(item)}
                className={classes.button}
              >
                {item.toString().length === 1
                  ? "0" + item.toString()
                  : item.toString()}
              </Button>
            ))}
          </GridList>
        </div>
      </Modal>
      <Modal
        className={classes.modal}
        open={alertYear}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="modal-view">
          <div className="modal-title">Pilih Tanggal Reservasi</div>
          <GridList cols={4}>
            {[tahunNow, tahunNow + 1].map((item) => (
              <Button
                style={{ height: 50, width: 50, marginBottom: 10 }}
                color="primary"
                variant="contained"
                onClick={() => pilihYear(item)}
                className={classes.button}
              >
                {item.toString()}
              </Button>
            ))}
          </GridList>
        </div>
      </Modal>
    </div>
  );
}

export default Reservasi;

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: "translateZ(0)",
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    "@media all and (-ms-high-contrast: none)": {
      display: "none",
    },
  },
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    marginRight: 10,
    height: 80,
  },
}));

const dayValue = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const monthValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
