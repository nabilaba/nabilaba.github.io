import { Dicoding, GoogleDigitalGarage } from "./sertificates";

const UserData = {
  getSertificates: (mitra) => {
    if (mitra === "Dicoding") return Dicoding;
    if (mitra === "GoogleDigitalGarage") return GoogleDigitalGarage;
  },
};

export default UserData;
