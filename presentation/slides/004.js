import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    // Managing side effects in components (bad!)
    class Button extends Component {
        load() {
            dispatch(startLoad());

            fetch('/api')
                .then(
                    res => dispatch(finishLoad(res)),
                    err => dispatch(errorLoad(err))
                );

        }

        render() {
            <button onClick={this.load}>Load</button>
        }
    }
`;

export default () => (
	<Slide>
        <CodePane margin={20} textSize={20} source={code} lang="javascript">
            
        </CodePane>
	</Slide>
);
