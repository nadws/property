import Link from "next/link";

export default function navbar() {
  return (
    <>
      <nav className="border justify-between shadow-lg flex px-4 py-4">
        <div className="flex-initial w-40 text-left ml-6">
          <h1 className="font-bold text-2xl text-slate-800 font-poppins">
            N.Pro<span className="text-slate-700">Ject</span>
          </h1>
        </div>
        <div className="flex-initial w-auto ">
          <ul className="flex">
            <Link href="/">
              <li className="mr-4 font-poppins font-semibold text-slate-700 hover:text-slate-500 cursor-pointer hover:underline">
                Home
              </li>
            </Link>
            <Link href="/service">
              <li className="mr-4 font-poppins font-semibold text-slate-700 hover:text-slate-500 cursor-pointer hover:underline">
                Service
              </li>
            </Link>
            <Link href="/Product">
              <li className="mr-4 font-poppins font-semibold text-slate-700 hover:text-slate-500 cursor-pointer hover:underline">
                Product
              </li>
            </Link>
            <Link href="/About">
              <li className="mr-4 font-poppins font-semibold text-slate-700 hover:text-slate-500 cursor-pointer hover:underline">
                About us
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex-initial w-auto mr-6">
          <div className="flex">
            <a
              href="#"
              className="border-slate-800 px-6  hover:bg-slate-700 py-2 mr-2 font-poppins text-slate-700 hover:text-white font-medium border rounded-full"
            >
              Login
            </a>
            <a
              href="#"
              className="border-slate-800 px-6 hover:bg-slate-700 py-2 font-poppins text-slate-700 hover:text-white font-medium border rounded-full"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
