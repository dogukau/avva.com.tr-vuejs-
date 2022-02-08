import {mount} from '@vue/test-utils'
import Uyelik from '@/components/Uyelik'

describe('UyeGiris.vue', () => {
    test('snapshot', () => {
        const wrapper = mount(Uyelik)
        expect(wrapper).toMatchSnapshot()
    })
})
