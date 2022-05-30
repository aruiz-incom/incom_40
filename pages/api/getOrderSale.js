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
  const amount = req.body.amount;
  console.log(amount);
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
        if (salesOrderTotalAmount === parseFloat(amount)) {
          res.send(JSON.stringify("Finded and matched"));
        } else {
          res.send(JSON.stringify("Not matched"));
        }
      } else {
        res.send(JSON.stringify("Pedido no encontrado"));
      }
    });
  });
}
