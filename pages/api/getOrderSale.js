import { wrapper } from "../../store/store";
import { openStep } from "../../store/stepSlice";
import StoreInvoiceData from "../../utils/storeInvoiceData";
import { CreateCFDI40 } from "./facturama";

const { soap } = require("strong-soap");

const access = {
  usr: "ARUIZ2",
  pwd: "Pruebas00",
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const url = "./WSDL/QuerySalesOrderIn.wsdl";
  const orderNumber = req.body.order;
  const amount = req.body.amount.replace(/[^0-9.]/g, "");
  let salesOrderTotalAmount = 0;
  const requestArgs = {
    SalesOrderByElementsQuery_sync: {
      SalesOrderSelectionByElements: {
        SelectionByID: {
          InclusionExclusionCode: "I",
          IntervalBoundaryTypeCode: "1",
          LowerBoundaryID: orderNumber,
        },
      },
      ProcessingConditions: {
        QueryHitsMaximumNumberValue: 30,
        QueryHitsUnlimitedIndicator: false,
      },
    },
  };

  soap.createClient(url, {}, (err, client) => {
    let method = client["FindByElements"];
    client.setSecurity(new soap.BasicAuthSecurity(access.usr, access.pwd));
    method(requestArgs, function (err, result, envelope, soapHeader) {
      if (result.ProcessingConditions.ReturnedQueryHitsNumberValue > 0) {
        const salesOrder = result.SalesOrder[0];
        let salesOrderTotalAmount = 0;
        salesOrder.Item.map(({ PriceAndTaxCalculationItem }) => {
          let itemNetPrice = parseFloat(
            PriceAndTaxCalculationItem.ItemProductTaxDetails[0].ProductTax
              .BaseAmount.$value
          );
          let itemTax = parseFloat(
            PriceAndTaxCalculationItem.ItemProductTaxDetails[0].ProductTax
              .Amount.$value
          );
          salesOrderTotalAmount += itemNetPrice;
          salesOrderTotalAmount += itemTax;
        });
        console.log(parseFloat(salesOrderTotalAmount).toFixed(2));
        console.log(parseFloat(amount).toFixed(2));
        if (
          parseFloat(salesOrderTotalAmount).toFixed(2) ===
          parseFloat(amount).toFixed(2)
        ) {
          switch (salesOrder.Status.ItemListCustomerOrderLifeCycleStatusCode) {
            case "1":
              // Status order in SAP: Abierto
              res.send({ status: 1, data: "" });
              break;
            case "2":
              // Status order in SAP: En proceso
              const invoiceData = StoreInvoiceData(salesOrder);
              res.send({
                status: 2,
                data: invoiceData,
                salesOrder: salesOrder,
              });
              break;
            case "3":
              // Status order in SAP: Completado
              res.send(3);
              break;
            case "4":
              // Status order in SAP: En preparación
              res.send(4);
              break;
            default:
              res.send(JSON.stringify("Factura inconsistente."));
              break;
          }
        } else {
          res.send(JSON.stringify("Not matched"));
        }
      } else {
        res.send(JSON.stringify("Pedido no encontrado"));
      }
    });
  });
}
