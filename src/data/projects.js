const projects = [
  {
    id: 1,
    title: {
      fa: 'ALPR Studio — تشخیص هوشمند پلاک',
      en: 'ALPR Studio — Smart License Plate Recognition',
    },
    description: {
      fa: 'سامانه ۱۰۰٪ تحت مرورگر برای تشخیص منطقه پلاک (ایران، آمریکا، اروپا) و استخراج کاراکترهای پلاک ایرانی با بازسازی گرافیکی، دوربین زنده و خروجی اکسل.',
      en: '100% browser-based ALPR platform for detecting plate regions (Iran, US, EU) and extracting Iranian plate characters with graphical reconstruction, live webcam, and CSV export.',
    },
    tech: ['YOLOv8 (ONNX)', 'TensorFlow.js', 'Tesseract.js', 'JavaScript'],
    liveUrl: 'https://mmdo0.github.io/alpr-studio/',
    isGame: false,
  },
  {
    id: 2,
    title: {
      fa: 'Bone Fracture AI — تشخیص شکستگی استخوان',
      en: 'Bone Fracture AI — X-Ray Fracture Detection',
    },
    description: {
      fa: 'پلتفرم هوشمند تحلیل تصاویر رادیولوژی (X-Ray) دست و مچ برای تشخیص خودکار شکستگی استخوان با شبکه عصبی کانولوشنی (CNN) مستقیماً در مرورگر.',
      en: 'Intelligent web platform for analyzing hand and wrist X-ray images to automatically detect bone fractures using a CNN model directly in the browser.',
    },
    tech: ['TensorFlow.js', 'CNN', 'JavaScript', 'HTML/CSS'],
    liveUrl: 'https://mmdo0.github.io/bone/',
    isGame: false,
  },
  {
    id: 3,
    title: {
      fa: 'بازی مونوپولی (Monopoly Game)',
      en: 'Monopoly Game',
    },
    description: {
      fa: 'بازی مونوپولی کامل با طراحی اختصاصی و منطق بازی.',
      en: 'Complete Monopoly board game with custom UI design and full game logic.',
    },
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '#',
    isGame: true,
  },
]

export default projects
