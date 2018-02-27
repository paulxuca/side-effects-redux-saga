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
        <CodePane margin={20} textSize={20} source={code} lang="javascript">
            
        </CodePane>

        Declarative vs imperative side effects
	</Slide>
);
