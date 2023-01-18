import { useState } from "react";
import { ReactSpreadsheetImport } from "react-spreadsheet-import";
import { Histogram } from "../D3/Histogram";
import styles from "./styles.module.scss";

export function FileUploader({
  className = "",
  isActive = false,
  keyColTitle = "key",
  valColTitle = "value",
}) {
  const fields = [
    {
      label: keyColTitle,
      key: keyColTitle,
      fieldType: {
        type: "input",
      },
      example: "Key",
      validations: [
        {
          rule: "required",
          errorMessage: `${keyColTitle} is required`,
          level: "error",
        },
      ],
    },
    {
      label: valColTitle,
      key: valColTitle,
      fieldType: {
        type: "input",
      },
      example: "Value",
      validations: [
        {
          rule: "required",
          errorMessage: `${valColTitle} is required`,
          level: "error",
        },
      ],
    },
  ];
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState(null);

  return (
    <div className={`${className} ${isActive ? "" : styles.FileUpload__hidden}`}>
      <ReactSpreadsheetImport
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(data) => setData(data)}
        fields={fields}
      />
      {data && (
        <svg className={styles.FileUpload__svgContainer}>
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
