import {
  Box,
  Button,
  Grid,
  GridList,
  Input,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../styles/layanan.css";

const dokter = [
  { name: "Dr. Johanna Prihartini, SpPD", poli: "Jantung" },
  { name: "Dr. Rizki Pratama, SpPD", poli: "Jantung" },
  { name: "Dr. Raya Sukma Rindu, SpPD", poli: "Jantung" },
  { name: "Dr. Deasy Erika, SpKFR", poli: "THT" },
  { name: "Dr. Rian, SpKFR", poli: "THT" },
  { name: "Dr. Fatmawati, SpKFR", poli: "THT" },
  { name: "Dr. Fatmawati1, SpKFR", poli: "THT" },
  { name: "Dr. Fatmawati12, SpKFR", poli: "THT" },
  { name: "Dr. Arrio Yusman, SpOT", poli: "Mata" },
  { name: "Dr. Ahmad Dani, SpOT", poli: "Mata" },
  { name: "Dr. Once, SpOT", poli: "Mata" },
  { name: "Dr. Rudi Yunanto, SpBS", poli: "Penyakit Dalam" },
  { name: "Dr. Ariel, SpBS", poli: "Penyakit Dalam" },
  { name: "Dr. Judika, SpBS", poli: "Penyakit Dalam" },
  { name: "Dr. Irwansyah, SpS", poli: "Paru-Paru" },
  { name: "Dr. Bunga Citra Lestari, SpS", poli: "Paru-Paru" },
  { name: "Dr. Ari Lasso, SpS", poli: "Paru-Paru" },
];
function CariDokter({ onPilih, poli, onPoli }) {
  const classes = stylesKu();

  const [dataDokter, setDataDokter] = useState(dokter);
  const [cari, setCari] = useState("");

  useEffect(() => {
    if (poli) {
      setDataDokter(dokter.filter((item) => item.poli === poli));
    } else {
      setDataDokter(dokter);
    }
  }, [poli]);

  const layananKu = (respons) => {
    onPilih("selesai-layanan");
  };
  return (
    <div>
      <Grid style={{ marginTop: 20 }}>
        <Button
          onClick={() => onPilih("")}
          color="primary"
          variant="contained"
          style={{ width: 200, marginLeft: 10, height: 60 }}
        >
          Kembali ke Menu Utama
        </Button>
        {/* <Box ml={2} mr={2} width={400}> */}
        <TextField
          //   fullWidth
          style={{ width: 500, marginLeft: 10, height: 50 }}
          variant="outlined"
          onChange={(text) => setCari(text.target.value)}
          placeholder="Silahkan Masukan Nama Dokter yang Dikehendaki"
          value={cari}
        />
        {/* </Box> */}
        <Button
          onClick={() => onPilih("pilih-poli")}
          color="primary"
          variant="contained"
          style={{ width: 200, marginLeft: 10, height: 60 }}
        >
          Pilih Poliklinik
        </Button>
      </Grid>
      {poli && (
        <Grid container spacing={2} style={{ justifyContent: "center" }}>
          <Grid item>
            <div>Poli {poli}</div>
          </Grid>
          <Grid item>
            <Button
              onClick={() => onPoli("")}
              style={{
                background: "crimson",
                color: "white",
                width: 40,
                height: 30,
              }}
            >
              <div>X</div>
            </Button>
          </Grid>
        </Grid>
      )}

      {cari.length >= 0 && (
        <GridList
          style={{ marginBottom: 10, marginLeft: 10, justifyContent: "center" }}
        >
          {dataDokter
            .filter((item) =>
              item.name.toLocaleLowerCase().includes(cari.toLocaleLowerCase())
            )
            .map((item) => (
              <Button
                onClick={() => layananKu(item)}
                color="primary"
                variant="contained"
                style={{
                  height: 100,
                  marginTop: 10,
                  marginRight: 10,
                  width: 350,
                }}
              >
                {item.name}
              </Button>
            ))}
        </GridList>
      )}
    </div>
  );
}

const stylesKu = makeStyles((theme) => ({
  input: {
    margin: theme.spacing(10),
    // width:theme.spacing()
  },
}));

export default CariDokter;
