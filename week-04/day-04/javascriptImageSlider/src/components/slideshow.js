import React from 'react';

class SlideShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            imgs:[
                'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4114434287,3400731021&fm=15&gp=0.jp',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3341376459,2998142674&fm=26&gp=0.jpg',
                'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4114434287,3400731021&fm=15&gp=0.jp',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3341376459,2998142674&fm=26&gp=0.jpg',
               ],   // 图片数组
          showIndex: 0, //显示第几个图片
          //timer: null,  // 定时器
          show: false   // 前后按钮显示
        }
    }

    render(){
        return(
            <div>
                <li>
                    <img scr={this.state.imgs[0]}></img>
                </li>
            </div>
        )
    }
}

export default SlideShow