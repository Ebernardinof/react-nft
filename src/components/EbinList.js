import React from "react";
import CollectionCard from "./CollectionCard";
import "./EbinList.css";

const EbinList = ({ ebinListData, setSelectedEbin }) => {
  return (
    <div className="ebinList">
      {ebinListData.map((ebin) => (
        <div onClick={() => setSelectedEbin(ebin.token_id)} key={ebin.id}>
          <CollectionCard
            key={ebin.id}
            id={ebin.token_id}
            name={ebin.name}
            traits={ebin.traits}
            image={ebin.image_original_url}
          />
          {/* {console.log(ebin)} */}
        </div>
      ))}
    </div>
  );
};

export default EbinList;
