"use client";

import Grid from "@mui/material/Unstable_Grid2";
import { MarginContext } from "@/utils/helpers/MarginContext";
import { useContext, useState } from "react";

const Margin = ({ children }) => {
  const [margins, setMargins] = useState({ edges: 1, center: 10 });
  return (
    <MarginContext.Provider value={[margins, setMargins]}>
      <Grid container sx={{ overflowY: "hidden", paddingTop: "5vh" }}>
        <Grid item xs={margins.edges} />
        <Grid item xs={margins.center}>
          {children}
        </Grid>
        <Grid item xs={margins.edges} />
      </Grid>
    </MarginContext.Provider>
  );
};

export default Margin;
