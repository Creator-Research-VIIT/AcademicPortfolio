import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Load gtag.js script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-CN89Y7K7BV";
    document.head.appendChild(script1);

    // Init GA
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CN89Y7K7BV');
    `;
    document.head.appendChild(script2);
  }, []);

  return null; // no visible UI
};

export default GoogleAnalytics;