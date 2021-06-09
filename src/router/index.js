import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import CashFlow from '../views/CashFlow.vue'
import Budgets from '../views/Budgets.vue'
import Debts from '../views/Debts.vue'
import Savings from '../views/Savings.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Dashboard,
        meta: {
            allowAnonymous: false
        }
    },
    {
        path: '/cashflow',
        component: CashFlow,
        meta: {
            allowAnonymous: false
        }
    },
    {
        path: '/budgets',
        component: Budgets,
        meta: {
            allowAnonymous: false
        }
    },
    {
        path: '/debts',
        component: Debts,
        meta: {
            allowAnonymous: false
        }
    },
    {
        path: '/savings',
        component: Savings,
        meta: {
            allowAnonymous: false
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            allowAnonymous: true,
            loggedOut: true
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {

    // store.commit('setError', null);
    // store.commit('setSuccess', '');

    if(to.meta.loggedOut && store.getters.isLoggedIn) {
        next({
            path: '/',
            query: { redirect: to.fullPath }
        });
    }
    // not allowed for anyone && user isnt logged in
    if (!to.meta.allowAnonymous && !store.getters.isLoggedIn) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        });
    }
    else {
        next();
    }  
});

export default router
