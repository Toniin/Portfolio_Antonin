import { Dispatch, SetStateAction } from "react";

const Notification = ({
  message,
  showNotification,
  setShowNotification,
}: NotificationProps) => {
  return (
    <>
      {showNotification && (
        <aside className="notification notification--light secondary-color dark:notification--dark dark:primary-color">
          <button
            onClick={() => {
              setShowNotification(false);
            }}
          >
            {message}
          </button>
        </aside>
      )}
    </>
  );
};

export default Notification;

interface NotificationProps {
  message: string;
  showNotification: boolean;
  setShowNotification: Dispatch<SetStateAction<boolean>>;
}
