// App.js
import React from "react";
import { Paper, CssBaseline, Container, Box } from "@mui/material";
import Calculator from "./calculator";

function App() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
          <Calculator />
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
