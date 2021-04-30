<template>
  <div class="profile">
    <h1>This is the profile page</h1>

    <div>
      <b-button v-b-toggle.collapse-1 variant="primary">Segunda-Feira</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <b-button v-b-toggle.collapse-1-inner size="sm">Tarefas</b-button>
          <b-collapse id="collapse-1-inner" class="mt-2">
            <b-card>tarefas nao existentes</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
<br>
    <div>
      <b-button v-b-toggle.collapse-2 variant="primary">Terça-Feira</b-button>
      <b-collapse id="collapse-2" class="mt-2">
        <b-card>
          <b-button v-b-toggle.collapse-2-inner size="sm">Tarefas</b-button>
          <b-collapse id="collapse-2-inner" class="mt-2">
            <b-card>tarefas nao existentes</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
<br>
    <div>
      <b-button v-b-toggle.collapse-3 variant="primary">Quarta-Feira</b-button>
      <b-collapse id="collapse-3" class="mt-2">
        <b-card>
          <b-button v-b-toggle.collapse-3-inner size="sm">Tarefas</b-button>
          <b-collapse id="collapse-3-inner" class="mt-2">
            <b-card>tarefas nao existentes</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
<br>
    <div>
      <b-button v-b-toggle.collapse-4 variant="primary">Quinta-Feira</b-button>
      <b-collapse id="collapse-4" class="mt-2">
        <b-card>
          <b-button v-b-toggle.collapse-4-inner size="sm">Tarefas</b-button>
          <b-collapse id="collapse-4-inner" class="mt-2">
            <b-card>tarefas nao existentes</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
<br>
    <div>
      <b-button v-b-toggle.collapse-5 variant="primary">Sexta-Feira</b-button>
      <b-collapse id="collapse-5" class="mt-2">
        <b-card>
          <b-button v-b-toggle.collapse-5-inner size="sm">Tarefas</b-button>
          <b-collapse id="collapse-5-inner" class="mt-2">
            <b-card>tarefas nao existentes</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
<br>
    <div>
      <b-button v-b-toggle.collapse-6 variant="primary">Sábado</b-button>
      <b-collapse id="collapse-6" class="mt-2">
        <b-card>
          <b-button v-b-toggle.collapse-6-inner size="sm">Tarefas</b-button>
          <b-collapse id="collapse-6-inner" class="mt-2">
            <b-card>tarefas nao existentes</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
<br>
    <div>
      <b-button v-b-toggle.collapse-7 variant="primary">Domingo</b-button>
      <b-collapse id="collapse-7" class="mt-2">
        <b-card>
          <b-button v-b-toggle.collapse-7-inner size="sm">Tarefas</b-button>
          <b-collapse id="collapse-7-inner" class="mt-2">
            <b-card>tarefas nao existentes</b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>


  </div>  
</template>

<script>
export default {
  name: "profile",
  components: {},
};
</script>