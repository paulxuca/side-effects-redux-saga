import React from "react";
import { Slide, ListItem, Heading, Markdown } from "spectacle";

export default () => (
	<Slide>
        <Heading margin={20} size={6}>
            Doesn't take a lot to start running into issues with side effects
        </Heading>

        <ListItem textSize={24}>
            Lack of seperation of concerns
        </ListItem>

        <ListItem textSize={24}>
            Reacting to changes/actions/events is not possible, only values
        </ListItem>

        <ListItem textSize={24}>
            Testability
        </ListItem>

        <ListItem textSize={24}>
            Action creators no longer house "pure serializable" values, but business logic
        </ListItem>    
	</Slide>
);
