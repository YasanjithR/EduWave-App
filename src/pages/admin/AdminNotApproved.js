import useAuth from "../../hooks/auth/useAuth";
import AppAppBar from "../../components/common/AppAppBarAdmin";
import ApproveCourseTable from "../../components/admin/ApproveCourseTable";

function AdminNotApproved() {
  useAuth();
  return (
    <div className="flex">
      <AppAppBar />
      <div className="flex-1 mx-3">
        <ApproveCourseTable status="notApproved"/>
      </div>
    </div>
  );
}

export default AdminNotApproved;
