import Grid from "@mui/material/Unstable_Grid2";

const Margin = ({ children }) => {
  return (
    <Grid container sx={{ overflowY: "hidden" }}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        {children}
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default Margin;
