
import SideNavigationStudent from "../components/SideNavStudent"
import CourseProgressTracker from "../components/CourseProgress"

const CourseProgressTrackerPage =()=>{

    return (
        <div className="flex">
        <SideNavigationStudent/>
        <div className="flex-1 mx-3"> 
       
        <CourseProgressTracker/>
      </div>
  
        
        </div>
    )
}

export default CourseProgressTrackerPage