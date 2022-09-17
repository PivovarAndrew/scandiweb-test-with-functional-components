import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  const handleClick = event => {
    const overlay = document.querySelector("#overlay")
    if (ref.current && !ref.current.contains(event.target) || event.target == overlay) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
