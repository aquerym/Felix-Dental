/** Hebrew layout config — isolated from en/ru. Edit here for HE-only changes. */
export const heLayout = {
  fontSans: "font-['Rubik',sans-serif]" as const,
  dir: "rtl" as const,
  textAlign: "text-right",
  itemsAlign: "items-end",
  justifyStart: "justify-end",
  hero: { containerWidth: "md:w-[649px]", subtitleMaxW: "md:max-w-[607px]", itemsAlign: "items-start", buttonsFirst: false as const, ctaFirst: true as const, marginTop: "-mt-[90px]", frame12Width: "md:w-[681px]", titleWidth: "min-w-full", heroTextGap: "gap-[10px]" },
  buttons: { ctaWidth: "w-[161px]", demoMinW: "min-w-[160px]", fontSize: "text-[14px] md:text-[18px]" },
  footer: { descWidth: "w-[288px]", logoColumnItems: "items-start", columnAlign: "items-start justify-start", frame7Display: "flex flex-col" },
  advantages: { cardDescW: "w-[243px]", frame29Gap: "gap-[80px]", frame29Justify: "", frame25Justify: "justify-start", frame27Justify: "justify-between", frame27Gap: "gap-0 md:gap-0", frame27TextWidth: "w-full md:w-[561px]", frame27TextAlign: "text-right", frame27OrderReversed: true, frame28TextAlign: "text-right", frame28FontSize: "text-[26px]", frame28Width: "w-full md:w-[316px]", frame24Padding: "pb-[30px] md:pb-[30px] pt-[30px] md:pt-[30px] px-[21px] md:px-[21px]", card1TitleWidth: "w-[269px]" },
  valueForBusiness: { frame9Justify: "justify-between", frame3Justify: "justify-start", titleTextAlign: "text-right", imageLeft: "md:left-[37px]", imageMobilePos: "left-[10px]", card1MobilePos: "left-[-10px]", frame9Gap: "gap-0" },
  integrations: { frame9Justify: "", frame9Items: "items-center md:items-start", frame4Justify: "justify-start", frame6Height: "h-auto md:h-fit", frame9Gap: "gap-[30px]", frame6Gap: "gap-[30px] md:gap-[50px]" },
  cta: { titleWidth: "md:w-[719px]", buttonsDirection: "" },
  workflow: { frame12TextAlign: "text-right" },
};
