import type { PointerEvent as ReactPointerEvent } from "react";

export function updateProductTilt(event: ReactPointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;

  event.currentTarget.style.setProperty("--tilt-x", `${x * 8}deg`);
  event.currentTarget.style.setProperty("--tilt-y", `${y * -8}deg`);
  event.currentTarget.style.setProperty("--glare-x", `${(x + 0.5) * 100}%`);
  event.currentTarget.style.setProperty("--glare-y", `${(y + 0.5) * 100}%`);
}

export function resetProductTilt(event: ReactPointerEvent<HTMLElement>) {
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
  event.currentTarget.style.setProperty("--glare-x", "50%");
  event.currentTarget.style.setProperty("--glare-y", "50%");
}
