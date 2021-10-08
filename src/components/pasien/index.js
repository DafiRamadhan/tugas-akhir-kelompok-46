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

const DataPasien = createContext();

export default function Pasien() {
  const [data, setData] = useState([]);
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [TTL, setTTL] = useState("");
  const [telepon, setTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const [ruang, setRuang] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/data",
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
                    setUmur(results.umur);
                    setTTL(results.TTL);
                    setTelepon(results.telepon);
                    setAlamat(results.alamat);
                    setRuang(results.ruang);
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={results.avatar}
                  />
                  <CardContent style={{}}>
                    <h3>{results.nama}</h3>
                    <h5>Ruang : {results.ruang}​​​​​​</h5>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <DataPasien.Provider
        value={{
          nama: nama,
          umur: umur,
          TTL: TTL,
          telepon: telepon,
          alamat: alamat,
          ruang: ruang
        }}
      >
        <div>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Detail />
          </Modal>
        </div>
      </DataPasien.Provider>
    <br/></div>
  );
}

function Detail() {
  const detail = useContext(DataPasien);
  return (
    <Box sx={modal}>
      <Typography variant="h6">{detail.nama}</Typography>
      <Typography>Umur : {detail.umur}</Typography>
      <Typography>Tempat, Tanggal Lahir : {detail.TTL}</Typography>
      <Typography>No. Telepon : {detail.telepon}</Typography>
      <Typography>Alamat : {detail.alamat}</Typography>
      <Typography>Ruang : {detail.ruang}</Typography>
    </Box>
  );
}