import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    function * watchInputChange() {
        // Wait for user idle.
        let saga = null;

        while (true) {
            const action = yield take('ON_CHANGE_INPUT');

            if (saga) {
                yield cancel(saga);
            }

            saga = yield fork(searchImages, action.payload);
        }
    }

    function * searchImages(input) {
        yield call(delay, 500);
        yield put(startSearch());

        const results = yield call(searchApi.search, input);

        yield put(finishSearch(results));
    }
`;

const notes = `
    vocabulary of redux saga
`;

export default () => (
	<Slide notes={notes}>
        <Heading size={6}>Image search example</Heading>
        <CodePane margin={20} textSize={13} source={code} lang="javascript">
            
        </CodePane>
        No more outdated responses, failure to seperate concerns
	</Slide>
);
