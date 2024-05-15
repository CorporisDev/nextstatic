"use strict";
exports.id = 368;
exports.ids = [368];
exports.modules = {

/***/ 368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrainingBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OrderPopup2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(173);
// components/TrainingBanner.js



function TrainingBanner() {
    const { 0: isModalOpen , 1: setModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleOpenModal = ()=>{
        setModalOpen(true);
    };
    const handleCloseModal = ()=>{
        setModalOpen(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "training-banner",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "banner-image",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/img/banner-capacitacion.jpg",
                    alt: "Capacitaci\xf3n"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "banner-content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Te regalamos la capacitaci\xf3n para uso correcto de este equipo"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "button-form",
                        onClick: handleOpenModal,
                        children: "Inscr\xedbete"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OrderPopup2__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        isOpen: isModalOpen,
                        onRequestClose: handleCloseModal
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;