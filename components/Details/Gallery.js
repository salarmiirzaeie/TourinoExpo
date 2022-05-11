import React from 'react';
import ImageView from 'react-native-image-view';
export const Gallery=({modalVisible,close})=>{
     const vs=modalVisible
   
const images = [

    {
        source: {
            uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
        },
        title: 'Paris',
        width: 806,
        height: 720,
    },
    {
      source: {
          uri: "https://cdn.yjc.ir/files/fa/news/1397/7/22/8796864_279.jpg",
      },
      title: 'Paris',
      width: 806,
      height: 720,
  },
];
return(
<ImageView
    images={images}
    animationType="fade"
    imageIndex={0}
    isVisible={vs}
    
     onClose={()=>{close()}}
   
/>
)
}