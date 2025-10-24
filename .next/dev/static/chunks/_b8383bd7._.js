(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/pkg/libraries/rest-api/fetcher/rest-api.fetcher.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "restApiFetcher",
    ()=>restApiFetcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/index.js [app-client] (ecmascript) <locals>");
;
const restApiFetcher = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].create({
    prefixUrl: ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000',
    credentials: 'include',
    throwHttpErrors: false,
    hooks: {
        beforeRequest: [
            (request)=>{
                console.log('🌐 RestApiFetcher request:', request.url);
                if (("TURBOPACK compile-time value", "object") === 'undefined' && request.url.startsWith('/')) //TURBOPACK unreachable
                ;
                return request;
            }
        ],
        afterResponse: [
            (request, options, response)=>{
                console.log('🌐 RestApiFetcher response:', response.status, request.url);
                return response;
            }
        ]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pkg/libraries/rest-api/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pkg$2f$libraries$2f$rest$2d$api$2f$fetcher$2f$rest$2d$api$2e$fetcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pkg/libraries/rest-api/fetcher/rest-api.fetcher.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/entities/api/books/books.api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "booksQueryApi",
    ()=>booksQueryApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pkg$2f$libraries$2f$rest$2d$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pkg/libraries/rest-api/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pkg$2f$libraries$2f$rest$2d$api$2f$fetcher$2f$rest$2d$api$2e$fetcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pkg/libraries/rest-api/fetcher/rest-api.fetcher.ts [app-client] (ecmascript)");
;
const booksQueryApi = async (opt, queryParams)=>{
    const { search } = queryParams || {};
    try {
        const hasSearch = search && search.trim().length > 0;
        const url = hasSearch ? `api/books?search=${encodeURIComponent(search.trim())}` : 'api/books';
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pkg$2f$libraries$2f$rest$2d$api$2f$fetcher$2f$rest$2d$api$2e$fetcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restApiFetcher"].get(url, {
            signal: opt.signal,
            cache: 'force-cache',
            next: {
                revalidate: 30
            }
        }).json();
        if (!res) {
            throw new Error('Books not found');
        }
        return res;
    } catch (error) {
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/entities/api/books/books.query.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "booksQueryKeys",
    ()=>booksQueryKeys,
    "useBooksQuery",
    ()=>useBooksQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$entities$2f$api$2f$books$2f$books$2e$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/entities/api/books/books.api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const booksQueryKeys = {
    all: [
        'books'
    ],
    search: (searchQuery)=>[
            ...booksQueryKeys.all,
            'search',
            searchQuery
        ]
};
const useBooksQuery = (searchQuery)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "e81f85caee0b2136bfec1efa24925c8f73a28835cca770f6a9212493f1c461a0") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e81f85caee0b2136bfec1efa24925c8f73a28835cca770f6a9212493f1c461a0";
    }
    let t0;
    if ($[1] !== searchQuery) {
        t0 = booksQueryKeys.search(searchQuery);
        $[1] = searchQuery;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== searchQuery) {
        t1 = (opt)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$entities$2f$api$2f$books$2f$books$2e$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["booksQueryApi"])(opt, {
                search: searchQuery
            });
        $[3] = searchQuery;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== t0 || $[6] !== t1) {
        t2 = {
            queryKey: t0,
            queryFn: t1
        };
        $[5] = t0;
        $[6] = t1;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t2);
};
_s(useBooksQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/features/block/books-list-block/books-list-block.component.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$entities$2f$api$2f$books$2f$books$2e$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/entities/api/books/books.query.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// component
const BooksListBlockComponent = (props)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "13d204cf7f152d7e2e030debf9201c0ea8b68657dc11b061056401e9c89569f2") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "13d204cf7f152d7e2e030debf9201c0ea8b68657dc11b061056401e9c89569f2";
    }
    const { searchQuery: t0 } = props;
    const searchQuery = t0 === undefined ? "" : t0;
    const { data: books, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$entities$2f$api$2f$books$2f$books$2e$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBooksQuery"])(searchQuery);
    if (isLoading) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-lg",
                    children: "Loading books..."
                }, void 0, false, {
                    fileName: "[project]/src/app/features/block/books-list-block/books-list-block.component.tsx",
                    lineNumber: 33,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/features/block/books-list-block/books-list-block.component.tsx",
                lineNumber: 33,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    if (error) {
        let t1;
        if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-lg text-red-600",
                    children: "Error loading books"
                }, void 0, false, {
                    fileName: "[project]/src/app/features/block/books-list-block/books-list-block.component.tsx",
                    lineNumber: 43,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/features/block/books-list-block/books-list-block.component.tsx",
                lineNumber: 43,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[2] = t1;
        } else {
            t1 = $[2];
        }
        return t1;
    }
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold",
            children: "Books from Database"
        }, void 0, false, {
            fileName: "[project]/src/app/features/block/books-list-block/books-list-block.component.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== books) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                t1,
                books && books.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "No books found"
                }, void 0, false, {
                    fileName: "[project]/src/app/features/block/books-list-block/books-list-block.component.tsx",
                    lineNumber: 59,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                    children: books?.map(_temp)
                }, void 0, false, {
                    fileName: "[project]/src/app/features/block/books-list-block/books-list-block.component.tsx",
                    lineNumber: 59,
                    columnNumber: 122
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/features/block/books-list-block/books-list-block.component.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = books;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
};
_s(BooksListBlockComponent, "4GaOyQhoRIyjNAvxJEamf1tNT1s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$entities$2f$api$2f$books$2f$books$2e$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBooksQuery"]
    ];
});
_c = BooksListBlockComponent;
const __TURBOPACK__default__export__ = BooksListBlockComponent;
function _temp(book) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-medium",
                children: book.title
            }, void 0, false, {
                fileName: "[project]/src/app/features/block/books-list-block/books-list-block.component.tsx",
                lineNumber: 69,
                columnNumber: 63
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600",
                children: book.author
            }, void 0, false, {
                fileName: "[project]/src/app/features/block/books-list-block/books-list-block.component.tsx",
                lineNumber: 69,
                columnNumber: 108
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-400",
                children: [
                    "Published: ",
                    book.publishedYear
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/features/block/books-list-block/books-list-block.component.tsx",
                lineNumber: 69,
                columnNumber: 162
            }, this)
        ]
    }, book.id, true, {
        fileName: "[project]/src/app/features/block/books-list-block/books-list-block.component.tsx",
        lineNumber: 69,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "BooksListBlockComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/features/block/books-list-block/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$features$2f$block$2f$books$2d$list$2d$block$2f$books$2d$list$2d$block$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/features/block/books-list-block/books-list-block.component.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/features/block/search-form-block/search-form-block.component.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/input'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// component
const SearchFormBlockComponent = (props)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "b76f6c0d884e784d4ac73835cf25e474aac8339fd90cbb114ddb96341453de2c") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b76f6c0d884e784d4ac73835cf25e474aac8339fd90cbb114ddb96341453de2c";
    }
    const { onSearch, initialValue: t0 } = props;
    const initialValue = t0 === undefined ? "" : t0;
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValue);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    let t1;
    if ($[1] !== onSearch || $[2] !== query) {
        t1 = (e)=>{
            e.preventDefault();
            onSearch(query);
        };
        $[1] = onSearch;
        $[2] = query;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleSubmit = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (e_0)=>setQuery(e_0.target.value);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t) {
        t3 = t("Search.placeholder");
        $[5] = t;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== query || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
            value: query,
            onChange: t2,
            placeholder: t3,
            className: "flex-1"
        }, void 0, false, {
            fileName: "[project]/src/app/features/block/search-form-block/search-form-block.component.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = query;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t) {
        t5 = t("Search.button");
        $[10] = t;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
            type: "submit",
            className: "shrink-0",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/features/block/search-form-block/search-form-block.component.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t4 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/features/block/search-form-block/search-form-block.component.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t4;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== handleSubmit || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "w-full max-w-md",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/app/features/block/search-form-block/search-form-block.component.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = handleSubmit;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    return t8;
};
_s(SearchFormBlockComponent, "4nM68qy+gt8tviplYDw4jBJ9j68=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = SearchFormBlockComponent;
const __TURBOPACK__default__export__ = SearchFormBlockComponent;
var _c;
__turbopack_context__.k.register(_c, "SearchFormBlockComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/features/block/search-form-block/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$features$2f$block$2f$search$2d$form$2d$block$2f$search$2d$form$2d$block$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/features/block/search-form-block/search-form-block.component.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/features/block/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Export all block components
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$features$2f$block$2f$books$2d$list$2d$block$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/features/block/books-list-block/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$features$2f$block$2f$search$2d$form$2d$block$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/features/block/search-form-block/index.ts [app-client] (ecmascript) <locals>");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/features/block/books-list-block/books-list-block.component.tsx [app-client] (ecmascript) <export default as BooksListBlockComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BooksListBlockComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$features$2f$block$2f$books$2d$list$2d$block$2f$books$2d$list$2d$block$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$features$2f$block$2f$books$2d$list$2d$block$2f$books$2d$list$2d$block$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/features/block/books-list-block/books-list-block.component.tsx [app-client] (ecmascript)");
}),
"[project]/src/app/features/block/search-form-block/search-form-block.component.tsx [app-client] (ecmascript) <export default as SearchFormBlockComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchFormBlockComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$features$2f$block$2f$search$2d$form$2d$block$2f$search$2d$form$2d$block$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$features$2f$block$2f$search$2d$form$2d$block$2f$search$2d$form$2d$block$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/features/block/search-form-block/search-form-block.component.tsx [app-client] (ecmascript)");
}),
"[project]/src/app/shared/ui/components/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shared/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground rounded-xl border shadow', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/shared/ui/components/card.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = 'Card';
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col space-y-1.5 p-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/shared/ui/components/card.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = 'CardHeader';
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold tracking-tight', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/shared/ui/components/card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = 'CardTitle';
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/shared/ui/components/card.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = 'CardDescription';
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-6 pt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/shared/ui/components/card.tsx",
        lineNumber: 32,
        columnNumber: 37
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = 'CardContent';
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center p-6 pt-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/shared/ui/components/card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = 'CardFooter';
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/shared/ui/components/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shared/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8',
            icon: 'h-10 w-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/shared/ui/components/button.tsx",
        lineNumber: 42,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/shared/ui/components/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shared/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/shared/ui/components/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = 'Input';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/shared/ui/banner/banner.component.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
