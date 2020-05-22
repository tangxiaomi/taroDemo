import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5"; // 这个Taro一般是组件中需要用到的时候才引入
import { View, Text, Button, Image } from '@tarojs/components';
import img from '../../statics/屏幕快照 2020-05-21 下午2.22.16.png';

class Blog extends Taro.Component {
  render() {

    const [blogTitle, setBlogTitle] = Taro.useState('jsblog');
    const [introduce, setIntroduce] = Taro.useState('easy');

    const girls = [{ id: 1, name: '大脚' }, { id: 2, name: '刘颖' }, { id: 3, name: '美玲' }, { id: 4, name: '香秀' }];

    let zhujueNum = 1;

    const gotoIndex = () => {
      // Taro.navigateTo({url: '/pages/index/index'}) // 与路由配置的要进行匹配，还要加上绝对路径中的‘/’
      Taro.navigateTo({ url: '/pages/index/index?blogTitle=' + blogTitle + '&introduce=' + introduce }); // 将这个blogTitle传递到index页面中去,通过这种拼接字符串的方式
    };

    return <View>
      <Text>Blog Page</Text>
      <Button onClick={gotoIndex}>我要跳转到index页面</Button>
      <View><Image src={img} /></View>
      <View><Image src={require('../../statics/屏幕快照 2020-05-21 下午2.22.16.png')} /></View>
      {girls.map((item, index) => {
        return (
          // 写了key只对key进行修改，提高性能
          <View key={index}>{item.id}{item.name}</View>
        );
      })}
      <View>
        {/* Taro不能使用if else， 只能使用三元运算符和短路运算符 */}
        男主角是: {'玉田'}
        {/* 与上边是等同的，用的是短路运算符 */}
        男主角是: {"玉田"} 
      </View>
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

export default Blog;

//五种方法进行页面跳转
// navigateTo (小程序 h5 reactnative）  
// redirecTo(三端都支持，但是没办法返回上一页)  
// switchTab(需要用taro带的底栏组件才可以)
// navigateBack （跳回到前一个页面）
// relaunch(关闭所有页面 再打开新的页面)
// getCurrentPages(获取页面路径的信息，不支持h5)