const highlights = [
  { title: '반응형 UX', desc: '데스크톱부터 모바일까지 자연스럽게 이어지는 유연한 인터페이스.' },
  { title: '브랜드 스토리', desc: 'CHEE가 풀고 싶은 문제와 가치를 한눈에 확인하세요.' },
  { title: '빠른 접근', desc: 'CTA 버튼으로 바로 문의하거나, 소개 자료를 내려받을 수 있습니다.' },
];

const stats = [
  { label: '프로젝트 준비율', value: '82%', pill: '현재 진행' },
  { label: '파트너 네트워크', value: '24+', pill: '함께하는 팀' },
  { label: '사용자 관심도', value: '1.2K', pill: '사전 알림' },
];

const roadmap = [
  { period: '지금', title: '브랜드 톤 확정', detail: '웹 가이드와 색상, 서체 시스템을 정리하고 있습니다.' },
  { period: '2월', title: '알파 공개', detail: '피드백 기반으로 메인 기능을 검증하고 개선합니다.' },
  { period: 'Q2', title: '정식 런칭', detail: '안정화된 경험과 함께 커뮤니티 채널을 열 예정입니다.' },
];

const Pill = ({ children }) => <div className="pill">{children}</div>;

const StatCard = ({ pill, value, label }) => (
  <div className="card stat-card">
    <Pill>{pill}</Pill>
    <div className="stat">{value}</div>
    <div className="muted">{label}</div>
  </div>
);

const HighlightCard = ({ title, desc }) => (
  <article className="card">
    <Pill>Design</Pill>
    <h3>{title}</h3>
    <p className="muted">{desc}</p>
  </article>
);

const RoadmapItem = ({ period, title, detail }) => (
  <div className="timeline-item">
    <Pill>{period}</Pill>
    <div className="timeline-head">
      <h3>{title}</h3>
      <span className="arrow">→</span>
    </div>
    <p className="muted">{detail}</p>
  </div>
);

export default function App() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <main>
        <div className="wrap">
          <header>
            <div>
              <div className="badge">CHEE · 새로운 시작</div>
              <h1>당신의 하루를 더 선명하게 만드는 메인 페이지</h1>
              <p className="lede">
                직관적인 정보, 가볍게 눌러보는 CTA, 그리고 브랜드 스토리가 담긴 한 화면.
                CHEE의 방향성을 React로 재구성했습니다.
              </p>
              <div className="cta">
                <button className="btn primary">바로 보기</button>
                <button className="btn">소개 자료 받기</button>
              </div>
            </div>
            <div className="summary-card">
              <Pill>요약</Pill>
              <p className="muted">
                새로운 CHEE 홈은 현대적인 톤과 부드러운 모션에 집중했습니다.
                한눈에 핵심을 파악하고 다음 행동을 선택하도록 설계했습니다.
              </p>
              <div className="grid small-grid">
                {stats.map((item) => (
                  <StatCard key={item.label} {...item} />
                ))}
              </div>
            </div>
          </header>

          <section className="section">
            <h2>핵심 포인트</h2>
            <p className="muted">짧은 텍스트와 명확한 대비로 브랜드 메시지를 빠르게 전달합니다.</p>
            <div className="grid">
              {highlights.map((item) => (
                <HighlightCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section className="section">
            <h2>앞으로의 로드맵</h2>
            <p className="muted">CHEE가 준비 중인 단계들을 한눈에 볼 수 있습니다.</p>
            <div className="timeline">
              {roadmap.map((item) => (
                <RoadmapItem key={item.title} {...item} />
              ))}
            </div>
          </section>

          <div className="footer">
            © {new Date().getFullYear()} CHEE. 새로운 경험을 준비하는 모든 순간을 기록합니다.
          </div>
        </div>
      </main>
    </>
  );
}
