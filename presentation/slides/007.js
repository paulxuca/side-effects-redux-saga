import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    const watchForNotifications = () => (dispatch, getState) => {
        dispatch(watchStart())

        const watcherInterval = setInterval(() => {
            if (getState().done) {
                clearInterval(watcherInterval);

                return;
            }

            notificationApi.update()
                .then(notifications => dispatch(updateNotifications(notifications)))
        }, 5000);
    };
`;

const notes = `
    - testing is harder (how do we get the notificationApi into the action creator?)
    - how to cancel the action? (without leaving the page)
`;

export default () => (
	<Slide notes={notes}>
        <Heading size={6}>Semi trivial Example</Heading>
        <CodePane margin={20} textSize={20} source={code} lang="javascript">
            
        </CodePane>
	</Slide>
);
