import EnrolledCourses from "../components/StudentEnrolledCourses"
import SideNavigationStudent from "../components/SideNavStudent"

const EnrolledCoursesPage =()=>{

    return (
        <div className="flex">
        <SideNavigationStudent/>
        <div className="flex-1 mx-auto"> 
       
        <EnrolledCourses/>
      </div>
  
        
        </div>
    )
}

export default EnrolledCoursesPage