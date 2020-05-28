import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import FormContainer from "../FormContainer";

const localVue = createLocalVue();

localVue.use(Vuex);

xdescribe("FormContainer shallowed", () => {
  const makeStore = (props) => {
    return new Vuex.Store({ modules: { form: { ...props } } });
  };

  it("should call actions FormContainer and render container, form and sidebar", () => {
    const actions = {
      setFields: jest.fn(),
      setInitialValues: jest.fn(),
      updateId: jest.fn(),
      setValidations: jest.fn(),
    };
    const getters = { isCleanForm: jest.fn() };

    const store = makeStore({
      namespaced: true,
      state: {
        fields: {},
        isEditing: false,
        validations: {},
      },
      getters,
      actions,
    });

    const formContainer = shallowMount(FormContainer, {
      store,
      localVue,
      propsData: {
        id: "1",
        type: "Person",
      },
    });

    const formContainerElement = formContainer.get("#form-container");

    expect(actions.setFields).toHaveBeenCalled();
    expect(actions.setInitialValues).toHaveBeenCalled();
    expect(actions.updateId).toHaveBeenCalled();
    expect(actions.setValidations).toHaveBeenCalled();

    expect(formContainerElement.exists()).toBe(true);

    expect(formContainer.get("#form-content").exists()).toBe(true);

    expect(formContainer.get("#form-sidebar").exists()).toBe(true);
  });
});
