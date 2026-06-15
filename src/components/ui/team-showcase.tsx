"use client";

import { useState } from "react";
import { FaLinkedinIn, FaTwitter, FaBehance, FaInstagram } from "react-icons/fa";
import { cn } from "../../lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Sama Srikanth",
    role: "PULMONOLOGIST",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "2",
    name: "Dr. B. Rakesh",
    role: "GENERAL AND LAPAROSCOPIC SURGEON",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "3",
    name: "Dr. U. Deepthi",
    role: "GYNAECOLOGIST AND INFERTILITY SPECIALIST",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "4",
    name: "Dr. B. Pallavi",
    role: "PAEDIATRICIAN",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "5",
    name: "Dr. Sasank Akurati",
    role: "NEURO SURGEON",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "6",
    name: "Dr. P. Anasuya",
    role: "GENERAL MEDICINE",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "7",
    name: "Dr. B. Vinay",
    role: "GASTROENTEROLOGIST",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f0871?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "8",
    name: "Dr. K.V.N. Gowtham Varma",
    role: "ORTHOPAEDICIAN",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?secondary&w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamShowcase({
  members = DEFAULT_MEMBERS,
}: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="select-none w-full font-body">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial =
    member.social?.twitter ??
    member.social?.linkedin ??
    member.social?.instagram ??
    member.social?.behance;

  return (
    <div
      className={cn(
        "cursor-pointer transition-opacity duration-300",
        isDimmed ? "opacity-50" : "opacity-100"
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social */}
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300",
            isActive
              ? "bg-primary w-5"
              : "bg-primary/25"
          )}
        />
        <span
          className={cn(
            "text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300 font-headline",
            isActive ? "text-primary" : "text-on-surface/80"
          )}
        >
          {member.name}
        </span>

        {/* Social icons */}
        {hasSocial && (
          <div
            className={cn(
              "flex items-center gap-1.5 ml-0.5 transition-all duration-200",
              isActive
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-2 pointer-events-none"
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-150 hover:scale-110"
                title="X / Twitter"
              >
                <FaTwitter size={10} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn size={10} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-150 hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={10} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all duration-150 hover:scale-110"
                title="Behance"
              >
                <FaBehance size={10} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-1.5 pl-[27px] text-[7px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-on-surface-variant">
        {member.role}
      </p>
    </div>
  );
}
