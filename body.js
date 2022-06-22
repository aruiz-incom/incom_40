const body = {
  ID: "36587",
  UUID: "00163eae-a1d9-1eeb-b7e9-c93505738a3f",
  BuyerID: "MERCADO LIBRE",
  PostingDate: "2021-07-07T18:08:10Z",
  Name: {
    $attributes: {
      languageCode: "ES",
    },
  },
  ChangeStateID: "20210707192233.7255390",
  DataOriginTypeCode: "1",
  ServiceConfirmationCreationCode: "3",
  Status: {
    PaymentAuthorisationStatusCode: "4",
    PaymentAuthorisationStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "Autorización no requerida",
    },
    ItemListCancellationStatusCode: "1",
    ItemListCancellationStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "No cancelado",
    },
    ItemListCustomerOrderLifeCycleStatusCode: "2",
    ItemListCustomerOrderLifeCycleStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "En proceso",
    },
    ItemListFulfilmentProcessingStatusCode: "3",
    ItemListFulfilmentProcessingStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "Finalizado",
    },
    ItemListPlanningReleaseStatusCode: "6",
    ItemListPlanningReleaseStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "No relevante",
    },
    ItemListExecutionReleaseStatusCode: "6",
    ItemListExecutionReleaseStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "No relevante",
    },
    ConfirmationIssuingStatusCode: "1",
    ConfirmationIssuingStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "No emitido",
    },
    ItemListInvoiceProcessingStatusCode: "1",
    ItemListInvoiceProcessingStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "No iniciado",
    },
    ApprovalStatusCode: "2",
    ApprovalStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "Aprobación no necesaria",
    },
    ItemListProductAvailabilityConfirmationStatusCode: "3",
    ItemListProductAvailabilityConfirmationStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "Confirmado insuficientemente",
    },
    ConsistencyStatusCode: "3",
    ConsistencyStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "Consistente",
    },
    GeneralDataCompletenessStatusCode: "3",
    GeneralDataCompletenessStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "Completado",
    },
    InvoicingBlockingStatusCode: "1",
    InvoicingBlockingStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "No bloqueado",
    },
    FulfilmentBlockingStatusCode: "1",
    FulfilmentBlockingStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "No bloqueado",
    },
    CustomerRequestReleaseStatusCode: "6",
    CustomerRequestReleaseStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "No relevante",
    },
    ReleaseStatusCode: "3",
    ReleaseStatusName: {
      $attributes: {
        languageCode: "ES",
      },
      $value: "Liberado",
    },
  },
  BusinessTransactionDocumentReference: [
    {
      BusinessTransactionDocumentReference: {
        ID: "SC-38012",
        UUID: "00163eae-a1ee-1edb-b7ea-1c8ad85077cf",
        TypeCode: "73",
      },
      BusinessTransactionDocumentRelationshipRoleCode: "2",
    },
  ],
  SalesAndServiceBusinessArea: {
    SalesOrganisationID: "101024",
    DistributionChannelCode: "Z7",
  },
  BillToParty: {
    PartyID: "MOSTRADOR",
    AddressHostUUID: "00163eae-a1ee-1eeb-9e88-dd032dcd5bd5",
    Address: {
      CorrespondenceLanguageCode: "ES",
      DisplayName: [
        {
          FormattedName: {
            $attributes: {
              languageCode: "EN",
            },
            $value: "CLIENTE MOSTRADOR",
          },
        },
      ],
      Name: [
        {
          Name: {
            FirstLineName: "CLIENTE MOSTRADOR",
          },
        },
      ],
      PostalAddress: [
        {
          CountryCode: "MX",
          RegionCode: {
            $attributes: {
              listID: "MX",
            },
            $value: "CMX",
          },
          CityName: "IZTACALCO",
          DistrictName: "TLAZINTLA",
          StreetPostalCode: "08710",
          StreetName: "PLUTARCO ELIAS CALLES",
          HouseID: "276",
          TimeZoneCode: "CST_NA",
        },
      ],
    },
  },
  AccountParty: {
    PartyID: "MOSTRADOR",
    AddressHostUUID: "00163eae-a1ee-1eeb-9e88-dd032dcd5bd5",
    Address: {
      CorrespondenceLanguageCode: "ES",
      DisplayName: [
        {
          FormattedName: {
            $attributes: {
              languageCode: "EN",
            },
            $value: "CLIENTE MOSTRADOR",
          },
        },
      ],
      Name: [
        {
          Name: {
            FirstLineName: "CLIENTE MOSTRADOR",
          },
        },
      ],
      PostalAddress: [
        {
          CountryCode: "MX",
          RegionCode: {
            $attributes: {
              listID: "MX",
            },
            $value: "CMX",
          },
          CityName: "IZTACALCO",
          DistrictName: "TLAZINTLA",
          StreetPostalCode: "08710",
          StreetName: "PLUTARCO ELIAS CALLES",
          HouseID: "276",
          TimeZoneCode: "CST_NA",
        },
      ],
    },
    ContactParty: [
      {
        PartyID: "1005685",
        AddressHostUUID: "00163eae-a1d9-1eeb-b7e9-cb2b230a2a3f",
        Address: {
          CorrespondenceLanguageCode: "ES",
          Email: [
            {
              DefaultIndicator: "true",
            },
          ],
          DisplayName: [
            {
              FormattedName: {
                $attributes: {
                  languageCode: "EN",
                },
                $value: "CLIENTE MOSTRADOR",
              },
            },
          ],
          Name: [
            {
              Name: {
                FirstLineName: "CLIENTE MOSTRADOR",
              },
            },
          ],
          PostalAddress: [
            {
              CountryCode: "MX",
              RegionCode: {
                $attributes: {
                  listID: "MX",
                },
                $value: "CMX",
              },
              CityName: "IZTACALCO",
              DistrictName: "TLAZINTLA",
              StreetPostalCode: "08710",
              StreetName: "PLUTARCO ELIAS CALLES",
              HouseID: "276",
              TimeZoneCode: "CST_NA",
            },
          ],
        },
        MainIndicator: "true",
      },
    ],
  },
  PayerParty: {
    PartyID: "MOSTRADOR",
    AddressHostUUID: "00163eae-a1ee-1eeb-9e88-dd032dcd5bd5",
    Address: {
      CorrespondenceLanguageCode: "ES",
      DisplayName: [
        {
          FormattedName: {
            $attributes: {
              languageCode: "EN",
            },
            $value: "CLIENTE MOSTRADOR",
          },
        },
      ],
      Name: [
        {
          Name: {
            FirstLineName: "CLIENTE MOSTRADOR",
          },
        },
      ],
      PostalAddress: [
        {
          CountryCode: "MX",
          RegionCode: {
            $attributes: {
              listID: "MX",
            },
            $value: "CMX",
          },
          CityName: "IZTACALCO",
          DistrictName: "TLAZINTLA",
          StreetPostalCode: "08710",
          StreetName: "PLUTARCO ELIAS CALLES",
          HouseID: "276",
          TimeZoneCode: "CST_NA",
        },
      ],
    },
  },
  ProductRecipientParty: {
    PartyID: "MOSTRADOR",
    AddressHostUUID: "00163eae-a1ee-1eeb-9e88-dd032dcd5bd5",
    Address: {
      CorrespondenceLanguageCode: "ES",
      DisplayName: [
        {
          FormattedName: {
            $attributes: {
              languageCode: "EN",
            },
            $value: "CLIENTE MOSTRADOR",
          },
        },
      ],
      Name: [
        {
          Name: {
            FirstLineName: "CLIENTE MOSTRADOR",
          },
        },
      ],
      PostalAddress: [
        {
          CountryCode: "MX",
          RegionCode: {
            $attributes: {
              listID: "MX",
            },
            $value: "CMX",
          },
          CityName: "IZTACALCO",
          DistrictName: "TLAZINTLA",
          StreetPostalCode: "08710",
          StreetName: "PLUTARCO ELIAS CALLES",
          HouseID: "276",
          TimeZoneCode: "CST_NA",
        },
      ],
    },
  },
  EmployeeResponsibleParty: {
    PartyID: "8000000295",
    StandardID: [
      {
        $attributes: {
          schemeAgencyID: " ",
        },
        $value: "1107",
      },
    ],
    AddressHostUUID: "00163e6f-1eb2-1ed9-92fd-b2dd59a6ba6f",
    Address: {
      DisplayName: [
        {
          FormattedName: {
            $attributes: {
              languageCode: "EN",
            },
            $value: "JOAN ESPINOZA COIFFIER",
          },
        },
      ],
      Name: [
        {
          Name: {
            FirstLineName: "JOAN ESPINOZA COIFFIER",
          },
        },
      ],
    },
  },
  SellerParty: {
    PartyID: "1",
    StandardID: [
      {
        $attributes: {
          schemeAgencyID: "ZZZ",
        },
        $value: "ICO990224H93",
      },
    ],
    AddressHostUUID: "00163e0b-334a-1ee6-b8b6-9704a47bfdfc",
    Address: {
      Telephone: [
        {
          Number: {
            SubscriberID: "5552436900",
            CountryCode: "MX",
            CountryDiallingCode: "+52",
          },
          FormattedNumberDescription: "+52 5552436900",
          DefaultConventionalPhoneNumberIndicator: "true",
        },
      ],
      Web: [
        {
          URI: "https://incom.mx",
          DefaultIndicator: "true",
        },
      ],
      DisplayName: [
        {
          FormattedName: {
            $attributes: {
              languageCode: "EN",
            },
            $value: "INCOM",
          },
        },
      ],
      Name: [
        {
          Name: {
            FirstLineName: "INSUMOS COMERCIALES DE OCCIDENTE SA DE C",
          },
        },
      ],
      PostalAddress: [
        {
          CountryCode: "MX",
          RegionCode: {
            $attributes: {
              listID: "MX",
            },
            $value: "ZCM",
          },
          CityName: "IZTACALCO",
          DistrictName: "TLAZINTLA",
          StreetPostalCode: "08710",
          StreetPrefixName: "INSUMOS;OCCIDENTE",
          AdditionalStreetPrefixName: "facturacion@incom.mx",
          StreetName: "PLUTARCO ELIAS CALLES",
          HouseID: "276",
          TimeZoneCode: "UTC-6",
        },
      ],
    },
  },
  SalesUnitParty: {
    PartyID: "101024",
    AddressHostUUID: "00163e6f-1eca-1eea-95e5-e3a08393bdc1",
    Address: {
      Telephone: [
        {
          Number: {
            SubscriberID: "5552436900",
            CountryCode: "MX",
            CountryDiallingCode: "+52",
          },
          FormattedNumberDescription: "+52 5552436900",
          DefaultConventionalPhoneNumberIndicator: "true",
        },
      ],
      Web: [
        {
          URI: "https://incom.mx",
          DefaultIndicator: "true",
        },
      ],
      DisplayName: [
        {
          FormattedName: {
            $attributes: {
              languageCode: "EN",
            },
            $value: "TERCEROS",
          },
        },
      ],
      Name: [
        {
          Name: {
            FirstLineName: "INCOM",
          },
        },
      ],
      PostalAddress: [
        {
          CountryCode: "MX",
          RegionCode: {
            $attributes: {
              listID: "MX",
            },
            $value: "CMX",
          },
          CityName: "IZTACALCO",
          DistrictName: "TLAZINTLA",
          StreetPostalCode: "08710",
          StreetPrefixName: "SA",
          StreetName: "PLUTARCO ELIAS CALLES",
          StreetSuffixName: "FC",
          AdditionalStreetSuffixName: "NC",
          HouseID: "276",
          TimeZoneCode: "CST_NA",
        },
      ],
    },
  },
  RequestedFulfillmentPeriodPeriodTerms: {
    StartDateTime: {
      $attributes: {
        timeZoneCode: "CST_NA",
      },
      $value: "2021-07-07T05:00:00Z",
    },
    EndDateTime: {
      $attributes: {
        timeZoneCode: "CST_NA",
      },
      $value: "2021-07-08T05:00:00Z",
    },
  },
  DeliveryTerms: {
    DeliveryPriorityCode: "3",
    PartialDeliveryControlCode: "1",
  },
  PricingTerms: {
    CurrencyCode: "MXN",
    PriceDateTime: {
      $attributes: {
        timeZoneCode: "CST_NA",
      },
      $value: "2021-07-07T18:08:10Z",
    },
    GrossAmountIndicator: "false",
  },
  InvoiceTerms: {
    ProposedInvoiceDate: "2021-07-07",
  },
  Item: [
    {
      ID: "10",
      ProcessingTypeCode: "TAN",
      PostingDate: "2021-07-07T18:08:10Z",
      Description: {
        $attributes: {
          languageCode: "ES",
        },
        $value: "CONECTOR COBRE C/GEL 2CAB AMARILLO",
      },
      FulfilmentPartyCategoryCode: "1",
      Status: {
        ConsistencyStatusCode: "3",
        ConsistencyStatusName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Consistente",
        },
        ProductAvailabilityConfirmationStatusCode: "3",
        ProductAvailabilityConfirmationStatusName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Confirmado insuficientemente",
        },
        FulfilmentDataCompletenessStatusCode: "3",
        FulfilmentDataCompletenessStatusName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Completado",
        },
        InvoicingDataCompletenessStatusCode: "3",
        InvoicingDataCompletenessStatusName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Completado",
        },
        PricingDataCompletenessStatusCode: "3",
        PricingDataCompletenessStatusName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Completado",
        },
        GeneralDataCompletenessStatusCode: "3",
        GeneralDataCompletenessStatusName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Completado",
        },
        FulfilmentProcessingStatusCode: "3",
        FulfilmentProcessingStatusName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Finalizado",
        },
        InvoiceProcessingStatusCode: "1",
        InvoiceProcessingStatusName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "No iniciado",
        },
        CustomerOrderLifeCycleStatusCode: "2",
        CustomerOrderLifeCycleStatusName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "En proceso",
        },
        CancellationStatusCode: "1",
        CancellationStatusName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "No cancelado",
        },
        ApprovalStatusCode: "2",
        ApprovalStatusName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Aprobación no necesaria",
        },
        ReleaseStatusCode: "3",
        ReleaseStatusName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Liberado",
        },
      },
      ItemBusinessTransactionDocumentReference: [
        {
          BusinessTransactionDocumentReference: {
            ID: "SC-38012",
            UUID: "00163eae-a1ee-1edb-b7ea-1c8ad85077cf",
            TypeCode: "73",
            ItemID: "10",
            ItemUUID: "00163eae-a1ee-1edb-b7ea-1c8ad850b7cf",
            ItemTypeCode: "14",
          },
          BusinessTransactionDocumentRelationshipRoleCode: "2",
        },
      ],
      ItemProduct: {
        ProductID: "UY2",
        ProductInternalID: "UY2",
        ProductBuyerID: "ADSCON3MUY2",
        UnitOfMeasure: "XBX",
      },
      ItemDeliveryTerms: {
        DeliveryPriorityCode: "3",
        PartialDeliveryControlCode: "1",
      },
      ItemScheduleLine: [
        {
          ID: "1",
          TypeCode: "1",
          Quantity: {
            $attributes: {
              unitCode: "XBX",
            },
            $value: "2.0",
          },
          QuantityTypeCode: "XBX",
          QuantityTypeName: {
            $attributes: {
              languageCode: "ES",
            },
            $value: "Caja",
          },
          MeasureUnitName: {
            $attributes: {
              languageCode: "ES",
            },
            $value: "Caja",
          },
          MeasureUnitCommonName: {
            $attributes: {
              languageCode: "ES",
            },
            $value: "CAJA",
          },
          DateTimePeriod: {
            StartDateTime: {
              $attributes: {
                timeZoneCode: "CST_NA",
              },
              $value: "2021-07-07T05:00:00Z",
            },
            EndDateTime: {
              $attributes: {
                timeZoneCode: "CST_NA",
              },
              $value: "2021-07-08T05:00:00Z",
            },
          },
        },
        {
          ID: "4",
          TypeCode: "2",
          Quantity: {
            $attributes: {
              unitCode: "XBX",
            },
            $value: "2.0",
          },
          QuantityTypeCode: "XBX",
          QuantityTypeName: {
            $attributes: {
              languageCode: "ES",
            },
            $value: "Caja",
          },
          MeasureUnitName: {
            $attributes: {
              languageCode: "ES",
            },
            $value: "Caja",
          },
          MeasureUnitCommonName: {
            $attributes: {
              languageCode: "ES",
            },
            $value: "CAJA",
          },
          DateTimePeriod: {
            StartDateTime: {
              $attributes: {
                timeZoneCode: "CST_NA",
              },
              $value: "2021-09-16T17:00:01Z",
            },
            EndDateTime: {
              $attributes: {
                timeZoneCode: "CST_NA",
              },
              $value: "2021-09-16T17:00:01Z",
            },
          },
          ProductAvailabilityConfirmationCommitmentCode: "1",
          RelatedID: "1",
        },
      ],
      ProductRecipientItemParty: {
        PartyID: "MOSTRADOR",
        AddressHostUUID: "00163eae-a1ee-1eeb-9e88-dd032dcd5bd5",
        Address: {
          CorrespondenceLanguageCode: "ES",
          DisplayName: [
            {
              FormattedName: {
                $attributes: {
                  languageCode: "EN",
                },
                $value: "CLIENTE MOSTRADOR",
              },
            },
          ],
          Name: [
            {
              Name: {
                FirstLineName: "CLIENTE MOSTRADOR",
              },
            },
          ],
          PostalAddress: [
            {
              CountryCode: "MX",
              RegionCode: {
                $attributes: {
                  listID: "MX",
                },
                $value: "CMX",
              },
              CityName: "IZTACALCO",
              DistrictName: "TLAZINTLA",
              StreetPostalCode: "08710",
              StreetName: "PLUTARCO ELIAS CALLES",
              HouseID: "276",
              TimeZoneCode: "CST_NA",
            },
          ],
        },
      },
      VendorItemParty: {
        PartyID: "1",
        AddressHostUUID: "00163e0b-334a-1ee6-b8b6-9704a47bfdfc",
        Address: {
          Telephone: [
            {
              Number: {
                SubscriberID: "5552436900",
                CountryCode: "MX",
                CountryDiallingCode: "+52",
              },
              FormattedNumberDescription: "+52 5552436900",
              DefaultConventionalPhoneNumberIndicator: "true",
            },
          ],
          Web: [
            {
              URI: "https://incom.mx",
              DefaultIndicator: "true",
            },
          ],
          DisplayName: [
            {
              FormattedName: {
                $attributes: {
                  languageCode: "EN",
                },
                $value: "INCOM",
              },
            },
          ],
          Name: [
            {
              Name: {
                FirstLineName: "INSUMOS COMERCIALES DE OCCIDENTE SA DE C",
              },
            },
          ],
          PostalAddress: [
            {
              CountryCode: "MX",
              RegionCode: {
                $attributes: {
                  listID: "MX",
                },
                $value: "ZCM",
              },
              CityName: "IZTACALCO",
              DistrictName: "TLAZINTLA",
              StreetPostalCode: "08710",
              StreetPrefixName: "INSUMOS;OCCIDENTE",
              AdditionalStreetPrefixName: "facturacion@incom.mx",
              StreetName: "PLUTARCO ELIAS CALLES",
              HouseID: "276",
              TimeZoneCode: "UTC-6",
            },
          ],
        },
      },
      ShipFromItemLocation: {
        LocationID: "101",
        UsedAddress: {
          Telephone: [
            {
              Number: {
                SubscriberID: "5552436900",
                CountryCode: "MX",
                CountryDiallingCode: "+52",
              },
              FormattedNumberDescription: "+52 5552436900",
              DefaultConventionalPhoneNumberIndicator: "true",
            },
          ],
          Web: [
            {
              URI: "https://incom.mx",
              DefaultIndicator: "true",
            },
          ],
          DisplayName: [
            {
              FormattedName: {
                $attributes: {
                  languageCode: "EN",
                },
                $value: "CDMX",
              },
            },
          ],
          Name: [
            {
              Name: {
                FirstLineName: "INCOM",
                SecondLineName: "CDMX",
              },
            },
          ],
          PostalAddress: [
            {
              CountryCode: "MX",
              RegionCode: {
                $attributes: {
                  listID: "MX",
                },
                $value: "DF",
              },
              CityName: "IZTACALCO",
              DistrictName: "TLAZINTLA",
              StreetPostalCode: "08710",
              StreetName: "PLUTARCO ELIAS CALLES",
              HouseID: "276",
              TimeZoneCode: "CST_NA",
            },
          ],
        },
      },
      PriceAndTaxCalculationItem: {
        Status: {
          CalculationStatusCode: "2",
        },
        CountryCode: "MX",
        TaxationCharacteristicsCode: {
          $attributes: {
            listID: "MX",
          },
          $value: "501",
        },
        TaxationCharacteristicsDeterminationMethodCode: "2",
        WithholdingTaxationCharacteristicsCode: {
          $attributes: {
            listID: "MX",
          },
        },
        WithholdingTaxationCharacteristicsDeterminationMethodCode: "2",
        ItemMainPrice: {
          Description: {
            $attributes: {
              languageCode: "EN",
            },
            $value: "List Price",
          },
          TypeCode: {
            $attributes: {
              listID: "2",
            },
            $value: "7PR1",
          },
          CategoryCode: "1",
          PurposeCode: "1000",
          Rate: {
            DecimalValue: "152.98",
            CurrencyCode: "MXN",
            BaseDecimalValue: "1.0",
            BaseMeasureUnitCode: "XBX",
          },
          RateBaseQuantityTypeCode: "XBX",
          CalculationBasis: {
            BaseCode: "3",
            Quantity: {
              $attributes: {
                unitCode: "XBX",
              },
              $value: "2.0",
            },
            QuantityTypeCode: "XBX",
            Amount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
          },
          CalculatedAmount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "305.96",
          },
          RoundingDifferenceAmount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "0.0",
          },
          EffectiveIndicator: "true",
          ManuallyChangedIndicator: "true",
          OriginCode: "3",
        },
        ItemMainTotal: {
          Description: {
            $attributes: {
              languageCode: "EN",
            },
            $value: "Total Item Net Value",
          },
          Rate: {
            DecimalValue: "152.98",
            CurrencyCode: "MXN",
            BaseDecimalValue: "1.0",
            BaseMeasureUnitCode: "XBX",
          },
          RateBaseQuantityTypeCode: "XBX",
          CalculationBasis: {
            BaseCode: "3",
            Quantity: {
              $attributes: {
                unitCode: "XBX",
              },
              $value: "2.0",
            },
            QuantityTypeCode: "XBX",
            Amount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
          },
          CalculatedAmount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "305.96",
          },
          RoundingDifferenceAmount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "0.0",
          },
          EffectiveIndicator: "true",
          OriginCode: "3",
        },
        ItemPriceComponent: [
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7d96a96",
            Description: {
              $attributes: {
                languageCode: "EN",
              },
              $value: "Cost",
            },
            MajorLevelOrdinalNumberValue: "81",
            MinorLevelOrdinalNumberValue: "1",
            TypeCode: {
              $attributes: {
                listID: "2",
              },
              $value: "0008",
            },
            CategoryCode: "1",
            PurposeCode: "4110",
            Rate: {
              DecimalValue: "0.83",
              CurrencyCode: "MXN",
              BaseDecimalValue: "1.0",
              BaseMeasureUnitCode: "ZPZ",
            },
            RateBaseQuantityTypeCode: "ZPZ",
            CalculationBasis: {
              BaseCode: "3",
              Quantity: {
                $attributes: {
                  unitCode: "ZPZ",
                },
                $value: "200.0",
              },
              QuantityTypeCode: "ZPZ",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "0.0",
              },
            },
            CalculatedAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "166.0",
            },
            RoundingDifferenceAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            ManuallyChangedIndicator: "true",
            OriginCode: "2",
          },
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7d98a96",
            Description: {
              $attributes: {
                languageCode: "EN",
              },
              $value: "List Price",
            },
            MajorLevelOrdinalNumberValue: "10",
            MinorLevelOrdinalNumberValue: "1",
            TypeCode: {
              $attributes: {
                listID: "2",
              },
              $value: "7PR1",
            },
            CategoryCode: "1",
            PurposeCode: "1000",
            Rate: {
              DecimalValue: "152.98",
              CurrencyCode: "MXN",
              BaseDecimalValue: "1.0",
              BaseMeasureUnitCode: "XBX",
            },
            RateBaseQuantityTypeCode: "XBX",
            CalculationBasis: {
              BaseCode: "3",
              Quantity: {
                $attributes: {
                  unitCode: "XBX",
                },
                $value: "2.0",
              },
              QuantityTypeCode: "XBX",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "0.0",
              },
            },
            CalculatedAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "305.96",
            },
            RoundingDifferenceAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            EffectiveIndicator: "true",
            ManuallyChangedIndicator: "true",
            OriginCode: "3",
          },
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7d9aa96",
            Description: {
              $attributes: {
                languageCode: "EN",
              },
              $value: "Total Item Net Value",
            },
            MajorLevelOrdinalNumberValue: "50",
            MinorLevelOrdinalNumberValue: "1",
            Rate: {
              DecimalValue: "152.98",
              CurrencyCode: "MXN",
              BaseDecimalValue: "1.0",
              BaseMeasureUnitCode: "XBX",
            },
            RateBaseQuantityTypeCode: "XBX",
            CalculationBasis: {
              BaseCode: "3",
              Quantity: {
                $attributes: {
                  unitCode: "XBX",
                },
                $value: "2.0",
              },
              QuantityTypeCode: "XBX",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "0.0",
              },
            },
            CalculatedAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "305.96",
            },
            RoundingDifferenceAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            EffectiveIndicator: "true",
            OriginCode: "3",
          },
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7d9ca96",
            Description: {
              $attributes: {
                languageCode: "EN",
              },
              $value: "Total Item Net Value",
            },
            MajorLevelOrdinalNumberValue: "78",
            MinorLevelOrdinalNumberValue: "1",
            Rate: {
              DecimalValue: "152.98",
              CurrencyCode: "MXN",
              BaseDecimalValue: "1.0",
              BaseMeasureUnitCode: "XBX",
            },
            RateBaseQuantityTypeCode: "XBX",
            CalculationBasis: {
              BaseCode: "3",
              Quantity: {
                $attributes: {
                  unitCode: "XBX",
                },
                $value: "2.0",
              },
              QuantityTypeCode: "XBX",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "0.0",
              },
            },
            CalculatedAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "305.96",
            },
            RoundingDifferenceAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            EffectiveIndicator: "true",
            OriginCode: "3",
          },
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7d9ea96",
            Description: {
              $attributes: {
                languageCode: "EN",
              },
              $value: "Total Net Value",
            },
            MajorLevelOrdinalNumberValue: "80",
            MinorLevelOrdinalNumberValue: "1",
            Rate: {
              DecimalValue: "152.98",
              CurrencyCode: "MXN",
              BaseDecimalValue: "1.0",
              BaseMeasureUnitCode: "XBX",
            },
            RateBaseQuantityTypeCode: "XBX",
            CalculationBasis: {
              BaseCode: "3",
              Quantity: {
                $attributes: {
                  unitCode: "XBX",
                },
                $value: "2.0",
              },
              QuantityTypeCode: "XBX",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "0.0",
              },
            },
            CalculatedAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "305.96",
            },
            RoundingDifferenceAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            EffectiveIndicator: "true",
            OriginCode: "3",
          },
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7da0a96",
            Description: {
              $attributes: {
                languageCode: "EN",
              },
              $value: "Profit Margin",
            },
            MajorLevelOrdinalNumberValue: "83",
            MinorLevelOrdinalNumberValue: "1",
            Rate: {
              DecimalValue: "69.98",
              CurrencyCode: "MXN",
              BaseDecimalValue: "1.0",
              BaseMeasureUnitCode: "XBX",
            },
            RateBaseQuantityTypeCode: "XBX",
            CalculationBasis: {
              BaseCode: "3",
              Quantity: {
                $attributes: {
                  unitCode: "XBX",
                },
                $value: "2.0",
              },
              QuantityTypeCode: "XBX",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "0.0",
              },
            },
            CalculatedAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "139.96",
            },
            RoundingDifferenceAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            EffectiveIndicator: "true",
            OriginCode: "3",
          },
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7da2a96",
            Description: {
              $attributes: {
                languageCode: "EN",
              },
              $value: "Profit Margin (%)",
            },
            MajorLevelOrdinalNumberValue: "84",
            MinorLevelOrdinalNumberValue: "1",
            Rate: {
              DecimalValue: "45.745",
              MeasureUnitCode: "P1",
            },
            CalculationBasis: {
              BaseCode: "1",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "305.96",
              },
            },
            CalculatedAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "139.96",
            },
            RoundingDifferenceAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            EffectiveIndicator: "true",
            OriginCode: "3",
          },
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7da4a96",
            Description: {
              $attributes: {
                languageCode: "EN",
              },
              $value: "Tax Values",
            },
            MajorLevelOrdinalNumberValue: "90",
            MinorLevelOrdinalNumberValue: "1",
            TypeCode: {
              $attributes: {
                listID: "2",
              },
              $value: "0TTE",
            },
            CategoryCode: "4",
            PurposeCode: "5100",
            Rate: {
              DecimalValue: "0.0",
              MeasureUnitCode: "P1",
            },
            CalculationBasis: {
              BaseCode: "1",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "305.96",
              },
            },
            CalculatedAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            RoundingDifferenceAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            GroupedIndicator: "true",
            OriginCode: "3",
          },
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7da6a96",
            Description: {
              $attributes: {
                languageCode: "EN",
              },
              $value: "Total",
            },
            MajorLevelOrdinalNumberValue: "100",
            MinorLevelOrdinalNumberValue: "1",
            Rate: {
              DecimalValue: "177.46",
              CurrencyCode: "MXN",
              BaseDecimalValue: "1.0",
              BaseMeasureUnitCode: "XBX",
            },
            RateBaseQuantityTypeCode: "XBX",
            CalculationBasis: {
              BaseCode: "3",
              Quantity: {
                $attributes: {
                  unitCode: "XBX",
                },
                $value: "2.0",
              },
              QuantityTypeCode: "XBX",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "0.0",
              },
            },
            CalculatedAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "354.91",
            },
            RoundingDifferenceAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            EffectiveIndicator: "true",
            OriginCode: "3",
          },
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7da8a96",
            Description: {
              $attributes: {
                languageCode: "EN",
              },
              $value: "Item Discounts",
            },
            MajorLevelOrdinalNumberValue: "110",
            MinorLevelOrdinalNumberValue: "1",
            Rate: {
              DecimalValue: "0.0",
              CurrencyCode: "MXN",
              BaseDecimalValue: "1.0",
              BaseMeasureUnitCode: "XBX",
            },
            RateBaseQuantityTypeCode: "XBX",
            CalculationBasis: {
              BaseCode: "3",
              Quantity: {
                $attributes: {
                  unitCode: "XBX",
                },
                $value: "2.0",
              },
              QuantityTypeCode: "XBX",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "0.0",
              },
            },
            CalculatedAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            RoundingDifferenceAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            EffectiveIndicator: "true",
            OriginCode: "3",
          },
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7daaa96",
            Description: {
              $attributes: {
                languageCode: "EN",
              },
              $value: "Header Discounts",
            },
            MajorLevelOrdinalNumberValue: "111",
            MinorLevelOrdinalNumberValue: "1",
            Rate: {
              DecimalValue: "0.0",
              CurrencyCode: "MXN",
              BaseDecimalValue: "1.0",
              BaseMeasureUnitCode: "XBX",
            },
            RateBaseQuantityTypeCode: "XBX",
            CalculationBasis: {
              BaseCode: "3",
              Quantity: {
                $attributes: {
                  unitCode: "XBX",
                },
                $value: "2.0",
              },
              QuantityTypeCode: "XBX",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "0.0",
              },
            },
            CalculatedAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            RoundingDifferenceAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            EffectiveIndicator: "true",
            OriginCode: "3",
          },
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7daca96",
            Description: {
              $attributes: {
                languageCode: "EN",
              },
              $value: "Total Given Discounts (%)",
            },
            MajorLevelOrdinalNumberValue: "112",
            MinorLevelOrdinalNumberValue: "1",
            Rate: {
              DecimalValue: "0.0",
              MeasureUnitCode: "P1",
            },
            CalculationBasis: {
              BaseCode: "1",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "305.96",
              },
            },
            CalculatedAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            RoundingDifferenceAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            EffectiveIndicator: "true",
            OriginCode: "3",
          },
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-da662e1bca97",
            Description: {
              $attributes: {
                languageCode: "EN",
              },
              $value: "Value Added Tax (%)",
            },
            MajorLevelOrdinalNumberValue: "90",
            MinorLevelOrdinalNumberValue: "2",
            TypeCode: {
              $attributes: {
                listID: "2",
              },
              $value: "MX1",
            },
            CategoryCode: "4",
            PurposeCode: "5100",
            Rate: {
              DecimalValue: "16.0",
              MeasureUnitCode: "P1",
            },
            CalculationBasis: {
              BaseCode: "1",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "305.96",
              },
            },
            CalculatedAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "48.95",
            },
            RoundingDifferenceAmount: {
              $attributes: {
                currencyCode: "MXN",
              },
              $value: "0.0",
            },
            EffectiveIndicator: "true",
            OriginCode: "1",
          },
        ],
        ItemProductTaxDetails: [
          {
            UUID: "00163eae-a1d9-1eeb-b7e9-da662e1baa97",
            ProductTax: {
              CountryCode: "MX",
              EventTypeCode: {
                $attributes: {
                  listID: "MX",
                },
                $value: "310",
              },
              TypeCode: {
                $attributes: {
                  listID: "MX",
                },
                $value: "1",
              },
              RateTypeCode: {
                $attributes: {
                  listID: "MX1||2|1",
                },
                $value: "1",
              },
              BaseAmount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "305.96",
              },
              Percent: "16.0",
              BaseQuantity: {
                $attributes: {
                  unitCode: "XBX",
                },
                $value: "2.0",
              },
              BaseQuantityTypeCode: "XBX",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "48.95",
              },
              InternalAmount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "48.95",
              },
              DueCategoryCode: "1",
              DeferredIndicator: "true",
            },
            TransactionCurrencyProductTax: {
              CountryCode: "MX",
              EventTypeCode: {
                $attributes: {
                  listID: "MX",
                },
                $value: "310",
              },
              TypeCode: {
                $attributes: {
                  listID: "MX",
                },
                $value: "1",
              },
              RateTypeCode: {
                $attributes: {
                  listID: "MX1||2|1",
                },
                $value: "1",
              },
              BaseAmount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "305.96",
              },
              Percent: "16.0",
              BaseQuantity: {
                $attributes: {
                  unitCode: "XBX",
                },
                $value: "2.0",
              },
              BaseQuantityTypeCode: "XBX",
              Amount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "48.95",
              },
              InternalAmount: {
                $attributes: {
                  currencyCode: "MXN",
                },
                $value: "48.95",
              },
              DueCategoryCode: "1",
              DeferredIndicator: "true",
            },
          },
        ],
        ItemTaxationTerms: {
          SellerCountryCode: "MX",
          SellerTaxID: {
            $attributes: {
              schemeID: " ",
            },
            $value: "ICO990224H93",
          },
          SellerTaxIdentificationNumberTypeCode: {
            $attributes: {
              listID: "MX",
            },
            $value: "1",
          },
          BuyerCountryCode: "MX",
          BuyerTaxID: {
            $attributes: {
              schemeID: " ",
            },
            $value: "XAXX010101000",
          },
          BuyerTaxIdentificationNumberTypeCode: {
            $attributes: {
              listID: "MX",
            },
            $value: "1",
          },
          TaxDate: "2021-07-07",
        },
      },
    },
  ],
  CashDiscountTerms: {
    Code: "1001",
  },
  PaymentControl: {
    PaymentProcessingCompanyUUID: "00163e09-3ec8-1ed6-9b95-5a083ac5aa4c",
    PaymentProcessingCompanyID: "1",
    PaymentProcessingBusinessPartnerUUID:
      "00163e09-3ec3-1ed6-bede-4588131ff822",
    PaymentProcessingBusinessPartnerID: "MOSTRADOR",
    ResponsibleEmployeeUUID: "00163e6f-1eb2-1ed9-92fd-b2dd5996da6f",
    ResponsibleEmployeeID: "8000000295",
    PropertyMovementDirectionCode: "2",
  },
  PriceAndTaxCalculation: {
    MainPrice: {
      Description: {
        $attributes: {
          languageCode: "EN",
        },
        $value: "List Price",
      },
      TypeCode: {
        $attributes: {
          listID: "2",
        },
        $value: "7PR1",
      },
      CategoryCode: "1",
      PurposeCode: "1000",
      Rate: {
        DecimalValue: "152.98",
        CurrencyCode: "MXN",
        BaseDecimalValue: "1.0",
        BaseMeasureUnitCode: "XBX",
      },
      RateBaseQuantityTypeCode: "XBX",
      CalculationBasis: {
        BaseCode: "3",
        Quantity: {
          $attributes: {
            unitCode: "XBX",
          },
          $value: "2.0",
        },
        QuantityTypeCode: "XBX",
        Amount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
      },
      CalculatedAmount: {
        $attributes: {
          currencyCode: "MXN",
        },
        $value: "305.96",
      },
      RoundingDifferenceAmount: {
        $attributes: {
          currencyCode: "MXN",
        },
        $value: "0.0",
      },
      EffectiveIndicator: "true",
      ManuallyChangedIndicator: "true",
      OriginCode: "3",
    },
    MainTotal: {
      Description: {
        $attributes: {
          languageCode: "EN",
        },
        $value: "Total Item Net Value",
      },
      CalculationBasis: {
        BaseCode: "3",
        Amount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
      },
      CalculatedAmount: {
        $attributes: {
          currencyCode: "MXN",
        },
        $value: "305.96",
      },
      RoundingDifferenceAmount: {
        $attributes: {
          currencyCode: "MXN",
        },
        $value: "0.0",
      },
      EffectiveIndicator: "true",
      OriginCode: "3",
    },
    PriceComponent: [
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7db4a96",
        Description: {
          $attributes: {
            languageCode: "EN",
          },
          $value: "List Price",
        },
        MajorLevelOrdinalNumberValue: "10",
        MinorLevelOrdinalNumberValue: "1",
        TypeCode: {
          $attributes: {
            listID: "2",
          },
          $value: "7PR1",
        },
        TypeName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Precio de lista",
        },
        CategoryCode: "1",
        CategoryName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Precio",
        },
        PurposeCode: "1000",
        PurposeName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "General",
        },
        Rate: {
          DecimalValue: "152.98",
          CurrencyCode: "MXN",
          BaseDecimalValue: "1.0",
          BaseMeasureUnitCode: "XBX",
        },
        RateBaseQuantityTypeCode: "XBX",
        RateBaseQuantityTypeName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Caja",
        },
        CalculationBasis: {
          BaseCode: "3",
          Quantity: {
            $attributes: {
              unitCode: "XBX",
            },
            $value: "2.0",
          },
          QuantityTypeCode: "XBX",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "0.0",
          },
        },
        CalculationBasisBaseName: {
          $attributes: {
            languageCode: "ES",
          },
        },
        CalculationBasisQuantityTypeName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Caja",
        },
        CalculatedAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "305.96",
        },
        RoundingDifferenceAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        EffectiveIndicator: "true",
        ManuallyChangedIndicator: "true",
        OriginCode: "3",
      },
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7db6a96",
        Description: {
          $attributes: {
            languageCode: "EN",
          },
          $value: "Total Item Net Value",
        },
        MajorLevelOrdinalNumberValue: "50",
        MinorLevelOrdinalNumberValue: "2",
        CalculationBasis: {
          BaseCode: "3",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "0.0",
          },
        },
        CalculationBasisBaseName: {
          $attributes: {
            languageCode: "ES",
          },
        },
        CalculatedAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "305.96",
        },
        RoundingDifferenceAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        EffectiveIndicator: "true",
        OriginCode: "3",
      },
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7db8a96",
        Description: {
          $attributes: {
            languageCode: "EN",
          },
          $value: "Total Item Net Value",
        },
        MajorLevelOrdinalNumberValue: "78",
        MinorLevelOrdinalNumberValue: "3",
        CalculationBasis: {
          BaseCode: "3",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "0.0",
          },
        },
        CalculationBasisBaseName: {
          $attributes: {
            languageCode: "ES",
          },
        },
        CalculatedAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "305.96",
        },
        RoundingDifferenceAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        EffectiveIndicator: "true",
        OriginCode: "3",
      },
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7dbaa96",
        Description: {
          $attributes: {
            languageCode: "EN",
          },
          $value: "Total Net Value",
        },
        MajorLevelOrdinalNumberValue: "80",
        MinorLevelOrdinalNumberValue: "4",
        CalculationBasis: {
          BaseCode: "3",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "0.0",
          },
        },
        CalculationBasisBaseName: {
          $attributes: {
            languageCode: "ES",
          },
        },
        CalculatedAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "305.96",
        },
        RoundingDifferenceAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        EffectiveIndicator: "true",
        OriginCode: "3",
      },
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7dbca96",
        Description: {
          $attributes: {
            languageCode: "EN",
          },
          $value: "Cost",
        },
        MajorLevelOrdinalNumberValue: "81",
        MinorLevelOrdinalNumberValue: "5",
        TypeCode: {
          $attributes: {
            listID: "2",
          },
          $value: "0008",
        },
        TypeName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Coste",
        },
        CategoryCode: "1",
        CategoryName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Precio",
        },
        PurposeCode: "4110",
        PurposeName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Valoración de inventarios",
        },
        Rate: {
          DecimalValue: "0.83",
          CurrencyCode: "MXN",
          BaseDecimalValue: "1.0",
          BaseMeasureUnitCode: "ZPZ",
        },
        RateBaseQuantityTypeCode: "ZPZ",
        RateBaseQuantityTypeName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Pieza",
        },
        CalculationBasis: {
          BaseCode: "3",
          Quantity: {
            $attributes: {
              unitCode: "ZPZ",
            },
            $value: "200.0",
          },
          QuantityTypeCode: "ZPZ",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "0.0",
          },
        },
        CalculationBasisBaseName: {
          $attributes: {
            languageCode: "ES",
          },
        },
        CalculationBasisQuantityTypeName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Pieza",
        },
        CalculatedAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "166.0",
        },
        RoundingDifferenceAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        ManuallyChangedIndicator: "true",
        OriginCode: "3",
      },
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7dbea96",
        Description: {
          $attributes: {
            languageCode: "EN",
          },
          $value: "Profit Margin",
        },
        MajorLevelOrdinalNumberValue: "83",
        MinorLevelOrdinalNumberValue: "6",
        CalculationBasis: {
          BaseCode: "3",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "0.0",
          },
        },
        CalculationBasisBaseName: {
          $attributes: {
            languageCode: "ES",
          },
        },
        CalculatedAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "139.96",
        },
        RoundingDifferenceAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        EffectiveIndicator: "true",
        OriginCode: "3",
      },
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7dc0a96",
        Description: {
          $attributes: {
            languageCode: "EN",
          },
          $value: "Profit Margin (%)",
        },
        MajorLevelOrdinalNumberValue: "84",
        MinorLevelOrdinalNumberValue: "7",
        Rate: {
          DecimalValue: "45.745",
          MeasureUnitCode: "P1",
        },
        CalculationBasis: {
          BaseCode: "1",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "305.96",
          },
        },
        CalculationBasisBaseName: {
          $attributes: {
            languageCode: "ES",
          },
        },
        CalculatedAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "139.96",
        },
        RoundingDifferenceAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        EffectiveIndicator: "true",
        OriginCode: "3",
      },
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7dc2a96",
        Description: {
          $attributes: {
            languageCode: "EN",
          },
          $value: "Tax Values",
        },
        MajorLevelOrdinalNumberValue: "90",
        MinorLevelOrdinalNumberValue: "8",
        TypeCode: {
          $attributes: {
            listID: "2",
          },
          $value: "0TTE",
        },
        TypeName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Impuesto",
        },
        CategoryCode: "4",
        CategoryName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Impuesto",
        },
        PurposeCode: "5100",
        PurposeName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Impuesto",
        },
        Rate: {
          DecimalValue: "0.0",
          MeasureUnitCode: "P1",
        },
        CalculationBasis: {
          BaseCode: "1",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "305.96",
          },
        },
        CalculationBasisBaseName: {
          $attributes: {
            languageCode: "ES",
          },
        },
        CalculatedAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        RoundingDifferenceAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        GroupedIndicator: "true",
        OriginCode: "3",
      },
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7dc6a96",
        Description: {
          $attributes: {
            languageCode: "EN",
          },
          $value: "Total",
        },
        MajorLevelOrdinalNumberValue: "100",
        MinorLevelOrdinalNumberValue: "10",
        CalculationBasis: {
          BaseCode: "3",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "0.0",
          },
        },
        CalculationBasisBaseName: {
          $attributes: {
            languageCode: "ES",
          },
        },
        CalculatedAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "354.91",
        },
        RoundingDifferenceAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        EffectiveIndicator: "true",
        OriginCode: "3",
      },
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7dc8a96",
        Description: {
          $attributes: {
            languageCode: "EN",
          },
          $value: "Item Discounts",
        },
        MajorLevelOrdinalNumberValue: "110",
        MinorLevelOrdinalNumberValue: "11",
        CalculationBasis: {
          BaseCode: "3",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "0.0",
          },
        },
        CalculationBasisBaseName: {
          $attributes: {
            languageCode: "ES",
          },
        },
        CalculatedAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        RoundingDifferenceAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        EffectiveIndicator: "true",
        OriginCode: "3",
      },
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7dcaa96",
        Description: {
          $attributes: {
            languageCode: "EN",
          },
          $value: "Header Discounts",
        },
        MajorLevelOrdinalNumberValue: "111",
        MinorLevelOrdinalNumberValue: "12",
        CalculationBasis: {
          BaseCode: "3",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "0.0",
          },
        },
        CalculationBasisBaseName: {
          $attributes: {
            languageCode: "ES",
          },
        },
        CalculatedAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        RoundingDifferenceAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        EffectiveIndicator: "true",
        OriginCode: "3",
      },
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-d4c0f7dcca96",
        Description: {
          $attributes: {
            languageCode: "EN",
          },
          $value: "Total Given Discounts (%)",
        },
        MajorLevelOrdinalNumberValue: "112",
        MinorLevelOrdinalNumberValue: "13",
        Rate: {
          DecimalValue: "0.0",
          MeasureUnitCode: "P1",
        },
        CalculationBasis: {
          BaseCode: "1",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "305.96",
          },
        },
        CalculationBasisBaseName: {
          $attributes: {
            languageCode: "ES",
          },
        },
        CalculatedAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        RoundingDifferenceAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        EffectiveIndicator: "true",
        OriginCode: "3",
      },
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-da662e1cea97",
        Description: {
          $attributes: {
            languageCode: "EN",
          },
          $value: "Value Added Tax (%)",
        },
        MajorLevelOrdinalNumberValue: "90",
        MinorLevelOrdinalNumberValue: "9",
        TypeCode: {
          $attributes: {
            listID: "2",
          },
          $value: "MX1",
        },
        TypeName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Impuesto sobre el valor añadido (%)",
        },
        CategoryCode: "4",
        CategoryName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Impuesto",
        },
        PurposeCode: "5100",
        PurposeName: {
          $attributes: {
            languageCode: "ES",
          },
          $value: "Impuesto",
        },
        Rate: {
          DecimalValue: "16.0",
          MeasureUnitCode: "P1",
        },
        CalculationBasis: {
          BaseCode: "1",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "305.96",
          },
        },
        CalculationBasisBaseName: {
          $attributes: {
            languageCode: "ES",
          },
        },
        CalculatedAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "48.95",
        },
        RoundingDifferenceAmount: {
          $attributes: {
            currencyCode: "MXN",
          },
          $value: "0.0",
        },
        EffectiveIndicator: "true",
        OriginCode: "3",
      },
    ],
    ProductTaxDetails: [
      {
        UUID: "00163eae-a1d9-1eeb-b7e9-da662e1b8a97",
        TaxationCharacteristicsCode: {
          $attributes: {
            listID: "MX",
          },
          $value: "501",
        },
        TransactionCurrencyProductTax: {
          CountryCode: "MX",
          EventTypeCode: {
            $attributes: {
              listID: "MX",
            },
            $value: "310",
          },
          TypeCode: {
            $attributes: {
              listID: "MX",
            },
            $value: "1",
          },
          RateTypeCode: {
            $attributes: {
              listID: "MX1||2|1",
            },
            $value: "1",
          },
          BaseAmount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "305.96",
          },
          Percent: "16.0",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "48.95",
          },
          InternalAmount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "48.95",
          },
          DueCategoryCode: "1",
        },
        ProductTax: {
          CountryCode: "MX",
          EventTypeCode: {
            $attributes: {
              listID: "MX",
            },
            $value: "310",
          },
          TypeCode: {
            $attributes: {
              listID: "MX",
            },
            $value: "1",
          },
          RateTypeCode: {
            $attributes: {
              listID: "MX1||2|1",
            },
            $value: "1",
          },
          BaseAmount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "305.96",
          },
          Percent: "16.0",
          Amount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "48.95",
          },
          InternalAmount: {
            $attributes: {
              currencyCode: "MXN",
            },
            $value: "48.95",
          },
          DueCategoryCode: "1",
        },
      },
    ],
    TaxationTerms: {
      SellerCountryCode: "MX",
      SellerTaxID: {
        $attributes: {
          schemeID: " ",
        },
        $value: "ICO990224H93",
      },
      SellerTaxIdentificationNumberTypeCode: {
        $attributes: {
          listID: "MX",
        },
        $value: "1",
      },
      BuyerCountryCode: "MX",
      BuyerTaxID: {
        $attributes: {
          schemeID: " ",
        },
        $value: "XAXX010101000",
      },
      BuyerTaxIdentificationNumberTypeCode: {
        $attributes: {
          listID: "MX",
        },
        $value: "1",
      },
      TaxDate: "2021-07-07",
    },
  },
};
