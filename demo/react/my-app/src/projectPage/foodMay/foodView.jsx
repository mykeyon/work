import React, { useEffect } from 'react';
import { Tabs, WhiteSpace, Icon } from 'antd-mobile';

import './food.less';
function BannerView() {
    return (
        <div className="FoodBannerView">
            <div className="BannerViewOne">
                <img src={require('./../../image/icon/food1.png')} />
                <span>美容养颜</span>
            </div>
            <div className="BannerViewOne">
                <img src={require('./../../image/icon/food2.png')} />
                <span>保健调养</span>
            </div>
            <div className="BannerViewOne">
                <img src={require('./../../image/icon/food3.png')} />
                <span>补养</span>
            </div>
            <div className="BannerViewOne">
                <img src={require('./../../image/icon/food4.png')} />
                <span>减肥</span>
            </div>
            <div className="BannerViewOne">
                <img src={require('./../../image/icon/food5.png')} />
                <span>母婴</span>
            </div>
            <div className="BannerViewOne">
                <img src={require('./../../image/icon/food6.png')} />
                <span>气节</span>
            </div>
            <div className="BannerViewOne">
                <img src={require('./../../image/icon/food7.png')} />
                <span>常见食疗</span>
            </div>
            <div className="BannerViewOne">
                <img src={require('./../../image/icon/food8.png')} />
                <span>人群功效</span>
            </div>
            <div className="BannerViewOne">
                <img src={require('./../../image/icon/food9.png')} />
                <span>维生素</span>
            </div>
            <div className="BannerViewOne">
                <img src={require('./../../image/icon/food10.png')} />
                <span>其它</span>
            </div>
        </div>
    )
}
class FoodTabBar extends React.PureComponent {
    renderContent = tab =>
        (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '150px',
                    backgroundColor: '#fff'
                }}
            >
                {
                    '排毒' === tab.title ?

                        <div>
                            {
                                [1, 2, 3, 4, 5].map(item =>
                                    (<div className="foodConMessage" key="item">
                                        <img src={require('./../../image/shop.png')} />
                                        <div className="right">
                                            <p>红豆薏米粉</p>
                                            <span className="con">红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉红豆薏米粉</span>
                                            <div className="more">
                                                <span>￥245</span>
                                                <span>28398人付款</span>
                                                <span>
                                                    <Icon type="ellipsis" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>)

                                )
                            }
                        </div>
                        :
                        <p>Content of {tab.title}</p>
                }

            </div>
        )

    render() {
        const tabs = [
            { title: '排毒' },
            { title: '抗皱' },
            { title: '祛斑' },
            { title: '美白' },
            { title: '护发' },
            { title: '润肤' },
            { title: '祛痘' },
        ];
        return (
            <div className="FoodTabBar">
                <WhiteSpace />
                <Tabs
                    tabs={tabs}
                    renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}
                >
                    {this.renderContent}
                </Tabs>
                <WhiteSpace />
            </div>
        );

    }

}
export { BannerView, FoodTabBar }