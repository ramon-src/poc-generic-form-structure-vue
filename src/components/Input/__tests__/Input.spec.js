import { createLocalVue, mount } from "@vue/test-utils";
import Vuex from "vuex";
import dictionary from "@/views/Forms/properties/dictionary";
import Input from "../Input";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Input shallowed", () => {
  const makeStore = (props) => {
    return new Vuex.Store({ modules: { form: { ...props } } });
  };

  it("should render label with required asterisc when Input is required", () => {
    const actionMethods = { updateFieldValue: jest.fn() };
    const age = {
      $dirty: true,
      $params: {
        numeric: { type: "numeric" },
      },
      numeric: false,
      $touch: jest.fn(),
    };

    const store = makeStore({
      namespaced: true,
      state: {
        fields: {
          age: 15,
        },
        isEditing: false,
        validations: {
          fields: {
            age,
          },
        },
      },
      actions: actionMethods,
    });

    const input = mount(Input, {
      store,
      localVue,
      propsData: {
        label: "Age",
        name: "age",
        type: "number",
      },
    });
    const inputElement = input.get(".custom-input");

    expect(input.get(".input-label").text()).toBe("Age");

    expect(inputElement.attributes("placeholder")).toBe("Digite aqui");

    expect(inputElement.element.value).toBe("15");

    expect(input.get(".input-validation").text()).toBe(
      dictionary.pt.validations.numeric
    );

    inputElement.element.value = "18";
    inputElement.trigger("input");

    expect(actionMethods.updateFieldValue).toHaveBeenCalled();

    expect(input.emitted().input[0]).toEqual(["18"]);
  });
});