// banner component
const BannerComponent = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "2dc4607668c3b8f98bff66d42eed1893958cbe06bf068324b761927961bb2962") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2dc4607668c3b8f98bff66d42eed1893958cbe06bf068324b761927961bb2962";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mt-3.5 mb-3.5 h-[400px] max-w-[1280px] overflow-hidden rounded-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/banner.jpg",
                alt: "Banner",
                width: 1280,
                height: 400,
                sizes: "100vw",
                className: "object-cover",
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/app/shared/ui/banner/banner.component.tsx",
                lineNumber: 19,
                columnNumber: 103
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/shared/ui/banner/banner.component.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = BannerComponent;
const __TURBOPACK__default__export__ = BannerComponent;
var _c;
__turbopack_context__.k.register(_c, "BannerComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/shared/ui/container/container.component.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shared/lib/utils.ts [app-client] (ecmascript)");
;
;
;
// component
const ContainerComponent = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "231a91a7731e44b2dd05d6f7d8e2075f75d04a1f2b63fdf835b778b306c3a357") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "231a91a7731e44b2dd05d6f7d8e2075f75d04a1f2b63fdf835b778b306c3a357";
    }
    const { children, className: t0, variant: t1 } = props;
    const className = t0 === undefined ? "" : t0;
    const variant = t1 === undefined ? "main" : t1;
    let t2;
    if ($[1] !== children || $[2] !== className || $[3] !== variant) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: variant === "main" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(`mx-auto flex min-h-[calc(100vh-60px)] w-full max-w-[1280px] flex-col gap-6 pt-4 pb-8`, className),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/shared/ui/container/container.component.tsx",
                lineNumber: 30,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(`mx-auto flex w-full max-w-[1280px] flex-col gap-4`, className),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/shared/ui/container/container.component.tsx",
                lineNumber: 30,
                columnNumber: 174
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
        $[1] = children;
        $[2] = className;
        $[3] = variant;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
};
_c = ContainerComponent;
const __TURBOPACK__default__export__ = ContainerComponent;
var _c;
__turbopack_context__.k.register(_c, "ContainerComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/shared/ui/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// UI components exports
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$ui$2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shared/ui/components/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$ui$2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shared/ui/components/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$ui$2f$components$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shared/ui/components/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$ui$2f$components$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shared/ui/components/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$ui$2f$components$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shared/ui/components/form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$ui$2f$banner$2f$banner$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shared/ui/banner/banner.component.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$ui$2f$container$2f$container$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shared/ui/container/container.component.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/shared/ui/banner/banner.component.tsx [app-client] (ecmascript) <export default as BannerComponent>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BannerComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$ui$2f$banner$2f$banner$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$ui$2f$banner$2f$banner$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/shared/ui/banner/banner.component.tsx [app-client] (ecmascript)");
}),
"[project]/src/app/modules/home/home.module.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$features$2f$block$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/features/block/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$features$2f$block$2f$books$2d$list$2d$block$2f$books$2d$list$2d$block$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BooksListBlockComponent$3e$__ = __turbopack_context__.i("[project]/src/app/features/block/books-list-block/books-list-block.component.tsx [app-client] (ecmascript) <export default as BooksListBlockComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$features$2f$block$2f$search$2d$form$2d$block$2f$search$2d$form$2d$block$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchFormBlockComponent$3e$__ = __turbopack_context__.i("[project]/src/app/features/block/search-form-block/search-form-block.component.tsx [app-client] (ecmascript) <export default as SearchFormBlockComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/shared/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$ui$2f$banner$2f$banner$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BannerComponent$3e$__ = __turbopack_context__.i("[project]/src/app/shared/ui/banner/banner.component.tsx [app-client] (ecmascript) <export default as BannerComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// component
const HomeModule = (props)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "d96fc5cc66674b055aa3a8dba167bdcef9999ff114d950323a74261098295a81") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d96fc5cc66674b055aa3a8dba167bdcef9999ff114d950323a74261098295a81";
    }
    const { searchQuery: t0 } = props;
    const initialSearchQuery = t0 === undefined ? "" : t0;
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSearchQuery);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = (query)=>{
            setSearchQuery(query);
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const handleSearch = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shared$2f$ui$2f$banner$2f$banner$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BannerComponent$3e$__["BannerComponent"], {}, void 0, false, {
            fileName: "[project]/src/app/modules/home/home.module.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== t) {
        t3 = t("home.title");
        $[3] = t;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-bold",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/app/modules/home/home.module.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t) {
        t5 = t("home.subtitle");
        $[7] = t;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/modules/home/home.module.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t4 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/modules/home/home.module.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t4;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    let t9;
    if ($[14] !== searchQuery) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$features$2f$block$2f$search$2d$form$2d$block$2f$search$2d$form$2d$block$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchFormBlockComponent$3e$__["SearchFormBlockComponent"], {
                onSearch: handleSearch,
                initialValue: searchQuery
            }, void 0, false, {
                fileName: "[project]/src/app/modules/home/home.module.tsx",
                lineNumber: 90,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/modules/home/home.module.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$features$2f$block$2f$books$2d$list$2d$block$2f$books$2d$list$2d$block$2e$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BooksListBlockComponent$3e$__["BooksListBlockComponent"], {
            searchQuery: searchQuery
        }, void 0, false, {
            fileName: "[project]/src/app/modules/home/home.module.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = searchQuery;
        $[15] = t8;
        $[16] = t9;
    } else {
        t8 = $[15];
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t7 || $[18] !== t8 || $[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/modules/home/home.module.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    return t10;
};
_s(HomeModule, "6KXaXGFRx0aVSPRAGNxBF1V2QDs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = HomeModule;
const __TURBOPACK__default__export__ = HomeModule;
var _c;
__turbopack_context__.k.register(_c, "HomeModule");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryObserver.ts
__turbopack_context__.s([
    "QueryObserver",
    ()=>QueryObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var QueryObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(client, options){
        super();
        this.options = options;
        this.#client = client;
        this.#selectError = null;
        this.#currentThenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
        this.bindMethods();
        this.setOptions(options);
    }
    #client;
    #currentQuery = void 0;
    #currentQueryInitialState = void 0;
    #currentResult = void 0;
    #currentResultState;
    #currentResultOptions;
    #currentThenable;
    #selectError;
    #selectFn;
    #selectResult;
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    #lastQueryWithDefinedData;
    #staleTimeoutId;
    #refetchIntervalId;
    #currentRefetchInterval;
    #trackedProps = /* @__PURE__ */ new Set();
    bindMethods() {
        this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
        if (this.listeners.size === 1) {
            this.#currentQuery.addObserver(this);
            if (shouldFetchOnMount(this.#currentQuery, this.options)) {
                this.#executeFetch();
            } else {
                this.updateResult();
            }
            this.#updateTimers();
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.destroy();
        }
    }
    shouldFetchOnReconnect() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
        this.listeners = /* @__PURE__ */ new Set();
        this.#clearStaleTimeout();
        this.#clearRefetchInterval();
        this.#currentQuery.removeObserver(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        const prevQuery = this.#currentQuery;
        this.options = this.#client.defaultQueryOptions(options);
        if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== "boolean") {
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        }
        this.#updateQuery();
        this.#currentQuery.setOptions(this.options);
        if (prevOptions._defaulted && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: this.#currentQuery,
                observer: this
            });
        }
        const mounted = this.hasListeners();
        if (mounted && shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)) {
            this.#executeFetch();
        }
        this.updateResult();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(prevOptions.staleTime, this.#currentQuery))) {
            this.#updateStaleTimeout();
        }
        const nextRefetchInterval = this.#computeRefetchInterval();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
            this.#updateRefetchInterval(nextRefetchInterval);
        }
    }
    getOptimisticResult(options) {
        const query = this.#client.getQueryCache().build(this.#client, options);
        const result = this.createResult(query, options);
        if (shouldAssignObserverCurrentProperties(this, result)) {
            this.#currentResult = result;
            this.#currentResultOptions = this.options;
            this.#currentResultState = this.#currentQuery.state;
        }
        return result;
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    trackResult(result, onPropTracked) {
        return new Proxy(result, {
            get: (target, key)=>{
                this.trackProp(key);
                onPropTracked?.(key);
                if (key === "promise") {
                    this.trackProp("data");
                    if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
                        this.#currentThenable.reject(new Error("experimental_prefetchInRender feature flag is not enabled"));
                    }
                }
                return Reflect.get(target, key);
            }
        });
    }
    trackProp(key) {
        this.#trackedProps.add(key);
    }
    getCurrentQuery() {
        return this.#currentQuery;
    }
    refetch({ ...options } = {}) {
        return this.fetch({
            ...options
        });
    }
    fetchOptimistic(options) {
        const defaultedOptions = this.#client.defaultQueryOptions(options);
        const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
        return query.fetch().then(()=>this.createResult(query, defaultedOptions));
    }
    fetch(fetchOptions) {
        return this.#executeFetch({
            ...fetchOptions,
            cancelRefetch: fetchOptions.cancelRefetch ?? true
        }).then(()=>{
            this.updateResult();
            return this.#currentResult;
        });
    }
    #executeFetch(fetchOptions) {
        this.#updateQuery();
        let promise = this.#currentQuery.fetch(this.options, fetchOptions);
        if (!fetchOptions?.throwOnError) {
            promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        }
        return promise;
    }
    #updateStaleTimeout() {
        this.#clearStaleTimeout();
        const staleTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] || this.#currentResult.isStale || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(staleTime)) {
            return;
        }
        const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.#currentResult.dataUpdatedAt, staleTime);
        const timeout = time + 1;
        this.#staleTimeoutId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
            if (!this.#currentResult.isStale) {
                this.updateResult();
            }
        }, timeout);
    }
    #computeRefetchInterval() {
        return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
    }
    #updateRefetchInterval(nextInterval) {
        this.#clearRefetchInterval();
        this.#currentRefetchInterval = nextInterval;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) === false || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
            return;
        }
        this.#refetchIntervalId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].setInterval(()=>{
            if (this.options.refetchIntervalInBackground || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusManager"].isFocused()) {
                this.#executeFetch();
            }
        }, this.#currentRefetchInterval);
    }
    #updateTimers() {
        this.#updateStaleTimeout();
        this.#updateRefetchInterval(this.#computeRefetchInterval());
    }
    #clearStaleTimeout() {
        if (this.#staleTimeoutId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#staleTimeoutId);
            this.#staleTimeoutId = void 0;
        }
    }
    #clearRefetchInterval() {
        if (this.#refetchIntervalId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeoutManager"].clearInterval(this.#refetchIntervalId);
            this.#refetchIntervalId = void 0;
        }
    }
    createResult(query, options) {
        const prevQuery = this.#currentQuery;
        const prevOptions = this.options;
        const prevResult = this.#currentResult;
        const prevResultState = this.#currentResultState;
        const prevResultOptions = this.#currentResultOptions;
        const queryChange = query !== prevQuery;
        const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
        const { state } = query;
        let newState = {
            ...state
        };
        let isPlaceholderData = false;
        let data;
        if (options._optimisticResults) {
            const mounted = this.hasListeners();
            const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
            const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
            if (fetchOnMount || fetchOptionally) {
                newState = {
                    ...newState,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchState"])(state.data, query.options)
                };
            }
            if (options._optimisticResults === "isRestoring") {
                newState.fetchStatus = "idle";
            }
        }
        let { error, errorUpdatedAt, status } = newState;
        data = newState.data;
        let skipSelect = false;
        if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
            let placeholderData;
            if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
                placeholderData = prevResult.data;
                skipSelect = true;
            } else {
                placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(this.#lastQueryWithDefinedData?.state.data, this.#lastQueryWithDefinedData) : options.placeholderData;
            }
            if (placeholderData !== void 0) {
                status = "success";
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, placeholderData, options);
                isPlaceholderData = true;
            }
        }
        if (options.select && data !== void 0 && !skipSelect) {
            if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
                data = this.#selectResult;
            } else {
                try {
                    this.#selectFn = options.select;
                    data = options.select(data);
                    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, data, options);
                    this.#selectResult = data;
                    this.#selectError = null;
                } catch (selectError) {
                    this.#selectError = selectError;
                }
            }
        }
        if (this.#selectError) {
            error = this.#selectError;
            data = this.#selectResult;
            errorUpdatedAt = Date.now();
            status = "error";
        }
        const isFetching = newState.fetchStatus === "fetching";
        const isPending = status === "pending";
        const isError = status === "error";
        const isLoading = isPending && isFetching;
        const hasData = data !== void 0;
        const result = {
            status,
            fetchStatus: newState.fetchStatus,
            isPending,
            isSuccess: status === "success",
            isError,
            isInitialLoading: isLoading,
            isLoading,
            data,
            dataUpdatedAt: newState.dataUpdatedAt,
            error,
            errorUpdatedAt,
            failureCount: newState.fetchFailureCount,
            failureReason: newState.fetchFailureReason,
            errorUpdateCount: newState.errorUpdateCount,
            isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
            isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
            isFetching,
            isRefetching: isFetching && !isPending,
            isLoadingError: isError && !hasData,
            isPaused: newState.fetchStatus === "paused",
            isPlaceholderData,
            isRefetchError: isError && hasData,
            isStale: isStale(query, options),
            refetch: this.refetch,
            promise: this.#currentThenable,
            isEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false
        };
        const nextResult = result;
        if (this.options.experimental_prefetchInRender) {
            const finalizeThenableIfPossible = (thenable)=>{
                if (nextResult.status === "error") {
                    thenable.reject(nextResult.error);
                } else if (nextResult.data !== void 0) {
                    thenable.resolve(nextResult.data);
                }
            };
            const recreateThenable = ()=>{
                const pending = this.#currentThenable = nextResult.promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
                finalizeThenableIfPossible(pending);
            };
            const prevThenable = this.#currentThenable;
            switch(prevThenable.status){
                case "pending":
                    if (query.queryHash === prevQuery.queryHash) {
                        finalizeThenableIfPossible(prevThenable);
                    }
                    break;
                case "fulfilled":
                    if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
                        recreateThenable();
                    }
                    break;
                case "rejected":
                    if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
                        recreateThenable();
                    }
                    break;
            }
        }
        return nextResult;
    }
    updateResult() {
        const prevResult = this.#currentResult;
        const nextResult = this.createResult(this.#currentQuery, this.options);
        this.#currentResultState = this.#currentQuery.state;
        this.#currentResultOptions = this.options;
        if (this.#currentResultState.data !== void 0) {
            this.#lastQueryWithDefinedData = this.#currentQuery;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(nextResult, prevResult)) {
            return;
        }
        this.#currentResult = nextResult;
        const shouldNotifyListeners = ()=>{
            if (!prevResult) {
                return true;
            }
            const { notifyOnChangeProps } = this.options;
            const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
            if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
                return true;
            }
            const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
            if (this.options.throwOnError) {
                includedProps.add("error");
            }
            return Object.keys(this.#currentResult).some((key)=>{
                const typedKey = key;
                const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
                return changed && includedProps.has(typedKey);
            });
        };
        this.#notify({
            listeners: shouldNotifyListeners()
        });
    }
    #updateQuery() {
        const query = this.#client.getQueryCache().build(this.#client, this.options);
        if (query === this.#currentQuery) {
            return;
        }
        const prevQuery = this.#currentQuery;
        this.#currentQuery = query;
        this.#currentQueryInitialState = query.state;
        if (this.hasListeners()) {
            prevQuery?.removeObserver(this);
            query.addObserver(this);
        }
    }
    onQueryUpdate() {
        this.updateResult();
        if (this.hasListeners()) {
            this.#updateTimers();
        }
    }
    #notify(notifyOptions) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (notifyOptions.listeners) {
                this.listeners.forEach((listener)=>{
                    listener(this.#currentResult);
                });
            }
            this.#client.getQueryCache().notify({
                query: this.#currentQuery,
                type: "observerResultsUpdated"
            });
        });
    }
};
function shouldLoadOnMount(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query) !== "static") {
        const value = typeof field === "function" ? field(query) : field;
        return value === "always" || value !== false && isStale(query, options);
    }
    return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(observer.getCurrentResult(), optimisticResult)) {
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=queryObserver.js.map
}),
"[project]/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
// src/QueryErrorResetBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function createValue() {
    let isReset = false;
    return {
        clearReset: ()=>{
            isReset = false;
        },
        reset: ()=>{
            isReset = true;
        },
        isReset: ()=>{
            return isReset;
        }
    };
}
var QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](createValue());
var useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({ children })=>{
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "QueryErrorResetBoundary.useState": ()=>createValue()
    }["QueryErrorResetBoundary.useState"]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
 //# sourceMappingURL=QueryErrorResetBoundary.js.map
}),
"[project]/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensurePreventErrorBoundaryRetry",
    ()=>ensurePreventErrorBoundaryRetry,
    "getHasError",
    ()=>getHasError,
    "useClearResetErrorBoundary",
    ()=>useClearResetErrorBoundary
]);
// src/errorBoundaryUtils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
"use client";
;
;
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary)=>{
    if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
        if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
        }
    }
};
var useClearResetErrorBoundary = (errorResetBoundary)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useClearResetErrorBoundary.useEffect": ()=>{
            errorResetBoundary.clearReset();
        }
    }["useClearResetErrorBoundary.useEffect"], [
        errorResetBoundary
    ]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
 //# sourceMappingURL=errorBoundaryUtils.js.map
}),
"[project]/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
// src/IsRestoringProvider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
var IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](false);
var useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
;
 //# sourceMappingURL=IsRestoringProvider.js.map
}),
"[project]/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/suspense.ts
__turbopack_context__.s([
    "defaultThrowOnError",
    ()=>defaultThrowOnError,
    "ensureSuspenseTimers",
    ()=>ensureSuspenseTimers,
    "fetchOptimistic",
    ()=>fetchOptimistic,
    "shouldSuspend",
    ()=>shouldSuspend,
    "willFetch",
    ()=>willFetch
]);
var defaultThrowOnError = (_error, query)=>query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value)=>value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args)=>clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
        }
    }
};
var willFetch = (result, isRestoring)=>result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result)=>defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });
;
 //# sourceMappingURL=suspense.js.map
}),
"[project]/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/suspense.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useBaseQuery(options, Observer, queryClient) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof options !== "object" || Array.isArray(options)) {
            throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
        }
    }
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) {
            console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
        }
    }
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useBaseQuery.useState": ()=>new Observer(client, defaultedOptions)
    }["useBaseQuery.useState"]);
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && options.subscribed !== false;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useBaseQuery.useSyncExternalStore.useCallback": (onStoreChange)=>{
            const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
            observer.updateResult();
            return unsubscribe;
        }
    }["useBaseQuery.useSyncExternalStore.useCallback"], [
        observer,
        shouldSubscribe
    ]), {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"], {
        "useBaseQuery.useSyncExternalStore": ()=>observer.getCurrentResult()
    }["useBaseQuery.useSyncExternalStore"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useBaseQuery.useEffect": ()=>{
            observer.setOptions(defaultedOptions);
        }
    }["useBaseQuery.useEffect"], [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHasError"])({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query: client.getQueryCache().get(defaultedOptions.queryHash),
        suspense: defaultedOptions.suspense
    })) {
        throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
    if (defaultedOptions.experimental_prefetchInRender && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["willFetch"])(result, isRestoring)) {
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary) : // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        client.getQueryCache().get(defaultedOptions.queryHash)?.promise;
        promise?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
 //# sourceMappingURL=useBaseQuery.js.map
}),
"[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
// src/useQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-client] (ecmascript)");
"use client";
;
;
function useQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useQuery.js.map
}),
"[project]/node_modules/ky/distribution/errors/HTTPError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTTPError",
    ()=>HTTPError
]);
class HTTPError extends Error {
    response;
    request;
    options;
    constructor(response, request, options){
        const code = response.status || response.status === 0 ? response.status : '';
        const title = response.statusText ?? '';
        const status = `${code} ${title}`.trim();
        const reason = status ? `status code ${status}` : 'an unknown error';
        super(`Request failed with ${reason}: ${request.method} ${request.url}`);
        this.name = 'HTTPError';
        this.response = response;
        this.request = request;
        this.options = options;
    }
} //# sourceMappingURL=HTTPError.js.map
}),
"[project]/node_modules/ky/distribution/errors/NonError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
Wrapper for non-Error values that were thrown.

