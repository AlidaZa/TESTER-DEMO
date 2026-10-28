// Person D: build the Sign up section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #signup so your CSS only affects your section.
section("signup", () => `
  <style>
    #signup .hw-signup {
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      padding: 48px 24px 44px;
      text-align: center;
      background:
        radial-gradient(circle at 50% 0%, rgba(255, 122, 24, .3), transparent 55%),
        linear-gradient(180deg, #120822 0%, #1a0b2e 100%);
      border: 1px solid #3b1d5c;
      box-shadow: 0 20px 60px rgba(0, 0, 0, .45);
    }
    #signup .pumpkins {
      position: absolute;
      bottom: 10px;
      left: 16px;
      font-size: 1.8rem;
      opacity: .5;
      letter-spacing: 6px;
    }
    #signup .eyebrow {
      margin: 0 0 6px;
      font-size: .8rem;
      letter-spacing: .2em;
      text-transform: uppercase;
      color: #ff9a3c;
    }
    #signup h2 {
      margin: 0;
      font-size: clamp(1.8rem, 5vw, 2.6rem);
      line-height: 1.1;
      color: #fff;
      text-shadow: 0 0 18px ${SITE.color};
    }
    #signup .sub {
      max-width: 480px;
      margin: 10px auto 0;
      color: #c9b6e4;
    }
    #signup form {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      max-width: 520px;
      margin: 28px auto 0;
    }
    #signup label {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
    }
    #signup input[type="email"] {
      flex: 1 1 240px;
      min-width: 0;
      padding: 14px 16px;
      border-radius: 12px;
      font: inherit;
      color: #fff;
      background: #24113d;
      border: 2px solid #4a2774;
      outline: none;
      transition: border-color .15s ease, box-shadow .15s ease;
    }
    #signup input[type="email"]::placeholder { color: #8f78b3; }
    #signup input[type="email"]:focus {
      border-color: ${SITE.color};
      box-shadow: 0 0 0 4px rgba(255, 122, 24, .25);
    }
    #signup button {
      flex: 0 0 auto;
      padding: 14px 24px;
      border: 0;
      border-radius: 12px;
      font: inherit;
      font-weight: 800;
      cursor: pointer;
      color: #120822;
      background: ${SITE.color};
      box-shadow: 0 0 0 4px rgba(255, 122, 24, .35), 0 10px 26px rgba(0, 0, 0, .5);
      transition: transform .15s ease;
    }
    #signup button:hover { transform: translateY(-2px) scale(1.03); }
    #signup .thanks {
      display: none;
      max-width: 480px;
      margin: 26px auto 0;
      padding: 16px 18px;
      border-radius: 14px;
      background: #24113d;
      border: 1px solid ${SITE.color};
      color: #f3e8ff;
    }
    #signup .thanks b { color: #ff9a3c; }
    #signup .fine { margin: 14px 0 0; font-size: .8rem; color: #9c86bd; }
    @media (max-width: 520px) {
      #signup .hw-signup { padding: 40px 16px 56px; }
      #signup button { flex: 1 1 100%; }
    }
  </style>

  <div class="hw-signup">
    <p class="eyebrow">Before the clock strikes midnight</p>
    <h2>Get your costume ideas early</h2>
    <p class="sub">Join the ${SITE.name} waitlist and we'll send you costume ideas built from what's already in your closet, in time for Halloween.</p>

    <form onsubmit="event.preventDefault(); this.style.display='none'; this.parentNode.querySelector('.thanks').style.display='block';">
      <label for="signup-email">Email address</label>
      <input id="signup-email" type="email" required placeholder="you@example.com" autocomplete="email">
      <button type="submit">Summon my costumes</button>
    </form>

    <p class="thanks"><b>You're on the list!</b> Go take a look in your closet. Your first costume ideas are on the way. (This is a demo, so nothing was actually sent.)</p>
    <p class="fine">Demo form. We don't store anything.</p>

    <div class="pumpkins" aria-hidden="true">🎃🎃🎃</div>
  </div>
`);
