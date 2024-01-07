export default function App() {
  return (
    <div className="m-0 p-0">
      <div className="bg-[url('src/assets/buildings.jpg')] bg-cover bg-no-repeat h-[75vh] md:mb-20">
        <nav className="pt-5 pb-5 pl-10 sticky top-0 bg-black z-50">
          <ul className="flex flex-col md:flex-row text-sm justify-center items-center h-full text-white font-semibold relative">
            <li className="mx-4 mb-2 md:mb-0 hover:text-black">HOME</li>
            <li className="mx-4 mb-2 md:mb-0 hover:text-black">ABOUT US</li>
            <h1 className="text-4xl font-bold mb-2 md:mb-0">TERRA</h1>
            <li className="mx-4 mb-2 md:mb-0 hover:text-black">OUR BLOGS</li>
            <li className="mx-4 mb-2 md:mb-0 hover:text-black">OUR PROJECTS</li>
          </ul>
        </nav>

        <div className="mt-24 text-black">
          <div className="w-dvw flex text-3xl mb-10 justify-center">
            <h1>WELCOME TO TERRA</h1>
          </div>
          <div className="w-dvw flex text-sm mb-10 justify-center">
            <p className="text-lg md:w-2/3 lg:w-2/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic ea
              beatae sunt voluptate reiciendis error eius, vel numquam at
              obcaecati animi temporibus cum recusandae omnis odit perspiciatis
            </p>
          </div>
          <div className="w-dvw flex text-sm mb-10 justify-center">
            <button className="text-black font-bold text-xl">PROJECTS →</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="m-10 w-full md:w-2/5 relative">
          <div className="w-96 h-0.5 bg-black m-5 -rotate-45 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="w-96 h-0.5 bg-black m-5 -rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          <img
            className="-rotate-45 z-10 left-1/2 top-1/4 p-0 h-[213px] w-[213px] md:left-64 md:top-12 lg:left-64 lg:top-12 xl:left-64 xl:top-12 relative"
            src="src/assets/face1.jpeg"
            alt=""
          />
        </div>

        <div className="w-full md:w-3/5 text-center p-4 md:p-24">
          <h3 className="mb-4 font-bold">ABOUT US</h3>
          <div className="w-1/2 md:w-auto h-0.5 border-1 rotate-180 mx-auto my-10 bg-black"></div>
          <div className="text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, nemo odio? Voluptatum, quam et facere eius quo cumque
              obcaecati commodi. Ullam unde, optio ipsa iure reiciendis dolorum
              id cupiditate velit! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Accusamus quos quo iste magnam consectetur quod
              explicabo deserunt. Ullam sint, a pariatur nulla dicta unde at
              quis ipsum dolor aperiam! Laboriosam.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-12 ">
        <div className="w-full md:w-3/5 text-center bg-black p-24 text-white">
          <h3 className="mb-4 font-bold">INVEST IN US</h3>
          <div className="w-1/2 md:w-auto h-0.5 border-1 rotate-180 mx-auto my-10 bg-white"></div>
          <div className="text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, nemo odio? Voluptatum, quam et facere eius quo cumque
              obcaecati commodi. Ullam unde, optio ipsa iure reiciendis dolorum
              id cupiditate velit! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Accusamus quos quo iste magnam consectetur quod
              explicabo deserunt. Ullam sint, a pariatur nulla dicta unde at
              quis ipsum dolor aperiam! Laboriosam.
            </p>
          </div>
        </div>
        <div className="">
          <img src="src/assets/house.jpg" alt="" />
        </div>
      </div>

      <div className="relative flex pt-20">
        <div className="left-52 top-32  absolute z-10">
          <h3 className="mb-4 text-center font-bold">OUR PROJECTS</h3>
          <div className="w-96 md:w-96 h-0.5 border-1 rotate-180 mx-auto my-10 bg-black"></div>
          <img
            className="h-[500px]"
            src="src/assets/map1.jpg"
            alt="Our Projects"
          />
        </div>
        <div className="relative z-20 right-[400px] bottom-10 ml-auto">
          <img
            className="h-[500px]"
            src="src/assets/bungalow.jpg"
            alt="Bungalow"
          />
          <div className=" relative z-20 left-[80px] bottom-[35px] ml-auto ">
            <div className="pl-24">
              <button className="bg-black text-white py-5 font-bold px-12">
                NEW DELHI
              </button>
            </div>
            <p className="w-96 p-5 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              dolores totam veritatis exercitationem aspernatur ad provident
              optio accusantium nostrum vel aliquam,
            </p>
            <p className="pl-16">ADDRESS:New Delhi, Pooth Kalan</p>
          </div>
        </div>
      </div>

      <div className="p-24">
        <h3 className="mb-4 font-bold text-center">BLOGS AND NEWS</h3>
        <div className="w-1/2 md:w-96 h-0.5 border-1 rotate-180 mx-auto my-10 bg-black"></div>

        <div className="cards justify-center space-x-24 flex">
          <div className=" w-52 h-96 pt-10 relative text-center">
            <div className="relative h-[100px] w-[100px] rotate-45 bg-black mx-auto z-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 h-0.5 bg-black relative bottom-24 z-10 m-5 -rotate-45"></div>
              <div className="w-48 h-0.5 bg-black relative bottom-24 z-10 m-5 -rotate-45"></div>
            </div>
            <div className="mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore tempora magni iure temporibus esse et iste tempore.
              Veniam eius recusandae nostrum velit dolorem?
            </div>
            <button className="border-2 border-black  bg-black text-white  rounded-lg px-5 ">
              READ MORE
            </button>
          </div>

          <div className=" w-52 h-96 pt-10 relative text-center">
            <div className="relative h-[100px] w-[100px] rotate-45 bg-black mx-auto z-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 h-0.5 bg-black relative bottom-24 z-10 m-5 -rotate-45"></div>
              <div className="w-48 h-0.5 bg-black relative bottom-24 z-10 m-5 -rotate-45"></div>
            </div>
            <div className="mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore tempora magni iure temporibus esse et iste tempore.
              Veniam eius recusandae nostrum velit dolorem?
            </div>
            <button className="border-2 border-black  bg-black text-white rounded-lg px-5 ">
              READ MORE
            </button>
          </div>
          <div className=" w-52 h-96 pt-10 relative text-center">
            <div className="relative h-[100px] w-[100px] rotate-45 bg-black mx-auto z-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-48 h-0.5 bg-black relative bottom-24 z-10 m-5 -rotate-45"></div>
              <div className="w-48 h-0.5 bg-black relative bottom-24 z-10 m-5 -rotate-45"></div>
            </div>
            <div className="mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore tempora magni iure temporibus esse et iste tempore.
              Veniam eius recusandae nostrum velit dolorem?
            </div>
            <button className="border-2 border-black bg-black text-white rounded-lg px-5 ">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-12 bg-black text-white h-24 flex justify-center items-center">
        © 2023 SiteCare, LLC, a WordPress maintenance & marketing company.
        Legal. SiteCare is not affiliated with Sitecore.
      </footer>
    </div>
  );
}
