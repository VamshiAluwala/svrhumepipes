import { site, telLink, whatsappLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

const msg =
  "Hi SVR Hume Pipes, I would like to enquire about RCC hume pipes. Please share pricing and availability.";

export function WhatsAppButton() {
  return (
    <>
      {/* Mobile: sticky Call + WhatsApp bar, ad traffic lands here, keep both actions one tap away */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-steel-900/10 bg-white/90 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-xl">
        <a
          href={telLink}
          aria-label={`Call ${site.phoneDisplay}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-steel-900 py-3 text-[15px] font-semibold text-white active:scale-[0.98] transition"
        >
          <PhoneIcon className="h-[18px] w-[18px]" /> Call now
        </a>
        <a
          href={whatsappLink(msg)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-[15px] font-semibold text-white active:scale-[0.98] transition"
        >
          <WhatsAppIcon className="h-5 w-5" /> WhatsApp
        </a>
      </div>

      {/* Desktop: floating pill */}
      <a
        href={whatsappLink(msg)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden lg:flex fixed bottom-6 right-6 z-50 items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white font-semibold shadow-lg shadow-black/10 hover:bg-[#1EBE5D] hover:-translate-y-0.5 transition"
      >
        <WhatsAppIcon className="h-6 w-6" />
        WhatsApp us
      </a>
    </>
  );
}
