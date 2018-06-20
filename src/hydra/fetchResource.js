import fetchJsonLd from "./fetchJsonLd";
import get from "lodash.get";

export default async (entrypointUrl, options = {}) => {
  let opts = { ...options, itemsPerPage: 0 };
  return await fetchJsonLd(entrypointUrl, opts).then(
    d => ({
      filters: get(d, "body.hydra:search.hydra:mapping")
    }),
    response => {
      // We need to return response to handle 401 -> login redirection (example) after parseHydraDocumentation
      return response;
    }
  );
};
