import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import './index.scss';
import Child from './child';

class Index extends Taro.Component {
  render() {
    const props = this.props;

    const [userName, setUserName] = Taro.useState('jstest');
    const [blogTitle, setBlogTitle] = Taro.useState('');
    const [introduce, setIntruduce] = Taro.useState('');

    //在useEffect中接受来自blog的路径的信息
    Taro.useEffect(() => {
      setBlogTitle(this.$router.params.blogTitle);
      setIntruduce(this.$router.params.introduce);
    }, []); //空数组，表示只有在页面进来的时候执行一次

    return <View>
      <Text>{userName}</Text>
      <Child parentUserName={userName}></Child>
      <View>{blogTitle}</View>
      <View>{introduce}</View>
    </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

export default Index;