import _phImage0 from '../assets/img/health.jpg'
import _phImage1 from '../assets/img/report.jpg'

function Content() {

  // Width and Height of the Icons
  const _width = 24;
  const _height = 24;

  return (
    
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col"></div>

        <div className="col-4">
          <div className="row"><img className="img-fluid round-border" src={_phImage0}></img></div>
          <div className="row mt-4"><h3>Boost Your Health!</h3></div>
          <div className="row"><p>If you use Supplement InstaList and you have Personal or Pro Subscription you can acess your Submitted Reports!</p></div>
          <div className="row"><button type="button" className="btn btn-primary">My Reports</button></div>
        </div>

        <div className="col-2"></div>
        <div className="col-4">
          <div className="row"><img className="img-fluid round-border" src={_phImage1} width="32"></img></div>
          <div className="row mt-2"><h3>Supplement InstaList Reports</h3></div>
          <div className="row"><p>With Supplement InstaList Personal or Pro Subscription you can acess your Reports. And use the tools, made by a specialist, anywhere!</p></div>
          
          <div className="row container-subscription pt-1">
            
            <div className="row"><h3>Personal</h3></div>
            <div className="row">
              <div className="col">
                <svg xmlns="http://www.w3.org/2000/svg" width={_width} height={_height} fill="#602263" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                </svg>
              </div>
              <div className="col-7">
                <p>Access to an Incredible specialized tool</p>
              </div>
              <div className="col-4"></div>
            </div>
            <div className="row">
              <div className="col">
                <svg xmlns="http://www.w3.org/2000/svg" width={_width} height={_height} fill="#602263" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                </svg>
              </div>
              <div className="col-7">
                <p>Reports that can be checked anywhere</p>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
          
          <div className="row mt-3 mb-2 container-subscription">
            <div className="row"><h3>Pro</h3></div>
            <div className="row">
              <div className="col">
                <svg xmlns="http://www.w3.org/2000/svg" width={_width} height={_height} fill="#602263" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                </svg>
              </div>
              <div className="col-7">
                <p>Everything from the Personal subscription</p>
              </div>
              <div className="col-4"></div>
            </div>
            <div className="row">
              <div className="col">
                <svg xmlns="http://www.w3.org/2000/svg" width={_width} height={_height} fill="#602263" className="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                </svg>
              </div>
              <div className="col-7">
                <p>Help from a specialist on the subject</p>
              </div>
              <div className="col-4"></div>
            </div>
          </div>

          <div className="row"><button type="button" className="btn btn-primary">Subscribe</button></div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default Content