//相当于这些是静态的文件
export function dajiao() {
  console.log('小卖铺老板');
}

export function liuying() {
  console.log('我是卖花的');
}

//如何在别的文件中进行引用呢？
// import { dajiao, liuying } from '../tool';
// useEffect(() => {
//   dajiao();
//   liuying();
// }, [])