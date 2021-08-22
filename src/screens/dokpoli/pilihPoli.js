import { Button, Grid, GridList, TextField } from "@material-ui/core";
import React, { useState } from "react";

const poliData = [
  { name: "Jantung" },
  { name: "THT" },
  { name: "Mata" },
  { name: "Penyakit Dalam" },
  { name: "Paru-Paru" },
  { name: "Bedah Orthopedi" },
  { name: "Bedah Syaraf" },
  { name: "Bedah" },
];
function PilihPoli({ onPilih, onPoli }) {
  const [cari, setCari] = useState("");

  const layananKu = (respons) => {
    onPilih("cari-dokter");
    onPoli(respons.name);
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
          placeholder="Silahkan Masukan Nama Poli yang Dikehendaki"
          value={cari}
        />
        {/* </Box> */}
      </Grid>
      {cari.length >= 0 && (
        <GridList
          style={{ marginBottom: 10, marginLeft: 10, justifyContent: "center" }}
        >
          {poliData
            .filter((item) =>
              item.name.toLocaleLowerCase().includes(cari.toLocaleLowerCase())
            )
            .map((item) => (
              <Button
                onClick={() => layananKu(item)}
                color="primary"
                variant="contained"
                style={{
                  height: 80,
                  marginTop: 10,
                  marginRight: 10,
                  width: 200,
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
export default PilihPoli;
