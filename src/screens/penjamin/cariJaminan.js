import { Button, TextField, Grid, GridList } from "@material-ui/core";
import React, { useState } from "react";

const jaminan = [
  { name: "PT. PLN Persero", value: "persero" },
  { name: "BPJS Kesehatan", value: "bpjs" },
  { name: "Dinas Kesehatan Kota Bekasi", value: "bekasi" },
  { name: "Allianz Life Indonesia", value: "allianz" },
  { name: "Prudentiak", value: "prudential" },
  { name: "Adira Finance", value: "adira" },
  { name: "Jamsostek", value: "jamsostek" },
];
function CariJaminan({ onPilih }) {
  const [cari, setCari] = useState("");
  const layananKu = (respons) => {
    onPilih("cari-dokter");
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
          style={{ width: 700, marginLeft: 10, height: 50 }}
          variant="outlined"
          onChange={(text) => setCari(text.target.value)}
          placeholder="Silahkan Masukkan Penjamin yang anda kehendaki"
          value={cari}
        />
        {/* </Box> */}
      </Grid>
      <GridList
        style={{ marginBottom: 10, marginLeft: 10, justifyContent: "center" }}
      >
        {jaminan
          .filter((items) =>
            items.name.toLocaleLowerCase().includes(cari.toLocaleLowerCase())
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
    </div>
  );
}

export default CariJaminan;
