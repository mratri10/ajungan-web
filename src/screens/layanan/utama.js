import { Button, Container, GridList } from "@material-ui/core";
import React from "react";
import "../styles/layanan.css";

import staffIMG from "../../assets/images/staff.PNG";
import { useHistory } from "react-router-dom";
const dataButton = [
  { name: "Daftar Kehadiran Dokter", nav: "" },
  { name: "Pendaftaran Pelayanan", nav: "pendaftaran" },
  { name: "Informasi Promo Layanan", nav: "" },
  { name: "Reservasi Pelayanan", nav: "reservasi" },
  { name: "Laporan Kehadiran [Chec in]", nav: "" },
  { name: "Cetak Layanan Sampai Saat ini", nav: "" },
];
function LayananUtama({ onPilih }) {
  let history = useHistory();

  const layananKu = (respons) => {
    onPilih(respons.nav);
  };
  return (
    <div>
      <div style={{ height: 20 }} />
      <div className="text-bantuan">Ada yang bisa kita bantu?</div>
      <GridList
        style={{ marginBottom: 10, marginLeft: 10, justifyContent: "center" }}
      >
        {dataButton.map((item) => (
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

export default LayananUtama;
