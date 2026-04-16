export type Lang = "ar" | "en" | "fr";

export const translations = {
  nav: {
    ar: "عربي AR",
    en: "EN",
    fr: "FR",
  },
  hero: {
    title: { ar: "CIGO CARD", en: "CIGO CARD", fr: "CIGO CARD" },
    subtitle: {
      ar: "نظام الدفع الذكي للتنقل الحضري",
      en: "Smart Payment System for Urban Transit",
      fr: "Système de Paiement Intelligent pour le Transport Urbain",
    },
    dragToRotate: {
      ar: "اسحب البطاقة للتدوير ◆ DRAG TO ROTATE",
      en: "◆ DRAG TO ROTATE",
      fr: "◆ GLISSER POUR TOURNER",
    },
  },
  problem: {
    label: {
      ar: "المشكلة",
      en: "The Problem",
      fr: "Le Problème",
    },
    text: {
      ar: "تعاني المواصلات الحضرية من طوابير انتظار طويلة، تذاكر غير مقالة، غياب الشفافية في الأسعار وضعف التكامل بين الخدمات. كما تفتقر الأنظمة الحالية إلى الوصول الفوري والإدارة المركزية.",
      en: "Urban transit suffers from long queues, non-refundable tickets, lack of price transparency, and poor service integration. Current systems lack real-time access and centralized management.",
      fr: "Le transport urbain souffre de longues files d'attente, de billets non remboursables, d'un manque de transparence des prix et d'une mauvaise intégration des services. Les systèmes actuels manquent d'accès en temps réel et de gestion centralisée.",
    },
  },
  solution: {
    label: {
      ar: "الحل",
      en: "The Solution",
      fr: "La Solution",
    },
    text: {
      ar: "CigoCard نظام ذكي لإدارة أسعار التذاكر بدون تلامس باستخدام تقنية RFID. يدعم التسعير الثابت والمبني على المسافة مع التتبع الفوري والتكامل مع تطبيق الجوال.",
      en: "CigoCard is a smart contactless ticket fare management system using RFID technology. It supports fixed and distance-based pricing with real-time tracking and mobile app integration.",
      fr: "CigoCard est un système intelligent de gestion des tarifs sans contact utilisant la technologie RFID. Il prend en charge la tarification fixe et basée sur la distance avec un suivi en temps réel et une intégration d'application mobile.",
    },
  },
  vision: {
    label: {
      ar: "◆ رؤيتنا",
      en: "◆ Our Vision",
      fr: "◆ Notre Vision",
    },
    text: {
      ar: "تجربة نقل عام متصلة ومقالة ومدفوعة بالبيانات تجعل كل رحلة أذكى وأسرع وأكثر شفافية. مصممة للمدن الذكية الناشئة بتكلفة نشر فحتشنة.",
      en: "A connected, fair, and data-driven public transit experience that makes every trip smarter, faster, and more transparent. Designed for emerging smart cities with minimal deployment cost.",
      fr: "Une expérience de transport public connectée, équitable et axée sur les données qui rend chaque trajet plus intelligent, plus rapide et plus transparent. Conçue pour les villes intelligentes émergentes avec un coût de déploiement minimal.",
    },
  },
  components: {
    title: {
      ar: "مكونات النظام",
      en: "System Components",
      fr: "Composants du Système",
    },
    viewVideo: { ar: "عرض ثلاثي الأبعاد", en: "View 3D", fr: "Vue 3D" },
    downloadVideo: { ar: "تحميل الفيديو", en: "Download Video", fr: "Télécharger la vidéo" },
    viewCard: { ar: "عرض ثلاثي الأبعاد", en: "View 3D", fr: "Vue 3D" },
    items: [
      {
        name: { ar: "المدقق - معبر ثابت / حسب المسافة", en: "Validators: Fixed / Distance Fare", fr: "Validateurs: Tarif Fixe / Distance" },
        desc: { ar: "يتحقق من التذاكر بأسعار ثابتة لكل رحلة أو يحسب الأجرة بناءً على المسافة المقطوعة", en: "Validates tickets with fixed fares per trip or calculates fare based on distance traveled", fr: "Valide les billets avec tarifs fixes par trajet ou calcule le tarif selon la distance" },
        media: "video",
        src: "/videos/1.mp4",
        icon: "bus",
        detail: { ar: "جهاز المدقق يتحقق من بطاقات RFID ويخصم الأجرة تلقائياً. يدعم التسعير الثابت والمبني على المسافة. يعمل عبر ESP8266 مع اتصال MQTT فوري.", en: "The validator device checks RFID cards and automatically deducts the fare. Supports fixed and distance-based pricing. Runs on ESP8266 with real-time MQTT connection.", fr: "Le validateur vérifie les cartes RFID et déduit automatiquement le tarif. Supporte la tarification fixe et par distance. Fonctionne sur ESP8266 avec connexion MQTT en temps réel." },
      },
      {
        name: { ar: "طرفية التوزيع", en: "Recharge Terminal", fr: "Terminal de Recharge" },
        desc: { ar: "تتيح إعادة الشحن بالعملات المعدنية الفورية", en: "Allows instant coin-based recharging", fr: "Permet la recharge instantanée par pièces" },
        media: "video",
        src: "/videos/2.mp4",
        icon: "coin",
        detail: { ar: "طرفية التوزيع تتيح للمستخدمين إعادة شحن بطاقاتهم بالعملات المعدنية. تعرض شاشة LCD الرصيد الحالي وتؤكد كل معاملة فورياً عبر MQTT.", en: "The recharge terminal allows users to top up their cards with coins. The LCD screen displays the current balance and confirms each transaction instantly via MQTT.", fr: "Le terminal de recharge permet aux utilisateurs de recharger leurs cartes avec des pièces. L'écran LCD affiche le solde actuel et confirme chaque transaction instantanément via MQTT." },
      },
      {
        name: { ar: "البطاقة الذكية (RFID)", en: "Smart Card (RFID)", fr: "Carte Intelligente (RFID)" },
        desc: { ar: "بطاقة RFID لمدفوعات سريعة بدون تلامس", en: "RFID card for fast contactless payments", fr: "Carte RFID pour des paiements rapides sans contact" },
        media: "card",
        src: "",
        icon: "creditcard",
        detail: { ar: "بطاقة RFID ذكية تمكّن الدفع السريع بدون تلامس عبر جميع محطات النقل. تخزن الرصيد محلياً وتتزامن مع الخادم.", en: "Smart RFID card enabling fast contactless payment across all transit stations. Stores balance locally and syncs with the server.", fr: "Carte RFID intelligente permettant le paiement rapide sans contact dans toutes les stations. Stocke le solde localement et se synchronise avec le serveur." },
      },
      {
        name: { ar: "تطبيق الجوال", en: "Mobile App", fr: "Application Mobile" },
        desc: { ar: "تتبع الرصيد والإشعارات الفورية عبر Flutter", en: "Track balance and instant notifications via Flutter", fr: "Suivi du solde et notifications instantanées via Flutter" },
        media: "video",
        src: "/videos/3.mp4",
        icon: "smartphone",
        detail: { ar: "تطبيق Flutter للجوال يتيح تتبع الرصيد والإشعارات الفورية وسجل المعاملات. متاح على Android و iOS.", en: "Flutter mobile app for balance tracking, instant notifications, and transaction history. Available on Android and iOS.", fr: "Application mobile Flutter pour le suivi du solde, les notifications instantanées et l'historique des transactions. Disponible sur Android et iOS." },
      },
      {
        name: { ar: "لوحة الإدارة", en: "Admin Dashboard", fr: "Tableau de Bord" },
        desc: { ar: "مراقبة مركزية وتحليلات متقدمة", en: "Centralized monitoring and advanced analytics", fr: "Surveillance centralisée et analyses avancées" },
        media: "video",
        src: "/videos/4.mp4",
        icon: "dashboard",
        detail: { ar: "لوحة إدارة ويب للمراقبة المركزية وتحليل البيانات وإدارة المستخدمين والخطوط.", en: "Web admin dashboard for centralized monitoring, data analytics, and user/route management.", fr: "Tableau de bord web pour la surveillance centralisée, l'analyse des données et la gestion des utilisateurs/lignes." },
      },
    ],
  },
  workflow: {
    title: {
      ar: "كيف يعمل النظام",
      en: "How The System Works",
      fr: "Comment Fonctionne le Système",
    },
    validator: {
      title: { ar: "سير عمل المدقق", en: "Validator Workflow", fr: "Flux du Validateur" },
      steps: [
        { ar: "يلمس المستخدم بطاقة RFID على جهاز المدقق", en: "User taps RFID card on validator device", fr: "L'utilisateur touche la carte RFID sur le validateur" },
        { ar: "يقرأ النظام (ESP8266 + MFRC522) معرّف البطاقة ويتحقق من الرصيد", en: "System (ESP8266 + MFRC522) reads card ID and checks balance", fr: "Le système (ESP8266 + MFRC522) lit l'ID de la carte et vérifie le solde" },
        { ar: "يحدد النظام إذا كان الخط يستخدم تسعيراً ثابتاً أو حسب المسافة", en: "System determines if route uses fixed or distance-based pricing", fr: "Le système détermine si la ligne utilise un tarif fixe ou basé sur la distance" },
        { ar: "يحسب المبلغ الصحيح ويُخصم حسب نوع الخط", en: "Calculates correct amount and deducts based on route type", fr: "Calcule le montant correct et déduit selon le type de ligne" },
        { ar: "يُحدّث الرصيد محلياً ويُرسل عبر MQTT مع إشعار للهاتف", en: "Updates balance locally and sends via MQTT with phone notification", fr: "Met à jour le solde localement et envoie via MQTT avec notification téléphone" },
      ],
    },
    distributor: {
      title: { ar: "سير عمل الموزع", en: "Distributor Workflow", fr: "Flux du Distributeur" },
      steps: [
        { ar: "يضع المستخدم بطاقته على طرفية التوزيع", en: "User places card on recharge terminal", fr: "L'utilisateur place sa carte sur le terminal de recharge" },
        { ar: "تُعرض الشاشة الرصيد الحالي وبيانات المستخدم", en: "Screen displays current balance and user data", fr: "L'écran affiche le solde actuel et les données utilisateur" },
        { ar: "يُدخل المستخدم العملات المعدنية في محدد العملات", en: "User inserts coins into coin acceptor", fr: "L'utilisateur insère des pièces dans l'accepteur de monnaie" },
        { ar: "يُضاف المبلغ فوراً إلى رصيد البطاقة", en: "Amount is instantly added to card balance", fr: "Le montant est instantanément ajouté au solde de la carte" },
        { ar: "تُسجّل المعاملة على الخادم وتُرسل إشعار تأكيد", en: "Transaction is logged on server and confirmation notification sent", fr: "La transaction est enregistrée sur le serveur et une notification de confirmation est envoyée" },
      ],
    },
  },
  features: {
    title: {
      ar: "الميزات والمزايا",
      en: "Features & Advantages",
      fr: "Fonctionnalités et Avantages",
    },
    columns: [
      {
        label: { ar: "الميزات الرئيسية", en: "Key Features", fr: "Fonctionnalités Clés" },
        color: "primary",
        items: [
          { ar: "دفع RFID بدون تلامس", en: "Contactless RFID Payment", fr: "Paiement RFID sans contact" },
          { ar: "تسعير ثابت ومبني على المسافة", en: "Fixed & Distance-Based Pricing", fr: "Tarification fixe et par distance" },
          { ar: "تتبع المعاملات الفوري", en: "Real-Time Transaction Tracking", fr: "Suivi des transactions en temps réel" },
          { ar: "تكامل مع تطبيق الجوال", en: "Mobile App Integration", fr: "Intégration application mobile" },
          { ar: "إعادة شحن عبر الموزع", en: "Recharge via Distributor", fr: "Recharge via distributeur" },
          { ar: "لوحة تحكم إدارية", en: "Admin Control Dashboard", fr: "Tableau de bord administrateur" },
        ],
      },
      {
        label: { ar: "المزايا", en: "Advantages", fr: "Avantages" },
        color: "primary",
        items: [
          { ar: "تقليل وقت الانتظار", en: "Reduced Waiting Time", fr: "Temps d'attente réduit" },
          { ar: "دقة أسعار محسّنة", en: "Improved Price Accuracy", fr: "Précision des prix améliorée" },
          { ar: "قابل للتوسع للمدن الكبيرة", en: "Scalable for Large Cities", fr: "Évolutif pour les grandes villes" },
          { ar: "تحسين تجربة المستخدم", en: "Enhanced User Experience", fr: "Expérience utilisateur améliorée" },
          { ar: "مراقبة ومراقبة مركزية", en: "Centralized Monitoring", fr: "Surveillance centralisée" },
          { ar: "أجهزة موفرة للطاقة بتكلفة منخفضة", en: "Low-Cost Energy-Efficient Devices", fr: "Appareils économes en énergie à faible coût" },
        ],
      },
      {
        label: { ar: "ما يميزنا", en: "What Sets Us Apart", fr: "Ce Qui Nous Distingue" },
        color: "accent",
        tags: [
          { ar: "تصميم هجين", en: "Hybrid Design", fr: "Conception hybride" },
          { ar: "ESP8266 منخفض التكلفة", en: "Low-Cost ESP8266", fr: "ESP8266 à faible coût" },
          { ar: "نظام موحّد", en: "Unified System", fr: "Système unifié" },
          { ar: "MQTT فوري", en: "Real-Time MQTT", fr: "MQTT en temps réel" },
          { ar: "قابل للتوسع", en: "Scalable", fr: "Évolutif" },
          { ar: "وضع بلا إنترنت", en: "Offline Mode", fr: "Mode hors ligne" },
          { ar: "شفاف", en: "Transparent", fr: "Transparent" },
        ],
      },
      {
        label: { ar: "التحسينات المستقبلية", en: "Future Improvements", fr: "Améliorations Futures" },
        color: "primary",
        items: [
          { ar: "تكامل مع بطاقات البنك وNFC", en: "Bank Card & NFC Integration", fr: "Intégration carte bancaire et NFC" },
          { ar: "تنبؤ بالطلب بالذكاء الاصطناعي", en: "AI-Powered Demand Prediction", fr: "Prédiction de la demande par IA" },
          { ar: "تتبع GPS للحافلات", en: "Bus GPS Tracking", fr: "Suivi GPS des bus" },
          { ar: "دفع إلكتروني عبر الإنترنت", en: "Online Electronic Payment", fr: "Paiement électronique en ligne" },
          { ar: "التشغيل البيني متعدد المدن", en: "Multi-City Interoperability", fr: "Interopérabilité multi-villes" },
          { ar: "لوحة تحليلات متقدمة", en: "Advanced Analytics Dashboard", fr: "Tableau de bord analytique avancé" },
        ],
      },
    ],
  },
  footer: {
    text: {
      ar: "نظام الدفع الذكي للتنقل الحضري · CiGo Card © 2026 · ESI Sidi-Bel-Abbès",
      en: "Smart Payment System for Urban Transit · CiGo Card © 2026 · ESI Sidi-Bel-Abbès",
      fr: "Système de Paiement Intelligent pour le Transport Urbain · CiGo Card © 2026 · ESI Sidi-Bel-Abbès",
    },
  },
};
