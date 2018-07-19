import React from 'react';

import propTypes from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const Todo = ({ title }) => (
    <View>
        <Text>{title}</Text>
    </View>
);

    Todo.defaultProps = {
        title: 'Todo Padão',
    };

    Todo.propTypes = {
        title: propTypes.string,
    };

const styles = StyleSheet.create({

});

export default Todo;