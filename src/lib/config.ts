import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';
export const trType = writable('');
export const pbPort = 'http://localhost:8090';
export const pbAPI = pbPort + '/api/collections/';
export const pb = new PocketBase(pbPort);
export const siteDomain = 'fynx.cc'; //서브도메인 적용시 로직 추가할것
export const pbImgApi = pbPort + '/api/files/';
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
	const siteMenu = await pb.collection('menus').getFullList({
		sort: 'code',
		filter: 'active = true && code < 100'
	});
	return siteMenu;
};
export const getUserInfo = async (id: string) => {
	const response = await fetch(pbAPI + `users/records/${id}`);
	return await response.json();
};
export const getCoinInfo = async (id: string) => {
	const response = await fetch(pbAPI + `coins/records/${id}`);
	return await response.json();
};
export const resetTimer = (): void => {
	document.getElementById('btnTimer')?.click();
};
export const addCommas = (num: number): string => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
