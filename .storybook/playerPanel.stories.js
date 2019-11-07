import React from "react";
import { PlayerPanel } from "../src/presenter/molecules/PlayerPanel"
import { SymbolCard } from "../src/presenter/atoms/SymbolCard";
import { SymbolCardArea } from "../src/presenter/atoms/SymbolCardArea";

export default { title: "PlayerPanel" };

const symbols = ["rat", "dog", "snake", "jellyfish", "bat", "deer", "shark", "crow"];

export const normal = () => <PlayerPanel playerName={"武田さん"}>ああああああ</PlayerPanel>;

export const isCurrent = () => <PlayerPanel playerName={"武田さん"} isCurrent={true}>ああああああ</PlayerPanel>;

export const withCard = () => (
  <PlayerPanel playerName={"武田さん"} isCurrent={true}>
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

  </PlayerPanel>
);