'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      {/* lazyOnload, not afterInteractive: gtag is 150KB and blocked the main
          thread for ~214ms during hydration. It still runs on every page view,
          just after the load event, so conversion tracking is unaffected. */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-812917011"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-812917011');
        `}
      </Script>
    </>
  );
}