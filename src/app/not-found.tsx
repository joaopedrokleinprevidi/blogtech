import {
  MessageScreen,
  MessageScreenBackButton,
  MessageScreenBanner,
  MessageScreenSubTitle,
  MessageScreenTitle,
} from "@/components/message-scren";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex w-full flex-col">
      <MessageScreen>
        <MessageScreenBanner>404</MessageScreenBanner>
        <MessageScreenTitle>Página não encontrada</MessageScreenTitle>
        <MessageScreenSubTitle>
          Lamentamos, mas não conseguimos encontrar a página que procura.
        </MessageScreenSubTitle>
        <MessageScreenBackButton />
      </MessageScreen>
    </div>
  );
}
