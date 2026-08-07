/**
 * VIP / Creator Media Digital Checkout & Delivery Hub Configuration
 * Supports multi-model dynamic switching via ?m=model_id
 */

window.APP_CONFIG = {
  defaultModel: "exclusive",
  defaultLang: "pt-PT",

  // Model Profiles Database
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

  // Stripe Payment Links & Individual Media Download Items
  packages: [
    {
      id: "starter",
      priceUSD: "$19.99",
      priceEUR: "19,99 €",
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
      priceUSD: "$39.99",
      priceEUR: "39,99 €",
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
      priceUSD: "$69.99",
      priceEUR: "69,99 €",
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

  merchantName: "FÕCL MEDIA DIGITAL",
  supportEmail: "support@focldownloads.online"
};
