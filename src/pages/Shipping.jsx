import PageBanner from "./generals/Banner";
import Steps from "./shipping/Steps";


const Shipping = () => {
    return (
        <>
        <PageBanner banner="Air Cargo" />
<div className=" w-full  md:w-8/12 px-10 md:px-0 py-10 mx-auto">
    <Steps />
<div className=" bg-orange-400 dark:bg-black dark:text-white py-4 px-4 mb-3">
    <h2 className=" uppercase font-bold text-xl">Shipping </h2>
</div>
<p className=" leading-8 dark:text-white text-lg ">
The shipping process in a company typically begins with the receipt of an order from a customer. 
The order is then verified for accuracy and the items are pulled from inventory or manufactured if necessary. 
The items are then packaged and prepared for shipment. A shipping label is created and the package is sent to the shipping carrier {'('}such as UPS, FedEx, or the US Postal Service{')'}. The carrier then delivers the package to the customer. The company may also track the package and provide tracking information to the customer. Additionally, customs and import/export regulations may need to be taken into account if the package is being shipped internationally.
</p>
</div>

    </>
    )
}


export default Shipping