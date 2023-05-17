import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://localhost:8090');
export const siteDomain = 'fynx.cc'; //서브도메인 적용시 로직 추가할것
export const pbImgApi = 'http://localhost:8090/api/files/';
pb.autoCancellation(false);
export const getSiteInfo = async (fld?: string) => {
	const site = await pb.collection('sites').getFirstListItem('domain="' + siteDomain + '"');
	return fld ? site[fld] : site;
};
export const getSiteLogoSrc = async () => {
	const siteId = await getSiteInfo('id');
	const siteLogo = await getSiteInfo('logo');
	return pbImgApi + 'sites/' + siteId + '/' + siteLogo;
};
export const getMenuList = async () => {
	const siteId = await getSiteInfo('id');
	const siteMenu = await pb.collection('siteMenu').getFullList({
		sort: 'code',
		filter: 'site = "' + siteId + '" && active = true',
		expand: 'menu'
	});
	return siteMenu;
};
export const getCoinsList = async () => {
	const siteId = await getSiteInfo('id');
	const siteCoins = await pb.collection('siteCoins').getFullList({
		sort: 'code',
		filter: 'site = "' + siteId + '" && active = true',
		expand: 'coin'
	});
	return siteCoins;
};
export const addCommas = (num: number): string => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
