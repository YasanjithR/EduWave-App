import PaymentForm from "../components/Payment"
import SideNavigationStudent from "../components/SideNavStudent"

const PaymentPage =()=>{

    return (
        <div className="flex">
        <SideNavigationStudent/>
        <div className="flex-1 mx-auto"> 
        <PaymentForm/>
   
      </div>
  
        
        </div>
    )
}

export default PaymentPage