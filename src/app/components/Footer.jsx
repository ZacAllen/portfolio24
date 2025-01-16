import React, { useContext } from "react";
import { styled, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { DarkModeContext } from "@/utils/helpers/DarkModeContext";

const Footer = ({ isMobile }) => {
  const { isDarkMode, textColor } = useContext(DarkModeContext);
  const FooterText = styled(Typography)(({ theme }) => ({
    color: textColor,
    fontSize: "1rem",
    fontFamily: theme.typography.textFont,
  }));

  return (
    <div className="w-full bg-transparent border-t-[0.5px] border-x-0 border-b-0 border-gray-500 border-solid h-20">
      <div className="grid grid-cols-12 h-full items-center">
        <div className="col-span-1"></div>
        <div className="col-span-10 flex flex-row justify-between">
          <div>
            <FooterText>Copyright 2025 | Zach Allen</FooterText>
          </div>
          <div>
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/in/zachsallen/"
              disableFocusRipple
              disableRipple
              sx={{ padding: "0 16px 0 0" }}
            >
              <LinkedIn sx={{ fontSize: "28px", color: textColor }} />
            </IconButton>
            <IconButton
              href="https://github.com/ZacAllen"
              target="_blank"
              disableFocusRipple
              disableRipple
              sx={{ padding: "0 16px 0 0" }}
            >
              <GitHub sx={{ fontSize: "28px", color: textColor }} />
            </IconButton>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default Footer;
