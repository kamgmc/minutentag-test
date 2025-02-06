export const getInt = (value) => {
  return parseInt(value, 10);
};

export const getPriceFromCents = (cents) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);

export const formatBrandToUrl = (brand) =>
  brand.trim().toLowerCase().replace(/\s+/g, "-");
