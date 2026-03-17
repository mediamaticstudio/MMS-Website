import React from "react";

export const C = {
    burg: "#652b32",
    burgD: "#4a1e24",
    burgL: "#7e3640",
    yel: "#f5c518",
    yelD: "#d4a910",
    cream: "#faf3e0",
    crD: "#f0e6cc",
    dark: "#150b0d",
    text: "#2c1215",
    mut: "#7a5a5e",
    wh: "#ffffff",
};

export const F = {
    disp: "'Playfair Display', Georgia, serif",
    body: "'Plus Jakarta Sans', system-ui, sans-serif",
    acc: "'Caveat', cursive",
};

export const BASE = "public/assets/adimage";
export const ILL = {
    bulb: `${BASE}/Broken_light_bulb-bro.svg`,
    standout: `${BASE}/Stand_out-bro.svg`,
    data: `${BASE}/Data_extraction-bro.svg`,
    influencer: `${BASE}/Influencer-cuate.svg`,
    person: `${BASE}/image__17_.png`,
};

export const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
    <p style={{ fontFamily: F.acc, fontSize: 22, fontWeight: 700, color: light ? C.yel : C.burg, marginBottom: 8 }}>
        {children}
    </p>
);

export const YellowBar = ({ center = false }: { center?: boolean }) => (
    <div style={{ width: 48, height: 4, background: C.yel, borderRadius: 2, margin: center ? "0 auto 20px" : "0 0 20px" }} />
);