import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    // Interacting with redux store
    put -> dispatch
    // Getting state from redux store
    select -> getState

    // Non blocking
    fork
    // Blocking call
    call
    // Cancel a call
    cancel

    // Block until an action
    take
`;

const notes = `
    vocabulary of redux saga
`;

export default () => (
	<Slide notes={notes}>
        <Heading size={6}>The ABCs of redux saga</Heading>
        <CodePane margin={20} textSize={20} source={code} lang="javascript">
            
        </CodePane>
	</Slide>
);
