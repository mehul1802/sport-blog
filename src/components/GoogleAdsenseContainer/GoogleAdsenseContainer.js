import { useEffect } from 'react';

const GoogleAdsenseContainer = ({ client, slot }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);


  return (
    <div style={{ overflow: 'hidden', minWidth: "320px" }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3226835656747352"
        data-ad-slot="1520952612" 
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

export default GoogleAdsenseContainer;
