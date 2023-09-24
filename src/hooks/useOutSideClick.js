import { useEffect } from "react";

const useOutSideClick = (ref, exception, cb) => {
  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.id !== exception
      ) {
        cb();
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref, cb]);
};
export default useOutSideClick;
