import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    const login = (username, password) => dispatch => {
        dispatch(loginStart())

        authApi.login(username, password)
            .then(
                user => dispatch(loginSuccess(user)),
                err => dispatch(loginError(err))
            )
    };
`;

export default () => (
	<Slide>
        <Heading size={6}>Trivial Example</Heading>
        <CodePane margin={20} textSize={20} source={code} lang="javascript">
            
        </CodePane>
	</Slide>
);
