const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/add-location",
        component: () => import("pages/AddLocation.vue"),
      },
      {
        path: "/location-details",
        name: "locationDetails",
        component: () => import("pages/LocationDetails.vue")
      },
      {
        path:"/callback",
        component: () => import("src/pages/CallbackPage.vue")
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
