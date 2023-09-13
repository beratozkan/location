import {React ,ReactNavite} from 'react-native';
import {View,Text,Button} from 'react-native';
import GetLocation from 'react-native-get-location'
import { useState } from 'react';
export default  App = () => {
    const [location, setLocation] = useState(null);
    const getLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                console.log(location);
                setLocation(location);
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
                Alert("error")
            })
    };
    return(
        <View
        style={{
            height: '100%',
            marginTop:100,
            paddingHorizontal: 20,
            paddingVertical: 20,
        }}
        >
           
            <Button title="get location" onPress={()=>{
                getLocation();
            }}/>
            <Text>
            current location
            </Text>
            <Text>
               x = {location ? location?.latitude : ''}
              
            </Text>
            <Text>
            y = {location ? location?.longitude : ''}
            </Text>
        </View>
    )

};