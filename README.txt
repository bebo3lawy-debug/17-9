# موقع كابتن أحمد العلاوي

نسخة Mobile First فاخرة بالأسود والذهبي لخدمة جلسات المساج المنزلية.

## الملفات
- `index.html` — الموقع كاملًا
- `style.css` — التصميم والحركات
- `script.js` — الحركات ونموذج الحجز
- `assets/ahmed-hero.jpg` — الصورة الأولى كما تم رفعها
- `assets/ahmed-about.jpg` — الصورة الثانية كما تم رفعها

## استقبال طلبات الحجز
الواجهة جاهزة، لكن استقبال الطلبات فعليًا يحتاج Backend أو خدمة Forms لأن GitHub Pages وحده يستضيف الملفات ولا يشغّل كود خادم.

في `script.js` يوجد:
`const FORM_ENDPOINT = "";`

ضع رابط endpoint لخدمة/Backend تستقبل POST JSON، وسيعمل النموذج على إرسال:
- name
- location
- service
- notes

ولا يوجد في الموقع زر واتساب أو اتصال.

## تشغيل محلي
افتح `index.html` في المتصفح، أو استخدم أي static server.
