import assert from 'node:assert'
import { isValidElement } from 'react'
import Component from "./component";

describe('component test', () => {
    it('exports a component', () => {
        assert.equal(isValidElement(<Component />), true);
    });
});
