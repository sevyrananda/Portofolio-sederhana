import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  FiDownload,
  FiZoomIn,
  FiZoomOut,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfPreview({ isOpen, onClose, darkMode }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.1, 0.8));
  };

  const goToPreviousPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
  };

  if (!isOpen) return null;

  const isMobile = window.innerWidth < 768;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div
        className={`w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl ${
          darkMode ? "bg-slate-900" : "bg-white"
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-start justify-between px-4 sm:px-6 py-4 border-b ${
            darkMode ? "border-slate-700" : "border-slate-200"
          }`}
        >
          <div>
            <h2
              className={`text-lg font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Curriculum Vitae
            </h2>

            <p
              className={`text-sm ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Preview resume before downloading
            </p>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            <FiX />
          </button>
        </div>

        <div
          className={`flex flex-wrap items-center justify-center sm:justify-between gap-3 px-4 sm:px-6 py-3 border-b ${
            darkMode ? "border-slate-700" : "border-slate-200"
          }`}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className={`p-2 rounded-lg transition ${
                darkMode
                  ? "bg-slate-700 hover:bg-slate-600 text-white"
                  : "bg-slate-200 hover:bg-slate-300 text-slate-800"
              }`}
            >
              <FiZoomOut />
            </button>

            <span
              className={`w-14 text-center text-sm font-medium ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {Math.round(scale * 100)}%
            </span>

            <button
              onClick={handleZoomIn}
              className={`p-2 rounded-lg transition ${
                darkMode
                  ? "bg-slate-700 hover:bg-slate-600 text-white"
                  : "bg-slate-200 hover:bg-slate-300 text-slate-800"
              }`}
            >
              <FiZoomIn />
            </button>
          </div>

          <a
            href="/CV.pdf"
            download
            className="
      flex items-center gap-2
      px-4 py-2 rounded-lg
      bg-emerald-600 text-white
      hover:bg-emerald-700 transition
      font-medium
    "
          >
            <FiDownload />
            <span>Download CV</span>
          </a>
        </div>

        {/* PDF */}
        <div
          className={`flex-1 overflow-auto p-4 ${
            darkMode ? "bg-slate-800" : "bg-slate-100"
          }`}
        >
          <Document
            file="/CV.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <p
                className={`text-center ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Loading PDF...
              </p>
            }
            error={
              <p className="text-center text-red-500">
                Failed to load PDF file.
              </p>
            }
          >
            <div className="flex justify-center">
              <div className="shadow-2xl rounded-lg overflow-hidden">
                <Page
                  pageNumber={pageNumber}
                  scale={!isMobile ? scale : undefined}
                  width={isMobile ? 320 : undefined}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </div>
            </div>
          </Document>
        </div>

        {/* Footer */}
        <div
          className={`flex items-center justify-center gap-4 px-4 py-4 border-t ${
            darkMode ? "border-slate-700" : "border-slate-200"
          }`}
        >
          <button
            onClick={goToPreviousPage}
            disabled={pageNumber <= 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed ${
              darkMode
                ? "bg-slate-700 hover:bg-slate-600 text-white"
                : "bg-slate-200 hover:bg-slate-300 text-slate-800"
            }`}
          >
            <FiChevronLeft />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <span
            className={`text-sm font-medium ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Page {pageNumber} of {numPages || "--"}
          </span>

          <button
            onClick={goToNextPage}
            disabled={!numPages || pageNumber >= numPages}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="hidden sm:inline">Next</span>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
