import React from 'react';
import Header from '../component/Header';
import Nav from './../component/Nav';
import './Info.css';

const Info = () => {
  return (
    <div className="container">
      <Header />
      <Nav />
      <h1>독립 출판사란?</h1>
      <p>
        독립 출판사(인디 출판사)는 대형 출판사와 달리 독립적으로 운영되는 출판사입니다. 이들은 대규모 자본이나 상업적 목표보다는 창작자의 개성과 자율성을 중시하며 다양한 형태와 규모로 존재합니다. 독립 출판사는 주로 다음과 같은 특징과 장점을 가지고 있습니다.
      </p>
      <br></br>

      <h2>독립 출판사의 주요 특징</h2>
      <br></br>
      <h3>1. 자율성과 창의성</h3>
      <p>
        독립 출판사는 출판 과정 전반에서 창작자와 출판사의 자율성이 보장됩니다. 이는 더 독창적이고 실험적인 작품을 출간할 수 있게 합니다.
      </p>

      <h3>2. 규모와 범위</h3>
      <p>
        대형 출판사와 비교했을 때 규모는 작지만, 특정 장르나 분야에 특화된 경우가 많습니다. 이는 특정 독자층을 타겟으로 하는 맞춤형 출판이 가능하게 합니다.
      </p>

      <h3>3. 출판 과정의 투명성</h3>
      <p>
        독립 출판사는 창작자와의 직접적인 소통을 통해 출판 과정의 투명성을 높일 수 있습니다. 이는 창작자의 요구와 피드백을 보다 신속하게 반영할 수 있음을 의미합니다.
      </p>

      <h3>4. 다양한 주제와 접근 방식</h3>
      <p>
        주류 출판사에서 다루기 힘든 주제나 형식을 자유롭게 출판할 수 있어 독창적이고 다양한 콘텐츠를 제공합니다.
      </p>

      <h2>독립 출판사의 장점</h2>
      <h3>1. 창작자의 통제력 강화</h3>
      <p>
        독립 출판사는 창작자가 자신의 작품에 대한 통제력을 더 많이 가질 수 있게 해줍니다. 이는 작품의 방향성과 최종 결과물에 대한 결정권을 창작자에게 줍니다.
      </p>

      <h3>2. 빠른 출판 속도</h3>
      <p>
        큰 조직 구조가 없는 만큼 독립 출판사는 출판 결정을 빠르게 내리고 신속하게 진행할 수 있습니다. 이는 최신 트렌드나 시의적절한 주제를 다루는 데 유리합니다.
      </p>

      <h3>3. 개성 있는 출판물</h3>
      <p>
        대형 출판사에서 나오기 힘든 독특하고 실험적인 작품들이 독립 출판사를 통해 출간됩니다. 이는 독자들에게 신선하고 다양한 읽을거리를 제공합니다.
      </p>

      <h3>4. 직접 판매 및 마케팅</h3>
      <p>
        독립 출판사는 창작자가 직접 판매와 마케팅에 참여할 수 있는 기회를 제공합니다. 이는 창작자가 독자와 더 가까이 소통하고, 작품의 가치를 직접 전달할 수 있음을 의미합니다.
      </p>

      <h2>추천하는 독립출판사 사이트</h2>
      <div className="list">
        <p>
          &nbsp;
          <a href="https://byeolcheck.kr/" target="_blank" rel="noopener noreferrer">별책부록</a>
          &nbsp;
          <a href="https://www.your-mind.com/" target="_blank" rel="noopener noreferrer">YOUR-MIND</a>
          &nbsp;
          <a href="https://smartstore.naver.com/justorage" target="_blank" rel="noopener noreferrer">스토리지북앤필름</a>
          &nbsp;
          <a href="https://smartstore.naver.com/dasibookshop" target="_blank" rel="noopener noreferrer">다시서점</a>
          &nbsp;
          <a href="https://www.onemorebag.kr/" target="_blank" rel="noopener noreferrer">원모어백</a>
        </p>
      </div>
    </div>
  );
};

export default Info;
