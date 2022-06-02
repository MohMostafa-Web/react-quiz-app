import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      textAlign="center"
      mb="10px"
      fontSize={{ xs: "14px", md: "16px" }}
      fontFamily="'Roboto', sans-serif"
      sx={{
        a: {
          fontWeight: "500",
        },
        "a:hover": {
          color: "#3f51b5",
        },
      }}
    >
      Designed By{" "}
      <a
        href="https://www.youtube.com/roadsidecoder"
        target="_blank"
        rel="noreferrer"
      >
        Roadside Coder
      </a>
      . Coded by{" "}
      <a
        href="https://github.com/MohMostafa-Web"
        target="_blank"
        rel="noreferrer"
      >
        MohMostafa
      </a>
      .
    </Box>
  );
};

export default Footer;
