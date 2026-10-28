// Person B: build the Features section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #features so your CSS only affects your section.
section("features", () => `
  <style>
    #features .hw-features {
      border-radius: 20px;
      padding: 40px 24px;
      background: linear-gradient(180deg, #120822 0%, #0f0a1c 100%);
      border: 1px solid #3b1d5c;
    }
    #features h2 {
      margin: 0;
      text-align: center;
      font-size: clamp(1.6rem, 4vw, 2.2rem);
      color: #fff;
    }
    #features h2 span { color: ${SITE.color}; }
    #features .sub {
      max-width: 540px;
      margin: 8px auto 0;
      text-align: center;
      color: #c9b6e4;
    }
    #features .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 16px;
      margin-top: 28px;
    }
    #features .card {
      position: relative;
      padding: 24px 20px 20px;
      border-radius: 16px;
      background: #1c0f30;
      border: 1px solid #3b1d5c;
      transition: transform .15s ease, border-color .15s ease;
    }
    #features .card:hover { transform: translateY(-4px); border-color: #ff7a18; }
    #features .num {
      display: inline-grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50% 50% 46% 46%;
      font-weight: 800;
      color: #1a0b2e;
      background: #ff7a18;
      box-shadow: inset 0 -4px 0 rgba(0, 0, 0, .2);
    }
    #features h3 { margin: 14px 0 6px; font-size: 1.15rem; color: #fff; }
    #features .card p { margin: 0; color: #c9b6e4; font-size: .95rem; }
    #features .example {
      max-width: 560px;
      margin: 28px auto 0;
      padding: 18px 20px;
      border-radius: 16px;
      background: #0b0614;
      border: 1px dashed #ff7a18;
    }
    #features .example .label {
      margin: 0 0 6px;
      font-size: .75rem;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: #ff9a3c;
    }
    #features .example .title {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
      flex-wrap: wrap;
    }
    #features .example b { font-size: 1.2rem; color: #fff; }
    #features .example .match { font-weight: 700; color: ${SITE.color}; }
    #features .bar { height: 8px; margin: 10px 0 12px; border-radius: 999px; background: #2a1645; overflow: hidden; }
    #features .bar i { display: block; width: 80%; height: 100%; background: linear-gradient(90deg, #ff7a18, ${SITE.color}); }
    #features .lists { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: .9rem; }
    #features .lists ul { margin: 4px 0 0; padding-left: 18px; color: #eadcff; }
    #features .have { color: #8be9a8; font-weight: 700; }
    #features .need { color: #ff9a3c; font-weight: 700; }
    @media (max-width: 520px) {
      #features .hw-features { padding: 32px 16px; }
      #features .lists { grid-template-columns: 1fr; }
    }
  </style>

  <div class="hw-features">
    <h2>How <span>${SITE.name}</span> saves your Halloween</h2>
    <p class="sub">The best costume is the one you mostly already own.</p>

    <div class="grid">
      <div class="card">
        <span class="num">1</span>
        <h3>Log your closet</h3>
        <p>Type or tap the clothes, shoes and props you already have: a black blazer, a flannel, an old prom dress, a cowboy hat.</p>
      </div>
      <div class="card">
        <span class="num">2</span>
        <h3>Get costume matches</h3>
        <p>We rank costume ideas by how much of each one you already own, so the cheapest, easiest looks show up first.</p>
      </div>
      <div class="card">
        <span class="num">3</span>
        <h3>Fill only the gaps</h3>
        <p>See exactly which pieces you're missing, with a price estimate and cheaper options like thrifting, DIY or borrowing.</p>
      </div>
    </div>

    <div class="example" aria-label="Example costume match">
      <p class="label">Example match</p>
      <div class="title">
        <b>Lumberjack</b>
        <span class="match">4 of 5 pieces &middot; ~$4</span>
      </div>
      <div class="bar"><i></i></div>
      <div class="lists">
        <div>
          <span class="have">You have</span>
          <ul>
            <li>Red flannel shirt</li>
            <li>Jeans</li>
            <li>Boots</li>
            <li>Beanie</li>
          </ul>
        </div>
        <div>
          <span class="need">You need</span>
          <ul>
            <li>Toy axe (dollar store, ~$4)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
`);
