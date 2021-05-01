import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CaptionView({count}) {

    // const styles = StyleSheet.create({
    //     image: {
    //         width: 150,
    //         height: 150,
    //         marginLeft: 70,
    //     }
    // })

    return (
        <View>
            <Text>{`You clicked: ${count} times!`}</Text>
        </View>
    )
}
