"use client";

import Grid from "@mui/material/Unstable_Grid2";
import { MarginContext } from "@/utils/helpers/MarginContext";
import { useContext, useState } from "react";

const Margin = ({ children }) => {
  const [margins, setMargins] = useState({ edges: 1, center: 10 });
  return (
    <MarginContext.Provider value={[margins, setMargins]}>
      <Grid container sx={{ overflow: "hidden", paddingTop: "5vh" }}>
        <Grid sm={margins.edges} xs={1} />
        <Grid sm={margins.center} xs={10}>
          {children}
        </Grid>
        <Grid sm={margins.edges} xs={1} />
      </Grid>
    </MarginContext.Provider>
  );
};

export default Margin;
