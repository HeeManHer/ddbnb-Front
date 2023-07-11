function Footer() {
    return (
        <footer className="back-color ">
            <footer className="main-width dis-flex align-center">
                <img src="/img/logo-white.png" alt="댕댕비엔비" height="100%" />
                <div className="footer dis-flex ">
                    <div className="navbar dis-flex align-center">
                        <span>약관</span>
                        <div className="topbar-divider"></div>
                        <span>개인정보 보호</span>
                        <div className="topbar-divider"></div>
                        <span>사이트맵</span>
                    </div>
                    <div className="footerInfo dis-flex align-center">
                        <div className="info dis-flex align-center">
                            <span>사업자등록번호 : 010-55-00000</span>
                            <span>주식회사 댕댕비엔비 대표이사 : 이주동</span>
                            <span>E-Mail : daengbnb@gmail.com</span>
                            <span>개인정보 책임자 : 최명건</span>
                        </div>
                        <div className="copyright">© 댕댕비엔비 All Rights Reserved 2023.  </div>
                    </div>
                </div>
            </footer>
        </footer>
    )
}

export default Footer;