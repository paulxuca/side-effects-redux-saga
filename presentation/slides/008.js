import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    const searchForImages = term => dispatch => {
        dispatch(startSearch());

        searchApi.search(term)
            // Uh oh! What if search term changes while this happens.
            .then(images => dispatch(finishSearch(images)))
    };
`;

const notes = `
    - typeahead searches
    - hard to cancel on going actions
    - sure we can write validation logic, but that means more logic in action creators (we want to avoid this)
`;

export default () => (
	<Slide notes={notes}>
        <Heading size={6}>non trivial Example :)</Heading>
        <CodePane margin={20} textSize={20} source={code} lang="javascript">
            
        </CodePane>
	</Slide>
);
