import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Artist from './pages/artist';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});





function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist" element={<Artist />} />
        </Routes>
      </Router>
    </ThemeProvider>

  );
}

export default App;
