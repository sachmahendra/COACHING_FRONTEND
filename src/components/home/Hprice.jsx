// import React from "react"
// import Heading from "../common/heading/Heading"
// import PriceCard from "../pricing/PriceCard"

// const Hprice = () => {
//   return (
//     <>
//       <section className='hprice padding'>
//         <Heading subtitle='OUR PRICING' title='Pricing & Packages' />
//         <div className='price container grid'>
//           <PriceCard />
//         </div>
//       </section>
//     </>
//   )
// }

// export default Hprice




import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        {/* <Heading subtitle='OUR PRICING' title='Pricing & Packages' /> */}
        <Heading subtitle='OUR UPCOMMING SERVICES FOR YOU' title='SCHOLARSHIP & TEST SERIES' />
        <Heading title='PLEASE WAIT ! COMMING SOON.....' />
        <div className='price container grid'>
          {/* <PriceCard /> */}
        </div>
      </section>
    </>
  )
}

export default Hprice

