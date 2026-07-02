// TEMP(gaddox): wire SpacetimeDBProvider in app/app.vue once module bindings are generated
// spacetime generate --lang typescript --out-dir app/module_bindings
// Then: import { DbConnection } from '~/module_bindings'
// const builder = DbConnection.builder().withUri(cfg.spacetimedbUri).withDatabaseName(cfg.spacetimedbModule)
export default defineNuxtPlugin(() => {})
