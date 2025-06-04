import {
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import Layout from './components/Layout'
import CleaningSchedule from './CleaningSchedule'
import DesignTasks from './DesignTasks'
import SocialTasks from './SocialTasks'
import OpsTasks from './OpsTasks'
import CalendarPage from './CalendarPage'
import LinksPage from './LinksPage'
import AdminPage from './AdminPage'

const rootRoute = createRootRoute({ component: Layout })

const cleaningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: CleaningSchedule,
})
const designRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'design',
  component: DesignTasks,
})
const socialRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'social',
  component: SocialTasks,
})
const opsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'ops',
  component: OpsTasks,
})
const calendarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'calendar',
  component: CalendarPage,
})
const linksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'links',
  component: LinksPage,
})
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'admin',
  component: AdminPage,
})

const routeTree = rootRoute.addChildren([
  cleaningRoute,
  designRoute,
  socialRoute,
  opsRoute,
  calendarRoute,
  linksRoute,
  adminRoute,
])

const router = createRouter({ routeTree })
export default function AppRouter() {
  return <RouterProvider router={router} />
}
