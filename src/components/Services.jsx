import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services = () => {
    return (
      <section className="py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-8">
              <TbTruckDelivery className="w-24 h-24 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold">Super Fast and Free Delivery</h3>
            </div>
  
            <div className="md:flex gap-8">
              <div className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-8">
                <MdSecurity className="w-24 h-24 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold">Non-contact Shipping</h3>
              </div>
  
              <div className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-8">
                <GiReceiveMoney className="w-24 h-24 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold">Money-back Guaranteed</h3>
              </div>
            </div>
  
            <div className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-8">
              <RiSecurePaymentLine className="w-24 h-24 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold">Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  