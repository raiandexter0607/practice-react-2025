import { useState, useEffect } from "react";

const OnlineStatus = () => {
  const [online, setOnline] = useState(navigator.onLine);

  const handleOnline = () => setOnline(true);
  const handleOffline = () => setOnline(false);

  useEffect(() => {
    console.log("Adding events listeners...");
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      console.log("Removing event listeners...");
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <>
      <h2>User is: {online ? "🟢 Online" : "🔴 Offline"}</h2>
    </>
  );
};

export default OnlineStatus;
