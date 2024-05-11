import EnrolledCourses from "../components/StudentEnrolledCourses"
import SideNavigationStudent from "../components/SideNavStudent"

const EnrolledCoursesPage =()=>{

    return (
        <div className="flex">
        <SideNavigationStudent/>
        <div className="flex-1 mx-3"> 
       
        <EnrolledCourses/>
      </div>
  
        
        </div>
    )
}

export default EnrolledCoursesPage