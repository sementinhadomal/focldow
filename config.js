/**
 * VIP / Creator Media Digital Checkout & Delivery Hub Configuration
 * Model: Alice Ribeiro — High-Converting 4 Tier Pricing System
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
      name: "Alice Ribeiro",
      brandName: "FÕCL MEDIA — Creator Series",
      username: "@aliceribeiro_official",
      avatar: "./assets/avatar.jpg",
      banner: "./assets/banner.jpg",
      verified: true,
      privateChatUrl: "https://t.me/aliceribeiro_private_chat",
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

  packages: [
    {
      id: "starter",
      name: "Pacote Inicial HD",
      priceEUR: 19.99,
      badge: "INICIAL",
      isHighlighted: false,
      stripeUrl: "https://buy.stripe.com/test_starter_link",
      zipDownloadUrl: "./CLEAN_GRADE_LUT.cube",
      zipFileSize: "25 Conteúdos HD Selecionados",
      itemCount: "25 Fotos e Ficheiros HD Selecionados",
      files: [
        { name: "CLEAN_GRADE_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./CLEAN_GRADE_LUT.cube" },
        { name: "SUNSET_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./SUNSET_LUT.cube" },
        { name: "ALTITUDE_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./ALTITUDE_LUT.cube" }
      ]
    },
    {
      id: "vip",
      name: "Pass Deluxe VIP",
      priceEUR: 39.99,
      badge: "RECOMENDADO",
      isHighlighted: false,
      stripeUrl: "https://buy.stripe.com/test_vip_link",
      zipDownloadUrl: "./Design sem nome.mp4",
      zipFileSize: "60 Conteúdos HD + Vídeos Exclusivos",
      itemCount: "60 Fotos HD + Coleção de Vídeos 4K",
      files: [
        { name: "CLEAN_GRADE_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./CLEAN_GRADE_LUT.cube" },
        { name: "SUNSET_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./SUNSET_LUT.cube" },
        { name: "ALTITUDE_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./ALTITUDE_LUT.cube" },
        { name: "TEAL_AND_ORANGE_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./TEAL_AND_ORANGE_LUT.cube" },
        { name: "VINTAGE_GREEN_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./VINTAGE_GREEN_LUT.cube" },
        { name: "Design sem nome.mp4", size: "Vídeo 4K Ultra HD", url: "./Design sem nome.mp4" }
      ]
    },
    {
      id: "ultimate",
      name: "Vault Total + Chat VIP",
      priceEUR: 69.99,
      badge: "MAIS POPULAR 🔥",
      isHighlighted: true,
      stripeUrl: "https://buy.stripe.com/test_ultimate_link",
      zipDownloadUrl: "./LUT_Guide_and_Video_Tutorial.pdf",
      zipFileSize: "120+ Mídias Vault + Chat Privado 1-on-1",
      itemCount: "120+ Mídias + Chat Privado 1-on-1 + Bónus",
      files: [
        { name: "Pass_Acesso_Chat_Privado.pdf", size: "Acesso Direto Chat 1-on-1", url: "./LUT_Guide_and_Video_Tutorial.pdf" },
        { name: "CLEAN_GRADE_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./CLEAN_GRADE_LUT.cube" },
        { name: "SUNSET_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./SUNSET_LUT.cube" },
        { name: "ALTITUDE_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./ALTITUDE_LUT.cube" },
        { name: "TEAL_AND_ORANGE_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./TEAL_AND_ORANGE_LUT.cube" },
        { name: "VINTAGE_GREEN_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./VINTAGE_GREEN_LUT.cube" },
        { name: "Design sem nome.mp4", size: "Vídeo 4K Ultra HD", url: "./Design sem nome.mp4" },
        { name: "LUT_Guide_and_Video_Tutorial.pdf", size: "Guia Exclusivo PDF", url: "./LUT_Guide_and_Video_Tutorial.pdf" }
      ]
    },
    {
      id: "chat",
      name: "VIP Diamond Chat + Acervo Completo",
      priceEUR: 99.99,
      badge: "SUPREMO DIAMOND 💎",
      isHighlighted: true,
      stripeUrl: "https://buy.stripe.com/test_chat_link",
      zipDownloadUrl: "./LUT_Guide_and_Video_Tutorial.pdf",
      zipFileSize: "Chat Privado Resposta Prioritária + Acervo Total Mídias 4K",
      itemCount: "Chat Privado Prioritário + Acervo Completo 120+ Mídias + Atualizações",
      files: [
        { name: "Pass_Acesso_Chat_Privado_Diamond.pdf", size: "Acesso Prioritário Chat 1-on-1", url: "./LUT_Guide_and_Video_Tutorial.pdf" },
        { name: "CLEAN_GRADE_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./CLEAN_GRADE_LUT.cube" },
        { name: "SUNSET_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./SUNSET_LUT.cube" },
        { name: "ALTITUDE_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./ALTITUDE_LUT.cube" },
        { name: "TEAL_AND_ORANGE_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./TEAL_AND_ORANGE_LUT.cube" },
        { name: "VINTAGE_GREEN_LUT.cube", size: "Ficheiro HD Exclusivo", url: "./VINTAGE_GREEN_LUT.cube" },
        { name: "Design sem nome.mp4", size: "Vídeo 4K Ultra HD", url: "./Design sem nome.mp4" },
        { name: "LUT_Guide_and_Video_Tutorial.pdf", size: "Guia Exclusivo PDF", url: "./LUT_Guide_and_Video_Tutorial.pdf" },
        { name: "ULTIMATE_VAULT_DIAMOND_MEDIA.zip", size: "Acervo Completo Vault 4K", url: "#" }
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
