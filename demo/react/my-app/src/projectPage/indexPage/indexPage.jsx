import React from 'react';

import { BannerView, ContentMessage, ArticleWay } from './bannerView';
class IndexPage extends React.PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <BannerView />
                <ContentMessage />
                <ArticleWay />
            </div>
        )
    }
}

export default IndexPage 