import {
  mount, createLocalVue, shallowMount
} from '@vue/test-utils'
import Vuex from 'vuex'
import Page from '@/components/Page.vue'
import {
  createRenderer
} from 'vue-server-renderer'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('List.vue', () => {
  it('matches snapshop shallow mount', () => {
    const renderer = createRenderer()
    const wrapper = shallowMount(Page, { localVue })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })

  it('matches snapshot mount', () => {
    const renderer = createRenderer()
    const wrapper = mount(Page, { localVue })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
