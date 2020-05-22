import Nerv from "nervjs";
import Taro, { request as _request } from "@tarojs/taro-h5";
import { View, Text, Button } from "@tarojs/components";

class BlogData extends Taro.Component {
  render() {
    const [articalList, setArticalList] = Taro.useState([]);
    const getData = () => {
      _request({
        url: 'https://apiblog.jspang.com/default/getArticleList'
      }).then(res => {
        console.log(res);
        setArticalList(res.data.list);
      });
    };

    return <View>
      <Text>获取远程数据的页面</Text>
      <Button onClick={getData}>点击获取数据</Button>
      {articalList.map((item, index) => {
        return <View key={index}>{item.title}</View>;
      })}
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

export default BlogData;