import CourseCard from "../components/CourseCard"
import SideNavigationStudent from "../components/SideNavStudent"

const HomeStudent =()=>{

    return (
        <div className="flex">
        <SideNavigationStudent/>
        <div className="flex-1 mx-auto"> {/* Main content */}
       
        <CourseCard/>
      </div>
  
        
        </div>
    )
}

export default HomeStudent