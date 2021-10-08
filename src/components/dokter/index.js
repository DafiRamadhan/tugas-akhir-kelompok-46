import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import "../../styles.css";

const modal = {
  position: "fixed",
  transform: "translate(-50%, -50%)",
  top: "50%",
  left: "50%",
  width: "400px",
  bgcolor: "#FFFFFF",
  borderRadius: "10px",
  padding: "30px",
};

const DataDokter = createContext();

export default function Dokter() {
  const [data, setData] = useState([]);
  const [nama, setNama] = useState("");
  const [hari, setHari] = useState("");
  const [jam, setJam] = useState("");
  const [telepon, setTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3333/data",
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        setData(data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Grid container spacing={10} style={{ justifyContent: "center" }}>
        {data.map((results) => {
          return (
            <Grid item key={results.nama} md={3}>
              <Card style={{ borderRadius: "15px" }}>
                <CardActionArea
                  onClick={() => {
                    setOpen(true);
                    setNama(results.nama);
                    setHari(results.hari);
                    setJam(results.jam);
                    setTelepon(results.telepon);
                    setAlamat(results.alamat);
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={results.image}
                  />
                  <CardContent>
                    <h3>{results.nama}</h3>
                    <h5>🩺 Spesialis : {results.spesialis}​​​​​​</h5>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <DataDokter.Provider
        value={{
          nama: nama,
          hari: hari,
          jam: jam,
          telepon: telepon,
          alamat: alamat,
        }}
      >
        <div>
          <Modal open={open} onClose={handleClose}>
            <Detail />
          </Modal>
        </div>
      </DataDokter.Provider>
      <br />
      <br />
      <br />
    </div>
  );
}

function Detail() {
  const info = useContext(DataDokter);
  return (
    <Box sx={modal}>
      <Typography variant="h6" component="h2">
        {info.nama}
      </Typography>
      <Typography>Jadwal Praktik: {info.hari}</Typography>
      <Typography>Jam: {info.jam}</Typography>
      <Typography>No. Telepon: {info.telepon}</Typography>
      <Typography>Alamat: {info.alamat}</Typography>
    </Box>
  );
}
