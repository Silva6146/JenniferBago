import './assets/Home.css'
import { useState } from 'react';
import Dashboard from './modules/Dashboard.tsx';
import Tool from './modules/Tool.tsx';
import Content from './modules/Content.tsx'

function Home() {

  //#region Variable
    // Final Content:
    const _buffer = [];
    // Page Content:
    const [_pageContent, setPageContent] = useState((<Content></Content>));
    // Login or SignUp Hide or Show Up:
    const [_active, setActiveForm] = useState(false);
    // Swap between Login and SignUp (False = Login, True = SignUp):
    const [_current,setCurrentForm] = useState(false);
  //#endregion

  //#region Handler
    // Event Handlers:
    const HomeClick_Event = ()=>{setPageContent((<Content></Content>))};
    const DashBoardClick_Event = ()=>{setPageContent((<Dashboard></Dashboard>))};
    const ToolClick_Event = ()=>{setPageContent((<Tool></Tool>))};
    const ShowFormClick_Event = ()=>{setActiveForm(!_active)};
    const SwapFormClick_Event = ()=>{setActiveForm(!_current)};
  //#endregion

  //#region Nav Item
    const _homeItem = (
        <li className="nav-item">
            <a className="nav-link" href="#" onClick={HomeClick_Event}><span className="link-text">Home</span></a>
        </li>
    );

    const _dashboardItem = (
        <li className="nav-item">
            <a className="nav-link" href="#" onClick={ToolClick_Event}><span className="link-text">Tool</span></a>
        </li>
    );

    const _toolItem = (
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={DashBoardClick_Event}><span className="link-text">Dashboard</span></a>
        </li> 
    );

    const _showFormItem = (
        <li className="nav-item">
          <a className="nav-link p-1" href="#" onClick={ShowFormClick_Event}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-file-person-fill" viewBox="0 0 16 16">
              <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11"/>
            </svg>
          </a>
        </li> 
    );

    const _showBrandLogo = (
      <li className="nav-item">
        <a className="nav-link p-1" href="#" onClick={ShowFormClick_Event}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-file-person-fill" viewBox="0 0 24 24">
              <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
            </svg>
        </a>
      </li> 
    );
  //#endregion

  //#region Nav and Footer

    const _pageNav = (
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon bg-light"></span>
            </button>
            {_showBrandLogo}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                {_homeItem}
                {_dashboardItem}
                {_toolItem}
              </ul>
            </div>
            {_showFormItem}
          </div>
        </nav>
    );
  //#endregion

  //#region Buffer Push
    _buffer.push(_pageNav);
    _buffer.push(_pageContent);
  //#endregion

  return(_buffer)
}

export default Home
