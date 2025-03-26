import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = "success", duration = 3000) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, duration);
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div className="fixed bottom-4 right-4 z-100 space-y-2">
        {notifications.map((n) => {
          return (
            <div
              key={n.id}
              className={`px-4 py-2 rounded shadow-md text-white ${
                n.type === "error" ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {n.message}
            </div>
          );
        })}
      </div>
    </NotificationContext.Provider>
  );
};
export const useNotification = () => useContext(NotificationContext);
