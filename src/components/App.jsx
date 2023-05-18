import React from 'react';
// import XLSX from 'xlsx';
// import ExcelJS from 'exceljs';
// import fs from 'fs/promises';

// function handleFileUpload(event) {
//   const file = event.target.files[0];
//   const reader = new FileReader();

//   reader.onload = function (e) {
//     const data = new Uint8Array(e.target.result);
//     const workbook = XLSX.read(data, { type: 'array' });

//     // Обрабатывайте данные из документа
//     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//     const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

//     console.log(jsonData);
//   };

//   reader.readAsArrayBuffer(file);
// }

// const filePath = './public/excel/testTable.xlsx';
// function readExcelFile() {
//   const workbook = new ExcelJS.Workbook();

//   workbook.xlsx
//     .readFile(filePath)
//     .then(() => {
//       const worksheet = workbook.getWorksheet(1);

//       const data = [];

//       worksheet.eachRow((row, rowNumber) => {
//         const rowData = [];

//         row.eachCell((cell, colNumber) => {
//           rowData.push(cell.value);
//         });

//         data.push(rowData);
//       });

//       // Обработайте данные или сохраните их в базу данных
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log('Ошибка при чтении файла:', error);
//     });
// }

// readExcelFile();

export default function App() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);

    // const workbook = new ExcelJS.Workbook();

    // workbook.xlsx
    //   .readFile(file)
    //   .then(() => {
    //     const worksheet = workbook.getWorksheet(1);

    //     // Обрабатывайте данные из документа
    //     worksheet.eachRow((row, rowNumber) => {
    //       row.eachCell((cell, colNumber) => {
    //         console.log(`Значение ячейки (${rowNumber}, ${colNumber}): ${cell.value}`);
    //       });
    //     });
    //   })
    //   .catch((error) => {
    //     console.log('Ошибка при чтении файла:', error);
    //   });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}
