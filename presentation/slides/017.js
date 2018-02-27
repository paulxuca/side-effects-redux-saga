import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    function * watchNotifications() {
        yield put(startWatchingNotifications());

        const saga = yield fork(pollNotifications);

        yield take('STOP_WATCHING_NOTIFICATIONS');
        yield cancel(saga);
    }

   function * pollNotifications() {
       while (true) { // Remember this is a generator function!
           yield call(delay, 10000);
           const notifications = yield call(notificationsApi.getNotifications)

           yield put(loadNotifications(notifications));
       }
   }
`;

const notes = `
    vocabulary of redux saga
`;

export default () => (
	<Slide notes={notes}>
        <Heading size={6}>Timing based events</Heading>
        <CodePane margin={20} textSize={20} source={code} lang="javascript">
            
        </CodePane>
	</Slide>
);
