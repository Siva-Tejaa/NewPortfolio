import React, { useState, useEffect } from "react";
import { IoCloudOfflineOutline } from "react-icons/io5";

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Only show the banner if offline
  if (isOnline) return null;

  return (
    <div className="fixed w-full z-40">
      <div className="p-2 m-4 rounded-md bg-[#e4e4fd] flex items-center gap-1 text-xs">
        <IoCloudOfflineOutline fontSize="1.3em" />
        <div className="flex items-center text-xs">
          <p className="font-semibold">Offline </p> &nbsp;
          <p>
            Your network is unavailable. Check your data or wifi connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NetworkStatus;
