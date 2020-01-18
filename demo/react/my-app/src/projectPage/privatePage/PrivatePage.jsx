import React from 'react';
import { PrivateDiary } from './PrivateView';
class PrivatePage extends React.PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <PrivateDiary />
            </div>
        )
    }
}
export default PrivatePage