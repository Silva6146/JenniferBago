function Dashboard() {


  //#region Table Items
    const _tblItems = [
      (
        <div className="row table-item">
          <div className="col-3">
            <p className="table-item-text mx-5 mt-2">Important Note </p>
          </div>
          <div className="col-8">
            <p className="table-item-text mt-2"> Qwen3:14b was used locally, using Ollama, to create this placeholder text. In the real application the text would be different and user written.</p>
          </div>
          <div className="col">
            <a className="nav-link mx-4 px-2 mt-1" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#602263" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </a>
          </div>
        </div>
      ),
      (
        <div className="row table-item">
          <div className="col-3">
            <p className="table-item-text mx-5 mt-2">The Impact of my Daily Habits </p>
          </div>
          <div className="col-8">
            <p className="table-item-text mt-2"> After feeling cramps here and there, I decided to gather the following supplements from the tool.  </p>
          </div>
          <div className="col">
            <a className="nav-link mx-4 px-2 mt-1" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#602263" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </a>
          </div>
        </div>
      ),
      (
        <div className="row table-item">
          <div className="col-3">
            <p className="table-item-text mx-5 mt-2">The Role of Mindfulness in Enhancing Emotional Resilience </p>
          </div>
          <div className="col-8">
            <p className="table-item-text mt-2"> This report examines how mindfulness practices, such as meditation and deep breathing, contribute to improved emotional regulation and stress reduction, fostering greater psychological resilience in challenging situations.  </p>
          </div>
          <div className="col">
            <a className="nav-link mx-4 px-2 mt-1" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#602263" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </a>
          </div>
        </div>
      ),
      (
        <div className="row table-item">
          <div className="col-3">
            <p className="table-item-text mx-5 mt-2">Understanding the Emotional Benefits of a Healthy Lifestyle </p>
          </div>
          <div className="col-8">
            <p className="table-item-text mt-2"> This report highlights how adopting a balanced diet, regular exercise, and adequate sleep can positively influence mood, reduce stress, and enhance overall emotional well-being.  </p>
          </div>
          <div className="col">
            <a className="nav-link mx-4 px-2 mt-1" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#602263" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </a>
          </div>
        </div>
      ),
      (
        <div className="row table-item">
          <div className="col-3">
            <p className="table-item-text mx-5 mt-2">The Influence of Social Connections on Mental and Physical Health </p>
          </div>
          <div className="col-8">
            <p className="table-item-text mt-2"> This report investigates how meaningful relationships and community engagement contribute to emotional stability, stress reduction, and improved physical health outcomes, underscoring the vital role of social support in holistic well-being.</p>
          </div>
          <div className="col">
            <a className="nav-link mx-4 px-2 mt-1" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#602263" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </a>
          </div>
        </div>
      ),
      (
        <div className="row table-item">
          <div className="col-3">
            <p className="table-item-text mx-5 mt-2">The Effect of Nature Exposure on Emotional Well-being </p>
          </div>
          <div className="col-8">
            <p className="table-item-text mt-2"> This report discusses how spending time in natural environments reduces stress, improves mood, and enhances overall emotional health by fostering relaxation and a sense of connection to the world.</p>
          </div>
          <div className="col">
            <a className="nav-link mx-4 px-2 mt-1" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#602263" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </a>
          </div>
        </div>
      ),
      (
        <div className="row table-item">
          <div className="col-3">
            <p className="table-item-text mx-5 mt-2">Balancing Work and Life: Strategies for Reducing Burnout and Enhancing Health </p>
          </div>
          <div className="col-8">
            <p className="table-item-text mt-2"> This report examines the importance of work-life balance in preventing burnout, improving mental clarity, and fostering physical health through effective time management and self-care practices.</p>
          </div>
          <div className="col">
            <a className="nav-link mx-4 px-2 mt-1" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#602263" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </a>
          </div>
        </div>
      ),
      (
        <div className="row table-item">
          <div className="col-3">
            <p className="table-item-text mx-5 mt-2">The Dual Role of Technology in Modern Health: Benefits and Challenges </p>
          </div>
          <div className="col-8">
            <p className="table-item-text mt-2"> This report analyzes how technology both supports health (e.g., fitness trackers, telemedicine) and poses risks (e.g., screen addiction, data privacy concerns), calling for mindful integration into daily life.</p>
          </div>
          <div className="col">
            <a className="nav-link mx-4 px-2 mt-1" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#602263" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </a>
          </div>
        </div>
      ),
      (
        <div className="row table-item">
          <div className="col-3">
            <p className="table-item-text mx-5 mt-2">Managing Chronic Illness: Holistic Approaches to Improving Quality of Life </p>
          </div>
          <div className="col-8">
            <p className="table-item-text mt-2"> This report explores integrative strategies—combining medical treatment, nutrition, mental health support, and patient empowerment—to enhance well-being and longevity for individuals with chronic conditions.</p>
          </div>
          <div className="col">
            <a className="nav-link mx-4 px-2 mt-1" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#602263" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </a>
          </div>
        </div>
      ),
      (
        <div className="row table-item">
          <div className="col-3">
            <p className="table-item-text mx-5 mt-2">The Link Between Nutrition and Mental Health: Key Insights </p>
          </div>
          <div className="col-8">
            <p className="table-item-text mt-2">  This report highlights how dietary choices, such as intake of omega-3s, antioxidants, and whole foods, directly influence brain function, mood regulation, and the risk of mental health disorders like depression and anxiety.</p>
          </div>
          <div className="col">
            <a className="nav-link mx-4 px-2 mt-1" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#602263" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
            </a>
          </div>
        </div>
      )
    ];
  //#endregion

  return (
    <div className="container-fluid">
      <div className="row mt-5"> 
        <div className="col"></div>
        <div className="col-10">
          <div className="row table-top">
            <div className="col-3">
              <p className="table-title mt-2">Report Title</p>
            </div>
            <div className="col-8 table-border-left">
              <p className="table-title mt-2">Summary</p>              
            </div>
            <div className="col table-border-left">
              <p className="table-title mt-2">View</p>              
            </div>
          </div>
          
          {_tblItems[0]}
          {_tblItems[1]}
          {_tblItems[2]}
          {_tblItems[3]}
          {_tblItems[4]}
          {_tblItems[5]}
          {_tblItems[6]}
          {_tblItems[7]}
          {_tblItems[8]}

          <div className="row table-bottom">
            <div className="col-4">
              <p className="table-footer-text mt-2">Last Update - 14:24 14/02/2026</p>              
            </div>
            <div className="col-4">
            </div>
            <div className="col-4">            
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default Dashboard