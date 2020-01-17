import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

import './indexPage.less';
class BannerView extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    state = {
        data: ['index_banner', 'index_banner', 'index_banner'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['index_banner', 'index_banner', 'index_banner'],
            });
        }, 100);
    }
    render() {
        return (
            <div className = "BannerView">
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={ require(`./../../image/${val}.png`)}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            </div>
        );
    }
}

class ContentMessage extends React.PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "ContentMessage">
                <HealthMay imgName = "result_bad" Message = "每日一测" />
                <HealthMay imgName = "result_good" Message = "每日食谱" />
            </div>
        )
    }
}
class HealthMay extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "HealthMay">
                <img src = {require(`./../../image/${this.props.imgName }.png`)} />
                <span>{ this.props.Message }</span>
            </div>
        )
    }
}
class ArticleWay extends React.PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        const conList = [
            {title: "八大零食安全隐患，你中了几个", imgName: "cont", Message: "即使很多标榜“安全”的零食也存在很大的安全隐患", number: 999},
            {title: "八大零食安全隐患，你中了几个", imgName: "cont", Message: "即使很多标榜“安全”的零食也存在很大的安全隐患", number: 9988},
            {title: "八大零食安全隐患，你中了几个", imgName: "cont", Message: "即使很多标榜“安全”的零食也存在很大的安全隐患", number: 9921},
            {title: "八大零食安全隐患，你中了几个", imgName: "cont", Message: "即使很多标榜“安全”的零食也存在很大的安全隐患", number: 9},
            {title: "八大零食安全隐患，你中了几个", imgName: "cont", Message: "即使很多标榜“安全”的零食也存在很大的安全隐患", number: 2365},
        ]
        return (
            <div className = "ArticleWay">
                {
                    conList.map(item => <ArticleOne Article = {item} />)
                }
            </div>
        )
    }
}
class ArticleOne extends React.PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "ArticleOne">
                <p>{ this.props.Article.title }</p>
                <div className = "con">
                    <img src = {require(`./../../image/${this.props.Article.imgName}.png`)} />
                    <div className = "right">
                    <span className = "message">{this.props.Article.Message}</span>
                    <span className = "num"><i>{this.props.Article.number}</i>次阅读</span>
                    </div>
                </div>
            </div>
        )
    }
}
export { BannerView, ContentMessage, ArticleWay }