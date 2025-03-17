import RESTSerializer from '@ember-data/serializer/rest';

export default class MovieSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // TMDB rest api returns data inside results:[] ; but Ember expects them at the root
    payload = { movies: payload.results };

    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType,
    );
  }
}
