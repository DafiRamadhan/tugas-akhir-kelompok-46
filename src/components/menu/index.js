import { Component } from "react";
import React from "react";
import Room from "../room";
import Dokter from "../dokter";
import Pasien from "../pasien";
import Gambar1 from "../assets/a.png";
import Gambar2 from "../assets/b.png";
import Gambar3 from "../assets/c.png";
import "../../styles.css";

class Menu extends Component {
  state = {
    room: false,
    dokter: false,
    pasien: false,
  };

  viewKomponen1 = () => {
    this.setState(() => {
      return {
        room: !this.state.room,
      };
    });
  };

  viewKomponen2 = () => {
    this.setState(() => {
      return {
        dokter: !this.state.dokter,
      };
    });
  };

  viewKomponen3 = () => {
    this.setState(() => {
      return {
        pasien: !this.state.pasien,
      };
    });
  };

  render() {
    return (
      <>
        <h2 className="welcome">
          Selamat datang, silakan pilih Menu dibawah ini!
        </h2>
        <div className="Menu">
          <div className="component1">
            <button id="btn-menu" onClick={this.viewKomponen1}>
              {this.state.room ? "Tutup" : "Munculkan"} Daftar Kamar
            </button>
            {this.state.room && (
              <Room image={Gambar1} image2={Gambar2} image3={Gambar3} />
            )}
          </div>
          <div className="component2">
            <button id="btn-menu" onClick={this.viewKomponen2}>
              {this.state.dokter ? "Tutup" : "Munculkan"} Daftar Dokter
            </button>
            {this.state.dokter && <Dokter />}
          </div>
          <div className="component3">
            <button id="btn-menu" onClick={this.viewKomponen3}>
              {this.state.pasien ? "Tutup" : "Munculkan"} Daftar Pasien
            </button>
            {this.state.pasien && <Pasien />}
          </div>
        </div>
      </>
    );
  }
}

export default Menu;