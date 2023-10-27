import React, { useEffect, useState } from 'react';

export function ScrollToTop() {
   const [showArrow, setShowArrow] = useState(false);

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   const onArrowVisible = () => {
      if (window.scrollY > 300) {
         setShowArrow(true);
      } else {
         setShowArrow(false);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', onArrowVisible);

      return () => {
         window.removeEventListener('scroll', onArrowVisible);
      };
   }, []);

   return (
      <button
         className="btn btn-primary back-to-top"
         onClick={scrollToTop}
         style={{ display: showArrow ? 'inline' : 'none' }}
      >
         <i className="fa fa-angle-double-up" />
      </button>
   );
}
