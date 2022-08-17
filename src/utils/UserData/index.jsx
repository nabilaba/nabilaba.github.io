import { Dicoding, GoogleDigitalGarage } from "./sertificates";
import { ReactJS, Nolibary, UsingPHP, Others } from "./projects";

const UserData = {
  getSertificates: (mitra) => {
    if (mitra === "Dicoding") return Dicoding;
    if (mitra === "GoogleDigitalGarage") return GoogleDigitalGarage;
  },

  getProjects: (library) => {
    if (library === "reactjs") return ReactJS;
    if (library === "nolibary") return Nolibary;
    if (library === "usingphp") return UsingPHP;
    return Others;
  },

  getStatusColor: (status) => {
    if (status === "Done") return "green.500";
    if (status === "In Progress") return "yellow.500";
    if (status === "still bad") return "red.500";
  },
};

export default UserData;
