import React  from 'react';
import { Button } from 'react-native';

export default function ButtonView({ handleClick }) {

    return (
        <Button title="Click" onPress={handleClick}></Button>
    )
}
