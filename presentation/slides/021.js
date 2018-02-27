import React from "react";
import { Slide, ListItem, Heading, Markdown } from "spectacle";

export default () => (
	<Slide>
        <Heading margin={20} size={6}>
            When not to use sagas
        </Heading>

        <ListItem textSize={24}>
            Overkill
        </ListItem>

        <ListItem textSize={24}>
            Over engineering problems
        </ListItem>
	</Slide>
);
