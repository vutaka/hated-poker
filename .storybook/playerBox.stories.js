import React from "react";
import { PlayerBox } from "../src/presenter/molecules/PlayerBox"
import { SymbolCard } from "../src/presenter/atoms/SymbolCard";
import { SymbolCardArea } from "../src/presenter/atoms/SymbolCardArea";

export default { title: "PlayerBox" };

const symbols = ["rat", "dog", "snake", "jellyfish", "bat", "deer", "shark", "crow"];

export const normal = () => <PlayerBox playerName={"武田さん"}>ああああああ</PlayerBox>;

export const isCurrent = () => <PlayerBox playerName={"武田さん"} isCurrent={true}>ああああああ</PlayerBox>;

export const withCard = () => (
  <div>
    <PlayerBox playerName={"武田さん"} isCurrent={true}>
      <SymbolCardArea isSmall={true}>
        <SymbolCard isSmall={true} isOpen={true} symbolName={"bat"} />
        <SymbolCard isSmall={true} isOpen={true} symbolName={"rat"} />
        <SymbolCard isSmall={true} isOpen={true} symbolName={"dog"} />
        <SymbolCard isSmall={true} isOpen={true} symbolName={"snake"} />
        <SymbolCard isSmall={true} isOpen={true} symbolName={"jellyfish"} />
        <SymbolCard isSmall={true} isOpen={true} symbolName={"bat"} />
        <SymbolCard isSmall={true} isOpen={true} symbolName={"deer"} />
        <SymbolCard isSmall={true} isOpen={true} symbolName={"shark"} />
        <SymbolCard isSmall={true} isOpen={true} symbolName={"crow"} />
        <SymbolCard isSmall={true} isOpen={true} symbolName={"bat"} />
        <SymbolCard isSmall={true} isOpen={true} symbolName={"bat"} />
        <SymbolCard isSmall={true} isOpen={true} symbolName={"rat"} />
        <SymbolCard isSmall={true} isOpen={true} symbolName={"rat"} />

      </SymbolCardArea>
      <SymbolCardArea cardListSize={21}>
        {[...Array(21)].map((v, i) =>
          <SymbolCard isOpen={true} symbolName={symbols[i % symbols.length]} key={i} />
        )}
      </SymbolCardArea>
    </PlayerBox>
  </div >
);