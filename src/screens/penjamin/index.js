import { Button, GridList } from "@material-ui/core";
import React from "react";

const jaminan = [
  { name: "PT. PLN Persero", value: "persero" },
  { name: "BPJS Kesehatan", value: "bpjs" },
  { name: "Dinas Kesehatan Kota Bekasi", value: "bekasi" },
  { name: "Allianz Life Indonesia", value: "allianz" },
  { name: "Penjamin lainnya ...", value: "" },
];
function Penjamin({ onPilih }) {
  const layananKu = (respons) => {
    if (respons.value.length > 0) {
      onPilih("cari-dokter");
    } else {
      onPilih("cari-jaminan");
    }
  };
  return (
    <div>
      <div style={{ height: 20 }} />
      <div className="text-bantuan">
        Pembayaran Pelayanan Anda akan dijaminkan oleh apa?
      </div>
      <GridList
        style={{ marginBottom: 10, marginLeft: 10, justifyContent: "center" }}
      >
        {jaminan.map((item) => (
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

export default Penjamin;
