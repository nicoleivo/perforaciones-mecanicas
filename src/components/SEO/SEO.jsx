// src/components/SEO/SEO.jsx
import { useEffect } from "react";

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    document.title =
      title ||
      "Perforaciones Cucchietti - Especialistas en Perforaciones Mecánicas";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content =
        description ||
        "Perforación para colocación de cable y electrodo, medición y certificación de puesta tierra en Buenos Aires y CABA";
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.content =
        keywords ||
        "perforaciones, mecánicas, electrodo, puesta a tierra, Buenos Aires, CABA, certificación";
    }
  }, [title, description, keywords]);

  return null;
};

export default SEO;
