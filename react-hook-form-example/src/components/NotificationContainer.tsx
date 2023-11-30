// NotificationContainer.tsx

import React, { useState, useEffect } from 'react';
import Notification from './Notification';

interface NotificationContainerProps {
  content?: React.ReactNode;
  variant?: string;
}

interface NotificationData {
  id: number;
  content: React.ReactNode;
  variant?: string;
}

const NotificationContainer: React.FC<NotificationContainerProps> = ({ content, variant }) => {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  
  const addNotification = (content: React.ReactNode, variant?: string) => {
    const id = Date.now();
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id, content, variant },
    ]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  useEffect(() => {
    if (content) {
      addNotification(content, variant);
    }
  }, [content, variant]);

  return (
    <div>
      <div className='fixed top-4 right-4 '>
        {notifications &&notifications.map((notification) => (
          <Notification
            key={notification.id}
            id={notification.id}
            variant={notification.variant}
            onClose={() => removeNotification(notification.id)}
          >
            {notification.content}
          </Notification>
        ))}
      </div>
    </div>
  );
};

let instance: React.FC<NotificationContainerProps> | null = null;

export const getSingletonNotificationContainerInstance = (): React.FC<NotificationContainerProps> => {
  console.log("Singleton: ", (!instance));
  
  if (!instance) {
    instance = NotificationContainer;
  }
  return instance;
};

// Usage

const Popup = getSingletonNotificationContainerInstance();

export default Popup;

// export default NotificationContainer;
