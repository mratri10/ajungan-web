import { Container } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/layanan.css";

import staffIMG from "../../assets/images/staff.PNG";
import { useHistory } from "react-router-dom";
import LayananUtama from "./utama";
import Pendaftaran from "../pendaftaran/pendaftaran";
import PilihDokter from "../dokpoli/pilihDokter";
import SelesaiDaftar from "./selesai";
import CariDokter from "../dokpoli/cariDokter";
import PilihPoli from "../dokpoli/pilihPoli";
import Penjamin from "../penjamin";
import CariJaminan from "../penjamin/cariJaminan";
import Reservasi from "../reservasi";

function LayananScreen() {
  const [view, setView] = useState("");
  const [poli, setPoli] = useState("");
  return (
    <Container>
      <div className="App">
        <img className="App-Image" src={staffIMG} alt="dashboard" />
        <div className="Welcome">
          {view == "" && <div className="text-welcome">Selamat Datang</div>}
          {view != "" && <div className="Welcome-Hide" />}
          <div className="text-name">Ny. Maharani</div>
        </div>
        {view == "" && <LayananUtama onPilih={(v) => setView(v)} />}
        {view == "pendaftaran" && <Pendaftaran onPilih={(v) => setView(v)} />}
        {view == "pilih-dokter" && <PilihDokter onPilih={(v) => setView(v)} />}
        {view == "cari-dokter" && (
          <CariDokter
            onPilih={(v) => setView(v)}
            poli={poli}
            onPoli={(v) => setPoli(v)}
          />
        )}
        {view == "pilih-poli" && (
          <PilihPoli onPilih={(v) => setView(v)} onPoli={(v) => setPoli(v)} />
        )}
        {view == "penjamin" && <Penjamin onPilih={(v) => setView(v)} />}
        {view == "cari-jaminan" && <CariJaminan onPilih={(v) => setView(v)} />}
        {view == "reservasi" && <Reservasi onPilih={(v) => setView(v)} />}

        {view == "selesai-layanan" && (
          <SelesaiDaftar onPilih={(v) => setView(v)} />
        )}
      </div>
    </Container>
  );
}

export default LayananScreen;
