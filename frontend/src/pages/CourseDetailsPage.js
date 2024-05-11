
import CourseDetailComponent from "../components/CourseDetails"
import SideNavigationStudent from "../components/SideNavStudent"

const CourseDetailsPage =()=>{

    return (
        <div className="flex">
        <SideNavigationStudent/>
        <div className="flex-1 mx-auto"> 
       
        <CourseDetailComponent/>
      </div>
  
        
        </div>
    )
}

export default CourseDetailsPage