In JavaScript, any value can be thrown (not just Error instances). This class wraps such values to ensure consistent error handling.
*/ __turbopack_context__.s([
    "NonError",
    ()=>NonError
]);
class NonError extends Error {
    name = 'NonError';
    value;
    constructor(value){
        let message = 'Non-error value was thrown';
        // Intentionally minimal as this error is just an edge-case.
        try {
            if (typeof value === 'string') {
                message = value;
            } else if (value && typeof value === 'object' && 'message' in value && typeof value.message === 'string') {
                message = value.message;
            }
        } catch  {
        // Use default message if accessing properties throws
        }
        super(message);
        this.value = value;
    }
} //# sourceMappingURL=NonError.js.map
}),
"[project]/node_modules/ky/distribution/core/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "kyOptionKeys",
    ()=>kyOptionKeys,
    "maxSafeTimeout",
    ()=>maxSafeTimeout,
    "requestMethods",
    ()=>requestMethods,
    "requestOptionsRegistry",
    ()=>requestOptionsRegistry,
    "responseTypes",
    ()=>responseTypes,
    "stop",
    ()=>stop,
    "supportsAbortController",
    ()=>supportsAbortController,
    "supportsAbortSignal",
    ()=>supportsAbortSignal,
    "supportsFormData",
    ()=>supportsFormData,
    "supportsRequestStreams",
    ()=>supportsRequestStreams,
    "supportsResponseStreams",
    ()=>supportsResponseStreams,
    "usualFormBoundarySize",
    ()=>usualFormBoundarySize,
    "vendorSpecificOptions",
    ()=>vendorSpecificOptions
]);
const supportsRequestStreams = (()=>{
    let duplexAccessed = false;
    let hasContentType = false;
    const supportsReadableStream = typeof globalThis.ReadableStream === 'function';
    const supportsRequest = typeof globalThis.Request === 'function';
    if (supportsReadableStream && supportsRequest) {
        try {
            hasContentType = new globalThis.Request('https://empty.invalid', {
                body: new globalThis.ReadableStream(),
                method: 'POST',
                // @ts-expect-error - Types are outdated.
                get duplex () {
                    duplexAccessed = true;
                    return 'half';
                }
            }).headers.has('Content-Type');
        } catch (error) {
            // QQBrowser on iOS throws "unsupported BodyInit type" error (see issue #581)
            if (error instanceof Error && error.message === 'unsupported BodyInit type') {
                return false;
            }
            throw error;
        }
    }
    return duplexAccessed && !hasContentType;
})();
const supportsAbortController = typeof globalThis.AbortController === 'function';
const supportsAbortSignal = typeof globalThis.AbortSignal === 'function' && typeof globalThis.AbortSignal.any === 'function';
const supportsResponseStreams = typeof globalThis.ReadableStream === 'function';
const supportsFormData = typeof globalThis.FormData === 'function';
const requestMethods = [
    'get',
    'post',
    'put',
    'patch',
    'head',
    'delete'
];
const validate = ()=>undefined;
validate();
const responseTypes = {
    json: 'application/json',
    text: 'text/*',
    formData: 'multipart/form-data',
    arrayBuffer: '*/*',
    blob: '*/*',
    // Supported in modern Fetch implementations (for example, browsers and recent Node.js/undici).
    // We still feature-check at runtime before exposing the shortcut.
    bytes: '*/*'
};
const maxSafeTimeout = 2_147_483_647;
const usualFormBoundarySize = new TextEncoder().encode('------WebKitFormBoundaryaxpyiPgbbPti10Rw').length;
const stop = Symbol('stop');
const kyOptionKeys = {
    json: true,
    parseJson: true,
    stringifyJson: true,
    searchParams: true,
    prefixUrl: true,
    retry: true,
    timeout: true,
    hooks: true,
    throwHttpErrors: true,
    onDownloadProgress: true,
    onUploadProgress: true,
    fetch: true,
    context: true
};
const vendorSpecificOptions = {
    next: true
};
const requestOptionsRegistry = {
    method: true,
    headers: true,
    body: true,
    mode: true,
    credentials: true,
    cache: true,
    redirect: true,
    referrer: true,
    referrerPolicy: true,
    integrity: true,
    keepalive: true,
    signal: true,
    window: true,
    duplex: true
}; //# sourceMappingURL=constants.js.map
}),
"[project]/node_modules/ky/distribution/utils/body.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBodySize",
    ()=>getBodySize,
    "streamRequest",
    ()=>streamRequest,
    "streamResponse",
    ()=>streamResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/core/constants.js [app-client] (ecmascript)");
