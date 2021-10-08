import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "../../styles.css";


class Room extends Component {
  state = {
    image: this.props.image,
    tipe: "Tipe A",
    bed: "1",
    harga: "Rp2.000.000/malam",
    fasilitas: "telepon, TV, Wi-Fi, Dapur, Ruang Tamu",
  };

  componentDidUpdate(nextProps) {
    alert(`Tipe Kamar : ${this.state.tipe}
    Fasilitas : ${this.state.fasilitas}`);
  }

  gantiGambar = () => {
    this.setState((state) => {
      if (
        state.image === this.props.image &&
        state.tipe === "Tipe A" &&
        state.bed === "1" &&
        state.harga === "Rp2.000.000/malam" &&
        state.fasilitas === "telepon, TV, Wi-Fi, Dapur, Ruang Tamu"
      ) {
        return {
          image: this.props.image2,
          tipe: "Tipe B",
          bed: "4",
          harga: "Rp1.000.000/malam",
          fasilitas: "telepon, TV, Wi-Fi",
        };
      } else if (
        state.image === this.props.image2 &&
        state.tipe === "Tipe B" &&
        state.bed === "4" &&
        state.harga === "Rp1.000.000/malam" &&
        state.fasilitas === "telepon, TV, Wi-Fi"
      ) {
        return {
          image: this.props.image3,
          tipe: "Tipe C",
          bed: "8",
          harga: "Rp500.000/malam",
          fasilitas: "TV",
        };
      } else {
        return {
          image: this.props.image,
          tipe: "Tipe A",
          bed: "1",
          harga: "Rp2.000.000/malam",
          fasilitas: "telepon, TV, Wi-Fi, Dapur, Ruang Tamu",
        };
      }
    });
  };

   prevGambar = () => {
        this.setState((state) => {
            if (
                state.image === this.props.image &&
                state.tipe === "Tipe A" &&
                state.bed === "1" &&
                state.harga === "Rp2.000.000/malam" &&
                state.fasilitas === "telepon, TV, Wi-Fi, Dapur, Ruang Tamu"
            ) {
                return {
                    

                    image: this.props.image3,
                    tipe: "Tipe C",
                    bed: "8",
                    harga: "Rp500.000/malam",
                    fasilitas: "TV",
                };
            } else if (
                state.image === this.props.image2 &&
                state.tipe === "Tipe B" &&
                state.bed === "4" &&
                state.harga === "Rp1.000.000/malam" &&
                state.fasilitas === "telepon, TV, Wi-Fi"
            ) {
                return {
                    image: this.props.image,
                    tipe: "Tipe A",
                    bed: "1",
                    harga: "Rp2.000.000/malam",
                    fasilitas: "telepon, TV, Wi-Fi, Dapur, Ruang Tamu",
                };
            } else {
                return {
                
                    image: this.props.image2,
                    tipe: "Tipe B",
                    bed: "4",
                    harga: "Rp1.000.000/malam",
                    fasilitas: "telepon, TV, Wi-Fi",
                };
            }
        });
    };

  
  render() {
    return (
      <div>
        <Grid
          container
          md={20}
          spacing={100}
          style={{ justifyContent: "center" }}
        >
          <Grid md={3}>
            <Card style={{ borderRadius: "15px" }}>
              <CardMedia
                component="img"
                width="500px"
                height="250px"
                image={this.state.image}
              />
              <CardContent style={{}}>
                  <h3>{this.state.tipe}</h3>
                  <h4>Tempat Tidur : {this.state.bed} / kamar​​​​​​</h4>
                  <h4>Harga : {this.state.harga}​​​​​​</h4>
              </CardContent>
            </Card>
            <br />
             
             <button id="prev-gambar" onClick={this.prevGambar}>
               Prev
             </button>
                    
            <button id="ganti-gambar" onClick={this.gantiGambar}>
              Next
            </button>
          </Grid>
        </Grid>
        <br />
      </div>
    );
  }
}
export default Room;
