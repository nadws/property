import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
export default function popular() {
  return (
    <>
      <section className="h-screen">
        <div className="container  ml-24">
          <h5 className="font-poppins text-lg font-bold text-orange-300">
            Best choice
          </h5>
          <div className="flex justify-between">
            <h1 className="font-poppins font-bold text-slate-800 text-4xl">
              Popular Residence
            </h1>
            <div>
              <button className="border mr-2 p-2">
                <BsChevronLeft />
              </button>
              <button className="border mr-2 p-2">
                <BsChevronRight />
              </button>
            </div>
          </div>
          <div className="flex  mt-4 snap-x w-full  overflow-x-scroll  mx-auto  snap-mandatory">
            <div class="snap-start mr-4 cursor-pointer ">
              <div className="border shadow-xl overflow-hidden rounded-lg w-96 ">
                <img
                  src="../img/property1.jpg"
                  className="w-96 h-64 mb-2 hover:scale-105 transition duration-300"
                />
                <p className="font-poppins font-semibold text-slate-600 ml-2">
                  $ 47,043
                </p>
                <p className="font-poppins font-bold text-slate-900 ml-2">
                  Aliva Priva Jardin
                </p>
                <p className="font-poppins font-light text-slate-400 text-sm ml-2 mb-2">
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
            </div>
            <div class="snap-start mr-4 cursor-pointer ">
              <div className="border shadow-xl overflow-hidden rounded-lg w-96 group ">
                <img
                  src="../img/property2.jpg"
                  className="w-96 h-64 mb-2 hover:scale-105 transition duration-300"
                />
                <p className="font-poppins font-semibold text-slate-600 ml-2">
                  $ 47,043
                </p>
                <p className="font-poppins font-bold text-slate-900 ml-2">
                  Aliva Priva Jardin
                </p>
                <p className="font-poppins font-light text-slate-400 text-sm ml-2 mb-2">
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
            </div>
            <div class="snap-start mr-4 cursor-pointer ">
              <div className="border shadow-xl overflow-hidden rounded-lg w-96 group ">
                <img
                  src="../img/property3.jpg"
                  className="w-96 h-64 mb-2 hover:scale-105 transition duration-300"
                />
                <p className="font-poppins font-semibold text-slate-600 ml-2">
                  $ 47,043
                </p>
                <p className="font-poppins font-bold text-slate-900 ml-2">
                  Aliva Priva Jardin
                </p>
                <p className="font-poppins font-light text-slate-400 text-sm ml-2 mb-2">
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
            </div>
            <div class="snap-start mr-4 cursor-pointer ">
              <div className="border shadow-xl overflow-hidden rounded-lg w-96 group ">
                <img
                  src="../img/property4.jpg"
                  className="w-96 h-64 mb-2 hover:scale-105 transition duration-300"
                />
                <p className="font-poppins font-semibold text-slate-600 ml-2">
                  $ 47,043
                </p>
                <p className="font-poppins font-bold text-slate-900 ml-2">
                  Aliva Priva Jardin
                </p>
                <p className="font-poppins font-light text-slate-400 text-sm ml-2 mb-2">
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
