import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import EasyEdit, { Types } from "react-easy-edit";
import DOMPurify from "dompurify";
import InlineEdit from "./inlineEdit";
import { CreateCFDI40 } from "../pages/api/facturama";
import ReactTooltip from "react-tooltip";
import LoadingModal from "./loadingModal";
import { wrapper } from "../store/store";
import { response } from "../store/postInvoiceSlice";

const Process = () => {
  const orderData = useSelector((state) => state.invoice);
  const postInvoiceData = useSelector((state) => state.postInvoice);
  const rawOrderData = orderData.data[1];
  const rawItemsData = orderData.data[0];
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const receiverNameRef = useRef();
  const receiverRFCRef = useRef();
  const receiverFiscalRegimeRef = useRef();
  const receiverCFDIUseRef = useRef();
  const receiverZipCodeRef = useRef();
  const receiverPaymentForm = useRef();
  const receiverMethodForm = useRef();
  const receiverEmailRef = useRef();
  let receiverNameCheck =
    rawOrderData.AccountParty.Address.DisplayName[0].FormattedName.$value;
  let receiverRFCCheck =
    rawOrderData.Item[0].PriceAndTaxCalculationItem.ItemTaxationTerms.BuyerTaxID
      .$value;
  let receiverZipCodeCheck =
    rawOrderData.AccountParty.Address.PostalAddress[0].StreetPostalCode;
  if (
    receiverNameCheck === "CLIENTE MOSTRADOR" ||
    receiverNameCheck === "CLIENTE MOSTRADOR ML"
  ) {
    receiverNameCheck = "";
    receiverRFCCheck = "";
    receiverZipCodeCheck = "";
  }

  const [receiverName, setReceiverName] = useState(receiverNameCheck);
  const [receiverRFC, setReceiverRFC] = useState(receiverRFCCheck);
  const [receiverZipCode, setReceiverZipCode] = useState(receiverZipCodeCheck);
  const [receiverEmail, setReceiverEmail] = useState("");

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timerProgressBar: true,
  });
  useEffect(() => {
    Toast.fire({
      icon: "success",
      title: "Pedido encontrado y disponible para facturar.",
      timer: 3000,
    });
  }, []);
  useEffect(() => {
    if (postInvoiceData.data.Message) {
      Toast.fire({
        icon: "error",
        title: postInvoiceData.data.Message,
        timer: 9000,
      });
    }
  }, [postInvoiceData]);
  const onSubmit = ({
    receiverCFDIUse,
    receiverFiscalRegime,
    receiverName,
    receiverPaymentForm,
    receiverMethodForm,
    receiverRFC,
    receiverZipCode,
    receiverEmail,
  }) => {
    Swal.fire({
      titleText: "Revisa tus datos",
      html: `<p>Nombre: <b>${receiverName}</b></p><p>RFC: <b>${receiverRFC}</b></p><p>Régimen fiscal: <b>${receiverFiscalRegime}</b></p><p>Uso de CFDI: <b>${receiverCFDIUse}</b></p><p>Código Postal: <b>${receiverZipCode}</b></p><p>Forma de pago: <b>${receiverPaymentForm}</b></p><p>Método de pago: <b>${receiverMethodForm}</b></p><p>Correo electrónico: <b>${receiverEmail}</b></p>`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Continuar",
      denyButtonText: "Atrás",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(() => (loading = true));
        const jsonBody = {
          CfdiType: "I",
          PaymentForm: receiverPaymentForm,
          PaymentMethod: receiverMethodForm,
          ExpeditionPlace:
            rawOrderData.SalesUnitParty.Address.PostalAddress[0]
              .StreetPostalCode,
          Receiver: {
            Rfc: receiverRFC,
            CfdiUse: receiverCFDIUse,
            Name: receiverName,
            FiscalRegime: receiverFiscalRegime,
            TaxZipCode: receiverZipCode,
          },
          Items: rawItemsData,
        };
        try {
          fetch("/api/facturama", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonBody),
          })
            .then((response) => {
              if (!response.ok) {
                console.log(
                  "🚀 ~ file: process.jsx ~ line 110 ~ .then ~ response",
                  response
                );
              }
              setLoading(() => (loading = false));
              return response.json();
            })
            .then((data) => {
              dispatch(response(data));
            })
            .catch((err) => console.log(err));
        } catch (err) {}
      } else {
        Swal.fire("No facturado", "", "info");
      }
    });
  };
  return (
    <section className="max-w-full w-full h-screen py-12">
      {loading && <LoadingModal title={"Facturando"} />}
      <div className="flex flex-col justify-center items-center py-4">
        <h1 className="font-bold select-none">Facturación electrónica</h1>
        <p className="font-light text-sm select-none">
          Información del pedido:
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-5/6 flex flex-col justify-evenly items-center space-y-8"
      >
        <div className="flex justify-center items-center">
          <div className="h-full flex flex-col justify-center items-center space-y-2">
            <div className="w-full flex justify-between items-center space-x-2 px-8">
              <label
                htmlFor={receiverNameRef}
                className="select-none font-semibold"
              >
                Nombre del receptor:
              </label>
              <input
                ref={receiverNameRef}
                {...register("receiverName", { required: true })}
                type="text"
                value={receiverName}
                onChange={(e) => setReceiverName(e.target.value)}
                className={`w-1/2 max-w-xl bg-slate-100 rounded text-center hover:underline hover:underline-offset-4 hover:decoration-dotted focus:outline-none focus:no-underline focus:ring-2 focus:ring-blue-300 ${
                  errors.receiverName && "border-2 border-red-500"
                }`}
              />
            </div>
            <div className="w-full flex justify-between items-center space-x-2 px-8">
              <label
                htmlFor={receiverRFCRef}
                className="select-none font-semibold"
              >
                RFC del receptor:
              </label>
              <input
                ref={receiverRFCRef}
                {...register("receiverRFC", { required: true })}
                type="text"
                value={receiverRFC}
                onChange={(e) => setReceiverRFC(e.target.value)}
                className={`w-1/2 max-w-xl bg-slate-100 rounded text-center hover:underline hover:underline-offset-4 hover:decoration-dotted focus:outline-none focus:no-underline focus:ring-2 focus:ring-blue-300 ${
                  errors.receiverRFC && "border-2 border-red-500"
                }`}
              />
            </div>
            <div className="w-full flex justify-between items-center space-x-2 px-8">
              <label
                htmlFor={receiverFiscalRegimeRef}
                className="select-none font-semibold"
              >
                Régimen fiscal del receptor:
              </label>
              <select
                name="receiverFiscalRegimeRef"
                id="receiverFiscalRegimeRef"
                {...register("receiverFiscalRegime", {
                  required: true,
                })}
                className={`w-1/2 max-w-xl bg-slate-100 text-center rounded ${
                  errors.receiverFiscalRegime && "border-2 border-red-500"
                }`}
              >
                <option value=""></option>
                <option value="601">
                  601 - General de Ley Personas Morales
                </option>
                <option value="602">
                  602 - Personas Morales con Fines no Lucrativos
                </option>
                <option value="605">
                  605 - Sueldos y Salarios e Ingresos Asimilados a Salarios
                </option>
                <option value="606">606 - Arrendamiento</option>
                <option value="607">
                  607 - Régimen de Enajenación o Adquisición de Bienes
                </option>
                <option value="608">608 - Demás ingresos</option>
                <option value="610">
                  610 - Residentes en el Extranjero sin Establecimiento
                  Permanente en México
                </option>
                <option value="611">
                  611 - Ingresos por Dividendos (socios y accionistas)
                </option>
                <option value="612">
                  612 - Personas Físicas con Actividades Empresariales y
                  Profesionales
                </option>
                <option value="614">614 - Ingresos por intereses</option>
                <option value="615">
                  615 - Régimen de los ingresos por obtención de premios
                </option>
                <option value="616">616 - Sin obligaciones fiscales</option>
                <option value="620">
                  620 - Sociedades Cooperativas de Producción que optan por
                  diferir sus ingresos
                </option>
                <option value="621">621 - Incorporación Fiscal</option>
                <option value="622">
                  622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras
                </option>
                <option value="623">
                  623 - Opcional para Grupos de Sociedades
                </option>
                <option value="624">624 - Coordinados</option>
                <option value="625">
                  625 - Régimen de las Actividades Empresariales con ingresos a
                  través de Plataformas Tecnológicas
                </option>
                <option value="626">
                  626 - Régimen Simplificado de Confianza
                </option>
              </select>
            </div>
            <div className="w-full flex justify-between items-center space-x-2 px-8">
              <label
                htmlFor="receiverCFDIUseRef"
                className="select-none font-semibold"
              >
                Uso de CFDI:{" "}
              </label>
              <select
                ref={receiverCFDIUseRef}
                name={receiverCFDIUseRef}
                id={receiverCFDIUseRef}
                {...register("receiverCFDIUse", { required: true })}
                className={`w-1/2 max-w-xl bg-slate-100 text-center rounded ${
                  errors.receiverCFDIUse && "border-2 border-red-500"
                }`}
              >
                <option value=""></option>
                <option value="G01">G01 - Adquisición de mercancías</option>
                <option value="G02">
                  G02 - Devoluciones, descuentos o bonificaciones
                </option>
                <option value="G03">G03 - Gastos en general</option>
                <option value="I01">I01 - Construcciones</option>
                <option value="I02">
                  I02 - Mobiliario y equipo de oficina por inversiones
                </option>
                <option value="I03">I03 - Equipo de transporte</option>
                <option value="I04">
                  I04 - Equipo de computo y accesorios
                </option>
                <option value="I05">
                  I05 - Dados, troqueles, moldes, matrices y herramental
                </option>
                <option value="I06">I06 - Comunicaciones telefónicas</option>
                <option value="I07">I07 - Comunicaciones satelitales</option>
                <option value="I08">I08 - Otra maquinaria y equipo</option>
                <option value="D01">
                  D01 - Honorarios médicos, dentales y gastos hospitalarios
                </option>
                <option value="D02">
                  D02 - Gastos médicos por incapacidad o discapacidad
                </option>
                <option value="D03">D03 - Gastos funerales</option>
                <option value="D04">D04 - Donativos</option>
                <option value="D05">
                  {" "}
                  D05 - Intereses reales efectivamente pagados por créditos
                  hipotecarios (casa habitación)
                </option>
                <option value="D06">
                  D06 - Aportaciones voluntarias al SAR
                </option>
                <option value="D07">
                  D07 - Primas por seguros de gastos médicos
                </option>
                <option value="D08">
                  D08 - Gastos de transportación escolar obligatoria
                </option>
                <option value="D09">
                  D09 - Depósitos en cuentas para el ahorro, primas que tengan
                  como base planes de pensiones
                </option>
                <option value="D10">
                  D10 - Pagos por servicios educativos (colegiaturas)
                </option>
                <option value="S01">S01 - Sin efectos fiscales</option>
                <option value="CP01">CP01 - Pagos</option>
                <option value="CN01">CN01 - Nómina</option>
              </select>
            </div>
          </div>
          <div className="h-full flex flex-col justify-center items-center space-y-2">
            <div className="w-full flex justify-between items-center space-x-2 px-8">
              <label
                htmlFor={receiverZipCodeRef}
                className="select-none font-semibold"
              >
                Código postal del receptor:
              </label>
              <input
                ref={receiverZipCodeRef}
                {...register("receiverZipCode", { required: true })}
                type="text"
                value={receiverZipCode}
                onChange={(e) => setReceiverZipCode(e.target.value)}
                className={`w-1/2 max-w-xl bg-slate-100 rounded text-center hover:underline hover:underline-offset-4 hover:decoration-dotted focus:outline-none focus:no-underline focus:ring-2 focus:ring-blue-300 ${
                  errors.receiverZipCode && "border-2 border-red-500"
                }`}
              />
            </div>
            <div className="w-full flex justify-between items-center space-x-2 px-8">
              <label
                htmlFor="receiverMethodFormRef"
                className="select-none font-semibold"
              >
                Método de pago:
              </label>
              <select
                ref={receiverMethodForm}
                name="receiverMethodFormRef"
                id="receiverMethodFormRef"
                {...register("receiverMethodForm", { required: true })}
                className={`w-1/2 max-w-xl bg-slate-100 text-center rounded ${
                  errors.receiverMethodForm && "border-2 border-red-500"
                }`}
              >
                <option value=""></option>
                <option value="PUE">PUE - Pago en una sola exhibición</option>
                <option value="PPD">
                  PPD - Pago en parcialidades o diferido
                </option>
              </select>
            </div>
            <div className="w-full flex justify-between items-center space-x-2 px-8">
              <label
                htmlFor="receiverPaymentFormRef"
                className="select-none font-semibold"
              >
                Forma de pago:
              </label>
              <select
                ref={receiverPaymentForm}
                name="receiverPaymentForm"
                id="receiverPaymentForm"
                {...register("receiverPaymentForm", { required: true })}
                className={`w-1/2 max-w-xl bg-slate-100 text-center rounded ${
                  errors.receiverPaymentForm && "border-2 border-red-500"
                }`}
              >
                <option value=""></option>
                <option value="01">01 - Efectivo</option>
                <option value="02">02 - Cheque nominativo</option>
                <option value="03">
                  03 - Transferencia electrónica de fondos
                </option>
                <option value="04">04 - Tarjeta de crédito</option>
                <option value="05">05 - Monedero eletrónico</option>
                <option value="06">06 - Dinero electrónico</option>
                <option value="08">08 - Vales de despensa</option>
                <option value="12">12 - Dación de </option>
                <option value="13">13 - Pago por subrogación</option>
                <option value="14">14 - Pago por consignación</option>
                <option value="15">15 - Condonación</option>
                <option value="17">17 - Compensación</option>
                <option value="23">23 - Novación</option>
                <option value="24">24 - Confusión</option>
                <option value="25">25 - Remisión de deuda</option>
                <option value="26">26 - Prescripción o caducidad</option>
                <option value="27">27 - A satisfacción del acreedor</option>
                <option value="28">28 - Tarjeta de débito</option>
                <option value="29">29 - Tarjeta de servicios</option>
                <option value="30">30 - Aplicación de anticipos</option>
                <option value="31">31 - Intermediario pagos</option>
                <option value="99">99 - Por</option>
              </select>
            </div>
            <div className="w-full flex justify-between items-center space-x-2 px-8">
              <label
                htmlFor="receiverEmailRef"
                className="select-none font-semibold"
              >
                Correo electrónico
              </label>
              <input
                data-tip={errors.receiverEmail && errors.receiverEmail.message}
                ref={receiverEmailRef}
                {...register("receiverEmail", {
                  required: true,
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "Correo no válido",
                  },
                })}
                type="text"
                value={receiverEmail}
                onChange={(e) => setReceiverEmail(e.target.value)}
                className={`w-1/2 max-w-xl bg-slate-100 rounded text-center hover:underline hover:underline-offset-4 hover:decoration-dotted focus:outline-none focus:no-underline focus:ring-2 focus:ring-blue-300 ${
                  errors.receiverEmail && "border-2 border-red-500"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="overflow-y-auto w-full px-24">
          <table className="table-auto overflow-scroll w-full">
            <thead className="bg-blue-600 text-white select-none">
              <tr>
                <th className="border border-slate-400 px-2">Descripcion</th>
                <th className="border border-slate-400 px-2">Cantidad</th>
                <th className="border border-slate-400 px-2">
                  Precio unitario
                </th>
                <th className="border border-slate-400 px-2">Subtotal</th>
                <th className="border border-slate-400 px-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(rawItemsData) && rawItemsData.length > 0 ? (
                rawItemsData.map(
                  (
                    { Description, Quantity, UnitPrice, Subtotal, Total },
                    index
                  ) => (
                    <tr key={index} className="w-full bg-gray-100">
                      <td className="border border-slate-400 px-2 text-center">
                        {Description}
                      </td>
                      <td className="border border-slate-400 px-2 text-center">
                        {Quantity}
                      </td>
                      <td className="border border-slate-400 px-2 text-right">
                        {UnitPrice}
                      </td>
                      <td className="border border-slate-400 px-2 text-right">
                        {Subtotal}
                      </td>
                      <td className="border border-slate-400 px-2 text-right">
                        {Total}
                      </td>
                    </tr>
                  )
                )
              ) : (
                <p>Sin posiciones</p>
              )}
            </tbody>
          </table>
        </div>
        <button
          type="submit"
          className="flex justify-center items-center bg-blue-500 px-4 py-1 rounded text-white hover:bg-blue-600"
        >
          Facturar
          <span className="pl-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
        </button>
      </form>
    </section>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  store.dispatch(response());
});

export default Process;
