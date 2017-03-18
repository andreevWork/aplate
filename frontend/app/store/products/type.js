export const ProductMainFieldsName = "ProductMainFields";

export const ProductMainFields =  `
fragment ${ProductMainFieldsName} on Product {
  id
  price,
  productName,
  photos,
  category,
  material,
  company
} 
`;

export const ProductOptionalFieldsName = "ProductOptionalFields";

export const ProductOptionalFields =  `
fragment ${ProductOptionalFieldsName} on Product {
  description
} 
`;
