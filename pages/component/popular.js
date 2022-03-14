export default function popular() {
  return (
    <>
      <section className="mb-20">
        <div className="container  ml-24">
          <h5 className="font-poppins text-lg font-bold text-orange-300">
            Best choice
          </h5>
          <div className="flex justify-between">
            <h1 className="font-poppins font-bold text-slate-800 text-4xl">
              Popular Residence
            </h1>
          </div>
          <div className="flex  mt-4 snap-x w-full  justify-center items-center  md:overflow-x-hidden xs:overflow-x-auto  mx-auto  snap-mandatory">
            <div className="xs:snap-start md:snap-none cursor-pointer md:flex-1 border shadow-xl overflow-hidden rounded-lg w-96 group mr-6 ">
              <img
                src="../img/property1.jpg"
                className="w-full h-64 mb-2 group-hover:scale-105 transition duration-300 "
              />
              <p className="font-poppins font-semibold text-slate-600 ml-4">
                $ 47,043
              </p>
              <p className="font-poppins font-bold text-slate-900 ml-4">
                Aliva Priva Jardin
              </p>
              <p className="font-poppins font-light text-slate-400 text-sm ml-4 mb-4 ">
                Lorem Ipsum has been the industry standard dummy text ever since
                the 1500s, when an unknown printer took a galley.
              </p>
            </div>
            <div className="xs:snap-start md:snap-none cursor-pointer md:flex-1 border shadow-xl overflow-hidden rounded-lg w-96 group mr-6 ">
              <img
                src="../img/property2.jpg"
                className="w-full h-64 mb-2 group-hover:scale-105 transition duration-300 "
              />
              <p className="font-poppins font-semibold text-slate-600 ml-4">
                $ 47,043
              </p>
              <p className="font-poppins font-bold text-slate-900 ml-4">
                Aliva Priva Jardin
              </p>
              <p className="font-poppins font-light text-slate-400 text-sm ml-4 mb-4 ">
                Lorem Ipsum has been the industry standard dummy text ever since
                the 1500s, when an unknown printer took a galley.
              </p>
            </div>
            <div className="xs:snap-start md:snap-none cursor-pointer md:flex-1 border shadow-xl overflow-hidden rounded-lg w-96 group mr-6 ">
              <img
                src="../img/property3.jpg"
                className="w-full h-64 mb-2 group-hover:scale-105 transition duration-300 "
              />
              <p className="font-poppins font-semibold text-slate-600 ml-4">
                $ 47,043
              </p>
              <p className="font-poppins font-bold text-slate-900 ml-4">
                Aliva Priva Jardin
              </p>
              <p className="font-poppins font-light text-slate-400 text-sm ml-4 mb-4 ">
                Lorem Ipsum has been the industry standard dummy text ever since
                the 1500s, when an unknown printer took a galley.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
