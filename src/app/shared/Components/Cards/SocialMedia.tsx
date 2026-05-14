"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { socialLinks } from "@/data/data";

const TikTokIcon = ({ color = "#000000" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="100%"
      height="100%"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

const SocialMedia: React.FC = () => {
  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-4 mb-4">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            className="text-gray-800 hover:text-gray-600"
          >
            {social.icon === "Facebook" && <Facebook size={24} />}
            {social.icon === "Twitter" && <Twitter size={24} />}
            {social.icon === "Linkedin" && <Linkedin size={24} />}
            {social.icon === "Instagram" && <Instagram size={24} />}
            {social.icon === "TikTok" && (
              <span style={{ width: 24, height: 24, display: "inline-block" }}>
                <TikTokIcon />
              </span>
            )}
          </Link>
        ))}
      </div>
      <Image
        src="/aeo.png"
        alt="Social Media"
        width={160}
        height={80}
        className="w-40 h-auto"
      />
    </div>
  );
};

export default SocialMedia;
