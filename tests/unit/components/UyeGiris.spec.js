import {mount,config} from '@vue/test-utils'
import giris from '@/components/UyeGiris'

config.mocks["auth"] = {
    auth: {
        signInWithEmailAndPassword: () => {
            return Promise.resolve({});
        }
    }
};
config.mocks["$store"] = {
    getters: {
        ["user/getUser"]: "this getter was mocked"
    },
    commit: () => {
        return;
    }
};
describe("Login Tests", () => {
    const wrapper = mount(giris);
    it("There is a button of 'Giriş Yap'", () => {
        expect(wrapper.text()).toContain("Giriş Yap");
    });
    it("There is a 'Henüz üye değil misin? Üye Ol'", () => {
        expect(wrapper.text()).toContain("Henüz üye değil misin? Üye Ol");
    });


});
