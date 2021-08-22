import { Button } from "@material-ui/core";
import React from "react";

function SelesaiDaftar({ onPilih }) {
  return (
    <div>
      <div style={{ height: 20 }} />
      <div className="text-bantuan">Anda akan konsultasi ke dokter siapa ?</div>
      <div className="text-bantuan">Dr. Fakhrunnisa, SpS</div>
      <div className="text-bantuan">Dengan Nomor Antrian 10</div>
      <div className="text-bantuan">Silahkan Melapor Ke Perawat</div>
      <Button onClick={() => onPilih("")} color="secondary">
        Kembali ke Menu Utama
      </Button>
    </div>
  );
}
export default SelesaiDaftar;
