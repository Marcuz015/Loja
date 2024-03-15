import { NavigationContainer } from "@react-navigation/native";
import Routes from './Routes/Routes.js';
import AuthProvider from "./context/auth.js";

export default function Perfil() {
  return (
    <NavigationContainer>
        <AuthProvider>
         <Routes/>
        </AuthProvider>
      </NavigationContainer>
   );
 }