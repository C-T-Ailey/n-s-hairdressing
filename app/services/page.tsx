import "./page.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Nicki Sims Hair'
}

export default function About() {


//   const priceIsAnObject = {
//     "Wash, Cut & Finish": 40,
//     "Men's cut (short)": 25,
//     "Blowdry": 30,
//     "Pin Curl Blowdry": 35,
//     "Hair Up": 40,
//     "Teens (12-15 Years)": 20,
//     "Children (11 and Under)": 15
// }

const priceIsAnObject = [
  {"Wash, Cut & Finish": 40},
  {"Men's cut (short)": 25},
  {"Blowdry": 30},
  {"Pin Curl Blowdry": 35},
  {"Hair Up": 40},
  {"Teens (12-15 Years)": 20},
  {"Children (11 and Under)": 15}
]


  

  return (
    <div className="text-[#606060] mt-6">
      
      <h1 className="underline text-center text-2xl">Services & Pricing</h1>
      <br/>
              <div className=" w-[90vw] lg:w-[60vw] text-center m-auto">
                <p className="text-xl">Always happy to accommodate your needs </p>
                <p className="text-lg">If you require a service which isn&apos;t listed below, don&apos;t hesistate to get in touch!</p>
              </div>
              <br/>
              {/* <div className="w-[90vw] h-[50vh] lg:w-[50vw] m-auto services flex flex-row justify-around text-2xl">
                <ul>
                {Object.keys(priceIsAnObject).map(service =>
                      <li>
                      <p>
                      {service}
                      </p>
                      </li>
                      )}
                      </ul>
                      <ul>
                      {Object.values(priceIsAnObject).map(price =>
                        <li>
                        <p><span className="font-mono">£</span>{price}</p>
                        </li>
                        )}
                        </ul>
                      </div> */}
              <div className="service-table grid justify-center">
                {priceIsAnObject.map((service, index) =>
                  <div key={index} className="grid grid-cols-2 grid-rows-7">
                    <div className="row-start-1 row-end-1 col-start-1 col-end-1 text-start">
                      {Object.keys(service)}
                    </div>
                    <div className="row-start-1 row-end-7 col-start-2 col-end-2 text-end">
                    <span className="font-mono">£</span>{Object.values(service)}
                    </div>
                  </div>
                )}
            </div>
    </div>
  )
}
