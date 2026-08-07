/**
 * VIP / Creator Media Digital Checkout & Delivery Hub Configuration
 * Base Currency: EUR (€) - Distinct prices, media files, and Order Bumps for each tier.
 */

window.APP_CONFIG = {
  defaultModel: "exclusive",
  defaultLang: "pt-PT",
  baseCurrency: "EUR",
  
  exchangeRates: {
    EUR: 1.0,
    USD: 1.09
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

  // 3 Distinct Product Tiers with Unique Deliverable Media Files & Prices
  packages: [
    {
      id: "starter",
      name: "Pacote Inicial HD",
      priceEUR: 19.99,
      badge: "POPULAR",
      isHighlighted: false,
      stripeUrl: "https://buy.stripe.com/test_starter_link",
      zipDownloadUrl: "./CLEAN_GRADE_LUT.cube",
      zipFileSize: "2.8 MB (Pacote Inicial)",
      itemCount: "3 LUTs Presets HD Básicos",
      files: [
        { name: "CLEAN_GRADE_LUT.cube", size: "947 KB", url: "./CLEAN_GRADE_LUT.cube" },
        { name: "SUNSET_LUT.cube", size: "947 KB", url: "./SUNSET_LUT.cube" },
        { name: "ALTITUDE_LUT.cube", size: "947 KB", url: "./ALTITUDE_LUT.cube" }
      ]
    },
    {
      id: "vip",
      name: "Pass Deluxe VIP",
      priceEUR: 39.99,
      badge: "RECOMENDADO",
      isHighlighted: true,
      stripeUrl: "https://buy.stripe.com/test_vip_link",
      zipDownloadUrl: "./Design sem nome.mp4",
      zipFileSize: "35.2 MB (Pacote Deluxe + Vídeo)",
      itemCount: "5 LUTs Presets HD + Vídeo Exclusivo HD",
      files: [
        { name: "CLEAN_GRADE_LUT.cube", size: "947 KB", url: "./CLEAN_GRADE_LUT.cube" },
        { name: "SUNSET_LUT.cube", size: "947 KB", url: "./SUNSET_LUT.cube" },
        { name: "ALTITUDE_LUT.cube", size: "947 KB", url: "./ALTITUDE_LUT.cube" },
        { name: "TEAL_AND_ORANGE_LUT.cube", size: "947 KB", url: "./TEAL_AND_ORANGE_LUT.cube" },
        { name: "VINTAGE_GREEN_LUT.cube", size: "947 KB", url: "./VINTAGE_GREEN_LUT.cube" },
        { name: "Design sem nome.mp4", size: "30.4 MB", url: "./Design sem nome.mp4" }
      ]
    },
    {
      id: "ultimate",
      name: "Vault Total All-Access",
      priceEUR: 69.99,
      badge: "VAULT COMPLETO",
      isHighlighted: false,
      stripeUrl: "https://buy.stripe.com/test_ultimate_link",
      zipDownloadUrl: "./LUT_Guide_and_Video_Tutorial.pdf",
      zipFileSize: "1.2 GB (Vault Completo All-Access)",
      itemCount: "Acervo Completo 5 LUTs + Vídeos + Guia PDF + Bónus Vault",
      files: [
        { name: "CLEAN_GRADE_LUT.cube", size: "947 KB", url: "./CLEAN_GRADE_LUT.cube" },
        { name: "SUNSET_LUT.cube", size: "947 KB", url: "./SUNSET_LUT.cube" },
        { name: "ALTITUDE_LUT.cube", size: "947 KB", url: "./ALTITUDE_LUT.cube" },
        { name: "TEAL_AND_ORANGE_LUT.cube", size: "947 KB", url: "./TEAL_AND_ORANGE_LUT.cube" },
        { name: "VINTAGE_GREEN_LUT.cube", size: "947 KB", url: "./VINTAGE_GREEN_LUT.cube" },
        { name: "Design sem nome.mp4", size: "30.4 MB", url: "./Design sem nome.mp4" },
        { name: "LUT_Guide_and_Video_Tutorial.pdf", size: "108 KB", url: "./LUT_Guide_and_Video_Tutorial.pdf" },
        { name: "ULTIMATE_VAULT_BONUS_MEDIA.zip", size: "1.2 GB", url: "#" }
      ]
    }
  ],

  formatPrice: function(priceEUR, lang) {
    if (lang === 'en') {
      const convertedUSD = (priceEUR * window.APP_CONFIG.exchangeRates.USD).toFixed(2);
      return `$${convertedUSD} <span style="font-size: 0.75em; color: var(--text-dim);">(${priceEUR.toFixed(2)} €)</span>`;
    }
    return `${priceEUR.toFixed(2).replace('.', ',')} €`;
  },

  merchantName: "FÕCL MEDIA DIGITAL",
  supportEmail: "support@focldownloads.online"
};
