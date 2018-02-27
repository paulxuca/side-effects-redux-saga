import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    const searchForImages = term => (dispatch, getState) => {
        dispatch(startSearch());

        searchApi.search(term)
            .then(images => {
                const searchTerm = getState().term;

                if (term === searchTerm) {
                    dispatch(finishSearch(images));
                }
            }))
    };
`;

const notes = `
    - typeahead searches
    - hard to cancel on going actions
    - sure we can write validation logic, but that means more logic in action creators (we want to avoid this)
`;

export default () => (
	<Slide notes={notes}>
        <Heading size={6}>What if the search term changes?</Heading>
        <CodePane margin={20} textSize={20} source={code} lang="javascript">
            
        </CodePane>
	</Slide>
);
