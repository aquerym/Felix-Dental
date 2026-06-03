/** English layout config — isolated from he/ru. Edit here for EN-only changes. */
export const enLayout = {
  fontSans: "font-['Rubik',sans-serif]" as const,
  dir: "ltr" as const,
  textAlign: "text-left",
  itemsAlign: "items-start",
  justifyStart: "justify-start",
  hero: { containerWidth: "md:w-full", subtitleMaxW: "md:max-w-[680px]", itemsAlign: "items-end", buttonsFirst: false as const, ctaFirst: false as const, marginTop: "-mt-[70px]", frame12Width: "md:w-[615px]", titleWidth: "min-w-full", heroTextGap: "gap-[20px]", buttonsDirection: "flex-col md:flex-row", buttonsAlign: "items-end md:items-center justify-center", logoMobileMargin: "ml-0" },
  buttons: { ctaWidth: "min-w-0 md:min-w-[200px] w-auto", demoMinW: "min-w-0 md:min-w-[180px]", fontSize: "text-[14px] md:text-[18px]" },
  footer: { descWidth: "w-[288px] md:max-w-[380px]", itemsAlign: "items-start", logoColumnItems: "items-start", columnAlign: "items-start justify-start", frame7Display: "hidden md:flex" },
  advantages: { cardDescW: "w-full max-w-[280px]", frame29Gap: "gap-[213px]", frame29Justify: "justify-between", frame25Justify: "justify-end", frame27Justify: "justify-between", frame27Gap: "gap-0 md:gap-0", frame27TextWidth: "w-[351px] max-w-[351px]", frame27TextAlign: "text-left", frame27OrderReversed: false, frame28TextAlign: "text-left", frame28FontSize: "text-[28px]", frame28Width: "w-full", frame24Padding: "", card1TitleWidth: "w-[215px]" },
  valueForBusiness: { frame9Justify: "justify-between", frame3Justify: "justify-start md:justify-end", titleTextAlign: "text-left", imageLeft: "md:left-[417px]", imageMobilePos: "right-[10px]", card1MobilePos: "right-[-30px] md:right-auto", card1MobileBottom: "bottom-[10px]", card1ShadowBottom: "bottom-[19px]", cardMobileHeight: "h-[350px]", frame9Gap: "gap-[16px]" },
  integrations: { frame9Justify: "justify-between", frame9Items: "items-center md:items-start", frame4Justify: "justify-start", frame6Height: "h-auto md:h-[366px]", frame9Gap: "gap-[20px]", frame6Gap: "gap-[30px] md:gap-[30px]", frame7MobileDir: "flex-col" },
  cta: { titleWidth: "md:w-[572px]", buttonsDirection: "flex-col-reverse md:flex-row" },
  trouble: { tab2MaxW: "max-w-[55px]" },
  workflow: { frame12TextAlign: "text-left" },
};
