import React, { useState } from "react";
import { Modal, IconButton, Box, Backdrop, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const GFXDesignDetail = ({ image, title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ width: "100%" }}>
      {/* Thumbnail Container with Fixed Size */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "400px", // Fixed height (adjust as needed)
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          transition: "all 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
            "& .overlay": { opacity: 1 },
          },
        }}
      >
        {/* Image with Fixed Aspect Ratio */}
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image fills the container properly
            cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        />
        
        {/* Hover Overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.3s ease",
            cursor: "pointer",
          }}
          onClick={() => setOpen(true)}
        >
          <FullscreenIcon sx={{ color: "white", fontSize: 40 }} />
        </Box>
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        BackdropComponent={Backdrop}
        BackdropProps={{ sx: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}>
          {/* Close Button */}
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.6)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Full Image */}
          <img
            src={image}
            alt={title}
            style={{
              display: "block",
              width: "80vw",
              maxHeight: "80vh",
              objectFit: "contain", // Ensures image is fully visible
            }}
          />
          
          {/* Description */}
          <Typography sx={{ color: "white", textAlign: "center", mt: 2 }}>
            {title} - {description}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default GFXDesignDetail;