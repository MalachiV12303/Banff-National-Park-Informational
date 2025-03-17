import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderScript, f as renderHead, g as renderSlot, h as renderComponent } from '../chunks/astro/server_DCLNMX4h.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$ContentSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContentSection;
  const { imageUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-2w3r3o6g> <img${addAttribute(imageUrl, "src")} data-astro-cid-2w3r3o6g> <div data-astro-cid-2w3r3o6g> <h1 data-astro-cid-2w3r3o6g>Canada's First National Park</h1> <p data-astro-cid-2w3r3o6g>
Rocky Mountain peaks, turquoise glacial lakes, a picture-perfect
			mountain town and village, abundant wildlife and scenic drives come
			together in Banff National Park - Canada's first national park and
			the flagship of the nation's park system.
</p> <p data-astro-cid-2w3r3o6g>
Vibrant lakes, majestic mountains and easy access to outdoor
			adventures of all kinds.
</p> </div> </section> `;
}, "C:/.aWork/projects/banff-informational/src/components/ContentSection.astro", void 0);

const $$Landing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-sefmxpgk> <h1 class="testFadeIn noselect" data-astro-cid-sefmxpgk>
banff
</h1> </section> ${renderScript($$result, "C:/.aWork/projects/banff-informational/src/components/Landing.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/.aWork/projects/banff-informational/src/components/Landing.astro", void 0);

const $$Astro$1 = createAstro();
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TitleSection;
  const { topWord, bottomWord, imageUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-wvqd5tb7> <img id="parallax"${addAttribute(imageUrl, "src")} data-astro-cid-wvqd5tb7> <h1 id="title" data-astro-cid-wvqd5tb7>${topWord}<span data-astro-cid-wvqd5tb7>${bottomWord}</span></h1> </section> ${renderScript($$result, "C:/.aWork/projects/banff-informational/src/components/TitleSection.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/.aWork/projects/banff-informational/src/components/TitleSection.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/bannfIcon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Banff Informational</title>${renderHead()}</head> <body id="viewport" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/.aWork/projects/banff-informational/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Landing", $$Landing, {})} ${renderComponent($$result2, "ContentSection", $$ContentSection, { "imageUrl": "src/assets/banff1.jpg" })} ${renderComponent($$result2, "TitleSection", $$TitleSection, { "imageUrl": "src/assets/banffTitle1.jpg", "topWord": "discover", "bottomWord": "banff" })} ${renderComponent($$result2, "ContentSection", $$ContentSection, {})} ${renderComponent($$result2, "TitleSection", $$TitleSection, { "imageUrl": "src/assets/banffTitle2.jpg", "topWord": "explore", "bottomWord": "history" })} ${renderComponent($$result2, "ContentSection", $$ContentSection, {})} ` })}`;
}, "C:/.aWork/projects/banff-informational/src/pages/index.astro", void 0);

const $$file = "C:/.aWork/projects/banff-informational/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
