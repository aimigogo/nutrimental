import React from "react";
import "./Map.css";




export default function MapComponent() {

    return (
        <div className="Map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.840693463014!2d22.961045576434945!3d40.61133834377124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83900787f05c1%3A0xc339b424e6b1f4ed!2zTnV0cmltZW50YWwgRGlldCAtIM6czrHPgc6vzrEgzpPOuc6xzr3Ovc6tzrvOv8-F!5e0!3m2!1sel!2sgr!4v1780751916472!5m2!1sel!2sgr"
                width="400%"
                height="100"
                style={{border: 0, borderRadius: "12px"}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nutrimental Diet map"
            />
        </div>
    );
}