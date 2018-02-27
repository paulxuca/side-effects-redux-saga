import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    // fetch
    fetch('/api')
        .then(response => response.json())
        .then(value => document.write(value))

    // localstorage
    const value = localStorage.getItem('foo');

    document.write(value)
`;

export default () => (
	<Slide>
		<Heading size={3}>What are side effects?</Heading>
        <List>
            <ListItem textSize={24}>
                Action -> something -> reaction
            </ListItem>

            <ListItem textSize={24}>
                process of "calling" into the real world
            </ListItem>

            <ListItem textSize={24}>
                Most apps have the challenge of side effects (fetch, localstorage)
            </ListItem>

            <CodePane margin={20} textSize={20} source={code} lang="javascript">
                
            </CodePane>
        </List>
	</Slide>
);
