import Image from "next/image";
import { useDispatch } from "react-redux";
import { cleanData } from "../store/invoiceSlice";
import { postCleanData } from "../store/postInvoiceSlice";
import { homeStep } from "../store/stepSlice";
import { wrapper } from "../store/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const goHome = () => {
    dispatch(cleanData());
    dispatch(homeStep());
    dispatch(postCleanData());
  };
  return (
    <div className="relative">
      <div className="fixed w-full z-10 h-12 max-h-12 bg-white shadow-md">
        <div className="flex justify-between px-8 items-center">
          <div className="w-40 max-w-sm py-1">
            <Image
              src="https://www.incom.mx/img/webUI/incom_retail_logo_header_big.png"
              layout="responsive"
              width={650}
              height={150}
              alt="Logo INCOM"
              onClick={goHome}
            />
          </div>
          <div>
            <button onClick={goHome}>Inicio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  store.dispatch(homeStep());
  store.dispatch(cleanData());
  store.dispatch(postCleanData());
});

export default Navbar;
