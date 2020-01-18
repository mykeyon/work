import React from 'react';

import './private.less';

class PrivateDiary extends React.PureComponent{
    constructor(props){
        super(props)
    }
    state = {
        diaryState: true,
        nurseState: false
    }
    render(){
        return (
            <div className = "PrivateDiary">
               <div className = "privateTab">

                </div>  
            </div>
        )
    }
}

export { PrivateDiary }