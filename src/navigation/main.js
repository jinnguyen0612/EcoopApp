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
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import Affiliate from "../screens/Affiliate";


const Stack = createNativeStackNavigator()

export default function MyScreen(){
    const { isLogin } = useContext(AuthContext);

    return(
        <Stack.Navigator>
            {
                isLogin?
                <>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
                    <Stack.Screen name="Collaborator" component={Collaborator} options={{ headerShown: false}}/>
                    <Stack.Screen name="Events" component={Events} options={{ headerShown: false}}/>
                    <Stack.Screen name="EventDetails" component={EventDetails} options={{ headerShown: false}}/>
                    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false}}/>
                    <Stack.Screen name="Affiliate" component={Affiliate} options={{ headerShown: false}}/>
                
                </>:
                <>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false}}/>
                    <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false}}/>
                    <Stack.Screen name="VerifyCode" component={VerifyCode} options={{ headerShown: false}}/>
                    <Stack.Screen name="Referral" component={Referral} options={{ headerShown: false}}/>
                </>
            }
            
        </Stack.Navigator>
    )
}