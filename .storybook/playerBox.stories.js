import React from "react";
import { PlayerBox } from "../src/presenter/molecules/PlayerBox"
import { SymbolCard } from "../src/presenter/atoms/SymbolCard";
import { SymbolCardArea } from "../src/presenter/atoms/SymbolCardArea";

export default { title: "PlayerBox" };

const symbols = ["rat", "dog", "snake", "jellyfish", "bat", "deer", "shark", "crow"];

export const normal = () => <PlayerBox playerName={"武田さん"}>ああああああ</PlayerBox>;

export const isCurrent = () => <PlayerBox playerName={"武田さん"} isCurrent={true}>ああああああ</PlayerBox>;

export const withCard = () => (
  <div style={{ display: "grid", "grid-template-columns": "repeat(3, 1fr)" }}>
    <PlayerBox playerName={"武田さん"} isCurrent={true}>
      <SymbolCardArea isSmall={true}>
        {[...Array(21)].map((v, i) =>
          <SymbolCard isSmall={true} isOpen={true} symbolName={symbols[i % symbols.length]} key={i} />
        )}
      </SymbolCardArea>
      <SymbolCardArea cardListSize={21}>
        {[...Array(21)].map((v, i) =>
          <SymbolCard isOpen={true} symbolName={symbols[i % symbols.length]} key={i} />
        )}
      </SymbolCardArea>
    </PlayerBox>
    <PlayerBox playerName={"武田さん"} isCurrent={true}>
      <SymbolCardArea isSmall={true}>
        {[...Array(21)].map((v, i) =>
          <SymbolCard isSmall={true} isOpen={true} symbolName={symbols[i % symbols.length]} key={i} />
        )}
      </SymbolCardArea>
      <SymbolCardArea cardListSize={21}>
        {[...Array(21)].map((v, i) =>
          <SymbolCard isOpen={true} symbolName={symbols[i % symbols.length]} key={i} />
        )}
      </SymbolCardArea>
    </PlayerBox>
  </div >
);