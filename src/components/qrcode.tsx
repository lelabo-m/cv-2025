"use client";

import { QrcodeCanvas, QrcodeProps } from "react-qrcode-pretty";

export function Qrcode(props: QrcodeProps<"canvas">) {
  return (
    <QrcodeCanvas
      variant={{
        eyes: "gravity",
        body: "fluid",
      }}
      color={{
        eyes: "oklch(0.8001 0.145473 62.8519)",
        body: "oklch(0.3848 0.0435 160.88)",
      }}
      padding={10}
      margin={10}
      bgColor="oklch(0.914 0.0552 78.61)"
      bgRounded
      divider
      {...props}
    />
  );
}
