import PaymentForm from "../components/Payment"
import SideNavigationStudent from "../components/SideNavStudent"

const PaymentPage =()=>{

    return (
        <div className="flex">
        <SideNavigationStudent/>
        <div className="flex-1 mx-3"> 
        <PaymentForm/>
   
      </div>
  
        
        </div>
    )
}

export default PaymentPage