;
const getBodySize = (body)=>{
    if (!body) {
        return 0;
    }
    if (body instanceof FormData) {
        // This is an approximation, as FormData size calculation is not straightforward
        let size = 0;
        for (const [key, value] of body){
            size += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usualFormBoundarySize"];
            size += new TextEncoder().encode(`Content-Disposition: form-data; name="${key}"`).length;
            size += typeof value === 'string' ? new TextEncoder().encode(value).length : value.size;
        }
        return size;
    }
    if (body instanceof Blob) {
        return body.size;
    }
    if (body instanceof ArrayBuffer) {
        return body.byteLength;
    }
    if (typeof body === 'string') {
        return new TextEncoder().encode(body).length;
    }
    if (body instanceof URLSearchParams) {
        return new TextEncoder().encode(body.toString()).length;
    }
    if ('byteLength' in body) {
        return body.byteLength;
    }
    if (typeof body === 'object' && body !== null) {
        try {
            const jsonString = JSON.stringify(body);
            return new TextEncoder().encode(jsonString).length;
        } catch  {
            return 0;
        }
    }
    return 0; // Default case, unable to determine size
};
const withProgress = (stream, totalBytes, onProgress)=>{
    let previousChunk;
    let transferredBytes = 0;
    return stream.pipeThrough(new TransformStream({
        transform (currentChunk, controller) {
            controller.enqueue(currentChunk);
            if (previousChunk) {
                transferredBytes += previousChunk.byteLength;
                let percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
                // Avoid reporting 100% progress before the stream is actually finished (in case totalBytes is inaccurate)
                if (percent >= 1) {
                    // Epsilon is used here to get as close as possible to 100% without reaching it.
                    // If we were to use 0.99 here, percent could potentially go backwards.
                    percent = 1 - Number.EPSILON;
                }
                onProgress?.({
                    percent,
                    totalBytes: Math.max(totalBytes, transferredBytes),
                    transferredBytes
                }, previousChunk);
            }
            previousChunk = currentChunk;
        },
        flush () {
            if (previousChunk) {
                transferredBytes += previousChunk.byteLength;
                onProgress?.({
                    percent: 1,
                    totalBytes: Math.max(totalBytes, transferredBytes),
                    transferredBytes
                }, previousChunk);
            }
        }
    }));
};
const streamResponse = (response, onDownloadProgress)=>{
    if (!response.body) {
        return response;
    }
    if (response.status === 204) {
        return new Response(null, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        });
    }
    const totalBytes = Math.max(0, Number(response.headers.get('content-length')) || 0);
    return new Response(withProgress(response.body, totalBytes, onDownloadProgress), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
    });
};
const streamRequest = (request, onUploadProgress, originalBody)=>{
    if (!request.body) {
        return request;
    }
    // Use original body for size calculation since request.body is already a stream
    const totalBytes = getBodySize(originalBody ?? request.body);
    return new Request(request, {
        // @ts-expect-error - Types are outdated.
        duplex: 'half',
        body: withProgress(request.body, totalBytes, onUploadProgress)
    });
}; //# sourceMappingURL=body.js.map
}),
"[project]/node_modules/ky/distribution/utils/is.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// eslint-disable-next-line @typescript-eslint/ban-types
__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
const isObject = (value)=>value !== null && typeof value === 'object'; //# sourceMappingURL=is.js.map
}),
"[project]/node_modules/ky/distribution/utils/merge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deepMerge",
    ()=>deepMerge,
    "mergeHeaders",
    ()=>mergeHeaders,
    "mergeHooks",
    ()=>mergeHooks,
    "validateAndMerge",
    ()=>validateAndMerge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/core/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/is.js [app-client] (ecmascript)");
