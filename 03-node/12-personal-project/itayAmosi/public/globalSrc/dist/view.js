function renderFooter() {
    try {
        var html = "\n      <div class=\"container main-footer-container\">\n      <h3 class=\"title\">MORE ABOUT US</h3>\n      <ul class=\"nav footer-nav\">\n          <li>\n              <a href=\"https://www.youtube.com\" target=\"_blank\">\n                  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png\">\n              </a>\n          </li>\n          <li>\n              <a href=\"https://www.facebook.com\" target=\"_blank\">\n                  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png\">\n              </a>\n          </li>\n      </ul>\n  </div>\n";
        var footerRoot = document.querySelector("#footer");
        if (!footerRoot)
            throw new Error("footerRoot not found");
        footerRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
