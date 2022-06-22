import Head from "next/head";
import { useSelector } from "react-redux";
import Search from "../components/search";
import Complete from "../components/complete";
import Open from "../components/open";
import Process from "../components/process";
import Preparation from "../components/preparation";

export default function Home() {
  const step = useSelector((state) => state.steps.step);
  return (
    <>
      <Head>
        <title>Facturación INCOM</title>
        <meta
          name="description"
          content="Facturación Electrónica INCOM CFDI 4.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {step === 0 && <Search />}
      {step === 10 && <Open />}
      {step === 20 && <Process />}
      {step === 30 && <Complete />}
      {step === 40 && <Preparation />}
    </>
  );
}
