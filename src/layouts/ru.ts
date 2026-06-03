/** Russian layout config — isolated from he/en. Edit here for RU-only changes. */
export const ruLayout = {
  fontSans: "font-['Montserrat',sans-serif]" as const,
  dir: "ltr" as const,
  textAlign: "text-left",
  itemsAlign: "items-start",
  justifyStart: "justify-start",
  hero: { containerWidth: "md:w-full", subtitleMaxW: "md:max-w-[700px]", itemsAlign: "items-end", buttonsFirst: false as const, ctaFirst: true as const, marginTop: "-mt-[70px]", frame12Width: "md:w-[790px]", titleWidth: "min-w-full", heroTextGap: "gap-[10px]", buttonsDirection: "flex-col md:flex-row", buttonsAlign: "items-end md:items-center justify-center", logoMobileMargin: "ml-0" },
  buttons: { ctaWidth: "min-w-0 md:min-w-[200px] w-auto", demoMinW: "min-w-0 md:min-w-[180px]", fontSize: "text-[14px] md:text-[18px]" },
  footer: { descWidth: "w-[288px] md:max-w-[400px]", itemsAlign: "items-start", logoColumnItems: "items-start", columnAlign: "items-start justify-start", frame7Display: "hidden md:flex" },
  advantages: { cardDescW: "w-full max-w-[300px]", frame29Gap: "gap-[80px]", frame29Justify: "", frame25Justify: "justify-end", frame27Justify: "justify-end", frame27Gap: "gap-[30px] md:gap-[10px]", frame27TextWidth: "", frame27TextAlign: "text-left", frame27OrderReversed: false, frame28TextAlign: "text-left", frame28FontSize: "text-[20px]", frame28Width: "w-full", frame24Padding: "", card1TitleWidth: "w-[269px]", titleMobileWidth: "w-[250px]" },
  valueForBusiness: { frame9Justify: "justify-between", frame3Justify: "justify-start md:justify-end", titleTextAlign: "text-left", imageLeft: "md:left-[417px]", imageMobilePos: "right-[10px]", card1MobilePos: "right-[-30px] md:right-auto", card1MobileBottom: "bottom-[10px]", card1ShadowBottom: "bottom-[19px]", cardMobileHeight: "h-[400px]", card4ImageMobileTop: "top-[170px]", frame9Gap: "gap-0" },
  integrations: { frame9Justify: "justify-between", frame9Items: "items-center md:items-start", frame4Justify: "justify-start", frame6Height: "h-auto md:h-[366px]", frame9Gap: "gap-[20px]", frame6Gap: "gap-[30px] md:gap-[50px]", frame7MobileDir: "flex-col" },
  cta: { titleWidth: "md:w-[719px]", buttonsDirection: "flex-col-reverse md:flex-row" },
  trouble: { tab2MaxW: "max-w-[55px]" },
  workflow: { frame12TextAlign: "text-right" },
};
