import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons'; 

const Menu = () => {
  return (
    <TouchableOpacity
          style={{
            marginLeft: 35,
            borderRadius: 15,
            backgroundColor: "#FFFFFF",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
          }}
        >
            <Entypo name="text" size={24} color="#A9E5DD" style={{ margin: 15 }}/>
        
        </TouchableOpacity>
  );
};

export default Menu;
