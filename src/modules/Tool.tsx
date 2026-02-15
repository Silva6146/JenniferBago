import { useState } from 'react';

function Tool() {

  //#region Symptom Collun
  
  // List of Symptoms
  const _ltSymptom = [
    {key:0,name:"Headache"},
    {key:1,name:"Brain Fog"},
    {key:2,name:"Fever"},
    {key:3,name:"Fatigue"},
    {key:4,name:"Nausea"},
    {key:5,name:"Cough"},
    {key:6,name:"Diarrhea"},
    {key:7,name:"Constipation"},
    {key:8,name:"Insomnia"},
    {key:9,name:"Dizziness"}
  ];

  // State of Symptom
  const [_ltSymptomState,setLtSymptomState] = useState([
    {key:0,active:"row symptom-item"},
    {key:1,active:"row symptom-item"},
    {key:2,active:"row symptom-item"},
    {key:3,active:"row symptom-item"},
    {key:4,active:"row symptom-item"},
    {key:5,active:"row symptom-item"},
    {key:6,active:"row symptom-item"},
    {key:7,active:"row symptom-item"},
    {key:8,active:"row symptom-item"},
    {key:9,active:"row symptom-item"}
  ]);

  //#endregion

  //#region Supplement Collun

  // List of Symptoms
  const [_ltSupp,setLtSupp] = useState([
    {key:0,name:"Vitamin D",state:"supp-item supp-hide"},
    {key:1,name:"Vitamin K",state:"supp-item supp-hide"},
    {key:2,name:"Omega-3 Fatty Acids",state:"supp-item supp-hide"},
    {key:3,name:"Probiotics",state:"supp-item supp-hide"},
    {key:4,name:"Vitamin B12",state:"supp-item supp-hide"},
    {key:5,name:"Iron",state:"supp-item supp-hide"},
    {key:6,name:"Magnesium",state:"supp-item supp-hide"},
    {key:7,name:"Zinc",state:"supp-item supp-hide"},
    {key:8,name:"Vitamin C",state:"supp-item supp-hide"},
    {key:9,name:"Garlic",state:"supp-item supp-hide"},
  ]);

  //#endregion

  //#region Return Component Code

  return (
    <div className="container-fluid">
      <div className="row mt-5"> 
        <div className="col"></div>
        <div className="col-10">
          <div className="row table-top">
            <div className="col-6">
              <p className="table-title mt-2">Symptom</p>
            </div>
            <div className="col-6 table-border-left">
              <p className="table-title mt-2">Supplement</p>              
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>

      <div className="row mt-1"> 
        <div className="col"></div>
        <div className="col-10">
          <div className="row">
            <div className="col-6">            
                {
                  _ltSymptomState.map(state=>
                    <div className={state.active} onClick={(e)=>{
                      const _updateList = _ltSymptomState.map(oldItem=>{
                        if(oldItem.key == state.key) {
                          oldItem.active = oldItem.active == "row symptom-item" ? "row symptom-item-active":"row symptom-item"
                          return oldItem;
                        }
                        else {
                          return oldItem;
                        }
                      })

                      const _updateSuppList = _ltSupp.map(oldSupp=>{
                        if(oldSupp.key == state.key) {
                          oldSupp.state = oldSupp.state == "supp-item supp-show" ? "supp-item supp-hide":"supp-item supp-show"
                          return oldSupp;
                        }
                        else {
                          return oldSupp;
                        }
                      })
                     
                      let canSwap = false;
                      let _tempSupp;

                      for(let i = 0; i < _updateSuppList.length; i++){
                        
                        if(_updateSuppList[i].state == "supp-item supp-hide") {
                          canSwap = true;
                        
                          for(let n = i+1; n < _updateSuppList.length && canSwap; n++){
                            if(_updateSuppList[n].state != _updateSuppList[i].state) {
                                _tempSupp = _updateSuppList[i];
                                _updateSuppList[i] = _updateSuppList[n];
                                _updateSuppList[n] = _tempSupp;
                                canSwap = false;
                            }
                          }
                        }
                      }
                      
                      

                      setLtSupp(_updateSuppList)
                      setLtSymptomState(_updateList)
                    }}>
                      <p className="mt-2">{_ltSymptom[state.key].name}</p>
                    </div>
                  )
                }
            </div>
            <div className="col-6">
                {
                  _ltSupp.map(supp=>
                    <div className={supp.state}><p className="mt-2">{supp.name}</p></div>
                  )
                }
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row mt-1">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row mt-2">
            <button type="button" className="btn btn-primary">Save Report</button>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
  
  //#endregion
}



export default Tool