type P = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const PhoneIcon = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MailIcon = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const ArrowIcon = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const WhatsAppIcon = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.708.888.34 0 .32-.015.31-.32-.014-.34-.014-.674-.028-1.017 0-.315.045-.487-.316-.487M16 4a12 12 0 0 0-11.19 16.35L3 28l7.79-2.05A12 12 0 1 0 16 4m0 22a10 10 0 0 1-5.14-1.42l-.37-.22-4.62 1.21 1.23-4.5-.24-.38A10 10 0 1 1 16 26" />
  </svg>
);

// Lucide-style line icons. Body is the inner SVG markup on a 24×24 grid.
const make = (body: React.ReactNode) =>
  function Icon({ className = "h-5 w-5" }: P) {
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        {body}
      </svg>
    );
  };

export const CheckIcon = make(<path d="M20 6 9 17l-5-5" />);
export const ChevronIcon = make(<path d="m9 18 6-6-6-6" />);
export const CloseIcon = make(<path d="M18 6 6 18M6 6l12 12" />);
export const ClockIcon = make(<><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>);
export const MapPinIcon = make(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>);
export const ZapIcon = make(<path d="M13 2 3 14h9l-1 8 10-12h-9z" />);
export const TruckIcon = make(<><path d="M1 4h14v12H1zM15 9h4l3 3v4h-7" /><circle cx="5.5" cy="18.5" r="2" /><circle cx="18.5" cy="18.5" r="2" /></>);
export const FactoryIcon = make(<><path d="M2 20V9l6 4V9l6 4V4h4l2 16z" /><path d="M2 20h20" /></>);
export const FileIcon = make(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8" /></>);
export const TargetIcon = make(<><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>);
export const EyeIcon = make(<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>);
export const AwardIcon = make(<><circle cx="12" cy="8" r="6" /><path d="M15.5 13 17 22l-5-3-5 3 1.5-9" /></>);
export const LayersIcon = make(<path d="m12 2 10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5" />);
export const InstagramIcon = make(<><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>);
export const BuildingIcon = make(<><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" /></>);
export const RoadIcon = make(<path d="M4 22 8 2M20 22 16 2M12 4v3M12 11v3M12 18v3" />);
export const DropletIcon = make(<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12.5 5.5 12 3c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z" />);
export const HomeIcon = make(<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />);
export const TrainIcon = make(<><rect x="4" y="3" width="16" height="13" rx="3" /><path d="M4 10h16M12 3v7M8 19l-2 3M16 19l2 3M8 13h.01M16 13h.01" /></>);
export const HardHatIcon = make(<><path d="M2 17h20v2H2zM4 17v-3a8 8 0 0 1 16 0v3" /><path d="M10 7V4h4v3" /></>);

export const industryIcons: Record<string, (p: P) => JSX.Element> = {
  building: BuildingIcon,
  road: RoadIcon,
  droplet: DropletIcon,
  home: HomeIcon,
  factory: FactoryIcon,
  train: TrainIcon,
  highway: TruckIcon,
  hardhat: HardHatIcon,
};