;
;
const validateAndMerge = (...sources)=>{
    for (const source of sources){
        if ((!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(source) || Array.isArray(source)) && source !== undefined) {
            throw new TypeError('The `options` argument must be an object');
        }
    }
    return deepMerge({}, ...sources);
};
const mergeHeaders = (source1 = {}, source2 = {})=>{
    const result = new globalThis.Headers(source1);
    const isHeadersInstance = source2 instanceof globalThis.Headers;
    const source = new globalThis.Headers(source2);
    for (const [key, value] of source.entries()){
        if (isHeadersInstance && value === 'undefined' || value === undefined) {
            result.delete(key);
        } else {
            result.set(key, value);
        }
    }
    return result;
};
function newHookValue(original, incoming, property) {
    return Object.hasOwn(incoming, property) && incoming[property] === undefined ? [] : deepMerge(original[property] ?? [], incoming[property] ?? []);
}
const mergeHooks = (original = {}, incoming = {})=>({
        beforeRequest: newHookValue(original, incoming, 'beforeRequest'),
        beforeRetry: newHookValue(original, incoming, 'beforeRetry'),
        afterResponse: newHookValue(original, incoming, 'afterResponse'),
        beforeError: newHookValue(original, incoming, 'beforeError')
    });
const appendSearchParameters = (target, source)=>{
    const result = new URLSearchParams();
    for (const input of [
        target,
        source
    ]){
        if (input === undefined) {
            continue;
        }
        if (input instanceof URLSearchParams) {
            for (const [key, value] of input.entries()){
                result.append(key, value);
            }
        } else if (Array.isArray(input)) {
            for (const pair of input){
                if (!Array.isArray(pair) || pair.length !== 2) {
                    throw new TypeError('Array search parameters must be provided in [[key, value], ...] format');
                }
                result.append(String(pair[0]), String(pair[1]));
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(input)) {
            for (const [key, value] of Object.entries(input)){
                if (value !== undefined) {
                    result.append(key, String(value));
                }
            }
        } else {
            // String
            const parameters = new URLSearchParams(input);
            for (const [key, value] of parameters.entries()){
                result.append(key, value);
            }
        }
    }
    return result;
};
const deepMerge = (...sources)=>{
    let returnValue = {};
    let headers = {};
    let hooks = {};
    let searchParameters;
    const signals = [];
    for (const source of sources){
        if (Array.isArray(source)) {
            if (!Array.isArray(returnValue)) {
                returnValue = [];
            }
            returnValue = [
                ...returnValue,
                ...source
            ];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(source)) {
            for (let [key, value] of Object.entries(source)){
                // Special handling for AbortSignal instances
                if (key === 'signal' && value instanceof globalThis.AbortSignal) {
                    signals.push(value);
                    continue;
                }
                // Special handling for context - shallow merge only
                if (key === 'context') {
                    if (value !== undefined && value !== null && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(value) || Array.isArray(value))) {
                        throw new TypeError('The `context` option must be an object');
                    }
                    // Shallow merge: always create a new object to prevent mutation bugs
                    returnValue = {
                        ...returnValue,
                        context: value === undefined || value === null ? {} : {
                            ...returnValue.context,
                            ...value
                        }
                    };
                    continue;
                }
                // Special handling for searchParams
                if (key === 'searchParams') {
                    if (value === undefined || value === null) {
                        // Explicit undefined or null removes searchParams
                        searchParameters = undefined;
                    } else {
                        // First source: keep as-is to preserve type (string/object/URLSearchParams)
                        // Subsequent sources: merge and convert to URLSearchParams
                        searchParameters = searchParameters === undefined ? value : appendSearchParameters(searchParameters, value);
                    }
                    continue;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(value) && key in returnValue) {
                    value = deepMerge(returnValue[key], value);
                }
                returnValue = {
                    ...returnValue,
                    [key]: value
                };
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(source.hooks)) {
                hooks = mergeHooks(hooks, source.hooks);
                returnValue.hooks = hooks;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(source.headers)) {
                headers = mergeHeaders(headers, source.headers);
                returnValue.headers = headers;
            }
        }
    }
    if (searchParameters !== undefined) {
        returnValue.searchParams = searchParameters;
    }
    if (signals.length > 0) {
        if (signals.length === 1) {
            returnValue.signal = signals[0];
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsAbortSignal"]) {
            returnValue.signal = AbortSignal.any(signals);
        } else {
            // When AbortSignal.any is not available, use the last signal
            // This maintains the previous behavior before signal merging was added
            // This can be remove when the `supportsAbortSignal` check is removed.`
            returnValue.signal = signals.at(-1);
        }
    }
    if (returnValue.context === undefined) {
        returnValue.context = {};
    }
    return returnValue;
}; //# sourceMappingURL=merge.js.map
}),
"[project]/node_modules/ky/distribution/utils/normalize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeRequestMethod",
    ()=>normalizeRequestMethod,
    "normalizeRetryOptions",
    ()=>normalizeRetryOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/core/constants.js [app-client] (ecmascript)");
