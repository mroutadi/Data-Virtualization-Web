import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function DomToPdf({ divEl, cb }) {
  const doc = new jsPDF({
    format: "a4",
    orientation: "landscape",
    compress: true,
  });
  let promises = [];
  for (let i = 0; i < divEl.children.length; i++) {
    promises.push(html2canvas(divEl.children[i]));
  }
  Promise.all(promises)
    .then((values) => {
      values.forEach((canvas, index) => {
        if (index !== 0) {
          doc.addPage("a4", "landscape");
        }
        var imgData = canvas.toDataURL("image/png");
        doc.addImage(imgData, "PNG", 0, 0, 300, 200);
      });
    })
    .then(function () {
      doc.save("download.pdf");
      cb();
    });
}
