import fetchJsonLd from "./fetchJsonLd";
import get from "lodash.get";

export default async entrypointUrl => {
  return await fetchJsonLd(entrypointUrl, { itemsPerPage: 0 }).then(
    d => ({
      filters: get(d, "body.hydra:search.hydra:mapping")
    }),
    () => {
      throw new Error("Unreachable resource");
    }
  );
};
