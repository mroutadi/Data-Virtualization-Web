import { ReactSpreadsheetImport } from "react-spreadsheet-import";

export function FileUploader({ isOpen, setIsOpen, setData, fields }) {
  return (
    <ReactSpreadsheetImport
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onSubmit={(data) => setData(data)}
      fields={fields}
    />
  );
}
