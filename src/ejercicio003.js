/*Este método sirve para insertar varios documentos en la colección de una bas de datos.*/
db.inventory.insertMany([
    { item: "agenda", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "cuaderno", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "papel", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "C" },
    { item: "archivador", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "carpeta", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);