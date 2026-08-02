import { whatsappLink } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(
        "Hi SVR Hume Pipes, I would like to enquire about RCC hume pipes. Please share pricing and availability."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white font-semibold shadow-lg hover:bg-[#1EBE5D] transition-transform hover:scale-105 animate-float"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.708.888.34 0 .32-.015.31-.32-.014-.34-.014-.674-.028-1.017 0-.315.045-.487-.316-.487M16 4a12 12 0 0 0-11.19 16.35L3 28l7.79-2.05A12 12 0 1 0 16 4m0 22a10 10 0 0 1-5.14-1.42l-.37-.22-4.62 1.21 1.23-4.5-.24-.38A10 10 0 1 1 16 26" />
      </svg>
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
