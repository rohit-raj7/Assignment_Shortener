import { useEffect, useRef } from "react";
import { MousePointer2 } from "lucide-react";

export default function CustomCursor() {
  const cursor = useRef(null);

  useEffect(() => {
    const move = (e) => {
      cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursor}
      className="fixed text-amber-500 top-0 left-0 pointer-events-none z-[999999] transition-transform duration-50"
    >
      <MousePointer2 size={28} strokeWidth={2.5}/>
    </div>
  );
}
