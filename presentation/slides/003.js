import React from "react";
import { Slide, ListItem, Heading } from "spectacle";

export default () => (
	<Slide>
        <Heading margin={20} size={6}>
        redux only tells us how to manage the state, not side effects
        </Heading>

        <ListItem textSize={24}>
            Lots of room for interpretation, creativity and bad practices
        </ListItem>

        <ListItem textSize={24}>
            Actions should be pure representations of what you are sending to the store
        </ListItem>

        <ListItem textSize={24}>
          "Actions are payloads of information that send data from your application to your store"
        </ListItem>            
	</Slide>
);
