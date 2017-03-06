export const ProductFieldsName = "ProductFields";

export const ProductFields =  `
fragment ${ProductFieldsName} on Product {
  id
  price,
  productName,
  photos,
  category,
  material,
  description,
  company
} 
`;