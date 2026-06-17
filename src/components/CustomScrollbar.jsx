import { useEffect } from "react";

export default function CustomScrollbar() {
  useEffect(() => {
    // Inject custom scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
      /* Width */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #3b82f6, #06b6d4);
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #2563eb, #0891b2);
      }

      /* Dark mode support */
      .dark ::-webkit-scrollbar-track {
        background: #1e293b;
      }

      .dark ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #3b82f6, #06b6d4);
      }

      /* Firefox */
      * {
        scrollbar-width: thin;
        scrollbar-color: #3b82f6 #f1f1f1;
      }

      .dark * {
        scrollbar-color: #3b82f6 #1e293b;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}