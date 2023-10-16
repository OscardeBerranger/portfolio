const mainContainer = document.querySelector('#mainContainer');


window.onload(mainContainer.innerHTML = getIntroTemplate());


function getIntroTemplate(){
    let template = `
    <div class="mainContainer">
      <div class="mainTitle">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            </div>
            <div class="flip-card-back">
              <h1>Hello</h1>
              <h2>I'm Oscar</h2>
              <h2>This Is My Porfolio</h2>
            </div>
          </div>
        </div>
      </div>

  <div class="bottomBtn">
    <div class="borderBntWork">  <button class="btnWork">MY WORK <span></span></button>
    </div>
  </div>
    `;

    return template;
}