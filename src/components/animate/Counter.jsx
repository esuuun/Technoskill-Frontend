// ini component buat animasi count up aja biar gegee

import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

export function Counter({ from, to, formatter }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        const formattedValue = formatter ? formatter(value) : value.toFixed(0);
        node.textContent = formattedValue;
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} />;
}