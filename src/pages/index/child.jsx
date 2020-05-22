import { View, Text } from '@tarojs/components';
// import react from ''

function Child(props){
  return(
    <View>
      <Text>child  props:{props.parentUserName}</Text>
    </View>
  )
}

export default Child;