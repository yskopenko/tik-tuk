import './Header.css';

function Header() {
  return (
    <div className="pageHeader_tikTok">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <a href="#">
              <img
                alt="TickTuck"
                src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg"
              />
            </a>
          </div>
          <div className="flex-fill">
            <div className="search_tikTok">
              <input
                type="text"
                className="search_tikTok_input form-control"
                placeholder="Пошук акаунтів та відео"
              />
              <span className="search_tikTok_icon">
                <i className="fas fa-search" />
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <a href="#" className="btn btn-default">
              <b>Завантажити</b>
            </a>
            <div className="btn btn-danger">
              <b>Вхід</b>
            </div>
            <div className="btn btn-default">
              <i className="fas fa-ellipsis-v" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
