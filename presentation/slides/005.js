import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    // Managing side effects in action creators (better, but could be improved!)
    const loadThing = () => dispatch => {
        dispatch(startLoading());

        fetch('/api')
            .then(
                res => dispatch(finishLoad(res)),
                err => dispatch(errorLoad(err))
            );
    };
`;

export default () => (
	<Slide>
        <CodePane margin={20} textSize={20} source={code} lang="javascript">
            
        </CodePane>
	</Slide>
);
