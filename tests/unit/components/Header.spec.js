import { mount } from "@vue/test-utils";

import header_Menu from "../../../src/components/Header";

describe("header_Menu.vue", () => {
    let wrapper = mount(header_Menu);
    it("There is a AVVA X MURATBOZ", () => {
        expect(wrapper.text()).toContain("AVVA X MURATBOZ");
    });
    it("There is a GİYİM", () => {
        expect(wrapper.text()).toContain("GİYİM");
    });
    it("There is a AYAKKABI", () => {
        expect(wrapper.text()).toContain("AYAKKABI");
    });
    it("There is a AKSESUARP", () => {
        expect(wrapper.text()).toContain("AKSESUAR");
    });
    it("There is a SONBAHAR&KIŞ 21/22", () => {
        expect(wrapper.text()).toContain("SONBAHAR&KIŞ 21/22");
    });
    it("There is a OUTLET", () => {
        expect(wrapper.text()).toContain("OUTLET");
    });
    it("There is a KAMPANYALAR", () => {
        expect(wrapper.text()).toContain("KAMPANYALAR");
    });
});
