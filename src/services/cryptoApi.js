import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
	'x-rapidapi-key': '3a6999e77fmsh51d49f10884a42dp1a7960jsn548dddb45933',
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseUrl='https://coinranking1.p.rapidapi.com';

const createRequest=(url)=>({url,headers:cryptoApiHeaders});

export const cryptoApi=createApi({
	reducerPath:'cryptoApi',
	baseQuery:fetchBaseQuery({baseUrl}),
	endpoints:(builer)=>({
		getCryptos:builer.query({
			query:(count)=>createRequest(`/coins?limit=${count}`)
		})
	})
});

export const{
	useGetCryptosQuery,
}=cryptoApi;