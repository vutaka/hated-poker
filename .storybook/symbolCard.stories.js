import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { SymbolCard } from "../src/presenter/atoms/SymbolCard";

export default {
  title: "SymbolCard",
  decorators: [withKnobs]
};

export const normal = () => <>
  <div style={{ display: "grid", "grid-template-columns": "repeat(10, 1fr)", width: "300px" }}>
    <SymbolCard isOpen={boolean("isOpen", false)} symbolName={"rat"} onClick={() => alert("rat")} />
  </div>
</>;

export const many = () => <>
  <div style={{ display: "grid", "grid-template-columns": "repeat(10, 1fr)", width: "300px" }}>
    <SymbolCard isOpen={true} symbolName={"rat"} onClick={() => alert("rat")} />
    <SymbolCard isOpen={true} symbolName={"dog"} />
    <SymbolCard isOpen={true} symbolName={"snake"} />
    <SymbolCard isOpen={true} symbolName={"jellyfish"} />
    <SymbolCard isOpen={true} symbolName={"bat"} />
    <SymbolCard isOpen={true} symbolName={"deer"} />
    <SymbolCard isOpen={true} symbolName={"shark"} />
    <SymbolCard isOpen={true} symbolName={"crow"} />
    <SymbolCard isOpen={true} symbolName={"crow"} />
    <SymbolCard isOpen={true} symbolName={"crow"} />
  </div>
  <div style={{ display: "grid", "grid-template-columns": "repeat(8, 1fr)" }}>
    <SymbolCard symbolName={"rat"} />
    <SymbolCard symbolName={"dog"} />
    <SymbolCard symbolName={"snake"} />
    <SymbolCard symbolName={"jellyfish"} />
    <SymbolCard symbolName={"bat"} />
    <SymbolCard symbolName={"deer"} />
    <SymbolCard symbolName={"shark"} />
    <SymbolCard symbolName={"crow"} />
  </div>
</>;

export const small = () => <>
  <div style={{ display: "grid", "grid-template-columns": "repeat(8, 1fr)" }}>
    <SymbolCard isSmall={true} isOpen={true} symbolName={"rat"} />
    <SymbolCard isSmall={true} isOpen={true} symbolName={"dog"} />
    <SymbolCard isSmall={true} isOpen={true} symbolName={"snake"} />
    <SymbolCard isSmall={true} isOpen={true} symbolName={"jellyfish"} />
    <SymbolCard isSmall={true} isOpen={true} symbolName={"bat"} />
    <SymbolCard isSmall={true} isOpen={true} symbolName={"deer"} />
    <SymbolCard isSmall={true} isOpen={true} symbolName={"shark"} />
    <SymbolCard isSmall={true} isOpen={true} symbolName={"crow"} />
  </div>
  <div style={{ display: "grid", "grid-template-columns": "repeat(8, 1fr)" }}>
    <SymbolCard isSmall={true} symbolName={"rat"} />
    <SymbolCard isSmall={true} symbolName={"dog"} />
    <SymbolCard isSmall={true} symbolName={"snake"} />
    <SymbolCard isSmall={true} symbolName={"jellyfish"} />
    <SymbolCard isSmall={true} symbolName={"bat"} />
    <SymbolCard isSmall={true} symbolName={"deer"} />
    <SymbolCard isSmall={true} symbolName={"shark"} />
    <SymbolCard isSmall={true} symbolName={"crow"} />
  </div>
</>;