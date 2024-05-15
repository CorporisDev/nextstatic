"use strict";
exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
// components/OrderPopup.js



react_modal__WEBPACK_IMPORTED_MODULE_2___default().setAppElement("#__next"); // Ajustar para tu entorno de Next.js
const OrderPopup = ({ isOpen , onRequestClose  })=>{
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: orderResponse , 1: setOrderResponse  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: departamentos , 1: setDepartamentos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: departamentoSeleccionado , 1: setDepartamentoSeleccionado  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: ciudades , 1: setCiudades  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: discountCode , 1: setDiscountCode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: discountApplied , 1: setDiscountApplied  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: finalPrice , 1: setFinalPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1800000);
    const validCoupons = [
        "DESCUENTO200",
        "AHORRA200",
        "OFERTA200"
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetch("/departamentos_y_ciudades.json").then((response)=>response.json()).then((data)=>setDepartamentos(data.Colombia)).catch((error)=>console.error("Error al cargar los departamentos y ciudades:", error));
    }, []);
    const handleFormSubmit = async (event)=>{
        event.preventDefault();
        setIsLoading(true);
        setOrderResponse(null);
        const formData = {
            name: event.target.elements.name.value,
            apellido: event.target.elements.apellido.value,
            phone: event.target.elements.phone.value,
            address: event.target.elements.address.value,
            departamento: departamentoSeleccionado,
            ciudad: event.target.elements.ciudad.value
        };
        fetch("http://195.35.36.80:3000/api/submit-form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((response)=>response.json()).then((data)=>{
            setIsLoading(false);
            if (data.success) {
                setOrderResponse({
                    success: true,
                    message: `Felicitaciones ${formData.name}, tu pedido ha sido creado exitosamente!`,
                    direccion: `Tu pedido será enviado a la dirección: ${formData.address}, y estaría llegando en 2 días hábiles aproximadamente.`,
                    city: `En la ciudad de: ${formData.ciudad} - ${formData.departamento}`
                });
            } else {
                throw new Error(data.message);
            }
        }).catch((error)=>{
            setIsLoading(false);
            setOrderResponse({
                success: false,
                message: error.message || "Lo siento, hubo un error en la inscripci\xf3n, por favor int\xe9ntalo nuevamente."
            });
        });
    };
    const handleDepartamentoChange = (event)=>{
        const depto = departamentos.find((d)=>d.departamento === event.target.value);
        setDepartamentoSeleccionado(event.target.value);
        setCiudades(depto ? depto.ciudades : []);
    };
    const handleApplyDiscount = ()=>{
        if (validCoupons.includes(discountCode) && !discountApplied) {
            setFinalPrice(finalPrice - 200000);
            setDiscountApplied(true);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
        isOpen: isOpen,
        onRequestClose: onRequestClose,
        contentLabel: "Realizar Pedido",
        className: "modal",
        overlayClassName: "overlay",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Compra Ahora Con Pago Contra Entrega!"
            }),
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Cargando..."
            }) : orderResponse ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: orderResponse.message
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: orderResponse.direccion
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: orderResponse.city
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "\xa1Muchas gracias por tu compra!"
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleFormSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        children: [
                            "Nombre:",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "name",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        children: [
                            "Apellido:",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "apellido",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        children: [
                            "Celular:",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "phone",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        children: [
                            "Direcci\xf3n:",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "address",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        children: [
                            "Departamento:",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                name: "departamento",
                                value: departamentoSeleccionado,
                                onChange: handleDepartamentoChange,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "",
                                        children: "Seleccione un departamento"
                                    }),
                                    departamentos.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: item.departamento,
                                            children: item.departamento
                                        }, index))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        children: [
                            "Ciudad:",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                name: "ciudad",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "",
                                        children: "Seleccione una ciudad"
                                    }),
                                    ciudades.map((ciudad, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: ciudad,
                                            children: ciudad
                                        }, index))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        children: [
                            "Cup\xf3n de Descuento:",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                value: discountCode,
                                onChange: (e)=>setDiscountCode(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "applyCouponButton",
                                type: "button",
                                onClick: handleApplyDiscount,
                                children: "Aplicar Cup\xf3n"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "order-summary",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Precio Original: $1.800.000"
                            }),
                            discountApplied && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Descuento Aplicado: -$200.000"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "Precio Final: $",
                                    finalPrice.toLocaleString()
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "button-form",
                        type: "submit",
                        children: "Generar Pedido"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderPopup);


/***/ })

};
;