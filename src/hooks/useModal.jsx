import { useState } from "react";

export default function useModal(initial = false) {
  const [open, setOpen] = useState(initial);
  const show = () => setOpen(true);
  const hide = () => setOpen(false);
  return { open, show, hide };
}
