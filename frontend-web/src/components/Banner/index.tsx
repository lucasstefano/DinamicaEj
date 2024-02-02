import { BannerMensage, BannerStyle, BannerText, CorBannerMensage } from "./style";

interface BannerComponentProps {
  title: string;
  subtitle: string;
}

interface BannerHomeProps {
  title: string;
}

export function BannerComponent({ title, subtitle }: BannerComponentProps) {
  return (
    <BannerStyle>
      <BannerMensage>{subtitle}</BannerMensage>
      <BannerText>{title}</BannerText>
    </BannerStyle>
  );
}

export function BannerHome({ title }: BannerHomeProps) {
  return (
    <BannerStyle>
      <BannerMensage>Olá! <CorBannerMensage>{title}</CorBannerMensage>, </BannerMensage>
      <BannerText>Vamos Aprender Novas Coisas!</BannerText>
    </BannerStyle>
  );
}
