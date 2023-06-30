import { useEffect, useState } from "react";

const useLocation = () => {
    const [hash, setHash] = useState(window.location.hash);
    useEffect(()=>{
        window.addEventListener("hashchange", () => setHash(window.location.hash));
    },[])
  
    return hash;
}

export default useLocation