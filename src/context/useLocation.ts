import { useEffect, useState } from "react";

const useLocation = () => {
  const [hash, setHash] = useState(window.location.hash);

  const handleHashChange = () => {
    setHash(window.location.hash);
  };

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
  }, []);

  return hash;
};

export default useLocation;
