<template>
  <ClientOnly>
    <CardTemplate>
      <template #header>
        <h3>Theme</h3>
      </template>

      <template #content>
        <div class="flex h-full w-full items-center justify-center gap-3">
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
        </div>
      </template>
    </CardTemplate>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useTheme } from "~/composables/useTheme";

const { theme, setTheme } = useTheme();
</script>
