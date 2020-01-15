import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View 
} from 'react-native';
import ReactNativeSettingsPage, {
  NavigateRow,
  SectionRow,
  SwitchRow,
  CheckRow,
  SliderRow
} from "react-native-settings-page";


 
export default function Settings() {

 
 

    return (
    <View style={styles.container}>
      <ReactNativeSettingsPage>
        <SectionRow text="Usage">
        <NavigateRow
            text="Navigate Row"
            iconName="user-circle"
            
          />
          <SwitchRow
            text="Switch Row"
            iconName="road"
           
          />
        </SectionRow>
        <SectionRow text="Notifications">
          <CheckRow
            text="Check Row"
            iconName="bell"
            _color="rgb(0,100,100)"
         
          />
          <SliderRow
            text="Slider Row"
            iconName="archive"
            _color="#000"
            _min={0}
            _max={100}
           
          />
        </SectionRow>
      </ReactNativeSettingsPage>

    </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: '#cadefc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
