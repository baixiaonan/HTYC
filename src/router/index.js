import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Info from '@/views/info'
import Suggestion from '@/views/suggestion'
import Character from '@/views/character'
import TestResult from '@/views/testresult'
import Major from '@/views/major'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/suggestion',
      name: 'suggestion',
      component: Suggestion
    },
    {
      path: '/suggestion',
      name: 'suggestion',
      component: Suggestion
    },
    {
      path: '/Character',
      name: 'character',
      component: Character
    },
    {
      path: '/testResult',
      name: 'testResult',
      component: TestResult
    },
    {
      path: '/major',
      name: 'major',
      component: Major
    }
  ]
})
