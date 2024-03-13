import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VocabList from '../views/VocabularyList.vue'
import Quiz from '../views/VocabularyQuiz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/vocabulary/:opt/:page',
      name: 'vocabulary-level',
      component: VocabList
    },
    {
      path: '/vocabulary/:opt/:word/:page',
      name: 'vocabulary-level',
      component: VocabList
    },
    {
      path: '/quiz/',
      name: 'quiz',
      component: Quiz
    }
  ]
})

export default router
