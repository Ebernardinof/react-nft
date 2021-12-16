import "./App.css";

import Main from "./components/Main";
import { Header } from "./components/Header";
import EbinList from "./components/EbinList";
import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [ebinListData, setEbinListData] = useState([]);
  const [selectedEbin, setSelectedEbin] = useState([0]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        `https://testnets-api.opensea.io/assets?asset_contract_address=0xCb0948f027F48D82D6F0e2557029E7564719579a&order_direction=asc`
      );
      console.log(openSeaData.data.assets);
      setEbinListData(openSeaData.data.assets);
    };
    return getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {ebinListData.length > 0 && (
        <>
          <Main ebinListData={ebinListData} selectedEbin={selectedEbin} />
          <EbinList
            ebinListData={ebinListData}
            setSelectedEbin={setSelectedEbin}
          />
        </>
      )}
    </div>
  );
}

export default App;
