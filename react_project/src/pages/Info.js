import React from 'react';
import Header from '../component/Header';
import Nav from './../component/Nav';
import './Info.css';

const Info = () => {
  return (
    <div className="info">
      <Header />
      <Nav />
      <div className="main_content">
        <div className="about">
          <h1>독립 출판사란?</h1>
          <p>
            독립 출판사(인디 출판사)는 대형 출판사와 달리 독립적으로 운영되는 출판사입니다. 이들은 대규모 자본이나 상업적 목표보다는 창작자의 개성과 자율성을 중시하며 다양한 형태와 규모로 존재합니다. 독립 출판사는 주로 다음과 같은 특징과 장점을 가지고 있습니다.
          </p>
          </div>
          <br />
          <div className='charac'>
            <h2>독립 출판사의 주요 특징</h2>
            <h3> 자율성과 창의성</h3>
            <p>
              독립 출판사는 출판 과정 전반에서 창작자와 출판사의 자율성이 보장됩니다. 이는 더 독창적이고 실험적인 작품을 출간할 수 있게 합니다.
            </p>

            <h3> 규모와 범위</h3>
            <p>
              대형 출판사와 비교했을 때 규모는 작지만, 특정 장르나 분야에 특화된 경우가 많습니다. 이는 특정 독자층을 타겟으로 하는 맞춤형 출판이 가능하게 합니다.
            </p>

            <h3> 출판 과정의 투명성</h3>
            <p>
              독립 출판사는 창작자와의 직접적인 소통을 통해 출판 과정의 투명성을 높일 수 있습니다. 이는 창작자의 요구와 피드백을 보다 신속하게 반영할 수 있음을 의미합니다.
            </p>

            <h3> 다양한 주제와 접근 방식</h3>
            <p>
              주류 출판사에서 다루기 힘든 주제나 형식을 자유롭게 출판할 수 있어 독창적이고 다양한 콘텐츠를 제공합니다.
            </p>
        </ div>

        <br />
        <div className='pros'>
          <h2>독립 출판사의 장점</h2>
          <h3> 창작자의 통제력 강화</h3>
          <p>
            독립 출판사는 창작자가 자신의 작품에 대한 통제력을 더 많이 가질 수 있게 해줍니다. 이는 작품의 방향성과 최종 결과물에 대한 결정권을 창작자에게 줍니다.
          </p>

          <h3> 빠른 출판 속도</h3>
          <p>
            큰 조직 구조가 없는 만큼 독립 출판사는 출판 결정을 빠르게 내리고 신속하게 진행할 수 있습니다. 이는 최신 트렌드나 시의적절한 주제를 다루는 데 유리합니다.
          </p>

          <h3> 개성 있는 출판물</h3>
          <p>
            대형 출판사에서 나오기 힘든 독특하고 실험적인 작품들이 독립 출판사를 통해 출간됩니다. 이는 독자들에게 신선하고 다양한 읽을거리를 제공합니다.
          </p>

          <h3> 직접 판매 및 마케팅</h3>
          <p>
            독립 출판사는 창작자가 직접 판매와 마케팅에 참여할 수 있는 기회를 제공합니다. 이는 창작자가 독자와 더 가까이 소통하고, 작품의 가치를 직접 전달할 수 있음을 의미합니다.
          </p>
        </div>

      <br />
      <h2 className="get">추천하는 독립출판사 사이트</h2>
      <div className="list">
        <p className="store_name">
          &nbsp;
          <a href="https://byeolcheck.kr/" target="_blank"><img src={'../img/byeolcheck.PNG'} className="byeol" /></a>
          <a href="https://byeolcheck.kr/" target="_blank" rel="noopener noreferrer">별책부록</a>
          <p className="explain">은 서울 용산에 위치한 서점입니다. 국내외 독립 출판물과 디자인·예술 관련 단행본, 소규모 브랜드의 디자인 제품을 판매합니다. 2014년 마포구 동교동에서 처음 오픈 했고, 2015년 현재 위치인 용산으로 이전하여 운영 중입니다</p>
          <br />
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <br />
          <a href="https://www.your-mind.com/" target="_blank"><img src={'../img/yourmind.PNG'} className="yourmind" /></a>
          <a href="https://www.your-mind.com/" target="_blank" rel="noopener noreferrer">유어마인드</a>
          <p className='explain'>는 2009년부터 작가 개인과 독립출판사에 의해 제작된 독립출판물과 아트북을 전문으로 판매하는 책방입니다. 2017년 서울 연희동으로 이전하여 작은 크기의 책방을 운영하고 있습니다. 동시에 자체 출판물을 제작하고 서울아트북페어 ‘언리미티드 에디션’을 매년 주최합니다</p>
          &nbsp;
          &nbsp;
          &nbsp;          
          &nbsp;
          &nbsp;
          &nbsp;
          <br />
          <br />
          <a href="https://smartstore.naver.com/justorage" target="_blank"><img src={'../img/andfilm.PNG'} className="andfilm" /></a>
          <a href="https://smartstore.naver.com/justorage" target="_blank" rel="noopener noreferrer" id='andfilm'>스토리지북앤필름</a>
          <p className='explain'>은 2008년 작은 가게로 시작해 지금까지 작은 가게로 운영되고 있는 책방입니다. 해방촌점과 후암점 그리고 로터리점 세 곳에서 책방을 운영하고 있으며, 독립출판물을 기반으로 소개하고 만들며 판매를 하고 있습니다.</p>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <br />
          <br />
          <a href="https://smartstore.naver.com/dasibookshop" target="_blank"><img src={'../img/dasi.PNG'} className="dasi" /></a>
          <a href="https://smartstore.naver.com/dasibookshop" target="_blank" rel="noopener noreferrer">다시서점</a>
          <p className='explain'>은 '서점이 사라지는 시대에 다시 서점을 하자.'를 모토로 운영되고 있으며 시가 많다는 다시(多詩), Again의 다시로 읽히길 소망하고 있습니다. 노찾사 출신 가수 윤선애 님의 노래 '다시 만날 날이 있겠죠'의 첫 단어에서 따온 이름입니다.</p>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;          
          <br />
          <br />
          {/* <a href="https://www.onemorebag.kr" target="_blank"><img src={'../img/onemorebag.PNG'} className="onemore" /></a>
          <a href="https://www.onemorebag.kr/" target="_blank" rel="noopener noreferrer">원모어백</a>
          <p className='explain'>은 국내외 여러 브랜드의 가방과 제품 그리고 작가들의 굿즈를 소개하고 판매하는 잡화점입니다.
          온라인 스토어와 오프라인 스토어 한 곳을 운영하고 있습니다.</p> */}
        </p>
      </div>
      </div>
    </div>
  );
};

export default Info;