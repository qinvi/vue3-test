import { createRouter, createWebHistory } from 'vue-router'
import routeNames from '@router/routeName'
import HomeView from '@views/HomeView.vue'
import EmitView from '@views/EmitView.vue'
import FallthroughView from '@views/FallthroughView.vue'
import TransitionView from '@views/TransitionView.vue'
import SlotView from '@views/SlotView.vue'
import PropsDrilling from '@views/PropsDrillingView.vue'
import Destructure from '@views/DestructureView.vue'
import Computed from '@views/ComputedView.vue'
import Checkbox from '@views/CheckboxView.vue'
import Watch from '@views/WatchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: routeNames.home,
      component: HomeView
    },
    {
      path: `/${routeNames.about}`,
      name: routeNames.about,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@views/AboutView.vue')
    },
    {
      path: `/${routeNames.emit}`,
      name: routeNames.emit,
      component: EmitView
    },
    {
      path: `/${routeNames.fallthrough}`,
      name: routeNames.fallthrough,
      component: FallthroughView
    },
    {
      path: `/${routeNames.transition}`,
      name: routeNames.transition,
      component: TransitionView
    },
    {
      path: `/${routeNames.slot}`,
      name: routeNames.slot,
      component: SlotView
    },
    {
      path: `/${routeNames.propsdrilling}`,
      name: routeNames.propsdrilling,
      component: PropsDrilling
    },
    {
      path: `/${routeNames.destructure}`,
      name: routeNames.destructure,
      component: Destructure
    },
    {
      path: `/${routeNames.computed}`,
      name: routeNames.computed,
      component: Computed
    },
    {
      path: `/${routeNames.checkbox}`,
      name: routeNames.checkbox,
      component: Checkbox
    },
    {
      path: `/${routeNames.watch}`,
      name: routeNames.watch,
      component: Watch
    }
  ]
})

export default router
