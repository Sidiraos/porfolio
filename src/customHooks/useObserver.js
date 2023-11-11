import { useEffect } from "react";

const useObserver = (ref) => {
    useEffect(() => {

        ref.current.scrollIntoView({ behavior: "smooth" });
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active")
                    } else {
                      entry.target.classList.remove("active")
                    }
                })
            }
        , {threshold : 0.3})
  
        observer.observe(ref.current)
        
        return () => {
          observer.disconnect()
      }
      }, [ref]);

 }

 export default useObserver;