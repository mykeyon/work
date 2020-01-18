import React, { useState } from 'react';
import { BannerView, FoodTabBar } from './foodView';

function FoodIndexPage(){

    return(
        <div>
            <BannerView />
            <FoodTabBar />
        </div>
    )
}
export default FoodIndexPage