const FORM_ENDPOINT = ""; // ضع هنا رابط استقبال النموذج عند ربط Backend/Form service

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("bookingForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.className = "form-status";
  status.textContent = "";

  const button = form.querySelector("button");
  const original = button.innerHTML;
  button.disabled = true;
  button.innerHTML = "جارٍ إرسال الطلب…";

  const data = Object.fromEntries(new FormData(form).entries());

  try {
    if (!FORM_ENDPOINT) {
      // Demo mode: validates the UX without pretending that a real request was delivered.
      await new Promise(r => setTimeout(r, 550));
      status.className = "form-status success";
      status.textContent = "تم تسجيل الطلب في النموذج التجريبي. لبدء استقبال الطلبات فعليًا، اربط النموذج برابط Backend في script.js.";
      form.reset();
    } else {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error("Request failed");
      status.className = "form-status success";
      status.textContent = "تم إرسال طلب الحجز بنجاح، وسيتم مراجعة البيانات والتواصل لتأكيد الموعد.";
      form.reset();
    }
  } catch (err) {
    status.className = "form-status error";
    status.textContent = "حصلت مشكلة أثناء الإرسال. جرّب مرة أخرى.";
  } finally {
    button.disabled = false;
    button.innerHTML = original;
  }
});
