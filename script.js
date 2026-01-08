const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

document.getElementById("year").textContent = new Date().getFullYear();

function sendEmail(e){
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const subject = encodeURIComponent("Fast Lane Car Rental - Booking Request");
  const body = encodeURIComponent(
`Name: ${data.get("name")}
Phone: ${data.get("phone")}
Pickup Date: ${data.get("pickupDate")}
Return Date: ${data.get("returnDate")}
Vehicle Type: ${data.get("vehicleType")}

Message:
${data.get("message") || ""}`
  );

  // Replace the email below with your real business email:
  window.location.href = `mailto:bookings@fastlanecarrental.com?subject=${subject}&body=${body}`;
  return false;
}
function sendContactEmail(e){
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const subject = encodeURIComponent("Fast Lane Car Rental - Contact Request");
  const body = encodeURIComponent(
`Name: ${data.get("name")}
Phone: ${data.get("phone")}
Email: ${data.get("email")}

Message:
${data.get("message")}`
  );
