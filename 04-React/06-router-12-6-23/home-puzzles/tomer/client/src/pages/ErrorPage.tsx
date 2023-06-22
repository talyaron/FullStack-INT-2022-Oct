import { Link, useRouteError } from "react-router-dom";
import "../style/errorPage.scss";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <>
      <div className="text">
        <p>404</p>
      </div>
      <div className="container">
        <div className="caveman">
          <div className="leg">
            <div className="foot">
              <div className="fingers"></div>
            </div>
          </div>
          <div className="leg">
            <div className="foot">
              <div className="fingers"></div>
            </div>
          </div>
          <div className="shape">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="head">
            <div className="eye">
              <div className="nose"></div>
            </div>
            <div className="mouth"></div>
          </div>
          <div className="arm-right">
            <div className="club"></div>
          </div>
        </div>
        <div className="caveman">
          <div className="leg">
            <div className="foot">
              <div className="fingers"></div>
            </div>
          </div>
          <div className="leg">
            <div className="foot">
              <div className="fingers"></div>
            </div>
          </div>
          <div className="shape">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="head">
            <div className="eye">
              <div className="nose"></div>
            </div>
            <div className="mouth"></div>
          </div>
          <div className="arm-right">
            <div className="club"></div>
          </div>
        </div>
      </div>
      <button className="btn_home">
        <Link to="/">Go HOME</Link>
      </button>
    </>
  );
}
