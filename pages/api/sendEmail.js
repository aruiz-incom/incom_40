const valuesFacturama = {
  token: "SW5jb20yMDIxOlBydWViYXMwMA==",
  url: "https://apisandbox.facturama.mx/",
};

const SendEmail = (Id, receiverEmail) => {
  const cfdiType = "issued";
  // const email = "aruiz@it4u.com.mx";
  // const invoiceID = "sBhQc2_HY0ulow-qHCoF6A2";
  const header = new Headers();
  header.set("Authorization", "Basic " + valuesFacturama.token);
  header.append("Content-Type", "application/json");
  const url =
    valuesFacturama.url +
    `cfdi?cfdiType=${cfdiType}&cfdiId=${Id}&email=${receiverEmail}`;

  console.log(url);
  // try {
  //   fetch(url, {
  //     method: "POST",
  //     credentials: "include",
  //     headers: header,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // } catch (err) {
  //   console.log(err);
  // }
};

export default SendEmail;
