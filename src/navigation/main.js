import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Events from "../screens/Events";
import EventDetails from "../screens/EventDetails";
import Collaborator from "../screens/Collaborator";

const Stack = createNativeStackNavigator()

export default function MyScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Events" component={Events}/>
            <Stack.Screen name="EventDetails" component={EventDetails}/>
            <Stack.Screen name="Collaborator" component={Collaborator}/>
        </Stack.Navigator>
    )
}