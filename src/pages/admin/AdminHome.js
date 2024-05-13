import useAuth from "../../hooks/auth/useAuth"
import ApproveCourseTable from "../../components/admin/ApproveCourseTable"
import AppAppBar from "../../components/common/AppAppBarAdmin"

const AdminHome = () => {
  useAuth()
  return (
    <div className="flex">
      <AppAppBar />
      <div className="flex-1 mx-3">

        <ApproveCourseTable />
      </div>


    </div>
  )
}

export default AdminHome