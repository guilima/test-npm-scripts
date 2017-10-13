import 'styles/footer.scss';

let footerPortal = document.querySelector('[data-attr="footer"]');
let footerMenuTemplate = `
  <footer class="mktp-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          
        </div>
      </div>
    </div>
    <hr/>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p class="text-center">

          </p>
        </div>
      </div>
    </div>
  </footer>
`;

footerPortal.innerHTML = footerMenuTemplate;
