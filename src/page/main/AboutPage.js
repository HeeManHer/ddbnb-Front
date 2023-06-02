import style from './MainStyle.module.css';

function AboutPage() {
    return (
        <div className={style.container}>
        <div className={style.aboutLayout}>
            <div className={style.aboutTitle}>
                <img src="/img/aboutLogo.png" alt="댕댕비엔비"/>
            </div>
            <div className={style.aboutTitleLogo}>
                <div className={style.aboutLogo}>
                    <img src="/img/aboutTitle.png" alt="댕댕비엔비"/>
                </div>  
                    <div className={style.aboutContent}>
                        댕댕비앤비는 애견일들을 위한<br/>
                        펫시터 참여 중개형 플랫폼입니다.<br/>
                        <br/>
                        당신의 애견을 소중히 보호할 펫시터를 찾아보세요!
                    
                </div>
            </div>
        </div>
        <div className={style.aboutCardCollect}>
            <div className={style.aboutCard}>
                <div className={style.cardTitle}>
                    신원 확인
                    </div>
                <div className={style.cardContent}>
                    신원이 확인된 사람만<br/>
                    활동 가능합니다.
                </div>
            </div>

            <div className={style.aboutCard}>
                <div className={style.cardTitle}>
                    지역별 검색
                    </div>
                <div className={style.cardContent}>
                    지역별로 다양하게<br/>
                    찾을 수 있습니다.
                </div>
            </div>

            <div className={style.aboutCard}>
                <div className={style.cardTitle}>
                    원하는 조건
                    </div>
                <div className={style.cardContent}>
                    자신이 원하는 조건에<br/>
                    맞춰 찾아볼 수 있습니다.
                </div>
            </div>
        </div>
        
        <div className={style.aboutCardCollect}>
            <div className={style.aboutCard}>
                <div className={style.cardTitle}>
                    리뷰
                    </div>
                <div className={style.cardContent}>
                    리뷰 내용들로 상대의<br/>
                    정보들을 쉽게 파악을<br/>
                    할 수 있습니다.
                </div>
            </div>

            <div className={style.aboutCard}>
                <div className={style.cardTitle}>
                    맞춤 케어
                    </div>
                <div className={style.cardContent}>
                    원하는 케어 서비스를<br/>
                    작성해 펫시터에게<br/>
                    케어를 받을 수 있습니다.
                </div>
            </div>

            <div className={style.aboutCard}>
                <div className={style.cardTitle}>
                    선택 가능
                    </div>
                <div className={style.cardContent}>
                    견주와 펫시터가 서로<br/>
                    찾아 볼 수 있다는 장점이<br/>
                    있습니다.
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutPage;