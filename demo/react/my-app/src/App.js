import React from 'react';
import logo from './logo.svg';
import { TabBar } from 'antd-mobile';
import './App.css';
import IndexPage from './projectPage/indexPage/indexPage';
import FoodIndexPage from './projectPage/foodMay/indexPage';
import PrivatePage from './projectPage/privatePage/PrivatePage';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'greenTab',
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
      </div>
    );
  }

  render() {
    let indexOutStyle = {
      width: '22px',
      height: '22px',
      backgroundImage: `url(${require('./image/icon/index_out.png')})`,
      backgroundPosition: 'center center',
      backgroundSize: '21px 21px',
      backgroundRepeat: 'no-repeat'
    }
    let indexOnStyle = {
      width: '22px',
      height: '22px',
      backgroundImage: `url(${require('./image/icon/index_on.png')})`,
      backgroundPosition: 'center center',
      backgroundSize: '21px 21px',
      backgroundRepeat: 'no-repeat'
    }
    let foodOutStyle = {
      width: '22px',
      height: '22px',
      backgroundImage: `url(${require('./image/icon/food_out.png')})`,
      backgroundPosition: 'center center',
      backgroundSize: '21px 21px',
      backgroundRepeat: 'no-repeat'
    }
    let foodOnStyle = {
      width: '22px',
      height: '22px',
      backgroundImage: `url(${require('./image/icon/food_on.png')})`,
      backgroundPosition: 'center center',
      backgroundSize: '21px 21px',
      backgroundRepeat: 'no-repeat'
    }
    let privateOutStyle = {
      width: '22px',
      height: '22px',
      backgroundImage: `url(${require('./image/icon/private_out.png')})`,
      backgroundPosition: 'center center',
      backgroundSize: '21px 21px',
      backgroundRepeat: 'no-repeat'
    }
    let privateOnStyle = {
      width: '22px',
      height: '22px',
      backgroundImage: `url(${require('./image/icon/private_on.png')})`,
      backgroundPosition: 'center center',
      backgroundSize: '21px 21px',
      backgroundRepeat: 'no-repeat'
    }
    let MineOutStyle = {
      width: '22px',
      height: '22px',
      backgroundImage: `url(${require('./image/icon/mine_out.png')})`,
      backgroundPosition: 'center center',
      backgroundSize: '21px 21px',
      backgroundRepeat: 'no-repeat'
    }
    let MineOnStyle = {
      width: '22px',
      height: '22px',
      backgroundImage: `url(${require('./image/icon/mine_on.png')})`,
      backgroundPosition: 'center center',
      backgroundSize: '21px 21px',
      backgroundRepeat: 'no-repeat'
    }
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#43bf92"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={ indexOutStyle }
            />
            }
            selectedIcon={<div style={ indexOnStyle }
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <IndexPage />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={ foodOutStyle }
              />
            }
            selectedIcon={
              <div style={ foodOnStyle }
              />
            }
            title="食疗坊"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <FoodIndexPage />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={ privateOutStyle }
              />
            }
            selectedIcon={
              <div style={ privateOnStyle }
              />
            }
            title="私人定制"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <PrivatePage />
          </TabBar.Item>
          <TabBar.Item
            icon={ <div style = { MineOutStyle }></div> }
            selectedIcon={ <div style = { MineOnStyle }></div>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
export default App;
