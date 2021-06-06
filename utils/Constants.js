module.exports = {
  RESPONSE_CODES: {
    REQUEST_OK: 200,
    BAD_REQUEST: 400,
    SERVER_ERROR: 500,
    UN_AUTHORIZED: 401,
    NOT_FOUND: 404,
  },
  filterList: [
    {
      label: "All Products",
      value: "all_products",
    },
    {
      label: "Products",
      value: "products",
    },
    // {
    //   label: "Category",
    //   value: "category",
    // },
    // {
    //   label: "Attributes",
    //   value: "attributes",
    // },
    // {
    //   label: "Tags",
    //   value: "tags",
    // },
    // {
    //   label: "SKUs",
    //   value: "SKUs",
    // },
    // {
    //   label: "On sale products",
    //   value: "On_sale_products",
    // },
  ],
  DiscountConditions: [
    {
      label: "Subtotal",
      value: "cart_subtotal",
    },
  ],
  DiscountRulesOptions: [
    {
      operator: "less_than",
      label: "Less than(<)",
      arithmaticOperator: "<",
    },
    {
      operator: "greater_than_or_equal",
      label: "Greater than or equal (>=)",
      arithmaticOperator: ">=",
    },
    {
      operator: "less_than_or_equal",
      label: "Less than or equal (<=)",
      arithmaticOperator: "<=",
    },
    {
      operator: "greater_than",
      label: "Greater than(>)",
      arithmaticOperator: ">",
    },
  ],
  DiscountTypesOptions: [
    {
      label: "Percentage discount",
      value: "percentage",
    },
    {
      label: "Fixed discount",
      value: "flat",
    },
  ],
  abstractKeys: [
    "product_adjustments",
    "cart_adjustments",
    "buy_x_get_x_adjustments",
    "buy_x_get_y_adjustments",
    "bulk_adjustments",
    "set_adjustments",
    "other_discounts",
  ],
  filterMethods: [
    {
      label: "In List",
      value: "in_list",
    },
    {
      label: "Not In List",
      value: "not_in_list",
    },
  ],
  condition_calculate_from_list: [
    {
      label: "Count all items in cart",
      value: "from_cart",
    },
    {
      label: "Only count items chosen in the filters set for this rule",
      value: "from_filter",
    },
  ],
};
