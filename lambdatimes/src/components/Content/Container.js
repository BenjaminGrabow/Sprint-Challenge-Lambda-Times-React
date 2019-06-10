import React from 'react';
import Carousel from "../Carousel/Carousel";
import Tabs from "./Tabs";
import Cards from "./Cards";

const Container = (props) => {
        return (
                <div>
                        <Tabs tabs={props.theTabs}
                                selectedTab={props.theSelectedTab} />
                        <Carousel />
                        <Cards cards={props.theCards} />
                </div>
        )
}

export default Container;