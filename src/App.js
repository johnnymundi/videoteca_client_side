import Layout from "./components/Layout";
import { VideoContextProvider } from "./components/context/VideoContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <VideoContextProvider>
        <Layout />
      </VideoContextProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
