import useAuth from "../../hooks/auth/useAuth";
import AppAppBar from "../../components/common/AppAppBarAdmin";
import ApproveCourseTable from "../../components/admin/ApproveCourseTable";

function AdminApproved() {
    useAuth();
  return (
    <div className="flex">
      <AppAppBar />
      <div className="flex-1 mx-3">
        <ApproveCourseTable status="approved"/>
      </div>
    </div>
  );
}

export default AdminApproved;