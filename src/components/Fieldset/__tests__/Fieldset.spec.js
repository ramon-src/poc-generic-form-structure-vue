import { mount, shallowMount } from "@vue/test-utils";
import dictionary from "@/views/Forms/properties/dictionary";
import Fieldset from "../Fieldset";

describe("Fieldset shallowed", () => {
  it("should render label with required asterisc when fieldset is required", () => {
    const fieldset = shallowMount(Fieldset, {
      propsData: {
        label: "Some input",
        name: "some input",
        required: true,
        isEditing: false,
      },
    });
    expect(fieldset.text()).toMatch("Some input *");
  });

  it("should render label without required asterisc when fieldset is not required", () => {
    const fieldset = shallowMount(Fieldset, {
      propsData: {
        label: "Some input",
        name: "some input",
        isEditing: false,
      },
    });
    expect(fieldset.text()).toMatch("Some input");
  });
});

describe("Fieldset integration", () => {
  it("should show first validation message when has validation", () => {
    const fieldset = mount(Fieldset, {
      propsData: {
        label: "Some input",
        name: "some input",
        isEditing: false,
        validations: {
          $dirty: true,
          $params: {
            alpha: { type: "alpha" },
            required: { type: "required" },
          },
          alpha: false,
          required: false,
        },
      },
    });

    expect(fieldset.get(".input-validation").text()).toBe(
      dictionary.pt.validations.alpha
    );
  });

  it("should not show validation message when validation is not dirty", () => {
    const fieldset = mount(Fieldset, {
      propsData: {
        label: "Some input",
        name: "some input",
        isEditing: false,
        validations: {
          $dirty: false,
          $params: {
            alpha: { type: "alpha" },
            required: { type: "required" },
          },
          alpha: false,
          required: false,
        },
      },
    });

    expect(fieldset.get(".input-validation").text()).toBe("");
  });
});
