<template>
  <div>
    <CInput label="Name" name="name" required />
    <CInput label="Second name" name="secondName" required />
    <CInput label="Age" name="age" type="number" />
    <CInput label="CPF" name="cpf" type="cpf" />
    <CInput label="Bio" name="bio" type="textarea" />
  </div>
</template>

<script>
import CInput from "@/components/Input/Input";

export default {
  components: { CInput },
};
</script>
