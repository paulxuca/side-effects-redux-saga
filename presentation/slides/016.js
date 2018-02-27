import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
   function * authenticationSaga() {
       yield fork(watchLogin); // Creates a sub saga
       yield fork(watchLogout);
       yield fork(watchEditUser);
   }

   function * notificationsSaga() {
       yield fork(watchNotifications);
       yield fork(watchMessages);
   }

   function * analyticsSaga() {
       yield fork(googleAnalyticsWatcher);
       yield fork(eventsWatcher);
   }
`;

const notes = `
    vocabulary of redux saga
`;

export default () => (
	<Slide notes={notes}>
        <Heading size={6}>Domain based organization</Heading>
        <CodePane margin={20} textSize={20} source={code} lang="javascript">
            
        </CodePane>
	</Slide>
);
