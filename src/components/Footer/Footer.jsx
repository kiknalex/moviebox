import SocialIcons from "./SocialIcons";
import InfoLinks from "./InfoLinks";
import ApiAttribution from "./ApiAttribution";
export default function Footer() {
  return (
    <footer className="container flex flex-col items-center justify-center gap-6 mt-20">
      <InfoLinks />
      <h4 className="font-bold text-lg">MovieBox by Aleksandre Kiknadze</h4>
      <SocialIcons />
      <ApiAttribution />
    </footer>
  );
}
