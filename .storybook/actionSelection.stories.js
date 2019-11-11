import React from "react";
import { ActionSelection } from "../src/presenter/molecules/ActionSelection";
import { SymbolCard } from "../src/presenter/atoms/SymbolCard";
import { Button } from "../src/presenter/atoms/Button";

export default { title: "ActionSelection" };

export const withText = () => (
  <ActionSelection
    isOpen={true}
    cardSlot={
      <SymbolCard
        symbolName="rat" />
    }
    contentSlot={
      "田中さん「これはネズミです。」"
    }
    buttonSlot={
      <>
        <Button>はい</Button>
        <Button>いいえ</Button>
      </>
    }

  />
);

