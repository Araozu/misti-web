import YAML from "yaml";
import { createSignal } from "solid-js";

export const [language, setLanguage] = createSignal("en");

export interface DocsVersions {
    versions: string[]
}

export const [currentVersions, setCurrentVersions] = createSignal<DocsVersions>({versions: []});
(async() => {
    const docsInfoPath = `/txt/${language()}/docs/index.yaml`;
    const dataRaw = await fetch(docsInfoPath);
    const dataTxt = await dataRaw.text();
    const versions = YAML.parse(dataTxt) as DocsVersions;
    setCurrentVersions(versions);
})();


