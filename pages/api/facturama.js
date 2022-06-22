import SendEmail from "./sendEmail";

const valuesFacturama = {
  token: "SW5jb20yMDIxOlBydWViYXMwMA==",
  url: "https://apisandbox.facturama.mx/",
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const url = valuesFacturama.url + "3/cfdis";
  const header = new Headers();
  header.set("Authorization", "Basic " + valuesFacturama.token);
  header.append("Content-Type", "application/json");
  const jsonBody = req.body;

  try {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: header,
      body: JSON.stringify(jsonBody),
    })
      .then((response) => response.json())
      .then((data) => res.send(JSON.stringify(data)))
      .catch((err) => res.send(JSON.stringify(err)));
  } catch (err) {}
}

// export const CreateCFDI40 = (jsonBody, orderID, receiverEmail) => {
//   const url = valuesFacturama.url + "3/cfdis";
//   const header = new Headers();
//   header.set("Authorization", "Basic " + valuesFacturama.token);
//   header.append("Content-Type", "application/json");

//   try {
//     fetch(url, {
//       method: "POST",
//       credentials: "include",
//       headers: header,
//       body: JSON.stringify(jsonBody),
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         const Id = data.Id;
//         const Complement = data.Complement;
//         if (Id && Complement) {
//           const body = {
//             orderID: orderID,
//             id: Id,
//             Uuid: Complement.TaxStamp.Uuid,
//             Date: Complement.TaxStamp.Date,
//           };
//           try {
//             fetch("/api/putInvoiceData", {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify(body),
//             })
//               .then((response) => {
//                 if (response.ok) {
//                   return response.json();
//                 }
//               })
//               .then((responseData) => {
//                 SendEmail(Id, receiverEmail);
//               })
//               .catch((err) => console.log(err));
//           } catch (err) {
//             console.log(err);
//           }
//         } else {
//           return JSON.stringify(data);
//         }
//       })
//       .catch((err) => console.log(err));
//   } catch (err) {
//     console.log(err);
//   }
// };
