import { pb, getSiteInfo } from '$lib/config';

export const getCoinInfo = async (tbl: string, fld: string, value: string | number) => {
	const record = await pb.collection(tbl).getFirstListItem(fld + '="' + value + '"');
	return record;
};
export interface CoinsArr {
	name: string;
	subName: string;
	logo: string;
	price: number;
	id: string;
}
export const siteCoinsArr: CoinsArr[] = [];
export const setSiteCoinsArr = async () => {
	try {
		const siteId = await getSiteInfo('id');
		const siteCoins = await pb.collection('siteCoins').getFullList({
			sort: 'code',
			filter: 'site = "' + siteId + '" && active = true'
		});
		for (const coin of siteCoins) {
			const coins = await pb.collection('coins').getFirstListItem('id="' + coin.coin + '"');
			const coinsName = coins.name.split('_');
			siteCoinsArr.push({
				name: coinsName[0],
				subName: coinsName[1],
				logo: coins.id + '/' + coins.logo,
				price: coins.price,
				id: coins.id
			});
		}
	} catch (error) {
		console.error(error);
	}
};
export const updateLiveCoinsPrice = async (coinName: string) => {
	try {
		const _coinName = coinName.split('_');
		const api_usdt = 'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD';
		const api_coins = 'https://api.bithumb.com/public/orderbook/' + coinName;
		const api_url = _coinName[0] === 'USDT' ? api_usdt : api_coins;
		const response = await fetch(api_url);
		const data = await response.json();
		// const price = coinName === 'USDT' ? data[0]['basePrice'] : data['data']['bids'][0]['price'];
		const price = data[0]['basePrice'];
		const coinsInfo = await getCoinInfo('coins', 'name', coinName);
		const coinInfo = await getCoinInfo('siteCoins', 'coin', coinsInfo.id);
		if (coinInfo.price !== price) {
			await pb.collection('siteCoins').update(coinInfo.id, { price: price });
			const data = {
				name: coinName,
				price: price
			};
			await pb.collection('coinPriceLog').create(data);
		}
	} catch (error) {
		console.log(error);
	}
};

// 주기적으로 코인시세 업데이트 함수 실행
const updateInterval = 10000;
// setInterval(setSiteCoinsLog, updateInterval);
