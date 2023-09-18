import React from 'react';
// import { HeaderLink , HeaderFlex ,HeaderGnbFlex , HeaderGnbLi, HeaderBtn } from './HeaderStyle';

import * as Styles from './HeaderStyle';
// 이미지 임포트
import logo from '../../assets/images/header_logo.png'

function Header() {
    return (
        <>
            <header className='header'>
                <div className="header_inner">
                    <Styles.MainFlex className="header">
                        <Styles.Logo className="header-new-logo">
                            <Styles.Link href="#!">H FASHION</Styles.Link>
                        </Styles.Logo>
                        <Styles.Flex className="header-logo">
                            <a href="#!">
                                <img src={logo} alt="TOMMY HILFIGER" />
                            </a>
                        </Styles.Flex>
                        <nav className="header-util">
                            <Styles.Btn type="button" className="btn-search" id="btnSearchLayer"><span>검색열기</span></Styles.Btn>
                            <Styles.SpanNoborder><a href="#!">로그인</a></Styles.SpanNoborder>
                            <Styles.Span><a href="#!">회원가입</a></Styles.Span>
                            <Styles.Span><a href="#!">마이페이지</a></Styles.Span>
                            <Styles.Span><a href="#!">장바구니</a></Styles.Span>
                        </nav>
                    </Styles.MainFlex>
                    <nav className="header-gnb">
                        <div>
                            <button type="button"><Styles.SpanCategory>카테고리</Styles.SpanCategory></button>
                            <button type="button"><Styles.SpanCategory>브랜드</Styles.SpanCategory></button>
                        </div>
                        <Styles.GnbFlex>
                            <Styles.GnbLi className="on">
                                <a href="#!">MAIN</a>
                            </Styles.GnbLi>
                            <Styles.GnbLi className="">
                                <a href="!">
                                    MEN</a>
                            </Styles.GnbLi>
                            <Styles.GnbLi className="">
                                <a href="#!">
                                    WOMEN</a>
                            </Styles.GnbLi>
                            <Styles.GnbLi className="">
                                <a href="#!">
                                    TOMMY JEANS</a>
                            </Styles.GnbLi>
                            <Styles.GnbLi className="">
                                <a href="#!">
                                    KIDS</a>
                            </Styles.GnbLi>
                            <Styles.GnbLi className="">
                                <a href="#!">
                                    SHOES</a>
                            </Styles.GnbLi>
                            <Styles.GnbLi className="">
                                <a href="#!">
                                    GOLF</a>
                            </Styles.GnbLi>
                        </Styles.GnbFlex>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;

