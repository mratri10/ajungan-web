import "../styles/home.css";
import { Button, Container, GridList } from "@material-ui/core";

import dashboardIMG from "../../assets/images/dashboard.PNG";
import { useHistory } from "react-router-dom";

const dataButton = [
  { name: "Daftar Kehadiran Dokter", nav: "" },
  { name: "Pendaftaran Pelayanan", nav: "" },
  { name: "Informasi Promo Layanan", nav: "" },
  { name: "Reservasi Pelayanan", nav: "" },
  { name: "Laporan Kehadiran [Chec in]", nav: "" },
  { name: "Cetak Layanan Sampai Saat ini", nav: "" },
];
function HomeScreen(props) {
  let history = useHistory();
  const tindakan = () => {
    history.push("layanan");
  };
  return (
    <div className="Main">
      <Container>
        <div className="App">
          <img src={dashboardIMG} alt="dashboard" />

          <Button
            onClick={tindakan}
            variant="contained"
            style={{ height: 60, marginTop: 10, background: "orange" }}
          >
            <h2>Dekatkan Kartu Berobat Anda Pada Mesin Scanner Kami</h2>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default HomeScreen;
