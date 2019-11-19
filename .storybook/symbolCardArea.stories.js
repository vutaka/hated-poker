import React from "react";
import { SymbolCard } from "../src/presenter/atoms/SymbolCard";
import { SymbolCardArea } from "../src/presenter/atoms/SymbolCardArea";

export default { title: "SymbolCardArea" };

const symbols = ["rat", "dog", "snake", "jellyfish", "bat", "deer", "shark", "crow"];

export const normal = () => (
  <div style={{ width: "320px" }}>
    <SymbolCardArea cardListSize={21}>
      {[...Array(21)].map((v, i) =>
        <SymbolCard isOpen={true} symbolName={symbols[i % symbols.length]} key={i} />
      )}
    </SymbolCardArea>
  </div>
)
// 全カードが横並びになるのは2人プレイの３２枚が最大
export const all = () => (
  <div style={{ width: "320px" }}>
    <SymbolCardArea cardListSize={32}>
      {[...Array(32)].map((v, i) =>
        <SymbolCard isOpen={true} symbolName={symbols[i % symbols.length]} key={i} />
      )}
    </SymbolCardArea>
  </div>
)
export const small = () => (
  <div style={{ width: "320px" }}>
    <SymbolCardArea isSmall={true}>
      {[...Array(21)].map((v, i) =>
        <SymbolCard isSmall={true} isOpen={true} symbolName={symbols[i % symbols.length]} key={i} />
      )}
    </SymbolCardArea>
  </div>
)