<script lang="ts">
	import { page } from '$app/stores';
	import { resetTimer } from '$lib/config';
	export let tabsArr: { link: string; name: string; targetParam: any }[];
	const pathName = $page.url.pathname.split('/');
</script>

<div id="tabMenuBox">
	<div class="tabMenuBox btn-group variant-ringed">
		{#each tabsArr as tab}
			<a
				href={isNaN(tab.targetParam) ? '?' + tab.targetParam + '=' + tab.link : tab.link}
				class="btn {(isNaN(tab.targetParam) &&
					tab.link === $page.url.searchParams.get(tab.targetParam)) ||
				(!isNaN(tab.targetParam) && tab.link === pathName[tab.targetParam])
					? 'variant-ghost-tertiary'
					: ''}"
				on:click={resetTimer}
				>{tab.name}
			</a>
		{/each}
	</div>
</div>

<style>
	#tabMenuBox {
		width: 100%;
		display: flex;
		justify-content: end;
		margin-bottom: 15px;
	}
</style>
