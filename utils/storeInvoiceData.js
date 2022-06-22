import getSATUnit from "./units";

const StoreInvoiceData = (salesOrder) => {
  const jsonItems = [];
  const item = salesOrder.Item;
  item.map(
    ({
      Description,
      ItemProduct,
      ItemScheduleLine,
      PriceAndTaxCalculationItem,
    }) => {
      let productID = ItemProduct.ProductID;
      let description = Description.$value;
      let unit = getSATUnit(ItemProduct.UnitOfMeasure);
      let unitCode;
      if (unit !== undefined) {
        unitCode = unit;
      } else {
        unitCode = "EA";
      }
      let quantity = ItemScheduleLine[0].Quantity.$value;
      let unitPrice;
      let subtotal;
      let total;
      let base;
      let grandTotal;
      const ItemPriceComponent = PriceAndTaxCalculationItem.ItemPriceComponent;
      ItemPriceComponent.every((priceComponent) => {
        if (priceComponent.Description.$value === "Total Net Value") {
          unitPrice = priceComponent.Rate.DecimalValue;
          subtotal = priceComponent.CalculatedAmount.$value;
          base = priceComponent.CalculatedAmount.$value;
          return false;
        }
        return true;
      });
      ItemPriceComponent.every((priceComponent) => {
        if (priceComponent.Description.$value === "Total") {
          grandTotal = priceComponent.CalculatedAmount.$value;
          return false;
        }
        return true;
      });
      ItemPriceComponent.every((priceComponent) => {
        if (priceComponent.Description.$value === "Value Added Tax (%)") {
          total = priceComponent.CalculatedAmount.$value;
          return false;
        }
        return true;
      });
      let json = {
        ProductCode: "01010101",
        Description: description,
        UnitCode: unitCode,
        Quantity: quantity,
        UnitPrice: unitPrice,
        Subtotal: subtotal,
        TaxObject: "02",
        Taxes: [
          {
            Total: total,
            Name: "IVA",
            Base: base,
            Rate: 0.16,
            IsRetention: false,
          },
        ],
        Total: grandTotal,
      };
      jsonItems.push(json);
    }
  );
  return jsonItems;
};

export default StoreInvoiceData;
