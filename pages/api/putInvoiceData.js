import SendEmail from "./sendEmail";

const { soap } = require("strong-soap");

const access = {
  usr: "_TASK2",
  pwd: "Pruebas00",
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    req.status(405).send({ message: "OnlyPOST requests allowed." });
    return;
  }
  const url = "./WSDL/ManageSalesOrderIn.wsdl";
  const orderID = req.body.orderID;
  const id = req.body.id;
  const uuid = req.body.Uuid;
  const date = req.body.Date;
  const requestArgs = {
    SalesOrderBundleMaintainRequest_sync: {
      BasicMessageHeader: {},
      SalesOrder: {
        $attributes: { actionCode: "04" },
        ID: orderID,
        FacturaWebID: id,
        FacturaWebUUID: uuid,
      },
    },
  };
  soap.createClient(url, {}, (err, client) => {
    let method = client["MaintainBundle"];
    client.setSecurity(new soap.BasicAuthSecurity(access.usr, access.pwd));
    method(requestArgs, (err, result, envelope, soapHeader) => {
      if (result) {
        res.send(JSON.stringify(result));
      }
    });
  });
}
