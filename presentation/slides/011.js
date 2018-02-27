import React from "react";
import { Slide, ListItem, Heading, Markdown } from "spectacle";

export default () => (
	<Slide>
        <Heading margin={20} size={6}>
            Redux saga
        </Heading>

        <ListItem textSize={24}>
            **Side effect** management library
        </ListItem>

        <ListItem textSize={24}>
            Abstracts common patterns into a common vocubulary
        </ListItem>

        <ListItem textSize={24}>
            Powered by generator functions
        </ListItem>

        <ListItem textSize={24}>
            Allows complex logic to be composed in a manageable, testable and responsible way.
        </ListItem>    
	</Slide>
);
