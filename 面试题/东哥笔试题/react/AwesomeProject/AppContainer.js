import { createStackNavigator, createAppContainer } from "react-navigation";
import First from './components/First'
import Counter from './components/Counter'
import MyFocus from './components/MyFocus'

const AppNavigator = createStackNavigator(
  {
    First, Counter, MyFocus
  },
  {
    initialRouteName: "First"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;