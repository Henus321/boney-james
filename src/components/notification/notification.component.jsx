import { useEffect } from 'react';
import './notification.styles.scss';

const Notification = ({
  notification,
  setNotification,
  notificationMessage,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => setNotification(false), 1500);

    return () => clearTimeout(timer);
  }, [notification, setNotification]);

  return (
    <div
      className={
        notification ? 'notification notification--active' : 'notification'
      }
    >
      {notificationMessage}
    </div>
  );
};

export default Notification;
