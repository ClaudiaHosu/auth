/* @flow */
import React from 'react';
import { View } from 'react-native';

const CardSection = (props: {children: string}) => (
    <View style={styles.containerStyle}>
      { props.children }
    </View>
);


const styles = {

  containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'
  },

  textStyle: {

  }
};

export default CardSection;
