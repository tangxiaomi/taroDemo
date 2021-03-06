import Taro, {useState} from '@tarojs/taro';
import { View, Text, Button } from "@tarojs/components"

function BlogData(){
  const [articalList, setArticalList] = useState([]);
  const getData = () => {
    Taro.request({
      url: 'https://apiblog.jspang.com/default/getArticleList'
    }).then(res => {
      console.log(res);
      setArticalList(res.data.list);
    })
  }

  return(
    <View>
      <Text>获取远程数据的页面</Text>
      <Button onClick={getData}>点击获取数据</Button>
      {
        articalList.map((item, index) => {
        return (<View key={index}>{item.title}</View>)
        })
      }
    </View>
  )
}

export default BlogData;
