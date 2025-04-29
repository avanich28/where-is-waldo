"use client";

import { type ErrorProps } from "@/app/_utils/types";
import Button from "@/app/_components/Button";

function GlobalError({ error, reset }: ErrorProps) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  );
}

export default GlobalError;
