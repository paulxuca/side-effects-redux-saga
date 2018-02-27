import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    function * myFirstSaga() {
        yield put(someAction(myPayload)) // {effect: 'PUT', payload: myPayload}
        yield call(myApi, myArg) // {effect: 'CALL', fn: myApi, args: [myArg]}
    }
`;

const notes = `
    vocabulary of redux saga
`;

export default () => (
	<Slide notes={notes}>
        <Heading size={6}>Use of sagas</Heading>
        <ListItem textSize={24}>
            Organize logic into domains (auth, notifications, analytics) - subsagas
        </ListItem>

        <ListItem textSize={24}>
            Timing based events
        </ListItem>

        <ListItem textSize={24}>
            Wrapping apis in a common vocabulary
        </ListItem>

        <ListItem textSize={24}>
            Reacting to events in multiple locations
        </ListItem>
	</Slide>
);
