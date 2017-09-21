/* @flow */
import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }: string) => {

    const { viewStyle,textInputStyle,labelStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={labelStyle}>
          {label}
        </Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          autoCapitalize={'none'}
          autocorrect={false}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={textInputStyle}
        />
      </View>
    );
}

const styles = {

  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 40
  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },

  textInputStyle: {
    width:100,
    height: 20,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};

export { Input };
