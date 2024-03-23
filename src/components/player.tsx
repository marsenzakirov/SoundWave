import React, { useEffect, useState } from "react";
import { Box, Button, Slider, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { observer } from "mobx-react";
import songStore from "../stores/songStore";

interface PlayerProps {
  currentTime?: string;
}

const Player: React.FC<PlayerProps> = ({ currentTime = "0:00" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const { currentSong } = songStore;

  useEffect(() => {
    if (currentSong && !isPlaying) {
      handleTogglePlay();
    }
  }, [currentSong]);

  return (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#333",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "#fff" }}>
            {currentSong}
          </Typography>
          <Button
            disabled={!currentSong}
            onClick={handleTogglePlay}
            sx={{ color: "#fff" }}
            startIcon={isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          >
            {isPlaying ? "Pause" : "Play"}
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
          <Slider
            aria-label="Временной ряд"
            value={0}
            onChange={(e, value) => console.log(value)}
            disabled={!currentSong}
            sx={{ marginLeft: 2, flexGrow: 1 }}
          />
          <Typography variant="body2" sx={{ color: "#fff", marginLeft: 1 }}>
            {currentTime}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default observer(Player);
