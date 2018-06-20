import Filter from "../Filter";
import fetchResource from "./fetchResource";

export default (api, options = {}) => {
  const promises = [];

  for (const resource of api.resources) {
    let promise = fetchResource(resource.url, options).then(response => {
      if (!response.filters) {
        return [];
      }

      const resourceFilters = [];

      for (const filter of response.filters) {
        let property = filter.property;

        if (property === null) {
          continue;
        }

        resourceFilters.push(new Filter(property, filter.variable));
      }

      return resourceFilters;
    });

    promises.push(promise);
  }

  return Promise.all(promises).then(values => {
    api.resources.map((resource, index) => {
      resource.filters = values[index];
    });

    return api;
  });
};
