// Person C: build the Team section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #team so your CSS only affects your section.
section("team", () => `
  <style>
    #team .hw-team {
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      padding: 44px 24px 40px;
      background:
        radial-gradient(circle at 0% 0%, rgba(255, 122, 24, .18), transparent 45%),
        linear-gradient(180deg, #140a24 0%, #0f0820 100%);
      border: 1px solid #3b1d5c;
      box-shadow: 0 20px 60px rgba(0, 0, 0, .45);
    }
    #team .web {
      position: absolute;
      top: 0;
      right: 0;
      width: 130px;
      height: 130px;
      opacity: .35;
    }
    #team .eyebrow {
      margin: 0 0 6px;
      text-align: center;
      font-size: .8rem;
      letter-spacing: .2em;
      text-transform: uppercase;
      color: #ff9a3c;
    }
    #team h2 {
      margin: 0;
      text-align: center;
      font-size: clamp(1.8rem, 5vw, 2.6rem);
      line-height: 1.1;
      color: #fff;
      text-shadow: 0 0 18px ${SITE.color};
    }
    #team .intro {
      max-width: 520px;
      margin: 10px auto 0;
      text-align: center;
      color: #c9b6e4;
    }
    #team .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 16px;
      margin-top: 30px;
    }
    #team .card {
      position: relative;
      padding: 22px 18px 20px;
      border-radius: 16px;
      text-align: center;
      background: #1c0f33;
      border: 1px solid #4a2774;
      transition: transform .15s ease, border-color .15s ease, box-shadow .15s ease;
    }
    #team .card:hover {
      transform: translateY(-4px) rotate(-1deg);
      border-color: ${SITE.color};
      box-shadow: 0 0 24px rgba(255, 122, 24, .25);
    }
    #team .avatar {
      display: grid;
      place-items: center;
      width: 76px;
      height: 76px;
      margin: 0 auto 12px;
      border-radius: 50%;
      font-size: 2.4rem;
      background: radial-gradient(circle at 50% 40%, #ff9a3c, #c2410c);
      box-shadow: 0 0 0 4px #24113d, 0 0 0 6px ${SITE.color};
    }
    #team .name { margin: 0; font-size: 1.1rem; font-weight: 800; color: #fff; }
    #team .role { margin: 2px 0 0; font-size: .85rem; color: ${SITE.color}; }
    #team .costume {
      margin: 12px 0 0;
      padding: 8px 10px;
      border-radius: 10px;
      font-size: .85rem;
      background: #24113d;
      color: #eadcff;
    }
    #team .costume b { color: #ff9a3c; font-weight: 700; }
    #team .footnote { margin: 24px 0 0; text-align: center; font-size: .85rem; color: #9c86bd; }
    @media (max-width: 520px) {
      #team .hw-team { padding: 36px 16px 32px; }
      #team .web { width: 90px; height: 90px; }
    }
  </style>

  <div class="hw-team">
    <svg class="web" viewBox="0 0 100 100" aria-hidden="true" fill="none" stroke="#c9b6e4" stroke-width="1">
      <path d="M100 0 L0 100 M100 0 L40 100 M100 0 L0 40 M100 0 L70 100 M100 0 L0 70"/>
      <path d="M78 0 Q82 18 100 22 M58 0 Q66 34 100 42 M36 0 Q50 50 100 64 M14 0 Q34 66 100 86"/>
    </svg>

    <p class="eyebrow">The coven</p>
    <h2>Meet the team behind ${SITE.name}</h2>
    <p class="intro">Four people who were tired of panic-buying costumes on October 30th. Here's what each of us built, and what we're dressing up as using only our own closets.</p>

    <div class="grid">
      <div class="card">
        <div class="avatar" aria-hidden="true">🎃</div>
        <p class="name">Person A</p>
        <p class="role">Hero section</p>
        <p class="costume">Costume: <b>lumberjack</b><br>flannel + boots + beanie</p>
      </div>
      <div class="card">
        <div class="avatar" aria-hidden="true">🦇</div>
        <p class="name">Person B</p>
        <p class="role">Features section</p>
        <p class="costume">Costume: <b>secret agent</b><br>black suit + sunglasses</p>
      </div>
      <div class="card">
        <div class="avatar" aria-hidden="true">👻</div>
        <p class="name">Person C</p>
        <p class="role">Team section</p>
        <p class="costume">Costume: <b>classic ghost</b><br>one white sheet, two holes</p>
      </div>
      <div class="card">
        <div class="avatar" aria-hidden="true">🕷️</div>
        <p class="name">Person D</p>
        <p class="role">Sign-up section</p>
        <p class="costume">Costume: <b>spider queen</b><br>black dress + extra gloves</p>
      </div>
    </div>

    <p class="footnote">Total spent on costumes this year: $0.</p>
  </div>
`);
