
import CourseDetailComponent from "../components/CourseDetails"
import SideNavigationStudent from "../components/SideNavStudent"

const CourseDetailsPage =()=>{

    return (
        <div className="flex">
        <SideNavigationStudent/>
        <div className="flex-1 mx-3"> 
       
        <CourseDetailComponent/>
      </div>
  
        
        </div>
    )
}

export default CourseDetailsPage