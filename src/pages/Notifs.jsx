import React, { useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

function Notifs() {
  const { darkMode } = useDarkMode();

  // Set dark mode class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Function to handle notification permissions
  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted');
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  // Check if notifications are supported and request permission on mount
  useEffect(() => {
    if ('Notification' in window) {
      requestNotificationPermission();
    }
  }, []);

  const notifications = [
    {
      id: 1,
      message: "Semester 4 PPTs uploaded (AI, DBMS, DAA)",
      date: "March 20, 2024",
      isNew: true
    },
    {
      id: 2,
      message: "Dark Mode Added!!!!",
      date: "March 20, 2024",
      isNew: true
    }
  ];

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-[url('/bg1.svg')] dark:bg-[url('/dbg2.svg')] pt-6 px-5">
        {/* Title */}
        <div className="flex justify-center mr-16">
          <div className="text-center text-or1 dark:text-gray-100 font-semibold pt-10 ml-16 md:ml-0 h-full rounded-3xl md:w-[450px] w-[350px] text-4xl">
            Notifications
          </div>
        </div>

        {/* Main Content */}
        <div className="main md:h-[50vh] h-[30vh] font-ubuntu text-center mt-20 mx-auto w-[500px]">
          {notifications.length > 0 ? (
            <div className="space-y-4">
              {notifications.map((notif) => (
                <div 
                  key={notif.id} 
                  className="text-white bg-[#008080] dark:bg-gray-700 p-6 rounded-3xl relative"
                >
                  {notif.isNew && (
                    <span className="absolute top-4 right-4 h-3 w-3 bg-red-500 rounded-full"></span>
                  )}
                  <p className="text-xl md:text-2xl font-bold mb-2">{notif.message}</p>
                  <p className="text-sm md:text-base opacity-80">{notif.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-white bg-[#008080] dark:bg-gray-700 md:h-52 w-80 h-36 md:w-full md:text-4xl pt-12 ml-6 text-xl font-bold md:pt-20 rounded-3xl'>  
              No New Notifications
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notifs;