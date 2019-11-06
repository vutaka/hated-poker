import React from "react";
import { SymbolCard } from "../src/presenter/atoms/SymbolCard";
import { SymbolCardArea } from "../src/presenter/atoms/SymbolCardArea";

export default { title: "SymbolCardArea" };

export const normal = () => (
  <div style={{ width: "500px" }}>
    <SymbolCardArea cardListSize={21}>
      {[...Array(21)].map((v, i) => 
        <SymbolCard isOpen={true} symbolName={"rat"} key={i}/>
      )}
    </SymbolCardArea>
  </div>
)
export const small = () => (
  <div style={{ width: "500px" }}>
    <SymbolCardArea >
      {[...Array(21)].map((v, i) => 
        <SymbolCard isSmall={true} isOpen={true} symbolName={"rat"} key={i}/>
      )}
    </SymbolCardArea>
  </div>
)