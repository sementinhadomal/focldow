/**
 * VIP / Creator Media Digital Checkout & Delivery Hub Configuration
 * Base Currency: EUR (€) - All Stripe Payment Links are fixed in EUR.
 */

window.APP_CONFIG = {
  defaultModel: "exclusive",
  defaultLang: "pt-PT",
  baseCurrency: "EUR",
  
  // Approximate Live Exchange Rates relative to 1 EUR
  exchangeRates: {
    EUR: 1.0,
    USD: 1.09 // 1 EUR = 1.09 USD
  },

  models: {
    exclusive: {
      id: "exclusive",
      name: "Sophia VIP",
      brandName: "FÕCL MEDIA — Creator Series",
      username: "@sophia_official",
      avatar: "./assets/avatar.jpg",
      banner: "./assets/banner.jpg",
      verified: true,
      bio: {
        "pt-PT": "Dashboard oficial de entrega de conteúdos digitais, pacotes de fotos HD e coleções de vídeo de alta resolução.",
        "en": "Official digital product delivery dashboard for exclusive HD media packs and video collections.",
        "fr": "Tableau de bord officiel de livraison de médias numériques HD et collections vidéo.",
        "it": "Dashboard ufficiale per la consegna di pacchetti multimediali HD e collezioni video.",
        "de": "Offizielles Auslieferungs-Dashboard für exklusive HD-Medienpakete und Videosammlungen.",
        "es": "Panel oficial de entrega de contenidos digitales, paquetes de fotos HD y colecciones de video."
      }
    }
  },

  // Base Prices fixed in Euros (€)
  packages: [
    {
      id: "starter",
      priceEUR: 19.99,
      badge: "POPULAR",
      isHighlighted: false,
      stripeUrl: "https://buy.stripe.com/test_starter_link",
      zipDownloadUrl: "./CLEAN_GRADE_LUT.cube",
      zipFileSize: "4.8 MB (Lote Completo)",
      itemCount: "5 LUTs Presets HD",
      files: [
        { name: "CLEAN_GRADE_LUT.cube", size: "947 KB", url: "./CLEAN_GRADE_LUT.cube" },
        { name: "SUNSET_LUT.cube", size: "947 KB", url: "./SUNSET_LUT.cube" },
        { name: "ALTITUDE_LUT.cube", size: "947 KB", url: "./ALTITUDE_LUT.cube" }
      ]
    },
    {
      id: "vip",
      priceEUR: 39.99,
      badge: "RECOMENDADO",
      isHighlighted: true,
      stripeUrl: "https://buy.stripe.com/test_vip_link",
      zipDownloadUrl: "./CLEAN_GRADE_LUT.cube",
      zipFileSize: "4.8 MB (Lote Completo)",
      itemCount: "Lote Completo 5 LUTs + Vídeos Exclusivos",
      files: [
        { name: "CLEAN_GRADE_LUT.cube", size: "947 KB", url: "./CLEAN_GRADE_LUT.cube" },
        { name: "SUNSET_LUT.cube", size: "947 KB", url: "./SUNSET_LUT.cube" },
        { name: "ALTITUDE_LUT.cube", size: "947 KB", url: "./ALTITUDE_LUT.cube" },
        { name: "TEAL_AND_ORANGE_LUT.cube", size: "947 KB", url: "./TEAL_AND_ORANGE_LUT.cube" },
        { name: "VINTAGE_GREEN_LUT.cube", size: "947 KB", url: "./VINTAGE_GREEN_LUT.cube" }
      ]
    },
    {
      id: "ultimate",
      priceEUR: 69.99,
      badge: "VAULT COMPLETO",
      isHighlighted: false,
      stripeUrl: "https://buy.stripe.com/test_ultimate_link",
      zipDownloadUrl: "./CLEAN_GRADE_LUT.cube",
      zipFileSize: "4.8 MB (Vault Completo)",
      itemCount: "Vault Completo + Ficheiros Bónus Inéditos",
      files: [
        { name: "CLEAN_GRADE_LUT.cube", size: "947 KB", url: "./CLEAN_GRADE_LUT.cube" },
        { name: "SUNSET_LUT.cube", size: "947 KB", url: "./SUNSET_LUT.cube" },
        { name: "ALTITUDE_LUT.cube", size: "947 KB", url: "./ALTITUDE_LUT.cube" },
        { name: "TEAL_AND_ORANGE_LUT.cube", size: "947 KB", url: "./TEAL_AND_ORANGE_LUT.cube" },
        { name: "VINTAGE_GREEN_LUT.cube", size: "947 KB", url: "./VINTAGE_GREEN_LUT.cube" },
        { name: "LUT_Guide_and_Video_Tutorial.pdf", size: "108 KB", url: "./LUT_Guide_and_Video_Tutorial.pdf" }
      ]
    }
  ],

  // Format price dynamically: Fixed EUR base + auto conversion display for USD
  formatPrice: function(priceEUR, lang) {
    if (lang === 'en') {
      const convertedUSD = (priceEUR * window.APP_CONFIG.exchangeRates.USD).toFixed(2);
      return `$${convertedUSD} <span style="font-size: 0.75em; color: var(--text-dim);">(${priceEUR.toFixed(2)} €)</span>`;
    }
    // European comma decimal format
    return `${priceEUR.toFixed(2).replace('.', ',')} €`;
  },

  merchantName: "FÕCL MEDIA DIGITAL",
  supportEmail: "support@focldownloads.online"
};
