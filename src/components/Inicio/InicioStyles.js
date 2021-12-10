import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  imgRemolques: {
    height: "100%",
    width: "100%",
    borderRadius: "5%",
  },
  imgVacantes: {
    height: "180px",
    width: "200px",
    borderRadius: "5%",
  },
  box: {
    margin: "2rem",
    borderRadius: "5%",
    height: "200px",
    width: "250px",
  },
  title_vacantes: {
    backgroundColor: "#055549",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title_unete: {
    height: "90px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box_vacantes: {
    margin: "auto",
    borderRadius: "5%",
    height: "200px",
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "stretch",
    flexDirection: "column",
    paddingTop: "1rem",
  },
  text_footer: {
    height: "5px",
    fontSize: 13,
  },
  title_footer: {
    height: "5px",
    fontSize: 16,
  },
  text_box: {
    marginTop: "auto",
    marginBottom: "auto",
  },
}));
export default useStyles;
