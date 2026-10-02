// Run in cua_repl: await (await import('/absolute/path/scripts/check_case_visuals.mjs')).checkCaseVisuals(tab, baseURL)
export async function checkCaseVisuals(tab, baseURL) {
  for (const path of ["/", "/es", "/iparkings", "/es/iparkings"]) {
    await tab.goto(baseURL + path);
    for (const figure of await tab.playwright.locator(".case-exhibit").all()) {
      for (const mode of ["first", "second"]) {
        const id = await figure.locator(`.mode-${mode}`).getAttribute("id");
        await figure.locator(`label[for="${id}"]`).click();
        const visible = await figure.locator(".exhibit-scene").evaluateAll(scenes => scenes.filter(scene => getComputedStyle(scene).display !== "none").map(scene => scene.className));
        if (visible.length !== 1 || !visible[0].includes(`${mode}-scene`)) throw new Error(`${path}, ${id}: expected only ${mode}, got ${visible}`);
      }
      await figure.locator(".mode-second").press("ArrowLeft");
      if (!await figure.locator(".first-scene").isVisible() || await figure.locator(".second-scene").isVisible()) throw new Error(`${path}: keyboard toggle failed`);
    }
  }
  return "Both states and keyboard checked on home and iParkings detail, in both languages.";
}
