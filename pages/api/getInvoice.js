const { soap } = require("strong-soap");

const access = {
  usr: "_TASK2",
  pwd: "Pruebas00",
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const url = "./WSDL/QueryCustomerInvoiceIn.wsdl";
  const invoiceID = req.body.invoiceID;
  const requestArgs = {
    CustomerInvoiceByElementsQuery_sync: {
      CustomerInvoiceSelectionByElements: {
        SelectionByID: {
          InclusionExclusionCode: "I",
          IntervalBoundaryTypeCode: "1",
          LowerBoundaryIdentifier: "1FC-48139",
        },
      },
    },
  };
  soap.createClient(url, {}, (err, client) => {
    let method = client["FindByElements"];
    client.setSecurity(new soap.BasicAuthSecurity(access.usr, access.pwd));
    method(requestArgs, (err, result, envelope, soapHeader) => {
      if (result) {
        res.send(JSON.stringify(result));
      } else {
        console.log("🚀 ~ file: getInvoice.js ~ line 34 ~ method ~ err", err);
      }
    });
  });
}
