import React from 'react';
import renderer from 'react-test-renderer';

import {Bio} from './Bio'
import { Item } from 'semantic-ui-react';

describe('<Bio />', () => {
    it('Should match snapshot', () => {
        const tree = renderer.create(<Bio char='{
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male"}'/>)
            expect(tree).toMatchSnapshot();
    })
})