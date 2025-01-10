export const Config = {
  headers: { "hasura-m-auth": process.env.CACHING_PLUGIN_SECRET },
  time_to_live: 600,
  redis_url: "redis://local.hasura.dev:6379",
  otel_endpoint: process.env.OTLP_ENDPOINT,
  otel_headers: {},

  queries_to_cache: [
    `query MyQuery {
  appaccessFobs {
    deactivatedAt
    fobId
  }
}`],
};
