<script lang="ts">
	import { pbImgApi, addCommas } from '$lib/config';
	import { getCoinsList } from '$lib/coins';
	import { onMount } from 'svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	let siteCoinsList: any[];
	onMount(async () => {
		siteCoinsList = await getCoinsList();
	});
	// Example.svelte
	// import { useQuery } from '@sveltestack/svelte-query';
	// const queryResult = useQuery('repoData', () =>
	// 	fetch('https://api.github.com/repos/SvelteStack/svelte-query').then((res) => res.json())
	// );
</script>

<!-- {#if $queryResult.isLoading}
	<span>Loading...</span>
{:else if $queryResult.error}
	<span>An error has occurred: {$queryResult.error.message}</span>
{:else}
	<div>
		<h1>{$queryResult.data.name}</h1>
		<p>{$queryResult.data.description}</p>
		<strong>👀 {$queryResult.data.subscribers_count}</strong>{' '}
		<strong>✨ {$queryResult.data.stargazers_count}</strong>{' '}
		<strong>🍴 {$queryResult.data.forks_count}</strong>
	</div>
{/if} -->

<div id="coinChart-box" />
{#if siteCoinsList}
	{#each siteCoinsList as siteCoin, i}
		<aside class="alert variant-ghost mb-4 d-flex justify-between">
			<div class="d-flex">
				<Avatar
					src={pbImgApi + 'coins/' + siteCoin.id + '/' + siteCoin.logo}
					width="w-12"
					rounded="rounded-full"
				/>
				<h3 class="ms-3">
					{siteCoin.name.includes('_')
						? siteCoin.name.substring(0, siteCoin.name.indexOf('_'))
						: siteCoin.name}
				</h3>
				{#if siteCoin.name.includes('_')}
					<div class="ms-2">
						<span class="badge variant-filled-surface"
							>{siteCoin.name.substring(siteCoin.name.indexOf('_') + 1)}</span
						>
					</div>
				{/if}
			</div>
			<div class="alert-message text-end">
				<h2
					class="coin-price coin-{siteCoin.name.includes('_')
						? siteCoin.name.substring(0, siteCoin.name.indexOf('_'))
						: siteCoin.name} text-tertiary-500"
				>
					<!-- {addCommas(siteCoin.price)} -->Loading...
				</h2>
			</div>
			<div class="alert-actions d-flex justify-end">
				<div class="ms-4">
					<a
						href="./market/coin/request?tr_type=sell&coin={siteCoin.name}"
						class="btn variant-ringed-success">SELL</a
					>
					<a
						href="./market/coin/request?tr_type=buy&coin={siteCoin.name}"
						class="btn variant-ringed-warning ms-2">BUY</a
					>
				</div>
			</div>
		</aside>
	{/each}
{/if}

<style>
	.d-flex {
		display: flex;
		align-items: center;
	}
	.justify-between {
		justify-content: space-between;
	}
	.justify-end {
		justify-content: flex-end;
	}
	@media (max-width: 1020.98px) {
	}
</style>
