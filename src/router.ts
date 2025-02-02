// import { createHashRouter } from "react-router";

// export const router = createHashRouter([
//     {
//       path: '/',
//       children: [
//         // {
//         //   path: '/',
//         //   element: <Navigate replace to="/page/0" />
//         // },
//         // {
//         //   path: '/main',
//         //   element: <Navigate replace to="/page/0" />
//         // },
//         {
//           path: '/page/:request/:pageNumber',
//           element: <App/>,
//           children: [
//             {
//               path: '/page/:request/:pageNumber/animal/:uid',
//               element:   <AnimalPage/>,
//             },
//           ]
//         },
//         {
//           path: '/page/:pageNumber',
//           element: <App/>,
//           children: [
//             {
//               path: '/page/:pageNumber/animal/:uid',
//               element: <AnimalPage/>,
//             },
//           ]
//         },
//         {
//           path: '*',
//           element: <ErrorPage/>,
//         },
//       ],
//     },
//   ]);
