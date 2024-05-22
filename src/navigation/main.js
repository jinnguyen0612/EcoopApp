import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Events from "../screens/Events";
import EventDetails from "../screens/EventDetails";
import Collaborator from "../screens/Collaborator";
import ForgotPassword from "../screens/ForgotPassword";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Referral from "../screens/Referral";
import VerifyCode from "../screens/VerifyCode";


const Stack = createNativeStackNavigator()

export default function MyScreen({isLogin}){
    return(
        <Stack.Navigator>
            {
                isLogin?
                <>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false, screenOrientation: 'portrait' }} />
                    <Stack.Screen name="Collaborator" component={Collaborator} options={{ headerShown: false, screenOrientation: 'portrait' }}/>
                    <Stack.Screen name="Events" component={Events} options={{ headerShown: false, screenOrientation: 'portrait' }}/>
                    <Stack.Screen name="EventDetails" component={EventDetails} options={{ headerShown: false, screenOrientation: 'portrait' }}/>
                    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false, screenOrientation: 'portrait' }}/>
                
                </>:
                <>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false, screenOrientation: 'portrait' }}/>
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false, screenOrientation: 'portrait' }}/>
                    <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false, screenOrientation: 'portrait' }}/>
                    <Stack.Screen name="VerifyCode" component={VerifyCode} options={{ headerShown: false, screenOrientation: 'portrait' }}/>
                    <Stack.Screen name="Referral" component={Referral} options={{ headerShown: false, screenOrientation: 'portrait' }}/>
                </>
            }
            
        </Stack.Navigator>
    )
}