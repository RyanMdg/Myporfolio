import "../src/app/globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });
const about = () => {
  return (
    <div className={inter.className}>
      <h1 className=" uppercase text-[10rem]"> RYAN DEGUIA</h1>
    </div>
  );
};

export default about;
