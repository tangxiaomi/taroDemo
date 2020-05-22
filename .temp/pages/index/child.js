import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Text } from '@tarojs/components';
// import react from ''

class Child extends Taro.Component {
  render() {
    const props = this.props;

    return <View>
      <Text>child  props:{props.parentUserName}</Text>
    </View>;
  }

}

export default Child;