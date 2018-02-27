import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    // sagas/ads.js
   function * showAd() {
        yield take('ON_LOGIN');
        // Do advertising related stuff here
   }

   // sagas/notifications.js
   function * watchForNotifications() {
        yield take('ON_LOGIN');
        // Do notifications related stuff here
    }

   // sagas/analytics.js
   function * triggerAnalyticsEvent() {
        yield take('ON_LOGIN');
        // Do analytics related stuff here
   }
`;

const notes = `
    vocabulary of redux saga
`;

export default () => (
	<Slide notes={notes}>
        <Heading size={6}>Reacting to events in multiple locations</Heading>
        <CodePane margin={20} textSize={20} source={code} lang="javascript">
            
        </CodePane>
	</Slide>
);
