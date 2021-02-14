// import React from "react"
// import Layout from "../../src/components/Layout/Layout.js"
// import SEO from "../../src/components/seo.js"
// import { graphql } from "gatsby"
// import "./styles/rules.module.css"

// const RulesPage = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`

//   return (
//     <Layout location={location} title={siteTitle}>
//       <SEO title="Rules" />
//       {/* <h2 className="header">Frequently Asked Questions</h2> */}
//       <div styleName="collapsedAccordian">
//         <svg xmlns="http://www.w3.org/2000/svg">
//           <symbol viewBox="0 0 24 24" id="expandMore">
//             <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
//             <path d="M0 0h24v24H0z" fill="none" />
//           </symbol>
//           <symbol viewBox="0 0 24 24" id="close">
//             <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
//             <path d="M0 0h24v24H0z" fill="none" />
//           </symbol>
//         </svg>
//       </div>
//       <section styleName="faqs">

//         {/* This is one box */}
//       <details open>
//         <summary> {/* Question goes here */}
//           Does this product have what I need?
//           <svg
//             styleName="controlIcon controlIconExpand"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#expandMore"
//             />
//           </svg>
//           <svg
//             styleName="controlIcon controlIconClose"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#close"
//             />
//           </svg>
//         </summary>
//         <p>Totally. Totally does.</p> {/* Answer goes here */}
//       </details>


//       <details>
//         <summary>
//           Can I use it all the time?
//           <svg
//             styleName="controlIcon controlIconExpand"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#expandMore"
//             />
//           </svg>
//           <svg
//             styleName="controlIcon controlIconClose"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#close"
//             />
//           </svg>
//         </summary>
//         <p>Of course you can, we won't stop you.</p>
//       </details>
//       <details>
//         <summary>
//           Are there any restrictions?
//           <svg
//             styleName="controlIcon controlIconExpand"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#expandMore"
//             />
//           </svg>
//           <svg
//             styleName="controlIcon controlIconClose"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#close"
//             />
//           </svg>
//         </summary>
//         <p>Only your imagination my friend. Go forth!</p>
//       </details>
//       <details>
//         <summary>
//           Are there any restrictions?
//           <svg
//             styleName="controlIcon controlIconExpand"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#expandMore"
//             />
//           </svg>
//           <svg
//             styleName="controlIcon controlIconClose"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#close"
//             />
//           </svg>
//         </summary>
//         <p>Only your imagination my friend. Go forth!</p>
//       </details>
//       <details>
//         <summary>
//           Are there any restrictions?
//           <svg
//             styleName="controlIcon controlIconExpand"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#expandMore"
//             />
//           </svg>
//           <svg
//             styleName="controlIcon controlIconClose"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#close"
//             />
//           </svg>
//         </summary>
//         <p>Only your imagination my friend. Go forth!</p>
//       </details>
//       <details>
//         <summary>
//           Are there any restrictions?
//           <svg
//             styleName="controlIcon controlIconExpand"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#expandMore"
//             />
//           </svg>
//           <svg
//             styleName="controlIcon controlIconClose"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#close"
//             />
//           </svg>
//         </summary>
//         <p>Only your imagination my friend. Go forth!</p>
//       </details>
//       <details>
//         <summary>
//           Are there any restrictions?
//           <svg
//             styleName="controlIcon controlIconExpand"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#expandMore"
//             />
//           </svg>
//           <svg
//             styleName="controlIcon controlIconClose"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#close"
//             />
//           </svg>
//         </summary>
//         <p>Only your imagination my friend. Go forth!</p>
//       </details>
//       <details>
//         <summary>
//           Are there any restrictions?
//           <svg
//             styleName="controlIcon controlIconExpand"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#expandMore"
//             />
//           </svg>
//           <svg
//             styleName="controlIcon controlIconClose"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#close"
//             />
//           </svg>
//         </summary>
//         <p>Only your imagination my friend. Go forth!</p>
//       </details>
//       <details>
//         <summary>
//           Are there any restrictions?
//           <svg
//             styleName="controlIcon controlIconExpand"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#expandMore"
//             />
//           </svg>
//           <svg
//             styleName="controlIcon controlIconClose"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#close"
//             />
//           </svg>
//         </summary>
//         <p>Only your imagination my friend. Go forth!</p>
//       </details>
//       <details>
//         <summary>
//           Are there any restrictions?
//           <svg
//             styleName="controlIcon controlIconExpand"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#expandMore"
//             />
//           </svg>
//           <svg
//             styleName="controlIcon controlIconClose"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#close"
//             />
//           </svg>
//         </summary>
//         <p>Only your imagination my friend. Go forth!</p>
//       </details>
//       <details>
//         <summary>
//           Are there any restrictions?
//           <svg
//             styleName="controlIcon controlIconExpand"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#expandMore"
//             />
//           </svg>
//           <svg
//             styleName="controlIcon controlIconClose"
//             width="24"
//             height="24"
//             role="presentation"
//           >
//             <use
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               xlinkHref="#close"
//             />
//           </svg>
//         </summary>
//         <p>Only your imagination my friend. Go forth!</p>
//       </details>
//       {" "}
      
//       </section>
      
//     </Layout>
//   )
// }

// export default RulesPage

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
