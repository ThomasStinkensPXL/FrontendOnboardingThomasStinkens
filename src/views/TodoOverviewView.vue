<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
	<p>Overview!</p>
	<p>{{ t('message.the_world') }}</p>
</template>
