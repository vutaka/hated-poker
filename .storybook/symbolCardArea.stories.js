import React from "react";
import { SymbolCard } from "../src/presenter/atoms/SymbolCard";
import { SymbolCardArea } from "../src/presenter/atoms/SymbolCardArea";

export default { title: "SymbolCardArea" };

const symbols = ["rat", "dog", "snake", "jellyfish", "bat", "deer", "shark", "crow"];

export const normal = () => (
  <div style={{ width: "500px" }}>
    <SymbolCardArea cardListSize={21}>
      {[...Array(21)].map((v, i) =>
        <SymbolCard isOpen={true} symbolName={symbols[i % symbols.length]} key={i} />
      )}
    </SymbolCardArea>
  </div>
)
export const all = () => (
  <div style={{ width: "500px" }}>
    <SymbolCardArea cardListSize={64}>
      {[...Array(64)].map((v, i) =>
        <SymbolCard isOpen={true} symbolName={symbols[i % symbols.length]} key={i} />
      )}
    </SymbolCardArea>
  </div>
)
export const small = () => (
  <div style={{ width: "500px" }}>
    <SymbolCardArea >
      {[...Array(21)].map((v, i) =>
        <SymbolCard isSmall={true} isOpen={true} symbolName={symbols[i % symbols.length]} key={i} />
      )}
    </SymbolCardArea>
  </div>
)