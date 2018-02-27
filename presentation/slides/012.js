import React from "react";
import { Slide, Heading, List, ListItem, CodePane } from "spectacle";

const code = `
    function * iterator(x, y) {
        yield 1;
        yield 2;
        const sum = yield x + y;

        return -sum;
    }

    const firstIterator = iterator(1, 2);

    firstIterator.next() // {done: false, value: 1}
    firstIterator.next() // {done: false, value: 2}
    firstIterator.next() // {done: false, value: 3}
    // Let's pass a value into the generator
    firstIterator.next(3) // {done: true, value: -3}
`;

const notes = `
    returns an object with next/done/
    passsing values into generators
`;

export default () => (
	<Slide notes={notes}>
        <Heading size={6}>Intro to generator functions</Heading>
        <CodePane margin={20} textSize={20} source={code} lang="javascript">
            
        </CodePane>

        Allows us to write asynchronous code as synchronous (via promises).
	</Slide>
);
