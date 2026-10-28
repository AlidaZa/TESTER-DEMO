// Person A: build the Hero section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #hero so your CSS only affects your section.
section("hero", () => `
  <style>
    #hero .hw-hero {
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      padding: 56px 28px 48px;
      text-align: center;
      background:
        radial-gradient(circle at 50% 120%, rgba(255, 122, 24, .35), transparent 60%),
        linear-gradient(180deg, #1a0b2e 0%, #120822 60%, #0b0614 100%);
      border: 1px solid #3b1d5c;
      box-shadow: 0 20px 60px rgba(0, 0, 0, .45);
    }
    #hero .moon {
      position: absolute;
      top: 22px;
      right: 28px;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: #fff4d6;
      box-shadow: 0 0 40px 10px rgba(255, 236, 180, .35);
    }
    #hero .moon::after {
      content: "";
      position: absolute;
      top: -6px;
      left: 18px;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: #1a0b2e;
    }
    #hero .bats { position: absolute; top: 34px; left: 24px; width: 120px; opacity: .7; }
    #hero .eyebrow {
      position: relative;
      margin: 0 0 8px;
      font-size: .8rem;
      letter-spacing: .2em;
      text-transform: uppercase;
      color: #ff9a3c;
    }
    #hero h1 {
      position: relative;
      margin: 0;
      font-size: clamp(2.4rem, 7vw, 4.2rem);
      line-height: 1.05;
      color: #fff;
      text-shadow: 0 0 24px ${SITE.color}, 0 4px 0 #000;
    }
    #hero .tagline {
      position: relative;
      max-width: 560px;
      margin: 14px auto 0;
      font-size: 1.2rem;
      color: #f3e8ff;
    }
    #hero .pitch {
      position: relative;
      max-width: 520px;
      margin: 10px auto 0;
      color: #c9b6e4;
    }
    #hero .closet {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin: 26px auto 0;
      max-width: 620px;
    }
    #hero .chip {
      padding: 6px 12px;
      border-radius: 999px;
      font-size: .9rem;
      background: #24113d;
      border: 1px solid #4a2774;
      color: #eadcff;
    }
    #hero .arrow { color: #ff9a3c; font-weight: 700; }
    #hero .result {
      padding: 6px 14px;
      border-radius: 999px;
      font-size: .9rem;
      font-weight: 700;
      background: #ff7a18;
      color: #1a0b2e;
    }
    #hero .cta {
      position: relative;
      display: inline-block;
      margin-top: 30px;
      padding: 16px 34px;
      border-radius: 14px;
      font-size: 1.15rem;
      font-weight: 800;
      text-decoration: none;
      color: #120822;
      background: ${SITE.color};
      box-shadow: 0 0 0 4px rgba(255, 122, 24, .35), 0 10px 30px rgba(0, 0, 0, .5);
      transition: transform .15s ease, box-shadow .15s ease;
    }
    #hero .cta:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 0 0 6px rgba(255, 122, 24, .5), 0 14px 34px rgba(0, 0, 0, .55); }
    #hero .fine { position: relative; margin: 12px 0 0; font-size: .85rem; color: #9c86bd; }
    @media (max-width: 520px) {
      #hero .hw-hero { padding: 64px 18px 40px; }
      #hero .moon { width: 52px; height: 52px; top: 16px; right: 16px; }
      #hero .moon::after { width: 52px; height: 52px; left: 13px; }
      #hero .bats { width: 90px; top: 20px; left: 14px; }
    }
  </style>

  <div class="hw-hero">
    <div class="moon" aria-hidden="true"></div>
    <svg class="bats" viewBox="0 0 120 40" aria-hidden="true" fill="#5a3a85">
      <path d="M10 20 Q16 10 22 18 Q26 12 30 20 Q26 18 22 24 Q16 18 10 20Z"/>
      <path d="M50 10 Q58 0 66 8 Q71 2 76 10 Q71 8 66 15 Q58 8 50 10Z"/>
      <path d="M86 28 Q92 20 98 26 Q102 21 106 28 Q102 26 98 31 Q92 26 86 28Z"/>
    </svg>

    <p class="eyebrow">Halloween costume finder</p>
    <h1>${SITE.name}</h1>
    <p class="tagline">${SITE.tagline}</p>
    <p class="pitch">Tell us what's already hanging in your closet. We'll find costumes you can pull together for next to nothing.</p>

    <div class="closet" aria-label="Example: clothes you own turn into costume ideas">
      <span class="chip">black hoodie</span>
      <span class="chip">flannel shirt</span>
      <span class="chip">white sheet</span>
      <span class="chip">sunglasses</span>
      <span class="arrow">&rarr;</span>
      <span class="result">5 costumes &middot; under $10</span>
    </div>

    <a class="cta" href="#features">Raid my closet</a>
    <p class="fine">No shopping spree required.</p>
  </div>
`);
