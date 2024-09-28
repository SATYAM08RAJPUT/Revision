
import { createServer, Model } from "miragejs";

export default function server({ environment = 'development' } = {}) {
    let server = createServer({
        environment,
        models: {
            CSSFile: Model,
        },
        seeds(server) {
            server.create("CSSFile", {
                cssDataFile:[
                    {
                        Questions: [
                            {
                                Question: "Explain the difference between static, relative, absolute, and fixed positioning.",
                                Answer: "Static: This is the default positioning. Elements are positioned according to the normal flow of the document and are not affected by the top, bottom, left, or right properties. Relative: Elements are positioned relative to their normal position. The top, bottom, left, and right properties offset the element without affecting the layout of other elements. Absolute: Elements are removed from the normal document flow and positioned relative to the nearest positioned ancestor. If no such ancestor exists, they are positioned relative to the initial containing block. Fixed: Elements are removed from the normal document flow and positioned relative to the viewport, staying in the same position even when the page is scrolled."
                            },
                            {
                                Question: "Write a CSS rule to make an element stick to the top of the viewport when scrolled past, but only after scrolling 50px down.",
                                Answer: "To make an element stick to the top of the viewport after scrolling 50px down, use position: sticky:"
                            },
                            {
                                Question: " How does the z-index property work with positioned elements?",
                                Answer: "The z-index property determines the stacking order of positioned elements. Elements with a higher z-index appear in front of those with a lower value. It only affects elements with a position other than static."
                            }
                        ],
                        type:"positions"
                    },
                    {
                        Questions: [
                            {
                                Question: "Explain the difference fixed positioning.",
                                Answer: "Static: This is the default positioning. Elements are positioned according to the normal flow of the document and are not affected by the top, bottom, left, or right properties. Relative: Elements are positioned relative to their normal position. The top, bottom, left, and right properties offset the element without affecting the layout of other elements. Absolute: Elements are removed from the normal document flow and positioned relative to the nearest positioned ancestor. If no such ancestor exists, they are positioned relative to the initial containing block. Fixed: Elements are removed from the normal document flow and positioned relative to the viewport, staying in the same position even when the page is scrolled."
                            },
                            {
                                Question: "Write a CSS rule to make an element stick to the top of the viewport when scrolled past, but only after scrolling 50px down.",
                                Answer: "To make an element stick to the top of the viewport after scrolling 50px down, use position: sticky:"
                            },
                            {
                                Question: " How does the z-index property work with positioned elements?",
                                Answer: "The z-index property determines the stacking order of positioned elements. Elements with a higher z-index appear in front of those with a lower value. It only affects elements with a position other than static."
                            }
                        ],
                        type:"display"

                    },
                    {
                        Questions: [
                            {
                                Question: "Explain the difference between static, relative, absolute, and fixed positioning.",
                                Answer: "Static: This is the default positioning. Elements are positioned according to the normal flow of the document and are not affected by the top, bottom, left, or right properties. Relative: Elements are positioned relative to their normal position. The top, bottom, left, and right properties offset the element without affecting the layout of other elements. Absolute: Elements are removed from the normal document flow and positioned relative to the nearest positioned ancestor. If no such ancestor exists, they are positioned relative to the initial containing block. Fixed: Elements are removed from the normal document flow and positioned relative to the viewport, staying in the same position even when the page is scrolled."
                            },
                            {
                                Question: "Write a CSS rule to make an element stick to the top of the viewport when scrolled past, but only after scrolling 50px down.",
                                Answer: "To make an element stick to the top of the viewport after scrolling 50px down, use position: sticky:"
                            },
                            {
                                Question: " How does the z-index property work with positioned elements?",
                                Answer: "The z-index property determines the stacking order of positioned elements. Elements with a higher z-index appear in front of those with a lower value. It only affects elements with a position other than static."
                            }
                        ],
                        type:"boxmodel"
                    }
                ]
            })
        },
        routes() {
            this.namespace = "api/codeccharya"
            this.get("/", (schema, request) => {
                console.log(schema)
                return schema.cssFiles.all()
            })
        }
    })
    return server;
}