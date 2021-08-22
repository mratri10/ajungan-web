import { Button, makeStyles, Modal, useTheme } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/layanan.css";

function Pendaftaran({ onPilih }) {
  const classes = useStyles();
  const [alertBayar, setAlertBayar] = useState(false);

  return (
    <div>
      <div style={{ height: 20 }} />
      <div className="text-bantuan">
        Apakah anda Memiliki Penjaminan untuk biaya pelayanan ?
      </div>
      <div className="row-view">
        <Button
          color="primary"
          variant="contained"
          style={{ width: 250, marginRight: 10, height: 80 }}
          onClick={() => onPilih("pilih-dokter")}
          // onClick={() => setAlertBayar(true)}
        >
          Tidak, Saya Bayar Sendiri
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ width: 250, marginLeft: 10, height: 80 }}
          onClick={() => onPilih("penjamin")}
        >
          Ya, Saya memiliki Penjamin untuk Biaya Pelayanan
        </Button>
      </div>

      <Modal
        className={classes.modal}
        open={alertBayar}
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="modal-view">
          <div className="modal-title">Yeay, Transaksi Anda Berhasil</div>
          <div className="row-view">
            <Button
              color="primary"
              variant="contained"
              onClick={() => onPilih("pilih-dokter")}
              className={classes.button}
            >
              Lanjut
            </Button>
            <Button
              color="primary"
              variant="contained"
              style={{ width: 100, marginLeft: 10, height: 80 }}
              onClick={() => onPilih("")}
            >
              Kembali
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Pendaftaran;

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
