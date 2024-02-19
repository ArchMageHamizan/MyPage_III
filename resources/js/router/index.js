import { createRouter,createWebHistory } from "vue-router";

import InvoiceIndex from '../components/invoices/index.vue';
import NotFound from '../components/NotFound.vue';

const routerPath=[
    {
        path:'/',
        component:InvoiceIndex
    },
    {
        path:'/:pathMatch(.*)*',
        component:NotFound
    }
]

const router=createRouter({
   history:createWebHistory(),
   routerPath
});

export default router;