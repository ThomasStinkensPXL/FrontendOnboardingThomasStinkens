<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
	<p>{{ t('shared.empty') }}</p>
</template>
