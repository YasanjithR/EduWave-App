import useAuth from "../hooks/auth/useAuth";
import CourseCard from "../components/CourseCard";
import SideNavigationStudent from "../components/SideNavStudent";

const HomeStudent = () => {
  useAuth();

  return (
    <div className="flex">
      <SideNavigationStudent />
      <div className="flex-1 mx-3">
        <CourseCard />
      </div>
    </div>
  );
}

export default HomeStudent;