;
const normalizeRequestMethod = (input)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestMethods"].includes(input) ? input.toUpperCase() : input;
const retryMethods = [
    'get',
    'put',
    'head',
    'delete',
    'options',
    'trace'
];
const retryStatusCodes = [
    408,
    413,
    429,
    500,
    502,
    503,
    504
];
const retryAfterStatusCodes = [
    413,
    429,
    503
];
const defaultRetryOptions = {
    limit: 2,
    methods: retryMethods,
    statusCodes: retryStatusCodes,
    afterStatusCodes: retryAfterStatusCodes,
    maxRetryAfter: Number.POSITIVE_INFINITY,
    backoffLimit: Number.POSITIVE_INFINITY,
    delay: (attemptCount)=>0.3 * 2 ** (attemptCount - 1) * 1000,
    jitter: undefined,
    retryOnTimeout: false
};
const normalizeRetryOptions = (retry = {})=>{
    if (typeof retry === 'number') {
        return {
            ...defaultRetryOptions,
            limit: retry
        };
    }
    if (retry.methods && !Array.isArray(retry.methods)) {
        throw new Error('retry.methods must be an array');
    }
    if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
        throw new Error('retry.statusCodes must be an array');
    }
    return {
        ...defaultRetryOptions,
        ...retry
    };
}; //# sourceMappingURL=normalize.js.map
}),
"[project]/node_modules/ky/distribution/errors/TimeoutError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimeoutError",
    ()=>TimeoutError
]);
class TimeoutError extends Error {
    request;
    constructor(request){
        super(`Request timed out: ${request.method} ${request.url}`);
        this.name = 'TimeoutError';
        this.request = request;
    }
} //# sourceMappingURL=TimeoutError.js.map
}),
"[project]/node_modules/ky/distribution/utils/timeout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>timeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/errors/TimeoutError.js [app-client] (ecmascript)");
;
async function timeout(request, init, abortController, options) {
    return new Promise((resolve, reject)=>{
        const timeoutId = setTimeout(()=>{
            if (abortController) {
                abortController.abort();
            }
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutError"](request));
        }, options.timeout);
        void options.fetch(request, init).then(resolve).catch(reject).then(()=>{
            clearTimeout(timeoutId);
        });
    });
} //# sourceMappingURL=timeout.js.map
}),
"[project]/node_modules/ky/distribution/utils/delay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// https://github.com/sindresorhus/delay/tree/ab98ae8dfcb38e1593286c94d934e70d14a4e111
__turbopack_context__.s([
    "default",
    ()=>delay
]);
async function delay(ms, { signal }) {
    return new Promise((resolve, reject)=>{
        if (signal) {
            signal.throwIfAborted();
            signal.addEventListener('abort', abortHandler, {
                once: true
            });
        }
        function abortHandler() {
            clearTimeout(timeoutId);
            reject(signal.reason);
        }
        const timeoutId = setTimeout(()=>{
            signal?.removeEventListener('abort', abortHandler);
            resolve();
        }, ms);
    });
} //# sourceMappingURL=delay.js.map
}),
"[project]/node_modules/ky/distribution/utils/options.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findUnknownOptions",
    ()=>findUnknownOptions,
    "hasSearchParameters",
    ()=>hasSearchParameters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/core/constants.js [app-client] (ecmascript)");
;
const findUnknownOptions = (request, options)=>{
    const unknownOptions = {};
    for(const key in options){
        // Skip inherited properties
        if (!Object.hasOwn(options, key)) {
            continue;
        }
        // An option is passed to fetch() if:
        // 1. It's not a standard RequestInit option (not in requestOptionsRegistry)
        // 2. It's not a ky-specific option (not in kyOptionKeys)
        // 3. Either:
        //    a. It's not on the Request object, OR
        //    b. It's a vendor-specific option that should always be passed (in vendorSpecificOptions)
        if (!(key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestOptionsRegistry"]) && !(key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kyOptionKeys"]) && (!(key in request) || key in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vendorSpecificOptions"])) {
            unknownOptions[key] = options[key];
        }
    }
    return unknownOptions;
};
const hasSearchParameters = (search)=>{
    if (search === undefined) {
        return false;
    }
    // The `typeof array` still gives "object", so we need different checking for array.
    if (Array.isArray(search)) {
        return search.length > 0;
    }
    if (search instanceof URLSearchParams) {
        return search.size > 0;
    }
    // Record
    if (typeof search === 'object') {
        return Object.keys(search).length > 0;
    }
    if (typeof search === 'string') {
        return search.trim().length > 0;
    }
    return Boolean(search);
}; //# sourceMappingURL=options.js.map
}),
"[project]/node_modules/ky/distribution/utils/type-guards.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHTTPError",
    ()=>isHTTPError,
    "isKyError",
    ()=>isKyError,
    "isTimeoutError",
    ()=>isTimeoutError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/errors/HTTPError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/errors/TimeoutError.js [app-client] (ecmascript)");
