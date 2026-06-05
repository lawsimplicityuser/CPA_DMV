const currentPage = window.location.pathname.split("/").pop() || "index.html";

const isCurrent = (href) => (currentPage === href ? ' aria-current="page"' : "");

const headerTarget = document.querySelector("[data-site-header]");
if (headerTarget) {
  headerTarget.outerHTML = `
    <header class="site-header">
      <a class="skip-link" href="#main">Skip to content</a>
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="CPA-DMV home">
          <img src="assets/logo-dmv-cpa.svg" alt="CPA-DMV logo">
          <span><strong>CPA-DMV</strong><span>Certified Public Accountant</span></span>
        </a>
        <nav aria-label="Main navigation">
          <ul class="nav-menu">
            <li><a class="nav-link" href="index.html"${isCurrent("index.html")}>Home</a></li>
            <li><a class="nav-link" href="about.html"${isCurrent("about.html")}>About</a></li>
            <li class="has-dropdown">
              <button class="dropdown-toggle" type="button" aria-expanded="false">Services</button>
              <div class="dropdown">
                <a href="cdfa-services.html"${isCurrent("cdfa-services.html")}>CDFA Services</a>
                <a href="specialized-audit-advisory.html"${isCurrent("specialized-audit-advisory.html")}>Specialized Audit Services</a>
                <a href="forensic-audit-services.html"${isCurrent("forensic-audit-services.html")}>Forensic Audit Services</a>
                <a href="accounting-bookkeeping.html"${isCurrent("accounting-bookkeeping.html")}>Accounting &amp; Bookkeeping</a>
                <a href="taxation-services.html"${isCurrent("taxation-services.html")}>Tax Services</a>
                <a href="quickbooks-setup-training.html"${isCurrent("quickbooks-setup-training.html")}>QuickBooks Setup &amp; Training</a>
                <a href="payroll-services.html"${isCurrent("payroll-services.html")}>Payroll Services</a>
                <a href="hr-support-advisory.html"${isCurrent("hr-support-advisory.html")}>HR Support &amp; Advisory</a>
                <a href="business-registration.html"${isCurrent("business-registration.html")}>Business Registration</a>
              </div>
            </li>
            <li class="has-dropdown">
              <button class="dropdown-toggle" type="button" aria-expanded="false">Industries</button>
              <div class="dropdown">
                <a href="industries.html"${isCurrent("industries.html")}>Industries</a>
                <a href="credit-union-audits.html"${isCurrent("credit-union-audits.html")}>Credit Unions</a>
                <a href="industries.html#non-profit">Non-Profit Organizations</a>
                <a href="assisted-living-facilities.html"${isCurrent("assisted-living-facilities.html")}>Assisted Living Facilities</a>
                <a href="classrooms-educational-institutions.html"${isCurrent("classrooms-educational-institutions.html")}>Educational Institutions</a>
                <a href="single-audits-uniform-guidance.html"${isCurrent("single-audits-uniform-guidance.html")}>Government / Federally Funded</a>
              </div>
            </li>
            <li><a class="nav-link" href="contact.html"${isCurrent("contact.html")}>Contact</a></li>
          </ul>
        </nav>
        <button class="menu-button" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <a class="btn primary header-cta" href="contact.html">Schedule a Consultation</a>
      </div>
    </header>
  `;
}

const footerTarget = document.querySelector("[data-site-footer]");
if (footerTarget) {
  footerTarget.outerHTML = `
    <footer class="site-footer">
      <div class="container footer-main">
        <div>
          <a class="brand" href="index.html" aria-label="CPA-DMV home">
            <img src="assets/logo-dmv-cpa.svg" alt="CPA-DMV logo">
            <span><strong>CPA-DMV</strong><span>Certified Public Accountant</span></span>
          </a>
          <p>Premium CPA, tax, audit, accounting, CDFA, forensic audit advisory, payroll, QuickBooks, HR advisory, and business registration support.</p>
          <p>Serving clients across the District of Columbia, Maryland, and Virginia from Fairfax, VA.</p>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            <li><a href="cdfa-services.html">CDFA Services</a></li>
            <li><a href="specialized-audit-advisory.html">Specialized Audit Services</a></li>
            <li><a href="forensic-audit-services.html">Forensic Audit Services</a></li>
            <li><a href="accounting-bookkeeping.html">Accounting &amp; Bookkeeping</a></li>
            <li><a href="taxation-services.html">Tax Services</a></li>
            <li><a href="quickbooks-setup-training.html">QuickBooks Setup &amp; Training</a></li>
            <li><a href="payroll-services.html">Payroll Services</a></li>
            <li><a href="hr-support-advisory.html">HR Support &amp; Advisory</a></li>
            <li><a href="business-registration.html">Business Registration</a></li>
          </ul>
        </div>
        <div>
          <h3>Industries</h3>
          <ul>
            <li><a href="industries.html">Industries</a></li>
            <li><a href="credit-union-audits.html">Credit Unions</a></li>
            <li><a href="industries.html#non-profit">Non-Profit Organizations</a></li>
            <li><a href="assisted-living-facilities.html">Assisted Living Facilities</a></li>
            <li><a href="classrooms-educational-institutions.html">Educational Institutions</a></li>
            <li><a href="single-audits-uniform-guidance.html">Government / Federally Funded</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Email: <a href="mailto:support@cpa-dmv.com">support@cpa-dmv.com</a></li>
            <li>Address: 10521 Judicial Dr #100, Fairfax, VA 22030</li>
            <li>LinkedIn: <a href="#" aria-label="LinkedIn placeholder">LinkedIn</a></li>
            <li>Professional Affiliations: [Professional affiliations placeholder]</li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>&copy; <span data-current-year></span> CPA-DMV. All rights reserved.</span>
        <span>District of Columbia | Maryland | Virginia</span>
      </div>
    </footer>
  `;
}

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const yearNodes = document.querySelectorAll("[data-current-year]");

yearNodes.forEach((node) => {
  node.textContent = new Date().getFullYear();
});

if (menuButton && header) {
  menuButton.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".dropdown-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
  });
});

document.addEventListener("click", (event) => {
  if (!header || !header.classList.contains("nav-open")) return;
  if (event.target instanceof Node && header.contains(event.target)) return;
  header.classList.remove("nav-open");
  if (menuButton) menuButton.setAttribute("aria-expanded", "false");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".fade-up").forEach((node) => observer.observe(node));
} else {
  document.querySelectorAll(".fade-up").forEach((node) => node.classList.add("is-visible"));
}
