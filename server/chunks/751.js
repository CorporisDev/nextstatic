exports.id = 751;
exports.ids = [751];
exports.modules = {

/***/ 191:
/***/ ((module) => {

// Exports
module.exports = {
	"testimonialsSection": "Testimonials_testimonialsSection__INr3w",
	"testimonial": "Testimonials_testimonial__DR8Bk",
	"avatar": "Testimonials_avatar__qGAv_",
	"stars": "Testimonials_stars__PtyRz",
	"filledStar": "Testimonials_filledStar__xlUV2",
	"emptyStar": "Testimonials_emptyStar__4P2NM"
};


/***/ }),

/***/ 751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Testimonials)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(508);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(191);
/* harmony import */ var _styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_3__);
// components/Testimonials.js





const testimonials = [
    {
        id: 1,
        name: "Ana Lopez",
        date: "2024-05-01",
        rating: 5,
        testimonial: "Opt\xe9 por el pago contra entrega y todo el proceso fue muy sencillo y seguro. La comunicaci\xf3n fue excelente y no tuve ninguna preocupaci\xf3n respecto a mi pago. Esta opci\xf3n me dio mucha tranquilidad y confianza para realizar una compra de este calibre",
        avatar: "/img/ana-lopez.svg"
    },
    {
        id: 2,
        name: "Laura Rodriguez",
        date: "2024-04-15",
        rating: 4,
        testimonial: "La inversi\xf3n en la 6 en 1 Hidrafacial ha sido una de las mejores decisiones que he tomado para mi negocio. No solo ha mejorado la calidad de mis tratamientos faciales, sino que tambi\xe9n ha incrementado mis ingresos",
        avatar: "/img/Laura-Rodriguez.svg"
    },
    {
        id: 3,
        name: "Carlos Aguirre",
        date: "2024-03-20",
        rating: 5,
        testimonial: "\xa1Excelente calidad y servicio!",
        avatar: "/img/carlos-aguirre.svg"
    }, 
];
const StarRating = ({ rating  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_3___default().stars),
        children: [
            ...Array(5)
        ].map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: index < rating ? (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_3___default().filledStar) : (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_3___default().emptyStar),
                children: "★"
            }, index))
    });
};
function Testimonials() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_3___default().testimonialsSection),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Testimonios de Clientes"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {
                showThumbs: false,
                showStatus: false,
                autoPlay: true,
                interval: 3000,
                infiniteLoop: true,
                children: testimonials.map((testimonial)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_3___default().testimonial),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: (_styles_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_3___default().avatar),
                                src: testimonial.avatar,
                                alt: testimonial.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StarRating, {
                                rating: testimonial.rating
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: testimonial.testimonial
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: testimonial.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                children: testimonial.date
                            })
                        ]
                    }, testimonial.id))
            })
        ]
    });
}


/***/ })

};
;