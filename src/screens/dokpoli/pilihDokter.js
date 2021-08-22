import { Button, GridList } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/layanan.css";

const dokter = [
  { name: "Dr. Johanna Prihartini, SpPD", poli: "Jantung" },
  { name: "Dr. Deasy Erika, SpKFR", poli: "THT" },
  { name: "Dr. Arrio Yusman, SpOT", poli: "Mata" },
  { name: "Dr. Rudi Yunanto, SpBS", poli: "Penyakit Dalam" },
  { name: "Dr. Irwansyah, SpS", poli: "Paru-Paru" },
  { name: "Dokter lainnya ...", poli: "" },
];
function PilihDokter({ onPilih }) {
  // let history = useHistory();

  const layananKu = (respons) => {
    if (respons.poli) {
      onPilih("selesai-layanan");
    } else {
      onPilih("cari-dokter");
    }
  };
  return (
    <div>
      <div style={{ height: 20 }} />
      <div className="text-bantuan">Anda akan konsultasi ke dokter siapa ?</div>
      <GridList
        style={{ marginBottom: 10, marginLeft: 10, justifyContent: "center" }}
      >
        {dokter.map((item) => (
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
    </div>
  );
}

export default PilihDokter;
