import Image from "next/image";
import type { Locale } from "@/content";

/** Native radios keep the visual comparison usable with keyboard and without JavaScript. */
export default function CaseVisual({ project, locale, scope }: { project: "medshift" | "iparkings" | "weedly"; locale: Locale; scope: string }) {
  const es = locale === "es";
  const id = `${scope}-${project}`;
  return (
    <figure className={`case-exhibit exhibit-${project}`}>
      <fieldset className="exhibit-controls">
        <legend className="sr-only">{es ? "Explorar el caso" : "Explore the case"}</legend>
        <input className="exhibit-radio mode-first" type="radio" id={`${id}-first`} name={id} defaultChecked={project !== "medshift"} />
        <label htmlFor={`${id}-first`}>{project === "medshift" ? (es ? "Investigación" : "Research") : project === "weedly" ? (es ? "Web pública" : "Public website") : (es ? "Antes" : "Before")}</label>
        <input className="exhibit-radio mode-second" type="radio" id={`${id}-second`} name={id} defaultChecked={project === "medshift"} />
        <label htmlFor={`${id}-second`}>{project === "medshift" ? (es ? "Producto" : "Product") : project === "weedly" ? (es ? "Asociarse" : "Membership") : (es ? "Después" : "After")}</label>
      </fieldset>
      {project === "medshift" ? (
        <>
          <div className="exhibit-scene research-scene first-scene">
            <p className="research-question">{es ? "¿Agenda o cobros?" : "Calendar or income?"}</p>
            <div className="research-tally"><strong>29<span>/50</span></strong></div>
            <div className="response-map" aria-hidden="true">{Array.from({ length: 50 }, (_, i) => <span key={i} className={i < 29 ? "response-selected" : undefined} />)}</div>
            <p className="research-answer">{es ? "Priorizaron saber cuánto iban a cobrar y de dónde." : "Prioritized knowing how much they would earn, and from where."}</p>
            <p className="research-note">{es ? "Solo 2 eligieron organizar guardias como su mayor estrés. Cambié el foco del MVP." : "Only 2 chose organizing shifts as their biggest stress. I changed the MVP’s focus."}</p>
          </div>
          <div className="exhibit-scene product-scene second-scene">
            <span className="exhibit-word" aria-hidden="true">MedShift</span>
            <Image src="/images/medshift-home.webp" alt={es ? "Inicio de MedShift con proyección de cobros. Datos ficticios." : "MedShift home with projected income. Fictional data."} width={780} height={1688} sizes="(max-width: 767px) 47vw, 300px" className="exhibit-phone phone-home" />
            <Image src="/images/medshift-calendar.webp" alt={es ? "Calendario de MedShift. Datos ficticios." : "MedShift calendar. Fictional data."} width={780} height={1688} sizes="(max-width: 767px) 42vw, 260px" className="exhibit-phone phone-calendar" />
          </div>
          <figcaption><span className="first-caption">{es ? "Encuesta propia a 50 médicos, mayo y junio de 2026." : "My survey of 50 doctors, May and June 2026."}</span><span className="second-caption">{es ? "Pantallas reales de MedShift. Datos ficticios." : "Real MedShift screens. Fictional data."}</span></figcaption>
        </>
      ) : project === "weedly" ? (
        <>
          <div className="exhibit-scene public-site-scene first-scene">
            <Image src="/images/weedly-public-web.jpg" alt={es ? "Portada pública de Weedly: Menos vueltas. Más club." : "Weedly public homepage: Menos vueltas. Más club."} width={1280} height={720} sizes="(max-width: 767px) 90vw, 65vw" />
          </div>
          <div className="exhibit-scene public-site-scene second-scene">
            <Image src="/images/weedly-public-membership.jpg" alt={es ? "Página pública de Weedly para asociarse a un club: Tu próxima comunidad." : "Weedly public club membership page: Tu próxima comunidad."} width={1280} height={720} sizes="(max-width: 767px) 90vw, 65vw" />
          </div>
          <figcaption><span className="first-caption">{es ? "Captura de la web pública de Weedly." : "Screenshot of Weedly’s public website."}</span><span className="second-caption">{es ? "Captura de la página pública para asociarse a un club." : "Screenshot of the public club membership page."}</span></figcaption>
        </>
      ) : (
        <>
          <div className="exhibit-scene payment-scene first-scene">
            <p className="payment-label">{es ? "El flujo original" : "The original flow"}</p>
            <strong className="payment-number">6<span>–</span>8</strong>
            <div className="payment-path" aria-hidden="true">{Array.from({ length: 8 }, (_, i) => <span key={i} className={i >= 6 ? "optional-step" : undefined}>{i + 1}</span>)}</div>
            <p className="payment-unit">{es ? "pasos para pagar" : "steps to pay"}</p>
          </div>
          <div className="exhibit-scene payment-scene second-scene">
            <p className="payment-label">{es ? "El flujo rediseñado" : "The redesigned flow"}</p>
            <strong className="payment-number">4<span>–</span>6</strong>
            <div className="payment-path" aria-hidden="true">{Array.from({ length: 6 }, (_, i) => <span key={i} className={i >= 4 ? "optional-step" : undefined}>{i + 1}</span>)}</div>
            <p className="payment-unit">{es ? "pasos para pagar" : "steps to pay"}</p>
          </div>
          <figcaption>{es ? "Representación del número de pasos. Interfaces confidenciales." : "A visualization of the step count. Interfaces are confidential."}</figcaption>
        </>
      )}
    </figure>
  );
}
