module.exports = [
"[project]/translations/en.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/translations_en_json_7bfac67d._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/translations/en.json (json)");
    });
});
}),
"[project]/translations/uk.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/translations_uk_json_8ce730fb._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/translations/uk.json (json)");
    });
});
}),
];