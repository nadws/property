import Fade from "react-reveal/Fade";
export default function hero() {
  return (
    <>
      <Fade bottom delay={500}>
        <section>
          <div className="flex place-items-center">
            <div className="  flex-1">
              <div className="ml-24 mt-20">
                <h1 className="font-poppins font-bold text-slate-700 text-6xl">
                  Discover
                </h1>
                <h1 className="font-poppins font-bold text-slate-700 text-6xl mt-4">
                  Your Dream
                </h1>
                <h1 className="font-poppins font-bold text-slate-700 text-6xl mt-4">
                  Property
                </h1>
                <p className="mt-6 text-slate-500 font-poppins font-medium">
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="mt-20 ml-10">
                <img
                  src="../Hero2.jpg"
                  className="h-80 w-5/6 rounded-tl-[300px] rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="../icon/prologis.svg" className="w-36 mt-6 mr-32" />
            <img src="../icon/american-tower.svg" className="w-36 mt-6 mr-32" />
            <img src="../icon/equinix-logo.svg" className="w-36 mt-6 mr-32" />
            <img src="../icon/digital-origin-1.svg" className="w-36 mt-6 " />
          </div>
        </section>
      </Fade>
    </>
  );
}
