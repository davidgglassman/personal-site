<template>
  <div class="mt-8 h-auto w-full">
    <p>Want to get an email whenever a new blog post goes live?</p>

    <form novalidate @submit.prevent="submitEmail" class="flex-row-standard mt-2 gap-2">
      <input type="email" v-model="email" class="w-3/4 rounded-xl border border-grey-400 p-2 dark:border-grey-700 dark:bg-grey-900 dark:active:border-grey-700" placeholder="Enter your email" @input="emailChanged" />
      <button type="submit" class="btn h-12 w-1/4 rounded-xl">Subscribe</button>
    </form>

    <div v-show="showError" class="mt-2 text-base text-primary-2">{{ emailError }}</div>
    <div v-show="showSuccess" class="mt-2 text-base text-accent-1">Email submitted successfully. Thanks for signing up!</div>
  </div>
</template>

<script setup>
// ------------------------ Imports

// -------- Internal

// -------- Node

// -------- Store

// ------------------------ Props

// ------------------------ Variables

const email = ref("");
const emailError = ref("");

const showSuccess = ref(false);
const showError = ref(false);

const client = useSupabaseClient();

// ------------------------ Computed

// ------------------------ Functions

const submitEmail = async () => {
  if (email.value) {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (email.value && !regex.test(email.value)) {
      setError("Invalid email address");
      return;
    } else {
      setError(null);
    }

    const { error } = await client.from("subscribers").insert([{ email: email.value }]);

    if (error) {
      setError(`Error submitting email: ${error.message}`);
      return;
    }

    setSuccess(true);
  } else {
    setError("Email address cannot be empty");
    return;
  }
};

const setError = (error) => {
  emailError.value = error;

  if (error) {
    showError.value = true;
    setSuccess(false);
  } else {
    showError.value = false;
  }
};

const setSuccess = (state) => {
  showSuccess.value = state;

  if (state) {
    setError(null);
  }
};

const emailChanged = () => {
  setError(null);
  setSuccess(false);
};
// ------------------------ Events

// -------- Lifecycle Hooks

// -------- Watch
</script>

<style scoped></style>
