import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    import {eventEmitter, END} from 'redux-saga/effects';

   const createWebsocketChannel = myWebSocket => {
       return eventEmitter(emitter => {
            myWebSocket.on('data', data => emitter({
                type: 'MY_ACTION',
                payload: data
            }))

            return () => {
                myWebSocket.close();
                emitter(END);
            };
        })
   };

   function * websocketWatcher(myWebSocket) {
        const channel = createWebSocketChannel(myWebSocket);

        while (true) {
            yield take(channel);
        }
   }

   function * notificationsWatcher() {
       const notificationsWebSocket = notificationsApi.newWebSocket();

       const saga = yield fork(websocketWatcher, notificationsWebSocket);

       yield take('LOG_OUT');
       yield cancel(saga);
   }
`;

const notes = `
    vocabulary of redux saga
`;

export default () => (
	<Slide notes={notes}>
        <Heading size={6}>Wrapping APIs in a common vocabulary</Heading>
        <CodePane margin={20} textSize={12} source={code} lang="javascript">
            
        </CodePane>
	</Slide>
);
