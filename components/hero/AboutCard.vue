<template>
  <CardTemplate>
    <template #header>
      <h3>About</h3>
    </template>
    <template #content>
      <div class="flex w-full flex-col items-start justify-start gap-4">
        <div class="flex flex-row items-center justify-start gap-6">
          <NuxtImg
            src="/profile.jpg"
            class="size-12 rounded-full" />

          <h2 class="text-3xl font-bold text-gray-600 dark:text-gray-300">David Glassman</h2>
        </div>

        <div class="flex flex-col items-center justify-center gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, perspiciatis fugiat
            corrupti magni.
          </p>

          <p>
            Natus culpa veritatis accusamus earum quae ea est at, ipsum esse ut nesciunt odit, totam
            rerum quia.
          </p>
        </div>

        <div class="flex w-full">
          <div class="flex w-1/2 items-center justify-start gap-3">
            <SocialButton
              icon-name="mdi:email-outline"
              href="mailto:davidglassman@fastmail.com" />

            <SocialButton
              icon-name="mdi:linkedin"
              href="https://linkedin.com/in/davidglassman29/" />

            <SocialButton
              icon-name="mdi:instagram"
              href="https://instagram.com/davidgglassman/" />

            <SocialButton
              icon-name="mdi:github"
              href="https://github.com/davidgglassman" />
          </div>

          <div class="flex w-1/2 items-center justify-end gap-3">
            <ClientOnly>
              <ThemeButton
                icon-name="fluent-mdl2:system"
                icon-size="size-7"
                :is-active="theme === 'system'"
                @set-theme="setTheme('system')" />

              <ThemeButton
                icon-name="gravity-ui:sun"
                icon-size="size-6"
                :is-active="theme === 'light'"
                @set-theme="setTheme('light')" />

              <ThemeButton
                icon-name="solar:moon-line-duotone"
                icon-size="size-6"
                :is-active="theme === 'dark'"
                @set-theme="setTheme('dark')" />
            </ClientOnly>
          </div>
        </div>
      </div>
    </template>
  </CardTemplate>
</template>

<script setup>
import { useTheme } from "~/composables/useTheme";

const { theme, setTheme } = useTheme();
</script>

<style scoped></style>
