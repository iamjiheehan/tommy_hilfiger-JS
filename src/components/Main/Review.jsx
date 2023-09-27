import React from 'react';

import * as Styles from './MainStyle';

import MenData from '../../data/Review/men.json'
import WomenData from '../../data/Review/women';
import KidsData from '../../data/Review/kids';
import JeansData from '../../data/Review/tommyJeans';
import ShoesData from '../../data/Review/shoes';

import useRandomData from '../../hooks/useRandomize';
import { useSelectMenuHandler } from '../../hooks/useSelectMenuHandler';

import ReviewLayout from './ReviewLayout';

function Review() {
    const { currentTab, selectMenuHandler } = useSelectMenuHandler(0);

    const tabContents = {
        0: <All />,
        1: <Men />,
        2: <Women />,
        3: <Jeans />,
        4: <Jeans />,
        4: <Kids />,
        5: <Shoes />,
    }

    return (
        <div>
            <section id="review">
                <Styles.Container>
                    <Styles.NewTitle className="title-wrap">
                        <h2 className="title">BEST REVIEW</h2>
                        <div className="right-box">
                            <a href="#!" className="btn-more-view type-dark-blue">
                                <span className="text">전체보기</span>
                                <i className="more-arr-dark-blue"></i>
                            </a>
                        </div>
                    </Styles.NewTitle>
                    <Styles.RankingTab>
                        <button type="button" className={currentTab === 0 ? 'on' : ''} onClick={() => selectMenuHandler(0)}><span>ALL</span></button>
                        <button type="button" className={currentTab === 1 ? 'on' : ''} onClick={() => selectMenuHandler(1)}><span>MEN</span></button>
                        <button type="button" className={currentTab === 2 ? 'on' : ''} onClick={() => selectMenuHandler(2)}><span>WOMEN</span></button>
                        <button type="button" className={currentTab === 3 ? 'on' : ''} onClick={() => selectMenuHandler(3)}><span>TOMMY JEANS</span></button>
                        <button type="button" className={currentTab === 4 ? 'on' : ''} onClick={() => selectMenuHandler(4)}><span>KIDS</span></button>
                        <button type="button" className={currentTab === 5 ? 'on' : ''} onClick={() => selectMenuHandler(5)}><span>SHOES</span></button>
                    </Styles.RankingTab>
                    <div className='slide-section'>
                        <div className='slide-container review'>
                            {tabContents[currentTab]}
                            <div className="slide-nav">
                                <button className="slide-nav-prev button-disabled">
                                    <span className="offscreen"></span>
                                </button>
                                <button className="slide-nav-next">
                                    <span className="offscreen"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Styles.Container>
            </section>
        </div>
    );
}

export default Review;

function All() {

    const allData = [...MenData, ...WomenData, ...KidsData, ...JeansData, ...ShoesData];
    const randomData = useRandomData(allData);

    return (
        <ReviewLayout items={randomData} />
    )
}

function Men() {
    const menData = [...MenData];
    return (
        <ReviewLayout items={menData} />
    )
}

function Women() {
    const womenData = [...WomenData];
    return (
        <ReviewLayout items={womenData} />
    )
}

function Jeans() {
    const jeansData = [...JeansData];
    return (
        <ReviewLayout items={jeansData} />
    )
}

function Shoes() {
    const shoesData = [...ShoesData];
    return (
        <ReviewLayout items={shoesData} />
    )
}

function Kids() {
    const kidsData = [...KidsData];
    return (
        <ReviewLayout items={kidsData} />
    )
}