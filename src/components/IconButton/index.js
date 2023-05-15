import React from 'react';
import { Button, Icon } from 'react-native-elements';

export default function IconButton({ title, onPress }) {
  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={styles.button}
      icon={
        <Icon
          name="search"
          type="font-awesome"
          color="white"
          size={20}
        />
      }
    />
  );
}

const styles = {
  button: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
    backgroundColor: "#7B68EE",
  },
};