;
;
function isKyError(error) {
    return isHTTPError(error) || isTimeoutError(error);
}
function isHTTPError(error) {
    return error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTTPError"] || error?.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTTPError"].name;
}
function isTimeoutError(error) {
    return error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutError"] || error?.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$TimeoutError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeoutError"].name;
} //# sourceMappingURL=type-guards.js.map
}),
"[project]/node_modules/ky/distribution/core/Ky.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Ky",
    ()=>Ky
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/errors/HTTPError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$NonError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/errors/NonError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$body$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/body.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$timeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/timeout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$delay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/delay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$type$2d$guards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/type-guards.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/core/constants.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
class Ky {
    static create(input, options) {
        const ky = new Ky(input, options);
        const function_ = async ()=>{
            if (typeof ky.#options.timeout === 'number' && ky.#options.timeout > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxSafeTimeout"]) {
                throw new RangeError(`The \`timeout\` option cannot be greater than ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxSafeTimeout"]}`);
            }
            // Delay the fetch so that body method shortcuts can set the Accept header
            await Promise.resolve();
            // Before using ky.request, _fetch clones it and saves the clone for future retries to use.
            // If retry is not needed, close the cloned request's ReadableStream for memory safety.
            let response = await ky.#fetch();
            for (const hook of ky.#options.hooks.afterResponse){
                // eslint-disable-next-line no-await-in-loop
                const modifiedResponse = await hook(ky.request, ky.#getNormalizedOptions(), ky.#decorateResponse(response.clone()), {
                    retryCount: ky.#retryCount
                });
                if (modifiedResponse instanceof globalThis.Response) {
                    response = modifiedResponse;
                }
            }
            ky.#decorateResponse(response);
            if (!response.ok && ky.#options.throwHttpErrors) {
                let error = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$HTTPError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HTTPError"](response, ky.request, ky.#getNormalizedOptions());
                for (const hook of ky.#options.hooks.beforeError){
                    // eslint-disable-next-line no-await-in-loop
                    error = await hook(error, {
                        retryCount: ky.#retryCount
                    });
                }
                throw error;
            }
            // If `onDownloadProgress` is passed, it uses the stream API internally
            if (ky.#options.onDownloadProgress) {
                if (typeof ky.#options.onDownloadProgress !== 'function') {
                    throw new TypeError('The `onDownloadProgress` option must be a function');
                }
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsResponseStreams"]) {
                    throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$body$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamResponse"])(response.clone(), ky.#options.onDownloadProgress);
            }
            return response;
        };
        const isRetriableMethod = ky.#options.retry.methods.includes(ky.request.method.toLowerCase());
        const result = (isRetriableMethod ? ky.#retry(function_) : function_()).finally(async ()=>{
            const originalRequest = ky.#originalRequest;
            const cleanupPromises = [];
            if (originalRequest && !originalRequest.bodyUsed) {
                cleanupPromises.push(originalRequest.body?.cancel());
            }
            if (!ky.request.bodyUsed) {
                cleanupPromises.push(ky.request.body?.cancel());
            }
            await Promise.all(cleanupPromises);
        });
        for (const [type, mimeType] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["responseTypes"])){
            // Only expose `.bytes()` when the environment implements it.
            if (type === 'bytes' && typeof globalThis.Response?.prototype?.bytes !== 'function') {
                continue;
            }
            result[type] = async ()=>{
                // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
                ky.request.headers.set('accept', ky.request.headers.get('accept') || mimeType);
                const response = await result;
                if (type === 'json') {
                    if (response.status === 204) {
                        return '';
                    }
                    const text = await response.text();
                    if (text === '') {
                        return '';
                    }
                    if (options.parseJson) {
                        return options.parseJson(text);
                    }
                    return JSON.parse(text);
                }
                return response[type]();
            };
        }
        return result;
    }
    // eslint-disable-next-line unicorn/prevent-abbreviations
    static #normalizeSearchParams(searchParams) {
        // Filter out undefined values from plain objects
        if (searchParams && typeof searchParams === 'object' && !Array.isArray(searchParams) && !(searchParams instanceof URLSearchParams)) {
            return Object.fromEntries(Object.entries(searchParams).filter(([, value])=>value !== undefined));
        }
        return searchParams;
    }
    request;
    #abortController;
    #retryCount = 0;
    // eslint-disable-next-line @typescript-eslint/prefer-readonly -- False positive: #input is reassigned on line 202
    #input;
    #options;
    #originalRequest;
    #userProvidedAbortSignal;
    #cachedNormalizedOptions;
    // eslint-disable-next-line complexity
    constructor(input, options = {}){
        this.#input = input;
        this.#options = {
            ...options,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeHeaders"])(this.#input.headers, options.headers),
            hooks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeHooks"])({
                beforeRequest: [],
                beforeRetry: [],
                beforeError: [],
                afterResponse: []
            }, options.hooks),
            method: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRequestMethod"])(options.method ?? this.#input.method ?? 'GET'),
            // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
            prefixUrl: String(options.prefixUrl || ''),
            retry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeRetryOptions"])(options.retry),
            throwHttpErrors: options.throwHttpErrors !== false,
            timeout: options.timeout ?? 10_000,
            fetch: options.fetch ?? globalThis.fetch.bind(globalThis),
            context: options.context ?? {}
        };
        if (typeof this.#input !== 'string' && !(this.#input instanceof URL || this.#input instanceof globalThis.Request)) {
            throw new TypeError('`input` must be a string, URL, or Request');
        }
        if (this.#options.prefixUrl && typeof this.#input === 'string') {
            if (this.#input.startsWith('/')) {
                throw new Error('`input` must not begin with a slash when using `prefixUrl`');
            }
            if (!this.#options.prefixUrl.endsWith('/')) {
                this.#options.prefixUrl += '/';
            }
            this.#input = this.#options.prefixUrl + this.#input;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsAbortController"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsAbortSignal"]) {
            this.#userProvidedAbortSignal = this.#options.signal ?? this.#input.signal;
            this.#abortController = new globalThis.AbortController();
            this.#options.signal = this.#userProvidedAbortSignal ? AbortSignal.any([
                this.#userProvidedAbortSignal,
                this.#abortController.signal
            ]) : this.#abortController.signal;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsRequestStreams"]) {
            // @ts-expect-error - Types are outdated.
            this.#options.duplex = 'half';
        }
        if (this.#options.json !== undefined) {
            this.#options.body = this.#options.stringifyJson?.(this.#options.json) ?? JSON.stringify(this.#options.json);
            this.#options.headers.set('content-type', this.#options.headers.get('content-type') ?? 'application/json');
        }
        // To provide correct form boundary, Content-Type header should be deleted when creating Request from another Request with FormData/URLSearchParams body
        // Only delete if user didn't explicitly provide a custom content-type
        const userProvidedContentType = options.headers && new globalThis.Headers(options.headers).has('content-type');
        if (this.#input instanceof globalThis.Request && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsFormData"] && this.#options.body instanceof globalThis.FormData || this.#options.body instanceof URLSearchParams) && !userProvidedContentType) {
            this.#options.headers.delete('content-type');
        }
        this.request = new globalThis.Request(this.#input, this.#options);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSearchParameters"])(this.#options.searchParams)) {
            // eslint-disable-next-line unicorn/prevent-abbreviations
            const textSearchParams = typeof this.#options.searchParams === 'string' ? this.#options.searchParams.replace(/^\?/, '') : new URLSearchParams(Ky.#normalizeSearchParams(this.#options.searchParams)).toString();
            // eslint-disable-next-line unicorn/prevent-abbreviations
            const searchParams = '?' + textSearchParams;
            const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);
            // The spread of `this.request` is required as otherwise it misses the `duplex` option for some reason and throws.
            this.request = new globalThis.Request(new globalThis.Request(url, {
                ...this.request
            }), this.#options);
        }
        // If `onUploadProgress` is passed, it uses the stream API internally
        if (this.#options.onUploadProgress) {
            if (typeof this.#options.onUploadProgress !== 'function') {
                throw new TypeError('The `onUploadProgress` option must be a function');
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsRequestStreams"]) {
                throw new Error('Request streams are not supported in your environment. The `duplex` option for `Request` is not available.');
            }
            const originalBody = this.request.body;
            if (originalBody) {
                // Pass original body to calculate size correctly (before it becomes a stream)
                this.request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$body$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamRequest"])(this.request, this.#options.onUploadProgress, this.#options.body);
            }
        }
    }
    #calculateDelay() {
        const retryDelay = this.#options.retry.delay(this.#retryCount);
        let jitteredDelay = retryDelay;
        if (this.#options.retry.jitter === true) {
            jitteredDelay = Math.random() * retryDelay;
        } else if (typeof this.#options.retry.jitter === 'function') {
            jitteredDelay = this.#options.retry.jitter(retryDelay);
            if (!Number.isFinite(jitteredDelay) || jitteredDelay < 0) {
                jitteredDelay = retryDelay;
            }
        }
        return Math.min(this.#options.retry.backoffLimit, jitteredDelay);
    }
    async #calculateRetryDelay(error) {
        this.#retryCount++;
        if (this.#retryCount > this.#options.retry.limit) {
            throw error;
        }
        // Wrap non-Error throws to ensure consistent error handling
        const errorObject = error instanceof Error ? error : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$errors$2f$NonError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonError"](error);
        // User-provided shouldRetry function takes precedence over all other checks
        if (this.#options.retry.shouldRetry !== undefined) {
            const result = await this.#options.retry.shouldRetry({
                error: errorObject,
                retryCount: this.#retryCount
            });
            // Strict boolean checking - only exact true/false are handled specially
            if (result === false) {
                throw error;
            }
            if (result === true) {
                // Force retry - skip all other validation and return delay
                return this.#calculateDelay();
            }
        // If undefined or any other value, fall through to default behavior
        }
        // Default timeout behavior
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$type$2d$guards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTimeoutError"])(error) && !this.#options.retry.retryOnTimeout) {
            throw error;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$type$2d$guards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTTPError"])(error)) {
            if (!this.#options.retry.statusCodes.includes(error.response.status)) {
                throw error;
            }
            const retryAfter = error.response.headers.get('Retry-After') ?? error.response.headers.get('RateLimit-Reset') ?? error.response.headers.get('X-RateLimit-Retry-After') // Symfony-based services
             ?? error.response.headers.get('X-RateLimit-Reset') // GitHub
             ?? error.response.headers.get('X-Rate-Limit-Reset'); // Twitter
            if (retryAfter && this.#options.retry.afterStatusCodes.includes(error.response.status)) {
                let after = Number(retryAfter) * 1000;
                if (Number.isNaN(after)) {
                    after = Date.parse(retryAfter) - Date.now();
                } else if (after >= Date.parse('2024-01-01')) {
                    // A large number is treated as a timestamp (fixed threshold protects against clock skew)
                    after -= Date.now();
                }
                const max = this.#options.retry.maxRetryAfter ?? after;
                // Don't apply jitter when server provides explicit retry timing
                return after < max ? after : max;
            }
            if (error.response.status === 413) {
                throw error;
            }
        }
        return this.#calculateDelay();
    }
    #decorateResponse(response) {
        if (this.#options.parseJson) {
            response.json = async ()=>this.#options.parseJson(await response.text());
        }
        return response;
    }
    async #retry(function_) {
        try {
            return await function_();
        } catch (error) {
            const ms = Math.min(await this.#calculateRetryDelay(error), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxSafeTimeout"]);
            if (this.#retryCount < 1) {
                throw error;
            }
            // Only use user-provided signal for delay, not our internal abortController
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$delay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ms, this.#userProvidedAbortSignal ? {
                signal: this.#userProvidedAbortSignal
            } : {});
            for (const hook of this.#options.hooks.beforeRetry){
                // eslint-disable-next-line no-await-in-loop
                const hookResult = await hook({
                    request: this.request,
                    options: this.#getNormalizedOptions(),
                    error: error,
                    retryCount: this.#retryCount
                });
                // If a Request is returned, use it for the retry
                if (hookResult instanceof globalThis.Request) {
                    this.request = hookResult;
                    break;
                }
                // If a Response is returned, use it and skip the retry
                if (hookResult instanceof globalThis.Response) {
                    return hookResult;
                }
                // If `stop` is returned from the hook, the retry process is stopped
                if (hookResult === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stop"]) {
                    return;
                }
            }
            return this.#retry(function_);
        }
    }
    async #fetch() {
        // Reset abortController if it was aborted (happens on timeout retry)
        if (this.#abortController?.signal.aborted) {
            this.#abortController = new globalThis.AbortController();
            this.#options.signal = this.#userProvidedAbortSignal ? AbortSignal.any([
                this.#userProvidedAbortSignal,
                this.#abortController.signal
            ]) : this.#abortController.signal;
            // Recreate request with new signal
            this.request = new globalThis.Request(this.request, {
                signal: this.#options.signal
            });
        }
        for (const hook of this.#options.hooks.beforeRequest){
            // eslint-disable-next-line no-await-in-loop
            const result = await hook(this.request, this.#getNormalizedOptions(), {
                retryCount: this.#retryCount
            });
            if (result instanceof Request) {
                this.request = result;
                break;
            }
            if (result instanceof Response) {
                return result;
            }
        }
        const nonRequestOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findUnknownOptions"])(this.request, this.#options);
        // Cloning is done here to prepare in advance for retries
        this.#originalRequest = this.request;
        this.request = this.#originalRequest.clone();
        if (this.#options.timeout === false) {
            return this.#options.fetch(this.#originalRequest, nonRequestOptions);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$timeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.#originalRequest, nonRequestOptions, this.#abortController, this.#options);
    }
    #getNormalizedOptions() {
        if (!this.#cachedNormalizedOptions) {
            const { hooks, ...normalizedOptions } = this.#options;
            this.#cachedNormalizedOptions = Object.freeze(normalizedOptions);
        }
        return this.#cachedNormalizedOptions;
    }
} //# sourceMappingURL=Ky.js.map
}),
"[project]/node_modules/ky/distribution/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*! MIT License © Sindre Sorhus */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$Ky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/core/Ky.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/core/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ky/distribution/utils/merge.js [app-client] (ecmascript)");
;
;
;
const createInstance = (defaults)=>{
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    const ky = (input, options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$Ky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ky"].create(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAndMerge"])(defaults, options));
    for (const method of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestMethods"]){
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        ky[method] = (input, options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$Ky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ky"].create(input, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAndMerge"])(defaults, options, {
                method
            }));
    }
    ky.create = (newDefaults)=>createInstance((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAndMerge"])(newDefaults));
    ky.extend = (newDefaults)=>{
        if (typeof newDefaults === 'function') {
            newDefaults = newDefaults(defaults ?? {});
        }
        return createInstance((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateAndMerge"])(defaults, newDefaults));
    };
    ky.stop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ky$2f$distribution$2f$core$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stop"];
    return ky;
};
const ky = createInstance();
const __TURBOPACK__default__export__ = ky;
;
;
;
 // Intentionally not exporting this for now as it's just an implementation detail and we don't want to commit to a certain API yet at least.
 // export {NonError} from './errors/NonError.js';
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "qualities": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 75)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "protocol": ("TURBOPACK compile-time value", "https"),
                    "hostname": ("TURBOPACK compile-time value", "covers.openlibrary.org"),
                    "port": ("TURBOPACK compile-time value", ""),
                    "pathname": ("TURBOPACK compile-time value", "/b/id/**")
                }),
                ("TURBOPACK compile-time value", {
                    "protocol": ("TURBOPACK compile-time value", "https"),
                    "hostname": ("TURBOPACK compile-time value", "placehold.co"),
                    "port": ("TURBOPACK compile-time value", ""),
                    "pathname": ("TURBOPACK compile-time value", "/**")
                })
            ]),
            "localPatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "pathname": ("TURBOPACK compile-time value", "**"),
                    "search": ("TURBOPACK compile-time value", "")
                })
            ]),
            "output": ("TURBOPACK compile-time value", "standalone")
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/node_modules/next/image.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_b8383bd7._.js.map