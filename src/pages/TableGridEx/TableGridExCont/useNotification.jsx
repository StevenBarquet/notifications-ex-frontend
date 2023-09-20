import ContentBlock from '@sudo-boss/spellbook/ContentBlock';
import Notification from '@sudo-boss/spellbook/Notification';
import { ToastContainer, Toast } from '@sudo-boss/spellbook/Toast';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

export function useNotification() {
  useEffect(() => {
    const socket = io('http://localhost:4000'); // update this to match your server's address and port
    socket.on('connect', () => {
      console.log('connected to server');

      // Send event to server
      // socket.emit('MLG event', { message: 'message from client' });
    });

    // Listen for the event from the server
    socket.on('event response', (data) => {
      Toast({
        containerId: 'toast-container',
        content: (
          <Notification
            iconTypePrimary="fa-exclamation-circle"
            toast
            light
            notifType="success"
            role="status"
          >
            <ContentBlock>
              <p>{data?.message || 'Success!'}</p>
            </ContentBlock>
          </Notification>
        ),
        animate: true,
      });

      console.log('received response from server', data?.message);
    });

    socket.on('disconnect', () => {
      console.log('disconnected from server');
    });

    // cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return {
    toastComp: (
      <ToastContainer autoClose={3000} containerId="toast-container" enableMultiContainer />
    ),
  };
}
