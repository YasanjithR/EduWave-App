import ApproveCourseTable from "../components/ApproveCourseTable"
import SideNavigationAdmin from "../components/SideNavAdmin"

const ApproveCourseTablePage =()=>{

    return (
        <div className="flex">
        <SideNavigationAdmin/>
        <div className="flex-1 mx-3"> 
       
        <ApproveCourseTable/>
      </div>
  
        
        </div>
    )
}

export default ApproveCourseTablePage