import 'styles/main.scss';


let headerPortal = document.querySelector('[data-attr="header"]');
let headerMenuTemplate = `
  <div class="mktp-menu-top">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-1">
          <a href="/#/dashboard" class="b2w-marketplace">
		Hello World!
          </a>
        </div>
        <div class="col-md-8 col-sm-10 col-sm-offset-1 col-md-offset-0">
          <nav class="menu-horizontal parceiro">
            <input type="text" id="search">
            <ul id="listPartners" class="submenu"></ul>
          </nav>
          <nav class="menu-horizontal usuario" data-attr="user-account">
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div class="mktp-menu-main">
    <div class="container">
      <div class="row">
        <div class="menu-horizontal">
          <div class="menu-hamburguer-icon visible-xs-block" data-attr="menu-hamburguer"></div>
          <nav id="menu" class=""></nav>
        </div>
      </div>
    </div>
  </div>
`;

headerPortal.innerHTML = headerMenuTemplate;
