import { useState, useEffect } from 'react';

const usePopupTiming = (delay = 30000) => { // Default 30 seconds
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (!hasShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        setHasShown(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay, hasShown]);

  const closePopup = () => setShowPopup(false);

  return { showPopup, closePopup };
};

export default usePopupTiming;