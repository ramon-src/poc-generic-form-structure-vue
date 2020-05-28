Montar um form

Adicionar rota de Address {

    - Adicionar em router/index
        {
            path: "/address",
            name: "Address",
            component: FormContainer,
            props: () => ({ type: FORMS.ADDRESS }),
        },

        {
            path: "/address/:id",
            name: "Address",
            component: FormContainer,
            props: (route) => ({ type: FORMS.ADDRESS, id: route.params.id }),
        },

    - Adicionar Address no ENUM em views/Form/FormFactory
        import Address from "./Address/properties";

        ADDRESS: "Address",
        [FORMS.ADDRESS]: Address,
}

Adicionar rota em App {
    <router-link to="/address">Address</router-link>
    <router-link to="/address/1">Address edit</router-link>
}

Copiar em views/Forms a pasta de Person {
  
 - Renomear para Address

    - Adicionar em properties/initialValues:
        cep: "",
        address: "",
        number: ""

    - Adicionar em properties/validations:
        cep: {
            required,
        },
        address: {
            required,
        },
        number: {
            numeric,
            required,
            between: between(1, 10000),
        },

    - Remover properties/onEdit
    - Remover onEdit de properties/index
    - Remover properties/formatters

    - Remover formatOnSubmit no arquivo properties/onSubmit

    - Alterar getById no arquivo properties/fetchData para:
        (id) => {
            return new Promise((resolve) =>
                setTimeout(() => {
                    resolve({
                        id,
                        address: "Oscar pereira",
                        number: 1000,
                        cep: "90640-070",
                    });
                }, 20)
            );
        }

    - Alterar componentes em Form.vue para
        <CInput label="CEP" name="cep" type="zip" required />
        <CInput label="Address" name="address" />
        <CInput label="Number" name="number" type="number" />

}
