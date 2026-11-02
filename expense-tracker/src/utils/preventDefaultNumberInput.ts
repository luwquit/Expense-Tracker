import type { KeyboardEvent } from "react";

export const preventDefaultNumberInput = (event: KeyboardEvent<HTMLInputElement>): void => {
  if (['e', 'E', '+', '-'].includes(event.key)) event.preventDefault();
}