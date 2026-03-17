import React from "react";

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
button { cursor: pointer; border: none; }

input:focus, select:focus {
  outline: none;
  border-color: #652b32 !important;
  box-shadow: 0 0 0 3px rgba(101,43,50,0.13);
}

.svc-card:hover {
  transform: translateY(-7px) !important;
  box-shadow: 0 20px 44px rgba(101,43,50,0.14) !important;
  border-color: #652b32 !important;
}
.btn-yel:hover {
  background: #d4a910 !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 10px 28px rgba(245,197,24,0.5) !important;
}
.btn-ghost:hover {
  border-color: #f5c518 !important;
  color: #f5c518 !important;
}
.btn-burg:hover {
  background: #4a1e24 !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 10px 28px rgba(101,43,50,0.35) !important;
}
.why-item:hover span.check {
  background: #652b32 !important;
  color: #f5c518 !important;
}

.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
.grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }

@media (max-width: 968px) {
  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr !important; gap: 40px !important; }
  .desktop-nav { display: none !important; }
}

@keyframes fadeUp {
  from { opacity:0; transform:translateY(30px); }
  to   { opacity:1; transform:translateY(0); }
}
.fu  { animation: fadeUp 0.7s ease both; }
.fu1 { animation-delay:0.08s; }
.fu2 { animation-delay:0.18s; }
.fu3 { animation-delay:0.28s; }
.fu4 { animation-delay:0.42s; }
`;

export const metadata = {
    title: "Mediamatic Studio — Houston Branding Agency",
    description: "Strategic branding, logo design, website development and digital marketing in Houston, TX.",
};



export default function AdpageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />

            <main style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", background: "#faf3e0", color: "#2c1215", overflowX: "hidden" }}>
                {children}
            </main>

        </>
    );
}