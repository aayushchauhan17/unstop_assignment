import React from 'react';
import "./MobileComp.css";
import Menu from "./../../assets/images/menu.svg";
import Search from "./../../assets/images/search.svg"
import Filter from "./../../assets/images/filter.svg"
import Bar from "./../../assets/images/bar.svg"
import MyAssessmentBox from '../Right/MyAssessmentBox';
import AssessmentOverview from '../Right/AssessmentOverview';


function MobileComp(){
    const [showBar, setShowBar] = React.useState(false)
    return(
        <>
          <div className='mobile-container'>
            <div className='mobile-header' >
                <img src={Menu} alt='menu' />
                <p>Assessment</p>
            </div>
            
            <div className='mobile-nav'>
                <p className='mobile-nav-select'>My Assessments</p>
                <p className='mobile-nav-notSelect' >Unstop Assessments</p>
            </div>
            {showBar && <>
                <AssessmentOverview />
            </>}
            <div className='mobile-body'>
                <div className='mobile-body-header'>
                    <p>My Assessment</p>
                    <img width={24} height={24} src={Search} alt='search' />
                    <img width={24} height={24} src={Filter} alt='search' />
                    <img onClick={()=>{setShowBar(!showBar)}} width={20} height={20} src={Bar} alt='search' />
                </div>
                <MyAssessmentBox add={true} />
                <MyAssessmentBox />
                <MyAssessmentBox />

            </div>
          </div>
        </>
    )
}

export default MobileComp;