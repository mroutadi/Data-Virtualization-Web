import { useState } from "react";
import { ReactSpreadsheetImport } from "react-spreadsheet-import";
import { Histogram } from "../D3/Histogram";

const fields = [
  {
    label: "Good",
    key: "good",
    alternateMatches: ["product"],
    fieldType: {
      type: "input",
    },
    example: "T-Shirt",
    validations: [
      {
        rule: "required",
        errorMessage: "product name is required",
        level: "error",
      },
    ],
  },
  {
    label: "Price",
    key: "price",
    fieldType: {
      type: "input",
    },
    example: "50000",
    validations: [
      {
        rule: "required",
        errorMessage: "Price is required",
        level: "error",
      },
    ],
  },
];

export function FileUploader() {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState(null);

  return (
    <div>
      <ReactSpreadsheetImport
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(data) => setData(data)}
        fields={fields}
      />
      {data && (
        <svg>
          <Histogram
            data={data?.validData}
            options={{
              value: (d) => +d?.price,
              label: "test",
              height: 500,
              color: "steelblue",
            }}
          />
        </svg>
      )}
    </div>
  );
}
