import {
    Center,
    NativeBaseProvider,
    
    Text,
   
    Box,
   

} from "native-base";

const App = () => {
    return <Box bg={{
        linearGradient: {
            colors: ["lightBlue.300", "violet.800"],
            start: [0, 0],
            end: [1, 0]
        }
    }} p="12" rounded="xl" _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
        textAlign: "center"
    }}>
        This is a Box with Linear Gradient
    </Box>;
};

const config = {
    dependencies: {
        "linear-gradient": require('expo-linear-gradient').LinearGradient
    }
};

export const SearchedList = () => {
    return <NativeBaseProvider config={config}>
        <Center flex={1} px="3">
            <Text>ddd</Text>
            <App/>
        </Center>
    </NativeBaseProvider>;
}