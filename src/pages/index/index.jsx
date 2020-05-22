import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Child from './child';

function Index(props){
  const [userName, setUserName] = useState('jstest');
  const [blogTitle, setBlogTitle  ] = useState('');
  const [introduce, setIntruduce  ] = useState('');

  //在useEffect中接受来自blog的路径的信息
  useEffect(() => {
    setBlogTitle(this.$router.params.blogTitle);
    setIntruduce(this.$router.params.introduce);
  }, []) //空数组，表示只有在页面进来的时候执行一次

  return (
    <View>
      <Text>{userName}</Text>
      <Child parentUserName={userName}></Child>
      <View>{blogTitle}</View>
      <View>{introduce}</View>
    </View>
  )
}

export default Index;
